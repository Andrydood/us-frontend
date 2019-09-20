module.exports = {
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~components", "./components"],
          ["~store", "./store"],
          ["~lib", "./lib"]
        ],
        "extensions": [ ".js", ".scss", ".json"]
      }
    }
  },
  "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "no-param-reassign": "off",
      "jsx-a11y/anchor-is-valid": "off"
  },
  "extends": ["airbnb"]
}
