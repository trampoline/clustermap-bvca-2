// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"]));
return cljs.core.async.close_BANG_(ch);
}));
return ch;
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16250){var state_val_16251 = (state_16250[1]);if((state_val_16251 === 2))
{var inst_16248 = (state_16250[2]);var state_16250__$1 = state_16250;return cljs.core.async.impl.ioc_helpers.return_chan(state_16250__$1,inst_16248);
} else
{if((state_val_16251 === 1))
{var inst_16246 = clustermap.api.GET("/api/bvca/portfolio-company-sites");var state_16250__$1 = state_16250;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16250__$1,2,inst_16246);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16255 = [null,null,null,null,null,null,null];(statearr_16255[0] = state_machine__5507__auto__);
(statearr_16255[1] = 1);
return statearr_16255;
});
var state_machine__5507__auto____1 = (function (state_16250){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_16250);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16256){if((e16256 instanceof Object))
{var ex__5510__auto__ = e16256;var statearr_16257_16259 = state_16250;(statearr_16257_16259[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16250);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e16256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__16260 = state_16250;
state_16250 = G__16260;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16250){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16258 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_16258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16280){var state_val_16281 = (state_16280[1]);if((state_val_16281 === 2))
{var inst_16277 = (state_16280[2]);var inst_16278 = console.log(inst_16277);var state_16280__$1 = state_16280;return cljs.core.async.impl.ioc_helpers.return_chan(state_16280__$1,inst_16278);
} else
{if((state_val_16281 === 1))
{var inst_16275 = clustermap.api.portfolio_company_sites();var state_16280__$1 = state_16280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16280__$1,2,inst_16275);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16285 = [null,null,null,null,null,null,null];(statearr_16285[0] = state_machine__5507__auto__);
(statearr_16285[1] = 1);
return statearr_16285;
});
var state_machine__5507__auto____1 = (function (state_16280){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_16280);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16286){if((e16286 instanceof Object))
{var ex__5510__auto__ = e16286;var statearr_16287_16289 = state_16280;(statearr_16287_16289[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16280);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e16286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__16290 = state_16280;
state_16280 = G__16290;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16280){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16288 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_16288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
