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
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__18159){var map__18161 = p__18159;var map__18161__$1 = ((cljs.core.seq_QMARK_.call(null,map__18161))?cljs.core.apply.call(null,cljs.core.hash_map,map__18161):map__18161);var key_values = map__18161__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.merge.call(null,s,key_values);
}));
};
var set_state = function (var_args){
var p__18159 = null;if (arguments.length > 0) {
  p__18159 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__18159);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__18162){
var p__18159 = cljs.core.seq(arglist__18162);
return set_state__delegate(p__18159);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18182){var state_val_18183 = (state_18182[1]);if((state_val_18183 === 2))
{var inst_18179 = (state_18182[2]);var inst_18180 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_18179);var state_18182__$1 = state_18182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18182__$1,inst_18180);
} else
{if((state_val_18183 === 1))
{var inst_18177 = clustermap.api.portfolio_company_stats.call(null);var state_18182__$1 = state_18182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18182__$1,2,inst_18177);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18187 = [null,null,null,null,null,null,null];(statearr_18187[0] = state_machine__5507__auto__);
(statearr_18187[1] = 1);
return statearr_18187;
});
var state_machine__5507__auto____1 = (function (state_18182){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18188){if((e18188 instanceof Object))
{var ex__5510__auto__ = e18188;var statearr_18189_18191 = state_18182;(statearr_18189_18191[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18192 = state_18182;
state_18182 = G__18192;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18182){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18190 = f__5522__auto__.call(null);(statearr_18190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18212){var state_val_18213 = (state_18212[1]);if((state_val_18213 === 2))
{var inst_18209 = (state_18212[2]);var inst_18210 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_18209);var state_18212__$1 = state_18212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18212__$1,inst_18210);
} else
{if((state_val_18213 === 1))
{var inst_18207 = clustermap.api.boundaryline_collections.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_18212__$1 = state_18212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18212__$1,2,inst_18207);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18217 = [null,null,null,null,null,null,null];(statearr_18217[0] = state_machine__5507__auto__);
(statearr_18217[1] = 1);
return statearr_18217;
});
var state_machine__5507__auto____1 = (function (state_18212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18218){if((e18218 instanceof Object))
{var ex__5510__auto__ = e18218;var statearr_18219_18221 = state_18212;(statearr_18219_18221[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18222 = state_18212;
state_18212 = G__18222;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18220 = f__5522__auto__.call(null);(statearr_18220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__18223,type){var vec__18225 = p__18223;var selection = cljs.core.nth.call(null,vec__18225,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__18225,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__18225,2,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__18226){var vec__18234 = p__18226;var type = cljs.core.nth.call(null,vec__18234,0,null);var val = cljs.core.nth.call(null,vec__18234,1,null);var id = (function (){var pred__18235 = cljs.core._EQ_;var expr__18236 = type;if(cljs.core.truth_(pred__18235.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__18236)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__18235.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__18236)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__18235.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__18236)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18236)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__18238 = cljs.core._EQ_;var expr__18239 = type;if(cljs.core.truth_(pred__18238.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__18239)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__18238.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__18239)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__18238.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__18239)))
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
clustermap.app.load_uk_constituencies.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18287){var state_val_18288 = (state_18287[1]);if((state_val_18288 === 7))
{var inst_18276 = (state_18287[2]);var inst_18277 = cljs.core.nth.call(null,inst_18276,0,null);var inst_18278 = cljs.core.nth.call(null,inst_18276,1,null);var inst_18279 = clustermap.app.handle_event.call(null,inst_18277,inst_18278);var state_18287__$1 = (function (){var statearr_18289 = state_18287;(statearr_18289[7] = inst_18279);
return statearr_18289;
})();var statearr_18290_18303 = state_18287__$1;(statearr_18290_18303[2] = null);
(statearr_18290_18303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18288 === 6))
{var inst_18283 = (state_18287[2]);var state_18287__$1 = state_18287;var statearr_18291_18304 = state_18287__$1;(statearr_18291_18304[2] = inst_18283);
(statearr_18291_18304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18288 === 5))
{var state_18287__$1 = state_18287;var statearr_18292_18305 = state_18287__$1;(statearr_18292_18305[2] = null);
(statearr_18292_18305[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18288 === 4))
{var state_18287__$1 = state_18287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18287__$1,7,comm);
} else
{if((state_val_18288 === 3))
{var inst_18285 = (state_18287[2]);var state_18287__$1 = state_18287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18287__$1,inst_18285);
} else
{if((state_val_18288 === 2))
{var state_18287__$1 = state_18287;if(true)
{var statearr_18293_18306 = state_18287__$1;(statearr_18293_18306[1] = 4);
} else
{var statearr_18294_18307 = state_18287__$1;(statearr_18294_18307[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18288 === 1))
{var state_18287__$1 = state_18287;var statearr_18295_18308 = state_18287__$1;(statearr_18295_18308[2] = null);
(statearr_18295_18308[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18299 = [null,null,null,null,null,null,null,null];(statearr_18299[0] = state_machine__5507__auto__);
(statearr_18299[1] = 1);
return statearr_18299;
});
var state_machine__5507__auto____1 = (function (state_18287){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18287);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18300){if((e18300 instanceof Object))
{var ex__5510__auto__ = e18300;var statearr_18301_18309 = state_18287;(statearr_18301_18309[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18310 = state_18287;
state_18287 = G__18310;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18287){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18302 = f__5522__auto__.call(null);(statearr_18302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18302;
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