// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10795){var state_val_10796 = (state_10795[1]);if((state_val_10796 === 2))
{var inst_10792 = (state_10795[2]);var inst_10793 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_10792);var state_10795__$1 = state_10795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10795__$1,inst_10793);
} else
{if((state_val_10796 === 1))
{var inst_10790 = clustermap.api.portfolio_company_stats.call(null);var state_10795__$1 = state_10795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10795__$1,2,inst_10790);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10800 = [null,null,null,null,null,null,null];(statearr_10800[0] = state_machine__5507__auto__);
(statearr_10800[1] = 1);
return statearr_10800;
});
var state_machine__5507__auto____1 = (function (state_10795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10801){if((e10801 instanceof Object))
{var ex__5510__auto__ = e10801;var statearr_10802_10804 = state_10795;(statearr_10802_10804[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10805 = state_10795;
state_10795 = G__10805;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10803 = f__5522__auto__.call(null);(statearr_10803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__10806,type){var vec__10808 = p__10806;var selection = cljs.core.nth.call(null,vec__10808,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__10808,1,null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null));
return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__10809){var vec__10817 = p__10809;var type = cljs.core.nth.call(null,vec__10817,0,null);var val = cljs.core.nth.call(null,vec__10817,1,null);var id = (function (){var pred__10818 = cljs.core._EQ_;var expr__10819 = type;if(cljs.core.truth_(pred__10818.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10819)))
{return cljs.core.get.call(null,val,"company_no");
} else
{if(cljs.core.truth_(pred__10818.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10819)))
{return cljs.core.get.call(null,val,"name");
} else
{if(cljs.core.truth_(pred__10818.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10819)))
{return cljs.core.get.call(null,val,"boundaryline_id");
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10819)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__10821 = cljs.core._EQ_;var expr__10822 = type;if(cljs.core.truth_(pred__10821.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10822)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10821.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10822)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10821.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10822)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_company_stats.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10870){var state_val_10871 = (state_10870[1]);if((state_val_10871 === 7))
{var inst_10859 = (state_10870[2]);var inst_10860 = cljs.core.nth.call(null,inst_10859,0,null);var inst_10861 = cljs.core.nth.call(null,inst_10859,1,null);var inst_10862 = clustermap.app.handle_event.call(null,inst_10860,inst_10861);var state_10870__$1 = (function (){var statearr_10872 = state_10870;(statearr_10872[7] = inst_10862);
return statearr_10872;
})();var statearr_10873_10886 = state_10870__$1;(statearr_10873_10886[2] = null);
(statearr_10873_10886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10871 === 6))
{var inst_10866 = (state_10870[2]);var state_10870__$1 = state_10870;var statearr_10874_10887 = state_10870__$1;(statearr_10874_10887[2] = inst_10866);
(statearr_10874_10887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10871 === 5))
{var state_10870__$1 = state_10870;var statearr_10875_10888 = state_10870__$1;(statearr_10875_10888[2] = null);
(statearr_10875_10888[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10871 === 4))
{var state_10870__$1 = state_10870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10870__$1,7,comm);
} else
{if((state_val_10871 === 3))
{var inst_10868 = (state_10870[2]);var state_10870__$1 = state_10870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10870__$1,inst_10868);
} else
{if((state_val_10871 === 2))
{var state_10870__$1 = state_10870;if(true)
{var statearr_10876_10889 = state_10870__$1;(statearr_10876_10889[1] = 4);
} else
{var statearr_10877_10890 = state_10870__$1;(statearr_10877_10890[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10871 === 1))
{var state_10870__$1 = state_10870;var statearr_10878_10891 = state_10870__$1;(statearr_10878_10891[2] = null);
(statearr_10878_10891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10882 = [null,null,null,null,null,null,null,null];(statearr_10882[0] = state_machine__5507__auto__);
(statearr_10882[1] = 1);
return statearr_10882;
});
var state_machine__5507__auto____1 = (function (state_10870){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10870);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10883){if((e10883 instanceof Object))
{var ex__5510__auto__ = e10883;var statearr_10884_10892 = state_10870;(statearr_10884_10892[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10893 = state_10870;
state_10870 = G__10893;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10870){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10885 = f__5522__auto__.call(null);(statearr_10885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init.call(null);
} else
{return null;
}
}
});

//# sourceMappingURL=app.js.map