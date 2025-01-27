import React, { useEffect, useState } from 'react';
import { db } from './../../App';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

function Queries() {
    const [data, setData] = useState([]);

    // Search & Filter states
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    const repliedstatus = async (id) => {
        await setDoc(doc(db, 'queries', id), { replied: true }, { merge: true });

        // Update state immutably
        setData((prevData) =>
            prevData.map((query) =>
                query.id === id ? { ...query, replied: true } : query
            )
        );
    };

    useEffect(() => {
        const getdata = async () => {
            const querysnapshot = await getDocs(collection(db, 'queries'));
            const queries = [];
            querysnapshot.forEach((docItem) => {
                const createdAt = docItem.data().createdAt.toDate();
                const formattedDate = createdAt.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                });               
                console.log(formattedDate)
                queries.push({
                    ...docItem.data(),
                    createdAt: formattedDate,
                    id: docItem.id,
                });
            });
            setData(queries);
        };
        getdata();
    }, []);

    // Filter and search logic
    const filteredData = data
        // 1) Match search text in multiple fields, including createdAt
        .filter((item) => {
            const combined = (
                item.name +
                item.email +
                item.mobile +
                item.college +
                item.question +
                (item.createdAt || '') // Include createdAt for search
            ).toLowerCase();
            return combined.includes(searchText.toLowerCase());
        })
        // 2) Filter by replied status if needed
        .filter((item) => {
            if (filterStatus === 'All') return true;
            if (filterStatus === 'Replied') return item.replied === true;
            if (filterStatus === 'Not Replied') return item.replied === false;
            return true;
        });

    // Inline styling
    const styles = {
        container: {
            margin: '30px',
            marginTop: '90px',
            color: '#ccc',
        },
        controls: {
            display: 'flex',
            width: '100%',         // Ensures full width
            gap: '10px',
            marginBottom: '20px',
        },
        searchContainer: {
            flex: '7',             // 7 parts out of total 10
        },
        filterContainer: {
            flex: '3',             // 3 parts out of total 10
        },
        searchInput: {
            width: '100%',
            padding: '6px 10px',
            borderRadius: '4px',
            border: '1px solid #555',
            backgroundColor: '#1e1e1e',
            color: '#ccc',
        },
        selectFilter: {
            width: '100%',
            padding: '6px 10px',
            borderRadius: '4px',
            border: '1px solid #555',
            backgroundColor: '#1e1e1e',
            color: '#ccc',
        },
        cardsWrapper: {
            height: '60vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '20px',
            padding: '10px',
            borderRadius: '8px',
        },
        card: {
            backgroundColor: '#1e1e1e',
            border: '1px solid #2f2f2f',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
            width: '100%',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            borderBottom: '1px solid #444',
            paddingBottom: '10px',
        },
        row: {
            display: 'flex',
            margin: '8px 0',
        },
        label: {
            minWidth: '90px',
            fontWeight: 'bold',
            color: '#8ae686',
            textAlign: 'left',
        },
        value: {
            flex: '1',
            color: '#ccc',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
        },
        repliedStatus: {
            color: 'green',
            fontWeight: 'bold',
        },
        notRepliedStatus: {
            color: 'red',
            fontWeight: 'bold',
        },
        actionButton: {
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            color: '#fff',
            marginTop: '15px',
        },
        repliedButtonDisabled: {
            backgroundColor: 'grey',
            cursor: 'not-allowed',
        },
        repliedButtonActive: {
            backgroundColor: 'var(--fg-green)',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            {/* Title */}
            <div className="titley" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Queries
            </div>

            {/* Search & Filter Controls */}
            <div style={styles.controls}>
                {/* Search field takes 70% */}
                <div style={styles.searchContainer}>
                    <input
                        type="text"
                        style={styles.searchInput}
                        placeholder="Search queries..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                {/* Filter select takes 30% */}
                <div style={styles.filterContainer}>
                    <select
                        style={styles.selectFilter}
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Replied">Replied</option>
                        <option value="Not Replied">Not Replied</option>
                    </select>
                </div>
            </div>

            {/* Cards Wrapper (Scrollable) */}
            <div className="descriptiony" style={styles.cardsWrapper}>
                {filteredData.length ? (
                    filteredData.map((query, index) => (
                        <div key={query.id} style={styles.card}>
                            {/* Card Header */}
                            <div style={styles.header}>
                                <div>
                                    <span className="highlight" style={styles.label}> # </span>
                                    {index + 1}
                                </div>
                                {/* Display "Replied" or "Not Replied" on the right */}
                                <div>
                                    {query.replied ? (
                                        <span style={styles.repliedStatus}>Replied</span>
                                    ) : (
                                        <span style={styles.notRepliedStatus}>Not Replied</span>
                                    )}
                                </div>
                            </div>

                            {/* Name row */}
                            <div style={styles.row}>
                                <div style={styles.label}>Name</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>{query.name}</div>
                            </div>

                            {/* Email row */}
                            <div style={styles.row}>
                                <div style={styles.label}>Email</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>{query.email}</div>
                            </div>

                            {/* Mobile row */}
                            <div style={styles.row}>
                                <div style={styles.label}>Mobile</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>{query.mobile}</div>
                            </div>

                            {/* College row */}
                            <div style={styles.row}>
                                <div style={styles.label}>College</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>{query.college}</div>
                            </div>

                            {/* Question row */}
                            <div style={styles.row}>
                                <div style={styles.label}>Question</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>{query.question}</div>
                            </div>

                            {/* Created At row */}
                            <div style={styles.row}>
                                <div style={styles.label}>Created At</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div style={styles.value}>
                                    {query.createdAt}
                                </div>
                            </div>

                            {/* Action Button */}
                            {query.replied ? (
                                <button
                                    style={{
                                        ...styles.actionButton,
                                        ...styles.repliedButtonDisabled,
                                    }}
                                    disabled
                                >
                                    Replied
                                </button>
                            ) : (
                                <button
                                    style={{
                                        ...styles.actionButton,
                                        ...styles.repliedButtonActive,
                                    }}
                                    onClick={() => repliedstatus(query.id)}
                                >
                                    Mark as Replied
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        No matching queries found.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Queries;
