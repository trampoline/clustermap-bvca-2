// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,ch,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,ch);
}));
return ch;
});
clustermap.api.search = (function search(q){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15815){var state_val_15816 = (state_15815[1]);if((state_val_15816 === 2))
{var inst_15813 = (state_15815[2]);var state_15815__$1 = state_15815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15815__$1,inst_15813);
} else
{if((state_val_15816 === 1))
{var inst_15810 = [cljs.core.str("/api/bvca/search/"),cljs.core.str(q)].join('');var inst_15811 = clustermap.api.GET.call(null,inst_15810);var state_15815__$1 = state_15815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15815__$1,2,inst_15811);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15820 = [null,null,null,null,null,null,null];(statearr_15820[0] = state_machine__5507__auto__);
(statearr_15820[1] = 1);
return statearr_15820;
});
var state_machine__5507__auto____1 = (function (state_15815){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15821){if((e15821 instanceof Object))
{var ex__5510__auto__ = e15821;var statearr_15822_15824 = state_15815;(statearr_15822_15824[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15825 = state_15815;
state_15815 = G__15825;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15815){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15823 = f__5522__auto__.call(null);(statearr_15823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15843){var state_val_15844 = (state_15843[1]);if((state_val_15844 === 2))
{var inst_15841 = (state_15843[2]);var state_15843__$1 = state_15843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15843__$1,inst_15841);
} else
{if((state_val_15844 === 1))
{var inst_15839 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-company-sites");var state_15843__$1 = state_15843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15843__$1,2,inst_15839);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15848 = [null,null,null,null,null,null,null];(statearr_15848[0] = state_machine__5507__auto__);
(statearr_15848[1] = 1);
return statearr_15848;
});
var state_machine__5507__auto____1 = (function (state_15843){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15849){if((e15849 instanceof Object))
{var ex__5510__auto__ = e15849;var statearr_15850_15852 = state_15843;(statearr_15850_15852[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15853 = state_15843;
state_15843 = G__15853;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15843){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15851 = f__5522__auto__.call(null);(statearr_15851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15871){var state_val_15872 = (state_15871[1]);if((state_val_15872 === 2))
{var inst_15869 = (state_15871[2]);var state_15871__$1 = state_15871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15871__$1,inst_15869);
} else
{if((state_val_15872 === 1))
{var inst_15867 = clustermap.api.GET.call(null,"/api/bvca/all-constituencies");var state_15871__$1 = state_15871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15871__$1,2,inst_15867);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15876 = [null,null,null,null,null,null,null];(statearr_15876[0] = state_machine__5507__auto__);
(statearr_15876[1] = 1);
return statearr_15876;
});
var state_machine__5507__auto____1 = (function (state_15871){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15871);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15877){if((e15877 instanceof Object))
{var ex__5510__auto__ = e15877;var statearr_15878_15880 = state_15871;(statearr_15878_15880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15881 = state_15871;
state_15871 = G__15881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15871){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15879 = f__5522__auto__.call(null);(statearr_15879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15901){var state_val_15902 = (state_15901[1]);if((state_val_15902 === 2))
{var inst_15899 = (state_15901[2]);var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15901__$1,inst_15899);
} else
{if((state_val_15902 === 1))
{var inst_15896 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_15897 = clustermap.api.GET.call(null,inst_15896);var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15901__$1,2,inst_15897);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15906 = [null,null,null,null,null,null,null];(statearr_15906[0] = state_machine__5507__auto__);
(statearr_15906[1] = 1);
return statearr_15906;
});
var state_machine__5507__auto____1 = (function (state_15901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15907){if((e15907 instanceof Object))
{var ex__5510__auto__ = e15907;var statearr_15908_15910 = state_15901;(statearr_15908_15910[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15911 = state_15901;
state_15901 = G__15911;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15909 = f__5522__auto__.call(null);(statearr_15909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15929){var state_val_15930 = (state_15929[1]);if((state_val_15930 === 2))
{var inst_15927 = (state_15929[2]);var state_15929__$1 = state_15929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15929__$1,inst_15927);
} else
{if((state_val_15930 === 1))
{var inst_15925 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-companies-summary");var state_15929__$1 = state_15929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15929__$1,2,inst_15925);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15934 = [null,null,null,null,null,null,null];(statearr_15934[0] = state_machine__5507__auto__);
(statearr_15934[1] = 1);
return statearr_15934;
});
var state_machine__5507__auto____1 = (function (state_15929){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15929);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15935){if((e15935 instanceof Object))
{var ex__5510__auto__ = e15935;var statearr_15936_15938 = state_15929;(statearr_15936_15938[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15929);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15939 = state_15929;
state_15929 = G__15939;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15929){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15937 = f__5522__auto__.call(null);(statearr_15937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15959){var state_val_15960 = (state_15959[1]);if((state_val_15960 === 2))
{var inst_15957 = (state_15959[2]);var state_15959__$1 = state_15959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15959__$1,inst_15957);
} else
{if((state_val_15960 === 1))
{var inst_15954 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_15955 = clustermap.api.GET.call(null,inst_15954);var state_15959__$1 = state_15959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15959__$1,2,inst_15955);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15964 = [null,null,null,null,null,null,null];(statearr_15964[0] = state_machine__5507__auto__);
(statearr_15964[1] = 1);
return statearr_15964;
});
var state_machine__5507__auto____1 = (function (state_15959){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object))
{var ex__5510__auto__ = e15965;var statearr_15966_15968 = state_15959;(statearr_15966_15968[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15969 = state_15959;
state_15959 = G__15969;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15959){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15967 = f__5522__auto__.call(null);(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_investor_companies_summary = (function all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15987){var state_val_15988 = (state_15987[1]);if((state_val_15988 === 2))
{var inst_15985 = (state_15987[2]);var state_15987__$1 = state_15987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15987__$1,inst_15985);
} else
{if((state_val_15988 === 1))
{var inst_15983 = clustermap.api.GET.call(null,"/api/bvca/all-investor-companies-summary");var state_15987__$1 = state_15987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15987__$1,2,inst_15983);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15992 = [null,null,null,null,null,null,null];(statearr_15992[0] = state_machine__5507__auto__);
(statearr_15992[1] = 1);
return statearr_15992;
});
var state_machine__5507__auto____1 = (function (state_15987){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15993){if((e15993 instanceof Object))
{var ex__5510__auto__ = e15993;var statearr_15994_15996 = state_15987;(statearr_15994_15996[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15997 = state_15987;
state_15987 = G__15997;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15987){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15995 = f__5522__auto__.call(null);(statearr_15995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16017){var state_val_16018 = (state_16017[1]);if((state_val_16018 === 2))
{var inst_16015 = (state_16017[2]);var state_16017__$1 = state_16017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16017__$1,inst_16015);
} else
{if((state_val_16018 === 1))
{var inst_16012 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_16013 = clustermap.api.GET.call(null,inst_16012);var state_16017__$1 = state_16017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16017__$1,2,inst_16013);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16022 = [null,null,null,null,null,null,null];(statearr_16022[0] = state_machine__5507__auto__);
(statearr_16022[1] = 1);
return statearr_16022;
});
var state_machine__5507__auto____1 = (function (state_16017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16023){if((e16023 instanceof Object))
{var ex__5510__auto__ = e16023;var statearr_16024_16026 = state_16017;(statearr_16024_16026[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16027 = state_16017;
state_16017 = G__16027;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16025 = f__5522__auto__.call(null);(statearr_16025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=api.js.map