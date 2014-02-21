// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13722 = (function (f,fn_handler,meta13723){
this.f = f;
this.fn_handler = fn_handler;
this.meta13723 = meta13723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13722.cljs$lang$type = true;
cljs.core.async.t13722.cljs$lang$ctorStr = "cljs.core.async/t13722";
cljs.core.async.t13722.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13722");
});
cljs.core.async.t13722.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13724){var self__ = this;
var _13724__$1 = this;return self__.meta13723;
});
cljs.core.async.t13722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13724,meta13723__$1){var self__ = this;
var _13724__$1 = this;return (new cljs.core.async.t13722(self__.f,self__.fn_handler,meta13723__$1));
});
cljs.core.async.__GT_t13722 = (function __GT_t13722(f__$1,fn_handler__$1,meta13723){return (new cljs.core.async.t13722(f__$1,fn_handler__$1,meta13723));
});
}
return (new cljs.core.async.t13722(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13726 = buff;if(G__13726)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13726.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13726.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13726);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13727 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13727);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13727);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13728 = n;var x_13729 = 0;while(true){
if((x_13729 < n__4248__auto___13728))
{(a[x_13729] = 0);
{
var G__13730 = (x_13729 + 1);
x_13729 = G__13730;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13731 = (i + 1);
i = G__13731;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13735 = (function (flag,alt_flag,meta13736){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13735.cljs$lang$type = true;
cljs.core.async.t13735.cljs$lang$ctorStr = "cljs.core.async/t13735";
cljs.core.async.t13735.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13735");
});
cljs.core.async.t13735.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13737){var self__ = this;
var _13737__$1 = this;return self__.meta13736;
});
cljs.core.async.t13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13737,meta13736__$1){var self__ = this;
var _13737__$1 = this;return (new cljs.core.async.t13735(self__.flag,self__.alt_flag,meta13736__$1));
});
cljs.core.async.__GT_t13735 = (function __GT_t13735(flag__$1,alt_flag__$1,meta13736){return (new cljs.core.async.t13735(flag__$1,alt_flag__$1,meta13736));
});
}
return (new cljs.core.async.t13735(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13741 = (function (cb,flag,alt_handler,meta13742){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13742 = meta13742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13741.cljs$lang$type = true;
cljs.core.async.t13741.cljs$lang$ctorStr = "cljs.core.async/t13741";
cljs.core.async.t13741.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13741");
});
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13743){var self__ = this;
var _13743__$1 = this;return self__.meta13742;
});
cljs.core.async.t13741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13743,meta13742__$1){var self__ = this;
var _13743__$1 = this;return (new cljs.core.async.t13741(self__.cb,self__.flag,self__.alt_handler,meta13742__$1));
});
cljs.core.async.__GT_t13741 = (function __GT_t13741(cb__$1,flag__$1,alt_handler__$1,meta13742){return (new cljs.core.async.t13741(cb__$1,flag__$1,alt_handler__$1,meta13742));
});
}
return (new cljs.core.async.t13741(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13744_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13744_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13745 = (i + 1);
i = G__13745;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13746){var map__13748 = p__13746;var map__13748__$1 = ((cljs.core.seq_QMARK_.call(null,map__13748))?cljs.core.apply.call(null,cljs.core.hash_map,map__13748):map__13748);var opts = map__13748__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13746 = null;if (arguments.length > 1) {
  p__13746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13746);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13749){
var ports = cljs.core.first(arglist__13749);
var p__13746 = cljs.core.rest(arglist__13749);
return alts_BANG___delegate(ports,p__13746);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13757 = (function (ch,f,map_LT_,meta13758){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13758 = meta13758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13757.cljs$lang$type = true;
cljs.core.async.t13757.cljs$lang$ctorStr = "cljs.core.async/t13757";
cljs.core.async.t13757.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13757");
});
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13760 = (function (fn1,_,meta13758,ch,f,map_LT_,meta13761){
this.fn1 = fn1;
this._ = _;
this.meta13758 = meta13758;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13761 = meta13761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13760.cljs$lang$type = true;
cljs.core.async.t13760.cljs$lang$ctorStr = "cljs.core.async/t13760";
cljs.core.async.t13760.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13760");
});
cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13750_SHARP_){return f1.call(null,(((p1__13750_SHARP_ == null))?null:self__.f.call(null,p1__13750_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13762){var self__ = this;
var _13762__$1 = this;return self__.meta13761;
});
cljs.core.async.t13760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13762,meta13761__$1){var self__ = this;
var _13762__$1 = this;return (new cljs.core.async.t13760(self__.fn1,self__._,self__.meta13758,self__.ch,self__.f,self__.map_LT_,meta13761__$1));
});
cljs.core.async.__GT_t13760 = (function __GT_t13760(fn1__$1,___$2,meta13758__$1,ch__$2,f__$2,map_LT___$2,meta13761){return (new cljs.core.async.t13760(fn1__$1,___$2,meta13758__$1,ch__$2,f__$2,map_LT___$2,meta13761));
});
}
return (new cljs.core.async.t13760(fn1,___$1,self__.meta13758,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13759){var self__ = this;
var _13759__$1 = this;return self__.meta13758;
});
cljs.core.async.t13757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13759,meta13758__$1){var self__ = this;
var _13759__$1 = this;return (new cljs.core.async.t13757(self__.ch,self__.f,self__.map_LT_,meta13758__$1));
});
cljs.core.async.__GT_t13757 = (function __GT_t13757(ch__$1,f__$1,map_LT___$1,meta13758){return (new cljs.core.async.t13757(ch__$1,f__$1,map_LT___$1,meta13758));
});
}
return (new cljs.core.async.t13757(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13766 = (function (ch,f,map_GT_,meta13767){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13767 = meta13767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13766.cljs$lang$type = true;
cljs.core.async.t13766.cljs$lang$ctorStr = "cljs.core.async/t13766";
cljs.core.async.t13766.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13766");
});
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13768){var self__ = this;
var _13768__$1 = this;return self__.meta13767;
});
cljs.core.async.t13766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13768,meta13767__$1){var self__ = this;
var _13768__$1 = this;return (new cljs.core.async.t13766(self__.ch,self__.f,self__.map_GT_,meta13767__$1));
});
cljs.core.async.__GT_t13766 = (function __GT_t13766(ch__$1,f__$1,map_GT___$1,meta13767){return (new cljs.core.async.t13766(ch__$1,f__$1,map_GT___$1,meta13767));
});
}
return (new cljs.core.async.t13766(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13772 = (function (ch,p,filter_GT_,meta13773){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13773 = meta13773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13772.cljs$lang$type = true;
cljs.core.async.t13772.cljs$lang$ctorStr = "cljs.core.async/t13772";
cljs.core.async.t13772.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13772");
});
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13774){var self__ = this;
var _13774__$1 = this;return self__.meta13773;
});
cljs.core.async.t13772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13774,meta13773__$1){var self__ = this;
var _13774__$1 = this;return (new cljs.core.async.t13772(self__.ch,self__.p,self__.filter_GT_,meta13773__$1));
});
cljs.core.async.__GT_t13772 = (function __GT_t13772(ch__$1,p__$1,filter_GT___$1,meta13773){return (new cljs.core.async.t13772(ch__$1,p__$1,filter_GT___$1,meta13773));
});
}
return (new cljs.core.async.t13772(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13836){var state_val_13837 = (state_13836[1]);if((state_val_13837 === 1))
{var state_13836__$1 = state_13836;var statearr_13838_13858 = state_13836__$1;(statearr_13838_13858[2] = null);
(statearr_13838_13858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 2))
{var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13836__$1,4,ch);
} else
{if((state_val_13837 === 3))
{var inst_13834 = (state_13836[2]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13836__$1,inst_13834);
} else
{if((state_val_13837 === 4))
{var inst_13818 = (state_13836[7]);var inst_13818__$1 = (state_13836[2]);var inst_13819 = (inst_13818__$1 == null);var state_13836__$1 = (function (){var statearr_13839 = state_13836;(statearr_13839[7] = inst_13818__$1);
return statearr_13839;
})();if(cljs.core.truth_(inst_13819))
{var statearr_13840_13859 = state_13836__$1;(statearr_13840_13859[1] = 5);
} else
{var statearr_13841_13860 = state_13836__$1;(statearr_13841_13860[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 5))
{var inst_13821 = cljs.core.async.close_BANG_.call(null,out);var state_13836__$1 = state_13836;var statearr_13842_13861 = state_13836__$1;(statearr_13842_13861[2] = inst_13821);
(statearr_13842_13861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 6))
{var inst_13818 = (state_13836[7]);var inst_13823 = p.call(null,inst_13818);var state_13836__$1 = state_13836;if(cljs.core.truth_(inst_13823))
{var statearr_13843_13862 = state_13836__$1;(statearr_13843_13862[1] = 8);
} else
{var statearr_13844_13863 = state_13836__$1;(statearr_13844_13863[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 7))
{var inst_13832 = (state_13836[2]);var state_13836__$1 = state_13836;var statearr_13845_13864 = state_13836__$1;(statearr_13845_13864[2] = inst_13832);
(statearr_13845_13864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 8))
{var inst_13818 = (state_13836[7]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13836__$1,11,out,inst_13818);
} else
{if((state_val_13837 === 9))
{var state_13836__$1 = state_13836;var statearr_13846_13865 = state_13836__$1;(statearr_13846_13865[2] = null);
(statearr_13846_13865[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 10))
{var inst_13829 = (state_13836[2]);var state_13836__$1 = (function (){var statearr_13847 = state_13836;(statearr_13847[8] = inst_13829);
return statearr_13847;
})();var statearr_13848_13866 = state_13836__$1;(statearr_13848_13866[2] = null);
(statearr_13848_13866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 11))
{var inst_13826 = (state_13836[2]);var state_13836__$1 = state_13836;var statearr_13849_13867 = state_13836__$1;(statearr_13849_13867[2] = inst_13826);
(statearr_13849_13867[1] = 10);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13853 = [null,null,null,null,null,null,null,null,null];(statearr_13853[0] = state_machine__5507__auto__);
(statearr_13853[1] = 1);
return statearr_13853;
});
var state_machine__5507__auto____1 = (function (state_13836){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13836);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13854){if((e13854 instanceof Object))
{var ex__5510__auto__ = e13854;var statearr_13855_13868 = state_13836;(statearr_13855_13868[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13836);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13869 = state_13836;
state_13836 = G__13869;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13836){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13856 = f__5522__auto__.call(null);(statearr_13856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13857);
return statearr_13856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14021){var state_val_14022 = (state_14021[1]);if((state_val_14022 === 1))
{var state_14021__$1 = state_14021;var statearr_14023_14060 = state_14021__$1;(statearr_14023_14060[2] = null);
(statearr_14023_14060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 2))
{var state_14021__$1 = state_14021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14021__$1,4,in$);
} else
{if((state_val_14022 === 3))
{var inst_14019 = (state_14021[2]);var state_14021__$1 = state_14021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14021__$1,inst_14019);
} else
{if((state_val_14022 === 4))
{var inst_13967 = (state_14021[7]);var inst_13967__$1 = (state_14021[2]);var inst_13968 = (inst_13967__$1 == null);var state_14021__$1 = (function (){var statearr_14024 = state_14021;(statearr_14024[7] = inst_13967__$1);
return statearr_14024;
})();if(cljs.core.truth_(inst_13968))
{var statearr_14025_14061 = state_14021__$1;(statearr_14025_14061[1] = 5);
} else
{var statearr_14026_14062 = state_14021__$1;(statearr_14026_14062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 5))
{var inst_13970 = cljs.core.async.close_BANG_.call(null,out);var state_14021__$1 = state_14021;var statearr_14027_14063 = state_14021__$1;(statearr_14027_14063[2] = inst_13970);
(statearr_14027_14063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 6))
{var inst_13967 = (state_14021[7]);var inst_13972 = f.call(null,inst_13967);var inst_13977 = cljs.core.seq.call(null,inst_13972);var inst_13978 = inst_13977;var inst_13979 = null;var inst_13980 = 0;var inst_13981 = 0;var state_14021__$1 = (function (){var statearr_14028 = state_14021;(statearr_14028[8] = inst_13979);
(statearr_14028[9] = inst_13978);
(statearr_14028[10] = inst_13980);
(statearr_14028[11] = inst_13981);
return statearr_14028;
})();var statearr_14029_14064 = state_14021__$1;(statearr_14029_14064[2] = null);
(statearr_14029_14064[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 7))
{var inst_14017 = (state_14021[2]);var state_14021__$1 = state_14021;var statearr_14030_14065 = state_14021__$1;(statearr_14030_14065[2] = inst_14017);
(statearr_14030_14065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 8))
{var inst_13980 = (state_14021[10]);var inst_13981 = (state_14021[11]);var inst_13983 = (inst_13981 < inst_13980);var inst_13984 = inst_13983;var state_14021__$1 = state_14021;if(cljs.core.truth_(inst_13984))
{var statearr_14031_14066 = state_14021__$1;(statearr_14031_14066[1] = 10);
} else
{var statearr_14032_14067 = state_14021__$1;(statearr_14032_14067[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 9))
{var inst_14014 = (state_14021[2]);var state_14021__$1 = (function (){var statearr_14033 = state_14021;(statearr_14033[12] = inst_14014);
return statearr_14033;
})();var statearr_14034_14068 = state_14021__$1;(statearr_14034_14068[2] = null);
(statearr_14034_14068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 10))
{var inst_13979 = (state_14021[8]);var inst_13981 = (state_14021[11]);var inst_13986 = cljs.core._nth.call(null,inst_13979,inst_13981);var state_14021__$1 = state_14021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14021__$1,13,out,inst_13986);
} else
{if((state_val_14022 === 11))
{var inst_13992 = (state_14021[13]);var inst_13978 = (state_14021[9]);var inst_13992__$1 = cljs.core.seq.call(null,inst_13978);var state_14021__$1 = (function (){var statearr_14038 = state_14021;(statearr_14038[13] = inst_13992__$1);
return statearr_14038;
})();if(inst_13992__$1)
{var statearr_14039_14069 = state_14021__$1;(statearr_14039_14069[1] = 14);
} else
{var statearr_14040_14070 = state_14021__$1;(statearr_14040_14070[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 12))
{var inst_14012 = (state_14021[2]);var state_14021__$1 = state_14021;var statearr_14041_14071 = state_14021__$1;(statearr_14041_14071[2] = inst_14012);
(statearr_14041_14071[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 13))
{var inst_13979 = (state_14021[8]);var inst_13978 = (state_14021[9]);var inst_13980 = (state_14021[10]);var inst_13981 = (state_14021[11]);var inst_13988 = (state_14021[2]);var inst_13989 = (inst_13981 + 1);var tmp14035 = inst_13979;var tmp14036 = inst_13978;var tmp14037 = inst_13980;var inst_13978__$1 = tmp14036;var inst_13979__$1 = tmp14035;var inst_13980__$1 = tmp14037;var inst_13981__$1 = inst_13989;var state_14021__$1 = (function (){var statearr_14042 = state_14021;(statearr_14042[8] = inst_13979__$1);
(statearr_14042[14] = inst_13988);
(statearr_14042[9] = inst_13978__$1);
(statearr_14042[10] = inst_13980__$1);
(statearr_14042[11] = inst_13981__$1);
return statearr_14042;
})();var statearr_14043_14072 = state_14021__$1;(statearr_14043_14072[2] = null);
(statearr_14043_14072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 14))
{var inst_13992 = (state_14021[13]);var inst_13994 = cljs.core.chunked_seq_QMARK_.call(null,inst_13992);var state_14021__$1 = state_14021;if(inst_13994)
{var statearr_14044_14073 = state_14021__$1;(statearr_14044_14073[1] = 17);
} else
{var statearr_14045_14074 = state_14021__$1;(statearr_14045_14074[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 15))
{var state_14021__$1 = state_14021;var statearr_14046_14075 = state_14021__$1;(statearr_14046_14075[2] = null);
(statearr_14046_14075[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 16))
{var inst_14010 = (state_14021[2]);var state_14021__$1 = state_14021;var statearr_14047_14076 = state_14021__$1;(statearr_14047_14076[2] = inst_14010);
(statearr_14047_14076[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 17))
{var inst_13992 = (state_14021[13]);var inst_13996 = cljs.core.chunk_first.call(null,inst_13992);var inst_13997 = cljs.core.chunk_rest.call(null,inst_13992);var inst_13998 = cljs.core.count.call(null,inst_13996);var inst_13978 = inst_13997;var inst_13979 = inst_13996;var inst_13980 = inst_13998;var inst_13981 = 0;var state_14021__$1 = (function (){var statearr_14048 = state_14021;(statearr_14048[8] = inst_13979);
(statearr_14048[9] = inst_13978);
(statearr_14048[10] = inst_13980);
(statearr_14048[11] = inst_13981);
return statearr_14048;
})();var statearr_14049_14077 = state_14021__$1;(statearr_14049_14077[2] = null);
(statearr_14049_14077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 18))
{var inst_13992 = (state_14021[13]);var inst_14001 = cljs.core.first.call(null,inst_13992);var state_14021__$1 = state_14021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14021__$1,20,out,inst_14001);
} else
{if((state_val_14022 === 19))
{var inst_14007 = (state_14021[2]);var state_14021__$1 = state_14021;var statearr_14050_14078 = state_14021__$1;(statearr_14050_14078[2] = inst_14007);
(statearr_14050_14078[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14022 === 20))
{var inst_13992 = (state_14021[13]);var inst_14003 = (state_14021[2]);var inst_14004 = cljs.core.next.call(null,inst_13992);var inst_13978 = inst_14004;var inst_13979 = null;var inst_13980 = 0;var inst_13981 = 0;var state_14021__$1 = (function (){var statearr_14051 = state_14021;(statearr_14051[15] = inst_14003);
(statearr_14051[8] = inst_13979);
(statearr_14051[9] = inst_13978);
(statearr_14051[10] = inst_13980);
(statearr_14051[11] = inst_13981);
return statearr_14051;
})();var statearr_14052_14079 = state_14021__$1;(statearr_14052_14079[2] = null);
(statearr_14052_14079[1] = 8);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14056[0] = state_machine__5507__auto__);
(statearr_14056[1] = 1);
return statearr_14056;
});
var state_machine__5507__auto____1 = (function (state_14021){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object))
{var ex__5510__auto__ = e14057;var statearr_14058_14080 = state_14021;(statearr_14058_14080[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14081 = state_14021;
state_14021 = G__14081;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14021){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14059 = f__5522__auto__.call(null);(statearr_14059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14162 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14141){var state_val_14142 = (state_14141[1]);if((state_val_14142 === 1))
{var state_14141__$1 = state_14141;var statearr_14143_14163 = state_14141__$1;(statearr_14143_14163[2] = null);
(statearr_14143_14163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 2))
{var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14141__$1,4,from);
} else
{if((state_val_14142 === 3))
{var inst_14139 = (state_14141[2]);var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14141__$1,inst_14139);
} else
{if((state_val_14142 === 4))
{var inst_14124 = (state_14141[7]);var inst_14124__$1 = (state_14141[2]);var inst_14125 = (inst_14124__$1 == null);var state_14141__$1 = (function (){var statearr_14144 = state_14141;(statearr_14144[7] = inst_14124__$1);
return statearr_14144;
})();if(cljs.core.truth_(inst_14125))
{var statearr_14145_14164 = state_14141__$1;(statearr_14145_14164[1] = 5);
} else
{var statearr_14146_14165 = state_14141__$1;(statearr_14146_14165[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 5))
{var state_14141__$1 = state_14141;if(cljs.core.truth_(close_QMARK_))
{var statearr_14147_14166 = state_14141__$1;(statearr_14147_14166[1] = 8);
} else
{var statearr_14148_14167 = state_14141__$1;(statearr_14148_14167[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 6))
{var inst_14124 = (state_14141[7]);var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14141__$1,11,to,inst_14124);
} else
{if((state_val_14142 === 7))
{var inst_14137 = (state_14141[2]);var state_14141__$1 = state_14141;var statearr_14149_14168 = state_14141__$1;(statearr_14149_14168[2] = inst_14137);
(statearr_14149_14168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 8))
{var inst_14128 = cljs.core.async.close_BANG_.call(null,to);var state_14141__$1 = state_14141;var statearr_14150_14169 = state_14141__$1;(statearr_14150_14169[2] = inst_14128);
(statearr_14150_14169[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 9))
{var state_14141__$1 = state_14141;var statearr_14151_14170 = state_14141__$1;(statearr_14151_14170[2] = null);
(statearr_14151_14170[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 10))
{var inst_14131 = (state_14141[2]);var state_14141__$1 = state_14141;var statearr_14152_14171 = state_14141__$1;(statearr_14152_14171[2] = inst_14131);
(statearr_14152_14171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14142 === 11))
{var inst_14134 = (state_14141[2]);var state_14141__$1 = (function (){var statearr_14153 = state_14141;(statearr_14153[8] = inst_14134);
return statearr_14153;
})();var statearr_14154_14172 = state_14141__$1;(statearr_14154_14172[2] = null);
(statearr_14154_14172[1] = 2);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14158 = [null,null,null,null,null,null,null,null,null];(statearr_14158[0] = state_machine__5507__auto__);
(statearr_14158[1] = 1);
return statearr_14158;
});
var state_machine__5507__auto____1 = (function (state_14141){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14141);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14159){if((e14159 instanceof Object))
{var ex__5510__auto__ = e14159;var statearr_14160_14173 = state_14141;(statearr_14160_14173[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14141);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14174 = state_14141;
state_14141 = G__14174;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14141){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14161 = f__5522__auto__.call(null);(statearr_14161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14162);
return statearr_14161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14239){var state_val_14240 = (state_14239[1]);if((state_val_14240 === 1))
{var state_14239__$1 = state_14239;var statearr_14241_14262 = state_14239__$1;(statearr_14241_14262[2] = null);
(statearr_14241_14262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 2))
{var state_14239__$1 = state_14239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14239__$1,4,ch);
} else
{if((state_val_14240 === 3))
{var inst_14237 = (state_14239[2]);var state_14239__$1 = state_14239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14239__$1,inst_14237);
} else
{if((state_val_14240 === 4))
{var inst_14220 = (state_14239[7]);var inst_14220__$1 = (state_14239[2]);var inst_14221 = (inst_14220__$1 == null);var state_14239__$1 = (function (){var statearr_14242 = state_14239;(statearr_14242[7] = inst_14220__$1);
return statearr_14242;
})();if(cljs.core.truth_(inst_14221))
{var statearr_14243_14263 = state_14239__$1;(statearr_14243_14263[1] = 5);
} else
{var statearr_14244_14264 = state_14239__$1;(statearr_14244_14264[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 5))
{var inst_14223 = cljs.core.async.close_BANG_.call(null,tc);var inst_14224 = cljs.core.async.close_BANG_.call(null,fc);var state_14239__$1 = (function (){var statearr_14245 = state_14239;(statearr_14245[8] = inst_14223);
return statearr_14245;
})();var statearr_14246_14265 = state_14239__$1;(statearr_14246_14265[2] = inst_14224);
(statearr_14246_14265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 6))
{var inst_14220 = (state_14239[7]);var inst_14226 = p.call(null,inst_14220);var state_14239__$1 = state_14239;if(cljs.core.truth_(inst_14226))
{var statearr_14247_14266 = state_14239__$1;(statearr_14247_14266[1] = 9);
} else
{var statearr_14248_14267 = state_14239__$1;(statearr_14248_14267[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 7))
{var inst_14235 = (state_14239[2]);var state_14239__$1 = state_14239;var statearr_14249_14268 = state_14239__$1;(statearr_14249_14268[2] = inst_14235);
(statearr_14249_14268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 8))
{var inst_14232 = (state_14239[2]);var state_14239__$1 = (function (){var statearr_14250 = state_14239;(statearr_14250[9] = inst_14232);
return statearr_14250;
})();var statearr_14251_14269 = state_14239__$1;(statearr_14251_14269[2] = null);
(statearr_14251_14269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 9))
{var state_14239__$1 = state_14239;var statearr_14252_14270 = state_14239__$1;(statearr_14252_14270[2] = tc);
(statearr_14252_14270[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 10))
{var state_14239__$1 = state_14239;var statearr_14253_14271 = state_14239__$1;(statearr_14253_14271[2] = fc);
(statearr_14253_14271[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14240 === 11))
{var inst_14220 = (state_14239[7]);var inst_14230 = (state_14239[2]);var state_14239__$1 = state_14239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14239__$1,8,inst_14230,inst_14220);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14257 = [null,null,null,null,null,null,null,null,null,null];(statearr_14257[0] = state_machine__5507__auto__);
(statearr_14257[1] = 1);
return statearr_14257;
});
var state_machine__5507__auto____1 = (function (state_14239){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14239);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14258){if((e14258 instanceof Object))
{var ex__5510__auto__ = e14258;var statearr_14259_14272 = state_14239;(statearr_14259_14272[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14273 = state_14239;
state_14239 = G__14273;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14239){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14260 = f__5522__auto__.call(null);(statearr_14260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14261);
return statearr_14260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14320){var state_val_14321 = (state_14320[1]);if((state_val_14321 === 7))
{var inst_14316 = (state_14320[2]);var state_14320__$1 = state_14320;var statearr_14322_14338 = state_14320__$1;(statearr_14322_14338[2] = inst_14316);
(statearr_14322_14338[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14321 === 6))
{var inst_14309 = (state_14320[7]);var inst_14306 = (state_14320[8]);var inst_14313 = f.call(null,inst_14306,inst_14309);var inst_14306__$1 = inst_14313;var state_14320__$1 = (function (){var statearr_14323 = state_14320;(statearr_14323[8] = inst_14306__$1);
return statearr_14323;
})();var statearr_14324_14339 = state_14320__$1;(statearr_14324_14339[2] = null);
(statearr_14324_14339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14321 === 5))
{var inst_14306 = (state_14320[8]);var state_14320__$1 = state_14320;var statearr_14325_14340 = state_14320__$1;(statearr_14325_14340[2] = inst_14306);
(statearr_14325_14340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14321 === 4))
{var inst_14309 = (state_14320[7]);var inst_14309__$1 = (state_14320[2]);var inst_14310 = (inst_14309__$1 == null);var state_14320__$1 = (function (){var statearr_14326 = state_14320;(statearr_14326[7] = inst_14309__$1);
return statearr_14326;
})();if(cljs.core.truth_(inst_14310))
{var statearr_14327_14341 = state_14320__$1;(statearr_14327_14341[1] = 5);
} else
{var statearr_14328_14342 = state_14320__$1;(statearr_14328_14342[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14321 === 3))
{var inst_14318 = (state_14320[2]);var state_14320__$1 = state_14320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14320__$1,inst_14318);
} else
{if((state_val_14321 === 2))
{var state_14320__$1 = state_14320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14320__$1,4,ch);
} else
{if((state_val_14321 === 1))
{var inst_14306 = init;var state_14320__$1 = (function (){var statearr_14329 = state_14320;(statearr_14329[8] = inst_14306);
return statearr_14329;
})();var statearr_14330_14343 = state_14320__$1;(statearr_14330_14343[2] = null);
(statearr_14330_14343[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14334 = [null,null,null,null,null,null,null,null,null];(statearr_14334[0] = state_machine__5507__auto__);
(statearr_14334[1] = 1);
return statearr_14334;
});
var state_machine__5507__auto____1 = (function (state_14320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14335){if((e14335 instanceof Object))
{var ex__5510__auto__ = e14335;var statearr_14336_14344 = state_14320;(statearr_14336_14344[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14345 = state_14320;
state_14320 = G__14345;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14337 = f__5522__auto__.call(null);(statearr_14337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14407){var state_val_14408 = (state_14407[1]);if((state_val_14408 === 1))
{var inst_14387 = cljs.core.seq.call(null,coll);var inst_14388 = inst_14387;var state_14407__$1 = (function (){var statearr_14409 = state_14407;(statearr_14409[7] = inst_14388);
return statearr_14409;
})();var statearr_14410_14428 = state_14407__$1;(statearr_14410_14428[2] = null);
(statearr_14410_14428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 2))
{var inst_14388 = (state_14407[7]);var state_14407__$1 = state_14407;if(cljs.core.truth_(inst_14388))
{var statearr_14411_14429 = state_14407__$1;(statearr_14411_14429[1] = 4);
} else
{var statearr_14412_14430 = state_14407__$1;(statearr_14412_14430[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 3))
{var inst_14405 = (state_14407[2]);var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14407__$1,inst_14405);
} else
{if((state_val_14408 === 4))
{var inst_14388 = (state_14407[7]);var inst_14391 = cljs.core.first.call(null,inst_14388);var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14407__$1,7,ch,inst_14391);
} else
{if((state_val_14408 === 5))
{var state_14407__$1 = state_14407;if(cljs.core.truth_(close_QMARK_))
{var statearr_14413_14431 = state_14407__$1;(statearr_14413_14431[1] = 8);
} else
{var statearr_14414_14432 = state_14407__$1;(statearr_14414_14432[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 6))
{var inst_14403 = (state_14407[2]);var state_14407__$1 = state_14407;var statearr_14415_14433 = state_14407__$1;(statearr_14415_14433[2] = inst_14403);
(statearr_14415_14433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 7))
{var inst_14388 = (state_14407[7]);var inst_14393 = (state_14407[2]);var inst_14394 = cljs.core.next.call(null,inst_14388);var inst_14388__$1 = inst_14394;var state_14407__$1 = (function (){var statearr_14416 = state_14407;(statearr_14416[7] = inst_14388__$1);
(statearr_14416[8] = inst_14393);
return statearr_14416;
})();var statearr_14417_14434 = state_14407__$1;(statearr_14417_14434[2] = null);
(statearr_14417_14434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 8))
{var inst_14398 = cljs.core.async.close_BANG_.call(null,ch);var state_14407__$1 = state_14407;var statearr_14418_14435 = state_14407__$1;(statearr_14418_14435[2] = inst_14398);
(statearr_14418_14435[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 9))
{var state_14407__$1 = state_14407;var statearr_14419_14436 = state_14407__$1;(statearr_14419_14436[2] = null);
(statearr_14419_14436[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 10))
{var inst_14401 = (state_14407[2]);var state_14407__$1 = state_14407;var statearr_14420_14437 = state_14407__$1;(statearr_14420_14437[2] = inst_14401);
(statearr_14420_14437[1] = 6);
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
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14424 = [null,null,null,null,null,null,null,null,null];(statearr_14424[0] = state_machine__5507__auto__);
(statearr_14424[1] = 1);
return statearr_14424;
});
var state_machine__5507__auto____1 = (function (state_14407){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14407);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14425){if((e14425 instanceof Object))
{var ex__5510__auto__ = e14425;var statearr_14426_14438 = state_14407;(statearr_14426_14438[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14439 = state_14407;
state_14407 = G__14439;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14407){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14427 = f__5522__auto__.call(null);(statearr_14427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14441 = {};return obj14441;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14443 = {};return obj14443;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14667 = (function (cs,ch,mult,meta14668){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14668 = meta14668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14667.cljs$lang$type = true;
cljs.core.async.t14667.cljs$lang$ctorStr = "cljs.core.async/t14667";
cljs.core.async.t14667.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14667");
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14669){var self__ = this;
var _14669__$1 = this;return self__.meta14668;
});})(cs))
;
cljs.core.async.t14667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14669,meta14668__$1){var self__ = this;
var _14669__$1 = this;return (new cljs.core.async.t14667(self__.cs,self__.ch,self__.mult,meta14668__$1));
});})(cs))
;
cljs.core.async.__GT_t14667 = ((function (cs){
return (function __GT_t14667(cs__$1,ch__$1,mult__$1,meta14668){return (new cljs.core.async.t14667(cs__$1,ch__$1,mult__$1,meta14668));
});})(cs))
;
}
return (new cljs.core.async.t14667(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14804){var state_val_14805 = (state_14804[1]);if((state_val_14805 === 32))
{var inst_14748 = (state_14804[7]);var inst_14672 = (state_14804[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14804,31,Object,null,30);var inst_14755 = cljs.core.async.put_BANG_.call(null,inst_14748,inst_14672,done);var state_14804__$1 = state_14804;var statearr_14806_14891 = state_14804__$1;(statearr_14806_14891[2] = inst_14755);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 1))
{var state_14804__$1 = state_14804;var statearr_14807_14892 = state_14804__$1;(statearr_14807_14892[2] = null);
(statearr_14807_14892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 33))
{var inst_14761 = (state_14804[9]);var inst_14763 = cljs.core.chunked_seq_QMARK_.call(null,inst_14761);var state_14804__$1 = state_14804;if(inst_14763)
{var statearr_14808_14893 = state_14804__$1;(statearr_14808_14893[1] = 36);
} else
{var statearr_14809_14894 = state_14804__$1;(statearr_14809_14894[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 2))
{var state_14804__$1 = state_14804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14804__$1,4,ch);
} else
{if((state_val_14805 === 34))
{var state_14804__$1 = state_14804;var statearr_14810_14895 = state_14804__$1;(statearr_14810_14895[2] = null);
(statearr_14810_14895[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 3))
{var inst_14802 = (state_14804[2]);var state_14804__$1 = state_14804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14804__$1,inst_14802);
} else
{if((state_val_14805 === 35))
{var inst_14786 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14811_14896 = state_14804__$1;(statearr_14811_14896[2] = inst_14786);
(statearr_14811_14896[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 4))
{var inst_14672 = (state_14804[8]);var inst_14672__$1 = (state_14804[2]);var inst_14673 = (inst_14672__$1 == null);var state_14804__$1 = (function (){var statearr_14812 = state_14804;(statearr_14812[8] = inst_14672__$1);
return statearr_14812;
})();if(cljs.core.truth_(inst_14673))
{var statearr_14813_14897 = state_14804__$1;(statearr_14813_14897[1] = 5);
} else
{var statearr_14814_14898 = state_14804__$1;(statearr_14814_14898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 36))
{var inst_14761 = (state_14804[9]);var inst_14765 = cljs.core.chunk_first.call(null,inst_14761);var inst_14766 = cljs.core.chunk_rest.call(null,inst_14761);var inst_14767 = cljs.core.count.call(null,inst_14765);var inst_14740 = inst_14766;var inst_14741 = inst_14765;var inst_14742 = inst_14767;var inst_14743 = 0;var state_14804__$1 = (function (){var statearr_14815 = state_14804;(statearr_14815[10] = inst_14740);
(statearr_14815[11] = inst_14743);
(statearr_14815[12] = inst_14742);
(statearr_14815[13] = inst_14741);
return statearr_14815;
})();var statearr_14816_14899 = state_14804__$1;(statearr_14816_14899[2] = null);
(statearr_14816_14899[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 5))
{var inst_14679 = cljs.core.deref.call(null,cs);var inst_14680 = cljs.core.seq.call(null,inst_14679);var inst_14681 = inst_14680;var inst_14682 = null;var inst_14683 = 0;var inst_14684 = 0;var state_14804__$1 = (function (){var statearr_14817 = state_14804;(statearr_14817[14] = inst_14684);
(statearr_14817[15] = inst_14682);
(statearr_14817[16] = inst_14683);
(statearr_14817[17] = inst_14681);
return statearr_14817;
})();var statearr_14818_14900 = state_14804__$1;(statearr_14818_14900[2] = null);
(statearr_14818_14900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 37))
{var inst_14761 = (state_14804[9]);var inst_14770 = cljs.core.first.call(null,inst_14761);var state_14804__$1 = (function (){var statearr_14819 = state_14804;(statearr_14819[18] = inst_14770);
return statearr_14819;
})();var statearr_14820_14901 = state_14804__$1;(statearr_14820_14901[2] = null);
(statearr_14820_14901[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 6))
{var inst_14732 = (state_14804[19]);var inst_14731 = cljs.core.deref.call(null,cs);var inst_14732__$1 = cljs.core.keys.call(null,inst_14731);var inst_14733 = cljs.core.count.call(null,inst_14732__$1);var inst_14734 = cljs.core.reset_BANG_.call(null,dctr,inst_14733);var inst_14739 = cljs.core.seq.call(null,inst_14732__$1);var inst_14740 = inst_14739;var inst_14741 = null;var inst_14742 = 0;var inst_14743 = 0;var state_14804__$1 = (function (){var statearr_14821 = state_14804;(statearr_14821[19] = inst_14732__$1);
(statearr_14821[10] = inst_14740);
(statearr_14821[20] = inst_14734);
(statearr_14821[11] = inst_14743);
(statearr_14821[12] = inst_14742);
(statearr_14821[13] = inst_14741);
return statearr_14821;
})();var statearr_14822_14902 = state_14804__$1;(statearr_14822_14902[2] = null);
(statearr_14822_14902[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 38))
{var inst_14783 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14823_14903 = state_14804__$1;(statearr_14823_14903[2] = inst_14783);
(statearr_14823_14903[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 7))
{var inst_14800 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14824_14904 = state_14804__$1;(statearr_14824_14904[2] = inst_14800);
(statearr_14824_14904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 39))
{var inst_14761 = (state_14804[9]);var inst_14779 = (state_14804[2]);var inst_14780 = cljs.core.next.call(null,inst_14761);var inst_14740 = inst_14780;var inst_14741 = null;var inst_14742 = 0;var inst_14743 = 0;var state_14804__$1 = (function (){var statearr_14825 = state_14804;(statearr_14825[10] = inst_14740);
(statearr_14825[11] = inst_14743);
(statearr_14825[21] = inst_14779);
(statearr_14825[12] = inst_14742);
(statearr_14825[13] = inst_14741);
return statearr_14825;
})();var statearr_14826_14905 = state_14804__$1;(statearr_14826_14905[2] = null);
(statearr_14826_14905[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 8))
{var inst_14684 = (state_14804[14]);var inst_14683 = (state_14804[16]);var inst_14686 = (inst_14684 < inst_14683);var inst_14687 = inst_14686;var state_14804__$1 = state_14804;if(cljs.core.truth_(inst_14687))
{var statearr_14827_14906 = state_14804__$1;(statearr_14827_14906[1] = 10);
} else
{var statearr_14828_14907 = state_14804__$1;(statearr_14828_14907[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 40))
{var inst_14770 = (state_14804[18]);var inst_14771 = (state_14804[2]);var inst_14772 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14773 = cljs.core.async.untap_STAR_.call(null,m,inst_14770);var state_14804__$1 = (function (){var statearr_14829 = state_14804;(statearr_14829[22] = inst_14772);
(statearr_14829[23] = inst_14771);
return statearr_14829;
})();var statearr_14830_14908 = state_14804__$1;(statearr_14830_14908[2] = inst_14773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 9))
{var inst_14729 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14831_14909 = state_14804__$1;(statearr_14831_14909[2] = inst_14729);
(statearr_14831_14909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 41))
{var inst_14770 = (state_14804[18]);var inst_14672 = (state_14804[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14804,40,Object,null,39);var inst_14777 = cljs.core.async.put_BANG_.call(null,inst_14770,inst_14672,done);var state_14804__$1 = state_14804;var statearr_14832_14910 = state_14804__$1;(statearr_14832_14910[2] = inst_14777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 10))
{var inst_14684 = (state_14804[14]);var inst_14682 = (state_14804[15]);var inst_14690 = cljs.core._nth.call(null,inst_14682,inst_14684);var inst_14691 = cljs.core.nth.call(null,inst_14690,0,null);var inst_14692 = cljs.core.nth.call(null,inst_14690,1,null);var state_14804__$1 = (function (){var statearr_14833 = state_14804;(statearr_14833[24] = inst_14691);
return statearr_14833;
})();if(cljs.core.truth_(inst_14692))
{var statearr_14834_14911 = state_14804__$1;(statearr_14834_14911[1] = 13);
} else
{var statearr_14835_14912 = state_14804__$1;(statearr_14835_14912[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 42))
{var state_14804__$1 = state_14804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14804__$1,45,dchan);
} else
{if((state_val_14805 === 11))
{var inst_14681 = (state_14804[17]);var inst_14701 = (state_14804[25]);var inst_14701__$1 = cljs.core.seq.call(null,inst_14681);var state_14804__$1 = (function (){var statearr_14836 = state_14804;(statearr_14836[25] = inst_14701__$1);
return statearr_14836;
})();if(inst_14701__$1)
{var statearr_14837_14913 = state_14804__$1;(statearr_14837_14913[1] = 16);
} else
{var statearr_14838_14914 = state_14804__$1;(statearr_14838_14914[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 43))
{var state_14804__$1 = state_14804;var statearr_14839_14915 = state_14804__$1;(statearr_14839_14915[2] = null);
(statearr_14839_14915[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 12))
{var inst_14727 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14840_14916 = state_14804__$1;(statearr_14840_14916[2] = inst_14727);
(statearr_14840_14916[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 44))
{var inst_14797 = (state_14804[2]);var state_14804__$1 = (function (){var statearr_14841 = state_14804;(statearr_14841[26] = inst_14797);
return statearr_14841;
})();var statearr_14842_14917 = state_14804__$1;(statearr_14842_14917[2] = null);
(statearr_14842_14917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 13))
{var inst_14691 = (state_14804[24]);var inst_14694 = cljs.core.async.close_BANG_.call(null,inst_14691);var state_14804__$1 = state_14804;var statearr_14843_14918 = state_14804__$1;(statearr_14843_14918[2] = inst_14694);
(statearr_14843_14918[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 45))
{var inst_14794 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14847_14919 = state_14804__$1;(statearr_14847_14919[2] = inst_14794);
(statearr_14847_14919[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 14))
{var state_14804__$1 = state_14804;var statearr_14848_14920 = state_14804__$1;(statearr_14848_14920[2] = null);
(statearr_14848_14920[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 15))
{var inst_14684 = (state_14804[14]);var inst_14682 = (state_14804[15]);var inst_14683 = (state_14804[16]);var inst_14681 = (state_14804[17]);var inst_14697 = (state_14804[2]);var inst_14698 = (inst_14684 + 1);var tmp14844 = inst_14682;var tmp14845 = inst_14683;var tmp14846 = inst_14681;var inst_14681__$1 = tmp14846;var inst_14682__$1 = tmp14844;var inst_14683__$1 = tmp14845;var inst_14684__$1 = inst_14698;var state_14804__$1 = (function (){var statearr_14849 = state_14804;(statearr_14849[14] = inst_14684__$1);
(statearr_14849[15] = inst_14682__$1);
(statearr_14849[16] = inst_14683__$1);
(statearr_14849[17] = inst_14681__$1);
(statearr_14849[27] = inst_14697);
return statearr_14849;
})();var statearr_14850_14921 = state_14804__$1;(statearr_14850_14921[2] = null);
(statearr_14850_14921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 16))
{var inst_14701 = (state_14804[25]);var inst_14703 = cljs.core.chunked_seq_QMARK_.call(null,inst_14701);var state_14804__$1 = state_14804;if(inst_14703)
{var statearr_14851_14922 = state_14804__$1;(statearr_14851_14922[1] = 19);
} else
{var statearr_14852_14923 = state_14804__$1;(statearr_14852_14923[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 17))
{var state_14804__$1 = state_14804;var statearr_14853_14924 = state_14804__$1;(statearr_14853_14924[2] = null);
(statearr_14853_14924[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 18))
{var inst_14725 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14854_14925 = state_14804__$1;(statearr_14854_14925[2] = inst_14725);
(statearr_14854_14925[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 19))
{var inst_14701 = (state_14804[25]);var inst_14705 = cljs.core.chunk_first.call(null,inst_14701);var inst_14706 = cljs.core.chunk_rest.call(null,inst_14701);var inst_14707 = cljs.core.count.call(null,inst_14705);var inst_14681 = inst_14706;var inst_14682 = inst_14705;var inst_14683 = inst_14707;var inst_14684 = 0;var state_14804__$1 = (function (){var statearr_14855 = state_14804;(statearr_14855[14] = inst_14684);
(statearr_14855[15] = inst_14682);
(statearr_14855[16] = inst_14683);
(statearr_14855[17] = inst_14681);
return statearr_14855;
})();var statearr_14856_14926 = state_14804__$1;(statearr_14856_14926[2] = null);
(statearr_14856_14926[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 20))
{var inst_14701 = (state_14804[25]);var inst_14711 = cljs.core.first.call(null,inst_14701);var inst_14712 = cljs.core.nth.call(null,inst_14711,0,null);var inst_14713 = cljs.core.nth.call(null,inst_14711,1,null);var state_14804__$1 = (function (){var statearr_14857 = state_14804;(statearr_14857[28] = inst_14712);
return statearr_14857;
})();if(cljs.core.truth_(inst_14713))
{var statearr_14858_14927 = state_14804__$1;(statearr_14858_14927[1] = 22);
} else
{var statearr_14859_14928 = state_14804__$1;(statearr_14859_14928[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 21))
{var inst_14722 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14860_14929 = state_14804__$1;(statearr_14860_14929[2] = inst_14722);
(statearr_14860_14929[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 22))
{var inst_14712 = (state_14804[28]);var inst_14715 = cljs.core.async.close_BANG_.call(null,inst_14712);var state_14804__$1 = state_14804;var statearr_14861_14930 = state_14804__$1;(statearr_14861_14930[2] = inst_14715);
(statearr_14861_14930[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 23))
{var state_14804__$1 = state_14804;var statearr_14862_14931 = state_14804__$1;(statearr_14862_14931[2] = null);
(statearr_14862_14931[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 24))
{var inst_14701 = (state_14804[25]);var inst_14718 = (state_14804[2]);var inst_14719 = cljs.core.next.call(null,inst_14701);var inst_14681 = inst_14719;var inst_14682 = null;var inst_14683 = 0;var inst_14684 = 0;var state_14804__$1 = (function (){var statearr_14863 = state_14804;(statearr_14863[14] = inst_14684);
(statearr_14863[15] = inst_14682);
(statearr_14863[16] = inst_14683);
(statearr_14863[17] = inst_14681);
(statearr_14863[29] = inst_14718);
return statearr_14863;
})();var statearr_14864_14932 = state_14804__$1;(statearr_14864_14932[2] = null);
(statearr_14864_14932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 25))
{var inst_14743 = (state_14804[11]);var inst_14742 = (state_14804[12]);var inst_14745 = (inst_14743 < inst_14742);var inst_14746 = inst_14745;var state_14804__$1 = state_14804;if(cljs.core.truth_(inst_14746))
{var statearr_14865_14933 = state_14804__$1;(statearr_14865_14933[1] = 27);
} else
{var statearr_14866_14934 = state_14804__$1;(statearr_14866_14934[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 26))
{var inst_14732 = (state_14804[19]);var inst_14790 = (state_14804[2]);var inst_14791 = cljs.core.seq.call(null,inst_14732);var state_14804__$1 = (function (){var statearr_14867 = state_14804;(statearr_14867[30] = inst_14790);
return statearr_14867;
})();if(inst_14791)
{var statearr_14868_14935 = state_14804__$1;(statearr_14868_14935[1] = 42);
} else
{var statearr_14869_14936 = state_14804__$1;(statearr_14869_14936[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 27))
{var inst_14743 = (state_14804[11]);var inst_14741 = (state_14804[13]);var inst_14748 = cljs.core._nth.call(null,inst_14741,inst_14743);var state_14804__$1 = (function (){var statearr_14870 = state_14804;(statearr_14870[7] = inst_14748);
return statearr_14870;
})();var statearr_14871_14937 = state_14804__$1;(statearr_14871_14937[2] = null);
(statearr_14871_14937[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 28))
{var inst_14761 = (state_14804[9]);var inst_14740 = (state_14804[10]);var inst_14761__$1 = cljs.core.seq.call(null,inst_14740);var state_14804__$1 = (function (){var statearr_14875 = state_14804;(statearr_14875[9] = inst_14761__$1);
return statearr_14875;
})();if(inst_14761__$1)
{var statearr_14876_14938 = state_14804__$1;(statearr_14876_14938[1] = 33);
} else
{var statearr_14877_14939 = state_14804__$1;(statearr_14877_14939[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 29))
{var inst_14788 = (state_14804[2]);var state_14804__$1 = state_14804;var statearr_14878_14940 = state_14804__$1;(statearr_14878_14940[2] = inst_14788);
(statearr_14878_14940[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 30))
{var inst_14740 = (state_14804[10]);var inst_14743 = (state_14804[11]);var inst_14742 = (state_14804[12]);var inst_14741 = (state_14804[13]);var inst_14757 = (state_14804[2]);var inst_14758 = (inst_14743 + 1);var tmp14872 = inst_14740;var tmp14873 = inst_14742;var tmp14874 = inst_14741;var inst_14740__$1 = tmp14872;var inst_14741__$1 = tmp14874;var inst_14742__$1 = tmp14873;var inst_14743__$1 = inst_14758;var state_14804__$1 = (function (){var statearr_14879 = state_14804;(statearr_14879[31] = inst_14757);
(statearr_14879[10] = inst_14740__$1);
(statearr_14879[11] = inst_14743__$1);
(statearr_14879[12] = inst_14742__$1);
(statearr_14879[13] = inst_14741__$1);
return statearr_14879;
})();var statearr_14880_14941 = state_14804__$1;(statearr_14880_14941[2] = null);
(statearr_14880_14941[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14805 === 31))
{var inst_14748 = (state_14804[7]);var inst_14749 = (state_14804[2]);var inst_14750 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14751 = cljs.core.async.untap_STAR_.call(null,m,inst_14748);var state_14804__$1 = (function (){var statearr_14881 = state_14804;(statearr_14881[32] = inst_14749);
(statearr_14881[33] = inst_14750);
return statearr_14881;
})();var statearr_14882_14942 = state_14804__$1;(statearr_14882_14942[2] = inst_14751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14886[0] = state_machine__5507__auto__);
(statearr_14886[1] = 1);
return statearr_14886;
});
var state_machine__5507__auto____1 = (function (state_14804){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14804);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14887){if((e14887 instanceof Object))
{var ex__5510__auto__ = e14887;var statearr_14888_14943 = state_14804;(statearr_14888_14943[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14944 = state_14804;
state_14804 = G__14944;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14804){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14889 = f__5522__auto__.call(null);(statearr_14889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14890);
return statearr_14889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14946 = {};return obj14946;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15056 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15057){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15057 = meta15057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15056.cljs$lang$type = true;
cljs.core.async.t15056.cljs$lang$ctorStr = "cljs.core.async/t15056";
cljs.core.async.t15056.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15056");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15058){var self__ = this;
var _15058__$1 = this;return self__.meta15057;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15058,meta15057__$1){var self__ = this;
var _15058__$1 = this;return (new cljs.core.async.t15056(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15057__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15056 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15056(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15057){return (new cljs.core.async.t15056(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15057));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15056(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15123){var state_val_15124 = (state_15123[1]);if((state_val_15124 === 1))
{var inst_15062 = (state_15123[7]);var inst_15062__$1 = calc_state.call(null);var inst_15063 = cljs.core.seq_QMARK_.call(null,inst_15062__$1);var state_15123__$1 = (function (){var statearr_15125 = state_15123;(statearr_15125[7] = inst_15062__$1);
return statearr_15125;
})();if(inst_15063)
{var statearr_15126_15166 = state_15123__$1;(statearr_15126_15166[1] = 2);
} else
{var statearr_15127_15167 = state_15123__$1;(statearr_15127_15167[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 2))
{var inst_15062 = (state_15123[7]);var inst_15065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15062);var state_15123__$1 = state_15123;var statearr_15128_15168 = state_15123__$1;(statearr_15128_15168[2] = inst_15065);
(statearr_15128_15168[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 3))
{var inst_15062 = (state_15123[7]);var state_15123__$1 = state_15123;var statearr_15129_15169 = state_15123__$1;(statearr_15129_15169[2] = inst_15062);
(statearr_15129_15169[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 4))
{var inst_15062 = (state_15123[7]);var inst_15068 = (state_15123[2]);var inst_15069 = cljs.core.get.call(null,inst_15068,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15070 = cljs.core.get.call(null,inst_15068,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15071 = cljs.core.get.call(null,inst_15068,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15072 = inst_15062;var state_15123__$1 = (function (){var statearr_15130 = state_15123;(statearr_15130[8] = inst_15069);
(statearr_15130[9] = inst_15070);
(statearr_15130[10] = inst_15071);
(statearr_15130[11] = inst_15072);
return statearr_15130;
})();var statearr_15131_15170 = state_15123__$1;(statearr_15131_15170[2] = null);
(statearr_15131_15170[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 5))
{var inst_15072 = (state_15123[11]);var inst_15075 = cljs.core.seq_QMARK_.call(null,inst_15072);var state_15123__$1 = state_15123;if(inst_15075)
{var statearr_15132_15171 = state_15123__$1;(statearr_15132_15171[1] = 7);
} else
{var statearr_15133_15172 = state_15123__$1;(statearr_15133_15172[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 6))
{var inst_15121 = (state_15123[2]);var state_15123__$1 = state_15123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15123__$1,inst_15121);
} else
{if((state_val_15124 === 7))
{var inst_15072 = (state_15123[11]);var inst_15077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15072);var state_15123__$1 = state_15123;var statearr_15134_15173 = state_15123__$1;(statearr_15134_15173[2] = inst_15077);
(statearr_15134_15173[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 8))
{var inst_15072 = (state_15123[11]);var state_15123__$1 = state_15123;var statearr_15135_15174 = state_15123__$1;(statearr_15135_15174[2] = inst_15072);
(statearr_15135_15174[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 9))
{var inst_15080 = (state_15123[12]);var inst_15080__$1 = (state_15123[2]);var inst_15081 = cljs.core.get.call(null,inst_15080__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15082 = cljs.core.get.call(null,inst_15080__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15083 = cljs.core.get.call(null,inst_15080__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15123__$1 = (function (){var statearr_15136 = state_15123;(statearr_15136[12] = inst_15080__$1);
(statearr_15136[13] = inst_15082);
(statearr_15136[14] = inst_15083);
return statearr_15136;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15123__$1,10,inst_15081);
} else
{if((state_val_15124 === 10))
{var inst_15088 = (state_15123[15]);var inst_15087 = (state_15123[16]);var inst_15086 = (state_15123[2]);var inst_15087__$1 = cljs.core.nth.call(null,inst_15086,0,null);var inst_15088__$1 = cljs.core.nth.call(null,inst_15086,1,null);var inst_15089 = (inst_15087__$1 == null);var inst_15090 = cljs.core._EQ_.call(null,inst_15088__$1,change);var inst_15091 = (inst_15089) || (inst_15090);var state_15123__$1 = (function (){var statearr_15137 = state_15123;(statearr_15137[15] = inst_15088__$1);
(statearr_15137[16] = inst_15087__$1);
return statearr_15137;
})();if(cljs.core.truth_(inst_15091))
{var statearr_15138_15175 = state_15123__$1;(statearr_15138_15175[1] = 11);
} else
{var statearr_15139_15176 = state_15123__$1;(statearr_15139_15176[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 11))
{var inst_15087 = (state_15123[16]);var inst_15093 = (inst_15087 == null);var state_15123__$1 = state_15123;if(cljs.core.truth_(inst_15093))
{var statearr_15140_15177 = state_15123__$1;(statearr_15140_15177[1] = 14);
} else
{var statearr_15141_15178 = state_15123__$1;(statearr_15141_15178[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 12))
{var inst_15083 = (state_15123[14]);var inst_15102 = (state_15123[17]);var inst_15088 = (state_15123[15]);var inst_15102__$1 = inst_15083.call(null,inst_15088);var state_15123__$1 = (function (){var statearr_15142 = state_15123;(statearr_15142[17] = inst_15102__$1);
return statearr_15142;
})();if(cljs.core.truth_(inst_15102__$1))
{var statearr_15143_15179 = state_15123__$1;(statearr_15143_15179[1] = 17);
} else
{var statearr_15144_15180 = state_15123__$1;(statearr_15144_15180[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 13))
{var inst_15119 = (state_15123[2]);var state_15123__$1 = state_15123;var statearr_15145_15181 = state_15123__$1;(statearr_15145_15181[2] = inst_15119);
(statearr_15145_15181[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 14))
{var inst_15088 = (state_15123[15]);var inst_15095 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15088);var state_15123__$1 = state_15123;var statearr_15146_15182 = state_15123__$1;(statearr_15146_15182[2] = inst_15095);
(statearr_15146_15182[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 15))
{var state_15123__$1 = state_15123;var statearr_15147_15183 = state_15123__$1;(statearr_15147_15183[2] = null);
(statearr_15147_15183[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 16))
{var inst_15098 = (state_15123[2]);var inst_15099 = calc_state.call(null);var inst_15072 = inst_15099;var state_15123__$1 = (function (){var statearr_15148 = state_15123;(statearr_15148[18] = inst_15098);
(statearr_15148[11] = inst_15072);
return statearr_15148;
})();var statearr_15149_15184 = state_15123__$1;(statearr_15149_15184[2] = null);
(statearr_15149_15184[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 17))
{var inst_15102 = (state_15123[17]);var state_15123__$1 = state_15123;var statearr_15150_15185 = state_15123__$1;(statearr_15150_15185[2] = inst_15102);
(statearr_15150_15185[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 18))
{var inst_15082 = (state_15123[13]);var inst_15083 = (state_15123[14]);var inst_15088 = (state_15123[15]);var inst_15105 = cljs.core.empty_QMARK_.call(null,inst_15083);var inst_15106 = inst_15082.call(null,inst_15088);var inst_15107 = cljs.core.not.call(null,inst_15106);var inst_15108 = (inst_15105) && (inst_15107);var state_15123__$1 = state_15123;var statearr_15151_15186 = state_15123__$1;(statearr_15151_15186[2] = inst_15108);
(statearr_15151_15186[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 19))
{var inst_15110 = (state_15123[2]);var state_15123__$1 = state_15123;if(cljs.core.truth_(inst_15110))
{var statearr_15152_15187 = state_15123__$1;(statearr_15152_15187[1] = 20);
} else
{var statearr_15153_15188 = state_15123__$1;(statearr_15153_15188[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 20))
{var inst_15087 = (state_15123[16]);var state_15123__$1 = state_15123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15123__$1,23,out,inst_15087);
} else
{if((state_val_15124 === 21))
{var state_15123__$1 = state_15123;var statearr_15154_15189 = state_15123__$1;(statearr_15154_15189[2] = null);
(statearr_15154_15189[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 22))
{var inst_15080 = (state_15123[12]);var inst_15116 = (state_15123[2]);var inst_15072 = inst_15080;var state_15123__$1 = (function (){var statearr_15155 = state_15123;(statearr_15155[11] = inst_15072);
(statearr_15155[19] = inst_15116);
return statearr_15155;
})();var statearr_15156_15190 = state_15123__$1;(statearr_15156_15190[2] = null);
(statearr_15156_15190[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 23))
{var inst_15113 = (state_15123[2]);var state_15123__$1 = state_15123;var statearr_15157_15191 = state_15123__$1;(statearr_15157_15191[2] = inst_15113);
(statearr_15157_15191[1] = 22);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15161[0] = state_machine__5507__auto__);
(statearr_15161[1] = 1);
return statearr_15161;
});
var state_machine__5507__auto____1 = (function (state_15123){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15123);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15162){if((e15162 instanceof Object))
{var ex__5510__auto__ = e15162;var statearr_15163_15192 = state_15123;(statearr_15163_15192[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15193 = state_15123;
state_15123 = G__15193;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15123){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15164 = f__5522__auto__.call(null);(statearr_15164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15165);
return statearr_15164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15195 = {};return obj15195;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__15196_SHARP_){if(cljs.core.truth_(p1__15196_SHARP_.call(null,topic)))
{return p1__15196_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15196_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15321 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15322){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15322 = meta15322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15321.cljs$lang$type = true;
cljs.core.async.t15321.cljs$lang$ctorStr = "cljs.core.async/t15321";
cljs.core.async.t15321.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15321");
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15321.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15323){var self__ = this;
var _15323__$1 = this;return self__.meta15322;
});})(mults,ensure_mult))
;
cljs.core.async.t15321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15323,meta15322__$1){var self__ = this;
var _15323__$1 = this;return (new cljs.core.async.t15321(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15322__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15321 = ((function (mults,ensure_mult){
return (function __GT_t15321(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15322){return (new cljs.core.async.t15321(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15322));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15321(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15397){var state_val_15398 = (state_15397[1]);if((state_val_15398 === 1))
{var state_15397__$1 = state_15397;var statearr_15399_15446 = state_15397__$1;(statearr_15399_15446[2] = null);
(statearr_15399_15446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 2))
{var state_15397__$1 = state_15397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15397__$1,4,ch);
} else
{if((state_val_15398 === 3))
{var inst_15395 = (state_15397[2]);var state_15397__$1 = state_15397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15397__$1,inst_15395);
} else
{if((state_val_15398 === 4))
{var inst_15326 = (state_15397[7]);var inst_15326__$1 = (state_15397[2]);var inst_15327 = (inst_15326__$1 == null);var state_15397__$1 = (function (){var statearr_15400 = state_15397;(statearr_15400[7] = inst_15326__$1);
return statearr_15400;
})();if(cljs.core.truth_(inst_15327))
{var statearr_15401_15447 = state_15397__$1;(statearr_15401_15447[1] = 5);
} else
{var statearr_15402_15448 = state_15397__$1;(statearr_15402_15448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 5))
{var inst_15333 = cljs.core.deref.call(null,mults);var inst_15334 = cljs.core.vals.call(null,inst_15333);var inst_15335 = cljs.core.seq.call(null,inst_15334);var inst_15336 = inst_15335;var inst_15337 = null;var inst_15338 = 0;var inst_15339 = 0;var state_15397__$1 = (function (){var statearr_15403 = state_15397;(statearr_15403[8] = inst_15339);
(statearr_15403[9] = inst_15338);
(statearr_15403[10] = inst_15337);
(statearr_15403[11] = inst_15336);
return statearr_15403;
})();var statearr_15404_15449 = state_15397__$1;(statearr_15404_15449[2] = null);
(statearr_15404_15449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 6))
{var inst_15376 = (state_15397[12]);var inst_15374 = (state_15397[13]);var inst_15326 = (state_15397[7]);var inst_15374__$1 = topic_fn.call(null,inst_15326);var inst_15375 = cljs.core.deref.call(null,mults);var inst_15376__$1 = cljs.core.get.call(null,inst_15375,inst_15374__$1);var state_15397__$1 = (function (){var statearr_15405 = state_15397;(statearr_15405[12] = inst_15376__$1);
(statearr_15405[13] = inst_15374__$1);
return statearr_15405;
})();if(cljs.core.truth_(inst_15376__$1))
{var statearr_15406_15450 = state_15397__$1;(statearr_15406_15450[1] = 19);
} else
{var statearr_15407_15451 = state_15397__$1;(statearr_15407_15451[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 7))
{var inst_15393 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15408_15452 = state_15397__$1;(statearr_15408_15452[2] = inst_15393);
(statearr_15408_15452[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 8))
{var inst_15339 = (state_15397[8]);var inst_15338 = (state_15397[9]);var inst_15341 = (inst_15339 < inst_15338);var inst_15342 = inst_15341;var state_15397__$1 = state_15397;if(cljs.core.truth_(inst_15342))
{var statearr_15412_15453 = state_15397__$1;(statearr_15412_15453[1] = 10);
} else
{var statearr_15413_15454 = state_15397__$1;(statearr_15413_15454[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 9))
{var inst_15372 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15414_15455 = state_15397__$1;(statearr_15414_15455[2] = inst_15372);
(statearr_15414_15455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 10))
{var inst_15339 = (state_15397[8]);var inst_15338 = (state_15397[9]);var inst_15337 = (state_15397[10]);var inst_15336 = (state_15397[11]);var inst_15344 = cljs.core._nth.call(null,inst_15337,inst_15339);var inst_15345 = cljs.core.async.muxch_STAR_.call(null,inst_15344);var inst_15346 = cljs.core.async.close_BANG_.call(null,inst_15345);var inst_15347 = (inst_15339 + 1);var tmp15409 = inst_15338;var tmp15410 = inst_15337;var tmp15411 = inst_15336;var inst_15336__$1 = tmp15411;var inst_15337__$1 = tmp15410;var inst_15338__$1 = tmp15409;var inst_15339__$1 = inst_15347;var state_15397__$1 = (function (){var statearr_15415 = state_15397;(statearr_15415[8] = inst_15339__$1);
(statearr_15415[14] = inst_15346);
(statearr_15415[9] = inst_15338__$1);
(statearr_15415[10] = inst_15337__$1);
(statearr_15415[11] = inst_15336__$1);
return statearr_15415;
})();var statearr_15416_15456 = state_15397__$1;(statearr_15416_15456[2] = null);
(statearr_15416_15456[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 11))
{var inst_15336 = (state_15397[11]);var inst_15350 = (state_15397[15]);var inst_15350__$1 = cljs.core.seq.call(null,inst_15336);var state_15397__$1 = (function (){var statearr_15417 = state_15397;(statearr_15417[15] = inst_15350__$1);
return statearr_15417;
})();if(inst_15350__$1)
{var statearr_15418_15457 = state_15397__$1;(statearr_15418_15457[1] = 13);
} else
{var statearr_15419_15458 = state_15397__$1;(statearr_15419_15458[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 12))
{var inst_15370 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15420_15459 = state_15397__$1;(statearr_15420_15459[2] = inst_15370);
(statearr_15420_15459[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 13))
{var inst_15350 = (state_15397[15]);var inst_15352 = cljs.core.chunked_seq_QMARK_.call(null,inst_15350);var state_15397__$1 = state_15397;if(inst_15352)
{var statearr_15421_15460 = state_15397__$1;(statearr_15421_15460[1] = 16);
} else
{var statearr_15422_15461 = state_15397__$1;(statearr_15422_15461[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 14))
{var state_15397__$1 = state_15397;var statearr_15423_15462 = state_15397__$1;(statearr_15423_15462[2] = null);
(statearr_15423_15462[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 15))
{var inst_15368 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15424_15463 = state_15397__$1;(statearr_15424_15463[2] = inst_15368);
(statearr_15424_15463[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 16))
{var inst_15350 = (state_15397[15]);var inst_15354 = cljs.core.chunk_first.call(null,inst_15350);var inst_15355 = cljs.core.chunk_rest.call(null,inst_15350);var inst_15356 = cljs.core.count.call(null,inst_15354);var inst_15336 = inst_15355;var inst_15337 = inst_15354;var inst_15338 = inst_15356;var inst_15339 = 0;var state_15397__$1 = (function (){var statearr_15425 = state_15397;(statearr_15425[8] = inst_15339);
(statearr_15425[9] = inst_15338);
(statearr_15425[10] = inst_15337);
(statearr_15425[11] = inst_15336);
return statearr_15425;
})();var statearr_15426_15464 = state_15397__$1;(statearr_15426_15464[2] = null);
(statearr_15426_15464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 17))
{var inst_15350 = (state_15397[15]);var inst_15359 = cljs.core.first.call(null,inst_15350);var inst_15360 = cljs.core.async.muxch_STAR_.call(null,inst_15359);var inst_15361 = cljs.core.async.close_BANG_.call(null,inst_15360);var inst_15362 = cljs.core.next.call(null,inst_15350);var inst_15336 = inst_15362;var inst_15337 = null;var inst_15338 = 0;var inst_15339 = 0;var state_15397__$1 = (function (){var statearr_15427 = state_15397;(statearr_15427[8] = inst_15339);
(statearr_15427[9] = inst_15338);
(statearr_15427[10] = inst_15337);
(statearr_15427[11] = inst_15336);
(statearr_15427[16] = inst_15361);
return statearr_15427;
})();var statearr_15428_15465 = state_15397__$1;(statearr_15428_15465[2] = null);
(statearr_15428_15465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 18))
{var inst_15365 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15429_15466 = state_15397__$1;(statearr_15429_15466[2] = inst_15365);
(statearr_15429_15466[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 19))
{var state_15397__$1 = state_15397;var statearr_15430_15467 = state_15397__$1;(statearr_15430_15467[2] = null);
(statearr_15430_15467[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 20))
{var state_15397__$1 = state_15397;var statearr_15431_15468 = state_15397__$1;(statearr_15431_15468[2] = null);
(statearr_15431_15468[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 21))
{var inst_15390 = (state_15397[2]);var state_15397__$1 = (function (){var statearr_15432 = state_15397;(statearr_15432[17] = inst_15390);
return statearr_15432;
})();var statearr_15433_15469 = state_15397__$1;(statearr_15433_15469[2] = null);
(statearr_15433_15469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 22))
{var inst_15387 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15434_15470 = state_15397__$1;(statearr_15434_15470[2] = inst_15387);
(statearr_15434_15470[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 23))
{var inst_15374 = (state_15397[13]);var inst_15378 = (state_15397[2]);var inst_15379 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15374);var state_15397__$1 = (function (){var statearr_15435 = state_15397;(statearr_15435[18] = inst_15378);
return statearr_15435;
})();var statearr_15436_15471 = state_15397__$1;(statearr_15436_15471[2] = inst_15379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15397__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15398 === 24))
{var inst_15376 = (state_15397[12]);var inst_15326 = (state_15397[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15397,23,Object,null,22);var inst_15383 = cljs.core.async.muxch_STAR_.call(null,inst_15376);var state_15397__$1 = state_15397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15397__$1,25,inst_15383,inst_15326);
} else
{if((state_val_15398 === 25))
{var inst_15385 = (state_15397[2]);var state_15397__$1 = state_15397;var statearr_15437_15472 = state_15397__$1;(statearr_15437_15472[2] = inst_15385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15397__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15441[0] = state_machine__5507__auto__);
(statearr_15441[1] = 1);
return statearr_15441;
});
var state_machine__5507__auto____1 = (function (state_15397){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15442){if((e15442 instanceof Object))
{var ex__5510__auto__ = e15442;var statearr_15443_15473 = state_15397;(statearr_15443_15473[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15474 = state_15397;
state_15397 = G__15474;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15397){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15444 = f__5522__auto__.call(null);(statearr_15444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15445);
return statearr_15444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___15611 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15581){var state_val_15582 = (state_15581[1]);if((state_val_15582 === 1))
{var state_15581__$1 = state_15581;var statearr_15583_15612 = state_15581__$1;(statearr_15583_15612[2] = null);
(statearr_15583_15612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 2))
{var inst_15544 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15545 = 0;var state_15581__$1 = (function (){var statearr_15584 = state_15581;(statearr_15584[7] = inst_15545);
(statearr_15584[8] = inst_15544);
return statearr_15584;
})();var statearr_15585_15613 = state_15581__$1;(statearr_15585_15613[2] = null);
(statearr_15585_15613[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 3))
{var inst_15579 = (state_15581[2]);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15581__$1,inst_15579);
} else
{if((state_val_15582 === 4))
{var inst_15545 = (state_15581[7]);var inst_15547 = (inst_15545 < cnt);var state_15581__$1 = state_15581;if(cljs.core.truth_(inst_15547))
{var statearr_15586_15614 = state_15581__$1;(statearr_15586_15614[1] = 6);
} else
{var statearr_15587_15615 = state_15581__$1;(statearr_15587_15615[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 5))
{var inst_15565 = (state_15581[2]);var state_15581__$1 = (function (){var statearr_15588 = state_15581;(statearr_15588[9] = inst_15565);
return statearr_15588;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15581__$1,12,dchan);
} else
{if((state_val_15582 === 6))
{var state_15581__$1 = state_15581;var statearr_15589_15616 = state_15581__$1;(statearr_15589_15616[2] = null);
(statearr_15589_15616[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 7))
{var state_15581__$1 = state_15581;var statearr_15590_15617 = state_15581__$1;(statearr_15590_15617[2] = null);
(statearr_15590_15617[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 8))
{var inst_15563 = (state_15581[2]);var state_15581__$1 = state_15581;var statearr_15591_15618 = state_15581__$1;(statearr_15591_15618[2] = inst_15563);
(statearr_15591_15618[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 9))
{var inst_15545 = (state_15581[7]);var inst_15558 = (state_15581[2]);var inst_15559 = (inst_15545 + 1);var inst_15545__$1 = inst_15559;var state_15581__$1 = (function (){var statearr_15592 = state_15581;(statearr_15592[7] = inst_15545__$1);
(statearr_15592[10] = inst_15558);
return statearr_15592;
})();var statearr_15593_15619 = state_15581__$1;(statearr_15593_15619[2] = null);
(statearr_15593_15619[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 10))
{var inst_15549 = (state_15581[2]);var inst_15550 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15581__$1 = (function (){var statearr_15594 = state_15581;(statearr_15594[11] = inst_15549);
return statearr_15594;
})();var statearr_15595_15620 = state_15581__$1;(statearr_15595_15620[2] = inst_15550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 11))
{var inst_15545 = (state_15581[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15581,10,Object,null,9);var inst_15554 = chs__$1.call(null,inst_15545);var inst_15555 = done.call(null,inst_15545);var inst_15556 = cljs.core.async.take_BANG_.call(null,inst_15554,inst_15555);var state_15581__$1 = state_15581;var statearr_15596_15621 = state_15581__$1;(statearr_15596_15621[2] = inst_15556);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 12))
{var inst_15567 = (state_15581[12]);var inst_15567__$1 = (state_15581[2]);var inst_15568 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15567__$1);var state_15581__$1 = (function (){var statearr_15597 = state_15581;(statearr_15597[12] = inst_15567__$1);
return statearr_15597;
})();if(cljs.core.truth_(inst_15568))
{var statearr_15598_15622 = state_15581__$1;(statearr_15598_15622[1] = 13);
} else
{var statearr_15599_15623 = state_15581__$1;(statearr_15599_15623[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 13))
{var inst_15570 = cljs.core.async.close_BANG_.call(null,out);var state_15581__$1 = state_15581;var statearr_15600_15624 = state_15581__$1;(statearr_15600_15624[2] = inst_15570);
(statearr_15600_15624[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 14))
{var inst_15567 = (state_15581[12]);var inst_15572 = cljs.core.apply.call(null,f,inst_15567);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15581__$1,16,out,inst_15572);
} else
{if((state_val_15582 === 15))
{var inst_15577 = (state_15581[2]);var state_15581__$1 = state_15581;var statearr_15601_15625 = state_15581__$1;(statearr_15601_15625[2] = inst_15577);
(statearr_15601_15625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15582 === 16))
{var inst_15574 = (state_15581[2]);var state_15581__$1 = (function (){var statearr_15602 = state_15581;(statearr_15602[13] = inst_15574);
return statearr_15602;
})();var statearr_15603_15626 = state_15581__$1;(statearr_15603_15626[2] = null);
(statearr_15603_15626[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15607[0] = state_machine__5507__auto__);
(statearr_15607[1] = 1);
return statearr_15607;
});
var state_machine__5507__auto____1 = (function (state_15581){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15608){if((e15608 instanceof Object))
{var ex__5510__auto__ = e15608;var statearr_15609_15627 = state_15581;(statearr_15609_15627[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15628 = state_15581;
state_15581 = G__15628;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15581){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15610 = f__5522__auto__.call(null);(statearr_15610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15611);
return statearr_15610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15736 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15712){var state_val_15713 = (state_15712[1]);if((state_val_15713 === 1))
{var inst_15683 = cljs.core.vec.call(null,chs);var inst_15684 = inst_15683;var state_15712__$1 = (function (){var statearr_15714 = state_15712;(statearr_15714[7] = inst_15684);
return statearr_15714;
})();var statearr_15715_15737 = state_15712__$1;(statearr_15715_15737[2] = null);
(statearr_15715_15737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 2))
{var inst_15684 = (state_15712[7]);var inst_15686 = cljs.core.count.call(null,inst_15684);var inst_15687 = (inst_15686 > 0);var state_15712__$1 = state_15712;if(cljs.core.truth_(inst_15687))
{var statearr_15716_15738 = state_15712__$1;(statearr_15716_15738[1] = 4);
} else
{var statearr_15717_15739 = state_15712__$1;(statearr_15717_15739[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 3))
{var inst_15710 = (state_15712[2]);var state_15712__$1 = state_15712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15712__$1,inst_15710);
} else
{if((state_val_15713 === 4))
{var inst_15684 = (state_15712[7]);var state_15712__$1 = state_15712;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15712__$1,7,inst_15684);
} else
{if((state_val_15713 === 5))
{var inst_15706 = cljs.core.async.close_BANG_.call(null,out);var state_15712__$1 = state_15712;var statearr_15718_15740 = state_15712__$1;(statearr_15718_15740[2] = inst_15706);
(statearr_15718_15740[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 6))
{var inst_15708 = (state_15712[2]);var state_15712__$1 = state_15712;var statearr_15719_15741 = state_15712__$1;(statearr_15719_15741[2] = inst_15708);
(statearr_15719_15741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 7))
{var inst_15691 = (state_15712[8]);var inst_15692 = (state_15712[9]);var inst_15691__$1 = (state_15712[2]);var inst_15692__$1 = cljs.core.nth.call(null,inst_15691__$1,0,null);var inst_15693 = cljs.core.nth.call(null,inst_15691__$1,1,null);var inst_15694 = (inst_15692__$1 == null);var state_15712__$1 = (function (){var statearr_15720 = state_15712;(statearr_15720[8] = inst_15691__$1);
(statearr_15720[10] = inst_15693);
(statearr_15720[9] = inst_15692__$1);
return statearr_15720;
})();if(cljs.core.truth_(inst_15694))
{var statearr_15721_15742 = state_15712__$1;(statearr_15721_15742[1] = 8);
} else
{var statearr_15722_15743 = state_15712__$1;(statearr_15722_15743[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 8))
{var inst_15691 = (state_15712[8]);var inst_15693 = (state_15712[10]);var inst_15692 = (state_15712[9]);var inst_15684 = (state_15712[7]);var inst_15696 = (function (){var c = inst_15693;var v = inst_15692;var vec__15689 = inst_15691;var cs = inst_15684;return ((function (c,v,vec__15689,cs,inst_15691,inst_15693,inst_15692,inst_15684,state_val_15713){
return (function (p1__15629_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15629_SHARP_);
});
;})(c,v,vec__15689,cs,inst_15691,inst_15693,inst_15692,inst_15684,state_val_15713))
})();var inst_15697 = cljs.core.filterv.call(null,inst_15696,inst_15684);var inst_15684__$1 = inst_15697;var state_15712__$1 = (function (){var statearr_15723 = state_15712;(statearr_15723[7] = inst_15684__$1);
return statearr_15723;
})();var statearr_15724_15744 = state_15712__$1;(statearr_15724_15744[2] = null);
(statearr_15724_15744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 9))
{var inst_15692 = (state_15712[9]);var state_15712__$1 = state_15712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15712__$1,11,out,inst_15692);
} else
{if((state_val_15713 === 10))
{var inst_15704 = (state_15712[2]);var state_15712__$1 = state_15712;var statearr_15726_15745 = state_15712__$1;(statearr_15726_15745[2] = inst_15704);
(statearr_15726_15745[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15713 === 11))
{var inst_15684 = (state_15712[7]);var inst_15701 = (state_15712[2]);var tmp15725 = inst_15684;var inst_15684__$1 = tmp15725;var state_15712__$1 = (function (){var statearr_15727 = state_15712;(statearr_15727[11] = inst_15701);
(statearr_15727[7] = inst_15684__$1);
return statearr_15727;
})();var statearr_15728_15746 = state_15712__$1;(statearr_15728_15746[2] = null);
(statearr_15728_15746[1] = 2);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15732 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15732[0] = state_machine__5507__auto__);
(statearr_15732[1] = 1);
return statearr_15732;
});
var state_machine__5507__auto____1 = (function (state_15712){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15712);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15733){if((e15733 instanceof Object))
{var ex__5510__auto__ = e15733;var statearr_15734_15747 = state_15712;(statearr_15734_15747[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15712);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15748 = state_15712;
state_15712 = G__15748;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15712){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15735 = f__5522__auto__.call(null);(statearr_15735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15736);
return statearr_15735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15818){var state_val_15819 = (state_15818[1]);if((state_val_15819 === 1))
{var inst_15795 = 0;var state_15818__$1 = (function (){var statearr_15820 = state_15818;(statearr_15820[7] = inst_15795);
return statearr_15820;
})();var statearr_15821_15842 = state_15818__$1;(statearr_15821_15842[2] = null);
(statearr_15821_15842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 2))
{var inst_15795 = (state_15818[7]);var inst_15797 = (inst_15795 < n);var state_15818__$1 = state_15818;if(cljs.core.truth_(inst_15797))
{var statearr_15822_15843 = state_15818__$1;(statearr_15822_15843[1] = 4);
} else
{var statearr_15823_15844 = state_15818__$1;(statearr_15823_15844[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 3))
{var inst_15815 = (state_15818[2]);var inst_15816 = cljs.core.async.close_BANG_.call(null,out);var state_15818__$1 = (function (){var statearr_15824 = state_15818;(statearr_15824[8] = inst_15815);
return statearr_15824;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15818__$1,inst_15816);
} else
{if((state_val_15819 === 4))
{var state_15818__$1 = state_15818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15818__$1,7,ch);
} else
{if((state_val_15819 === 5))
{var state_15818__$1 = state_15818;var statearr_15825_15845 = state_15818__$1;(statearr_15825_15845[2] = null);
(statearr_15825_15845[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 6))
{var inst_15813 = (state_15818[2]);var state_15818__$1 = state_15818;var statearr_15826_15846 = state_15818__$1;(statearr_15826_15846[2] = inst_15813);
(statearr_15826_15846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 7))
{var inst_15800 = (state_15818[9]);var inst_15800__$1 = (state_15818[2]);var inst_15801 = (inst_15800__$1 == null);var inst_15802 = cljs.core.not.call(null,inst_15801);var state_15818__$1 = (function (){var statearr_15827 = state_15818;(statearr_15827[9] = inst_15800__$1);
return statearr_15827;
})();if(inst_15802)
{var statearr_15828_15847 = state_15818__$1;(statearr_15828_15847[1] = 8);
} else
{var statearr_15829_15848 = state_15818__$1;(statearr_15829_15848[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 8))
{var inst_15800 = (state_15818[9]);var state_15818__$1 = state_15818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15818__$1,11,out,inst_15800);
} else
{if((state_val_15819 === 9))
{var state_15818__$1 = state_15818;var statearr_15830_15849 = state_15818__$1;(statearr_15830_15849[2] = null);
(statearr_15830_15849[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 10))
{var inst_15810 = (state_15818[2]);var state_15818__$1 = state_15818;var statearr_15831_15850 = state_15818__$1;(statearr_15831_15850[2] = inst_15810);
(statearr_15831_15850[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15819 === 11))
{var inst_15795 = (state_15818[7]);var inst_15805 = (state_15818[2]);var inst_15806 = (inst_15795 + 1);var inst_15795__$1 = inst_15806;var state_15818__$1 = (function (){var statearr_15832 = state_15818;(statearr_15832[7] = inst_15795__$1);
(statearr_15832[10] = inst_15805);
return statearr_15832;
})();var statearr_15833_15851 = state_15818__$1;(statearr_15833_15851[2] = null);
(statearr_15833_15851[1] = 2);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15837 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15837[0] = state_machine__5507__auto__);
(statearr_15837[1] = 1);
return statearr_15837;
});
var state_machine__5507__auto____1 = (function (state_15818){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15818);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15838){if((e15838 instanceof Object))
{var ex__5510__auto__ = e15838;var statearr_15839_15852 = state_15818;(statearr_15839_15852[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15853 = state_15818;
state_15818 = G__15853;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15818){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15840 = f__5522__auto__.call(null);(statearr_15840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15841);
return statearr_15840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15925){var state_val_15926 = (state_15925[1]);if((state_val_15926 === 1))
{var inst_15902 = null;var state_15925__$1 = (function (){var statearr_15927 = state_15925;(statearr_15927[7] = inst_15902);
return statearr_15927;
})();var statearr_15928_15951 = state_15925__$1;(statearr_15928_15951[2] = null);
(statearr_15928_15951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 2))
{var state_15925__$1 = state_15925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15925__$1,4,ch);
} else
{if((state_val_15926 === 3))
{var inst_15922 = (state_15925[2]);var inst_15923 = cljs.core.async.close_BANG_.call(null,out);var state_15925__$1 = (function (){var statearr_15929 = state_15925;(statearr_15929[8] = inst_15922);
return statearr_15929;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15925__$1,inst_15923);
} else
{if((state_val_15926 === 4))
{var inst_15905 = (state_15925[9]);var inst_15905__$1 = (state_15925[2]);var inst_15906 = (inst_15905__$1 == null);var inst_15907 = cljs.core.not.call(null,inst_15906);var state_15925__$1 = (function (){var statearr_15930 = state_15925;(statearr_15930[9] = inst_15905__$1);
return statearr_15930;
})();if(inst_15907)
{var statearr_15931_15952 = state_15925__$1;(statearr_15931_15952[1] = 5);
} else
{var statearr_15932_15953 = state_15925__$1;(statearr_15932_15953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 5))
{var inst_15905 = (state_15925[9]);var inst_15902 = (state_15925[7]);var inst_15909 = cljs.core._EQ_.call(null,inst_15905,inst_15902);var state_15925__$1 = state_15925;if(inst_15909)
{var statearr_15933_15954 = state_15925__$1;(statearr_15933_15954[1] = 8);
} else
{var statearr_15934_15955 = state_15925__$1;(statearr_15934_15955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 6))
{var state_15925__$1 = state_15925;var statearr_15936_15956 = state_15925__$1;(statearr_15936_15956[2] = null);
(statearr_15936_15956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 7))
{var inst_15920 = (state_15925[2]);var state_15925__$1 = state_15925;var statearr_15937_15957 = state_15925__$1;(statearr_15937_15957[2] = inst_15920);
(statearr_15937_15957[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 8))
{var inst_15902 = (state_15925[7]);var tmp15935 = inst_15902;var inst_15902__$1 = tmp15935;var state_15925__$1 = (function (){var statearr_15938 = state_15925;(statearr_15938[7] = inst_15902__$1);
return statearr_15938;
})();var statearr_15939_15958 = state_15925__$1;(statearr_15939_15958[2] = null);
(statearr_15939_15958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 9))
{var inst_15905 = (state_15925[9]);var state_15925__$1 = state_15925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15925__$1,11,out,inst_15905);
} else
{if((state_val_15926 === 10))
{var inst_15917 = (state_15925[2]);var state_15925__$1 = state_15925;var statearr_15940_15959 = state_15925__$1;(statearr_15940_15959[2] = inst_15917);
(statearr_15940_15959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15926 === 11))
{var inst_15905 = (state_15925[9]);var inst_15914 = (state_15925[2]);var inst_15902 = inst_15905;var state_15925__$1 = (function (){var statearr_15941 = state_15925;(statearr_15941[10] = inst_15914);
(statearr_15941[7] = inst_15902);
return statearr_15941;
})();var statearr_15942_15960 = state_15925__$1;(statearr_15942_15960[2] = null);
(statearr_15942_15960[1] = 2);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15946 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15946[0] = state_machine__5507__auto__);
(statearr_15946[1] = 1);
return statearr_15946;
});
var state_machine__5507__auto____1 = (function (state_15925){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15947){if((e15947 instanceof Object))
{var ex__5510__auto__ = e15947;var statearr_15948_15961 = state_15925;(statearr_15948_15961[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15962 = state_15925;
state_15925 = G__15962;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15925){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15949 = f__5522__auto__.call(null);(statearr_15949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15950);
return statearr_15949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16097 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16067){var state_val_16068 = (state_16067[1]);if((state_val_16068 === 1))
{var inst_16030 = (new Array(n));var inst_16031 = inst_16030;var inst_16032 = 0;var state_16067__$1 = (function (){var statearr_16069 = state_16067;(statearr_16069[7] = inst_16032);
(statearr_16069[8] = inst_16031);
return statearr_16069;
})();var statearr_16070_16098 = state_16067__$1;(statearr_16070_16098[2] = null);
(statearr_16070_16098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 2))
{var state_16067__$1 = state_16067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16067__$1,4,ch);
} else
{if((state_val_16068 === 3))
{var inst_16065 = (state_16067[2]);var state_16067__$1 = state_16067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16067__$1,inst_16065);
} else
{if((state_val_16068 === 4))
{var inst_16035 = (state_16067[9]);var inst_16035__$1 = (state_16067[2]);var inst_16036 = (inst_16035__$1 == null);var inst_16037 = cljs.core.not.call(null,inst_16036);var state_16067__$1 = (function (){var statearr_16071 = state_16067;(statearr_16071[9] = inst_16035__$1);
return statearr_16071;
})();if(inst_16037)
{var statearr_16072_16099 = state_16067__$1;(statearr_16072_16099[1] = 5);
} else
{var statearr_16073_16100 = state_16067__$1;(statearr_16073_16100[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 5))
{var inst_16035 = (state_16067[9]);var inst_16040 = (state_16067[10]);var inst_16032 = (state_16067[7]);var inst_16031 = (state_16067[8]);var inst_16039 = (inst_16031[inst_16032] = inst_16035);var inst_16040__$1 = (inst_16032 + 1);var inst_16041 = (inst_16040__$1 < n);var state_16067__$1 = (function (){var statearr_16074 = state_16067;(statearr_16074[11] = inst_16039);
(statearr_16074[10] = inst_16040__$1);
return statearr_16074;
})();if(cljs.core.truth_(inst_16041))
{var statearr_16075_16101 = state_16067__$1;(statearr_16075_16101[1] = 8);
} else
{var statearr_16076_16102 = state_16067__$1;(statearr_16076_16102[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 6))
{var inst_16032 = (state_16067[7]);var inst_16053 = (inst_16032 > 0);var state_16067__$1 = state_16067;if(cljs.core.truth_(inst_16053))
{var statearr_16078_16103 = state_16067__$1;(statearr_16078_16103[1] = 12);
} else
{var statearr_16079_16104 = state_16067__$1;(statearr_16079_16104[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 7))
{var inst_16063 = (state_16067[2]);var state_16067__$1 = state_16067;var statearr_16080_16105 = state_16067__$1;(statearr_16080_16105[2] = inst_16063);
(statearr_16080_16105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 8))
{var inst_16040 = (state_16067[10]);var inst_16031 = (state_16067[8]);var tmp16077 = inst_16031;var inst_16031__$1 = tmp16077;var inst_16032 = inst_16040;var state_16067__$1 = (function (){var statearr_16081 = state_16067;(statearr_16081[7] = inst_16032);
(statearr_16081[8] = inst_16031__$1);
return statearr_16081;
})();var statearr_16082_16106 = state_16067__$1;(statearr_16082_16106[2] = null);
(statearr_16082_16106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 9))
{var inst_16031 = (state_16067[8]);var inst_16045 = cljs.core.vec.call(null,inst_16031);var state_16067__$1 = state_16067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16067__$1,11,out,inst_16045);
} else
{if((state_val_16068 === 10))
{var inst_16051 = (state_16067[2]);var state_16067__$1 = state_16067;var statearr_16083_16107 = state_16067__$1;(statearr_16083_16107[2] = inst_16051);
(statearr_16083_16107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 11))
{var inst_16047 = (state_16067[2]);var inst_16048 = (new Array(n));var inst_16031 = inst_16048;var inst_16032 = 0;var state_16067__$1 = (function (){var statearr_16084 = state_16067;(statearr_16084[7] = inst_16032);
(statearr_16084[8] = inst_16031);
(statearr_16084[12] = inst_16047);
return statearr_16084;
})();var statearr_16085_16108 = state_16067__$1;(statearr_16085_16108[2] = null);
(statearr_16085_16108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 12))
{var inst_16031 = (state_16067[8]);var inst_16055 = cljs.core.vec.call(null,inst_16031);var state_16067__$1 = state_16067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16067__$1,15,out,inst_16055);
} else
{if((state_val_16068 === 13))
{var state_16067__$1 = state_16067;var statearr_16086_16109 = state_16067__$1;(statearr_16086_16109[2] = null);
(statearr_16086_16109[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 14))
{var inst_16060 = (state_16067[2]);var inst_16061 = cljs.core.async.close_BANG_.call(null,out);var state_16067__$1 = (function (){var statearr_16087 = state_16067;(statearr_16087[13] = inst_16060);
return statearr_16087;
})();var statearr_16088_16110 = state_16067__$1;(statearr_16088_16110[2] = inst_16061);
(statearr_16088_16110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16068 === 15))
{var inst_16057 = (state_16067[2]);var state_16067__$1 = state_16067;var statearr_16089_16111 = state_16067__$1;(statearr_16089_16111[2] = inst_16057);
(statearr_16089_16111[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16093[0] = state_machine__5507__auto__);
(statearr_16093[1] = 1);
return statearr_16093;
});
var state_machine__5507__auto____1 = (function (state_16067){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16094){if((e16094 instanceof Object))
{var ex__5510__auto__ = e16094;var statearr_16095_16112 = state_16067;(statearr_16095_16112[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16113 = state_16067;
state_16067 = G__16113;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16067){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16096 = f__5522__auto__.call(null);(statearr_16096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16097);
return statearr_16096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16226){var state_val_16227 = (state_16226[1]);if((state_val_16227 === 1))
{var inst_16185 = [];var inst_16186 = inst_16185;var inst_16187 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16226__$1 = (function (){var statearr_16228 = state_16226;(statearr_16228[7] = inst_16186);
(statearr_16228[8] = inst_16187);
return statearr_16228;
})();var statearr_16229_16257 = state_16226__$1;(statearr_16229_16257[2] = null);
(statearr_16229_16257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 2))
{var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16226__$1,4,ch);
} else
{if((state_val_16227 === 3))
{var inst_16224 = (state_16226[2]);var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16226__$1,inst_16224);
} else
{if((state_val_16227 === 4))
{var inst_16190 = (state_16226[9]);var inst_16190__$1 = (state_16226[2]);var inst_16191 = (inst_16190__$1 == null);var inst_16192 = cljs.core.not.call(null,inst_16191);var state_16226__$1 = (function (){var statearr_16230 = state_16226;(statearr_16230[9] = inst_16190__$1);
return statearr_16230;
})();if(inst_16192)
{var statearr_16231_16258 = state_16226__$1;(statearr_16231_16258[1] = 5);
} else
{var statearr_16232_16259 = state_16226__$1;(statearr_16232_16259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 5))
{var inst_16187 = (state_16226[8]);var inst_16190 = (state_16226[9]);var inst_16194 = (state_16226[10]);var inst_16194__$1 = f.call(null,inst_16190);var inst_16195 = cljs.core._EQ_.call(null,inst_16194__$1,inst_16187);var inst_16196 = cljs.core.keyword_identical_QMARK_.call(null,inst_16187,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16197 = (inst_16195) || (inst_16196);var state_16226__$1 = (function (){var statearr_16233 = state_16226;(statearr_16233[10] = inst_16194__$1);
return statearr_16233;
})();if(cljs.core.truth_(inst_16197))
{var statearr_16234_16260 = state_16226__$1;(statearr_16234_16260[1] = 8);
} else
{var statearr_16235_16261 = state_16226__$1;(statearr_16235_16261[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 6))
{var inst_16186 = (state_16226[7]);var inst_16211 = inst_16186.length;var inst_16212 = (inst_16211 > 0);var state_16226__$1 = state_16226;if(cljs.core.truth_(inst_16212))
{var statearr_16237_16262 = state_16226__$1;(statearr_16237_16262[1] = 12);
} else
{var statearr_16238_16263 = state_16226__$1;(statearr_16238_16263[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 7))
{var inst_16222 = (state_16226[2]);var state_16226__$1 = state_16226;var statearr_16239_16264 = state_16226__$1;(statearr_16239_16264[2] = inst_16222);
(statearr_16239_16264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 8))
{var inst_16186 = (state_16226[7]);var inst_16190 = (state_16226[9]);var inst_16194 = (state_16226[10]);var inst_16199 = inst_16186.push(inst_16190);var tmp16236 = inst_16186;var inst_16186__$1 = tmp16236;var inst_16187 = inst_16194;var state_16226__$1 = (function (){var statearr_16240 = state_16226;(statearr_16240[7] = inst_16186__$1);
(statearr_16240[8] = inst_16187);
(statearr_16240[11] = inst_16199);
return statearr_16240;
})();var statearr_16241_16265 = state_16226__$1;(statearr_16241_16265[2] = null);
(statearr_16241_16265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 9))
{var inst_16186 = (state_16226[7]);var inst_16202 = cljs.core.vec.call(null,inst_16186);var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16226__$1,11,out,inst_16202);
} else
{if((state_val_16227 === 10))
{var inst_16209 = (state_16226[2]);var state_16226__$1 = state_16226;var statearr_16242_16266 = state_16226__$1;(statearr_16242_16266[2] = inst_16209);
(statearr_16242_16266[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 11))
{var inst_16190 = (state_16226[9]);var inst_16194 = (state_16226[10]);var inst_16204 = (state_16226[2]);var inst_16205 = [];var inst_16206 = inst_16205.push(inst_16190);var inst_16186 = inst_16205;var inst_16187 = inst_16194;var state_16226__$1 = (function (){var statearr_16243 = state_16226;(statearr_16243[7] = inst_16186);
(statearr_16243[8] = inst_16187);
(statearr_16243[12] = inst_16206);
(statearr_16243[13] = inst_16204);
return statearr_16243;
})();var statearr_16244_16267 = state_16226__$1;(statearr_16244_16267[2] = null);
(statearr_16244_16267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 12))
{var inst_16186 = (state_16226[7]);var inst_16214 = cljs.core.vec.call(null,inst_16186);var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16226__$1,15,out,inst_16214);
} else
{if((state_val_16227 === 13))
{var state_16226__$1 = state_16226;var statearr_16245_16268 = state_16226__$1;(statearr_16245_16268[2] = null);
(statearr_16245_16268[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 14))
{var inst_16219 = (state_16226[2]);var inst_16220 = cljs.core.async.close_BANG_.call(null,out);var state_16226__$1 = (function (){var statearr_16246 = state_16226;(statearr_16246[14] = inst_16219);
return statearr_16246;
})();var statearr_16247_16269 = state_16226__$1;(statearr_16247_16269[2] = inst_16220);
(statearr_16247_16269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16227 === 15))
{var inst_16216 = (state_16226[2]);var state_16226__$1 = state_16226;var statearr_16248_16270 = state_16226__$1;(statearr_16248_16270[2] = inst_16216);
(statearr_16248_16270[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16252[0] = state_machine__5507__auto__);
(statearr_16252[1] = 1);
return statearr_16252;
});
var state_machine__5507__auto____1 = (function (state_16226){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16253){if((e16253 instanceof Object))
{var ex__5510__auto__ = e16253;var statearr_16254_16271 = state_16226;(statearr_16254_16271[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16272 = state_16226;
state_16226 = G__16272;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16255 = f__5522__auto__.call(null);(statearr_16255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16256);
return statearr_16255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map