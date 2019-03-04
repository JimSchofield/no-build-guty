(function () {

    const blockConfig = {
        title: 'Test Block Vanilla Javascript',
        icon: 'smiley',
        category: 'common',
        edit() {
            return wp.element.createElement(
                'div',
                null,
                'Hello, World! I\'m plain js!'
            );
        },
        save() {
            return wp.element.createElement(
                'div',
                null,
                'Hello, World! I\'m plain js!'
            );
        }
    };

    wp.blocks.registerBlockType('no-build-blocks/test-block-vanilla', blockConfig);

})();