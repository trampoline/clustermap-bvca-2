// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__49696){var map__49700 = p__49696;var map__49700__$1 = ((cljs.core.seq_QMARK_.call(null,map__49700))?cljs.core.apply.call(null,cljs.core.hash_map,map__49700):map__49700);var opts = map__49700__$1;var content = cljs.core.get.call(null,map__49700__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__49700__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__49700__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__49700,map__49700__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__49700,map__49700__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__49700,map__49700__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__49700,map__49700__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__49702 = method;var G__49702__$1 = (((G__49702 == null))?null:cljs.core.name.call(null,G__49702));var G__49702__$2 = (((G__49702__$1 == null))?null:clojure.string.upper_case.call(null,G__49702__$1));return G__49702__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__49696 = null;if (arguments.length > 1) {
  p__49696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__49696);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__49703){
var url = cljs.core.first(arglist__49703);
var p__49696 = cljs.core.rest(arglist__49703);
return AJAX__delegate(url,p__49696);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__49704){var map__49706 = p__49704;var map__49706__$1 = ((cljs.core.seq_QMARK_.call(null,map__49706))?cljs.core.apply.call(null,cljs.core.hash_map,map__49706):map__49706);var opts = map__49706__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__49704 = null;if (arguments.length > 1) {
  p__49704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__49704);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__49707){
var url = cljs.core.first(arglist__49707);
var p__49704 = cljs.core.rest(arglist__49707);
return GET__delegate(url,p__49704);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__49708){var map__49710 = p__49708;var map__49710__$1 = ((cljs.core.seq_QMARK_.call(null,map__49710))?cljs.core.apply.call(null,cljs.core.hash_map,map__49710):map__49710);var opts = map__49710__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__49708 = null;if (arguments.length > 2) {
  p__49708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__49708);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__49711){
var url = cljs.core.first(arglist__49711);
arglist__49711 = cljs.core.next(arglist__49711);
var content = cljs.core.first(arglist__49711);
var p__49708 = cljs.core.rest(arglist__49711);
return POST__delegate(url,content,p__49708);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__49712){var map__49714 = p__49712;var map__49714__$1 = ((cljs.core.seq_QMARK_.call(null,map__49714))?cljs.core.apply.call(null,cljs.core.hash_map,map__49714):map__49714);var opts = map__49714__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__49712 = null;if (arguments.length > 2) {
  p__49712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__49712);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__49715){
var url = cljs.core.first(arglist__49715);
arglist__49715 = cljs.core.next(arglist__49715);
var content = cljs.core.first(arglist__49715);
var p__49712 = cljs.core.rest(arglist__49715);
return PUT__delegate(url,content,p__49712);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_49850){var state_val_49851 = (state_49850[(1)]);if((state_val_49851 === (7)))
{var inst_49807 = (state_49850[(7)]);var inst_49806 = (state_49850[(2)]);var inst_49807__$1 = cljs.core.nth.call(null,inst_49806,(0),null);var inst_49808 = cljs.core.nth.call(null,inst_49806,(1),null);var inst_49809 = cljs.core.sequential_QMARK_.call(null,inst_49807__$1);var state_49850__$1 = (function (){var statearr_49852 = state_49850;(statearr_49852[(8)] = inst_49808);
(statearr_49852[(7)] = inst_49807__$1);
return statearr_49852;
})();if(inst_49809)
{var statearr_49853_49888 = state_49850__$1;(statearr_49853_49888[(1)] = (8));
} else
{var statearr_49854_49889 = state_49850__$1;(statearr_49854_49889[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (20)))
{var inst_49807 = (state_49850[(7)]);var state_49850__$1 = state_49850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49850__$1,(23),inst_49807);
} else
{if((state_val_49851 === (1)))
{var state_49850__$1 = state_49850;var statearr_49855_49890 = state_49850__$1;(statearr_49855_49890[(2)] = null);
(statearr_49855_49890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (4)))
{var state_49850__$1 = state_49850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49850__$1,(7),ocomm);
} else
{if((state_val_49851 === (15)))
{var inst_49830 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49856_49891 = state_49850__$1;(statearr_49856_49891[(2)] = inst_49830);
(statearr_49856_49891[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (21)))
{var state_49850__$1 = state_49850;var statearr_49857_49892 = state_49850__$1;(statearr_49857_49892[(2)] = null);
(statearr_49857_49892[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (13)))
{var inst_49813 = (state_49850[(9)]);var state_49850__$1 = state_49850;var statearr_49858_49893 = state_49850__$1;(statearr_49858_49893[(2)] = inst_49813);
(statearr_49858_49893[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (22)))
{var inst_49839 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49859_49894 = state_49850__$1;(statearr_49859_49894[(2)] = inst_49839);
(statearr_49859_49894[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (6)))
{var inst_49846 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49860_49895 = state_49850__$1;(statearr_49860_49895[(2)] = inst_49846);
(statearr_49860_49895[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (17)))
{var state_49850__$1 = state_49850;var statearr_49861_49896 = state_49850__$1;(statearr_49861_49896[(2)] = null);
(statearr_49861_49896[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (3)))
{var inst_49848 = (state_49850[(2)]);var state_49850__$1 = state_49850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49850__$1,inst_49848);
} else
{if((state_val_49851 === (12)))
{var inst_49832 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49862_49897 = state_49850__$1;(statearr_49862_49897[(2)] = inst_49832);
(statearr_49862_49897[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (2)))
{var state_49850__$1 = state_49850;var statearr_49863_49898 = state_49850__$1;(statearr_49863_49898[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (23)))
{var inst_49836 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49865_49899 = state_49850__$1;(statearr_49865_49899[(2)] = inst_49836);
(statearr_49865_49899[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (19)))
{var inst_49823 = (state_49850[(2)]);var state_49850__$1 = state_49850;var statearr_49866_49900 = state_49850__$1;(statearr_49866_49900[(2)] = inst_49823);
(statearr_49866_49900[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (11)))
{var inst_49812 = (state_49850[(10)]);var inst_49815 = cljs.core.empty_QMARK_.call(null,inst_49812);var state_49850__$1 = state_49850;if(inst_49815)
{var statearr_49867_49901 = state_49850__$1;(statearr_49867_49901[(1)] = (13));
} else
{var statearr_49868_49902 = state_49850__$1;(statearr_49868_49902[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (9)))
{var inst_49807 = (state_49850[(7)]);var state_49850__$1 = state_49850;if(cljs.core.truth_(inst_49807))
{var statearr_49869_49903 = state_49850__$1;(statearr_49869_49903[(1)] = (20));
} else
{var statearr_49870_49904 = state_49850__$1;(statearr_49870_49904[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (5)))
{var state_49850__$1 = state_49850;var statearr_49871_49905 = state_49850__$1;(statearr_49871_49905[(2)] = null);
(statearr_49871_49905[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (14)))
{var inst_49812 = (state_49850[(10)]);var inst_49818 = cljs.core.rest.call(null,inst_49812);var inst_49819 = cljs.core.first.call(null,inst_49812);var state_49850__$1 = (function (){var statearr_49872 = state_49850;(statearr_49872[(11)] = inst_49818);
return statearr_49872;
})();if(cljs.core.truth_(inst_49819))
{var statearr_49873_49906 = state_49850__$1;(statearr_49873_49906[(1)] = (16));
} else
{var statearr_49874_49907 = state_49850__$1;(statearr_49874_49907[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (16)))
{var inst_49812 = (state_49850[(10)]);var inst_49821 = cljs.core.first.call(null,inst_49812);var state_49850__$1 = state_49850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49850__$1,(19),inst_49821);
} else
{if((state_val_49851 === (10)))
{var inst_49808 = (state_49850[(8)]);var inst_49841 = (state_49850[(2)]);var inst_49842 = cljs.core.apply.call(null,handler,inst_49841,inst_49808);var state_49850__$1 = (function (){var statearr_49875 = state_49850;(statearr_49875[(12)] = inst_49842);
return statearr_49875;
})();var statearr_49876_49908 = state_49850__$1;(statearr_49876_49908[(2)] = null);
(statearr_49876_49908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (18)))
{var inst_49813 = (state_49850[(9)]);var inst_49818 = (state_49850[(11)]);var inst_49826 = (state_49850[(2)]);var inst_49827 = cljs.core.conj.call(null,inst_49813,inst_49826);var inst_49812 = inst_49818;var inst_49813__$1 = inst_49827;var state_49850__$1 = (function (){var statearr_49877 = state_49850;(statearr_49877[(10)] = inst_49812);
(statearr_49877[(9)] = inst_49813__$1);
return statearr_49877;
})();var statearr_49878_49909 = state_49850__$1;(statearr_49878_49909[(2)] = null);
(statearr_49878_49909[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49851 === (8)))
{var inst_49807 = (state_49850[(7)]);var inst_49811 = cljs.core.PersistentVector.EMPTY;var inst_49812 = inst_49807;var inst_49813 = inst_49811;var state_49850__$1 = (function (){var statearr_49879 = state_49850;(statearr_49879[(10)] = inst_49812);
(statearr_49879[(9)] = inst_49813);
return statearr_49879;
})();var statearr_49880_49910 = state_49850__$1;(statearr_49880_49910[(2)] = null);
(statearr_49880_49910[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49884 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49884[(0)] = state_machine__5694__auto__);
(statearr_49884[(1)] = (1));
return statearr_49884;
});
var state_machine__5694__auto____1 = (function (state_49850){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49850);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49885){if((e49885 instanceof Object))
{var ex__5697__auto__ = e49885;var statearr_49886_49911 = state_49850;(statearr_49886_49911[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49850);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49885;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49912 = state_49850;
state_49850 = G__49912;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49850){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49887 = f__5709__auto__.call(null);(statearr_49887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__49915__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__49914 = rseq;var rcomm = cljs.core.nth.call(null,vec__49914,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__49914,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__49915 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49915__delegate.call(this,req_args);};
G__49915.cljs$lang$maxFixedArity = 0;
G__49915.cljs$lang$applyTo = (function (arglist__49916){
var req_args = cljs.core.seq(arglist__49916);
return G__49915__delegate(req_args);
});
G__49915.cljs$core$IFn$_invoke$arity$variadic = G__49915__delegate;
return G__49915;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_49934){var state_val_49935 = (state_49934[(1)]);if((state_val_49935 === (2)))
{var inst_49931 = (state_49934[(2)]);var inst_49932 = console.log(inst_49931);var state_49934__$1 = state_49934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49934__$1,inst_49932);
} else
{if((state_val_49935 === (1)))
{var state_49934__$1 = state_49934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49934__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49939 = [null,null,null,null,null,null,null];(statearr_49939[(0)] = state_machine__5694__auto__);
(statearr_49939[(1)] = (1));
return statearr_49939;
});
var state_machine__5694__auto____1 = (function (state_49934){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49940){if((e49940 instanceof Object))
{var ex__5697__auto__ = e49940;var statearr_49941_49943 = state_49934;(statearr_49941_49943[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49944 = state_49934;
state_49934 = G__49944;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49934){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_49942 = f__5709__auto__.call(null);(statearr_49942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__49945){
var f = cljs.core.first(arglist__49945);
var args = cljs.core.rest(arglist__49945);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__49948){var vec__49949 = p__49948;var k = cljs.core.nth.call(null,vec__49949,(0),null);var v = cljs.core.nth.call(null,vec__49949,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___49976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___49976,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49976,r){
return (function (state_49967){var state_val_49968 = (state_49967[(1)]);if((state_val_49968 === (2)))
{var inst_49964 = (state_49967[(2)]);var inst_49965 = cljs.core.reset_BANG_.call(null,r,inst_49964);var state_49967__$1 = state_49967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49967__$1,inst_49965);
} else
{if((state_val_49968 === (1)))
{var state_49967__$1 = state_49967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49967__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___49976,r))
;return ((function (switch__5693__auto__,c__5708__auto___49976,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49972 = [null,null,null,null,null,null,null];(statearr_49972[(0)] = state_machine__5694__auto__);
(statearr_49972[(1)] = (1));
return statearr_49972;
});
var state_machine__5694__auto____1 = (function (state_49967){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49973){if((e49973 instanceof Object))
{var ex__5697__auto__ = e49973;var statearr_49974_49977 = state_49967;(statearr_49974_49977[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49978 = state_49967;
state_49967 = G__49978;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49967){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49976,r))
})();var state__5710__auto__ = (function (){var statearr_49975 = f__5709__auto__.call(null);(statearr_49975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49976);
return statearr_49975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___49976,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__49979){
var id = cljs.core.first(arglist__49979);
arglist__49979 = cljs.core.next(arglist__49979);
var tolerance = cljs.core.first(arglist__49979);
var opts = cljs.core.rest(arglist__49979);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__49980){
var id = cljs.core.first(arglist__49980);
var opts = cljs.core.rest(arglist__49980);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__49981){
var ids = cljs.core.first(arglist__49981);
arglist__49981 = cljs.core.next(arglist__49981);
var tolerance = cljs.core.first(arglist__49981);
var opts = cljs.core.rest(arglist__49981);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__49982){var map__49984 = p__49982;var map__49984__$1 = ((cljs.core.seq_QMARK_.call(null,map__49984))?cljs.core.apply.call(null,cljs.core.hash_map,map__49984):map__49984);var opts = map__49984__$1;var boundaryline_ids = cljs.core.get.call(null,map__49984__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__49982 = null;if (arguments.length > 3) {
  p__49982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__49982);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__49985){
var collection_id = cljs.core.first(arglist__49985);
arglist__49985 = cljs.core.next(arglist__49985);
var tolerance = cljs.core.first(arglist__49985);
arglist__49985 = cljs.core.next(arglist__49985);
var bounds = cljs.core.first(arglist__49985);
var p__49982 = cljs.core.rest(arglist__49985);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__49982);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__49986){var vec__49988 = p__49986;var type_ids = cljs.core.nth.call(null,vec__49988,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__49986 = null;if (arguments.length > 6) {
  p__49986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__49986);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__49989){
var index = cljs.core.first(arglist__49989);
arglist__49989 = cljs.core.next(arglist__49989);
var type = cljs.core.first(arglist__49989);
arglist__49989 = cljs.core.next(arglist__49989);
var blcoll = cljs.core.first(arglist__49989);
arglist__49989 = cljs.core.next(arglist__49989);
var attr = cljs.core.first(arglist__49989);
arglist__49989 = cljs.core.next(arglist__49989);
var filter = cljs.core.first(arglist__49989);
arglist__49989 = cljs.core.next(arglist__49989);
var bounds = cljs.core.first(arglist__49989);
var p__49986 = cljs.core.rest(arglist__49989);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__49986);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__49990){var vec__49992 = p__49990;var type_ids = cljs.core.nth.call(null,vec__49992,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__49990 = null;if (arguments.length > 5) {
  p__49990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__49990);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__49993){
var index = cljs.core.first(arglist__49993);
arglist__49993 = cljs.core.next(arglist__49993);
var type = cljs.core.first(arglist__49993);
arglist__49993 = cljs.core.next(arglist__49993);
var statsattrs = cljs.core.first(arglist__49993);
arglist__49993 = cljs.core.next(arglist__49993);
var filter = cljs.core.first(arglist__49993);
arglist__49993 = cljs.core.next(arglist__49993);
var bounds = cljs.core.first(arglist__49993);
var p__49990 = cljs.core.rest(arglist__49993);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__49990);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__49994){var vec__49996 = p__49994;var type_ids = cljs.core.nth.call(null,vec__49996,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__49994 = null;if (arguments.length > 7) {
  p__49994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__49994);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__49997){
var index = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var type = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var location_attr = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var attrs = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var max_count = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var filter = cljs.core.first(arglist__49997);
arglist__49997 = cljs.core.next(arglist__49997);
var bounds = cljs.core.first(arglist__49997);
var p__49994 = cljs.core.rest(arglist__49997);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__49994);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__49998){var vec__50000 = p__49998;var type_ids = cljs.core.nth.call(null,vec__50000,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__49998 = null;if (arguments.length > 7) {
  p__49998 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__49998);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__50001){
var index = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var type = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var filter_spec = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var bounds = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var sort_spec = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var from = cljs.core.first(arglist__50001);
arglist__50001 = cljs.core.next(arglist__50001);
var size = cljs.core.first(arglist__50001);
var p__49998 = cljs.core.rest(arglist__50001);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__49998);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;

//# sourceMappingURL=api.js.map