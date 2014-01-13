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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20547){var state_val_20548 = (state_20547[1]);if((state_val_20548 === 2))
{var inst_20544 = (state_20547[2]);var inst_20545 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_20544);var state_20547__$1 = state_20547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20547__$1,inst_20545);
} else
{if((state_val_20548 === 1))
{var inst_20542 = clustermap.api.all_portfolio_companies_summary.call(null);var state_20547__$1 = state_20547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20547__$1,2,inst_20542);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20552 = [null,null,null,null,null,null,null];(statearr_20552[0] = state_machine__5507__auto__);
(statearr_20552[1] = 1);
return statearr_20552;
});
var state_machine__5507__auto____1 = (function (state_20547){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20553){if((e20553 instanceof Object))
{var ex__5510__auto__ = e20553;var statearr_20554_20556 = state_20547;(statearr_20554_20556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20557 = state_20547;
state_20547 = G__20557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20547){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20555 = f__5522__auto__.call(null);(statearr_20555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20577){var state_val_20578 = (state_20577[1]);if((state_val_20578 === 2))
{var inst_20574 = (state_20577[2]);var inst_20575 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_20574);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20577__$1,inst_20575);
} else
{if((state_val_20578 === 1))
{var inst_20572 = clustermap.api.all_investor_companies_summary.call(null);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20577__$1,2,inst_20572);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20582 = [null,null,null,null,null,null,null];(statearr_20582[0] = state_machine__5507__auto__);
(statearr_20582[1] = 1);
return statearr_20582;
});
var state_machine__5507__auto____1 = (function (state_20577){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20583){if((e20583 instanceof Object))
{var ex__5510__auto__ = e20583;var statearr_20584_20586 = state_20577;(statearr_20584_20586[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20587 = state_20577;
state_20577 = G__20587;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20577){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20585 = f__5522__auto__.call(null);(statearr_20585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20618){var state_val_20619 = (state_20618[1]);if((state_val_20619 === 2))
{var inst_20610 = (state_20618[2]);var inst_20611 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_20610);var inst_20612 = cljs.core.deref.call(null,clustermap.app.state);var inst_20613 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_20612);var inst_20614 = cljs.core.deref.call(null,clustermap.app.state);var inst_20615 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_20614);var inst_20616 = clustermap.map.display_sites.call(null,inst_20613,inst_20615);var state_20618__$1 = (function (){var statearr_20620 = state_20618;(statearr_20620[7] = inst_20611);
return statearr_20620;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20618__$1,inst_20616);
} else
{if((state_val_20619 === 1))
{var inst_20608 = clustermap.api.all_portfolio_company_sites.call(null);var state_20618__$1 = state_20618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20618__$1,2,inst_20608);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20624 = [null,null,null,null,null,null,null,null];(statearr_20624[0] = state_machine__5507__auto__);
(statearr_20624[1] = 1);
return statearr_20624;
});
var state_machine__5507__auto____1 = (function (state_20618){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20618);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20625){if((e20625 instanceof Object))
{var ex__5510__auto__ = e20625;var statearr_20626_20628 = state_20618;(statearr_20626_20628[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20629 = state_20618;
state_20618 = G__20629;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20618){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20627 = f__5522__auto__.call(null);(statearr_20627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(results,type){return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [results,type], null)));
});
clustermap.app.make_selection = (function make_selection(p__20630){var vec__20635 = p__20630;var type = cljs.core.nth.call(null,vec__20635,0,null);var val = cljs.core.nth.call(null,vec__20635,1,null);console.log(cljs.core.clj__GT_js.call(null,val));
var pred__20636 = cljs.core._EQ__EQ_;var expr__20637 = type;if(cljs.core.truth_(pred__20636.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__20637)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company_detail.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__20636.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__20637)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company_detail.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__20636.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__20637)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency_detail.call(null,cljs.core.get.call(null,val,"constituency_id")),type], null);
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20685){var state_val_20686 = (state_20685[1]);if((state_val_20686 === 7))
{var inst_20674 = (state_20685[2]);var inst_20675 = cljs.core.nth.call(null,inst_20674,0,null);var inst_20676 = cljs.core.nth.call(null,inst_20674,1,null);var inst_20677 = clustermap.app.handle_event.call(null,inst_20675,inst_20676);var state_20685__$1 = (function (){var statearr_20687 = state_20685;(statearr_20687[7] = inst_20677);
return statearr_20687;
})();var statearr_20688_20701 = state_20685__$1;(statearr_20688_20701[2] = null);
(statearr_20688_20701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20686 === 6))
{var inst_20681 = (state_20685[2]);var state_20685__$1 = state_20685;var statearr_20689_20702 = state_20685__$1;(statearr_20689_20702[2] = inst_20681);
(statearr_20689_20702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20686 === 5))
{var state_20685__$1 = state_20685;var statearr_20690_20703 = state_20685__$1;(statearr_20690_20703[2] = null);
(statearr_20690_20703[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20686 === 4))
{var state_20685__$1 = state_20685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20685__$1,7,comm);
} else
{if((state_val_20686 === 3))
{var inst_20683 = (state_20685[2]);var state_20685__$1 = state_20685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20685__$1,inst_20683);
} else
{if((state_val_20686 === 2))
{var state_20685__$1 = state_20685;if(true)
{var statearr_20691_20704 = state_20685__$1;(statearr_20691_20704[1] = 4);
} else
{var statearr_20692_20705 = state_20685__$1;(statearr_20692_20705[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20686 === 1))
{var state_20685__$1 = state_20685;var statearr_20693_20706 = state_20685__$1;(statearr_20693_20706[2] = null);
(statearr_20693_20706[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_20697 = [null,null,null,null,null,null,null,null];(statearr_20697[0] = state_machine__5507__auto__);
(statearr_20697[1] = 1);
return statearr_20697;
});
var state_machine__5507__auto____1 = (function (state_20685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20698){if((e20698 instanceof Object))
{var ex__5510__auto__ = e20698;var statearr_20699_20707 = state_20685;(statearr_20699_20707[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20708 = state_20685;
state_20685 = G__20708;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20700 = f__5522__auto__.call(null);(statearr_20700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20700;
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