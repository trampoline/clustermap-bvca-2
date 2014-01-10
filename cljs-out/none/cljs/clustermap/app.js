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
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),null], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15763){var state_val_15764 = (state_15763[1]);if((state_val_15764 === 2))
{var inst_15760 = (state_15763[2]);var inst_15761 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_15760);var state_15763__$1 = state_15763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15763__$1,inst_15761);
} else
{if((state_val_15764 === 1))
{var inst_15758 = clustermap.api.all_portfolio_companies_summary.call(null);var state_15763__$1 = state_15763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15763__$1,2,inst_15758);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15768 = [null,null,null,null,null,null,null];(statearr_15768[0] = state_machine__5507__auto__);
(statearr_15768[1] = 1);
return statearr_15768;
});
var state_machine__5507__auto____1 = (function (state_15763){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15763);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15769){if((e15769 instanceof Object))
{var ex__5510__auto__ = e15769;var statearr_15770_15772 = state_15763;(statearr_15770_15772[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15773 = state_15763;
state_15763 = G__15773;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15763){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15771 = f__5522__auto__.call(null);(statearr_15771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15793){var state_val_15794 = (state_15793[1]);if((state_val_15794 === 2))
{var inst_15790 = (state_15793[2]);var inst_15791 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_15790);var state_15793__$1 = state_15793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15793__$1,inst_15791);
} else
{if((state_val_15794 === 1))
{var inst_15788 = clustermap.api.all_investor_companies_summary.call(null);var state_15793__$1 = state_15793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15793__$1,2,inst_15788);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15798 = [null,null,null,null,null,null,null];(statearr_15798[0] = state_machine__5507__auto__);
(statearr_15798[1] = 1);
return statearr_15798;
});
var state_machine__5507__auto____1 = (function (state_15793){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15799){if((e15799 instanceof Object))
{var ex__5510__auto__ = e15799;var statearr_15800_15802 = state_15793;(statearr_15800_15802[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15803 = state_15793;
state_15793 = G__15803;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15793){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15801 = f__5522__auto__.call(null);(statearr_15801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15834){var state_val_15835 = (state_15834[1]);if((state_val_15835 === 2))
{var inst_15826 = (state_15834[2]);var inst_15827 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_15826);var inst_15828 = cljs.core.deref.call(null,clustermap.app.state);var inst_15829 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_15828);var inst_15830 = cljs.core.deref.call(null,clustermap.app.state);var inst_15831 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_15830);var inst_15832 = clustermap.map.display_sites.call(null,inst_15829,inst_15831);var state_15834__$1 = (function (){var statearr_15836 = state_15834;(statearr_15836[7] = inst_15827);
return statearr_15836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15834__$1,inst_15832);
} else
{if((state_val_15835 === 1))
{var inst_15824 = clustermap.api.all_portfolio_company_sites.call(null);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15834__$1,2,inst_15824);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15840 = [null,null,null,null,null,null,null,null];(statearr_15840[0] = state_machine__5507__auto__);
(statearr_15840[1] = 1);
return statearr_15840;
});
var state_machine__5507__auto____1 = (function (state_15834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15841){if((e15841 instanceof Object))
{var ex__5510__auto__ = e15841;var statearr_15842_15844 = state_15834;(statearr_15842_15844[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15845 = state_15834;
state_15834 = G__15845;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15843 = f__5522__auto__.call(null);(statearr_15843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15892){var state_val_15893 = (state_15892[1]);if((state_val_15893 === 8))
{var inst_15882 = (state_15892[2]);var inst_15883 = cljs.core.js__GT_clj.call(null,inst_15882);var inst_15884 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_15883);var state_15892__$1 = (function (){var statearr_15894 = state_15892;(statearr_15894[7] = inst_15884);
return statearr_15894;
})();var statearr_15895_15908 = state_15892__$1;(statearr_15895_15908[2] = null);
(statearr_15895_15908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15893 === 7))
{var inst_15880 = (state_15892[2]);var state_15892__$1 = state_15892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15892__$1,8,inst_15880);
} else
{if((state_val_15893 === 6))
{var inst_15888 = (state_15892[2]);var state_15892__$1 = state_15892;var statearr_15896_15909 = state_15892__$1;(statearr_15896_15909[2] = inst_15888);
(statearr_15896_15909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15893 === 5))
{var state_15892__$1 = state_15892;var statearr_15897_15910 = state_15892__$1;(statearr_15897_15910[2] = null);
(statearr_15897_15910[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15893 === 4))
{var state_15892__$1 = state_15892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15892__$1,7,comm);
} else
{if((state_val_15893 === 3))
{var inst_15890 = (state_15892[2]);var state_15892__$1 = state_15892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15892__$1,inst_15890);
} else
{if((state_val_15893 === 2))
{var state_15892__$1 = state_15892;if(true)
{var statearr_15898_15911 = state_15892__$1;(statearr_15898_15911[1] = 4);
} else
{var statearr_15899_15912 = state_15892__$1;(statearr_15899_15912[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15893 === 1))
{var state_15892__$1 = state_15892;var statearr_15900_15913 = state_15892__$1;(statearr_15900_15913[2] = null);
(statearr_15900_15913[1] = 2);
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
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15904 = [null,null,null,null,null,null,null,null];(statearr_15904[0] = state_machine__5507__auto__);
(statearr_15904[1] = 1);
return statearr_15904;
});
var state_machine__5507__auto____1 = (function (state_15892){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15905){if((e15905 instanceof Object))
{var ex__5510__auto__ = e15905;var statearr_15906_15914 = state_15892;(statearr_15906_15914[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15915 = state_15892;
state_15892 = G__15915;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15892){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15907 = f__5522__auto__.call(null);(statearr_15907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__15916,type,val){var map__15918 = p__15916;var map__15918__$1 = ((cljs.core.seq_QMARK_.call(null,map__15918))?cljs.core.apply.call(null,cljs.core.hash_map,map__15918):map__15918);var searches = cljs.core.get.call(null,map__15918__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return cljs.core.async.put_BANG_.call(null,searches,clustermap.api.search.call(null,val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var map__15951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searches","searches",1902549960),cljs.core.async.chan.call(null)], null);var map__15951__$1 = ((cljs.core.seq_QMARK_.call(null,map__15951))?cljs.core.apply.call(null,cljs.core.hash_map,map__15951):map__15951);var order_ops = map__15951__$1;var searches = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));var _ = clustermap.app.process_search_results.call(null,searches);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15967){var state_val_15968 = (state_15967[1]);if((state_val_15968 === 7))
{var inst_15956 = (state_15967[2]);var inst_15957 = cljs.core.nth.call(null,inst_15956,0,null);var inst_15958 = cljs.core.nth.call(null,inst_15956,1,null);var inst_15959 = clustermap.app.handle_event.call(null,order_ops,inst_15957,inst_15958);var state_15967__$1 = (function (){var statearr_15969 = state_15967;(statearr_15969[7] = inst_15959);
return statearr_15969;
})();var statearr_15970_15983 = state_15967__$1;(statearr_15970_15983[2] = null);
(statearr_15970_15983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15968 === 6))
{var inst_15963 = (state_15967[2]);var state_15967__$1 = state_15967;var statearr_15971_15984 = state_15967__$1;(statearr_15971_15984[2] = inst_15963);
(statearr_15971_15984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15968 === 5))
{var state_15967__$1 = state_15967;var statearr_15972_15985 = state_15967__$1;(statearr_15972_15985[2] = null);
(statearr_15972_15985[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15968 === 4))
{var state_15967__$1 = state_15967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15967__$1,7,comm);
} else
{if((state_val_15968 === 3))
{var inst_15965 = (state_15967[2]);var state_15967__$1 = state_15967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15967__$1,inst_15965);
} else
{if((state_val_15968 === 2))
{var state_15967__$1 = state_15967;if(true)
{var statearr_15973_15986 = state_15967__$1;(statearr_15973_15986[1] = 4);
} else
{var statearr_15974_15987 = state_15967__$1;(statearr_15974_15987[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15968 === 1))
{var state_15967__$1 = state_15967;var statearr_15975_15988 = state_15967__$1;(statearr_15975_15988[2] = null);
(statearr_15975_15988[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15979 = [null,null,null,null,null,null,null,null];(statearr_15979[0] = state_machine__5507__auto__);
(statearr_15979[1] = 1);
return statearr_15979;
});
var state_machine__5507__auto____1 = (function (state_15967){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15980){if((e15980 instanceof Object))
{var ex__5510__auto__ = e15980;var statearr_15981_15989 = state_15967;(statearr_15981_15989[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15990 = state_15967;
state_15967 = G__15990;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15967){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15982 = f__5522__auto__.call(null);(statearr_15982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15982;
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