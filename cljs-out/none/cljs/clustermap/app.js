// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),null,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),null], null));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__10713){var vec__10714 = p__10713;var key_or_path = cljs.core.nth.call(null,vec__10714,0,null);var value_or_fn = cljs.core.nth.call(null,vec__10714,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__10715){var map__10717 = p__10715;var map__10717__$1 = ((cljs.core.seq_QMARK_.call(null,map__10717))?cljs.core.apply.call(null,cljs.core.hash_map,map__10717):map__10717);var path_values = map__10717__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return clustermap.app.new_state.call(null,s,path_values);
}));
};
var set_state = function (var_args){
var p__10715 = null;if (arguments.length > 0) {
  p__10715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__10715);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__10718){
var p__10715 = cljs.core.seq(arglist__10718);
return set_state__delegate(p__10715);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10738){var state_val_10739 = (state_10738[1]);if((state_val_10739 === 2))
{var inst_10735 = (state_10738[2]);var inst_10736 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_10735);var state_10738__$1 = state_10738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10738__$1,inst_10736);
} else
{if((state_val_10739 === 1))
{var inst_10733 = clustermap.api.portfolio_company_stats.call(null);var state_10738__$1 = state_10738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10738__$1,2,inst_10733);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10743 = [null,null,null,null,null,null,null];(statearr_10743[0] = state_machine__5507__auto__);
(statearr_10743[1] = 1);
return statearr_10743;
});
var state_machine__5507__auto____1 = (function (state_10738){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10738);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10744){if((e10744 instanceof Object))
{var ex__5510__auto__ = e10744;var statearr_10745_10747 = state_10738;(statearr_10745_10747[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10738);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10748 = state_10738;
state_10738 = G__10748;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10738){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10746 = f__5522__auto__.call(null);(statearr_10746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10768){var state_val_10769 = (state_10768[1]);if((state_val_10769 === 2))
{var inst_10765 = (state_10768[2]);var inst_10766 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_10765);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10768__$1,inst_10766);
} else
{if((state_val_10769 === 1))
{var inst_10763 = clustermap.api.boundaryline_collections.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10768__$1,2,inst_10763);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10773 = [null,null,null,null,null,null,null];(statearr_10773[0] = state_machine__5507__auto__);
(statearr_10773[1] = 1);
return statearr_10773;
});
var state_machine__5507__auto____1 = (function (state_10768){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10774){if((e10774 instanceof Object))
{var ex__5510__auto__ = e10774;var statearr_10775_10777 = state_10768;(statearr_10775_10777[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10778 = state_10768;
state_10768 = G__10778;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10768){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10776 = f__5522__auto__.call(null);(statearr_10776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__10779,type){var vec__10781 = p__10779;var selection = cljs.core.nth.call(null,vec__10781,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__10781,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__10781,2,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__10781,3,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__10782){var vec__10790 = p__10782;var type = cljs.core.nth.call(null,vec__10790,0,null);var val = cljs.core.nth.call(null,vec__10790,1,null);var id = (function (){var pred__10791 = cljs.core._EQ_;var expr__10792 = type;if(cljs.core.truth_(pred__10791.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10792)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10791.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10792)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10791.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10792)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10792)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__10794 = cljs.core._EQ_;var expr__10795 = type;if(cljs.core.truth_(pred__10794.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10794.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10794.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10795)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
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
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats.call(null);
clustermap.app.load_uk_constituencies.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",comm);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10843){var state_val_10844 = (state_10843[1]);if((state_val_10844 === 7))
{var inst_10832 = (state_10843[2]);var inst_10833 = cljs.core.nth.call(null,inst_10832,0,null);var inst_10834 = cljs.core.nth.call(null,inst_10832,1,null);var inst_10835 = clustermap.app.handle_event.call(null,inst_10833,inst_10834);var state_10843__$1 = (function (){var statearr_10845 = state_10843;(statearr_10845[7] = inst_10835);
return statearr_10845;
})();var statearr_10846_10859 = state_10843__$1;(statearr_10846_10859[2] = null);
(statearr_10846_10859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10844 === 6))
{var inst_10839 = (state_10843[2]);var state_10843__$1 = state_10843;var statearr_10847_10860 = state_10843__$1;(statearr_10847_10860[2] = inst_10839);
(statearr_10847_10860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10844 === 5))
{var state_10843__$1 = state_10843;var statearr_10848_10861 = state_10843__$1;(statearr_10848_10861[2] = null);
(statearr_10848_10861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10844 === 4))
{var state_10843__$1 = state_10843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10843__$1,7,comm);
} else
{if((state_val_10844 === 3))
{var inst_10841 = (state_10843[2]);var state_10843__$1 = state_10843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10843__$1,inst_10841);
} else
{if((state_val_10844 === 2))
{var state_10843__$1 = state_10843;if(true)
{var statearr_10849_10862 = state_10843__$1;(statearr_10849_10862[1] = 4);
} else
{var statearr_10850_10863 = state_10843__$1;(statearr_10850_10863[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10844 === 1))
{var state_10843__$1 = state_10843;var statearr_10851_10864 = state_10843__$1;(statearr_10851_10864[2] = null);
(statearr_10851_10864[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10855 = [null,null,null,null,null,null,null,null];(statearr_10855[0] = state_machine__5507__auto__);
(statearr_10855[1] = 1);
return statearr_10855;
});
var state_machine__5507__auto____1 = (function (state_10843){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10856){if((e10856 instanceof Object))
{var ex__5510__auto__ = e10856;var statearr_10857_10865 = state_10843;(statearr_10857_10865[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10866 = state_10843;
state_10843 = G__10866;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10843){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10858 = f__5522__auto__.call(null);(statearr_10858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=app.js.map