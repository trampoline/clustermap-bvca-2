// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"message","message",1968829305),"boo"], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10767){var state_val_10768 = (state_10767[1]);if((state_val_10768 === 2))
{var inst_10764 = (state_10767[2]);var inst_10765 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10764);var state_10767__$1 = state_10767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10767__$1,inst_10765);
} else
{if((state_val_10768 === 1))
{var inst_10762 = clustermap.api.all_portfolio_companies_summary.call(null);var state_10767__$1 = state_10767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10767__$1,2,inst_10762);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10772 = [null,null,null,null,null,null,null];(statearr_10772[0] = state_machine__5507__auto__);
(statearr_10772[1] = 1);
return statearr_10772;
});
var state_machine__5507__auto____1 = (function (state_10767){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10767);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10773){if((e10773 instanceof Object))
{var ex__5510__auto__ = e10773;var statearr_10774_10776 = state_10767;(statearr_10774_10776[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10777 = state_10767;
state_10767 = G__10777;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10767){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10775 = f__5522__auto__.call(null);(statearr_10775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10797){var state_val_10798 = (state_10797[1]);if((state_val_10798 === 2))
{var inst_10794 = (state_10797[2]);var inst_10795 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10794);var state_10797__$1 = state_10797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10797__$1,inst_10795);
} else
{if((state_val_10798 === 1))
{var inst_10792 = clustermap.api.all_investor_companies_summary.call(null);var state_10797__$1 = state_10797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10797__$1,2,inst_10792);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10802 = [null,null,null,null,null,null,null];(statearr_10802[0] = state_machine__5507__auto__);
(statearr_10802[1] = 1);
return statearr_10802;
});
var state_machine__5507__auto____1 = (function (state_10797){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10797);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10803){if((e10803 instanceof Object))
{var ex__5510__auto__ = e10803;var statearr_10804_10806 = state_10797;(statearr_10804_10806[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10807 = state_10797;
state_10797 = G__10807;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10797){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10805 = f__5522__auto__.call(null);(statearr_10805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10838){var state_val_10839 = (state_10838[1]);if((state_val_10839 === 2))
{var inst_10830 = (state_10838[2]);var inst_10831 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10830);var inst_10832 = cljs.core.deref.call(null,clustermap.app.state);var inst_10833 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10832);var inst_10834 = cljs.core.deref.call(null,clustermap.app.state);var inst_10835 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10834);var inst_10836 = clustermap.map.display_sites.call(null,inst_10833,inst_10835);var state_10838__$1 = (function (){var statearr_10840 = state_10838;(statearr_10840[7] = inst_10831);
return statearr_10840;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10838__$1,inst_10836);
} else
{if((state_val_10839 === 1))
{var inst_10828 = clustermap.api.all_portfolio_company_sites.call(null);var state_10838__$1 = state_10838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10838__$1,2,inst_10828);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10844 = [null,null,null,null,null,null,null,null];(statearr_10844[0] = state_machine__5507__auto__);
(statearr_10844[1] = 1);
return statearr_10844;
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
}catch (e10845){if((e10845 instanceof Object))
{var ex__5510__auto__ = e10845;var statearr_10846_10848 = state_10838;(statearr_10846_10848[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10849 = state_10838;
state_10838 = G__10849;
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
})();var state__5523__auto__ = (function (){var statearr_10847 = f__5522__auto__.call(null);(statearr_10847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
return clustermap.map_report.mount.call(null,clustermap.app.state);
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