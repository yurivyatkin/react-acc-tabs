# Accessible Tabs for React

This library provides a collection of headless React components for rendering tabbed user interfaces ("tab groups"), which are compliant with the WAI ARIA [specification](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/).

The core components are:
- `TabGroup`, container for rendering a tab group ("tab group"); a page can contain several tab groups;
- `TabList`, a container for the tab controls ("tab list"); there can be only one tab list within a given tab group;
- `Tab`, an individual control ("tab") within a given `TabList`; only one of tabs can be in "active" state at any given moment of time;
- `TabPanel`, a container for the content options ("tab panel"), controlled by some tab list;
- `TabOption`, a container for a content option ("tab option), which corresponds to one of the tabs in a given tab list. A tab option can contain another tab group, and this way tab groups can be nested.

Besides the core Tab UI components, this library contains a couple of utility components:
- `TabStateController` - a HOC for keeping the state of a tab group;
- `TabRouteController` a HOC for initializing the state (via `TabStateController`) of a tab group from certain query parameters in the URL.

## Installation

Untill it is properly installed to NPM, you can install this libratry by adding a line
```json
"react-acc-tabs": "yurivyatkin/react-acc-tabs"
```
to `"dependencies"` key of the `package.json` of your project.

## Usage

Assuming you are using React 16 or later, here is a minimal example of using `react-acc-tabs` for creating a tab group:
```jsx
import {
    TabGroup,
    TabList,
    Tab,
    TabPanel,
    TabOption,
} from 'react-acc-tabs';

const ProjectCodeInTabs = () => {
    return <>
      <TabGroup>
        <TabList>
          <Tab>HTML</Tab>
          <Tab>CSS</Tab>
          <Tab>JavaScript</Tab>
        </TabList>
        <TabPanel>
          <TabOption>Here is the HTML code...</TabOption>
          <TabOption>Here is the CSS code...</TabOption>
          <TabOption>Here is the JavaScript code...</TabOption>
        </TabPanel>
      </TabGroup>
    </>
}
```

## Contributing
This project is an exercise and will not be maintained.
Please consinder more mature and production-ready alternatives for your real-world projects and efforts.

## License
[UNLICENSED](https://unlicense.org)
