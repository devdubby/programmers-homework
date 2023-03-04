```
"Programmers Functional Component": {
  "prefix": "fc",
  "body": [
    "function ${TM_FILENAME_BASE}({ $$target, initialState }) {",
    "  this.$$target = $$target",
    "  this.state = initialState",
    "",
    "  this.render = function() {",
    "  }",
    "",
    "  this.setState = function(nextState) {",
    "    this.state = nextState",
    "    this.render()",
    "  }",
    "",
    "  this.render()",
    "",
    "}",
    "export default ${TM_FILENAME_BASE};",
    ""
  ],
  "description": "Functional Component"
}
```
