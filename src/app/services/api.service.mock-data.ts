export const MOCK_DATA = {
  domains: {
    AE: {
      domain: "AE",
      url: "www.hotels.com",
      country_code: "ARE",
      site_id: 310000033,
      tpid: 3100,
      eapid: 33,
      currency: "USD",
      supported_locales: {
        en_GB: {
          key: "en_GB",
          language_code: null,
          language_id: 2057
        }
      }
    },
    AR: {
      domain: "AR",
      url: "ar.hoteles.com",
      country_code: "ARG",
      site_id: 301900003,
      tpid: 3019,
      eapid: 3,
      currency: "ARS",
      supported_locales: {
        es_AR: {
          key: "es_AR",
          language_code: "es-AR",
          language_id: 11274
        }
      }
    }
  },
  regions: {
    query: "nai",
    data: [
      {
        '@type': "gaiaRegionResult",
        index: "0",
        gaiaId: "2523",
        type: "CITY",
        regionNames: {
          fullName: "Nairobi, Nairobi County, Kenya",
          shortName: "Nairobi",
          displayName: "Nairobi, Nairobi County, Kenya",
          primaryDisplayName: "Nairobi",
          secondaryDisplayName: "Nairobi County, Kenya",
          lastSearchName: "Nairobi"
        },
        essId: {
          sourceName: "GAI",
          sourceId: "2523"
        },
        coordinates: {
          lat: "-1.292777",
          long: "36.820433"
        },
        hierarchyInfo: {
          country: {
            name: "Kenya",
            isoCode2: "KE",
            isoCode3: "KEN"
          }
        }
      },
      {
        '@type': "gaiaRegionResult",
        index: "1",
        gaiaId: "5717",
        type: "CITY",
        regionNames: {
          fullName: "Nairn, Scotland, United Kingdom",
          shortName: "Nairn",
          displayName: "Nairn, Scotland, United Kingdom",
          primaryDisplayName: "Nairn",
          secondaryDisplayName: "Scotland, United Kingdom",
          lastSearchName: "Nairn"
        },
        essId: {
          sourceName: "GAI",
          sourceId: "5717"
        },
        coordinates: {
          lat: "57.584938",
          long: "-3.86884"
        },
        hierarchyInfo: {
          country: {
            name: "United Kingdom",
            isoCode2: "GB",
            isoCode3: "GBR"
          }
        }
      }
    ]
  },
  hotels: {
    __typename: "PropertySearchResults",
    filterMetadata: {
      __typename: "PropertyFilterMetadata",
      amenities: [
        {
          __typename: "PropertyAmenityValue",
          id: 7
        },
        {
          __typename: "PropertyAmenityValue",
          id: 83
        },
        {
          __typename: "PropertyAmenityValue",
          id: 14
        },
        {
          __typename: "PropertyAmenityValue",
          id: 82
        },
        {
          __typename: "PropertyAmenityValue",
          id: 16
        },
        {
          __typename: "PropertyAmenityValue",
          id: 17
        },
        {
          __typename: "PropertyAmenityValue",
          id: 19
        },
        {
          __typename: "PropertyAmenityValue",
          id: 27
        },
        {
          __typename: "PropertyAmenityValue",
          id: 66
        },
        {
          __typename: "PropertyAmenityValue",
          id: 76
        },
        {
          __typename: "PropertyAmenityValue",
          id: 70
        },
        {
          __typename: "PropertyAmenityValue",
          id: 73
        },
        {
          __typename: "PropertyAmenityValue",
          id: 75
        },
        {
          __typename: "PropertyAmenityValue",
          id: 80
        },
        {
          __typename: "PropertyAmenityValue",
          id: 81
        },
        {
          __typename: "PropertyAmenityValue",
          id: 84
        },
        {
          __typename: "PropertyAmenityValue",
          id: 85
        }
      ],
      neighborhoods: [
        {
          __typename: "Neighborhood",
          name: "Nairobi (and vicinity)",
          regionId: "178290"
        },
        {
          __typename: "Neighborhood",
          name: "Westlands",
          regionId: "6345032"
        },
      ],
      priceRange: {
        __typename: "PriceRange",
        max: 228.82,
        min: 12.88
      }
    },
    universalSortAndFilter: {
      __typename: "ShoppingSortAndFilters",
      toolbar: {
        __typename: "UIToolbar",
        primary: "Sort & filter",
        actions: {
          __typename: "UIToolbarActions",
          primary: {
            __typename: "UITertiaryButton",
            primary: null,
            action: {
              __typename: "ShoppingSortAndFilterAction",
              actionType: "CLOSE_AND_DO_NOT_APPLY",
              accessibility: null,
              analytics: {
                __typename: "ClientSideAnalytics",
                linkName: "close search filters dialog",
                referrerId: "HOT.SR.CloseFilterDialog.Close"
              }
            }
          },
          secondaries: [
            {
              __typename: "UITertiaryButton",
              primary: "Clear",
              disabled: false,
              action: {
                __typename: "ShoppingSortAndFilterAction",
                actionType: "CLEAR_DATA",
                accessibility: "All selections now cleared",
                analytics: {
                  __typename: "ClientSideAnalytics",
                  linkName: "clear all selections",
                  referrerId: "HOT.SR.ClearFilters"
                }
              }
            }
          ]
        }
      },
      revealAction: {
        __typename: "UISecondaryFloatingActionButton",
        primary: "Sort & filter",
        action: {
          __typename: "ShoppingSortAndFilterAction",
          actionType: "OPEN_MODAL",
          accessibility: null,
          analytics: {
            __typename: "ClientSideAnalytics",
            linkName: "Launch filters takeover",
            referrerId: "HOT.SR:FilterControl"
          }
        },
        accessibility: "1 filter applied. Change sort or apply more filters.",
        badge: 1,
        disabled: false,
        icon: {
          __typename: "Icon",
          id: "tune",
          description: "reveals sort and filter window",
          size: null,
          token: "icon__tune",
          theme: null
        }
      },
      applyAction: {
        __typename: "UIPrimaryFloatingActionButton",
        primary: "Done",
        action: {
          __typename: "ShoppingSortAndFilterAction",
          actionType: "CLOSE_AND_APPLY",
          accessibility: null,
          analytics: {
            __typename: "ClientSideAnalytics",
            linkName: "done search filters dialog",
            referrerId: "HOT.SR.FilterControlDone"
          }
        },
        accessibility: "Apply and close Sort and filter",
        badge: null,
        disabled: false,
        icon: null
      },
      filterSections: [
        {
          __typename: "ShoppingSortAndFilterSection",
          title: "Search by property name",
          fields: [
            {
              __typename: "ShoppingTextInputField",
              primary: null,
              secondary: null,
              action: {
                __typename: "ShoppingSortAndFilterAction",
                actionType: "OPEN_MODAL",
                accessibility: null,
                analytics: {
                  __typename: "ClientSideAnalytics",
                  linkName: "",
                  referrerId: ""
                }
              },
              id: "hotelName",
              label: null,
              placeholder: "e.g. Marriott",
              selected: null,
              typeaheadInfo: {
                __typename: "TypeaheadInfo",
                client: "Hotels.Search",
                isDestination: true,
                lineOfBusiness: "hotels",
                maxNumberOfResults: 10,
                packageType: null,
                personalize: false,
                regionType: 128,
                typeaheadFeatures: "ta_hierarchy|postal_code|contextual_ta|consistent_display"
              },
              icon: {
                __typename: "Icon",
                id: "search",
                description: "magnifying glass",
                size: null,
                token: "icon__search",
                theme: null
              },
              analytics: {
                __typename: "ClientSideAnalytics",
                linkName: "hotelName.",
                referrerId: "HOT.SR.hotelName."
              }
            }
          ]
        },
      ],
      sortSections: [
        {
          __typename: "ShoppingSortAndFilterSection",
          title: null,
          fields: [
            {
              __typename: "ShoppingDropdownField",
              primary: "Sort by",
              secondary: null,
              dropdownFilterOptions: [
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Recommended",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "RECOMMENDED",
                  description: null,
                  selected: false,
                  disabled: false,
                  default: true,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.RECOMMENDED",
                    referrerId: "HOT.SR.sort.RECOMMENDED.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.RECOMMENDED",
                    referrerId: "HOT.SR.sort.RECOMMENDED.false"
                  }
                },
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Price",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "PRICE_LOW_TO_HIGH",
                  description: null,
                  selected: false,
                  disabled: false,
                  default: false,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PRICE_LOW_TO_HIGH",
                    referrerId: "HOT.SR.sort.PRICE_LOW_TO_HIGH.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PRICE_LOW_TO_HIGH",
                    referrerId: "HOT.SR.sort.PRICE_LOW_TO_HIGH.false"
                  }
                },
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Distance from city centre",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "DISTANCE",
                  description: null,
                  selected: false,
                  disabled: false,
                  default: false,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.DISTANCE",
                    referrerId: "HOT.SR.sort.DISTANCE.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.DISTANCE",
                    referrerId: "HOT.SR.sort.DISTANCE.false"
                  }
                },
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Guest rating",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "REVIEW",
                  description: null,
                  selected: true,
                  disabled: false,
                  default: false,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.REVIEW",
                    referrerId: "HOT.SR.sort.REVIEW.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.REVIEW",
                    referrerId: "HOT.SR.sort.REVIEW.false"
                  }
                },
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Price + our choices",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "PRICE_RELEVANT",
                  description: null,
                  selected: false,
                  disabled: false,
                  default: false,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PRICE_RELEVANT",
                    referrerId: "HOT.SR.sort.PRICE_RELEVANT.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PRICE_RELEVANT",
                    referrerId: "HOT.SR.sort.PRICE_RELEVANT.false"
                  }
                },
                {
                  __typename: "ShoppingSelectableFilterOption",
                  id: "sort",
                  primary: "Property class",
                  secondary: null,
                  icon: null,
                  analytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "",
                    referrerId: ""
                  },
                  value: "PROPERTY_CLASS",
                  description: null,
                  selected: false,
                  disabled: false,
                  default: false,
                  selectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PROPERTY_CLASS",
                    referrerId: "HOT.SR.sort.PROPERTY_CLASS.true"
                  },
                  deselectAnalytics: {
                    __typename: "ClientSideAnalytics",
                    linkName: "sort.PROPERTY_CLASS",
                    referrerId: "HOT.SR.sort.PROPERTY_CLASS.false"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    properties: [
      {
        __typename: "Property",
        id: "87678281",
        featuredMessages: [],
        name: "The Crossroads Hotel Westlands",
        availability: {
          __typename: "PropertyAvailability",
          available: true,
          minRoomsLeft: null
        },
        propertyImage: {
          __typename: "PropertyImage",
          alt: "",
          fallbackImage: null,
          image: {
            __typename: "Image",
            description: "Primary image",
            url: "https://images.trvl-media.com/hotels/88000000/87680000/87678300/87678281/c5281508.jpg?impolicy=resizecrop&rw=455&ra=fit"
          },
          subjectId: 3
        },
        destinationInfo: {
          __typename: "PropertyDestinationInfo",
          distanceFromDestination: {
            __typename: "Distance",
            unit: "KILOMETER",
            value: 2.9
          },
          distanceFromMessaging: null,
          regionId: "2523"
        },
        legalDisclaimer: null,
        listingFooter: null,
        mapMarker: {
          __typename: "MapMarker",
          label: "$50",
          latLong: {
            __typename: "Coordinates",
            latitude: -1.269472,
            longitude: 36.808756
          }
        },
        neighborhood: {
          __typename: "Region",
          name: "Westlands"
        },
        offerBadge: {
          __typename: "OfferBadge",
          primary: {
            __typename: "Badge",
            text: "Member Price",
            theme_temp: "DEAL_MEMBER",
            icon_temp: {
              __typename: "Icon",
              id: "mod",
              description: "mod"
            },
            mark: null
          },
          secondary: {
            __typename: "Badge",
            text: "10% off",
            theme_temp: "DEAL_MEMBER",
            icon_temp: {
              __typename: "Icon",
              id: "mod",
              description: "mod"
            },
            mark: null
          }
        },
        offerSummary: {
          __typename: "OfferSummary",
          messages: [
            {
              __typename: "OfferSummaryMessage",
              message: "Reserve without credit card",
              theme: "SUCCESS",
              type: "NO_CREDIT_CARD",
              mark: null
            },
            {
              __typename: "OfferSummaryMessage",
              message: "Collect stamps",
              theme: null,
              type: "LOYALTY_EARN",
              mark: {
                __typename: "Mark",
                id: "loyalty",
                token: "mark__loyalty",
                description: "loyalty logo"
              }
            }
          ],
          attributes: [
            {
              __typename: "OfferAttribute",
              type: "NO_CC_REQUIRED"
            },
            {
              __typename: "OfferAttribute",
              type: "PAYMENT_CHOICE"
            }
          ]
        },
        pinnedDetails: null,
        price: {
          __typename: "PropertyPrice",
          options: [
            {
              __typename: "PropertyPriceOption",
              strikeOut: {
                __typename: "Money",
                amount: 55.08,
                formatted: "$55"
              },
              disclaimer: {
                __typename: "LodgingPlainMessage",
                value: "Standard rate on our site, provided by the property and based on your search, before all discounts and points."
              },
              formattedDisplayPrice: "$50"
            }
          ],
          priceMessaging: null,
          lead: {
            __typename: "Money",
            amount: 49.57,
            currencyInfo: {
              __typename: "Currency",
              code: "USD",
              symbol: "$"
            },
            formatted: "$50"
          },
          strikeOut: {
            __typename: "Money",
            amount: 55.08,
            currencyInfo: {
              __typename: "Currency",
              code: "USD",
              symbol: "$"
            },
            formatted: "$55"
          },
          displayMessages: [
            {
              __typename: "PriceDisplayMessage",
              lineItems: [
                {
                  __typename: "DisplayPrice",
                  disclaimer: {
                    __typename: "LodgingPlainDialog",
                    content: [
                      "Standard rate on our site, provided by the property and based on your search, before all discounts and points."
                    ],
                    title: null
                  },
                  price: {
                    __typename: "FormattedMoney",
                    formatted: "$55",
                    accessibilityLabel: "The price was $55"
                  },
                  role: "STRIKEOUT"
                },
                {
                  __typename: "DisplayPrice",
                  disclaimer: null,
                  price: {
                    __typename: "FormattedMoney",
                    formatted: "$50",
                    accessibilityLabel: "The price is $50"
                  },
                  role: "LEAD"
                }
              ]
            },
            {
              __typename: "PriceDisplayMessage",
              lineItems: [
                {
                  __typename: "LodgingEnrichedMessage",
                  accessibilityLabel: null,
                  mark: null,
                  state: null,
                  value: "$234 total",
                  badge: null
                }
              ]
            }
          ],
          strikeOutType: "STANDALONE",
          priceMessages: [
            {
              __typename: "LodgingPlainMessage",
              value: "per night"
            }
          ]
        },
        priceAfterLoyaltyPointsApplied: {
          __typename: "PropertyPrice",
          options: [],
          lead: null
        },
        propertyFees: [],
        reviews: {
          __typename: "PropertyReviewsSummary",
          score: 10,
          total: 1
        },
        star: null,
        supportingMessages: null,
        regionId: "2523",
        priceMetadata: {
          __typename: "PropertyPriceMetadata",
          discountType: "MEMBER_DEAL",
          rateDiscount: {
            __typename: "RateDiscount",
            description: "Private sale: save 10%"
          },
          totalDiscountPercentage: 10
        },
        saveTripItem: null
      },
    ],
    propertySearchListings: [
      {
        __typename: "Property",
        id: "18559048",
        featuredMessages: [],
        name: "Lagos Hotel",
        availability: {
          __typename: "PropertyAvailability",
          available: true,
          minRoomsLeft: null
        },
        propertyImage: {
          __typename: "PropertyImage",
          alt: "",
          fallbackImage: null,
          image: {
            __typename: "Image",
            description: "Primary image",
            url: "https://images.trvl-media.com/hotels/19000000/18560000/18559100/18559048/fd524376.jpg?impolicy=resizecrop&rw=455&ra=fit"
          },
          subjectId: 3
        },
        destinationInfo: {
          __typename: "PropertyDestinationInfo",
          distanceFromDestination: {
            __typename: "Distance",
            unit: "KILOMETER",
            value: 1.3
          },
          distanceFromMessaging: null,
          regionId: "2523"
        },
        legalDisclaimer: null,
        listingFooter: null,
        mapMarker: {
          __typename: "MapMarker",
          label: "$38",
          latLong: {
            __typename: "Coordinates",
            latitude: -1.281998,
            longitude: 36.824847
          }
        },
        neighborhood: {
          __typename: "Region",
          name: "Nairobi"
        },
        offerBadge: {
          __typename: "OfferBadge",
          primary: {
            __typename: "Badge",
            text: "Mobile Exclusive",
            theme_temp: "DEAL_GENERIC",
            icon_temp: {
              __typename: "Icon",
              id: "smartphone",
              description: "smartphone"
            },
            mark: null
          },
          secondary: {
            __typename: "Badge",
            text: "11% off",
            theme_temp: "DEAL_GENERIC",
            icon_temp: {
              __typename: "Icon",
              id: "smartphone",
              description: "smartphone"
            },
            mark: null
          }
        },
        offerSummary: {
          __typename: "OfferSummary",
          messages: [
            {
              __typename: "OfferSummaryMessage",
              message: "Fully refundable",
              theme: "SUCCESS",
              type: "FREE_CANCEL",
              mark: null
            },
            {
              __typename: "OfferSummaryMessage",
              message: "Collect stamps",
              theme: null,
              type: "LOYALTY_EARN",
              mark: {
                __typename: "Mark",
                id: "loyalty",
                token: "mark__loyalty",
                description: "loyalty logo"
              }
            }
          ],
          attributes: [
            {
              __typename: "OfferAttribute",
              type: "FREE_CANCELLATION"
            }
          ]
        },
        pinnedDetails: null,
        price: {
          __typename: "PropertyPrice",
          options: [
            {
              __typename: "PropertyPriceOption",
              strikeOut: {
                __typename: "Money",
                amount: 42.37,
                formatted: "$42"
              },
              disclaimer: {
                __typename: "LodgingPlainMessage",
                value: "Standard rate on our site, provided by the property and based on your search, before all discounts and points."
              },
              formattedDisplayPrice: "$38"
            }
          ],
          priceMessaging: null,
          lead: {
            __typename: "Money",
            amount: 37.71,
            currencyInfo: {
              __typename: "Currency",
              code: "USD",
              symbol: "$"
            },
            formatted: "$38"
          },
          strikeOut: {
            __typename: "Money",
            amount: 42.37,
            currencyInfo: {
              __typename: "Currency",
              code: "USD",
              symbol: "$"
            },
            formatted: "$42"
          },
          displayMessages: [
            {
              __typename: "PriceDisplayMessage",
              lineItems: [
                {
                  __typename: "DisplayPrice",
                  disclaimer: {
                    __typename: "LodgingPlainDialog",
                    content: [
                      "Standard rate on our site, provided by the property and based on your search, before all discounts and points."
                    ],
                    title: null
                  },
                  price: {
                    __typename: "FormattedMoney",
                    formatted: "$42",
                    accessibilityLabel: "The price was $42"
                  },
                  role: "STRIKEOUT"
                },
                {
                  __typename: "DisplayPrice",
                  disclaimer: null,
                  price: {
                    __typename: "FormattedMoney",
                    formatted: "$38",
                    accessibilityLabel: "The price is $38"
                  },
                  role: "LEAD"
                }
              ]
            },
            {
              __typename: "PriceDisplayMessage",
              lineItems: [
                {
                  __typename: "LodgingEnrichedMessage",
                  accessibilityLabel: null,
                  mark: null,
                  state: null,
                  value: "$178 total",
                  badge: null
                }
              ]
            }
          ],
          strikeOutType: "STANDALONE",
          priceMessages: [
            {
              __typename: "LodgingPlainMessage",
              value: "per night"
            }
          ]
        },
        priceAfterLoyaltyPointsApplied: {
          __typename: "PropertyPrice",
          options: [],
          lead: null
        },
        propertyFees: [],
        reviews: {
          __typename: "PropertyReviewsSummary",
          score: 6.4,
          total: 22
        },
        star: null,
        supportingMessages: null,
        regionId: "2523",
        priceMetadata: {
          __typename: "PropertyPriceMetadata",
          discountType: "MOBILE_EXCLUSIVE",
          rateDiscount: {
            __typename: "RateDiscount",
            description: "Mobile exclusive: save 11%"
          },
          totalDiscountPercentage: 11
        },
        saveTripItem: null
      },
    ],
    summary: {
      __typename: "PropertyResultsSummary",
      matchedPropertiesSize: 1341,
      pricingScheme: {
        __typename: "PricingScheme",
        type: "DAILY_RATE"
      },
      regionCompression: null,
      loyaltyInfo: null,
      resultsTitleModel: {
        __typename: "ResultTitleModel",
        header: "1,341 properties"
      },
      resultsSummary: [
        {
          __typename: "LodgingPlainMessage"
        },
        {
          __typename: "LodgingLinkMessage",
          accessibilityLabel: "Opens in a new window",
          value: "See how we pick our recommended properties",
          link: {
            __typename: "LodgingLink",
            clientSideAnalytics: {
              __typename: "ClientSideAnalytics",
              linkName: "Sort disclaimer",
              referrerId: "HOT.HSR.RecommendedSort.FAQlink"
            },
            uri: {
              __typename: "HttpURI",
              value: "https://service.hotels.com/en-me/#/article/20776"
            }
          }
        }
      ]
    },
    searchCriteria: {
      __typename: "SearchCriteria",
      resolvedDateRange: null
    },
    shoppingContext: {
      __typename: "ShoppingContext",
      multiItem: null
    },
    map: {
      __typename: "PropertySearchMap",
      subtitle: null
    },
    clickstream: {
      __typename: "SearchClickstreamEvents",
      searchResultsViewed: null
    }
  }
}
