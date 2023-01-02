export default function NavFilter({setFiltered}){
    return(
        <ul className="ul-filters">
            <li className="li-filter selected" onClick={(e=>setFiltered('all'))}>
                <span>All</span>
            </li>
            <li className="li-filter" onClick={(e=>setFiltered('page'))}>
                <span>Pages</span>
            </li>
            <li className="li-filter" onClick={(e=>setFiltered('game'))}>
                <span>Games</span>
            </li>
        </ul>
    )
}