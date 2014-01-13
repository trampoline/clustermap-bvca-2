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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10517){var state_val_10518 = (state_10517[1]);if((state_val_10518 === 2))
{var inst_10514 = (state_10517[2]);var inst_10515 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10514);var state_10517__$1 = state_10517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10517__$1,inst_10515);
} else
{if((state_val_10518 === 1))
{var inst_10512 = clustermap.api.all_portfolio_companies_summary.call(null);var state_10517__$1 = state_10517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10517__$1,2,inst_10512);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10522 = [null,null,null,null,null,null,null];(statearr_10522[0] = state_machine__5507__auto__);
(statearr_10522[1] = 1);
return statearr_10522;
});
var state_machine__5507__auto____1 = (function (state_10517){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10517);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10523){if((e10523 instanceof Object))
{var ex__5510__auto__ = e10523;var statearr_10524_10526 = state_10517;(statearr_10524_10526[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10527 = state_10517;
state_10517 = G__10527;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10517){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10525 = f__5522__auto__.call(null);(statearr_10525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10547){var state_val_10548 = (state_10547[1]);if((state_val_10548 === 2))
{var inst_10544 = (state_10547[2]);var inst_10545 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10544);var state_10547__$1 = state_10547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10547__$1,inst_10545);
} else
{if((state_val_10548 === 1))
{var inst_10542 = clustermap.api.all_investor_companies_summary.call(null);var state_10547__$1 = state_10547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10547__$1,2,inst_10542);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10552 = [null,null,null,null,null,null,null];(statearr_10552[0] = state_machine__5507__auto__);
(statearr_10552[1] = 1);
return statearr_10552;
});
var state_machine__5507__auto____1 = (function (state_10547){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10553){if((e10553 instanceof Object))
{var ex__5510__auto__ = e10553;var statearr_10554_10556 = state_10547;(statearr_10554_10556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10557 = state_10547;
state_10547 = G__10557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10547){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10555 = f__5522__auto__.call(null);(statearr_10555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10588){var state_val_10589 = (state_10588[1]);if((state_val_10589 === 2))
{var inst_10580 = (state_10588[2]);var inst_10581 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10580);var inst_10582 = cljs.core.deref.call(null,clustermap.app.state);var inst_10583 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10582);var inst_10584 = cljs.core.deref.call(null,clustermap.app.state);var inst_10585 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10584);var inst_10586 = clustermap.map.display_sites.call(null,inst_10583,inst_10585);var state_10588__$1 = (function (){var statearr_10590 = state_10588;(statearr_10590[7] = inst_10581);
return statearr_10590;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10588__$1,inst_10586);
} else
{if((state_val_10589 === 1))
{var inst_10578 = clustermap.api.all_portfolio_company_sites.call(null);var state_10588__$1 = state_10588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10588__$1,2,inst_10578);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10594 = [null,null,null,null,null,null,null,null];(statearr_10594[0] = state_machine__5507__auto__);
(statearr_10594[1] = 1);
return statearr_10594;
});
var state_machine__5507__auto____1 = (function (state_10588){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10588);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10595){if((e10595 instanceof Object))
{var ex__5510__auto__ = e10595;var statearr_10596_10598 = state_10588;(statearr_10596_10598[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10599 = state_10588;
state_10588 = G__10599;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10588){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10597 = f__5522__auto__.call(null);(statearr_10597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10597;
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
clustermap.app.make_selection = (function make_selection(p__10600){var vec__10605 = p__10600;var type = cljs.core.nth.call(null,vec__10605,0,null);var val = cljs.core.nth.call(null,vec__10605,1,null);console.log(cljs.core.clj__GT_js.call(null,val));
var pred__10606 = cljs.core._EQ__EQ_;var expr__10607 = type;if(cljs.core.truth_(pred__10606.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10607)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company_detail.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__10606.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10607)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company_detail.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__10606.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10607)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10655){var state_val_10656 = (state_10655[1]);if((state_val_10656 === 7))
{var inst_10644 = (state_10655[2]);var inst_10645 = cljs.core.nth.call(null,inst_10644,0,null);var inst_10646 = cljs.core.nth.call(null,inst_10644,1,null);var inst_10647 = clustermap.app.handle_event.call(null,inst_10645,inst_10646);var state_10655__$1 = (function (){var statearr_10657 = state_10655;(statearr_10657[7] = inst_10647);
return statearr_10657;
})();var statearr_10658_10671 = state_10655__$1;(statearr_10658_10671[2] = null);
(statearr_10658_10671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10656 === 6))
{var inst_10651 = (state_10655[2]);var state_10655__$1 = state_10655;var statearr_10659_10672 = state_10655__$1;(statearr_10659_10672[2] = inst_10651);
(statearr_10659_10672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10656 === 5))
{var state_10655__$1 = state_10655;var statearr_10660_10673 = state_10655__$1;(statearr_10660_10673[2] = null);
(statearr_10660_10673[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10656 === 4))
{var state_10655__$1 = state_10655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10655__$1,7,comm);
} else
{if((state_val_10656 === 3))
{var inst_10653 = (state_10655[2]);var state_10655__$1 = state_10655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10655__$1,inst_10653);
} else
{if((state_val_10656 === 2))
{var state_10655__$1 = state_10655;if(true)
{var statearr_10661_10674 = state_10655__$1;(statearr_10661_10674[1] = 4);
} else
{var statearr_10662_10675 = state_10655__$1;(statearr_10662_10675[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10656 === 1))
{var state_10655__$1 = state_10655;var statearr_10663_10676 = state_10655__$1;(statearr_10663_10676[2] = null);
(statearr_10663_10676[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10667 = [null,null,null,null,null,null,null,null];(statearr_10667[0] = state_machine__5507__auto__);
(statearr_10667[1] = 1);
return statearr_10667;
});
var state_machine__5507__auto____1 = (function (state_10655){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10655);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10668){if((e10668 instanceof Object))
{var ex__5510__auto__ = e10668;var statearr_10669_10677 = state_10655;(statearr_10669_10677[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10678 = state_10655;
state_10655 = G__10678;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10655){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10670 = f__5522__auto__.call(null);(statearr_10670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10670;
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