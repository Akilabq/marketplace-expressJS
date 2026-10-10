import Icon from './Icon'
export default function SearchBar() {
  return (
    <div className="search" role="search">
      <input type="search" placeholder="Search for products" aria-label="Search" />
      <button aria-label="Search"><Icon name="search" /></button>
    </div>
  )
}
