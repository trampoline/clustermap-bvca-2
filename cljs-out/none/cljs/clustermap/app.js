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
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__10809){var map__10811 = p__10809;var map__10811__$1 = ((cljs.core.seq_QMARK_.call(null,map__10811))?cljs.core.apply.call(null,cljs.core.hash_map,map__10811):map__10811);var key_values = map__10811__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.merge.call(null,s,key_values);
}));
};
var set_state = function (var_args){
var p__10809 = null;if (arguments.length > 0) {
  p__10809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__10809);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__10812){
var p__10809 = cljs.core.seq(arglist__10812);
return set_state__delegate(p__10809);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10832){var state_val_10833 = (state_10832[1]);if((state_val_10833 === 2))
{var inst_10829 = (state_10832[2]);var inst_10830 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_10829);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10832__$1,inst_10830);
} else
{if((state_val_10833 === 1))
{var inst_10827 = clustermap.api.portfolio_company_stats.call(null);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10832__$1,2,inst_10827);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10837 = [null,null,null,null,null,null,null];(statearr_10837[0] = state_machine__5507__auto__);
(statearr_10837[1] = 1);
return statearr_10837;
});
var state_machine__5507__auto____1 = (function (state_10832){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10838){if((e10838 instanceof Object))
{var ex__5510__auto__ = e10838;var statearr_10839_10841 = state_10832;(statearr_10839_10841[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10842 = state_10832;
state_10832 = G__10842;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10832){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10840 = f__5522__auto__.call(null);(statearr_10840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__10843,type){var vec__10845 = p__10843;var selection = cljs.core.nth.call(null,vec__10845,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__10845,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__10845,2,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__10846){var vec__10854 = p__10846;var type = cljs.core.nth.call(null,vec__10854,0,null);var val = cljs.core.nth.call(null,vec__10854,1,null);var id = (function (){var pred__10855 = cljs.core._EQ_;var expr__10856 = type;if(cljs.core.truth_(pred__10855.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10856)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10855.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10856)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10855.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10856)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10856)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__10858 = cljs.core._EQ_;var expr__10859 = type;if(cljs.core.truth_(pred__10858.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10859)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10858.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10859)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10858.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10859)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10907){var state_val_10908 = (state_10907[1]);if((state_val_10908 === 7))
{var inst_10896 = (state_10907[2]);var inst_10897 = cljs.core.nth.call(null,inst_10896,0,null);var inst_10898 = cljs.core.nth.call(null,inst_10896,1,null);var inst_10899 = clustermap.app.handle_event.call(null,inst_10897,inst_10898);var state_10907__$1 = (function (){var statearr_10909 = state_10907;(statearr_10909[7] = inst_10899);
return statearr_10909;
})();var statearr_10910_10923 = state_10907__$1;(statearr_10910_10923[2] = null);
(statearr_10910_10923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10908 === 6))
{var inst_10903 = (state_10907[2]);var state_10907__$1 = state_10907;var statearr_10911_10924 = state_10907__$1;(statearr_10911_10924[2] = inst_10903);
(statearr_10911_10924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10908 === 5))
{var state_10907__$1 = state_10907;var statearr_10912_10925 = state_10907__$1;(statearr_10912_10925[2] = null);
(statearr_10912_10925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10908 === 4))
{var state_10907__$1 = state_10907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10907__$1,7,comm);
} else
{if((state_val_10908 === 3))
{var inst_10905 = (state_10907[2]);var state_10907__$1 = state_10907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10907__$1,inst_10905);
} else
{if((state_val_10908 === 2))
{var state_10907__$1 = state_10907;if(true)
{var statearr_10913_10926 = state_10907__$1;(statearr_10913_10926[1] = 4);
} else
{var statearr_10914_10927 = state_10907__$1;(statearr_10914_10927[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10908 === 1))
{var state_10907__$1 = state_10907;var statearr_10915_10928 = state_10907__$1;(statearr_10915_10928[2] = null);
(statearr_10915_10928[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10919 = [null,null,null,null,null,null,null,null];(statearr_10919[0] = state_machine__5507__auto__);
(statearr_10919[1] = 1);
return statearr_10919;
});
var state_machine__5507__auto____1 = (function (state_10907){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10920){if((e10920 instanceof Object))
{var ex__5510__auto__ = e10920;var statearr_10921_10929 = state_10907;(statearr_10921_10929[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10930 = state_10907;
state_10907 = G__10930;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10907){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10922 = f__5522__auto__.call(null);(statearr_10922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10922;
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