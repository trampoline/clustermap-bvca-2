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
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29705){var state_val_29706 = (state_29705[1]);if((state_val_29706 === 2))
{var inst_29702 = (state_29705[2]);var inst_29703 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_29702);var state_29705__$1 = state_29705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29705__$1,inst_29703);
} else
{if((state_val_29706 === 1))
{var inst_29700 = clustermap.api.portfolio_companies_summary.call(null);var state_29705__$1 = state_29705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29705__$1,2,inst_29700);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29710 = [null,null,null,null,null,null,null];(statearr_29710[0] = state_machine__5507__auto__);
(statearr_29710[1] = 1);
return statearr_29710;
});
var state_machine__5507__auto____1 = (function (state_29705){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29705);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29711){if((e29711 instanceof Object))
{var ex__5510__auto__ = e29711;var statearr_29712_29714 = state_29705;(statearr_29712_29714[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29705);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29715 = state_29705;
state_29705 = G__29715;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29705){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29713 = f__5522__auto__.call(null);(statearr_29713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29735){var state_val_29736 = (state_29735[1]);if((state_val_29736 === 2))
{var inst_29732 = (state_29735[2]);var inst_29733 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_29732);var state_29735__$1 = state_29735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29735__$1,inst_29733);
} else
{if((state_val_29736 === 1))
{var inst_29730 = clustermap.api.investor_companies_summary.call(null);var state_29735__$1 = state_29735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29735__$1,2,inst_29730);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29740 = [null,null,null,null,null,null,null];(statearr_29740[0] = state_machine__5507__auto__);
(statearr_29740[1] = 1);
return statearr_29740;
});
var state_machine__5507__auto____1 = (function (state_29735){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29735);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object))
{var ex__5510__auto__ = e29741;var statearr_29742_29744 = state_29735;(statearr_29742_29744[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29745 = state_29735;
state_29735 = G__29745;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29735){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29743 = f__5522__auto__.call(null);(statearr_29743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29776){var state_val_29777 = (state_29776[1]);if((state_val_29777 === 2))
{var inst_29768 = (state_29776[2]);var inst_29769 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_29768);var inst_29770 = cljs.core.deref.call(null,clustermap.app.state);var inst_29771 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_29770);var inst_29772 = cljs.core.deref.call(null,clustermap.app.state);var inst_29773 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_29772);var inst_29774 = clustermap.map.display_sites.call(null,inst_29771,inst_29773);var state_29776__$1 = (function (){var statearr_29778 = state_29776;(statearr_29778[7] = inst_29769);
return statearr_29778;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29776__$1,inst_29774);
} else
{if((state_val_29777 === 1))
{var inst_29766 = clustermap.api.portfolio_company_sites.call(null);var state_29776__$1 = state_29776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29776__$1,2,inst_29766);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29782 = [null,null,null,null,null,null,null,null];(statearr_29782[0] = state_machine__5507__auto__);
(statearr_29782[1] = 1);
return statearr_29782;
});
var state_machine__5507__auto____1 = (function (state_29776){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29783){if((e29783 instanceof Object))
{var ex__5510__auto__ = e29783;var statearr_29784_29786 = state_29776;(statearr_29784_29786[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29787 = state_29776;
state_29776 = G__29787;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29776){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29785 = f__5522__auto__.call(null);(statearr_29785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(result,type){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),result], null));
});
clustermap.app.make_selection = (function make_selection(p__29788){var vec__29793 = p__29788;var type = cljs.core.nth.call(null,vec__29793,0,null);var val = cljs.core.nth.call(null,vec__29793,1,null);var pred__29794 = cljs.core._EQ__EQ_;var expr__29795 = type;if(cljs.core.truth_(pred__29794.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__29795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__29794.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__29795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__29794.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__29795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,cljs.core.get.call(null,val,"boundaryline_id")),type], null);
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
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29843){var state_val_29844 = (state_29843[1]);if((state_val_29844 === 7))
{var inst_29832 = (state_29843[2]);var inst_29833 = cljs.core.nth.call(null,inst_29832,0,null);var inst_29834 = cljs.core.nth.call(null,inst_29832,1,null);var inst_29835 = clustermap.app.handle_event.call(null,inst_29833,inst_29834);var state_29843__$1 = (function (){var statearr_29845 = state_29843;(statearr_29845[7] = inst_29835);
return statearr_29845;
})();var statearr_29846_29859 = state_29843__$1;(statearr_29846_29859[2] = null);
(statearr_29846_29859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29844 === 6))
{var inst_29839 = (state_29843[2]);var state_29843__$1 = state_29843;var statearr_29847_29860 = state_29843__$1;(statearr_29847_29860[2] = inst_29839);
(statearr_29847_29860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29844 === 5))
{var state_29843__$1 = state_29843;var statearr_29848_29861 = state_29843__$1;(statearr_29848_29861[2] = null);
(statearr_29848_29861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29844 === 4))
{var state_29843__$1 = state_29843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29843__$1,7,comm);
} else
{if((state_val_29844 === 3))
{var inst_29841 = (state_29843[2]);var state_29843__$1 = state_29843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29843__$1,inst_29841);
} else
{if((state_val_29844 === 2))
{var state_29843__$1 = state_29843;if(true)
{var statearr_29849_29862 = state_29843__$1;(statearr_29849_29862[1] = 4);
} else
{var statearr_29850_29863 = state_29843__$1;(statearr_29850_29863[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29844 === 1))
{var state_29843__$1 = state_29843;var statearr_29851_29864 = state_29843__$1;(statearr_29851_29864[2] = null);
(statearr_29851_29864[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_29855 = [null,null,null,null,null,null,null,null];(statearr_29855[0] = state_machine__5507__auto__);
(statearr_29855[1] = 1);
return statearr_29855;
});
var state_machine__5507__auto____1 = (function (state_29843){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object))
{var ex__5510__auto__ = e29856;var statearr_29857_29865 = state_29843;(statearr_29857_29865[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29866 = state_29843;
state_29843 = G__29866;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29858 = f__5522__auto__.call(null);(statearr_29858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29858;
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
