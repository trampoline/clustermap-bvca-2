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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16148){var state_val_16149 = (state_16148[1]);if((state_val_16149 === 2))
{var inst_16145 = (state_16148[2]);var inst_16146 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_16145);var state_16148__$1 = state_16148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16148__$1,inst_16146);
} else
{if((state_val_16149 === 1))
{var inst_16143 = clustermap.api.all_portfolio_companies_summary.call(null);var state_16148__$1 = state_16148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16148__$1,2,inst_16143);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16153 = [null,null,null,null,null,null,null];(statearr_16153[0] = state_machine__5507__auto__);
(statearr_16153[1] = 1);
return statearr_16153;
});
var state_machine__5507__auto____1 = (function (state_16148){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16154){if((e16154 instanceof Object))
{var ex__5510__auto__ = e16154;var statearr_16155_16157 = state_16148;(statearr_16155_16157[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16158 = state_16148;
state_16148 = G__16158;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16156 = f__5522__auto__.call(null);(statearr_16156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16178){var state_val_16179 = (state_16178[1]);if((state_val_16179 === 2))
{var inst_16175 = (state_16178[2]);var inst_16176 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_16175);var state_16178__$1 = state_16178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16178__$1,inst_16176);
} else
{if((state_val_16179 === 1))
{var inst_16173 = clustermap.api.all_investor_companies_summary.call(null);var state_16178__$1 = state_16178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16178__$1,2,inst_16173);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16183 = [null,null,null,null,null,null,null];(statearr_16183[0] = state_machine__5507__auto__);
(statearr_16183[1] = 1);
return statearr_16183;
});
var state_machine__5507__auto____1 = (function (state_16178){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16184){if((e16184 instanceof Object))
{var ex__5510__auto__ = e16184;var statearr_16185_16187 = state_16178;(statearr_16185_16187[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16188 = state_16178;
state_16178 = G__16188;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16178){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16186 = f__5522__auto__.call(null);(statearr_16186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16219){var state_val_16220 = (state_16219[1]);if((state_val_16220 === 2))
{var inst_16211 = (state_16219[2]);var inst_16212 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_16211);var inst_16213 = cljs.core.deref.call(null,clustermap.app.state);var inst_16214 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_16213);var inst_16215 = cljs.core.deref.call(null,clustermap.app.state);var inst_16216 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_16215);var inst_16217 = clustermap.map.display_sites.call(null,inst_16214,inst_16216);var state_16219__$1 = (function (){var statearr_16221 = state_16219;(statearr_16221[7] = inst_16212);
return statearr_16221;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16219__$1,inst_16217);
} else
{if((state_val_16220 === 1))
{var inst_16209 = clustermap.api.all_portfolio_company_sites.call(null);var state_16219__$1 = state_16219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16219__$1,2,inst_16209);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16225 = [null,null,null,null,null,null,null,null];(statearr_16225[0] = state_machine__5507__auto__);
(statearr_16225[1] = 1);
return statearr_16225;
});
var state_machine__5507__auto____1 = (function (state_16219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16226){if((e16226 instanceof Object))
{var ex__5510__auto__ = e16226;var statearr_16227_16229 = state_16219;(statearr_16227_16229[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16230 = state_16219;
state_16219 = G__16230;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16228 = f__5522__auto__.call(null);(statearr_16228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16228;
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
clustermap.app.make_selection = (function make_selection(p__16231){var vec__16236 = p__16231;var type = cljs.core.nth.call(null,vec__16236,0,null);var val = cljs.core.nth.call(null,vec__16236,1,null);var pred__16237 = cljs.core._EQ__EQ_;var expr__16238 = type;if(cljs.core.truth_(pred__16237.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__16238)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company_detail.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__16237.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__16238)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company_detail.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__16237.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__16238)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16286){var state_val_16287 = (state_16286[1]);if((state_val_16287 === 7))
{var inst_16275 = (state_16286[2]);var inst_16276 = cljs.core.nth.call(null,inst_16275,0,null);var inst_16277 = cljs.core.nth.call(null,inst_16275,1,null);var inst_16278 = clustermap.app.handle_event.call(null,inst_16276,inst_16277);var state_16286__$1 = (function (){var statearr_16288 = state_16286;(statearr_16288[7] = inst_16278);
return statearr_16288;
})();var statearr_16289_16302 = state_16286__$1;(statearr_16289_16302[2] = null);
(statearr_16289_16302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16287 === 6))
{var inst_16282 = (state_16286[2]);var state_16286__$1 = state_16286;var statearr_16290_16303 = state_16286__$1;(statearr_16290_16303[2] = inst_16282);
(statearr_16290_16303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16287 === 5))
{var state_16286__$1 = state_16286;var statearr_16291_16304 = state_16286__$1;(statearr_16291_16304[2] = null);
(statearr_16291_16304[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16287 === 4))
{var state_16286__$1 = state_16286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16286__$1,7,comm);
} else
{if((state_val_16287 === 3))
{var inst_16284 = (state_16286[2]);var state_16286__$1 = state_16286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16286__$1,inst_16284);
} else
{if((state_val_16287 === 2))
{var state_16286__$1 = state_16286;if(true)
{var statearr_16292_16305 = state_16286__$1;(statearr_16292_16305[1] = 4);
} else
{var statearr_16293_16306 = state_16286__$1;(statearr_16293_16306[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16287 === 1))
{var state_16286__$1 = state_16286;var statearr_16294_16307 = state_16286__$1;(statearr_16294_16307[2] = null);
(statearr_16294_16307[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16298 = [null,null,null,null,null,null,null,null];(statearr_16298[0] = state_machine__5507__auto__);
(statearr_16298[1] = 1);
return statearr_16298;
});
var state_machine__5507__auto____1 = (function (state_16286){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16286);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16299){if((e16299 instanceof Object))
{var ex__5510__auto__ = e16299;var statearr_16300_16308 = state_16286;(statearr_16300_16308[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16286);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16309 = state_16286;
state_16286 = G__16309;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16286){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16301 = f__5522__auto__.call(null);(statearr_16301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16301;
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