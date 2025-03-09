import React, { useEffect, useState } from 'react'
import styles from './SearchModal.module.css'
import Input from '../../common/Input/Input'
import closeIcon from '../../../assets/svg/close-icon.svg'
import ChatListItem from '../../ChatListItem/ChatListItem';

function SearchModal({ onClose }: any) {

    const [query, setQuery] = useState("");
    const [searchedUsersList, setSearchedUsersList] = useState<number[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    useEffect(() => {
        setIsSearching(true)
        let arr = [1, 2, 3]
        if (query.startsWith('r')) {
            setTimeout(() => {
                setSearchedUsersList(arr);
                setIsSearching(false)
            }, 400);
        }
        else {
            setTimeout(() => {
                setSearchedUsersList([]);
                setIsSearching(false)
            }, 400);
        }
    }, [query])

    return (
        <div className={styles.main_container}>
            <div className={styles.title_and_icon}>
                <div className={styles.title}>Search Users</div>
                <div className={styles.closeIconContainer} onClick={onClose}>
                    <img className={styles.closeIcon} src={closeIcon} alt="Close Icon" />
                </div>
            </div>
            <div className={styles.input_and_name_container}>
                <div className={styles.input_container}>
                    <Input
                        type="text"
                        placeholder='Enter user name or email...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                {/* <div className={styles.btn_container}>
                    <Button label="Go" type="reset" />
                </div> */}
            </div>
            <div className={styles.search_container}>
                {(query.length > 0) ?
                    <>
                        {
                            isSearching ?
                                <div className={styles.searching_container}>
                                    {/* <img className={styles.searchUserIcon} src={searchUserIcon} alt="Search User Icon" /> */}
                                    <div className={styles.caption}>Searching...</div>
                                </div>
                                :
                                <>
                                    {
                                        (searchedUsersList.length > 0) ?
                                            <div className={styles.user_list_container}>
                                                <ChatListItem />
                                            </div>
                                            :
                                            <div className={styles.empty_list_container}>
                                                {/* <img className={styles.emptyStateIcon} src={emptyStateIcon} alt="No searches found" /> */}
                                                <div className={styles.caption}>No Searches Found</div>
                                            </div>
                                    }
                                </>
                        }
                    </>
                    :
                    <>
                        {searchedUsersList.length === 0 &&
                            <div className={styles.empty_list_container}>
                                {/* <img className={styles.startSearchIcon} src={startSearchIcon} alt="Search User Icon" /> */}
                                <div className={styles.caption}>Start Searching</div>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default SearchModal
