// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('clustermap.api');
goog.require('clustermap.page_title');
goog.require('clustermap.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.full_report');
goog.require('clustermap.page_title');
goog.require('om.dom');
goog.require('clustermap.full_report');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_17006){var state_val_17007 = (state_17006[1]);if((state_val_17007 === 2))
{var inst_17003 = (state_17006[2]);var inst_17004 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_17003);var state_17006__$1 = state_17006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17006__$1,inst_17004);
} else
{if((state_val_17007 === 1))
{var inst_17001 = clustermap.api.portfolio_companies_summary.call(null);var state_17006__$1 = state_17006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17006__$1,2,inst_17001);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_17011 = [null,null,null,null,null,null,null];(statearr_17011[0] = state_machine__5507__auto__);
(statearr_17011[1] = 1);
return statearr_17011;
});
var state_machine__5507__auto____1 = (function (state_17006){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_17006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e17012){if((e17012 instanceof Object))
{var ex__5510__auto__ = e17012;var statearr_17013_17015 = state_17006;(statearr_17013_17015[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17016 = state_17006;
state_17006 = G__17016;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_17006){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_17006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_17014 = f__5522__auto__.call(null);(statearr_17014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_17014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_17036){var state_val_17037 = (state_17036[1]);if((state_val_17037 === 2))
{var inst_17033 = (state_17036[2]);var inst_17034 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_17033);var state_17036__$1 = state_17036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17036__$1,inst_17034);
} else
{if((state_val_17037 === 1))
{var inst_17031 = clustermap.api.investor_companies_summary.call(null);var state_17036__$1 = state_17036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17036__$1,2,inst_17031);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_17041 = [null,null,null,null,null,null,null];(statearr_17041[0] = state_machine__5507__auto__);
(statearr_17041[1] = 1);
return statearr_17041;
});
var state_machine__5507__auto____1 = (function (state_17036){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_17036);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e17042){if((e17042 instanceof Object))
{var ex__5510__auto__ = e17042;var statearr_17043_17045 = state_17036;(statearr_17043_17045[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17046 = state_17036;
state_17036 = G__17046;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_17044 = f__5522__auto__.call(null);(statearr_17044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_17044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_17077){var state_val_17078 = (state_17077[1]);if((state_val_17078 === 2))
{var inst_17069 = (state_17077[2]);var inst_17070 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_17069);var inst_17071 = cljs.core.deref.call(null,clustermap.app.state);var inst_17072 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_17071);var inst_17073 = cljs.core.deref.call(null,clustermap.app.state);var inst_17074 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_17073);var inst_17075 = clustermap.map.display_sites.call(null,inst_17072,inst_17074);var state_17077__$1 = (function (){var statearr_17079 = state_17077;(statearr_17079[7] = inst_17070);
return statearr_17079;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17077__$1,inst_17075);
} else
{if((state_val_17078 === 1))
{var inst_17067 = clustermap.api.portfolio_company_sites.call(null);var state_17077__$1 = state_17077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17077__$1,2,inst_17067);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_17083 = [null,null,null,null,null,null,null,null];(statearr_17083[0] = state_machine__5507__auto__);
(statearr_17083[1] = 1);
return statearr_17083;
});
var state_machine__5507__auto____1 = (function (state_17077){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_17077);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e17084){if((e17084 instanceof Object))
{var ex__5510__auto__ = e17084;var statearr_17085_17087 = state_17077;(statearr_17085_17087[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17088 = state_17077;
state_17077 = G__17088;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_17077){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_17077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_17086 = f__5522__auto__.call(null);(statearr_17086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_17086;
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
clustermap.app.make_selection = (function make_selection(p__17089){var vec__17094 = p__17089;var type = cljs.core.nth.call(null,vec__17094,0,null);var val = cljs.core.nth.call(null,vec__17094,1,null);var pred__17095 = cljs.core._EQ__EQ_;var expr__17096 = type;if(cljs.core.truth_(pred__17095.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__17096)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,cljs.core.get.call(null,val,"company_no")),type], null);
} else
{if(cljs.core.truth_(pred__17095.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__17096)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,cljs.core.get.call(null,val,"name")),type], null);
} else
{if(cljs.core.truth_(pred__17095.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__17096)))
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
var comm = cljs.core.async.chan.call(null);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.page_title.mount.call(null,clustermap.app.state,"page-title-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_17144){var state_val_17145 = (state_17144[1]);if((state_val_17145 === 7))
{var inst_17133 = (state_17144[2]);var inst_17134 = cljs.core.nth.call(null,inst_17133,0,null);var inst_17135 = cljs.core.nth.call(null,inst_17133,1,null);var inst_17136 = clustermap.app.handle_event.call(null,inst_17134,inst_17135);var state_17144__$1 = (function (){var statearr_17146 = state_17144;(statearr_17146[7] = inst_17136);
return statearr_17146;
})();var statearr_17147_17160 = state_17144__$1;(statearr_17147_17160[2] = null);
(statearr_17147_17160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17145 === 6))
{var inst_17140 = (state_17144[2]);var state_17144__$1 = state_17144;var statearr_17148_17161 = state_17144__$1;(statearr_17148_17161[2] = inst_17140);
(statearr_17148_17161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17145 === 5))
{var state_17144__$1 = state_17144;var statearr_17149_17162 = state_17144__$1;(statearr_17149_17162[2] = null);
(statearr_17149_17162[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17145 === 4))
{var state_17144__$1 = state_17144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17144__$1,7,comm);
} else
{if((state_val_17145 === 3))
{var inst_17142 = (state_17144[2]);var state_17144__$1 = state_17144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17144__$1,inst_17142);
} else
{if((state_val_17145 === 2))
{var state_17144__$1 = state_17144;if(true)
{var statearr_17150_17163 = state_17144__$1;(statearr_17150_17163[1] = 4);
} else
{var statearr_17151_17164 = state_17144__$1;(statearr_17151_17164[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17145 === 1))
{var state_17144__$1 = state_17144;var statearr_17152_17165 = state_17144__$1;(statearr_17152_17165[2] = null);
(statearr_17152_17165[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_17156 = [null,null,null,null,null,null,null,null];(statearr_17156[0] = state_machine__5507__auto__);
(statearr_17156[1] = 1);
return statearr_17156;
});
var state_machine__5507__auto____1 = (function (state_17144){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_17144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e17157){if((e17157 instanceof Object))
{var ex__5510__auto__ = e17157;var statearr_17158_17166 = state_17144;(statearr_17158_17166[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17167 = state_17144;
state_17144 = G__17167;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_17144){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_17144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_17159 = f__5522__auto__.call(null);(statearr_17159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_17159;
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