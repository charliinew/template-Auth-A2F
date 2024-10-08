/**
 * An array of routes that are accessible to the public.
 * these routes will not need authentification.
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification",
]

/**
 * An array of routes that are used for authentification.
 * these routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/**
 * The prefix for API authentification routes
 * Routes that start with this prfix are used for API authentification purposes
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";