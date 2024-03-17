// Instead of using export { default as UserView } which can be confusing, we can use a named export for better readability.

export { UserView as default } from './user-view';

// This code exports the default export of the 'user-view' module as 'UserView' in this module. This way, other modules can import 'UserView' directly.
