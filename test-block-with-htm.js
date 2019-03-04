(function () {

    const html = htm.bind(wp.element.createElement);

    const blockConfig = {
        title: 'Test Block with Htm',
        icon: 'smiley',
        category: 'common',
        edit(props) {
            return (html `
            <p>It works!</p>
        `);
        },
        save(props) {
            return (html `
            <p>It works!</p>
        `);
        }
    };

    wp.blocks.registerBlockType('no-build-blocks/test-block-with-htm', blockConfig);

})();