// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28795){var state_val_28796 = (state_28795[1]);if((state_val_28796 === 2))
{var inst_28792 = (state_28795[2]);var inst_28793 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_28792);var state_28795__$1 = state_28795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28795__$1,inst_28793);
} else
{if((state_val_28796 === 1))
{var inst_28790 = clustermap.api.all_portfolio_companies_summary.call(null);var state_28795__$1 = state_28795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,2,inst_28790);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28800 = [null,null,null,null,null,null,null];(statearr_28800[0] = state_machine__5507__auto__);
(statearr_28800[1] = 1);
return statearr_28800;
});
var state_machine__5507__auto____1 = (function (state_28795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28801){if((e28801 instanceof Object))
{var ex__5510__auto__ = e28801;var statearr_28802_28804 = state_28795;(statearr_28802_28804[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28805 = state_28795;
state_28795 = G__28805;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28803 = f__5522__auto__.call(null);(statearr_28803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28825){var state_val_28826 = (state_28825[1]);if((state_val_28826 === 2))
{var inst_28822 = (state_28825[2]);var inst_28823 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_28822);var state_28825__$1 = state_28825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28825__$1,inst_28823);
} else
{if((state_val_28826 === 1))
{var inst_28820 = clustermap.api.all_investor_companies_summary.call(null);var state_28825__$1 = state_28825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28825__$1,2,inst_28820);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28830 = [null,null,null,null,null,null,null];(statearr_28830[0] = state_machine__5507__auto__);
(statearr_28830[1] = 1);
return statearr_28830;
});
var state_machine__5507__auto____1 = (function (state_28825){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28825);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28831){if((e28831 instanceof Object))
{var ex__5510__auto__ = e28831;var statearr_28832_28834 = state_28825;(statearr_28832_28834[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28835 = state_28825;
state_28825 = G__28835;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28825){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28833 = f__5522__auto__.call(null);(statearr_28833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28866){var state_val_28867 = (state_28866[1]);if((state_val_28867 === 2))
{var inst_28858 = (state_28866[2]);var inst_28859 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_28858);var inst_28860 = cljs.core.deref.call(null,clustermap.app.state);var inst_28861 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_28860);var inst_28862 = cljs.core.deref.call(null,clustermap.app.state);var inst_28863 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_28862);var inst_28864 = clustermap.map.display_sites.call(null,inst_28861,inst_28863);var state_28866__$1 = (function (){var statearr_28868 = state_28866;(statearr_28868[7] = inst_28859);
return statearr_28868;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28866__$1,inst_28864);
} else
{if((state_val_28867 === 1))
{var inst_28856 = clustermap.api.all_portfolio_company_sites.call(null);var state_28866__$1 = state_28866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28866__$1,2,inst_28856);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28872 = [null,null,null,null,null,null,null,null];(statearr_28872[0] = state_machine__5507__auto__);
(statearr_28872[1] = 1);
return statearr_28872;
});
var state_machine__5507__auto____1 = (function (state_28866){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28873){if((e28873 instanceof Object))
{var ex__5510__auto__ = e28873;var statearr_28874_28876 = state_28866;(statearr_28874_28876[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28877 = state_28866;
state_28866 = G__28877;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28866){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28875 = f__5522__auto__.call(null);(statearr_28875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(result,type){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,type], null)));
return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),result], null));
});
clustermap.app.make_selection = (function make_selection(p__28878){var vec__28883 = p__28878;var type = cljs.core.nth.call(null,vec__28883,0,null);var val = cljs.core.nth.call(null,vec__28883,1,null);console.log(cljs.core.clj__GT_js.call(null,val));
var pred__28884 = cljs.core._EQ__EQ_;var expr__28885 = type;if(cljs.core.truth_(pred__28884.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__28885)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company_detail.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__28884.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__28885)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company_detail.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__28884.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__28885)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency_detail.call(null,cljs.core.get.call(null,val,"boundaryline_id")),type], null);
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
var comm = cljs.core.async.chan.call(null);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28933){var state_val_28934 = (state_28933[1]);if((state_val_28934 === 7))
{var inst_28922 = (state_28933[2]);var inst_28923 = cljs.core.nth.call(null,inst_28922,0,null);var inst_28924 = cljs.core.nth.call(null,inst_28922,1,null);var inst_28925 = clustermap.app.handle_event.call(null,inst_28923,inst_28924);var state_28933__$1 = (function (){var statearr_28935 = state_28933;(statearr_28935[7] = inst_28925);
return statearr_28935;
})();var statearr_28936_28949 = state_28933__$1;(statearr_28936_28949[2] = null);
(statearr_28936_28949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28934 === 6))
{var inst_28929 = (state_28933[2]);var state_28933__$1 = state_28933;var statearr_28937_28950 = state_28933__$1;(statearr_28937_28950[2] = inst_28929);
(statearr_28937_28950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28934 === 5))
{var state_28933__$1 = state_28933;var statearr_28938_28951 = state_28933__$1;(statearr_28938_28951[2] = null);
(statearr_28938_28951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28934 === 4))
{var state_28933__$1 = state_28933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28933__$1,7,comm);
} else
{if((state_val_28934 === 3))
{var inst_28931 = (state_28933[2]);var state_28933__$1 = state_28933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28933__$1,inst_28931);
} else
{if((state_val_28934 === 2))
{var state_28933__$1 = state_28933;if(true)
{var statearr_28939_28952 = state_28933__$1;(statearr_28939_28952[1] = 4);
} else
{var statearr_28940_28953 = state_28933__$1;(statearr_28940_28953[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28934 === 1))
{var state_28933__$1 = state_28933;var statearr_28941_28954 = state_28933__$1;(statearr_28941_28954[2] = null);
(statearr_28941_28954[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28945 = [null,null,null,null,null,null,null,null];(statearr_28945[0] = state_machine__5507__auto__);
(statearr_28945[1] = 1);
return statearr_28945;
});
var state_machine__5507__auto____1 = (function (state_28933){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28946){if((e28946 instanceof Object))
{var ex__5510__auto__ = e28946;var statearr_28947_28955 = state_28933;(statearr_28947_28955[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28956 = state_28933;
state_28933 = G__28956;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28933){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28948 = f__5522__auto__.call(null);(statearr_28948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28948;
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
