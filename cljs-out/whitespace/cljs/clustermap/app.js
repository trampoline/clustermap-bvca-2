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
var set_state__delegate = function (p__10815){var map__10817 = p__10815;var map__10817__$1 = ((cljs.core.seq_QMARK_.call(null,map__10817))?cljs.core.apply.call(null,cljs.core.hash_map,map__10817):map__10817);var key_values = map__10817__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.merge.call(null,s,key_values);
}));
};
var set_state = function (var_args){
var p__10815 = null;if (arguments.length > 0) {
  p__10815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__10815);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__10818){
var p__10815 = cljs.core.seq(arglist__10818);
return set_state__delegate(p__10815);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10838){var state_val_10839 = (state_10838[1]);if((state_val_10839 === 2))
{var inst_10835 = (state_10838[2]);var inst_10836 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_10835);var state_10838__$1 = state_10838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10838__$1,inst_10836);
} else
{if((state_val_10839 === 1))
{var inst_10833 = clustermap.api.portfolio_company_stats.call(null);var state_10838__$1 = state_10838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10838__$1,2,inst_10833);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10843 = [null,null,null,null,null,null,null];(statearr_10843[0] = state_machine__5507__auto__);
(statearr_10843[1] = 1);
return statearr_10843;
});
var state_machine__5507__auto____1 = (function (state_10838){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10838);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10844){if((e10844 instanceof Object))
{var ex__5510__auto__ = e10844;var statearr_10845_10847 = state_10838;(statearr_10845_10847[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10848 = state_10838;
state_10838 = G__10848;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10838){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10846 = f__5522__auto__.call(null);(statearr_10846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__10849,type){var vec__10851 = p__10849;var selection = cljs.core.nth.call(null,vec__10851,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__10851,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__10851,2,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__10852){var vec__10860 = p__10852;var type = cljs.core.nth.call(null,vec__10860,0,null);var val = cljs.core.nth.call(null,vec__10860,1,null);var id = (function (){var pred__10861 = cljs.core._EQ_;var expr__10862 = type;if(cljs.core.truth_(pred__10861.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10862)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10861.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10862)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__10861.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10862)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10862)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__10864 = cljs.core._EQ_;var expr__10865 = type;if(cljs.core.truth_(pred__10864.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10865)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10864.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10865)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__10864.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10865)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10913){var state_val_10914 = (state_10913[1]);if((state_val_10914 === 7))
{var inst_10902 = (state_10913[2]);var inst_10903 = cljs.core.nth.call(null,inst_10902,0,null);var inst_10904 = cljs.core.nth.call(null,inst_10902,1,null);var inst_10905 = clustermap.app.handle_event.call(null,inst_10903,inst_10904);var state_10913__$1 = (function (){var statearr_10915 = state_10913;(statearr_10915[7] = inst_10905);
return statearr_10915;
})();var statearr_10916_10929 = state_10913__$1;(statearr_10916_10929[2] = null);
(statearr_10916_10929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10914 === 6))
{var inst_10909 = (state_10913[2]);var state_10913__$1 = state_10913;var statearr_10917_10930 = state_10913__$1;(statearr_10917_10930[2] = inst_10909);
(statearr_10917_10930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10914 === 5))
{var state_10913__$1 = state_10913;var statearr_10918_10931 = state_10913__$1;(statearr_10918_10931[2] = null);
(statearr_10918_10931[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10914 === 4))
{var state_10913__$1 = state_10913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10913__$1,7,comm);
} else
{if((state_val_10914 === 3))
{var inst_10911 = (state_10913[2]);var state_10913__$1 = state_10913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10913__$1,inst_10911);
} else
{if((state_val_10914 === 2))
{var state_10913__$1 = state_10913;if(true)
{var statearr_10919_10932 = state_10913__$1;(statearr_10919_10932[1] = 4);
} else
{var statearr_10920_10933 = state_10913__$1;(statearr_10920_10933[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10914 === 1))
{var state_10913__$1 = state_10913;var statearr_10921_10934 = state_10913__$1;(statearr_10921_10934[2] = null);
(statearr_10921_10934[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10925 = [null,null,null,null,null,null,null,null];(statearr_10925[0] = state_machine__5507__auto__);
(statearr_10925[1] = 1);
return statearr_10925;
});
var state_machine__5507__auto____1 = (function (state_10913){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10926){if((e10926 instanceof Object))
{var ex__5510__auto__ = e10926;var statearr_10927_10935 = state_10913;(statearr_10927_10935[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10936 = state_10913;
state_10913 = G__10936;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10913){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10928 = f__5522__auto__.call(null);(statearr_10928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10928;
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
