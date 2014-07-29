// Compiled by ClojureScript 0.0-2268
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
var AJAX__delegate = function (url,p__46570){var map__46574 = p__46570;var map__46574__$1 = ((cljs.core.seq_QMARK_.call(null,map__46574))?cljs.core.apply.call(null,cljs.core.hash_map,map__46574):map__46574);var opts = map__46574__$1;var content = cljs.core.get.call(null,map__46574__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__46574__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__46574__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__46574,map__46574__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__46574,map__46574__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__46574,map__46574__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__46574,map__46574__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__46576 = method;var G__46576__$1 = (((G__46576 == null))?null:cljs.core.name.call(null,G__46576));var G__46576__$2 = (((G__46576__$1 == null))?null:clojure.string.upper_case.call(null,G__46576__$1));return G__46576__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__46570 = null;if (arguments.length > 1) {
  p__46570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__46570);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__46577){
var url = cljs.core.first(arglist__46577);
var p__46570 = cljs.core.rest(arglist__46577);
return AJAX__delegate(url,p__46570);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__46578){var map__46580 = p__46578;var map__46580__$1 = ((cljs.core.seq_QMARK_.call(null,map__46580))?cljs.core.apply.call(null,cljs.core.hash_map,map__46580):map__46580);var opts = map__46580__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__46578 = null;if (arguments.length > 1) {
  p__46578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__46578);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__46581){
var url = cljs.core.first(arglist__46581);
var p__46578 = cljs.core.rest(arglist__46581);
return GET__delegate(url,p__46578);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__46582){var map__46584 = p__46582;var map__46584__$1 = ((cljs.core.seq_QMARK_.call(null,map__46584))?cljs.core.apply.call(null,cljs.core.hash_map,map__46584):map__46584);var opts = map__46584__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__46582 = null;if (arguments.length > 2) {
  p__46582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__46582);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__46585){
var url = cljs.core.first(arglist__46585);
arglist__46585 = cljs.core.next(arglist__46585);
var content = cljs.core.first(arglist__46585);
var p__46582 = cljs.core.rest(arglist__46585);
return POST__delegate(url,content,p__46582);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__46586){var map__46588 = p__46586;var map__46588__$1 = ((cljs.core.seq_QMARK_.call(null,map__46588))?cljs.core.apply.call(null,cljs.core.hash_map,map__46588):map__46588);var opts = map__46588__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__46586 = null;if (arguments.length > 2) {
  p__46586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__46586);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__46589){
var url = cljs.core.first(arglist__46589);
arglist__46589 = cljs.core.next(arglist__46589);
var content = cljs.core.first(arglist__46589);
var p__46586 = cljs.core.rest(arglist__46589);
return PUT__delegate(url,content,p__46586);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_46722){var state_val_46723 = (state_46722[(1)]);if((state_val_46723 === (7)))
{var inst_46680 = (state_46722[(7)]);var inst_46679 = (state_46722[(2)]);var inst_46680__$1 = cljs.core.nth.call(null,inst_46679,(0),null);var inst_46681 = cljs.core.nth.call(null,inst_46679,(1),null);var inst_46682 = cljs.core.sequential_QMARK_.call(null,inst_46680__$1);var state_46722__$1 = (function (){var statearr_46724 = state_46722;(statearr_46724[(7)] = inst_46680__$1);
(statearr_46724[(8)] = inst_46681);
return statearr_46724;
})();if(inst_46682)
{var statearr_46725_46760 = state_46722__$1;(statearr_46725_46760[(1)] = (8));
} else
{var statearr_46726_46761 = state_46722__$1;(statearr_46726_46761[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (20)))
{var inst_46680 = (state_46722[(7)]);var state_46722__$1 = state_46722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46722__$1,(23),inst_46680);
} else
{if((state_val_46723 === (1)))
{var state_46722__$1 = state_46722;var statearr_46727_46762 = state_46722__$1;(statearr_46727_46762[(2)] = null);
(statearr_46727_46762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (4)))
{var state_46722__$1 = state_46722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46722__$1,(7),ocomm);
} else
{if((state_val_46723 === (15)))
{var inst_46702 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46728_46763 = state_46722__$1;(statearr_46728_46763[(2)] = inst_46702);
(statearr_46728_46763[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (21)))
{var state_46722__$1 = state_46722;var statearr_46729_46764 = state_46722__$1;(statearr_46729_46764[(2)] = null);
(statearr_46729_46764[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (13)))
{var inst_46685 = (state_46722[(9)]);var state_46722__$1 = state_46722;var statearr_46730_46765 = state_46722__$1;(statearr_46730_46765[(2)] = inst_46685);
(statearr_46730_46765[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (22)))
{var inst_46711 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46731_46766 = state_46722__$1;(statearr_46731_46766[(2)] = inst_46711);
(statearr_46731_46766[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (6)))
{var inst_46718 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46732_46767 = state_46722__$1;(statearr_46732_46767[(2)] = inst_46718);
(statearr_46732_46767[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (17)))
{var state_46722__$1 = state_46722;var statearr_46733_46768 = state_46722__$1;(statearr_46733_46768[(2)] = null);
(statearr_46733_46768[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (3)))
{var inst_46720 = (state_46722[(2)]);var state_46722__$1 = state_46722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46722__$1,inst_46720);
} else
{if((state_val_46723 === (12)))
{var inst_46704 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46734_46769 = state_46722__$1;(statearr_46734_46769[(2)] = inst_46704);
(statearr_46734_46769[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (2)))
{var state_46722__$1 = state_46722;if(true)
{var statearr_46735_46770 = state_46722__$1;(statearr_46735_46770[(1)] = (4));
} else
{var statearr_46736_46771 = state_46722__$1;(statearr_46736_46771[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (23)))
{var inst_46708 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46737_46772 = state_46722__$1;(statearr_46737_46772[(2)] = inst_46708);
(statearr_46737_46772[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (19)))
{var inst_46695 = (state_46722[(2)]);var state_46722__$1 = state_46722;var statearr_46738_46773 = state_46722__$1;(statearr_46738_46773[(2)] = inst_46695);
(statearr_46738_46773[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (11)))
{var inst_46684 = (state_46722[(10)]);var inst_46687 = cljs.core.empty_QMARK_.call(null,inst_46684);var state_46722__$1 = state_46722;if(inst_46687)
{var statearr_46739_46774 = state_46722__$1;(statearr_46739_46774[(1)] = (13));
} else
{var statearr_46740_46775 = state_46722__$1;(statearr_46740_46775[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (9)))
{var inst_46680 = (state_46722[(7)]);var state_46722__$1 = state_46722;if(cljs.core.truth_(inst_46680))
{var statearr_46741_46776 = state_46722__$1;(statearr_46741_46776[(1)] = (20));
} else
{var statearr_46742_46777 = state_46722__$1;(statearr_46742_46777[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (5)))
{var state_46722__$1 = state_46722;var statearr_46743_46778 = state_46722__$1;(statearr_46743_46778[(2)] = null);
(statearr_46743_46778[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (14)))
{var inst_46684 = (state_46722[(10)]);var inst_46690 = cljs.core.rest.call(null,inst_46684);var inst_46691 = cljs.core.first.call(null,inst_46684);var state_46722__$1 = (function (){var statearr_46744 = state_46722;(statearr_46744[(11)] = inst_46690);
return statearr_46744;
})();if(cljs.core.truth_(inst_46691))
{var statearr_46745_46779 = state_46722__$1;(statearr_46745_46779[(1)] = (16));
} else
{var statearr_46746_46780 = state_46722__$1;(statearr_46746_46780[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (16)))
{var inst_46684 = (state_46722[(10)]);var inst_46693 = cljs.core.first.call(null,inst_46684);var state_46722__$1 = state_46722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46722__$1,(19),inst_46693);
} else
{if((state_val_46723 === (10)))
{var inst_46681 = (state_46722[(8)]);var inst_46713 = (state_46722[(2)]);var inst_46714 = cljs.core.apply.call(null,handler,inst_46713,inst_46681);var state_46722__$1 = (function (){var statearr_46747 = state_46722;(statearr_46747[(12)] = inst_46714);
return statearr_46747;
})();var statearr_46748_46781 = state_46722__$1;(statearr_46748_46781[(2)] = null);
(statearr_46748_46781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (18)))
{var inst_46690 = (state_46722[(11)]);var inst_46685 = (state_46722[(9)]);var inst_46698 = (state_46722[(2)]);var inst_46699 = cljs.core.conj.call(null,inst_46685,inst_46698);var inst_46684 = inst_46690;var inst_46685__$1 = inst_46699;var state_46722__$1 = (function (){var statearr_46749 = state_46722;(statearr_46749[(9)] = inst_46685__$1);
(statearr_46749[(10)] = inst_46684);
return statearr_46749;
})();var statearr_46750_46782 = state_46722__$1;(statearr_46750_46782[(2)] = null);
(statearr_46750_46782[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46723 === (8)))
{var inst_46680 = (state_46722[(7)]);var inst_46684 = inst_46680;var inst_46685 = cljs.core.PersistentVector.EMPTY;var state_46722__$1 = (function (){var statearr_46751 = state_46722;(statearr_46751[(9)] = inst_46685);
(statearr_46751[(10)] = inst_46684);
return statearr_46751;
})();var statearr_46752_46783 = state_46722__$1;(statearr_46752_46783[(2)] = null);
(statearr_46752_46783[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46756 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46756[(0)] = state_machine__5679__auto__);
(statearr_46756[(1)] = (1));
return statearr_46756;
});
var state_machine__5679__auto____1 = (function (state_46722){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46757){if((e46757 instanceof Object))
{var ex__5682__auto__ = e46757;var statearr_46758_46784 = state_46722;(statearr_46758_46784[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46785 = state_46722;
state_46722 = G__46785;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46722){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_46759 = f__5694__auto__.call(null);(statearr_46759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var G__46788__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__46787 = rseq;var rcomm = cljs.core.nth.call(null,vec__46787,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__46787,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__46788 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46788__delegate.call(this,req_args);};
G__46788.cljs$lang$maxFixedArity = 0;
G__46788.cljs$lang$applyTo = (function (arglist__46789){
var req_args = cljs.core.seq(arglist__46789);
return G__46788__delegate(req_args);
});
G__46788.cljs$core$IFn$_invoke$arity$variadic = G__46788__delegate;
return G__46788;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_46807){var state_val_46808 = (state_46807[(1)]);if((state_val_46808 === (2)))
{var inst_46804 = (state_46807[(2)]);var inst_46805 = console.log(inst_46804);var state_46807__$1 = state_46807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46807__$1,inst_46805);
} else
{if((state_val_46808 === (1)))
{var state_46807__$1 = state_46807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46807__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46812 = [null,null,null,null,null,null,null];(statearr_46812[(0)] = state_machine__5679__auto__);
(statearr_46812[(1)] = (1));
return statearr_46812;
});
var state_machine__5679__auto____1 = (function (state_46807){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46807);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46813){if((e46813 instanceof Object))
{var ex__5682__auto__ = e46813;var statearr_46814_46816 = state_46807;(statearr_46814_46816[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46817 = state_46807;
state_46807 = G__46817;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46807){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_46815 = f__5694__auto__.call(null);(statearr_46815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__46818){
var f = cljs.core.first(arglist__46818);
var args = cljs.core.rest(arglist__46818);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__46821){var vec__46822 = p__46821;var k = cljs.core.nth.call(null,vec__46822,(0),null);var v = cljs.core.nth.call(null,vec__46822,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___46849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___46849,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___46849,r){
return (function (state_46840){var state_val_46841 = (state_46840[(1)]);if((state_val_46841 === (2)))
{var inst_46837 = (state_46840[(2)]);var inst_46838 = cljs.core.reset_BANG_.call(null,r,inst_46837);var state_46840__$1 = state_46840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46840__$1,inst_46838);
} else
{if((state_val_46841 === (1)))
{var state_46840__$1 = state_46840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46840__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___46849,r))
;return ((function (switch__5678__auto__,c__5693__auto___46849,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46845 = [null,null,null,null,null,null,null];(statearr_46845[(0)] = state_machine__5679__auto__);
(statearr_46845[(1)] = (1));
return statearr_46845;
});
var state_machine__5679__auto____1 = (function (state_46840){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46846){if((e46846 instanceof Object))
{var ex__5682__auto__ = e46846;var statearr_46847_46850 = state_46840;(statearr_46847_46850[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46851 = state_46840;
state_46840 = G__46851;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46840){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___46849,r))
})();var state__5695__auto__ = (function (){var statearr_46848 = f__5694__auto__.call(null);(statearr_46848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___46849);
return statearr_46848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___46849,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__46852){
var id = cljs.core.first(arglist__46852);
arglist__46852 = cljs.core.next(arglist__46852);
var tolerance = cljs.core.first(arglist__46852);
var opts = cljs.core.rest(arglist__46852);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__46853){
var id = cljs.core.first(arglist__46853);
var opts = cljs.core.rest(arglist__46853);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__46854){
var ids = cljs.core.first(arglist__46854);
arglist__46854 = cljs.core.next(arglist__46854);
var tolerance = cljs.core.first(arglist__46854);
var opts = cljs.core.rest(arglist__46854);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__46855){var map__46857 = p__46855;var map__46857__$1 = ((cljs.core.seq_QMARK_.call(null,map__46857))?cljs.core.apply.call(null,cljs.core.hash_map,map__46857):map__46857);var opts = map__46857__$1;var boundaryline_ids = cljs.core.get.call(null,map__46857__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__46855 = null;if (arguments.length > 3) {
  p__46855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__46855);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__46858){
var collection_id = cljs.core.first(arglist__46858);
arglist__46858 = cljs.core.next(arglist__46858);
var tolerance = cljs.core.first(arglist__46858);
arglist__46858 = cljs.core.next(arglist__46858);
var bounds = cljs.core.first(arglist__46858);
var p__46855 = cljs.core.rest(arglist__46858);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__46855);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__46859){var vec__46861 = p__46859;var type_ids = cljs.core.nth.call(null,vec__46861,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__46859 = null;if (arguments.length > 6) {
  p__46859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__46859);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__46862){
var index = cljs.core.first(arglist__46862);
arglist__46862 = cljs.core.next(arglist__46862);
var type = cljs.core.first(arglist__46862);
arglist__46862 = cljs.core.next(arglist__46862);
var blcoll = cljs.core.first(arglist__46862);
arglist__46862 = cljs.core.next(arglist__46862);
var attr = cljs.core.first(arglist__46862);
arglist__46862 = cljs.core.next(arglist__46862);
var filter = cljs.core.first(arglist__46862);
arglist__46862 = cljs.core.next(arglist__46862);
var bounds = cljs.core.first(arglist__46862);
var p__46859 = cljs.core.rest(arglist__46862);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__46859);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__46863){var vec__46865 = p__46863;var type_ids = cljs.core.nth.call(null,vec__46865,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__46863 = null;if (arguments.length > 0) {
  p__46863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__46863);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__46866){
var p__46863 = cljs.core.seq(arglist__46866);
return portfolio_company_sites__delegate(p__46863);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__46867){var vec__46869 = p__46867;var type_ids = cljs.core.nth.call(null,vec__46869,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__46867 = null;if (arguments.length > 0) {
  p__46867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__46867);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__46870){
var p__46867 = cljs.core.seq(arglist__46870);
return portfolio_company_sites_by_company__delegate(p__46867);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__46871){var vec__46873 = p__46871;var type_ids = cljs.core.nth.call(null,vec__46873,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__46871 = null;if (arguments.length > 0) {
  p__46871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__46871);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__46874){
var p__46871 = cljs.core.seq(arglist__46874);
return portfolio_company_locations__delegate(p__46871);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__46875){var vec__46877 = p__46875;var type_ids = cljs.core.nth.call(null,vec__46877,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__46875 = null;if (arguments.length > 0) {
  p__46875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__46875);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__46878){
var p__46875 = cljs.core.seq(arglist__46878);
return portfolio_company_site_stats__delegate(p__46875);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__46879){var vec__46881 = p__46879;var type_ids = cljs.core.nth.call(null,vec__46881,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__46879 = null;if (arguments.length > 0) {
  p__46879 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__46879);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__46882){
var p__46879 = cljs.core.seq(arglist__46882);
return portfolio_company_site_account_timelines__delegate(p__46879);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__46883){var vec__46885 = p__46883;var type_ids = cljs.core.nth.call(null,vec__46885,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__46883 = null;if (arguments.length > 0) {
  p__46883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__46883);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__46886){
var p__46883 = cljs.core.seq(arglist__46886);
return investment_account_timelines__delegate(p__46883);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__46887){var vec__46889 = p__46887;var type_ids = cljs.core.nth.call(null,vec__46889,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__46887 = null;if (arguments.length > 0) {
  p__46887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__46887);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__46890){
var p__46887 = cljs.core.seq(arglist__46890);
return investment_stats__delegate(p__46887);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__46891){var vec__46893 = p__46891;var type_ids = cljs.core.nth.call(null,vec__46893,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__46891 = null;if (arguments.length > 0) {
  p__46891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__46891);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__46894){
var p__46891 = cljs.core.seq(arglist__46894);
return investment_aggs__delegate(p__46891);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__46895){var vec__46897 = p__46895;var type_ids = cljs.core.nth.call(null,vec__46897,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__46895 = null;if (arguments.length > 0) {
  p__46895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__46895);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__46898){
var p__46895 = cljs.core.seq(arglist__46898);
return investments__delegate(p__46895);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map