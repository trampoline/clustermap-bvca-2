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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10699){var state_val_10700 = (state_10699[1]);if((state_val_10700 === 2))
{var inst_10696 = (state_10699[2]);var inst_10697 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10696);var state_10699__$1 = state_10699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10699__$1,inst_10697);
} else
{if((state_val_10700 === 1))
{var inst_10694 = clustermap.api.portfolio_companies_summary.call(null);var state_10699__$1 = state_10699;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10699__$1,2,inst_10694);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10704 = [null,null,null,null,null,null,null];(statearr_10704[0] = state_machine__5507__auto__);
(statearr_10704[1] = 1);
return statearr_10704;
});
var state_machine__5507__auto____1 = (function (state_10699){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10699);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10705){if((e10705 instanceof Object))
{var ex__5510__auto__ = e10705;var statearr_10706_10708 = state_10699;(statearr_10706_10708[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10699);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10709 = state_10699;
state_10699 = G__10709;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10699){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10707 = f__5522__auto__.call(null);(statearr_10707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10729){var state_val_10730 = (state_10729[1]);if((state_val_10730 === 2))
{var inst_10726 = (state_10729[2]);var inst_10727 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10726);var state_10729__$1 = state_10729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10729__$1,inst_10727);
} else
{if((state_val_10730 === 1))
{var inst_10724 = clustermap.api.investor_companies_summary.call(null);var state_10729__$1 = state_10729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10729__$1,2,inst_10724);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10734 = [null,null,null,null,null,null,null];(statearr_10734[0] = state_machine__5507__auto__);
(statearr_10734[1] = 1);
return statearr_10734;
});
var state_machine__5507__auto____1 = (function (state_10729){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10729);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10735){if((e10735 instanceof Object))
{var ex__5510__auto__ = e10735;var statearr_10736_10738 = state_10729;(statearr_10736_10738[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10729);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10739 = state_10729;
state_10729 = G__10739;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10729){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10737 = f__5522__auto__.call(null);(statearr_10737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10770){var state_val_10771 = (state_10770[1]);if((state_val_10771 === 2))
{var inst_10762 = (state_10770[2]);var inst_10763 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10762);var inst_10764 = cljs.core.deref.call(null,clustermap.app.state);var inst_10765 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10764);var inst_10766 = cljs.core.deref.call(null,clustermap.app.state);var inst_10767 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10766);var inst_10768 = clustermap.map.display_sites.call(null,inst_10765,inst_10767);var state_10770__$1 = (function (){var statearr_10772 = state_10770;(statearr_10772[7] = inst_10763);
return statearr_10772;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10770__$1,inst_10768);
} else
{if((state_val_10771 === 1))
{var inst_10760 = clustermap.api.portfolio_company_sites.call(null);var state_10770__$1 = state_10770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10770__$1,2,inst_10760);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10776 = [null,null,null,null,null,null,null,null];(statearr_10776[0] = state_machine__5507__auto__);
(statearr_10776[1] = 1);
return statearr_10776;
});
var state_machine__5507__auto____1 = (function (state_10770){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10770);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10777){if((e10777 instanceof Object))
{var ex__5510__auto__ = e10777;var statearr_10778_10780 = state_10770;(statearr_10778_10780[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10781 = state_10770;
state_10770 = G__10781;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10770){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10779 = f__5522__auto__.call(null);(statearr_10779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10779;
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
clustermap.app.make_selection = (function make_selection(p__10782){var vec__10787 = p__10782;var type = cljs.core.nth.call(null,vec__10787,0,null);var val = cljs.core.nth.call(null,vec__10787,1,null);var pred__10788 = cljs.core._EQ__EQ_;var expr__10789 = type;if(cljs.core.truth_(pred__10788.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10789)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__10788.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10789)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__10788.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10789)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10837){var state_val_10838 = (state_10837[1]);if((state_val_10838 === 7))
{var inst_10826 = (state_10837[2]);var inst_10827 = cljs.core.nth.call(null,inst_10826,0,null);var inst_10828 = cljs.core.nth.call(null,inst_10826,1,null);var inst_10829 = clustermap.app.handle_event.call(null,inst_10827,inst_10828);var state_10837__$1 = (function (){var statearr_10839 = state_10837;(statearr_10839[7] = inst_10829);
return statearr_10839;
})();var statearr_10840_10853 = state_10837__$1;(statearr_10840_10853[2] = null);
(statearr_10840_10853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10838 === 6))
{var inst_10833 = (state_10837[2]);var state_10837__$1 = state_10837;var statearr_10841_10854 = state_10837__$1;(statearr_10841_10854[2] = inst_10833);
(statearr_10841_10854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10838 === 5))
{var state_10837__$1 = state_10837;var statearr_10842_10855 = state_10837__$1;(statearr_10842_10855[2] = null);
(statearr_10842_10855[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10838 === 4))
{var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10837__$1,7,comm);
} else
{if((state_val_10838 === 3))
{var inst_10835 = (state_10837[2]);var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10837__$1,inst_10835);
} else
{if((state_val_10838 === 2))
{var state_10837__$1 = state_10837;if(true)
{var statearr_10843_10856 = state_10837__$1;(statearr_10843_10856[1] = 4);
} else
{var statearr_10844_10857 = state_10837__$1;(statearr_10844_10857[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10838 === 1))
{var state_10837__$1 = state_10837;var statearr_10845_10858 = state_10837__$1;(statearr_10845_10858[2] = null);
(statearr_10845_10858[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10849 = [null,null,null,null,null,null,null,null];(statearr_10849[0] = state_machine__5507__auto__);
(statearr_10849[1] = 1);
return statearr_10849;
});
var state_machine__5507__auto____1 = (function (state_10837){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10837);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10850){if((e10850 instanceof Object))
{var ex__5510__auto__ = e10850;var statearr_10851_10859 = state_10837;(statearr_10851_10859[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10837);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10860 = state_10837;
state_10837 = G__10860;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10837){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10852 = f__5522__auto__.call(null);(statearr_10852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10852;
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