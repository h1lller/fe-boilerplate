module.exports = {
    "extends": "stylelint-config-htmlacademy",
    rules: {
        "order/order": [
            [
                {
                    "type": "at-rule",
                    "name": "include",
                    "hasBlock": false
                },
                {
                    "type": "at-rule",
                    "name": "extend"
                },
                "declarations",
                {
                    "type": "at-rule",
                    "name": "include",
                    "hasBlock": true
                },
                {
                    "type": "at-rule",
                    "name": "media"
                },
                {
                    "type": "rule",
                    "selector": "^&:\\w"
                },
                {
                    "type": "rule",
                    "selector": "^&::(before|after)"
                },
                {
                    "type": "rule",
                    "selector": "^ &"
                },
                {
                    "type": "rule",
                    "selector": "^&"
                },
                "at-rules"   
            ]
        ]
    }
};
