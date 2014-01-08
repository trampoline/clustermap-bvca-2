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
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18420){var state_val_18421 = (state_18420[1]);if((state_val_18421 === 2))
{var inst_18418 = (state_18420[2]);var state_18420__$1 = state_18420;return cljs.core.async.impl.ioc_helpers.return_chan(state_18420__$1,inst_18418);
} else
{if((state_val_18421 === 1))
{var inst_18416 = clustermap.api.GET("/api/bvca/all-portfolio-company-sites");var state_18420__$1 = state_18420;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18420__$1,2,inst_18416);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18425 = [null,null,null,null,null,null,null];(statearr_18425[0] = state_machine__5507__auto__);
(statearr_18425[1] = 1);
return statearr_18425;
});
var state_machine__5507__auto____1 = (function (state_18420){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18420);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object))
{var ex__5510__auto__ = e18426;var statearr_18427_18429 = state_18420;(statearr_18427_18429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18420);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18430 = state_18420;
state_18420 = G__18430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18428 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18448){var state_val_18449 = (state_18448[1]);if((state_val_18449 === 2))
{var inst_18446 = (state_18448[2]);var state_18448__$1 = state_18448;return cljs.core.async.impl.ioc_helpers.return_chan(state_18448__$1,inst_18446);
} else
{if((state_val_18449 === 1))
{var inst_18444 = clustermap.api.GET("/api/bvca/all-constituencies");var state_18448__$1 = state_18448;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18448__$1,2,inst_18444);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18453 = [null,null,null,null,null,null,null];(statearr_18453[0] = state_machine__5507__auto__);
(statearr_18453[1] = 1);
return statearr_18453;
});
var state_machine__5507__auto____1 = (function (state_18448){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18448);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18454){if((e18454 instanceof Object))
{var ex__5510__auto__ = e18454;var statearr_18455_18457 = state_18448;(statearr_18455_18457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18448);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18458 = state_18448;
state_18448 = G__18458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18448){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18456 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18478){var state_val_18479 = (state_18478[1]);if((state_val_18479 === 2))
{var inst_18476 = (state_18478[2]);var state_18478__$1 = state_18478;return cljs.core.async.impl.ioc_helpers.return_chan(state_18478__$1,inst_18476);
} else
{if((state_val_18479 === 1))
{var inst_18473 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_18474 = clustermap.api.GET(inst_18473);var state_18478__$1 = state_18478;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18478__$1,2,inst_18474);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18483 = [null,null,null,null,null,null,null];(statearr_18483[0] = state_machine__5507__auto__);
(statearr_18483[1] = 1);
return statearr_18483;
});
var state_machine__5507__auto____1 = (function (state_18478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18478);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18484){if((e18484 instanceof Object))
{var ex__5510__auto__ = e18484;var statearr_18485_18487 = state_18478;(statearr_18485_18487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18478);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18488 = state_18478;
state_18478 = G__18488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18486 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18506){var state_val_18507 = (state_18506[1]);if((state_val_18507 === 2))
{var inst_18504 = (state_18506[2]);var state_18506__$1 = state_18506;return cljs.core.async.impl.ioc_helpers.return_chan(state_18506__$1,inst_18504);
} else
{if((state_val_18507 === 1))
{var inst_18502 = clustermap.api.GET("/api/bvca/all-portfolio-companies-summary");var state_18506__$1 = state_18506;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18506__$1,2,inst_18502);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18511 = [null,null,null,null,null,null,null];(statearr_18511[0] = state_machine__5507__auto__);
(statearr_18511[1] = 1);
return statearr_18511;
});
var state_machine__5507__auto____1 = (function (state_18506){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18506);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18512){if((e18512 instanceof Object))
{var ex__5510__auto__ = e18512;var statearr_18513_18515 = state_18506;(statearr_18513_18515[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18506);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18516 = state_18506;
state_18506 = G__18516;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18506){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18514 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18536){var state_val_18537 = (state_18536[1]);if((state_val_18537 === 2))
{var inst_18534 = (state_18536[2]);var state_18536__$1 = state_18536;return cljs.core.async.impl.ioc_helpers.return_chan(state_18536__$1,inst_18534);
} else
{if((state_val_18537 === 1))
{var inst_18531 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_18532 = clustermap.api.GET(inst_18531);var state_18536__$1 = state_18536;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18536__$1,2,inst_18532);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18541 = [null,null,null,null,null,null,null];(statearr_18541[0] = state_machine__5507__auto__);
(statearr_18541[1] = 1);
return statearr_18541;
});
var state_machine__5507__auto____1 = (function (state_18536){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18536);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18542){if((e18542 instanceof Object))
{var ex__5510__auto__ = e18542;var statearr_18543_18545 = state_18536;(statearr_18543_18545[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18536);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18546 = state_18536;
state_18536 = G__18546;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18536){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18544 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18566){var state_val_18567 = (state_18566[1]);if((state_val_18567 === 2))
{var inst_18564 = (state_18566[2]);var state_18566__$1 = state_18566;return cljs.core.async.impl.ioc_helpers.return_chan(state_18566__$1,inst_18564);
} else
{if((state_val_18567 === 1))
{var inst_18561 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_18562 = clustermap.api.GET(inst_18561);var state_18566__$1 = state_18566;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18566__$1,2,inst_18562);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18571 = [null,null,null,null,null,null,null];(statearr_18571[0] = state_machine__5507__auto__);
(statearr_18571[1] = 1);
return statearr_18571;
});
var state_machine__5507__auto____1 = (function (state_18566){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18566);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18572){if((e18572 instanceof Object))
{var ex__5510__auto__ = e18572;var statearr_18573_18575 = state_18566;(statearr_18573_18575[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18566);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18576 = state_18566;
state_18566 = G__18576;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18566){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18574 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
