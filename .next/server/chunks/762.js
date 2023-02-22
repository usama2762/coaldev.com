exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 7975:
/***/ ((module) => {

// Exports
module.exports = {
	"edde": "Contactformsection_edde__mpE0Q",
	"shake": "Contactformsection_shake__IGL4w"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"sizeset": "Home_sizeset__OgHjP",
	"div_1_setting": "Home_div_1_setting__8pkUo",
	"size": "Home_size__sbTTX",
	"sizefix": "Home_sizefix__MemYJ",
	"button_size": "Home_button_size____NX_"
};


/***/ }),

/***/ 2703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ OutlinedButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const OutlinedButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "outlined",
        ...props,
        sx: {
            my: 2,
            color: "white",
            display: "block",
            borderColor: "white",
            borderRadius: "20px",
            ":hover": {
                color: "black",
                backgroundColor: "white"
            }
        },
        children: props.text
    });
};


/***/ }),

/***/ 2557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ShowButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ShowButton = ({ props , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        variant: "outlined",
        ...props,
        size: "small",
        sx: {
            mt: "25px",
            padding: "3px 18px",
            color: "white",
            borderColor: "white",
            borderRadius: "25px",
            ":hover": {
                color: "black",
                backgroundColor: "white",
                borderColor: "white"
            }
        },
        children: text
    });
};


/***/ }),

/***/ 3083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kG": () => (/* reexport */ ApplyNowButton),
  "rB": () => (/* reexport */ BookACallButton),
  "PB": () => (/* reexport */ CDPagination),
  "FL": () => (/* reexport */ CSFilters),
  "Y8": () => (/* reexport */ GridImage),
  "HL": () => (/* reexport */ NavbarButton),
  "Uc": () => (/* reexport */ OutlinedButton/* OutlinedButton */.U),
  "AJ": () => (/* reexport */ PyButton),
  "Ne": () => (/* reexport */ Selected),
  "et": () => (/* reexport */ SendRequestBtn),
  "pH": () => (/* reexport */ ShowButton/* ShowButton */.p),
  "GV": () => (/* reexport */ TechImg),
  "d5": () => (/* reexport */ Unselected)
});

// UNUSED EXPORTS: FormSectionThree, FormSectionTwo

// EXTERNAL MODULE: ./common-components/ShowButton/index.jsx
var ShowButton = __webpack_require__(2557);
// EXTERNAL MODULE: ./common-components/OutlinedButton/index.jsx
var OutlinedButton = __webpack_require__(2703);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Grow"
var Grow_ = __webpack_require__(6262);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);
;// CONCATENATED MODULE: ./common-components/NavbarButton/index.jsx




const Line = /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
    sx: {
        width: "50%",
        height: 2,
        backgroundColor: "white"
    }
});
const CircleIcon = /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
    sx: {
        borderRadius: 20,
        backgroundColor: "white",
        width: 8,
        height: 8
    }
});
function SimpleGrow({ checked  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "flex"
        },
        justifyContent: "center",
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                in: checked,
                ...checked ? {
                    timeout: 2000
                } : {},
                style: {
                    transformOrigin: "0 0 0"
                },
                children: Line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                in: checked,
                ...checked ? {
                    timeout: 600
                } : {},
                style: {
                    transformOrigin: "0 0 0"
                },
                children: CircleIcon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                in: checked,
                ...checked ? {
                    timeout: 2000
                } : {},
                children: Line
            })
        ]
    });
};
const NavbarButton = ({ label , onClick , ...props })=>{
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "block",
            pt: 2
        },
        onMouseOver: ()=>setChecked(true),
        onMouseLeave: ()=>setChecked(false),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                sx: {
                    color: "white",
                    display: "block",
                    borderColor: "white",
                    borderRadius: "20px"
                },
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SimpleGrow, {
                checked: checked
            })
        ]
    });
};

;// CONCATENATED MODULE: ./common-components/ApplyNowButton/index.jsx



// import "../../styles/applyNowBtn.css";
const ApplyNowButton = ({ props  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        // variant="outlined" 
        class: "MyButton",
        ...props,
        size: "small",
        sx: {
            mt: "25px",
            padding: "3px 18px",
            color: "white",
            borderColor: "white",
            borderRadius: "25px"
        },
        children: "Apply Now"
    });
};

;// CONCATENATED MODULE: ./common-components/GridImageCareer/index.jsx


const GridImage = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: {
                xs: "100%",
                md: "28%",
                lg: "26%"
            },
            mb: {
                xs: "25px"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    backgroundImage: "url('/backgroundImages/career_page_svgs/What_Makes_Us_So_Awesome.svg')",
                    backgroundSize: "contain",
                    height: "99px",
                    width: "99px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    component: "img",
                    sx: {
                        height: 50,
                        width: 50
                    },
                    alt: "E-commerce svg",
                    src: `${props.srcurl}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h6",
                    sx: {
                        margin: "15px 0 8px 0",
                        fontSize: "1rem",
                        lineHeight: "1.2rem",
                        textAlign: "center"
                    },
                    children: props.text
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./common-components/PyButton/index.jsx



const PyButton = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        variant: "outlined",
        ...props,
        size: "small",
        sx: {
            padding: "2px 8px",
            color: "white",
            mr: `${props.mrs}`,
            fontSize: `${props.fs}`,
            borderColor: "white",
            borderRadius: "25px",
            ":hover": {
                color: "black",
                backgroundColor: "white"
            }
        },
        children: props.text
    });
};

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./common-components/CDPagination/index.jsx



const AbPaginationItem = (0,styles_.styled)(material_.PaginationItem)(({ theme  })=>({
        "&.Mui-selected": {
            backgroundColor: "white",
            color: theme.palette.company_orange.main
        }
    }));
const CDPagination = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            display: "flex",
            justifyContent: "center",
            mt: "50px",
            mb: "50px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Pagination, {
            onChange: props.handleChange,
            size: "small",
            hideNextButton: true,
            hidePrevButton: true,
            count: props.totl_pages,
            renderItem: (item)=>/*#__PURE__*/ jsx_runtime_.jsx(AbPaginationItem, {
                    sx: {
                        color: "white"
                    },
                    ...item
                })
        })
    });
};

;// CONCATENATED MODULE: ./common-components/CSFilters/FilterBtn/index.jsx



const FilterBtn = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        id: props.id,
        variant: "outlined",
        size: "small",
        onClick: props.handleClick,
        sx: {
            padding: "3px 18px",
            color: "white",
            borderColor: "white",
            borderRadius: "25px",
            ":hover": {
                color: "black",
                backgroundColor: "white"
            },
            ":focus": {
                color: "black",
                backgroundColor: "white"
            }
        },
        children: props.text
    });
};

;// CONCATENATED MODULE: ./common-components/CSFilters/index.jsx





const MdBox = (0,styles_.styled)(material_.Box)(({ theme  })=>({
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }));
const XsBox = (0,styles_.styled)(material_.Box)(({ theme  })=>({
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "inline-flex"
        }
    }));
const Search = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        padding: theme.spacing(0.75),
        cursor: "pointer",
        height: "100%",
        border: "1px solid white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledInputBase = (0,styles_.styled)(material_.InputBase)(({ theme  })=>({
        borderBottom: "1px solid white",
        "& .MuiInputBase-input": {
            display: "none",
            color: "white",
            padding: theme.spacing(0.5, 1, 0.5, 2),
            width: "100%"
        },
        "& .MuiInputBase-input.show": {
            display: "flex !important",
            flexGrow: "1",
            transition: theme.transitions.create("width"),
            width: "100%"
        }
    }));
const CSFilters = (props)=>{
    const Technologies = props.tags;
    const [age, setAge] = external_react_.useState("");
    const [showMe, setShowMe] = external_react_.useState(false);
    const containerRef = external_react_.useRef(null);
    function toggle() {
        setShowMe(!showMe);
    }
    const handleChange = (event)=>{
        setAge(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "flex",
            width: "85%",
            margin: "0 auto",
            padding: "20px 0",
            justifyContent: {
                xs: "space-between",
                md: "flex-start"
            },
            alignItems: {
                xs: "center",
                md: "flex-start"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(XsBox, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                    sx: {
                        m: 1,
                        minWidth: 120
                    },
                    size: "small",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                            sx: {
                                "&.MuiInputLabel-root": {
                                    color: "white"
                                },
                                color: "white"
                            },
                            id: "techs",
                            children: "Filters"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Select, {
                            sx: {
                                color: "white",
                                ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(228, 219, 233, 0.25)"
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(228, 219, 233, 0.25)"
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(228, 219, 233, 0.25)"
                                },
                                ".MuiSvgIcon-root ": {
                                    fill: "white !important"
                                }
                            },
                            labelId: "techs",
                            id: "techs",
                            value: age,
                            label: "techs",
                            onChange: handleChange,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    sx: {
                                        backgroundColor: "black"
                                    },
                                    value: "",
                                    onClick: props.handleClick,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: props.category
                                    })
                                }),
                                Technologies.map((tch)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        sx: {},
                                        id: tch.id,
                                        onClick: props.handleClick,
                                        children: tch.tag_name
                                    }))
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MdBox, {
                sx: {
                    display: "flex",
                    width: "65%",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        ml: "20px",
                        mb: "15px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FilterBtn, {
                            id: "",
                            text: props.category,
                            handleClick: props.handleClick
                        })
                    }),
                    Technologies.map((tch)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            ml: "20px",
                            mb: "15px",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(FilterBtn, {
                                id: tch.id,
                                text: tch.tag_name,
                                handleClick: props.handleClick
                            })
                        }, tch.id))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                ref: containerRef,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Search, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SearchIconWrapper, {
                            onClick: toggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                component: "img",
                                sx: {
                                    height: 18,
                                    width: 18
                                },
                                alt: "views-icon",
                                src: "/blog_page_svgs/icons/Search_Icon.svg"
                            })
                        }),
                        showMe ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Slide, {
                            easing: "ease-in-out",
                            direction: "left",
                            in: showMe,
                            container: containerRef.current,
                            mountOnEnter: true,
                            unmountOnExit: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInputBase, {
                                onChange: props.handleChange,
                                placeholder: "Search…",
                                inputProps: {
                                    "aria-label": "search",
                                    className: "show"
                                }
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(StyledInputBase, {
                            placeholder: "Search…",
                            inputProps: {
                                "aria-label": "search"
                            }
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./common-components/TechImg/index.jsx


const TechImg = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: {
                xs: "100%",
                md: "28%",
                lg: "26%"
            },
            mb: {
                xs: "25px"
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        component: "img",
                        sx: {
                            height: 98,
                            width: 101,
                            display: "block",
                            maxWidth: 119,
                            padding: "18px",
                            backgroundColor: "#1f1d1d70",
                            borderRadius: "10%",
                            marginBottom: "2rem",
                            overflow: "hidden",
                            "&:hover": {
                                display: "none"
                            }
                        },
                        src: `${props.srcurl}`,
                        alt: "E-commerce svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        component: "img",
                        sx: {
                            height: 98,
                            width: 101,
                            display: "block",
                            maxWidth: 119,
                            padding: "18px",
                            backgroundColor: "#1f1d1d70",
                            borderRadius: "10%",
                            marginBottom: "2rem",
                            overflow: "hidden",
                            opacity: 0,
                            marginTop: "-130px",
                            transition: "all 0.9s",
                            "&:hover": {
                                opacity: 1
                            }
                        },
                        src: `${props.hurl}`,
                        alt: "E-commerce svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h6",
                    sx: {
                        margin: "15px 0 8px 0",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: "1.2rem",
                        textAlign: "center"
                    },
                    children: props.text
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./common-components/SendRequestBtn/index.jsx



const SendRequestBtn = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        variant: "outlined",
        ...props,
        size: "small",
        sx: {
            mt: "25px",
            fontWeight: "300",
            padding: "3px 70px",
            color: "white",
            borderColor: "white",
            borderRadius: "25px",
            ":hover": {
                color: "black",
                backgroundColor: "white"
            }
        },
        children: "Send Request"
    });
};

;// CONCATENATED MODULE: ./common-components/Pricingbt/Selected/index.jsx



const Selected = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        variant: "outlined",
        ...props,
        size: "small",
        sx: {
            ml: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xl: "14px",
                xs: "7px"
            },
            mt: {
                lg: "25px",
                xl: "25px",
                md: "25px",
                sm: "25px",
                xs: "-40px"
            },
            fontWeight: "300",
            padding: {
                lg: "15px 100px",
                xl: "15px 100px",
                sm: "15px 100px",
                md: "15px 100px",
                xs: "4px 40px"
            },
            color: "white",
            borderColor: "#0E2634",
            borderRadius: "25px",
            backgroundColor: "#0E2634",
            ":hover": {
                backgroundColor: "#0E2634"
            }
        },
        children: "Get Started"
    });
};

;// CONCATENATED MODULE: ./common-components/Pricingbt/Unselected/index.jsx



const Unselected = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        variant: "outlined",
        ...props,
        size: "small",
        sx: {
            ml: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xl: "14px",
                xs: "7px"
            },
            mt: {
                lg: "25px",
                xl: "25px",
                md: "25px",
                sm: "25px",
                xs: "-40px"
            },
            fontWeight: "300",
            padding: {
                lg: "15px 100px",
                xl: "15px 100px",
                sm: "15px 100px",
                md: "15px 100px",
                xs: "4px 40px"
            },
            color: "white",
            borderColor: "#E63E2C",
            borderRadius: "25px",
            backgroundColor: "#E63E2C"
        },
        children: "Get Started"
    });
};

;// CONCATENATED MODULE: ./common-components/BookACallButton/index.jsx



const BookACallButton = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        variant: "outlined",
        onClick: ()=>"Calendly.initPopupWidget({url: 'https://calendly.com/usama2762'});return false;",
        ...props,
        sx: {
            my: 2,
            color: "white",
            display: "block",
            width: "50%",
            borderColor: "white",
            borderRadius: "20px",
            ":hover": {
                color: "black",
                backgroundColor: "white",
                borderColor: "white"
            }
        },
        children: props.text
    });
};

// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
;// CONCATENATED MODULE: ./common-components/Forms/FormSectionTwo.jsx








const Form = (0,styles_.styled)("form")({
    display: "flex",
    flexDirection: "column"
});
const FormSectionTwo = (props)=>{
    const [active1, setActive1] = React.useState(false);
    const [active2, setActive2] = React.useState(false);
    const [active3, setActive3] = React.useState(false);
    const [active4, setActive4] = React.useState(false);
    const [active5, setActive5] = React.useState(false);
    const [active6, setActive6] = React.useState(false);
    const [active7, setActive7] = React.useState(false);
    const [active8, setActive8] = React.useState(false);
    // function for handleClick
    const handleClick1 = ()=>{
        setActive1(!active1);
    };
    const handleClick2 = ()=>{
        setActive2(!active2);
    };
    const handleClick3 = ()=>{
        setActive3(!active3);
    };
    const handleClick4 = ()=>{
        setActive4(!active4);
    };
    const handleClick5 = ()=>{
        setActive5(!active5);
    };
    const handleClick6 = ()=>{
        setActive6(!active6);
    };
    const handleClick7 = ()=>{
        setActive7(!active7);
    };
    const handleClick8 = ()=>{
        setActive8(!active8);
    };
    return /*#__PURE__*/ _jsx(Stack, {
        children: /*#__PURE__*/ _jsx(Grid, {
            children: /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    mt: "10px",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        children: "What Can We  Do For You?"
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        variant: "standard",
                        Select: true,
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                marginTop: "20px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsx("input", {
                                    type: "checkbox",
                                    id: "btncheck1",
                                    name: "IDEATION And VALIDATION OF PRODUCT IDEA",
                                    value: "Yes",
                                    style: {
                                        display: "contents"
                                    }
                                }),
                                /*#__PURE__*/ _jsx("label", {
                                    onClick: handleClick1,
                                    htmlFor: "btncheck1",
                                    style: {
                                        borderRadius: "20px",
                                        border: active1 ? `${props.f2border}` : "1px solid #FFFFFF",
                                        padding: "6px 8px",
                                        backgroundColor: active1 ? `${props.colorea}` : null,
                                        borderRadius: "25px"
                                    },
                                    children: "IDEATION & VALIDATION OF PRODUCT IDEA"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsx("input", {
                                    type: "checkbox",
                                    id: "btncheck2",
                                    name: "COMPLETE PRODUCT DEVELOPMENT",
                                    value: "Yes",
                                    style: {
                                        display: "contents"
                                    }
                                }),
                                /*#__PURE__*/ _jsx("label", {
                                    onClick: handleClick2,
                                    htmlFor: "btncheck2",
                                    style: {
                                        border: active2 ? `${props.f2border}` : "1px solid #FFFFFF",
                                        borderRadius: "20px",
                                        padding: "6px 8px",
                                        backgroundColor: active2 ? `${props.colorea}` : null,
                                        borderRadius: "25px"
                                    },
                                    children: "COMPLETE PRODUCT DEVELOPMENT"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck3",
                                            name: "DATA SCIENCE",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick3,
                                            className: "checkbox",
                                            htmlFor: "btncheck3",
                                            style: {
                                                border: active3 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active3 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "DATA SCIENCE"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck4",
                                            name: "ENGINEERING",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick4,
                                            htmlFor: "btncheck4",
                                            style: {
                                                border: active4 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active4 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "ENGINEERING"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck5",
                                            name: "MACHINE LEARNING",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick5,
                                            htmlFor: "btncheck5",
                                            style: {
                                                border: active5 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active5 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "MACHINE LEARNING"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck6",
                                            name: "CLOUD/DEVEOPS",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick6,
                                            htmlFor: "btncheck6",
                                            style: {
                                                border: active6 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active6 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "CLOUD/DEVEOPS"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                mb: "10px",
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck7",
                                            name: "DIGITIZATION",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick7,
                                            htmlFor: "btncheck7",
                                            style: {
                                                border: active7 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active7 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "DIGITIZATION"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck8",
                                            name: "PROCESS AUTOMATION",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick8,
                                            htmlFor: "btncheck8",
                                            style: {
                                                border: active8 ? `${props.f2border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active8 ? `${props.colorea}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "PROCESS AUTOMATION"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./common-components/Forms/FormSectionThree.jsx








const FormSectionThree_Form = (0,styles_.styled)("form")({
    display: "flex",
    flexDirection: "column"
});
const FormSectionThree = (props)=>{
    // function for handleClick
    const [active1, setActive1] = React.useState(false);
    const [active2, setActive2] = React.useState(false);
    const [active3, setActive3] = React.useState(false);
    const [active4, setActive4] = React.useState(false);
    const [active5, setActive5] = React.useState(false);
    const [active6, setActive6] = React.useState(false);
    const [active7, setActive7] = React.useState(false);
    const [active8, setActive8] = React.useState(false);
    const [active9, setActive9] = React.useState(false);
    const [active10, setActive10] = React.useState(false);
    const [active11, setActive11] = React.useState(false);
    const [active12, setActive12] = React.useState(false);
    const [active13, setActive13] = React.useState(false);
    const [active14, setActive14] = React.useState(false);
    const [active15, setActive15] = React.useState(false);
    const [active16, setActive16] = React.useState(false);
    const [active17, setActive17] = React.useState(false);
    const [active18, setActive18] = React.useState(false);
    // function for handleClick
    const handleClick1 = ()=>{
        setActive1(!active1);
    };
    const handleClick2 = ()=>{
        setActive2(!active2);
    };
    const handleClick3 = ()=>{
        setActive3(!active3);
    };
    const handleClick4 = ()=>{
        setActive4(!active4);
    };
    const handleClick5 = ()=>{
        setActive5(!active5);
    };
    const handleClick6 = ()=>{
        setActive6(!active6);
    };
    const handleClick7 = ()=>{
        setActive7(!active7);
    };
    const handleClick8 = ()=>{
        setActive8(!active8);
    };
    const handleClick9 = ()=>{
        setActive9(!active9);
    };
    const handleClick10 = ()=>{
        setActive10(!active10);
    };
    const handleClick11 = ()=>{
        setActive11(!active11);
    };
    const handleClick12 = ()=>{
        setActive12(!active12);
    };
    const handleClick13 = ()=>{
        setActive13(!active13);
    };
    const handleClick14 = ()=>{
        setActive14(!active14);
    };
    const handleClick15 = ()=>{
        setActive15(!active15);
    };
    const handleClick16 = ()=>{
        setActive16(!active16);
    };
    const handleClick17 = ()=>{
        setActive17(!active17);
    };
    const handleClick18 = ()=>{
        setActive18(!active18);
    };
    return /*#__PURE__*/ _jsx(Stack, {
        children: /*#__PURE__*/ _jsx(Grid, {
            children: /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    mt: "10px",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        children: "Are There Any Technologies You Want To Specify?"
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        variant: "standard",
                        Select: true,
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "20px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck1",
                                            name: "ANDROID",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick1,
                                            htmlFor: "btncheck1",
                                            style: {
                                                borderRadius: "20px",
                                                border: active1 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active1 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "ANDROID"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck2",
                                            name: "IOS",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick2,
                                            htmlFor: "btncheck2",
                                            style: {
                                                borderRadius: "20px",
                                                border: active2 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active2 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "IOS"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck3",
                                            name: "KOTLIN",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick3,
                                            htmlFor: "btncheck3",
                                            style: {
                                                borderRadius: "20px",
                                                border: active3 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active3 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "KOTLIN"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck4",
                                            name: "FLUTTER",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick4,
                                            htmlFor: "btncheck4",
                                            style: {
                                                borderRadius: "20px",
                                                border: active4 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active4 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "FLUTTER"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck5",
                                            name: "REACT NATIVE",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick5,
                                            htmlFor: "btncheck5",
                                            style: {
                                                borderRadius: "20px",
                                                border: active5 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active5 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "REACT NATIVE"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck6",
                                            name: "REACT",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick6,
                                            htmlFor: "btncheck6",
                                            style: {
                                                borderRadius: "20px",
                                                border: active6 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active6 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "REACT"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck7",
                                            name: "ANGULAR",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick7,
                                            htmlFor: "btncheck7",
                                            style: {
                                                borderRadius: "20px",
                                                border: active7 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 8px",
                                                backgroundColor: active7 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "ANGULAR"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck8",
                                            name: "VUE",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick8,
                                            htmlFor: "btncheck8",
                                            style: {
                                                borderRadius: "20px",
                                                border: active8 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active8 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "VUE"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck9",
                                            name: "RUBY",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick9,
                                            htmlFor: "btncheck9",
                                            style: {
                                                borderRadius: "20px",
                                                border: active9 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active9 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "RUBY"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck10",
                                            name: "NODE",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick10,
                                            htmlFor: "btncheck10",
                                            style: {
                                                borderRadius: "20px",
                                                border: active10 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active10 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "NODE"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck11",
                                            name: "JAVA",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick11,
                                            htmlFor: "btncheck11",
                                            style: {
                                                borderRadius: "20px",
                                                border: active11 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active11 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "JAVA"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck12",
                                            name: "PHP",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick12,
                                            htmlFor: "btncheck12",
                                            style: {
                                                borderRadius: "20px",
                                                border: active12 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                padding: "6px 12px",
                                                backgroundColor: active12 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "PHP"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck13",
                                            name: "MACHINE LEARNING",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick13,
                                            htmlFor: "btncheck13",
                                            style: {
                                                border: active13 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active13 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "MACHINE LEARNING"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck14",
                                            name: "QUALITY ASSURANCE",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick14,
                                            htmlFor: "btncheck14",
                                            style: {
                                                border: active14 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active14 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "QUALITY ASSURANCE"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck15",
                                            name: "PYTHON",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick15,
                                            htmlFor: "btncheck15",
                                            style: {
                                                border: active15 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active15 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "PYTHON"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck16",
                                            name: "SALESFORCE DEVELOPMENT",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick16,
                                            htmlFor: "btncheck16",
                                            style: {
                                                border: active16 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active16 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "SALESFORCE DEVELOPMENT"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(FormControl, {
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "30px",
                                fontSize: {
                                    xs: "10px",
                                    lg: "13px",
                                    xl: "13px",
                                    md: "13px",
                                    sm: "12px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        mr: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck17",
                                            name: "DEVOPS",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick17,
                                            htmlFor: "btncheck17",
                                            style: {
                                                border: active17 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active17 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "DEVOPS"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            id: "btncheck18",
                                            name: "RUBY ON RAILS",
                                            value: "Yes",
                                            style: {
                                                display: "contents"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("label", {
                                            onClick: handleClick18,
                                            htmlFor: "btncheck18",
                                            style: {
                                                border: active18 ? `${props.f3border}` : "1px solid #FFFFFF",
                                                borderRadius: "20px",
                                                padding: "6px 8px",
                                                backgroundColor: active18 ? `${props.formthreecolor}` : null,
                                                borderRadius: "25px"
                                            },
                                            children: "RUBY ON  RAILS"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./common-components/index.jsx

















/***/ }),

/***/ 6151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ FaqSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5510);
/* harmony import */ var _mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_9__]);
_utils_request__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3___default()), {
        disableGutters: true,
        elevation: 0,
        square: true,
        ...props
    }))(({})=>({
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.2);",
        borderRadius: "07px",
        "&:before": {
            display: "none"
        }
    }));
const AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default()), {
        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
            sx: {
                fontSize: "1.2rem",
                color: "white"
            }
        }),
        ...props
    }))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
        flexDirection: "end",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(45deg)"
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1)
        }
    }));
const AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>({
        color: "#fff",
        marginBottom: "10px",
        padding: theme.spacing(2)
    }));
const FaqSection = ()=>{
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const handleChange = (panel)=>(event, newExpanded)=>{
            setExpanded(newExpanded ? panel : false);
        };
    const { 0: myData , 1: setMyData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getApiData = async ()=>{
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_9__/* .serverRequest */ .Pu)("get", "faq/", {
            publish: "true"
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_9__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setMyData(res.data.results);
            console.log(myData);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_9__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getApiData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        sx: {
            backgroundImage: "url('/backgroundImages/faq_page_bg/F_Background.svg')",
            backgroundBlendMode: "color",
            padding: "200px 0 50px 0"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                sx: {
                    margin: "0 auto 50px auto",
                    width: {
                        "xs": "80%",
                        md: "90%",
                        lg: "80%"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h3",
                        sx: {
                            fontWeight: "500"
                        },
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h3",
                        sx: {
                            fontWeight: "300"
                        },
                        children: "Frequently Asked Question"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                sx: {
                    margin: "0 auto",
                    width: {
                        "xs": "80%",
                        md: "90%",
                        lg: "80%"
                    }
                },
                children: myData.map((que)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                        sx: {
                            mb: "20px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                            expanded: expanded === `${que.id}`,
                            onChange: handleChange(`${que.id}`),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                                    "aria-controls": que.id + "d-content",
                                    id: que.id + "1d-header",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                            sx: {
                                                fontWeight: "bold",
                                                fontSize: "1.2rem",
                                                overflow: "hidden",
                                                opacity: 1,
                                                position: "absolute",
                                                bottom: "12px !important",
                                                "&:hover": {
                                                    transition: "all 0.2s",
                                                    fontSize: "1.15rem",
                                                    opacity: 1
                                                }
                                            },
                                            children: que.question
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        sx: {
                                            ml: {
                                                md: "8px"
                                            },
                                            width: {
                                                xs: "100%",
                                                md: "65%"
                                            },
                                            fontSize: "1.1rem",
                                            fontWeight: "300"
                                        },
                                        children: que.answer
                                    })
                                })
                            ]
                        })
                    }, que.id))
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9795);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            minHeight: 400,
            backgroundColor: "primary.main"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                sx: {
                    padding: {
                        lg: 10,
                        sm: 2,
                        md: 10,
                        xs: 4
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            color: "white"
                        },
                        display: "flex",
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 3,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: "SERVICES"
                            }),
                            _static__WEBPACK_IMPORTED_MODULE_4__/* .Services.map */ .K9.map((service, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        sx: {
                                            mb: 0.5,
                                            fontSize: {
                                                xs: "10px",
                                                sm: "90%",
                                                md: "100%",
                                                lg: "100%",
                                                xl: "100%"
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: service.path,
                                            children: service.name
                                        })
                                    })
                                }, index))
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            color: "white",
                            width: {
                                lg: "auto",
                                sm: "auto",
                                md: "auto",
                                xs: "40%",
                                xl: "auto"
                            }
                        },
                        display: "flex",
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 3,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: "INDUSTRIES"
                            }),
                            _static__WEBPACK_IMPORTED_MODULE_4__/* .Industries.map */ .Rd.map((tech, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        sx: {
                                            mb: 0.5,
                                            fontSize: {
                                                xs: "10px",
                                                sm: "90%",
                                                md: "100%",
                                                lg: "100%",
                                                xl: "100%"
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: tech.path,
                                            children: tech.name
                                        })
                                    })
                                }, index))
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            color: "white"
                        },
                        display: "flex",
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 1,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/casestudies",
                                    children: "CASE STUDIES"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 1,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/blog",
                                    children: "BLOG"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 1,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/career",
                                    children: "CAREER"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 1,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/faq",
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    mb: 1,
                                    fontSize: {
                                        xs: "10px",
                                        sm: "90%",
                                        md: "100%",
                                        lg: "100%",
                                        xl: "100%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/contact",
                                    children: "CONTACT"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    mt: 2
                                },
                                display: "flex",
                                flexDirection: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://web.facebook.com/CoalDev",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: {
                                                    lg: 35,
                                                    sm: 35,
                                                    md: 35,
                                                    xs: 20
                                                },
                                                mr: {
                                                    lg: 1,
                                                    sm: 1,
                                                    md: 1,
                                                    xs: 0
                                                }
                                            },
                                            src: "/assets/social_home/facebook.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.linkedin.com/company/coaldev",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: {
                                                    lg: 35,
                                                    sm: 35,
                                                    md: 35,
                                                    xs: 20
                                                },
                                                mr: {
                                                    lg: 1,
                                                    sm: 1,
                                                    md: 1,
                                                    xs: 0
                                                }
                                            },
                                            src: "/assets/social_home/linkedin.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://twitter.com/Coaldev1",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: {
                                                    lg: 35,
                                                    sm: 35,
                                                    md: 35,
                                                    xs: 20
                                                },
                                                mr: {
                                                    lg: 1,
                                                    sm: 1,
                                                    md: 1,
                                                    xs: 0
                                                }
                                            },
                                            src: "/assets/social_home/twitter.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.instagram.com/accounts/login",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: {
                                                    lg: 35,
                                                    sm: 35,
                                                    md: 35,
                                                    xs: 20
                                                },
                                                mr: {
                                                    lg: 1,
                                                    sm: 1,
                                                    md: 1,
                                                    xs: 0
                                                }
                                            },
                                            src: "/assets/social_home/instagram.svg"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                sx: {
                    color: "white",
                    textAlign: "center",
                    pb: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "\xa9\xa0"
                    }),
                    "CoalDev All Rights Reserved 2022"
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5848);
/* harmony import */ var _mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3083);














const pages = [
    {
        name: "SERVICES",
        to: "/services"
    },
    {
        name: "TECHNOLOGIES",
        to: "/technologies"
    },
    {
        name: "CASE STUDIES",
        to: "/casestudies"
    },
    {
        name: "BLOGS",
        to: "/blog"
    },
    {
        name: "PRICING",
        to: "/pricingpage"
    },
    {
        name: "CAREER",
        to: "/career"
    },
    {
        name: "FAQ",
        to: "/faq"
    }, 
];
const Header = (props)=>{
    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
        position: props.position,
        sx: {
            backgroundColor: `${props.bgcolor}`,
            boxShadow: `${props.bs}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                component: "img",
                                sx: {
                                    mr: 2,
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    maxWidth: 120
                                },
                                src: "/assets/logo/main_header_logo.png"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {
                                id: "menu-appbar",
                                anchorEl: anchorElNav,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                open: Boolean(anchorElNav),
                                onClose: handleCloseNavMenu,
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        href: page.to,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            onClick: handleCloseNavMenu,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                textAlign: "center",
                                                children: page.name
                                            })
                                        }, page.name)
                                    }, page.name))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_11___default()), {
                        sx: {
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h5",
                        noWrap: true,
                        component: "a",
                        href: "",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: "LOGO"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            mt: 2,
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        children: [
                            pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    href: page.to,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_13__/* .NavbarButton */ .HL, {
                                            label: page.name,
                                            sx: {
                                                my: 2,
                                                color: "white",
                                                display: "block"
                                            }
                                        }, page.name)
                                    })
                                }, page.name)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_13__/* .OutlinedButton */ .Uc, {
                                        text: "CONTACT"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}; // export default Header;


/***/ }),

/***/ 6519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ BlogHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("p")({
    color: "white",
    fontSize: "17px",
    marginTop: "4rem",
    width: {
        xs: "100%",
        md: "52%"
    },
    margin: "10px 0"
});
const BlogHead = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxWidth: "xl",
        sx: {
            padding: {
                sm: "50px 0 0 0",
                md: "0"
            },
            height: "400px",
            display: "flex",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                width: "80%",
                margin: "0 auto",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                alignItems: {
                    xs: "center",
                    md: "none"
                },
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "50%"
                        },
                        margin: {
                            xs: "0 0 100px 0",
                            md: "0 0 0 0"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h2",
                            sx: {
                                textAlign: {
                                    xs: "center",
                                    md: "left"
                                },
                                fontWeight: "500"
                            },
                            children: "Blog"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                            children: "Blog posts showcase our expertise in a variety of fields. With a focus on providing valuable insights and practical advice, our blogs are a great resource for businesses looking to stay ahead of the curve and achieve their goals."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "50%"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        component: "img",
                        sx: {
                            margin: {
                                xs: "0",
                                md: "0 auto"
                            },
                            mt: {
                                xs: "20px",
                                md: "10px"
                            },
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        },
                        src: "/blog_page_svgs/Blog_Top_Picture.svg"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ BlogGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1821);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3083);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(628);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_4__, _utils_request__WEBPACK_IMPORTED_MODULE_6__]);
([___WEBPACK_IMPORTED_MODULE_4__, _utils_request__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ParentBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        [theme.breakpoints.up("md")]: {
            "&>:nth-of-type(2)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(5)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(6)": {
                gridColumn: "span 2"
            },
            "&>:nth-of-type(7)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(10)": {
                gridColumn: "span 2"
            }
        }
    }));
const BlogGrid = ()=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: tags , 1: setTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ttl_items , 1: setTotalItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    async function fetchData(page) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "blog",
            page: page
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
            await setTotalItems(res.data.count);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function fetchTags() {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .serverRequest */ .Pu)("get", "tag/", {
            content__content_type: "blog"
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setTags(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function searchBlogs(tagid) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "blog",
            tag__id: `${tagid}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function searchBlogWithTagName(tagname) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "blog",
            search: `${tagname}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_6__/* .isAxiosError */ .IZ)(res)) {
            console.log("Network Error");
        }
    }
    const handlePageChange = (e, page)=>{
        fetchData(page);
    };
    const handleInputChange = (e)=>{
        searchBlogWithTagName(e.target.value);
    };
    const handleTagClick = (e)=>{
        searchBlogs(e.target.id);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData(1);
        fetchTags();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
        maxWidth: "xl",
        sx: {
            backgroundSize: {
                xs: "cover",
                md: "cover"
            },
            backgroundImage: "url('/blog_page_svgs/bgs/First_Background.svg')",
            padding: "25px 0"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .BlogHead */ .s_, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .CSFilters */ .FL, {
                tags: tags,
                category: "All Blogs",
                handleClick: handleTagClick,
                handleChange: handleInputChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ParentBox, {
                className: "pbox",
                sx: {
                    margin: "0 auto",
                    width: "90%",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))",
                    gap: 3.5,
                    gridAutoRows: "253px"
                },
                children: data.map((img)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${img.thumbnail})`,
                            backgroundSize: "cover"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            href: `/innerpage/${img.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        position: "absolute",
                                        left: "0",
                                        top: "0",
                                        width: "100%",
                                        height: "100%",
                                        padding: "15px 20px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                                        ":hover": {
                                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                                            backdropFilter: "blur(2px)"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: img.tag.map((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .PyButton */ .AJ, {
                                                            text: t.tag_name,
                                                            fs: "10px"
                                                        }, t.id))
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    sx: {
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                            component: "img",
                                                            sx: {
                                                                height: 18,
                                                                width: 18
                                                            },
                                                            alt: "views-icon",
                                                            src: "/blog_page_svgs/icons/Views_Icon.svg"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                            ml: "2px",
                                                            sx: {
                                                                color: "#B2BEB5",
                                                                fontSize: "12px"
                                                            },
                                                            children: [
                                                                img.views,
                                                                "  views"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "h6",
                                                sx: {
                                                    width: {
                                                        md: "44%",
                                                        lg: "90%",
                                                        xl: "90%",
                                                        md: "100%"
                                                    },
                                                    fontSize: "x-large"
                                                },
                                                children: img.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        children: [
                                                            "by ",
                                                            img.author
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        sx: {
                                                            color: "#B2BEB5",
                                                            fontSize: "12px"
                                                        },
                                                        children: img.creation_date
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, img.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .CDPagination */ .PB, {
                totl_pages: Math.ceil(ttl_items / 10),
                handleChange: handlePageChange
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Workwithus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3083);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9795);






const Workwithus = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
                maxWidth: "xl",
                sx: {
                    height: "598px",
                    backgroundImage: "url('/backgroundImages/career_page_svgs/First_Background.svg')",
                    backgroundSize: {
                        xs: "cover",
                        md: "cover"
                    },
                    display: "flex",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        width: "80%",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        },
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                width: {
                                    xs: "100%",
                                    md: "50%"
                                },
                                mb: {
                                    xs: "25px",
                                    md: "0"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    variant: "h3",
                                    sx: {
                                        fontWeight: "500"
                                    },
                                    children: "Work With us"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    variant: "h3",
                                    sx: {
                                        fontWeight: "300"
                                    },
                                    children: "Challenge The Industry"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://coaldev.freshteam.com/jobs",
                                    target: "blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .ApplyNowButton */ .kG, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                width: {
                                    xs: "100%",
                                    md: "50%"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                component: "img",
                                sx: {
                                    display: "block",
                                    margin: {
                                        xs: "0",
                                        md: "0 auto"
                                    },
                                    mt: {
                                        xs: "20px",
                                        md: "10px"
                                    },
                                    maxWidth: 250
                                },
                                src: "/assets/logo/main_header_logo.png"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
                maxWidth: "xl",
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "50px",
                    backgroundImage: "url('/backgroundImages/career_page_svgs/Second_Background.svg')",
                    backgroundSize: {
                        xs: "cover",
                        md: "cover"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        mb: "25px",
                        sx: {
                            width: {
                                xs: "100%",
                                md: "30%"
                            },
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    margin: "15px 0"
                                },
                                children: "What Makes Us So Awesome?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    fontWeight: "300",
                                    fontSize: "1rem",
                                    mb: "20px"
                                },
                                variant: "body1",
                                children: "We've always aimed to be a software development agency that our customers love working with and our employees love working for."
                            })
                        ]
                    }),
                    Object.keys(_static__WEBPACK_IMPORTED_MODULE_5__/* .Boxes */ .IZ).map((box, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            className: "row",
                            sx: {
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: "row"
                                },
                                justifyContent: "space-between",
                                mb: {
                                    xs: 0,
                                    sm: 10
                                },
                                width: {
                                    "xs": "80%",
                                    md: "100%",
                                    lg: "80%"
                                }
                            },
                            children: _static__WEBPACK_IMPORTED_MODULE_5__/* .Boxes */ .IZ[box].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .GridImage */ .Y8, {
                                    srcurl: item.imgurl,
                                    text: item.text
                                }, index))
                        }, index))
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CaseStudies)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3083);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(628);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_5__]);
_utils_request__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ParentBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        [theme.breakpoints.up("md")]: {
            "&>:nth-of-type(2)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(5)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(6)": {
                gridColumn: "span 2"
            },
            "&>:nth-of-type(7)": {
                gridRow: "span 2"
            },
            "&>:nth-of-type(10)": {
                gridColumn: "span 2"
            }
        }
    }));
const CaseStudies = ()=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: tags , 1: setTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ttl_items , 1: setTotalItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    async function fetchData(page) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "case_study",
            page: page
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
            await setTotalItems(res.data.count);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function fetchTags() {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .serverRequest */ .Pu)("get", "tag/", {
            content__content_type: "case_study"
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setTags(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosError */ .IZ)(res)) {
            console.log("Network Error");
        }
    }
    async function searchCaseStudy(tagid) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "case_study",
            tag__id: `${tagid}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosError */ .IZ)(res)) {
            console.log("Network Error");
        }
    }
    async function searchCSWithTagName(tagname) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "case_study",
            search: `${tagname}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_5__/* .isAxiosError */ .IZ)(res)) {
            console.log("Network Error");
        }
    }
    const handlePageChange = (e, page)=>{
        fetchData(page);
    };
    const handleInputChange = (e)=>{
        searchCSWithTagName(e.target.value);
    };
    const handleTagClick = (e)=>{
        searchCaseStudy(e.target.id);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData(1);
        fetchTags();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
        maxWidth: "xl",
        sx: {
            backgroundSize: {
                xs: "cover",
                md: "cover"
            },
            backgroundImage: "url('/casestudies_svgs/bg/Second_Background.svg')",
            padding: "25px 0"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .CSFilters */ .FL, {
                tags: tags,
                category: "All Techs",
                handleClick: handleTagClick,
                handleChange: handleInputChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ParentBox, {
                className: "pbox",
                sx: {
                    margin: "0 auto",
                    width: "90%",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))",
                    gap: 3.5,
                    gridAutoRows: "253px"
                },
                children: data.map((img)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${img.thumbnail})`,
                            backgroundSize: "cover"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            href: `/innerpage/${img.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        position: "absolute",
                                        left: "0",
                                        top: "0",
                                        width: "100%",
                                        height: "100%",
                                        padding: "15px 20px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                                        ":hover": {
                                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                                            backdropFilter: "blur(2px)"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: img.tag.map((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .PyButton */ .AJ, {
                                                            text: t.tag_name,
                                                            fs: "10px"
                                                        }, t.id))
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    sx: {
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                            component: "img",
                                                            sx: {
                                                                height: 18,
                                                                width: 18
                                                            },
                                                            alt: "views-icon",
                                                            src: "/blog_page_svgs/icons/Views_Icon.svg"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                            ml: "2px",
                                                            sx: {
                                                                color: "#B2BEB5",
                                                                fontSize: "12px"
                                                            },
                                                            children: [
                                                                img.views,
                                                                "  views"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "h6",
                                                sx: {
                                                    width: {
                                                        md: "44%"
                                                    }
                                                },
                                                children: img.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        children: [
                                                            "by ",
                                                            img.author
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        sx: {
                                                            color: "#B2BEB5",
                                                            fontSize: "12px"
                                                        },
                                                        children: img.creation_date
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, img.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .CDPagination */ .PB, {
                totl_pages: Math.ceil(ttl_items / 10),
                handleChange: handlePageChange
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ CSMobileWeb)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("p")({
    color: "white",
    fontSize: "17px",
    marginTop: "4rem",
    width: {
        xs: "100%",
        md: "52%"
    },
    margin: "10px 0"
});
const CSMobileWeb = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxWidth: "xl",
        sx: {
            padding: {
                sm: "50px 0 0 0",
                md: "0"
            },
            height: "400px",
            backgroundImage: "url('/casestudies_svgs/bg/First_Background.svg')",
            display: "flex",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                width: "80%",
                margin: "0 auto",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "50%"
                        },
                        margin: {
                            xs: "0",
                            md: "100px 0 0 0"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h2",
                            sx: {
                                fontWeight: "500"
                            },
                            children: "Case Studies"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                            children: "Our case studies demonstrate the quality, speed, and cost efficiency of our work. We have consistently delivered successful projects across a variety of industries which have resulted in increased revenue and customer satisfaction."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "50%"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        component: "img",
                        sx: {
                            margin: {
                                xs: "0",
                                md: "0 auto"
                            },
                            mt: {
                                xs: "20px",
                                md: "10px"
                            },
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        },
                        src: "/casestudies_svgs/CS_Mobile_Web.svg"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ CotactFormSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8855);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7975);
/* harmony import */ var _styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_13__, axios__WEBPACK_IMPORTED_MODULE_15__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_13__, axios__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const BootstrapInput = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_8___default()))(({ theme  })=>({
        "& .MuiInputBase-input": {
            borderRadius: "25px",
            color: "#FFFFFF",
            position: "relative",
            backgroundColor: "transparent",
            border: "1px solid #FFFFFF",
            fontSize: 15,
            width: "100%",
            padding: "5px 5px 5px 12px",
            transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow", 
            ]),
            fontFamily: [
                "monospace", 
            ].join(","),
            "&:focus": {
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2);",
                outline: "none"
            }
        }
    }));
const AbLabel = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)("label")({
    marginLeft: "20px",
    marginTop: "10px",
    fontSize: "13px"
});
const AbLabelOne = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)("label")({
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "-10px",
    fontSize: "13px"
});
const AbTextArea = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)("textarea")({
    height: "85px",
    fontFamily: "monospace",
    flexGrow: "1",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "1px solid white",
    borderRadius: "13px",
    padding: "5px 0 0 10px",
    "&:focus": {
        outline: "none",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2);"
    }
});
const CotactFormSection = (props)=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: nameError , 1: setNameError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: phoneError , 1: setphoneError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: emailError , 1: setemailError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: companynameError , 1: setcompanynameError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: nameErrorOne , 1: setNameErrorOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: phoneErrorOne , 1: setphoneErrorOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: emailErrorOne , 1: setemailErrorOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: companynameErrorOne , 1: setcompanynameErrorOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const emailcd = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const data = router.query;
    const [active1, setActive1] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active2, setActive2] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active3, setActive3] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active4, setActive4] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active5, setActive5] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active6, setActive6] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active7, setActive7] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active8, setActive8] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    // function for handleClick
    const handleClick1 = ()=>{
        setActive1(!active1);
    };
    const handleClick2 = ()=>{
        setActive2(!active2);
    };
    const handleClick3 = ()=>{
        setActive3(!active3);
    };
    const handleClick4 = ()=>{
        setActive4(!active4);
    };
    const handleClick5 = ()=>{
        setActive5(!active5);
    };
    const handleClick6 = ()=>{
        setActive6(!active6);
    };
    const handleClick7 = ()=>{
        setActive7(!active7);
    };
    const handleClick8 = ()=>{
        setActive8(!active8);
    };
    const [active9, setActive9] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active10, setActive10] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active11, setActive11] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active12, setActive12] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active13, setActive13] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active14, setActive14] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active15, setActive15] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active16, setActive16] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active17, setActive17] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active18, setActive18] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active19, setActive19] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active20, setActive20] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active21, setActive21] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active22, setActive22] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active23, setActive23] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active24, setActive24] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active25, setActive25] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [active26, setActive26] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    // function for handleClick
    const handleClick9 = ()=>{
        setActive9(!active9);
    };
    const handleClick10 = ()=>{
        setActive10(!active10);
    };
    const handleClick11 = ()=>{
        setActive11(!active11);
    };
    const handleClick12 = ()=>{
        setActive12(!active12);
    };
    const handleClick13 = ()=>{
        setActive13(!active13);
    };
    const handleClick14 = ()=>{
        setActive14(!active14);
    };
    const handleClick15 = ()=>{
        setActive15(!active15);
    };
    const handleClick16 = ()=>{
        setActive16(!active16);
    };
    const handleClick17 = ()=>{
        setActive17(!active17);
    };
    const handleClick18 = ()=>{
        setActive18(!active18);
    };
    const handleClick19 = ()=>{
        setActive19(!active19);
    };
    const handleClick20 = ()=>{
        setActive20(!active20);
    };
    const handleClick21 = ()=>{
        setActive21(!active21);
    };
    const handleClick22 = ()=>{
        setActive22(!active22);
    };
    const handleClick23 = ()=>{
        setActive23(!active23);
    };
    const handleClick24 = ()=>{
        setActive24(!active24);
    };
    const handleClick25 = ()=>{
        setActive25(!active25);
    };
    const handleClick26 = ()=>{
        setActive26(!active26);
    };
    const firstRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const lastRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    //Referal Link    
    const refValue = js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("ref") ? `New Submission from ref " ${js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("ref")} "` : "New Submission";
    //Form Validation
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        FullName: "",
        PhoneNumber: "",
        Email: "",
        CompanyName: "",
        Seleted_pricing_value: `${data.name}`,
        subject: `${refValue}`
    });
    const updateForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleClick = ()=>{
        if (form.FullName === "") {
            setNameError(true);
            setNameErrorOne(true);
            setemailError(false);
            setemailErrorOne(false);
            setphoneError(false);
            setphoneErrorOne(false);
            setcompanynameError(false);
            setcompanynameErrorOne(false);
            setTimeout(()=>{
                setNameError(false);
            }, 500);
        } else if (form.PhoneNumber === "") {
            setphoneError(true);
            setphoneErrorOne(true);
            setNameError(false);
            setNameErrorOne(false);
            setemailError(false);
            setemailErrorOne(false);
            setcompanynameError(false);
            setcompanynameErrorOne(false);
            setTimeout(()=>{
                setphoneError(false);
            }, 500);
        } else if (!form.Email || emailcd.test(form.Email) === false) {
            setemailError(true);
            setemailErrorOne(true);
            setNameError(false);
            setNameErrorOne(false);
            setphoneError(false);
            setphoneErrorOne(false);
            setcompanynameErrorOne(false);
            setTimeout(()=>{
                setemailError(false);
            }, 500);
        } else if (form.CompanyName === "") {
            setcompanynameError(true);
            setemailError(false);
            setemailErrorOne(false);
            setNameError(false);
            setNameErrorOne(false);
            setphoneError(false);
            setphoneErrorOne(false);
            setcompanynameErrorOne(true);
            setTimeout(()=>{
                setcompanynameError(false);
            }, 500);
        } else {
            setCount(count + 1);
            setcompanynameError(false);
            setcompanynameErrorOne(false);
            setemailError(false);
            setemailErrorOne(false);
            setNameError(false);
            setNameErrorOne(false);
            setphoneError(false);
            setphoneErrorOne(false);
        }
    };
    // Function For post form data to backend
    const handelFormSubmit = async (e)=>{
        e.preventDefault();
        axios__WEBPACK_IMPORTED_MODULE_15__["default"].post(`${process.env.NEXT_PUBLIC_BASE_API}/email/`, form).then((res)=>console.log(res)).catch((err)=>console.log(err));
        // refresh page after submit form 
        window.location.reload(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            paddingRight: {
                xs: "2rem !important",
                md: "4rem !important",
                lg: "1rem",
                xl: "1rem"
            },
            height: {
                lg: `${props.formheight1}`,
                md: `${props.formheight2}`,
                sm: `${props.formheight3}`,
                xs: `${props.formheight4}`,
                xl: `${props.formheight5}`
            },
            backgroundImage: `url(${props.bgimgurl})`,
            padding: "50px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            maxWidth: "xl",
            className: "containerSection",
            sx: {
                alignItems: "start",
                marginTop: {
                    xs: "4rem",
                    md: "7rem",
                    lg: "5rem",
                    xl: "5rem"
                },
                marginBottom: {
                    xs: "4rem",
                    md: "5rem",
                    lg: "5rem",
                    xl: "5rem"
                },
                paddingLeft: {
                    xs: "3rem",
                    md: "1rem !important",
                    lg: "0rem !important",
                    xl: "0rem !important"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                rowSpacing: 2,
                columnSpacing: {
                    xs: 1,
                    sm: 2,
                    md: 1
                },
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                sx: {
                    display: "flex",
                    flexDirection: {
                        lg: "row",
                        md: "column",
                        sm: "column",
                        xs: "column",
                        xl: "row"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                        sx: {
                            width: {
                                lg: "64%",
                                md: "60%",
                                sm: "100%"
                            },
                            height: {
                                lg: "435px",
                                xl: "435px",
                                md: "auto"
                            },
                            pt: {
                                lg: "38px"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "h3",
                                component: "h2",
                                sx: {
                                    fontSize: "1.3rem"
                                },
                                children: "SHARE PROJECT DETAILS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "h3",
                                component: "h2",
                                sx: {
                                    fontSize: {
                                        lg: "4.2rem",
                                        sm: "4.2rem",
                                        md: "4.2rem",
                                        xs: "3.2rem",
                                        xl: "4.2rem"
                                    }
                                },
                                children: "Help us understand"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "h3",
                                component: "h2",
                                sx: {
                                    fontSize: {
                                        lg: "4rem",
                                        sm: "4rem",
                                        md: "4rem",
                                        xs: "3rem",
                                        xl: "4rem"
                                    },
                                    fontWeight: "bold"
                                },
                                children: "Your requirements"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "body1",
                                component: "h2",
                                sx: {
                                    fontSize: {
                                        lg: "17px",
                                        sm: "17px",
                                        md: "17px",
                                        xs: "1rem",
                                        xl: "17px"
                                    },
                                    width: {
                                        lg: "52%",
                                        sm: "54%",
                                        md: "66%",
                                        xs: "82%",
                                        xl: "60%"
                                    },
                                    mt: "30px"
                                },
                                children: "Our pricing models are designed carefully to provide customized solution from start-ups to enterprises. Schedule a free consultation meeting if you couldn't identify a plan that suits your demand."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                        id: "contect",
                        sx: {
                            width: {
                                lg: "30%",
                                md: "50%",
                                sm: "55%"
                            },
                            mt: {
                                sm: "50px",
                                xs: "50px",
                                md: "38px",
                                lg: "38px",
                                xl: "0px"
                            },
                            height: {
                                lg: "435px",
                                xl: "435px",
                                md: "428px",
                                sm: "428px",
                                xs: "428px"
                            },
                            border: "2px solid white",
                            borderRadius: "25px",
                            paddingLeft: "15px",
                            paddingRight: "15px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handelFormSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        className: "field1",
                                        sx: {
                                            display: count === 1 ? "flex" : "none",
                                            flexDirection: "column",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                variant: "standard",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabel, {
                                                        className: "label",
                                                        htmlFor: "fullname",
                                                        children: "Full Name*"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {
                                                        defaultValue: "",
                                                        id: "fullname",
                                                        name: "FullName",
                                                        onChange: updateForm,
                                                        value: form.FullName,
                                                        sx: {
                                                            "& .MuiInputBase-input": {
                                                                backgroundColor: nameErrorOne ? "#0E2634" : null
                                                            }
                                                        },
                                                        className: nameError ? (_styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16___default().edde) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                variant: "standard",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabel, {
                                                        className: "label",
                                                        htmlFor: "phonenumber",
                                                        children: "Phone Number*"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {
                                                        defaultValue: "",
                                                        id: "phonenumber",
                                                        name: "PhoneNumber",
                                                        onChange: updateForm,
                                                        value: form.PhoneNumber,
                                                        sx: {
                                                            "& .MuiInputBase-input": {
                                                                backgroundColor: phoneErrorOne ? "#0E2634" : null
                                                            }
                                                        },
                                                        className: phoneError ? (_styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16___default().edde) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabel, {
                                                        className: "label",
                                                        htmlFor: "email",
                                                        children: "Email*"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {
                                                        defaultValue: "",
                                                        id: "email",
                                                        name: "Email",
                                                        onChange: updateForm,
                                                        value: form.Email,
                                                        sx: {
                                                            "& .MuiInputBase-input": {
                                                                backgroundColor: emailErrorOne ? "#0E2634" : null
                                                            }
                                                        },
                                                        className: emailError ? (_styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16___default().edde) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabel, {
                                                        className: "label",
                                                        htmlFor: "companyname",
                                                        children: "Company Name*"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {
                                                        defaultValue: "",
                                                        id: "companyname",
                                                        name: "CompanyName",
                                                        onChange: updateForm,
                                                        value: form.CompanyName,
                                                        sx: {
                                                            "& .MuiInputBase-input": {
                                                                backgroundColor: companynameErrorOne ? "#0E2634" : null
                                                            }
                                                        },
                                                        className: companynameError ? (_styles_Contactformsection_module_css__WEBPACK_IMPORTED_MODULE_16___default().edde) : null
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        sx: {
                                            display: count === 2 ? "flex" : "none",
                                            flexDirection: "column",
                                            width: {
                                                lg: "114%",
                                                md: "fit-content",
                                                xl: "fit-content",
                                                xs: "fit-content",
                                                sm: "fit-content",
                                                md: "fit-content"
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                    sx: {
                                                        mt: "10px",
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            children: "What Can We  Do For You?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            variant: "standard",
                                                            Select: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    marginTop: "20px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "btncheck1",
                                                                        name: "IDEATION And VALIDATION OF PRODUCT IDEA",
                                                                        onChange: updateForm,
                                                                        ref: firstRef,
                                                                        value: "Tag_Selected",
                                                                        style: {
                                                                            display: "contents"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        onClick: handleClick1,
                                                                        htmlFor: "btncheck1",
                                                                        style: {
                                                                            borderRadius: "20px",
                                                                            border: active1 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                            padding: "6px 8px",
                                                                            backgroundColor: active1 ? `${props.colorea2}` : null,
                                                                            borderRadius: "25px"
                                                                        },
                                                                        children: "IDEATION & VALIDATION OF PRODUCT IDEA"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "btncheck2",
                                                                        name: "COMPLETE PRODUCT DEVELOPMENT",
                                                                        value: "Tag_Selected",
                                                                        onChange: updateForm,
                                                                        ref: lastRef,
                                                                        style: {
                                                                            display: "contents"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        onClick: handleClick2,
                                                                        htmlFor: "btncheck2",
                                                                        style: {
                                                                            border: active2 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                            borderRadius: "20px",
                                                                            padding: "6px 8px",
                                                                            backgroundColor: active2 ? `${props.colorea2}` : null,
                                                                            borderRadius: "25px"
                                                                        },
                                                                        children: "COMPLETE PRODUCT DEVELOPMENT"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck3",
                                                                                name: "DATA SCIENCE",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick3,
                                                                                className: "checkbox",
                                                                                htmlFor: "btncheck3",
                                                                                style: {
                                                                                    border: active3 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active3 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "DATA SCIENCE"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck4",
                                                                                name: "ENGINEERING",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick4,
                                                                                htmlFor: "btncheck4",
                                                                                style: {
                                                                                    border: active4 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active4 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "ENGINEERING"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck5",
                                                                                name: "MACHINE LEARNING",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick5,
                                                                                htmlFor: "btncheck5",
                                                                                style: {
                                                                                    border: active5 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active5 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "MACHINE LEARNING"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck6",
                                                                                name: "CLOUD/DEVEOPS",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick6,
                                                                                htmlFor: "btncheck6",
                                                                                style: {
                                                                                    border: active6 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active6 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "CLOUD/DEVEOPS"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    mb: "10px",
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck7",
                                                                                name: "DIGITIZATION",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick7,
                                                                                htmlFor: "btncheck7",
                                                                                style: {
                                                                                    border: active7 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active7 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "DIGITIZATION"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck8",
                                                                                name: "PROCESS AUTOMATION",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick8,
                                                                                htmlFor: "btncheck8",
                                                                                style: {
                                                                                    border: active8 ? `${props.f2border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active8 ? `${props.colorea2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "PROCESS AUTOMATION"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        className: "field3",
                                        sx: {
                                            display: count === 3 ? "flex" : "none",
                                            flexDirection: "column",
                                            width: "fit-content"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                    sx: {
                                                        mt: "10px",
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            children: "Are There Any Technologies You Want To Specify?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            variant: "standard",
                                                            Select: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "20px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck9",
                                                                                name: "ANDROID",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick9,
                                                                                htmlFor: "btncheck9",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active9 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active9 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "ANDROID"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck10",
                                                                                name: "IOS",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick10,
                                                                                htmlFor: "btncheck10",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active10 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active10 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "IOS"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck11",
                                                                                name: "KOTLIN",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick11,
                                                                                htmlFor: "btncheck11",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active11 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active11 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "KOTLIN"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck12",
                                                                                name: "FLUTTER",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick12,
                                                                                htmlFor: "btncheck12",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active12 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active12 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "FLUTTER"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck13",
                                                                                name: "REACT NATIVE",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick13,
                                                                                htmlFor: "btncheck13",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active13 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active13 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "REACT NATIVE"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck14",
                                                                                name: "REACT",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick14,
                                                                                htmlFor: "btncheck14",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active14 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active14 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "REACT"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck15",
                                                                                name: "ANGULAR",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick15,
                                                                                htmlFor: "btncheck15",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active15 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active15 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "ANGULAR"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck16",
                                                                                name: "VUE",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick16,
                                                                                htmlFor: "btncheck16",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active16 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active16 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "VUE"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck17",
                                                                                name: "RUBY",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick17,
                                                                                htmlFor: "btncheck17",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active17 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active17 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "RUBY"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck18",
                                                                                name: "NODE",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick18,
                                                                                htmlFor: "btncheck18",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active18 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active18 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "NODE"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck19",
                                                                                name: "JAVA",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick19,
                                                                                htmlFor: "btncheck19",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active19 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active19 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "JAVA"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck20",
                                                                                name: "PHP",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick20,
                                                                                htmlFor: "btncheck20",
                                                                                style: {
                                                                                    borderRadius: "20px",
                                                                                    border: active20 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    padding: "6px 12px",
                                                                                    backgroundColor: active20 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "PHP"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck21",
                                                                                name: "MACHINE LEARNING",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick21,
                                                                                htmlFor: "btncheck21",
                                                                                style: {
                                                                                    border: active21 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active21 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "MACHINE LEARNING"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck22",
                                                                                name: "QUALITY ASSURANCE",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick22,
                                                                                htmlFor: "btncheck22",
                                                                                style: {
                                                                                    border: active22 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active22 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "QUALITY ASSURANCE"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck23",
                                                                                name: "PYTHON",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick23,
                                                                                htmlFor: "btncheck23",
                                                                                style: {
                                                                                    border: active23 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active23 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "PYTHON"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck24",
                                                                                name: "SALESFORCE DEVELOPMENT",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick24,
                                                                                htmlFor: "btncheck24",
                                                                                style: {
                                                                                    border: active24 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active24 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "SALESFORCE DEVELOPMENT"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    marginTop: "30px",
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        lg: "13px",
                                                                        xl: "13px",
                                                                        md: "13px",
                                                                        sm: "12px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        sx: {
                                                                            mr: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck25",
                                                                                name: "DEVOPS",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick25,
                                                                                htmlFor: "btncheck25",
                                                                                style: {
                                                                                    border: active25 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active25 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "DEVOPS"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "btncheck26",
                                                                                name: "RUBY ON RAILS",
                                                                                value: "Tag_Selected",
                                                                                onChange: updateForm,
                                                                                style: {
                                                                                    display: "contents"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                onClick: handleClick26,
                                                                                htmlFor: "btncheck26",
                                                                                style: {
                                                                                    border: active26 ? `${props.f3border1}` : "1px solid #FFFFFF",
                                                                                    borderRadius: "20px",
                                                                                    padding: "6px 8px",
                                                                                    backgroundColor: active26 ? `${props.formthreecolor2}` : null,
                                                                                    borderRadius: "25px"
                                                                                },
                                                                                children: "RUBY ON  RAILS"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        className: "field4",
                                        sx: {
                                            display: count === 4 ? "flex" : "none",
                                            flexDirection: "column",
                                            width: {
                                                lg: "100%",
                                                sm: "100%",
                                                md: "100%",
                                                xs: "80%"
                                            },
                                            pt: {
                                                lg: "0px",
                                                xl: "0px",
                                                md: "40px",
                                                sm: "40px",
                                                xs: "40px"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                variant: "standard",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabelOne, {
                                                        className: "label",
                                                        htmlFor: "fullname",
                                                        children: "How Soon Would You Like To Start?"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        name: "How Soon Would You Like To Start",
                                                        sx: {
                                                            width: "100%",
                                                            border: "1px solid #FFFFFF",
                                                            borderRadius: "13px",
                                                            padding: "5px 0 0 10px",
                                                            borderRadius: "25px",
                                                            backgroundColor: "transparent",
                                                            color: "white",
                                                            "& .MuiSvgIcon-root": {
                                                                color: "white"
                                                            },
                                                            ".MuiSelect-outlined": {
                                                                color: "white",
                                                                borderBottom: "0px"
                                                            },
                                                            "&:before": {
                                                                borderBottom: "0px",
                                                                content: "none"
                                                            },
                                                            "&:after": {
                                                                borderBottom: "0px"
                                                            },
                                                            ".label+.css-17y24d0-MuiInputBase-root-MuiInput-root-MuiSelect-root": {
                                                                mt: "6px"
                                                            }
                                                        },
                                                        onChange: updateForm,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "TODAY",
                                                                children: "TODAY"
                                                            }, "TODAY"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "TOMORROW",
                                                                children: "TOMORROW"
                                                            }, "TOMORROW"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "YESTERDAY",
                                                                children: "YESTERDAY"
                                                            }, "YESTERDAY")
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                variant: "standard",
                                                sx: {
                                                    mt: "5px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        focused: false,
                                                        id: "labelId",
                                                        sx: {
                                                            marginLeft: "20px",
                                                            color: "#FFFFFF",
                                                            fontSize: {
                                                                lg: "13px",
                                                                xs: "11px",
                                                                sm: "13px",
                                                                md: "13px",
                                                                xl: "13px"
                                                            },
                                                            mt: "5px",
                                                            fontWeight: "bold"
                                                        },
                                                        children: "WHAT'S YOUR BUDGET RANGE?"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        name: "WHAT'S YOUR BUDGET RANGE?",
                                                        label: "Age",
                                                        sx: {
                                                            width: "100%",
                                                            border: "1px solid #FFFFFF",
                                                            borderRadius: "13px",
                                                            padding: "5px 0 0 10px",
                                                            borderRadius: "25px",
                                                            backgroundColor: "transparent",
                                                            color: "white",
                                                            "& .MuiSvgIcon-root": {
                                                                color: "white"
                                                            },
                                                            ".MuiSelect-outlined": {
                                                                color: "white",
                                                                borderBottom: "0px"
                                                            },
                                                            "&:before": {
                                                                borderBottom: "0px",
                                                                content: "none"
                                                            },
                                                            "&:after": {
                                                                borderBottom: "0px"
                                                            }
                                                        },
                                                        onChange: updateForm,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "Ten",
                                                                children: "Ten"
                                                            }, "Ten"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "Twenty",
                                                                children: "Twenty"
                                                            }, "Twenty"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                value: "Thirty",
                                                                children: "Thirty"
                                                            }, "Thirty")
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbLabel, {
                                                        className: "label",
                                                        sx: {
                                                            fontSize: "15px",
                                                            mb: "5px"
                                                        },
                                                        htmlFor: "Tell us more about idea.",
                                                        children: "Tell us more about idea"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AbTextArea, {
                                                        name: "Tell us more about idea",
                                                        onChange: updateForm
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            count === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                sx: {
                                    textAlign: {
                                        lg: "right",
                                        xl: "right",
                                        sm: "right",
                                        md: "right",
                                        xs: "center"
                                    },
                                    mt: "25px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                    variant: "outlined",
                                    size: "small",
                                    onClick: handleClick,
                                    sx: {
                                        padding: "3px 18px",
                                        backgroundColor: "#FFFFFF",
                                        color: "#0E2634",
                                        borderColor: "white",
                                        borderRadius: "25px",
                                        ":hover": {
                                            color: "#0E2634",
                                            backgroundColor: `${props.buttonbackgroundcolor}`,
                                            borderColor: "#FFFFFF"
                                        }
                                    },
                                    children: "NEXT"
                                })
                            }) : null,
                            count === 2 || count === 3 || count === 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                sx: {
                                    mt: "25px",
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                        variant: "outlined",
                                        size: "small",
                                        onClick: ()=>setCount(count - 1),
                                        sx: {
                                            padding: "3px 18px",
                                            backgroundColor: "#0E2634",
                                            color: "#FFFFFF",
                                            borderColor: "#0E2634",
                                            borderRadius: "25px",
                                            ":hover": {
                                                color: "#FFFFFF",
                                                backgroundColor: "#0E2634",
                                                borderColor: "#0E2634"
                                            }
                                        },
                                        children: "BACK"
                                    }),
                                    count === 2 || count === 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                        variant: "outlined",
                                        size: "small",
                                        onClick: handleClick,
                                        sx: {
                                            padding: "3px 18px",
                                            backgroundColor: "#FFFFFF",
                                            color: "#0E2634",
                                            borderColor: "white",
                                            borderRadius: "25px",
                                            ":hover": {
                                                color: "#0E2634",
                                                backgroundColor: `${props.buttonbackgroundcolor}`,
                                                borderColor: "#FFFFFF"
                                            }
                                        },
                                        children: "NEXT"
                                    }) : null,
                                    count === 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                        variant: "outlined",
                                        size: "small",
                                        type: "submit",
                                        id: "submitBtn",
                                        sx: {
                                            padding: "3px 18px",
                                            backgroundColor: "#FFFFFF",
                                            color: "#0E2634",
                                            borderColor: "#FFFFFF",
                                            borderRadius: "25px",
                                            ":hover": {
                                                color: "#0E2634",
                                                backgroundColor: "#FFFFFF",
                                                borderColor: "#FFFFFF"
                                            }
                                        },
                                        children: "SEND"
                                    }) : null
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BookaCall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3083);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);







// import Button from "@mui/material/Button";


const BookaCall = ()=>{
    //testing
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            // height: '40rem',
            paddingRight: {
                xs: "2rem !important",
                md: "4rem !important"
            },
            backgroundImage: "url(/backgroundImages/contact_bg/Background_Image_2.svg)",
            padding: "50px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            maxWidth: "xl",
            className: "containerSection",
            // how to popup link in react js
            sx: {
                alignItems: "start",
                marginTop: {
                    xs: "0rem",
                    md: "9rem",
                    lg: "2rem",
                    xl: "2rem"
                },
                marginBottom: {
                    xs: "2rem",
                    md: "2rem",
                    lg: "2rem",
                    xl: "2rem"
                },
                paddingLeft: {
                    xs: "3rem",
                    md: "9rem !important",
                    lg: "6rem !important",
                    xl: "6rem !important"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                rowSpacing: 2,
                columnSpacing: {
                    xs: 1,
                    sm: 2,
                    md: 1
                },
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "h2",
                                component: "h2",
                                sx: {
                                    fontSize: "4rem"
                                },
                                children: "Book A Call Right"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "h2",
                                component: "h2",
                                sx: {
                                    fontWeight: "600",
                                    fontSize: "4rem"
                                },
                                children: "Away Here!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        md: 5,
                        sx: {
                            textAlign: "-webkit-center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_6__/* .BookACallButton */ .rB, {
                                onClick: handleOpen,
                                text: "BOOK A CALL"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
                                sx: {
                                    width: "100%"
                                },
                                open: open,
                                onClose: handleClose,
                                "aria-labelledby": "modal-modal-title",
                                "aria-describedby": "modal-modal-description",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                    sx: {
                                        width: {
                                            lg: "800px",
                                            md: "650px",
                                            xl: "1000px",
                                            sm: "500px",
                                            xs: "300px"
                                        },
                                        height: {
                                            lg: "90%",
                                            md: "90%",
                                            xl: "90%",
                                            sm: "90%",
                                            xs: "70%"
                                        },
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        position: "absolute "
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                            sx: {
                                                textAlign: "right"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            width: "100%",
                                            height: "100%",
                                            style: {
                                                borderWidth: 0
                                            },
                                            src: "https://calendly.com/usama2762"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ UrgentMatter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);







const UrgentMatter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: "40rem",
            paddingRight: "4rem !important",
            backgroundImage: "url(/backgroundImages/contact_bg/BackgroundImage3.svg)",
            padding: "50px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            maxWidth: "xl",
            className: "containerSection",
            sx: {
                alignItems: "start",
                paddingLeft: {
                    xs: "6rem",
                    md: "9rem !important"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                rowSpacing: 2,
                columnSpacing: {
                    xs: 1,
                    sm: 2,
                    md: 1
                },
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h2",
                                component: "h2",
                                sx: {
                                    fontSize: "4rem",
                                    fontWeight: "400"
                                },
                                children: [
                                    "Urgent ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Matter?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h5",
                                component: "h5",
                                sx: {
                                    marginTop: "2rem",
                                    width: {
                                        xs: "100%",
                                        md: "44%"
                                    }
                                },
                                children: "Call us or reach out with any preferable messanger"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        md: 6,
                        sx: {
                            textAlign: "-webkit-center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h5",
                                component: "h5",
                                sx: {
                                    marginTop: "2rem",
                                    textAlign: {
                                        xs: "left",
                                        md: "right"
                                    }
                                },
                                children: "+447883237790"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h5",
                                component: "h5",
                                sx: {
                                    marginTop: "2rem",
                                    textAlign: {
                                        xs: "left",
                                        md: "right"
                                    }
                                },
                                children: "info@coaldev.com"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                // +447883237790 
                                sx: {
                                    mt: 4,
                                    justifyContent: {
                                        sm: "left",
                                        md: "right"
                                    }
                                },
                                display: "flex",
                                flexDirection: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://web.facebook.com/CoalDev",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: 35,
                                                mr: 1
                                            },
                                            src: "/assets/social_home/facebook.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.linkedin.com/company/coaldev",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: 35,
                                                mr: 1
                                            },
                                            src: "/assets/social_home/linkedin.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://twitter.com/Coaldev1",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: 35,
                                                mr: 1
                                            },
                                            src: "/assets/social_home/twitter.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.instagram.com/accounts/login",
                                        target: "blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            component: "img",
                                            sx: {
                                                color: "white",
                                                width: 35,
                                                mr: 1
                                            },
                                            src: "/assets/social_home/instagram.svg"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer_jsx__WEBPACK_IMPORTED_MODULE_1__.$),
/* harmony export */   "C2": () => (/* reexport safe */ _contact_us_section2_BookaCall_jsx__WEBPACK_IMPORTED_MODULE_19__.C),
/* harmony export */   "CB": () => (/* reexport safe */ _career_page_sections_section_first_Workwithus_jsx__WEBPACK_IMPORTED_MODULE_9__.C),
/* harmony export */   "F7": () => (/* reexport safe */ _innerpage_section_Innerpage_sec2_jsx__WEBPACK_IMPORTED_MODULE_25__.F),
/* harmony export */   "Gr": () => (/* reexport safe */ _technologies_section3_TechnologicalExpertise_jsx__WEBPACK_IMPORTED_MODULE_12__.G),
/* harmony export */   "Ki": () => (/* reexport safe */ _blog_sections_section_two_BlogGrid_jsx__WEBPACK_IMPORTED_MODULE_22__.K),
/* harmony export */   "L2": () => (/* reexport safe */ _pricingpage_section_Pricingpage_jsx__WEBPACK_IMPORTED_MODULE_26__.L),
/* harmony export */   "N3": () => (/* reexport safe */ _section_ourservices_OurServices_jsx__WEBPACK_IMPORTED_MODULE_5__.N),
/* harmony export */   "Q7": () => (/* reexport safe */ _case_studies_sections_section_zero_CSMobileWeb_jsx__WEBPACK_IMPORTED_MODULE_16__.Q),
/* harmony export */   "RE": () => (/* reexport safe */ _contact_us_section1_CotactFormSection_jsx__WEBPACK_IMPORTED_MODULE_20__.R),
/* harmony export */   "W4": () => (/* reexport safe */ _innerpage_section_Innerpage_sec1_jsx__WEBPACK_IMPORTED_MODULE_23__.W),
/* harmony export */   "WM": () => (/* reexport safe */ _section_cover_and_services_CoverAndServices_jsx__WEBPACK_IMPORTED_MODULE_6__.W),
/* harmony export */   "a2": () => (/* reexport safe */ _section_industries_Industries_jsx__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   "dB": () => (/* reexport safe */ _section_happyClients_HappyClients_jsx__WEBPACK_IMPORTED_MODULE_4__.d),
/* harmony export */   "dl": () => (/* reexport safe */ _services_page_sectiions_section_first_SeServices_jsx__WEBPACK_IMPORTED_MODULE_14__.d),
/* harmony export */   "e6": () => (/* reexport safe */ _services_page_sectiions_section_second_Tech_jsx__WEBPACK_IMPORTED_MODULE_15__.e),
/* harmony export */   "f5": () => (/* reexport safe */ _technologies_section2_KeyDevelopment_jsx__WEBPACK_IMPORTED_MODULE_11__.f),
/* harmony export */   "h4": () => (/* reexport safe */ _Header_jsx__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "h7": () => (/* reexport safe */ _section_messageus_MessageUs_jsx__WEBPACK_IMPORTED_MODULE_2__.h),
/* harmony export */   "iJ": () => (/* reexport safe */ _case_studies_sections_section_first_CaseStudies_jsx__WEBPACK_IMPORTED_MODULE_17__.i),
/* harmony export */   "iN": () => (/* reexport safe */ _technologies_section5_ReadBlogs_jsx__WEBPACK_IMPORTED_MODULE_13__.i),
/* harmony export */   "i_": () => (/* reexport safe */ _contact_us_section3_UrgentMatter_jsx__WEBPACK_IMPORTED_MODULE_18__.i),
/* harmony export */   "n3": () => (/* reexport safe */ _section_tech_we_use_TechWeUse_jsx__WEBPACK_IMPORTED_MODULE_7__.n),
/* harmony export */   "o4": () => (/* reexport safe */ _FAQ_page_sections_faq_section_FaqSection_jsx__WEBPACK_IMPORTED_MODULE_8__.o),
/* harmony export */   "s_": () => (/* reexport safe */ _blog_sections_section_first_BlogHead_jsx__WEBPACK_IMPORTED_MODULE_21__.s),
/* harmony export */   "wY": () => (/* reexport safe */ _innerpage_section_Innerpage2_sec2_jsx__WEBPACK_IMPORTED_MODULE_24__.w),
/* harmony export */   "y$": () => (/* reexport safe */ _technologies_section1_TechStack_jsx__WEBPACK_IMPORTED_MODULE_10__.y)
/* harmony export */ });
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1932);
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6124);
/* harmony import */ var _section_messageus_MessageUs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4879);
/* harmony import */ var _section_industries_Industries_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6362);
/* harmony import */ var _section_happyClients_HappyClients_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4035);
/* harmony import */ var _section_ourservices_OurServices_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6090);
/* harmony import */ var _section_cover_and_services_CoverAndServices_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9945);
/* harmony import */ var _section_tech_we_use_TechWeUse_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1726);
/* harmony import */ var _FAQ_page_sections_faq_section_FaqSection_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6151);
/* harmony import */ var _career_page_sections_section_first_Workwithus_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1732);
/* harmony import */ var _technologies_section1_TechStack_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8695);
/* harmony import */ var _technologies_section2_KeyDevelopment_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8220);
/* harmony import */ var _technologies_section3_TechnologicalExpertise_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1291);
/* harmony import */ var _technologies_section5_ReadBlogs_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6661);
/* harmony import */ var _services_page_sectiions_section_first_SeServices_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1309);
/* harmony import */ var _services_page_sectiions_section_second_Tech_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1663);
/* harmony import */ var _case_studies_sections_section_zero_CSMobileWeb_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9712);
/* harmony import */ var _case_studies_sections_section_first_CaseStudies_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1120);
/* harmony import */ var _contact_us_section3_UrgentMatter_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8234);
/* harmony import */ var _contact_us_section2_BookaCall_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1548);
/* harmony import */ var _contact_us_section1_CotactFormSection_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4844);
/* harmony import */ var _blog_sections_section_first_BlogHead_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6519);
/* harmony import */ var _blog_sections_section_two_BlogGrid_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(286);
/* harmony import */ var _innerpage_section_Innerpage_sec1_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4525);
/* harmony import */ var _innerpage_section_Innerpage2_sec2_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5974);
/* harmony import */ var _innerpage_section_Innerpage_sec2_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7289);
/* harmony import */ var _pricingpage_section_Pricingpage_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_section_messageus_MessageUs_jsx__WEBPACK_IMPORTED_MODULE_2__, _FAQ_page_sections_faq_section_FaqSection_jsx__WEBPACK_IMPORTED_MODULE_8__, _technologies_section5_ReadBlogs_jsx__WEBPACK_IMPORTED_MODULE_13__, _services_page_sectiions_section_first_SeServices_jsx__WEBPACK_IMPORTED_MODULE_14__, _case_studies_sections_section_first_CaseStudies_jsx__WEBPACK_IMPORTED_MODULE_17__, _contact_us_section1_CotactFormSection_jsx__WEBPACK_IMPORTED_MODULE_20__, _blog_sections_section_two_BlogGrid_jsx__WEBPACK_IMPORTED_MODULE_22__, _innerpage_section_Innerpage_sec1_jsx__WEBPACK_IMPORTED_MODULE_23__, _innerpage_section_Innerpage2_sec2_jsx__WEBPACK_IMPORTED_MODULE_24__, _innerpage_section_Innerpage_sec2_jsx__WEBPACK_IMPORTED_MODULE_25__]);
([_section_messageus_MessageUs_jsx__WEBPACK_IMPORTED_MODULE_2__, _FAQ_page_sections_faq_section_FaqSection_jsx__WEBPACK_IMPORTED_MODULE_8__, _technologies_section5_ReadBlogs_jsx__WEBPACK_IMPORTED_MODULE_13__, _services_page_sectiions_section_first_SeServices_jsx__WEBPACK_IMPORTED_MODULE_14__, _case_studies_sections_section_first_CaseStudies_jsx__WEBPACK_IMPORTED_MODULE_17__, _contact_us_section1_CotactFormSection_jsx__WEBPACK_IMPORTED_MODULE_20__, _blog_sections_section_two_BlogGrid_jsx__WEBPACK_IMPORTED_MODULE_22__, _innerpage_section_Innerpage_sec1_jsx__WEBPACK_IMPORTED_MODULE_23__, _innerpage_section_Innerpage2_sec2_jsx__WEBPACK_IMPORTED_MODULE_24__, _innerpage_section_Innerpage_sec2_jsx__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Landing page sections









// Career page sections


//Technologies page sections




//Services page sections


// CaseStudies page section


//Contact Us page sections



//Blog page sections





//Pricing page sections


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Innerpage2_sec2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(628);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_4__]);
_utils_request__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Innerpage2_sec2 = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { id  } = router.query;
    const idd = id - 1;
    const p1 = idd;
    const p2 = 0;
    const as = idd + 5;
    if (p1 === 0 || p1 === 1 || p1 === 2 || p1 === 3 || p1 === 4 || p1 === 5) {
        p1 = 0;
        p2 = 5;
    } else if (p1 === 7) {
        p1 = 1;
        p2 = 6;
    } else if (p1 === 6 || p1 === 8) {
        p1 = 3;
        p2 = 8;
    } else if (p1 > 8) {
        p1 = p1 - 5;
        p2 = as - 5;
    }
    async function fetchData() {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .serverRequest */ .Pu)("get", "content/", {
            id: `${id}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function fetchpostData(page) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .serverRequest */ .Pu)("get", "content/", {
            page: page
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setPost(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!router.isReady) return;
        fetchpostData(1);
        fetchData(1);
    // fetchTags()
    }, [
        router.isReady
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        sx: {
            backgroundColor: "#FFFFFF"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                display: "flex",
                flexDirection: {
                    lg: "row",
                    xl: "row",
                    md: "row",
                    sm: "column",
                    xs: "column"
                },
                mt: "90px",
                mb: "90px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: "60%",
                        width: {
                            lg: "60%",
                            xl: "60%",
                            md: "60%",
                            sm: "90%",
                            xs: "100%"
                        },
                        display: "flex",
                        flexDirection: "column",
                        pl: "90px",
                        pr: "74px"
                    },
                    children: data.map((imee)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    sx: {
                                        color: "#0E2634",
                                        fontSize: "14px",
                                        fontWeight: "bold"
                                    },
                                    children: imee.short_description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        color: "#213744",
                                        fontSize: "15px",
                                        mt: "20px"
                                    },
                                    children: imee.content
                                })
                            ]
                        }, imee.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: {
                            lg: "20%",
                            xl: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "60%"
                        },
                        mt: {
                            lg: "0px",
                            xl: "0px",
                            md: "0px",
                            sm: "20px",
                            xs: "20px"
                        },
                        ml: {
                            lg: "180px",
                            xl: "180px",
                            md: "150px",
                            sm: "160px",
                            xs: "90px"
                        },
                        height: "100%",
                        backgroundColor: "#E63E2C"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                mt: "30px",
                                mb: "20px",
                                ml: "20px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "Top Posts"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                height: "1px",
                                backgroundColor: "#FFFFFF",
                                mr: "10px",
                                ml: "10px",
                                mb: "15px"
                            }
                        }),
                        post.slice(p1, p2).map((imsd)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mt: "20px",
                                    mb: "20px",
                                    ml: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: `/innerpage/${imsd.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            sx: {
                                                display: "flex",
                                                flexDirection: "row"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    sx: {
                                                        width: "90%"
                                                    },
                                                    children: imsd.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                    component: "img",
                                                    sx: {
                                                        mr: "10px",
                                                        ml: {
                                                            lg: "10px",
                                                            xl: "10px",
                                                            md: "0px",
                                                            sm: "10px",
                                                            xs: "10px"
                                                        }
                                                    },
                                                    src: "/backgroundImages/inner_page/Top_Post_Arrow_Icon.svg"
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, imsd.id))
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Innerpage_sec1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_4__]);
_utils_request__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Innerpage_sec1 = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { id  } = router.query;
    async function fetchData() {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .serverRequest */ .Pu)("get", "content/", {
            id: `${id}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!router.isReady) return;
        fetchData(1);
    }, [
        router.isReady
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((ime)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    height: {
                        lg: "380px",
                        xl: "380px",
                        md: "380px",
                        sm: "380px",
                        xs: "400px"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        widh: "100%",
                        height: "100%",
                        sx: {
                            backgroundImage: `url(${ime.thumbnail})`,
                            width: "100%",
                            height: "100%",
                            backgroundSize: {
                                lg: "cover",
                                xs: "cover",
                                sm: "cover",
                                md: "cover",
                                xl: "cover"
                            },
                            backgroundRepeat: "no-repeat"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            height: {
                                lg: "380px",
                                xl: "380px",
                                md: "380px",
                                sm: "380px",
                                xs: "400px"
                            },
                            mt: {
                                lg: "-380px",
                                xl: "-380px",
                                md: "-380px",
                                sm: "-380px",
                                xs: "-400px"
                            },
                            backgroundColor: "rgba(0, 0, 0, 0.6)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mr: {
                                        lg: "450px",
                                        xl: "450px",
                                        sm: "150px",
                                        md: "450px",
                                        xs: "30px"
                                    },
                                    ml: {
                                        lg: "160px",
                                        xl: "160px",
                                        sm: "160px",
                                        md: "160px",
                                        xs: "80px"
                                    },
                                    mt: "60px",
                                    width: "fit-content"
                                },
                                children: ime.tag.map((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            mt: "25px",
                                            padding: "2px 18px",
                                            backgroundColor: "#FFFFFF",
                                            color: "black",
                                            borderColor: "#FFFFFF",
                                            borderRadius: "25px"
                                        },
                                        children: t.tag_name
                                    }, t.id))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mr: {
                                        lg: "450px",
                                        xl: "450px",
                                        sm: "150px",
                                        md: "450px",
                                        xs: "30px"
                                    },
                                    ml: {
                                        lg: "160px",
                                        xl: "160px",
                                        sm: "160px",
                                        md: "160px",
                                        xs: "80px"
                                    },
                                    mt: "10px",
                                    width: {
                                        md: "60%",
                                        sm: "60%"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h2",
                                    sx: {
                                        fontWeight: "bold",
                                        fontSize: {
                                            lg: "3.5rem",
                                            md: "1.75rem",
                                            sm: "1.75rem",
                                            xs: "1.75rem"
                                        }
                                    },
                                    children: ime.title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mr: {
                                        lg: "450px",
                                        xl: "450px",
                                        sm: "150px",
                                        md: "450px",
                                        xs: "30px"
                                    },
                                    ml: {
                                        lg: "160px",
                                        xl: "160px",
                                        sm: "160px",
                                        md: "160px",
                                        xs: "80px"
                                    },
                                    mt: "15px",
                                    display: "flex",
                                    flexDirection: {
                                        lg: "row",
                                        xl: "row",
                                        sm: "row",
                                        md: "row",
                                        xs: "column"
                                    },
                                    width: {
                                        md: "80%",
                                        sm: "60%",
                                        xs: "74%"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            sx: {
                                                color: "#B2BEB5",
                                                textAlign: "left"
                                            },
                                            children: ime.creation_date
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            ml: {
                                                lg: "150px",
                                                xl: "150px",
                                                sm: "30px",
                                                md: "150px",
                                                xs: "0px"
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            sx: {
                                                fontSize: "12px"
                                            },
                                            children: [
                                                "Written by : ",
                                                ime.author
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            ml: {
                                                lg: "150px",
                                                xl: "150px",
                                                sm: "30px",
                                                md: "150px",
                                                xs: "0px"
                                            },
                                            display: "flex",
                                            flexDirection: "row"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                component: "img",
                                                sx: {
                                                    height: 18,
                                                    width: 18
                                                },
                                                alt: "views-icon",
                                                src: "/blog_page_svgs/icons/Views_Icon.svg"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                ml: "2px",
                                                sx: {
                                                    color: "#B2BEB5",
                                                    textAlign: "right",
                                                    fontSize: "12px"
                                                },
                                                children: [
                                                    ime.views,
                                                    " views"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, ime.id))
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Innerpage_sec2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(628);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_4__]);
_utils_request__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Innerpage_sec2 = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { id  } = router.query;
    const idd = id - 1;
    const p1 = idd;
    const p2 = 0;
    const as = idd + 5;
    if (p1 === 0 || p1 === 1 || p1 === 2 || p1 === 3 || p1 === 4 || p1 === 5) {
        p1 = 0;
        p2 = 5;
    } else if (p1 === 7) {
        p1 = 1;
        p2 = 6;
    } else if (p1 === 6 || p1 === 8) {
        p1 = 3;
        p2 = 8;
    } else if (p1 > 8) {
        p1 = p1 - 5;
        p2 = as - 5;
    }
    async function fetchpostData(page) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .serverRequest */ .Pu)("get", "content/", {
            page: page
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setPost(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    async function fetchData() {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .serverRequest */ .Pu)("get", "content/", {
            id: `${id}`
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_4__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!router.isReady) return;
        fetchpostData(1);
        fetchData(1);
    }, [
        router.isReady
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        sx: {
            backgroundColor: "#FFFFFF"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                display: "flex",
                flexDirection: {
                    lg: "row",
                    xl: "row",
                    md: "row",
                    sm: "column",
                    xs: "column"
                },
                mt: "90px",
                mb: "90px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: "60%",
                        width: {
                            lg: "60%",
                            xl: "60%",
                            md: "60%",
                            sm: "90%",
                            xs: "100%"
                        },
                        display: "flex",
                        flexDirection: "column",
                        pl: "90px",
                        pr: "74px"
                    },
                    children: data.map((imie)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    sx: {
                                        color: "#0E2634",
                                        fontSize: "14px",
                                        fontWeight: "bold"
                                    },
                                    children: imie.short_description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        color: "#213744",
                                        fontSize: "15px",
                                        mt: "20px"
                                    },
                                    children: imie.content
                                })
                            ]
                        }, imie.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: {
                            lg: "20%",
                            xl: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "60%"
                        },
                        mt: {
                            lg: "0px",
                            xl: "0px",
                            md: "0px",
                            sm: "20px",
                            xs: "20px"
                        },
                        ml: {
                            lg: "180px",
                            xl: "180px",
                            md: "150px",
                            sm: "160px",
                            xs: "90px"
                        },
                        height: "100%",
                        backgroundColor: "#E63E2C"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                mt: "30px",
                                mb: "20px",
                                ml: "20px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "Top Posts"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                height: "1px",
                                backgroundColor: "#FFFFFF",
                                mr: "10px",
                                ml: "10px",
                                mb: "15px"
                            }
                        }),
                        post.slice(p1, p2).map((imsd)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mt: "20px",
                                    mb: "20px",
                                    ml: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: `/innerpage2/${imsd.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            sx: {
                                                display: "flex",
                                                flexDirection: "row"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    sx: {
                                                        width: "90%"
                                                    },
                                                    children: imsd.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                    component: "img",
                                                    sx: {
                                                        mr: "10px",
                                                        ml: {
                                                            lg: "10px",
                                                            xl: "10px",
                                                            md: "0px",
                                                            sm: "10px",
                                                            xs: "10px"
                                                        }
                                                    },
                                                    src: "/backgroundImages/inner_page/Top_Post_Arrow_Icon.svg"
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, imsd.id))
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Pricingpage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3083);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);









const Pricingpage = ()=>{
    const { 0: hoverOne , 1: sethoverOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: hoverTwo , 1: sethoverTwo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: hoverThree , 1: sethoverThree  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: data  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "Free"
    });
    const { 0: data1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "$25"
    });
    const { 0: data2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "$45"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
        maxWidth: "xl",
        sx: {
            backgroundImage: "url('/assets/pricing_page_svgs/First_Background.svg')",
            backgroundSize: {
                xs: "cover",
                md: "cover",
                lg: "cover"
            },
            // height:'400vh',
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    textAlign: "center",
                    mt: "40px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "h3",
                        sx: {
                            fontWeight: "500",
                            letterSpacing: "1px"
                        },
                        children: "Choose A Pricing Plan"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: "Cost-Effective,Full Service & High Security"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    width: {
                        lg: "99%",
                        md: "99%",
                        sm: "99%",
                        xs: "99%",
                        xl: "99%"
                    },
                    mt: "40px",
                    display: "flex",
                    flexDirection: {
                        lg: "row",
                        xs: "column"
                    },
                    alignItems: {
                        md: "center",
                        sm: "center",
                        xs: "center"
                    }
                },
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().sizeset),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            width: {
                                lg: "25%",
                                xs: "25%"
                            },
                            mt: "30px",
                            display: "flex",
                            ml: {
                                xl: "20px",
                                sm: "-50px",
                                md: "0px",
                                lg: "20px",
                                xs: "0px"
                            },
                            mr: {
                                xl: "100px",
                                sm: "100px",
                                md: "100px",
                                lg: "100px",
                                xs: "130px"
                            }
                        },
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().div_1_setting),
                        onMouseOver: ()=>sethoverOne(true),
                        onMouseLeave: ()=>sethoverOne(false),
                        children: hoverOne ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 60,
                                damping: 50
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    width: {
                                        lg: "25%",
                                        xs: "25%"
                                    },
                                    display: "flex",
                                    opacity: 1,
                                    transition: "visibility 0s, opacity 0.5s linear",
                                    height: {
                                        xs: "430px",
                                        md: "550px",
                                        lg: "550px",
                                        xl: "550px",
                                        sm: "430px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        src: "/assets/pricing_page_svgs/Selected_Pricing_Tag.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            position: "absolute",
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    pt: {
                                                        lg: "15px",
                                                        sm: "15px",
                                                        md: "15px",
                                                        xl: "15px",
                                                        xs: "8px"
                                                    },
                                                    pl: {
                                                        lg: "20px",
                                                        sm: "20px",
                                                        md: "20px",
                                                        xl: "20px",
                                                        xs: "0px"
                                                    },
                                                    pr: {
                                                        lg: "0px",
                                                        sm: "0px",
                                                        md: "0px",
                                                        xl: "0px",
                                                        xs: "98px"
                                                    },
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: "SIMPLE"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    ml: {
                                                        lg: "30px",
                                                        xl: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xs: "16px"
                                                    },
                                                    mt: {
                                                        lg: "60px",
                                                        xl: "60px",
                                                        sm: "60px",
                                                        md: "60px",
                                                        xs: "18px"
                                                    },
                                                    backgroundImage: "url('/assets/pricing_page_svgs/Basic_Icon_Orange.svg')",
                                                    backgroundRepeat: "no-repeat",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    height: "40px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "70px",
                                                            mt: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    color: "#E63E2C",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "BASIC"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    fontSize: "12px",
                                                                    color: "#213744"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: {
                                                                lg: "25px",
                                                                sm: "25px",
                                                                md: "25px",
                                                                xl: "25px",
                                                                xs: "-20px"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontWeight: "bold",
                                                                fontSize: {
                                                                    lg: "25px",
                                                                    sm: "25px",
                                                                    md: "25px",
                                                                    xl: "25px",
                                                                    xs: "12px"
                                                                },
                                                                color: "#0E2634"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    height: "2px",
                                                    backgroundColor: "#0E2634",
                                                    mr: "14px",
                                                    ml: "25px",
                                                    mt: {
                                                        lg: "25px",
                                                        md: "25px",
                                                        sm: "25px",
                                                        xs: "10px",
                                                        xl: "25px"
                                                    },
                                                    width: {
                                                        lg: "87%",
                                                        sm: "70%",
                                                        md: "87%",
                                                        xl: "87%",
                                                        xs: "60%"
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    mt: {
                                                        lg: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xl: "30px",
                                                        xs: "-20px"
                                                    },
                                                    color: "#213744"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "30px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Backend Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Front End Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "UI/UX"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Python, JavaScript"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "No code platforms"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    width: "100%",
                                                    ml: "0px",
                                                    mt: "30px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: {
                                                        pathname: "/contact",
                                                        query: data
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Selected */ .Ne, {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            sx: {
                                width: {
                                    lg: "25%",
                                    xs: "25%"
                                },
                                height: {
                                    xs: "430px",
                                    md: "550px",
                                    lg: "550px",
                                    xl: "550px",
                                    sm: "430px"
                                },
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    component: "img",
                                    sx: {
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    // sx={{ height:'100%'}}
                                    src: "/assets/pricing_page_svgs/Unselected_Pricing_Tag.svg"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        position: "absolute",
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            sx: {
                                                pt: {
                                                    lg: "15px",
                                                    sm: "15px",
                                                    md: "15px",
                                                    xl: "15px",
                                                    xs: "8px"
                                                },
                                                pl: {
                                                    lg: "20px",
                                                    sm: "20px",
                                                    md: "20px",
                                                    xl: "20px",
                                                    xs: "0px"
                                                },
                                                pr: {
                                                    lg: "0px",
                                                    sm: "0px",
                                                    md: "0px",
                                                    xl: "0px",
                                                    xs: "98px"
                                                },
                                                fontWeight: "bold",
                                                color: "#E63E2C",
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: "SIMPLE"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                ml: {
                                                    lg: "30px",
                                                    xl: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xs: "16px"
                                                },
                                                mt: {
                                                    lg: "60px",
                                                    xl: "60px",
                                                    sm: "60px",
                                                    md: "60px",
                                                    xs: "18px"
                                                },
                                                backgroundImage: "url('/assets/pricing_page_svgs/Basic_Icon_White.svg')",
                                                backgroundRepeat: "no-repeat",
                                                display: "flex",
                                                flexDirection: "row",
                                                height: "40px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "70px",
                                                        mt: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                color: "#E63E2C",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "BASIC"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontSize: "12px",
                                                                color: "#213744"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: {
                                                            lg: "25px",
                                                            sm: "25px",
                                                            md: "25px",
                                                            xl: "25px",
                                                            xs: "-20px"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            fontSize: {
                                                                lg: "25px",
                                                                sm: "25px",
                                                                md: "25px",
                                                                xl: "25px",
                                                                xs: "12px"
                                                            },
                                                            fontWeight: "bold"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                height: "2px",
                                                backgroundColor: "white",
                                                mr: "14px",
                                                ml: "25px",
                                                mt: {
                                                    lg: "25px",
                                                    md: "25px",
                                                    sm: "25px",
                                                    xs: "10px",
                                                    xl: "25px"
                                                },
                                                width: {
                                                    lg: "87%",
                                                    sm: "70%",
                                                    md: "87%",
                                                    xl: "87%",
                                                    xs: "60%"
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                mt: {
                                                    lg: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xl: "30px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "30px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Backend Development"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Front End Development "
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "UI/UX"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Python, JavaScript"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "No code platforms"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                width: "100%",
                                                ml: "0px",
                                                mt: "30px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Unselected */ .d5, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            width: {
                                lg: "25%",
                                xs: "25%"
                            },
                            mb: {
                                lg: "150px"
                            },
                            // height:'634px',
                            display: "flex",
                            ml: {
                                lg: "0px",
                                md: "20px",
                                sm: "-50px",
                                xs: "0px"
                            },
                            mr: {
                                lg: "108px",
                                md: "100px",
                                sm: "100px",
                                xs: "130px"
                            },
                            mt: "30px"
                        },
                        onMouseOver: ()=>sethoverTwo(true),
                        onMouseLeave: ()=>sethoverTwo(false),
                        children: hoverTwo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 60,
                                damping: 50
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    width: {
                                        lg: "25%",
                                        xs: "25%"
                                    },
                                    height: {
                                        xs: "430px",
                                        md: "550px",
                                        lg: "550px",
                                        xl: "550px",
                                        sm: "430px"
                                    },
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        // sx={{ 
                                        // height:'100%'}}
                                        src: "/assets/pricing_page_svgs/Selected_Pricing_Tag.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            position: "absolute",
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    pt: {
                                                        lg: "15px",
                                                        sm: "15px",
                                                        md: "15px",
                                                        xl: "15px",
                                                        xs: "8px"
                                                    },
                                                    pl: {
                                                        lg: "20px",
                                                        sm: "20px",
                                                        md: "20px",
                                                        xl: "20px",
                                                        xs: "0px"
                                                    },
                                                    pr: {
                                                        lg: "0px",
                                                        sm: "0px",
                                                        md: "0px",
                                                        xl: "0px",
                                                        xs: "98px"
                                                    },
                                                    fontSize: {
                                                        lg: "1rem",
                                                        xl: "1rem",
                                                        sm: "1rem",
                                                        md: "1rem",
                                                        xs: "0.9rem"
                                                    },
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: "SPECIAL"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    ml: {
                                                        lg: "30px",
                                                        xl: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xs: "16px"
                                                    },
                                                    mt: {
                                                        lg: "60px",
                                                        xl: "60px",
                                                        sm: "60px",
                                                        md: "60px",
                                                        xs: "18px"
                                                    },
                                                    backgroundImage: "url('/assets/pricing_page_svgs/Standar_Icon_Orange.svg')",
                                                    backgroundRepeat: "no-repeat",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    height: "40px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "70px",
                                                            mt: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    color: "#E63E2C",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "STANDARD"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    fontSize: "12px",
                                                                    color: "#213744"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: {
                                                                lg: "80px",
                                                                sm: "80px",
                                                                md: "80px",
                                                                xl: "80px",
                                                                xs: "25px"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontSize: {
                                                                    lg: "25px",
                                                                    sm: "25px",
                                                                    md: "25px",
                                                                    xl: "25px",
                                                                    xs: "12px"
                                                                },
                                                                fontWeight: "bold",
                                                                color: "#0E2634"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    height: "2px",
                                                    backgroundColor: "#0E2634",
                                                    mr: "14px",
                                                    ml: "25px",
                                                    mt: {
                                                        lg: "25px",
                                                        md: "25px",
                                                        sm: "25px",
                                                        xs: "10px",
                                                        xl: "25px"
                                                    },
                                                    width: {
                                                        lg: "87%",
                                                        sm: "70%",
                                                        md: "87%",
                                                        xl: "87%",
                                                        xs: "60%"
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    mt: {
                                                        lg: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xl: "30px",
                                                        xs: "-20px"
                                                    },
                                                    color: "#213744"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "30px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "All services in Basic Package"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Scrapping "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "DevOps"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Blockchain"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Data Science"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    width: "100%",
                                                    ml: "0px",
                                                    mt: "30px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: {
                                                        pathname: "/contact",
                                                        query: data1
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Selected */ .Ne, {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            sx: {
                                width: {
                                    lg: "25%",
                                    xs: "25%"
                                },
                                height: {
                                    xs: "430px",
                                    md: "550px",
                                    lg: "550px",
                                    xl: "550px",
                                    sm: "430px"
                                },
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    component: "img",
                                    sx: {
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    // sx={{
                                    // height:'100%'}}
                                    src: "/assets/pricing_page_svgs/Unselected_Pricing_Tag.svg"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        position: "absolute",
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            sx: {
                                                pt: {
                                                    lg: "15px",
                                                    sm: "15px",
                                                    md: "15px",
                                                    xl: "15px",
                                                    xs: "8px"
                                                },
                                                pl: {
                                                    lg: "20px",
                                                    sm: "20px",
                                                    md: "20px",
                                                    xl: "20px",
                                                    xs: "0px"
                                                },
                                                pr: {
                                                    lg: "0px",
                                                    sm: "0px",
                                                    md: "0px",
                                                    xl: "0px",
                                                    xs: "98px"
                                                },
                                                fontSize: {
                                                    lg: "1rem",
                                                    xl: "1rem",
                                                    sm: "1rem",
                                                    md: "1rem",
                                                    xs: "0.9rem"
                                                },
                                                fontWeight: "bold",
                                                color: "#E63E2C",
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: "SPECIAL"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                ml: {
                                                    lg: "30px",
                                                    xl: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xs: "16px"
                                                },
                                                mt: {
                                                    lg: "60px",
                                                    xl: "60px",
                                                    sm: "60px",
                                                    md: "60px",
                                                    xs: "18px"
                                                },
                                                backgroundImage: "url('/assets/pricing_page_svgs/Standar_Icon_White.svg')",
                                                backgroundRepeat: "no-repeat",
                                                display: "flex",
                                                flexDirection: "row",
                                                height: "40px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "70px",
                                                        mt: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                color: "#E63E2C",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "STANDARD"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontSize: "12px",
                                                                color: "#213744"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: {
                                                            lg: "80px",
                                                            sm: "80px",
                                                            md: "80px",
                                                            xl: "80px",
                                                            xs: "25px"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            fontSize: {
                                                                lg: "25px",
                                                                sm: "25px",
                                                                md: "25px",
                                                                xl: "25px",
                                                                xs: "12px"
                                                            },
                                                            fontWeight: "bold"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                height: "2px",
                                                backgroundColor: "white",
                                                mr: "14px",
                                                ml: "25px",
                                                mt: {
                                                    lg: "25px",
                                                    md: "25px",
                                                    sm: "25px",
                                                    xs: "10px",
                                                    xl: "25px"
                                                },
                                                width: {
                                                    lg: "87%",
                                                    sm: "70%",
                                                    md: "87%",
                                                    xl: "87%",
                                                    xs: "60%"
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                mt: {
                                                    lg: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xl: "30px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "30px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "All services in Basic Package"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Scrapping "
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "DevOps"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Blockchain"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Data Science"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                width: "100%",
                                                ml: "0px",
                                                mt: "30px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Unselected */ .d5, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            width: {
                                lg: "25%",
                                xs: "25%"
                            },
                            mt: "30px",
                            // height:'634px',
                            display: "flex",
                            ml: {
                                xl: "0px",
                                lg: "0px",
                                md: "20px",
                                sm: "-50px",
                                xs: "0px"
                            },
                            mr: {
                                xl: "0px",
                                lg: "0px",
                                md: "100px",
                                sm: "100px",
                                xs: "130px"
                            }
                        },
                        onMouseOver: ()=>sethoverThree(true),
                        onMouseLeave: ()=>sethoverThree(false),
                        children: hoverThree ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 60,
                                damping: 50
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    width: {
                                        lg: "25%",
                                        xs: "25%"
                                    },
                                    height: {
                                        xs: "430px",
                                        md: "550px",
                                        lg: "550px",
                                        xl: "550px",
                                        sm: "430px"
                                    },
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        // sx={{
                                        //     height:'100%'}}
                                        src: "/assets/pricing_page_svgs/Selected_Pricing_Tag.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            position: "absolute",
                                            width: {
                                                xs: "40vh",
                                                md: "auto",
                                                lg: "auto",
                                                xl: "auto",
                                                sm: "auto"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    pt: {
                                                        lg: "15px",
                                                        sm: "15px",
                                                        md: "15px",
                                                        xl: "15px",
                                                        xs: "8px"
                                                    },
                                                    //pl: { lg: '135px', sm: '135px', md: '135px', xl: '135px', xs: '85px' },
                                                    pr: {
                                                        lg: "0px",
                                                        sm: "0px",
                                                        md: "0px",
                                                        xl: "0px",
                                                        xs: "90px"
                                                    },
                                                    fontSize: {
                                                        lg: "1rem",
                                                        xl: "1rem",
                                                        sm: "1rem",
                                                        md: "1rem",
                                                        xs: "0.8rem"
                                                    },
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: "PREMIUM"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    ml: {
                                                        lg: "30px",
                                                        xl: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xs: "16px"
                                                    },
                                                    mt: {
                                                        lg: "60px",
                                                        xl: "60px",
                                                        sm: "60px",
                                                        md: "60px",
                                                        xs: "18px"
                                                    },
                                                    backgroundImage: "url('/assets/pricing_page_svgs/Enterprice_Icon_Orange.svg')",
                                                    backgroundRepeat: "no-repeat",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    height: "40px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "70px",
                                                            mt: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    color: "#E63E2C",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "ENTERPRISE"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                sx: {
                                                                    fontSize: "12px",
                                                                    color: "#213744"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: {
                                                                lg: "40px",
                                                                sm: "40px",
                                                                md: "40px",
                                                                xl: "40px",
                                                                xs: "0px"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontSize: {
                                                                    lg: "25px",
                                                                    sm: "25px",
                                                                    md: "25px",
                                                                    xl: "25px",
                                                                    xs: "12px"
                                                                },
                                                                fontWeight: "bold",
                                                                color: "#0E2634"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    height: "2px",
                                                    backgroundColor: "#0E2634",
                                                    mr: "14px",
                                                    ml: "25px",
                                                    mt: {
                                                        lg: "25px",
                                                        md: "25px",
                                                        sm: "25px",
                                                        xs: "10px",
                                                        xl: "25px"
                                                    },
                                                    width: {
                                                        lg: "87%",
                                                        sm: "70%",
                                                        md: "87%",
                                                        xl: "87%",
                                                        xs: "60%"
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    mt: {
                                                        lg: "30px",
                                                        sm: "30px",
                                                        md: "30px",
                                                        xl: "30px",
                                                        xs: "-20px"
                                                    },
                                                    color: "#213744"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "30px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "All services in Intermediate Package"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Consulting"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "Cloud Architectures"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        sx: {
                                                            ml: "30px",
                                                            mt: "15px",
                                                            backgroundImage: "url('/assets/pricing_page_svgs/Check_Icon_Selected.svg')",
                                                            backgroundRepeat: "no-repeat"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                ml: "35px",
                                                                width: {
                                                                    lg: "90%",
                                                                    sm: "50%",
                                                                    md: "70%",
                                                                    xl: "90%",
                                                                    xs: "50%"
                                                                }
                                                            },
                                                            children: "End to end planning & execution"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                sx: {
                                                    width: "100%",
                                                    ml: "0px",
                                                    mt: "30px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: {
                                                        pathname: "/contact",
                                                        query: data2
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Selected */ .Ne, {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            sx: {
                                width: {
                                    lg: "20%",
                                    xs: "25%"
                                },
                                height: {
                                    xs: "430px",
                                    md: "550px",
                                    lg: "550px",
                                    xl: "550px",
                                    sm: "430px"
                                },
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    component: "img",
                                    sx: {
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    src: "/assets/pricing_page_svgs/Unselected_Pricing_Tag.svg"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        position: "absolute",
                                        width: {
                                            xs: "40vh",
                                            md: "auto",
                                            lg: "auto",
                                            xl: "auto",
                                            sm: "auto"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            sx: {
                                                pt: {
                                                    lg: "15px",
                                                    sm: "15px",
                                                    md: "15px",
                                                    xl: "15px",
                                                    xs: "8px"
                                                },
                                                //pl: { lg: '130px', sm: '135px', md: '135px', xl: '135px', xs: '85px' },
                                                pr: {
                                                    lg: "0px",
                                                    sm: "0px",
                                                    md: "0px",
                                                    xl: "0px",
                                                    xs: "90px"
                                                },
                                                fontSize: {
                                                    lg: "1rem",
                                                    xl: "1rem",
                                                    sm: "1rem",
                                                    md: "1rem",
                                                    xs: "0.8rem"
                                                },
                                                fontWeight: "bold",
                                                color: "#E63E2C",
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: "PREMIUM"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                ml: {
                                                    lg: "30px",
                                                    xl: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xs: "16px"
                                                },
                                                mt: {
                                                    lg: "60px",
                                                    xl: "60px",
                                                    sm: "60px",
                                                    md: "60px",
                                                    xs: "18px"
                                                },
                                                backgroundImage: "url('/assets/pricing_page_svgs/Enterprice_Icon_White.svg')",
                                                backgroundRepeat: "no-repeat",
                                                display: "flex",
                                                flexDirection: "row",
                                                height: "40px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "70px",
                                                        mt: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                color: "#E63E2C",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "ENTERPRISE"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                fontSize: "12px",
                                                                color: "#213744"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: {
                                                            lg: "40px",
                                                            sm: "40px",
                                                            md: "40px",
                                                            xl: "40px",
                                                            xs: "0px"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            fontSize: {
                                                                lg: "25px",
                                                                sm: "25px",
                                                                md: "25px",
                                                                xl: "25px",
                                                                xs: "12px"
                                                            },
                                                            fontWeight: "bold"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                height: "2px",
                                                backgroundColor: "white",
                                                mr: "14px",
                                                ml: "25px",
                                                mt: {
                                                    lg: "25px",
                                                    md: "25px",
                                                    sm: "25px",
                                                    xs: "10px",
                                                    xl: "25px"
                                                },
                                                width: {
                                                    lg: "87%",
                                                    sm: "70%",
                                                    md: "87%",
                                                    xl: "87%",
                                                    xs: "60%"
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                mt: {
                                                    lg: "30px",
                                                    sm: "30px",
                                                    md: "30px",
                                                    xl: "30px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "30px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "All services in Intermediate Package"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Consulting"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "Cloud Architectures"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    sx: {
                                                        ml: "30px",
                                                        mt: "15px",
                                                        backgroundImage: "url('/assets/pricing_page_svgs/check_Icon_Unselected.svg')",
                                                        backgroundRepeat: "no-repeat"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        sx: {
                                                            ml: "35px",
                                                            width: {
                                                                lg: "90%",
                                                                sm: "50%",
                                                                md: "70%",
                                                                xl: "90%",
                                                                xs: "50%"
                                                            }
                                                        },
                                                        children: "End to end planning & execution"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                width: "100%",
                                                ml: "0px",
                                                mt: "30px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Unselected */ .d5, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Pricingpage)));


/***/ }),

/***/ 9945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CoverAndServices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);






const Img = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
});
const H3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("h3")({
    color: "white",
    fontSize: "3rem",
    fontWeight: "400",
    marginBottom: "-45px"
});
const H2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("h2")({
    color: "white",
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "-5px"
});
const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("p")({
    color: "white",
    fontSize: "17px",
    pt: "12px"
});
const CoverAndServices = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            backgroundImage: "url(/assets/cover_services/FirstBackground.svg)"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            width: "100%",
            // maxWidth='xl'
            className: "containerSection",
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "50px",
                paddingBottom: "50px"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                container: true,
                rowSpacing: 12,
                columnSpacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 6,
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .4,
                                        type: "linear"
                                    }
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                                src: "/assets/cover_services/DrivingTheFutureImage.svg"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 5,
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .6,
                                        type: "linear"
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H3, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                },
                                                marginBottom: {
                                                    lg: "-45px",
                                                    md: "-45px",
                                                    sm: "-45px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: "Driving The Future"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                }
                                            },
                                            children: "Remotely"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                                    children: "CoalDev is a customer-centric information technology company and offers comprehensive, cost effective and efficient software solutions. We specializes in the domain of data science, custom software development, cloud and blockchain . At CoalDev, we believe in working closely with clients and adapting to innovations. "
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 7,
                        style: {
                            width: "100%"
                        },
                        id: "coverandsevices",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .8,
                                        type: "linear"
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H3, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                },
                                                marginBottom: {
                                                    lg: "-45px",
                                                    md: "-45px",
                                                    sm: "-45px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: "Custom Web App"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                }
                                            },
                                            children: "Development Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                                    children: "Whether you need a simple website or a complex web-based system, CoalDev can help you achieve your goals. We have a team of experienced developers who specialize in building tailored solutions to meet the specific needs of clients. With a focus on quality and customer satisfaction, CoalDev is the perfect choice for your next web development project."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 4,
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .8,
                                        type: "linear"
                                    }
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                                src: "/assets/cover_services/CustomWebImage.svg"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 5,
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .9,
                                        type: "linear"
                                    }
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                                src: "/assets/cover_services/DataScienceImage.svg"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 7,
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    scale: 1,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1,
                                        type: "linear"
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H3, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                },
                                                marginBottom: {
                                                    lg: "-45px",
                                                    md: "-45px",
                                                    sm: "-45px",
                                                    xs: "-20px"
                                                }
                                            },
                                            children: "Data Science"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                                            sx: {
                                                fontSize: {
                                                    lg: "3rem",
                                                    md: "3rem",
                                                    sm: "3rem",
                                                    xs: "1.5rem"
                                                }
                                            },
                                            children: "Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                                    children: "We collaborate closely with our clients to comprehend their distinct requirements and provide personalized data science services that surpass expectations and foster business growth. Our team of skilled data scientists focuses on developing inventive and intuitive data-driven solutions for a variety of industries."
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 4035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ HappyClients)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const HappyClients = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            backgroundImage: "url('/backgroundImages/Fifth_background.svg')",
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "50px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    width: {
                        "xs": "80%",
                        md: "90%",
                        lg: "80%"
                    },
                    mb: "50px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "h3",
                        sx: {
                            fontWeight: "300"
                        },
                        children: "Our Happy Clients"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "body1",
                        sx: {
                            mt: "5px"
                        },
                        children: "Review what our satisfied clients have to say about our collaboration and how we've empowered their business"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    width: {
                        "xs": "80%",
                        md: "90%",
                        lg: "80%"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            width: {
                                xs: "100%",
                                md: "28%",
                                lg: "25%"
                            },
                            mb: {
                                xs: "25px",
                                md: "0"
                            },
                            backgroundColor: "#E63E2C",
                            padding: "15px 10px",
                            borderRadius: "7px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "body1",
                                children: '"CoalDev exceeded our expectations with their software development services. Our custom trading bot is now a vital tool in our trading arsenal. Highly recommend! "'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "h6",
                                sx: {
                                    mt: "37px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    children: "Raami Eid, Reonomy"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            width: {
                                xs: "100%",
                                md: "28%",
                                lg: "25%"
                            },
                            mb: {
                                xs: "25px",
                                md: "0"
                            },
                            backgroundColor: "#E63E2C",
                            padding: "15px 10px",
                            borderRadius: "7px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "body1",
                                children: '" We used CoalDev services to develop an AI-powered suggestion engine for our property website. The search function was incredibly intuitive and the AI suggestions for properties were spot-on. Highly recommend! "'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "h6",
                                sx: {
                                    mt: "15px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    children: "Jacob Zimerman, Estateza"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            width: {
                                xs: "100%",
                                md: "28%",
                                lg: "25%"
                            },
                            mb: {
                                xs: "25px",
                                md: "0"
                            },
                            backgroundColor: "#E63E2C",
                            padding: "15px 10px",
                            borderRadius: "7px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "body1",
                                children: '"CoalDev\'s software development services have revolutionized our royalty distribution process. The custom-built Royalty Attribution Engine is accurate, efficient, and user-friendly. "'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "h6",
                                sx: {
                                    mt: "37px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    children: "Alain Prasquier, CTO Revelator"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ IndustriesWeServe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3083);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const IndustriesWeServe = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            backgroundImage: "url('/backgroundImages/Third_background.svg')",
            padding: "50px 0"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                maxWidth: "xl",
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "50px",
                    paddingBottom: "50px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        className: "row",
                        sx: {
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            justifyContent: "space-between",
                            mb: {
                                xs: 0,
                                sm: 10
                            },
                            width: {
                                "xs": "80%",
                                md: "100%",
                                lg: "80%"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/Ecommerce.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "E-Commerce"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/Advertising.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Advertising"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/FinancialInstitutions.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Financial Insitutions"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            width: {
                                "xs": "80%",
                                md: "100%",
                                lg: "80%"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/RealEstate.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Real Estate"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/Retail_FMCG.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Retail and FMCG"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 60,
                                            width: 60
                                        },
                                        alt: "E-commerce svg",
                                        src: "/industries_svg/Healthcare.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Healthcare"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    textAlign: "center",
                    mt: "50px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "h3",
                        component: "h3",
                        sx: {
                            fontWeight: 300
                        },
                        children: [
                            "More About ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "Industries"
                            }),
                            " We Serve"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/services",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .ShowButton */ .pH, {
                                text: "SHOW"
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MessageUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contact_us_section1_CotactFormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contact_us_section1_CotactFormSection__WEBPACK_IMPORTED_MODULE_4__]);
_contact_us_section1_CotactFormSection__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import { FormContactUs } from "../../common-components"

const MessageUs = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "contact",
        sx: {
            height: {
                lg: `${props.sheight1}`,
                md: `${props.sheight2}`,
                sm: `${props.sheight3}`,
                xs: `${props.sheight4}`,
                xl: `${props.sheight5}`
            },
            backgroundImage: `url(${props.bgimgurl})`,
            padding: "50px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                spacing: 2,
                sx: {
                    display: `${props.disp}`,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            width: "70%",
                            flexDirection: {
                                xs: "column",
                                sm: "row"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    component: "img",
                                    sx: {
                                        height: 100,
                                        width: 100
                                    },
                                    alt: "E-commerce svg",
                                    src: "/messageus_svgs/Inverted_Coma_Left.svg"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                                sx: {
                                    mt: {
                                        xs: "0px",
                                        sm: "85px"
                                    },
                                    ml: "25px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "body2",
                                        component: "p",
                                        children: "We've done our best to build the process of development as effectively and comfortably for our clients, as it's possible."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "body2",
                                        component: "p",
                                        children: "By choosing us, you're not only choosing experienced enginners but also choosing the highest level of service and process debugged by hundreds of projects."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "body2",
                                        component: "p",
                                        children: "We've built a system to take the whole full cycle app development project off your shoulders and help you focus on other aspects of your business"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "right",
                            width: "70%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sx: {
                                        mr: "25px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            component: "h6",
                                            children: "OSAMA JAMIL"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "body1",
                                            children: "CEO, COALDEV"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        component: "img",
                                        sx: {
                                            height: 100,
                                            width: 100
                                        },
                                        alt: "E-commerce svg",
                                        src: "/messageus_svgs/Inverted_Coma_Right.svg"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_us_section1_CotactFormSection__WEBPACK_IMPORTED_MODULE_4__/* .CotactFormSection */ .R, {
                    formthreecolor2: `${props.formthreecolor3}`,
                    f3border1: `${props.f3border2}`,
                    colorea2: `${props.colorea3}`,
                    f2border1: `${props.f2border2}`,
                    buttoncolor: `${props.buttoncolor2}`,
                    buttonbackgroundcolor: `${props.buttonbackgroundcolor2}`,
                    formheight1: `${props.formHeightOne}`,
                    formheight2: `${props.formHeightTwo}`,
                    formheight3: `${props.formHeightThree}`,
                    formheight4: `${props.formHeightFour}`,
                    formheight5: `${props.formHeightFive}`,
                    valuelink: `${props.valuelink2}`
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ OurServices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3083);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const OurServices = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            backgroundColor: "#E63E2C",
            padding: "50px 0"
        },
        id: "ourservices",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                maxWidth: "xl",
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        className: "row",
                        sx: {
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            justifyContent: "space-between",
                            mb: {
                                xs: 0,
                                sm: 10
                            },
                            width: {
                                "xs": "80%",
                                md: "100%",
                                lg: "80%"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/Data_science.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Data Science"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/Cloud_solutions.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Cloud Solutions"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/Website_Development.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Website Development"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            width: {
                                "xs": "80%",
                                md: "100%",
                                lg: "80%"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/Blockchain_Icon.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Block Chain"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/ETL_Icon.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Data Engineering"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: {
                                        xs: "100%",
                                        md: "28%",
                                        lg: "26%"
                                    },
                                    mb: {
                                        xs: "25px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        component: "img",
                                        sx: {
                                            height: 50,
                                            width: 50
                                        },
                                        alt: "E-commerce svg",
                                        src: "/ourservices_svgs/Forcasting_solutions.svg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h6",
                                            sx: {
                                                margin: "15px 0",
                                                textAlign: "center"
                                            },
                                            children: "Business Intelligence Solutions"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    textAlign: "center",
                    mt: "50px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "h3",
                        component: "h3",
                        children: "Show All Services"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/services",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_5__/* .ShowButton */ .pH, {
                                text: "SHOW"
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ TechWeUse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7834);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9795);












const TechWeUse = ()=>{
    const SliderRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const Button = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("button")({
        color: "white",
        border: "1px solid white",
        background: "transparent",
        padding: "6px",
        margin: "14px"
    });
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1000
            },
            items: 6,
            slidesToSlide: 3,
            partialVisibilityGutter: -3
        },
        mediumdesktop: {
            breakpoint: {
                max: 1200,
                min: 1000
            },
            items: 5,
            slidesToSlide: 3,
            partialVisibilityGutter: -3
        },
        tab: {
            breakpoint: {
                max: 1000,
                min: 760
            },
            items: 4,
            slidesToSlide: 3,
            partialVisibilityGutter: -3
        },
        tablet: {
            breakpoint: {
                max: 760,
                min: 600
            },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: -3
        },
        md: {
            breakpoint: {
                max: 600,
                min: 460
            },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: -3
        },
        mobile: {
            breakpoint: {
                max: 460,
                min: 0
            },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: -2
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
        id: "techweuse",
        maxWidth: "xl",
        className: "containerSection",
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingLeft: {
                xs: 0
            },
            paddingRight: {
                xs: 0
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                backgroundColor: "#E63E2C",
                paddingTop: 9,
                paddingBottom: 4,
                justifyContent: "center",
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().size),
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().button_size),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                style: {
                                    borderRadius: "50%"
                                },
                                sx: {
                                    ":hover": {
                                        color: "black",
                                        backgroundColor: "white"
                                    },
                                    marginRight: {
                                        lg: "75px",
                                        sm: "24px"
                                    },
                                    marginTop: {
                                        lg: "30px",
                                        md: "24px",
                                        xs: "30px",
                                        sm: "25px"
                                    }
                                },
                                size: "small",
                                onClick: ()=>SliderRef.current.previous(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default()), {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sizefix),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_8___default()), {
                                responsive: responsive,
                                partialVisible: true,
                                removeArrowOnDeviceType: [
                                    "tab",
                                    "tablet",
                                    "mobile",
                                    "desktop",
                                    "mediumdesktop",
                                    "md"
                                ],
                                style: {
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                infinite: true,
                                swipeable: true,
                                ref: SliderRef,
                                autoPlay: true,
                                autoPlaySpeed: 3000,
                                transitionDuration: 500,
                                children: _static__WEBPACK_IMPORTED_MODULE_9__/* .images_sliders.map */ .A$.map((image, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        sx: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    width: 100,
                                                    height: 100,
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        id: "img1",
                                                        component: "img",
                                                        sx: {
                                                            width: 100,
                                                            height: 100
                                                        },
                                                        src: image.imgPath
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        component: "img",
                                                        sx: {
                                                            width: 100,
                                                            height: 100,
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            opacity: 0,
                                                            transition: "opacity 1s ease-out",
                                                            "&:hover": {
                                                                opacity: 1
                                                            }
                                                        },
                                                        src: image.imgPathOrig,
                                                        alt: image.label
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    mt: 2,
                                                    fontWeight: "bold"
                                                },
                                                children: image.label
                                            })
                                        ]
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "11%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                style: {
                                    borderRadius: "50%"
                                },
                                sx: {
                                    ":hover": {
                                        color: "black",
                                        backgroundColor: "white"
                                    },
                                    marginLeft: {
                                        lg: "75px",
                                        sm: "24px",
                                        md: "24px"
                                    },
                                    marginTop: {
                                        lg: "30px",
                                        md: "24px",
                                        xs: "30px",
                                        sm: "25px"
                                    }
                                },
                                size: "small",
                                onClick: ()=>SliderRef.current.next(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                color: "white",
                                fontSize: "46px",
                                marginTop: "46px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Technologies"
                                }),
                                " We Use"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/technologies",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                    className: "showMoreBtn",
                                    variant: "outlined",
                                    size: "small",
                                    sx: {
                                        ":hover": {
                                            color: "black",
                                            backgroundColor: "white"
                                        },
                                        borderRadius: "25px"
                                    },
                                    children: "SHOW MORE "
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 1309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SeServices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9795);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)("p")({
    color: "white",
    fontSize: "17px",
    pt: "12px"
});
const SeServices = ()=>{
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref1, inView1] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref2, inView2] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref3, inView3] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref4, inView4] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref5, inView5] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref6, inView6] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref7, inView7] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const [ref8, inView8] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0.2
    });
    const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation1 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation3 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation4 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation5 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation6 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation7 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const animation8 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    duration: 3,
                    bounce: 0.3
                }
            });
        } else {
            animation.stop({
                y: 0
            });
        }
        if (inView1) {
            animation1.start({
                y: 0,
                transition: {
                    duration: 4,
                    bounce: 0.3
                }
            });
        } else {
            animation1.stop({
                y: 0
            });
        }
        if (inView2) {
            animation2.start({
                y: 0,
                transition: {
                    duration: 5,
                    bounce: 0.3
                }
            });
        } else {
            animation2.stop({
                y: 0
            });
        }
        // { * 2 * } ///
        if (inView3) {
            animation3.start({
                y: 0,
                transition: {
                    duration: 3,
                    bounce: 0.3
                }
            });
        } else {
            animation3.stop({
                y: 0
            });
        }
        if (inView4) {
            animation4.start({
                y: 0,
                transition: {
                    duration: 4,
                    bounce: 0.3
                }
            });
        } else {
            animation4.stop({
                y: 0
            });
        }
        if (inView5) {
            animation5.start({
                y: 0,
                transition: {
                    duration: 5,
                    bounce: 0.3
                }
            });
        } else {
            animation5.stop({
                y: 0
            });
        }
        // { * 3 * } ///
        if (inView6) {
            animation6.start({
                y: 0,
                transition: {
                    duration: 3,
                    bounce: 0.3
                }
            });
        } else {
            animation6.stop({
                y: 0
            });
        }
        if (inView7) {
            animation7.start({
                y: 0,
                transition: {
                    duration: 4,
                    bounce: 0.3
                }
            });
        } else {
            animation7.stop({
                y: 0
            });
        }
        if (inView8) {
            animation8.start({
                y: 0,
                transition: {
                    duration: 5,
                    bounce: 0.3
                }
            });
        } else {
            animation8.stop({
                y: 0
            });
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
        maxWidth: "xl",
        sx: {
            backgroundImage: "url('/backgroundImages/service_page_bg/bg/first.svg')",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            },
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    background: {
                        xs: "url('/backgroundImages/service_page_bg/bg/Custom_SD_Services.svg') center center no-repeat",
                        md: "url('/backgroundImages/service_page_bg/bg/Custom_SD_Services.svg') top right no-repeat"
                    },
                    width: {
                        xs: "90%",
                        lg: "87%",
                        xl: "80%"
                    },
                    height: "534px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    justifyContent: "space-between"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "50%",
                            lg: "54%"
                        },
                        mb: {
                            xs: "25px",
                            md: "0"
                        },
                        ml: {
                            lg: "100px"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "h3",
                            sx: {
                                fontWeight: "300"
                            },
                            children: "Custom"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "h3",
                            sx: {
                                fontWeight: "500",
                                letterSpacing: "1px"
                            },
                            children: [
                                "Software Development",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Services"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                            sx: {
                                width: "55%"
                            },
                            children: "CoalDev designs, develops, consults and provides full lifecycle management of custom products. We are an end-to-end software development studio with a custom attitude."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    width: "90%",
                    margin: "0 auto 0 auto"
                },
                children: [
                    Object.keys(_static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows */ .rj).map((row, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            ref: ref,
                            className: "row",
                            sx: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: "row"
                                },
                                justifyContent: "space-between"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                ref: ref1,
                                sx: {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    justifyContent: "space-between"
                                },
                                children: _static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows */ .rj[row].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        ref: ref2,
                                        sx: {
                                            width: {
                                                "xs": "100%",
                                                md: "50%"
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "100%",
                                            height: {
                                                lg: "60vh",
                                                sm: "60vh",
                                                md: "60vh",
                                                xs: "70vh"
                                            },
                                            position: "relative",
                                            backgroundImage: `url(${item.bgurl})`,
                                            overflow: "hidden",
                                            backgroundSize: {
                                                xs: "cover",
                                                md: "cover"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "50vw"
                                                },
                                                animate: animation,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    component: "img",
                                                    sx: {
                                                        margin: {
                                                            xs: "0",
                                                            md: "0 auto"
                                                        },
                                                        mt: {
                                                            xs: "35px",
                                                            md: "30px"
                                                        },
                                                        mb: "7px",
                                                        maxWidth: 250
                                                    },
                                                    src: `${item.tech_icon}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.Typography, {
                                                initial: {
                                                    y: "70vw"
                                                },
                                                animate: animation1,
                                                variant: "h6",
                                                sx: {
                                                    mt: "17px"
                                                },
                                                style: {
                                                    margin: "10px 0px"
                                                },
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "100vw"
                                                },
                                                animate: animation2,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        justifyContent: "space-between",
                                                        width: {
                                                            xs: "90%",
                                                            sm: "58%",
                                                            md: "100%",
                                                            lg: "90%"
                                                        },
                                                        marginLeft: {
                                                            lg: "5%",
                                                            xs: "5%",
                                                            sm: "22%",
                                                            md: "0%"
                                                        },
                                                        marginRight: {
                                                            lg: "0%",
                                                            xs: "0%",
                                                            sm: "5%",
                                                            md: "0%"
                                                        },
                                                        height: "53%",
                                                        textAlign: "center",
                                                        fontSize: "14px",
                                                        fontWeight: "300"
                                                    },
                                                    style: {
                                                        margin: "auto",
                                                        width: "90%"
                                                    },
                                                    children: item.p_text
                                                })
                                            })
                                        ]
                                    }, index))
                            })
                        }, index)),
                    Object.keys(_static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows_two */ .PC).map((row, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            className: "row",
                            ref: ref3,
                            sx: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: "row"
                                },
                                justifyContent: "space-between"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                ref: ref4,
                                sx: {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    justifyContent: "space-between"
                                },
                                children: _static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows_two */ .PC[row].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        ref: ref5,
                                        sx: {
                                            width: {
                                                "xs": "100%",
                                                md: "50%"
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "100%",
                                            height: {
                                                lg: "60vh",
                                                sm: "70vh",
                                                md: "60vh",
                                                xs: "70vh"
                                            },
                                            position: "relative",
                                            backgroundImage: `url(${item.bgurl})`,
                                            overflow: "hidden",
                                            backgroundSize: {
                                                xs: "cover",
                                                md: "cover"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "50vw"
                                                },
                                                animate: animation3,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    component: "img",
                                                    sx: {
                                                        margin: {
                                                            xs: "0",
                                                            md: "0 auto"
                                                        },
                                                        mt: {
                                                            xs: "35px",
                                                            md: "30px"
                                                        },
                                                        mb: "7px",
                                                        maxWidth: 250
                                                    },
                                                    src: `${item.tech_icon}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.Typography, {
                                                initial: {
                                                    y: "170vw"
                                                },
                                                animate: animation4,
                                                sx: {
                                                    mt: "17px"
                                                },
                                                style: {
                                                    margin: "10px 0px"
                                                },
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "100vw"
                                                },
                                                animate: animation5,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        justifyContent: "space-between",
                                                        width: {
                                                            xs: "90%",
                                                            sm: "58%",
                                                            md: "100%",
                                                            lg: "90%"
                                                        },
                                                        marginLeft: {
                                                            lg: "5%",
                                                            xs: "5%",
                                                            sm: "22%",
                                                            md: "0%"
                                                        },
                                                        marginRight: {
                                                            lg: "0%",
                                                            xs: "0%",
                                                            sm: "5%",
                                                            md: "0%"
                                                        },
                                                        height: "53%",
                                                        textAlign: "center",
                                                        fontSize: "14px",
                                                        fontWeight: "300"
                                                    },
                                                    style: {
                                                        margin: "auto",
                                                        width: "90%"
                                                    },
                                                    children: item.p_text
                                                })
                                            })
                                        ]
                                    }, index))
                            })
                        }, index)),
                    Object.keys(_static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows_three */ .Zd).map((row, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            className: "row",
                            ref: ref6,
                            sx: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: "row"
                                },
                                justifyContent: "space-between"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                ref: ref7,
                                sx: {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    justifyContent: "space-between"
                                },
                                children: _static__WEBPACK_IMPORTED_MODULE_4__/* .services_rows_three */ .Zd[row].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        ref: ref8,
                                        sx: {
                                            width: {
                                                "xs": "100%",
                                                md: "50%"
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "100%",
                                            height: {
                                                lg: "60vh",
                                                sm: "60vh",
                                                md: "60vh",
                                                xs: "70vh"
                                            },
                                            position: "relative",
                                            backgroundImage: `url(${item.bgurl})`,
                                            overflow: "hidden",
                                            backgroundSize: {
                                                xs: "cover",
                                                md: "cover"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "50vw"
                                                },
                                                animate: animation6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    component: "img",
                                                    sx: {
                                                        margin: {
                                                            xs: "0",
                                                            md: "0 auto"
                                                        },
                                                        mt: {
                                                            xs: "35px",
                                                            md: "30px"
                                                        },
                                                        mb: "7px",
                                                        maxWidth: 250
                                                    },
                                                    src: `${item.tech_icon}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.Typography, {
                                                initial: {
                                                    y: "70vw"
                                                },
                                                animate: animation7,
                                                style: {
                                                    margin: "10px 0px"
                                                },
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                                initial: {
                                                    y: "100vw"
                                                },
                                                animate: animation8,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        justifyContent: "space-between",
                                                        width: {
                                                            xs: "90%",
                                                            sm: "58%",
                                                            md: "100%",
                                                            lg: "90%"
                                                        },
                                                        marginLeft: {
                                                            lg: "5%",
                                                            xs: "5%",
                                                            sm: "22%",
                                                            md: "0%"
                                                        },
                                                        marginRight: {
                                                            lg: "0%",
                                                            xs: "0%",
                                                            sm: "5%",
                                                            md: "0%"
                                                        },
                                                        height: "53%",
                                                        textAlign: "center",
                                                        fontSize: "14px",
                                                        fontWeight: "300"
                                                    },
                                                    style: {
                                                        margin: "auto",
                                                        width: "90%"
                                                    },
                                                    children: item.p_text
                                                })
                                            })
                                        ]
                                    }, index))
                            })
                        }, index))
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ Tech)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3083);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9795);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const Tech = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
        maxWidth: "xl",
        sx: {
            backgroundImage: "url('/backgroundImages/service_page_bg/bg/second.svg')",
            backgroundSize: {
                xs: "cover",
                md: "contain"
            },
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "50px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    margin: "50px 0 80px 0",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "h2",
                        sx: {
                            display: "inline-block",
                            fontWeight: "300",
                            fontSize: {
                                xs: "2.75rem",
                                lg: "3.75rem",
                                sm: "3.75rem",
                                md: "3.75rem",
                                xl: "3.75rem"
                            },
                            marginRight: {
                                xs: "0px",
                                md: "20px"
                            }
                        },
                        children: "Our Key"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "h2",
                        sx: {
                            display: "inline-block",
                            fontSize: {
                                xs: "2.75rem",
                                lg: "3.75rem",
                                sm: "3.75rem",
                                md: "3.75rem",
                                xl: "3.75rem"
                            },
                            fontWeight: "500"
                        },
                        children: "Development Technologies"
                    })
                ]
            }),
            Object.keys(_static__WEBPACK_IMPORTED_MODULE_5__/* .Techs */ .CL).map((tech, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    className: "row",
                    sx: {
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        },
                        justifyContent: "center",
                        margin: {
                            xs: "0 auto 20px auto",
                            md: "0 auto 80px auto"
                        },
                        width: {
                            xs: "80%",
                            md: "100%",
                            lg: "90%"
                        }
                    },
                    children: _static__WEBPACK_IMPORTED_MODULE_5__/* .Techs */ .CL[tech].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .TechImg */ .GV, {
                            srcurl: item.srcurl,
                            hurl: item.hurl,
                            text: item.text
                        }, index))
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components__WEBPACK_IMPORTED_MODULE_4__/* .SendRequestBtn */ .et, {})
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 8695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ TechStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);






const H3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("h3")({
    color: "white",
    fontSize: "4rem",
    fontWeight: "400",
    marginBottom: "-45px",
    textAlign: "left"
});
const H2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("h2")({
    color: "white",
    fontSize: "4rem",
    fontWeight: "600",
    marginBottom: "-55px"
});
const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("p")({
    color: "white",
    fontSize: "17px",
    marginTop: "4rem",
    width: "34%"
});
const TechStack = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: "32rem",
            // paddingRight: '4rem !important',
            backgroundImage: `url(/backgroundImages/technologies_page/FirstBackground.svg)`,
            padding: "0px 0 0px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            sx: {
                height: "31rem",
                backgroundImage: "url('/assets/technologies_top/Technology_top_picture.svg')",
                padding: "61px 0 0 0px",
                justifyContent: "center",
                backgroundPosition: {
                    lg: "right",
                    xl: "right",
                    md: "right",
                    sm: "right",
                    xs: "center center no-repeat"
                },
                backgroundRepeat: "no-repeat"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                maxWidth: "xl",
                className: "containerSection",
                sx: {
                    alignItems: "start",
                    // marginTop: '-41rem',
                    paddingLeft: {
                        lg: "6rem !important",
                        xl: "6rem !important",
                        sm: "3rem !important",
                        md: "3rem !important",
                        xs: "2rem !important"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                        sx: {
                            fontSize: {
                                lg: "4rem",
                                sm: "4rem",
                                md: "4rem",
                                xs: "3rem"
                            }
                        },
                        children: "Software Development"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H3, {
                        sx: {
                            fontSize: {
                                lg: "4rem",
                                sm: "4rem",
                                md: "4rem",
                                xs: "3rem"
                            }
                        },
                        children: "Technology Stack"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                        children: "Every project requires a dedicated approach and a carefully selected tech stack to ensure that its scope will be delivered on time and the code will be spotless. Check out what technologies our engineers and developers use."
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ KeyDevelopment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_components_OutlinedButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2703);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9795);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);











// const H3 = styled('h3')({
//     color: 'white',
//     fontSize: '3rem',
//     fontWeight: '400',
//     marginBottom: '-45px',
//     textAlign: 'center',
// });
const H2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("h2")({
    color: "white",
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "-20px",
    textAlign: "center",
    "@media screen and (max-width: 550px)": {
        fontSize: "2rem"
    }
});
const KeyDevelopment = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8___default()), {
        sx: {
            height: {
                lg: "70rem",
                sm: "68rem",
                xs: "256rem",
                md: "68rem",
                xl: "68rem"
            },
            backgroundImage: "url(/backgroundImages/technologies_page/SecondBackground.svg)",
            padding: "0px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                maxWidth: "xl",
                className: "containerSection",
                sx: {
                    paddingTop: "0px",
                    paddingBottom: "50px",
                    alignItems: "start"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                            children: "Our Key Development Technologies"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        container: true,
                        rowSpacing: 2,
                        columnSpacing: {
                            xs: 1,
                            sm: 2,
                            md: 1
                        },
                        direction: "row",
                        sx: {
                            flexDirection: {
                                xs: "column",
                                lg: "row",
                                sm: "row",
                                md: "row",
                                xl: "row"
                            }
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        style: {
                            marginTop: "50px"
                        },
                        children: _static__WEBPACK_IMPORTED_MODULE_9__/* .images_technologies.map */ .UG.map((image)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                xs: 2.3,
                                style: {
                                    textAlign: "-webkit-center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        sx: {
                                            position: "relative",
                                            width: 101,
                                            height: 98
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                component: "img",
                                                sx: {
                                                    height: 98,
                                                    width: 101,
                                                    display: "block",
                                                    maxWidth: 119,
                                                    padding: "18px",
                                                    backgroundColor: "#1f1d1d70",
                                                    borderRadius: "10%",
                                                    overflow: "hidden"
                                                },
                                                src: image.imgPath,
                                                alt: image.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                component: "img",
                                                sx: {
                                                    position: "absolute",
                                                    top: 0,
                                                    // left: 83,
                                                    height: 98,
                                                    width: 101,
                                                    display: "block",
                                                    maxWidth: 119,
                                                    padding: "18px",
                                                    backgroundColor: "#1f1d1d70",
                                                    borderRadius: "10%",
                                                    marginBottom: "2rem",
                                                    overflow: "hidden",
                                                    opacity: 0,
                                                    // marginTop: '-130px',
                                                    transition: "all 0.9s",
                                                    "&:hover": {
                                                        opacity: 1
                                                    }
                                                },
                                                src: image.imgPathOrig,
                                                alt: image.label
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        variant: "h5",
                                        component: "h5",
                                        style: {
                                            marginBottom: "5rem",
                                            color: "white"
                                        },
                                        children: image.label
                                    })
                                ]
                            }, image.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-3rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_OutlinedButton__WEBPACK_IMPORTED_MODULE_7__/* .OutlinedButton */ .U, {
                            text: "SEND REQUEST"
                        })
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 1291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ TechnologicalExpertise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__);




// import { OutlinedButton  } from '../../common-components/OutlinedButton';
// import Link from 'next/link';


const H3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("h3")({
    color: "white",
    fontSize: "3.6rem",
    fontWeight: "400",
    marginBottom: "-45px",
    textAlign: "left"
});
const H2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("h2")({
    color: "white",
    fontSize: "3.6rem",
    fontWeight: "600",
    marginBottom: "-20px",
    marginTop: "50px"
});
const P = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("p")({
    color: "white",
    fontSize: "17px",
    marginTop: "2rem",
    marginRight: "24rem",
    marginBottom: "3rem",
    width: "60%"
});
const TechnologicalExpertise = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default()), {
        sx: {
            height: "32rem",
            // paddingRight: '4rem !important',
            backgroundImage: `url(/backgroundImages/technologies_page/ThirdBackground.svg)`,
            padding: "0px 0 0px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                height: "31rem",
                backgroundImage: "url('/assets/technologies_top/Our_technology_experties_picture.svg')",
                padding: "61px 0 0 0px",
                justifyContent: "center",
                backgroundPosition: {
                    lg: "right",
                    xl: "right",
                    md: "right",
                    sm: "right",
                    xs: "center center no-repeat"
                },
                backgroundRepeat: "no-repeat"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                maxWidth: "xl",
                className: "containerSection",
                sx: {
                    alignItems: "start",
                    // marginTop: '-41rem',
                    paddingLeft: {
                        lg: "3rem !important",
                        xl: "3rem !important",
                        sm: "1.5rem !important",
                        md: "1.5rem !important",
                        xs: "1rem !important"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H3, {
                        sx: {
                            fontSize: {
                                lg: "3.6rem",
                                sm: "3.6rem",
                                md: "3.6rem",
                                xs: "3rem"
                            }
                        },
                        children: "Our"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H2, {
                        sx: {
                            fontSize: {
                                lg: "3.6rem",
                                sm: "3.6rem",
                                md: "3.6rem",
                                xs: "3rem"
                            }
                        },
                        children: "Technological Expertise"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(P, {
                        children: "Our professional developers have worked for clients in over 10+ industries all over the world and continue to add value to their projects every day. Our experience with different industries can give you broader insights into what the job requires, and into the many different ways in which you can expand and thrive."
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 6661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReadBlogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_components_OutlinedButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2703);
/* harmony import */ var _common_components_ShowButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2557);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_10__]);
_utils_request__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ReadBlogs = ()=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function fetchData(page) {
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_10__/* .serverRequest */ .Pu)("get", "content/", {
            content_type: "blog",
            page: page
        });
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_10__/* .isAxiosResponse */ .$z)(res) && res.data) {
            await setData(res.data.results);
        }
        if ((0,_utils_request__WEBPACK_IMPORTED_MODULE_10__/* .isAxiosError */ .IZ)(res) && res.data) {
            console.log("Some error occured");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData(1);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: "0",
            backgroundImage: "url(/backgroundImages/technologies_page/FifthBackground.svg)",
            padding: "50px 0",
            justifyContent: "center",
            backgroundSize: {
                xs: "cover",
                md: "cover"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            maxWidth: "xl",
            className: "containerSection",
            sx: {
                paddingTop: "50px",
                paddingBottom: "50px",
                alignItems: "start"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                rowSpacing: 2,
                columnSpacing: {
                    xs: 1,
                    sm: 2,
                    md: 1
                },
                //  direction="row"
                justifyContent: "center",
                alignItems: "center",
                sx: {
                    padding: {
                        lg: "0 50px",
                        xl: "0 50px",
                        md: "0 50px",
                        sm: "0 50px",
                        xs: "0 0px"
                    },
                    display: "flex",
                    flexDirection: {
                        lg: "row",
                        xs: "column",
                        sm: "column",
                        md: "column",
                        xl: "column"
                    }
                },
                children: [
                    data.slice(0, 3).map((ims)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                width: {
                                    lg: "30%",
                                    xs: "80%",
                                    sm: "60%",
                                    md: "50%",
                                    xl: "28%"
                                },
                                margin: "15px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    width: "100%",
                                    height: {
                                        sm: "500px",
                                        md: "500px",
                                        lg: "500px",
                                        xs: "500px"
                                    },
                                    backgroundImage: `url(${ims.thumbnail})`,
                                    padding: {
                                        lg: "0px 0",
                                        xs: "0px 0",
                                        sm: "0px 0",
                                        md: "0px 0",
                                        xl: "0px 0"
                                    },
                                    backgroundSize: {
                                        xs: "cover",
                                        md: "cover"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        sx: {
                                            textAlign: "center",
                                            mb: "20px",
                                            position: "absolute",
                                            width: {
                                                lg: "27%",
                                                xs: "76%",
                                                sm: "50%",
                                                md: "44%",
                                                xl: "28%"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                variant: "h5",
                                                sx: {
                                                    margin: "15px 0",
                                                    textAlign: "center",
                                                    color: "white",
                                                    paddingTop: "51px",
                                                    fontSize: {
                                                        sm: "16px",
                                                        md: "1.5rem",
                                                        fontWeight: "bold"
                                                    }
                                                },
                                                children: ims.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                sx: {
                                                    fontSize: {
                                                        sm: "12px",
                                                        md: "22px"
                                                    },
                                                    paddingLeft: "20px",
                                                    paddingRight: "20px",
                                                    textAlign: "center",
                                                    position: "absolute",
                                                    width: "100%"
                                                },
                                                children: ims.short_description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        sx: {
                                            position: "absolute",
                                            marginTop: "420px",
                                            width: {
                                                lg: "27%",
                                                xs: "76%",
                                                sm: "51%",
                                                md: "44%",
                                                xl: "28%"
                                            },
                                            textAlign: "center"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: `/innerpage/${ims.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_ShowButton__WEBPACK_IMPORTED_MODULE_8__/* .ShowButton */ .p, {
                                                    sx: {
                                                        mb: "20px"
                                                    },
                                                    text: "READ MORE"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }, ims.id)),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        style: {
                            textAlign: "-webkit-center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h2",
                                sx: {
                                    margin: "30px 0",
                                    textAlign: "center",
                                    color: "white",
                                    paddingTop: "0px"
                                },
                                children: "Read Blogs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/blog",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_OutlinedButton__WEBPACK_IMPORTED_MODULE_7__/* .OutlinedButton */ .U, {
                                        text: "SHOW MORE"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A$": () => (/* binding */ images_sliders),
/* harmony export */   "CL": () => (/* binding */ Techs),
/* harmony export */   "IZ": () => (/* binding */ Boxes),
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "PC": () => (/* binding */ services_rows_two),
/* harmony export */   "Rd": () => (/* binding */ Industries),
/* harmony export */   "UG": () => (/* binding */ images_technologies),
/* harmony export */   "Zd": () => (/* binding */ services_rows_three),
/* harmony export */   "rj": () => (/* binding */ services_rows)
/* harmony export */ });
/* unused harmony exports Technologies, Questions, CaseImages, BlogImages */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const images_technologies = [
    {
        "id": 1,
        "label": "Python",
        "imgPath": "/assets/technologies/PythonWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/PythonoringanlcolorIcon.svg"
    },
    {
        "id": 2,
        "label": "Django",
        "imgPath": "/assets/technologies/DjangoWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/DjangoOringanlColorIcon.svg"
    },
    {
        "id": 3,
        "label": "Flask",
        "imgPath": "/assets/technologies/FlaskWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/FlaskOringanlColorIcon.svg"
    },
    {
        "id": 4,
        "label": "Golong",
        "imgPath": "/assets/technologies/GolangWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/GolangOringanlColorIcon.svg"
    },
    {
        "id": 5,
        "label": "JavaScript",
        "imgPath": "/assets/technologies/JavaScriptWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/JavaScriptOringanlColorIcon.svg"
    },
    {
        "id": 6,
        "label": "Azure",
        "imgPath": "/assets/technologies/AzureWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/AzureOringanlColorIcon.svg"
    },
    {
        "id": 7,
        "label": "Google Cloud",
        "imgPath": "/assets/technologies/GoogleCloudWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/GoogleCloudOringanlColorIcon.svg"
    },
    {
        "id": 8,
        "label": "PostgreSQL",
        "imgPath": "/assets/technologies/postgresqlWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/postgresqlOringanlColorIcon.svg"
    },
    {
        "id": 9,
        "label": "MongoDB",
        "imgPath": "/assets/technologies/MongoDBWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/MongoDBOringanlColorIcon.svg"
    },
    {
        "id": 10,
        "label": "React",
        "imgPath": "/assets/technologies/ReactWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/ReactOringanlColorIcon.svg"
    },
    {
        "id": 11,
        "label": "React Native",
        "imgPath": "/assets/technologies/ReactNativeWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/ReactNativeOringanlColorIcon.svg"
    },
    {
        "id": 12,
        "label": "MySQL",
        "imgPath": "/assets/technologies/MySQLWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/MySQLOringanlColorIcon.svg"
    },
    {
        "id": 13,
        "label": "Twilio",
        "imgPath": "/assets/technologies/TwilioWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/TwilioOringanlColorIcon.svg"
    },
    {
        "id": 14,
        "label": "Scrapy",
        "imgPath": "/assets/technologies/ScrapyWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/ScrapyOringanlColorIcon.svg"
    },
    {
        "id": 15,
        "label": "Tensorflow",
        "imgPath": "/assets/technologies/TensorFlowWhiteIcon.svg",
        "imgPathOrig": "/assets/technologies/TensorFlowOringanlColorIcon.svg"
    },
    {
        "id": 16,
        "label": "Hyperledger Fabric",
        "imgPath": "/assets/technologies/HyperledgerFabricWhiteIcon.png",
        "imgPathOrig": "/assets/technologies/HyperledgerFabricColorIcon.png"
    },
    {
        "id": 17,
        "label": "Web3 js",
        "imgPath": "/assets/technologies/Web3WhiteIcon.png",
        "imgPathOrig": "/assets/technologies/Web3ColorIcon.png"
    },
    {
        "id": 18,
        "label": "Solidity",
        "imgPath": "/assets/technologies/SolidityWhiteIcon.png",
        "imgPathOrig": "/assets/technologies/SolidityColorIcon.png"
    }, 
];
const Technologies = [
    {
        name: "Python",
        path: "/technologies"
    },
    {
        name: "Django",
        path: "/technologies"
    },
    {
        name: "Flask",
        path: "/technologies"
    },
    {
        name: "Golang",
        path: "/technologies"
    },
    {
        name: "JavaScript",
        path: "/"
    },
    {
        name: "Tensorflow",
        path: "/technologies"
    },
    {
        name: "AWS",
        path: "/technologies"
    },
    {
        name: "Azure",
        path: "/technologies"
    },
    {
        name: "Google Cloud",
        path: "/technologies"
    },
    {
        name: "PostgreSQL",
        path: "/technologies"
    },
    {
        name: "MongoDB",
        path: "/technologies"
    },
    {
        name: "MySQL",
        path: "/technologies"
    },
    {
        name: "Twilio",
        path: "/technologies"
    },
    {
        name: "Scrapy",
        path: "/technologies"
    }, 
];
const Industries = [
    {
        name: "E-commerce",
        path: "/"
    },
    {
        name: "Advertising",
        path: "/"
    },
    {
        name: "Financial Institutions",
        path: "/"
    },
    {
        name: "Real Estate",
        path: "/"
    },
    {
        name: "Retail & FMCG",
        path: "/"
    },
    {
        name: "Healthcare",
        path: "/"
    }, 
];
const Services = [
    {
        name: "Data Science",
        path: "/services"
    },
    {
        name: "Cloud Solutions",
        path: "/services"
    },
    {
        name: "Custom Website Development",
        path: "/services"
    },
    {
        name: "Blockchain",
        path: "/services"
    },
    {
        name: "Data Engineering",
        path: "/services"
    },
    {
        name: "Business Intelligence Solutions",
        path: "/services"
    }, 
];
const Questions = [
    {
        "id": 1,
        "ques": "Where is your development team located",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 2,
        "ques": "How do you manage communication with different time zones?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 3,
        "ques": "What are payment terms?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 4,
        "ques": "What is your hourly rate?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 5,
        "ques": "I have clear requirements, how quickly can you start a project?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 6,
        "ques": "Thave a legacy code, can you work with it?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 7,
        "ques": "Will I be getting regular updates from you?",
        "ans": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum porro odio iste pariatur. Quae sint tempora mollitia nisi exercitationem!"
    },
    {
        "id": 8,
        "ques": "Do you do maintenance or just develop mobile apps?",
        "ans": "Pan Jukes"
    },
    {
        "id": 9,
        "ques": "Do you have any mobile apps in your portfolio similar to my concept?",
        "ans": "Pan Jukes"
    },
    {
        "id": 10,
        "ques": "Will I be getting regular updated from you?",
        "ans": "Pan Jukes"
    }, 
];
const Boxes = {
    "box1": [
        {
            "imgurl": "/backgroundImages/career_page_svgs/Remote_Work.svg",
            "text": "Remote Work"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Performance_Bonus.svg",
            "text": "Performance Bonus"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Medical_Insurance.svg",
            "text": [
                "Medical",
                "Insurance",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "(IPD & OPD)"
            ]
        }
    ],
    "box2": [
        {
            "imgurl": "/backgroundImages/career_page_svgs/Referral_Bonus.svg",
            "text": "Referral Bonus"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Annual_Increments.svg",
            "text": "Annual Increments"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Com.svg",
            "text": [
                "Champion Of The Month",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Bonus"
            ]
        }
    ],
    "box3": [
        {
            "imgurl": "/backgroundImages/career_page_svgs/Entertainment_Activities.svg",
            "text": [
                "Entertainment Activities",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Followed By Bonuses"
            ]
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Trips_Icon.svg",
            "text": "Trips"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Annual_Paid_Leaves.svg",
            "text": "Annual Paid Leaves"
        }, 
    ],
    "box4": [
        {
            "imgurl": "/backgroundImages/career_page_svgs/Electricity_Backup.svg",
            "text": "Electricity Backup"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Dinner.svg",
            "text": "Dinner"
        },
        {
            "imgurl": "/backgroundImages/career_page_svgs/Dinner.svg",
            "text": "Dinner"
        }, 
    ]
};
const CaseImages = [
    {
        "id": 1,
        "views": 1200,
        "app_name": "Food Delivery Application",
        "bgurl": "/blog_page_svgs/Blog_01.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 2,
        "views": 1200,
        "app_name": "Dating Application",
        "bgurl": "/blog_page_svgs/Blog_02.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 3,
        "views": 1200,
        "app_name": "Teahcer Management Application",
        "bgurl": "/blog_page_svgs/Blog_03.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 4,
        "views": 1200,
        "app_name": "Jewelry Application",
        "bgurl": "/blog_page_svgs/Blog_04.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 5,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_06.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 6,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_05.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 7,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_07.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 8,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_08.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 9,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_09.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 10,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    }, 
];
const BlogImages = [
    {
        "id": 1,
        "views": 1200,
        "app_name": "Food Delivery Application",
        "bgurl": "/blog_page_svgs/Blog_01.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 2,
        "views": 1200,
        "app_name": "Dating Application",
        "bgurl": "/blog_page_svgs/Blog_02.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 3,
        "views": 1200,
        "app_name": "Teahcer Management Application",
        "bgurl": "/blog_page_svgs/Blog_03.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 4,
        "views": 1200,
        "app_name": "Jewelry Application",
        "bgurl": "/blog_page_svgs/Blog_04.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 5,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_06.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 6,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_05.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 7,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_07.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 8,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_08.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    },
    {
        "id": 9,
        "views": 1200,
        "app_name": "Kid Application",
        "bgurl": "/blog_page_svgs/Blog_09.png",
        "date": "25 August 2021",
        "author": "Lera Gustavo"
    }, 
];
const services_rows = {
    "row1": [
        {
            "bgurl": "/backgroundImages/service_page_bg/Data_Science.png",
            "title": "Data Science",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/DS_Icon.svg",
            "p_text": "Data science services include data science consulting, development and support to enable companies to run experiments on their data in search of business insights. CoalDev has been applying data science in its different forms such as fraud and risk detection, healthcare, speech recognition along with statistics and machine learning (including its most recent technique - deep learning) to meet the most complex analytics needs of our clients."
        },
        {
            "bgurl": "/backgroundImages/service_page_bg/Cloud_Solutions.png",
            "title": "Cloud Solutions",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/CS_Icon.svg",
            "p_text": "CoalDev is experienced in working with all major cloud providers — including Amazon Web Services, Microsoft Azure, and Google Cloud Platform — to help organizations accelerate their transformation and get the most from high-performing cloud environments, whether public, private, or hybrid. We provide custom cloud software development services that enable enterprises and tech innovators to future-proof their infrastructure investments."
        }, 
    ]
};
const services_rows_two = {
    "row2": [
        {
            "bgurl": "/backgroundImages/service_page_bg/Website_Development.png",
            "title": "Website Development",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/WD_Icon.svg",
            "p_text": "CoalDev offers comprehensive website development solutions to businesses worldwide. Our expert team crafts bespoke websites that not only enhance the visual appeal of a business but also aid in customer acquisition and retention. Our services cater to all aspects of website development, from designing and coding to testing and maintenance."
        },
        {
            "bgurl": "/backgroundImages/service_page_bg/Block_Chain.png",
            "title": "Block Chain",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/BC_Icon.svg",
            "p_text": "Blockchain technology is the latest form of technology with significant security and transparency features. Blockchain has found extensive application in many areas - from finance to hospitality and medicine. The reason for this is the security features of the blockchain. Blockchain adds value and brings benefits to businesses by offering more transparency, increased speed, reduced cost, and enhanced traceability. CoalDev uses blockchain technology to transform financial services, supply chains, government, healthcare, retail, and many other industries."
        }, 
    ]
};
const services_rows_three = {
    "row3": [
        {
            "bgurl": "/backgroundImages/service_page_bg/ETL.png",
            "title": "Data Engineering",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/ETL_Icon.svg",
            "p_text": "Data engineering is a crucial part of any modern business. At CoalDev, we offer comprehensive data engineering services that include sophisticated ETL processes. Our data engineering team collects, transforms, and enhances data from various sources, using cutting-edge technologies to ensure accuracy and consistency."
        },
        {
            "bgurl": "/backgroundImages/service_page_bg/Forecasting_Solutions.png",
            "title": "Business Intelligence Solutions",
            "tech_icon": "/backgroundImages/service_page_bg/tch_icons/FS_Icon.svg",
            "p_text": "Leverage the power of data and instill a competitive approach to make empowering business decisions. At CoalDev, we help you build powerful business intelligence solutions that can help you make better, faster decisions in your operational processes by analyzing millions of data points to drive holistic insights."
        }, 
    ]
};
const Techs = {
    "tech1": [
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Python_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Python_org.svg",
            "text": "Python"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Django_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Django_org.svg",
            "text": "Django"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Flask_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Flask_org.svg",
            "text": "Flask"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Go_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Go_org.svg",
            "text": "Golang"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/JS_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/JS_org.svg",
            "text": "JavaScript"
        }, 
    ],
    "tech2": [
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Azurewhite.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Azure.svg",
            "text": "Azure"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/GC_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/GC_org.svg",
            "text": "Google Cloud"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/postgresql_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/postgresql_org.svg",
            "text": "Postgresql"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/MonoDB_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/MongoDB_org.svg",
            "text": "MongoDB"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/React_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/React_org.svg",
            "text": "React"
        }, 
    ],
    "tech3": [
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/React_Native_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/React_Native_org.svg",
            "text": "React Native"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/MySQL_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/MySQL_org.svg",
            "text": "MySQL"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Twilio_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Twilio_org.svg",
            "text": "Twilio"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/Scrapy_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/Scrapy_org.svg",
            "text": "Scrapy"
        },
        {
            "srcurl": "/backgroundImages/service_page_bg/icons/TensorFlow_White.svg",
            "hurl": "/backgroundImages/service_page_bg/icons/on_hover/TensorFlow_org.svg",
            "text": "TensorFlow"
        }, 
    ],
    "tech4": [
        {
            "srcurl": "/assets/technologies/HyperledgerFabricWhiteIcon.png",
            "hurl": "/assets/technologies/HyperledgerFabricColorIcon.png",
            "text": "Hyperledger Fabric"
        },
        {
            "srcurl": "/assets/technologies/Web3WhiteIcon.png",
            "hurl": "/assets/technologies/Web3ColorIcon.png",
            "text": "Web3 js"
        },
        {
            "srcurl": "/assets/technologies/SolidityWhiteIcon.png",
            "hurl": "/assets/technologies/SolidityColorIcon.png",
            "text": "Solidity"
        }, 
    ]
};
const images_sliders = [
    {
        "label": "Python",
        "imgPath": "/assets/Python_1.png",
        "imgPathOrig": "/assets/PythonOrignal_1.png"
    },
    {
        "label": "Django",
        "imgPath": "/assets/Django_1.png",
        "imgPathOrig": "/assets/DjangoOrignal_1.png"
    },
    {
        "label": "Flask",
        "imgPath": "/assets/Flask_1.png",
        "imgPathOrig": "/assets/FlaskOrignal_1.png"
    },
    {
        "label": "Golang",
        "imgPath": "/assets/Golang_1.png",
        "imgPathOrig": "/assets/GolangOrignal_1.png"
    },
    {
        "label": "JavaScript",
        "imgPath": "/assets/JavaScript_1.png",
        "imgPathOrig": "/assets/JavaScriptOrignal_1.png"
    },
    {
        "label": "AWS",
        "imgPath": "/assets/AWS_1.png",
        "imgPathOrig": "/assets/AWSOrignalColor.png"
    },
    {
        "label": "Azure",
        "imgPath": "/assets/Azure.png",
        "imgPathOrig": "/assets/AzureOrignal.png"
    },
    {
        "label": "ETL",
        "imgPath": "/assets/ETL.png",
        "imgPathOrig": "/assets/ETLOrignal.png"
    },
    {
        "label": "Google Cloud",
        "imgPath": "/assets/GoogleCloud.png",
        "imgPathOrig": "/assets/GoogleCloudOrignal.png"
    },
    {
        "label": "MongoDB",
        "imgPath": "/assets/MonoDB.png",
        "imgPathOrig": "/assets/MonoDBOrignal.png"
    },
    {
        "label": "MySQL",
        "imgPath": "/assets/MySQL.png",
        "imgPathOrig": "/assets/MySQLOrignal.png"
    },
    {
        "label": "React",
        "imgPath": "/assets/Reacticon.png",
        "imgPathOrig": "/assets/ReacticonOrignal.png"
    },
    {
        "label": "Scrapy",
        "imgPath": "/assets/Scrapy.png",
        "imgPathOrig": "/assets/ScrapyOrignal.png"
    },
    {
        "label": "TensorFlow",
        "imgPath": "/assets/TensorFlow.png",
        "imgPathOrig": "/assets/TensorFlowOrignal.png"
    },
    {
        "label": "Twilio",
        "imgPath": "/assets/Twilio.png",
        "imgPathOrig": "/assets/TwilioOrignal.png"
    },
    {
        "label": "PostgreSQL",
        "imgPath": "/assets/postgresql.png",
        "imgPathOrig": "/assets/postgresqlOrignal.png"
    },
    {
        "label": "Hyperledger Fabric",
        "imgPath": "/assets/technologies/HyperledgerFabricWhiteIcon.png",
        "imgPathOrig": "/assets/technologies/HyperledgerFabricColorIcon.png"
    },
    {
        "label": "Web3 js",
        "imgPath": "/assets/technologies/Web3WhiteIcon.png",
        "imgPathOrig": "/assets/technologies/Web3ColorIcon.png"
    },
    {
        "label": "Solidity",
        "imgPath": "/assets/technologies/SolidityWhiteIcon.png",
        "imgPathOrig": "/assets/technologies/SolidityColorIcon.png"
    }, 
];


/***/ }),

/***/ 628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ isAxiosResponse),
/* harmony export */   "IZ": () => (/* binding */ isAxiosError),
/* harmony export */   "Pu": () => (/* binding */ serverRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
/* eslint-disable */ const isAxiosResponse = (response)=>{
    return response.status !== undefined;
};
const isAxiosError = (response)=>{
    return response.isAxiosError !== undefined;
};
const serverRequest = async (method, url, params)=>{
    const config = {
        method,
        url,
        params,
        baseURL: process.env.NEXT_PUBLIC_BASE_API || "https://api.pos.coaldev.com/api/"
    };
    try {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
        return response;
    } catch (error) {
        return error;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;