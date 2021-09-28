import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Post from "./Post";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }6

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#3c4043",
    "&.Mui-selected": {
      color: "#2770ba",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function CustomizedTabs({ StyledTab, tabData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="my-4">
      <Box sx={{ bgcolor: "white" }} className="">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          className="text-sm"
        >
          {StyledTab}
        </StyledTabs>
        {tabData.map((data, index) => (
          <TabPanel key={data?.updatedAt} value={value} index={index}>
            {data.map((option) => (
              <Post
                key={option?.Post?._id}
                title={option?.Post?.PostTitle}
                subTitle={option?.Post?.SubTitle}
                time={option?.updatedAt}
                points={option?.Post.Points}
                picture={option?.Post?.PostPicture?.url}
                alt={option?.Post?.PostPicture?.alternativeText}
              />
            ))}
          </TabPanel>
        ))}
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}

export { StyledTab, StyledTabs, TabPanel };
