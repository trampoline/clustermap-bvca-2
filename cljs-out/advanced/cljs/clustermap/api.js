// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"]));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
});
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19120){var state_val_19121 = (state_19120[1]);if((state_val_19121 === 8))
{var inst_19109 = (state_19120[7]);var inst_19111 = (state_19120[2]);var inst_19112 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19111,inst_19109);var state_19120__$1 = (function (){var statearr_19122 = state_19120;(statearr_19122[8] = inst_19112);
return statearr_19122;
})();var statearr_19123_19137 = state_19120__$1;(statearr_19123_19137[2] = null);
(statearr_19123_19137[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19121 === 7))
{var inst_19107 = (state_19120[2]);var inst_19108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19107,0,null);var inst_19109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19107,1,null);var state_19120__$1 = (function (){var statearr_19124 = state_19120;(statearr_19124[7] = inst_19109);
return statearr_19124;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19120__$1,8,inst_19108);
} else
{if((state_val_19121 === 6))
{var inst_19116 = (state_19120[2]);var state_19120__$1 = state_19120;var statearr_19125_19138 = state_19120__$1;(statearr_19125_19138[2] = inst_19116);
(statearr_19125_19138[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19121 === 5))
{var state_19120__$1 = state_19120;var statearr_19126_19139 = state_19120__$1;(statearr_19126_19139[2] = null);
(statearr_19126_19139[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19121 === 4))
{var state_19120__$1 = state_19120;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19120__$1,7,ocomm);
} else
{if((state_val_19121 === 3))
{var inst_19118 = (state_19120[2]);var state_19120__$1 = state_19120;return cljs.core.async.impl.ioc_helpers.return_chan(state_19120__$1,inst_19118);
} else
{if((state_val_19121 === 2))
{var state_19120__$1 = state_19120;if(true)
{var statearr_19127_19140 = state_19120__$1;(statearr_19127_19140[1] = 4);
} else
{var statearr_19128_19141 = state_19120__$1;(statearr_19128_19141[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19121 === 1))
{var state_19120__$1 = state_19120;var statearr_19129_19142 = state_19120__$1;(statearr_19129_19142[2] = null);
(statearr_19129_19142[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_19133 = [null,null,null,null,null,null,null,null,null];(statearr_19133[0] = state_machine__5507__auto__);
(statearr_19133[1] = 1);
return statearr_19133;
});
var state_machine__5507__auto____1 = (function (state_19120){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19120);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19134){if((e19134 instanceof Object))
{var ex__5510__auto__ = e19134;var statearr_19135_19143 = state_19120;(statearr_19135_19143[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19120);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19144 = state_19120;
state_19120 = G__19144;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19120){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19136 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__19147__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19146 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146,0,null);var result_handler_args = cljs.core.nthnext(vec__19146,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19147 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19147__delegate.call(this,req_args);};
G__19147.cljs$lang$maxFixedArity = 0;
G__19147.cljs$lang$applyTo = (function (arglist__19148){
var req_args = cljs.core.seq(arglist__19148);
return G__19147__delegate(req_args);
});
G__19147.cljs$core$IFn$_invoke$arity$variadic = G__19147__delegate;
return G__19147;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19166){var state_val_19167 = (state_19166[1]);if((state_val_19167 === 2))
{var inst_19163 = (state_19166[2]);var inst_19164 = console.log(inst_19163);var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.return_chan(state_19166__$1,inst_19164);
} else
{if((state_val_19167 === 1))
{var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19166__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19171 = [null,null,null,null,null,null,null];(statearr_19171[0] = state_machine__5507__auto__);
(statearr_19171[1] = 1);
return statearr_19171;
});
var state_machine__5507__auto____1 = (function (state_19166){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19166);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19172){if((e19172 instanceof Object))
{var ex__5510__auto__ = e19172;var statearr_19173_19175 = state_19166;(statearr_19173_19175[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19166);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19176 = state_19166;
state_19166 = G__19176;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19166){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19174 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19177){
var f = cljs.core.first(arglist__19177);
var args = cljs.core.rest(arglist__19177);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){return clustermap.api.GET("/api/bvca/portfolio-company-sites");
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET("/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET("/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET("/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
