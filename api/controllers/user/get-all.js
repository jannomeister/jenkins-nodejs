/**
 * Module dependencies
 */

// ...


/**
 * user/get-all.js
 *
 * Get all.
 */
module.exports = async function getAll(req, res) {

    const users = [
        { id: 1, name: "john doe" },
        { id: 2, name: "foo bar" }
    ];

    return res.ok(users);

};
