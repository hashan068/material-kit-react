import SvgColor from 'src/components/svg-color';

// Define the icon mapping as an object for easier extension
const iconMap = {
  analytics: 'ic_analytics',
  user: 'ic_user',
  cart: 'ic_cart',
  blog: 'ic_blog',
  lock: 'ic_lock',
  disabled: 'ic_disabled',
};

// Create the icon component using the iconMap
const Icon = (name) => <SvgColor src={`/assets/icons/navbar/${iconMap[name]}.svg`} sx={{ width: 1, height: 1 }} />;

// Define the navigation config as an array of objects with title, path and iconName properties
const navConfig = [
  { title: 'dashboard', path: '/', iconName: 'analytics' },
  { title: 'user', path: '/user', iconName: 'user' },
  { title: 'product', path: '/products', iconName: 'cart' },
  { title: 'blog', path: '/blog', iconName: 'blog' },
  { title: 'login', path: '/login', iconName: 'lock' },
  { title: 'Not found', path: '/404', iconName: 'disabled' },
];

// Map the navConfig array to a new array with the icon component instead of the iconName
const navConfigWithIcons = navConfig.map(({ title, path, iconName }) => ({ title, path, icon: <Icon name={iconName} /> }));

// Export the new array
export default navConfigWithIcons;
