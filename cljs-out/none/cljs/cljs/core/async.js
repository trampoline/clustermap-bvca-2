// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t55728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55728 = (function (f,fn_handler,meta55729){
this.f = f;
this.fn_handler = fn_handler;
this.meta55729 = meta55729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55728.cljs$lang$type = true;
cljs.core.async.t55728.cljs$lang$ctorStr = "cljs.core.async/t55728";
cljs.core.async.t55728.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55728");
});
cljs.core.async.t55728.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t55728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t55728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55730){var self__ = this;
var _55730__$1 = this;return self__.meta55729;
});
cljs.core.async.t55728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55730,meta55729__$1){var self__ = this;
var _55730__$1 = this;return (new cljs.core.async.t55728(self__.f,self__.fn_handler,meta55729__$1));
});
cljs.core.async.__GT_t55728 = (function __GT_t55728(f__$1,fn_handler__$1,meta55729){return (new cljs.core.async.t55728(f__$1,fn_handler__$1,meta55729));
});
}
return (new cljs.core.async.t55728(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__55732 = buff;if(G__55732)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__55732.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__55732.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__55732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__55732);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_55733 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_55733);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_55733,ret){
return (function (){return fn1.call(null,val_55733);
});})(val_55733,ret))
);
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___55734 = n;var x_55735 = (0);while(true){
if((x_55735 < n__4414__auto___55734))
{(a[x_55735] = (0));
{
var G__55736 = (x_55735 + (1));
x_55735 = G__55736;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__55737 = (i + (1));
i = G__55737;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t55741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55741 = (function (flag,alt_flag,meta55742){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta55742 = meta55742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55741.cljs$lang$type = true;
cljs.core.async.t55741.cljs$lang$ctorStr = "cljs.core.async/t55741";
cljs.core.async.t55741.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55741");
});})(flag))
;
cljs.core.async.t55741.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t55741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t55741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_55743){var self__ = this;
var _55743__$1 = this;return self__.meta55742;
});})(flag))
;
cljs.core.async.t55741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_55743,meta55742__$1){var self__ = this;
var _55743__$1 = this;return (new cljs.core.async.t55741(self__.flag,self__.alt_flag,meta55742__$1));
});})(flag))
;
cljs.core.async.__GT_t55741 = ((function (flag){
return (function __GT_t55741(flag__$1,alt_flag__$1,meta55742){return (new cljs.core.async.t55741(flag__$1,alt_flag__$1,meta55742));
});})(flag))
;
}
return (new cljs.core.async.t55741(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t55747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55747 = (function (cb,flag,alt_handler,meta55748){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta55748 = meta55748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55747.cljs$lang$type = true;
cljs.core.async.t55747.cljs$lang$ctorStr = "cljs.core.async/t55747";
cljs.core.async.t55747.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55747");
});
cljs.core.async.t55747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t55747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t55747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55749){var self__ = this;
var _55749__$1 = this;return self__.meta55748;
});
cljs.core.async.t55747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55749,meta55748__$1){var self__ = this;
var _55749__$1 = this;return (new cljs.core.async.t55747(self__.cb,self__.flag,self__.alt_handler,meta55748__$1));
});
cljs.core.async.__GT_t55747 = (function __GT_t55747(cb__$1,flag__$1,alt_handler__$1,meta55748){return (new cljs.core.async.t55747(cb__$1,flag__$1,alt_handler__$1,meta55748));
});
}
return (new cljs.core.async.t55747(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55750_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55750_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__55751 = (i + (1));
i = G__55751;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__55752){var map__55754 = p__55752;var map__55754__$1 = ((cljs.core.seq_QMARK_.call(null,map__55754))?cljs.core.apply.call(null,cljs.core.hash_map,map__55754):map__55754);var opts = map__55754__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__55752 = null;if (arguments.length > 1) {
  p__55752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__55752);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__55755){
var ports = cljs.core.first(arglist__55755);
var p__55752 = cljs.core.rest(arglist__55755);
return alts_BANG___delegate(ports,p__55752);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t55763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55763 = (function (ch,f,map_LT_,meta55764){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta55764 = meta55764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55763.cljs$lang$type = true;
cljs.core.async.t55763.cljs$lang$ctorStr = "cljs.core.async/t55763";
cljs.core.async.t55763.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55763");
});
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t55766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55766 = (function (fn1,_,meta55764,ch,f,map_LT_,meta55767){
this.fn1 = fn1;
this._ = _;
this.meta55764 = meta55764;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta55767 = meta55767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55766.cljs$lang$type = true;
cljs.core.async.t55766.cljs$lang$ctorStr = "cljs.core.async/t55766";
cljs.core.async.t55766.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55766");
});})(___$1))
;
cljs.core.async.t55766.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t55766.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t55766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__55756_SHARP_){return f1.call(null,(((p1__55756_SHARP_ == null))?null:self__.f.call(null,p1__55756_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t55766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55768){var self__ = this;
var _55768__$1 = this;return self__.meta55767;
});})(___$1))
;
cljs.core.async.t55766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55768,meta55767__$1){var self__ = this;
var _55768__$1 = this;return (new cljs.core.async.t55766(self__.fn1,self__._,self__.meta55764,self__.ch,self__.f,self__.map_LT_,meta55767__$1));
});})(___$1))
;
cljs.core.async.__GT_t55766 = ((function (___$1){
return (function __GT_t55766(fn1__$1,___$2,meta55764__$1,ch__$2,f__$2,map_LT___$2,meta55767){return (new cljs.core.async.t55766(fn1__$1,___$2,meta55764__$1,ch__$2,f__$2,map_LT___$2,meta55767));
});})(___$1))
;
}
return (new cljs.core.async.t55766(fn1,___$1,self__.meta55764,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55765){var self__ = this;
var _55765__$1 = this;return self__.meta55764;
});
cljs.core.async.t55763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55765,meta55764__$1){var self__ = this;
var _55765__$1 = this;return (new cljs.core.async.t55763(self__.ch,self__.f,self__.map_LT_,meta55764__$1));
});
cljs.core.async.__GT_t55763 = (function __GT_t55763(ch__$1,f__$1,map_LT___$1,meta55764){return (new cljs.core.async.t55763(ch__$1,f__$1,map_LT___$1,meta55764));
});
}
return (new cljs.core.async.t55763(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t55772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55772 = (function (ch,f,map_GT_,meta55773){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta55773 = meta55773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55772.cljs$lang$type = true;
cljs.core.async.t55772.cljs$lang$ctorStr = "cljs.core.async/t55772";
cljs.core.async.t55772.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55772");
});
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55774){var self__ = this;
var _55774__$1 = this;return self__.meta55773;
});
cljs.core.async.t55772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55774,meta55773__$1){var self__ = this;
var _55774__$1 = this;return (new cljs.core.async.t55772(self__.ch,self__.f,self__.map_GT_,meta55773__$1));
});
cljs.core.async.__GT_t55772 = (function __GT_t55772(ch__$1,f__$1,map_GT___$1,meta55773){return (new cljs.core.async.t55772(ch__$1,f__$1,map_GT___$1,meta55773));
});
}
return (new cljs.core.async.t55772(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t55778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55778 = (function (ch,p,filter_GT_,meta55779){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta55779 = meta55779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55778.cljs$lang$type = true;
cljs.core.async.t55778.cljs$lang$ctorStr = "cljs.core.async/t55778";
cljs.core.async.t55778.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55778");
});
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55780){var self__ = this;
var _55780__$1 = this;return self__.meta55779;
});
cljs.core.async.t55778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55780,meta55779__$1){var self__ = this;
var _55780__$1 = this;return (new cljs.core.async.t55778(self__.ch,self__.p,self__.filter_GT_,meta55779__$1));
});
cljs.core.async.__GT_t55778 = (function __GT_t55778(ch__$1,p__$1,filter_GT___$1,meta55779){return (new cljs.core.async.t55778(ch__$1,p__$1,filter_GT___$1,meta55779));
});
}
return (new cljs.core.async.t55778(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55863 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55863,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55863,out){
return (function (state_55842){var state_val_55843 = (state_55842[(1)]);if((state_val_55843 === (7)))
{var inst_55838 = (state_55842[(2)]);var state_55842__$1 = state_55842;var statearr_55844_55864 = state_55842__$1;(statearr_55844_55864[(2)] = inst_55838);
(statearr_55844_55864[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (1)))
{var state_55842__$1 = state_55842;var statearr_55845_55865 = state_55842__$1;(statearr_55845_55865[(2)] = null);
(statearr_55845_55865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (4)))
{var inst_55824 = (state_55842[(7)]);var inst_55824__$1 = (state_55842[(2)]);var inst_55825 = (inst_55824__$1 == null);var state_55842__$1 = (function (){var statearr_55846 = state_55842;(statearr_55846[(7)] = inst_55824__$1);
return statearr_55846;
})();if(cljs.core.truth_(inst_55825))
{var statearr_55847_55866 = state_55842__$1;(statearr_55847_55866[(1)] = (5));
} else
{var statearr_55848_55867 = state_55842__$1;(statearr_55848_55867[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (6)))
{var inst_55824 = (state_55842[(7)]);var inst_55829 = p.call(null,inst_55824);var state_55842__$1 = state_55842;if(cljs.core.truth_(inst_55829))
{var statearr_55849_55868 = state_55842__$1;(statearr_55849_55868[(1)] = (8));
} else
{var statearr_55850_55869 = state_55842__$1;(statearr_55850_55869[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (3)))
{var inst_55840 = (state_55842[(2)]);var state_55842__$1 = state_55842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55842__$1,inst_55840);
} else
{if((state_val_55843 === (2)))
{var state_55842__$1 = state_55842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55842__$1,(4),ch);
} else
{if((state_val_55843 === (11)))
{var inst_55832 = (state_55842[(2)]);var state_55842__$1 = state_55842;var statearr_55851_55870 = state_55842__$1;(statearr_55851_55870[(2)] = inst_55832);
(statearr_55851_55870[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (9)))
{var state_55842__$1 = state_55842;var statearr_55852_55871 = state_55842__$1;(statearr_55852_55871[(2)] = null);
(statearr_55852_55871[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (5)))
{var inst_55827 = cljs.core.async.close_BANG_.call(null,out);var state_55842__$1 = state_55842;var statearr_55853_55872 = state_55842__$1;(statearr_55853_55872[(2)] = inst_55827);
(statearr_55853_55872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (10)))
{var inst_55835 = (state_55842[(2)]);var state_55842__$1 = (function (){var statearr_55854 = state_55842;(statearr_55854[(8)] = inst_55835);
return statearr_55854;
})();var statearr_55855_55873 = state_55842__$1;(statearr_55855_55873[(2)] = null);
(statearr_55855_55873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55843 === (8)))
{var inst_55824 = (state_55842[(7)]);var state_55842__$1 = state_55842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55842__$1,(11),out,inst_55824);
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
});})(c__5708__auto___55863,out))
;return ((function (switch__5693__auto__,c__5708__auto___55863,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55859 = [null,null,null,null,null,null,null,null,null];(statearr_55859[(0)] = state_machine__5694__auto__);
(statearr_55859[(1)] = (1));
return statearr_55859;
});
var state_machine__5694__auto____1 = (function (state_55842){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55842);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55860){if((e55860 instanceof Object))
{var ex__5697__auto__ = e55860;var statearr_55861_55874 = state_55842;(statearr_55861_55874[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55860;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55875 = state_55842;
state_55842 = G__55875;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55842){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55863,out))
})();var state__5710__auto__ = (function (){var statearr_55862 = f__5709__auto__.call(null);(statearr_55862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55863);
return statearr_55862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55863,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_56027){var state_val_56028 = (state_56027[(1)]);if((state_val_56028 === (7)))
{var inst_56023 = (state_56027[(2)]);var state_56027__$1 = state_56027;var statearr_56029_56066 = state_56027__$1;(statearr_56029_56066[(2)] = inst_56023);
(statearr_56029_56066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (20)))
{var inst_55998 = (state_56027[(7)]);var inst_56009 = (state_56027[(2)]);var inst_56010 = cljs.core.next.call(null,inst_55998);var inst_55984 = inst_56010;var inst_55985 = null;var inst_55986 = (0);var inst_55987 = (0);var state_56027__$1 = (function (){var statearr_56030 = state_56027;(statearr_56030[(8)] = inst_55986);
(statearr_56030[(9)] = inst_56009);
(statearr_56030[(10)] = inst_55985);
(statearr_56030[(11)] = inst_55984);
(statearr_56030[(12)] = inst_55987);
return statearr_56030;
})();var statearr_56031_56067 = state_56027__$1;(statearr_56031_56067[(2)] = null);
(statearr_56031_56067[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (1)))
{var state_56027__$1 = state_56027;var statearr_56032_56068 = state_56027__$1;(statearr_56032_56068[(2)] = null);
(statearr_56032_56068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (4)))
{var inst_55973 = (state_56027[(13)]);var inst_55973__$1 = (state_56027[(2)]);var inst_55974 = (inst_55973__$1 == null);var state_56027__$1 = (function (){var statearr_56036 = state_56027;(statearr_56036[(13)] = inst_55973__$1);
return statearr_56036;
})();if(cljs.core.truth_(inst_55974))
{var statearr_56037_56069 = state_56027__$1;(statearr_56037_56069[(1)] = (5));
} else
{var statearr_56038_56070 = state_56027__$1;(statearr_56038_56070[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (15)))
{var state_56027__$1 = state_56027;var statearr_56039_56071 = state_56027__$1;(statearr_56039_56071[(2)] = null);
(statearr_56039_56071[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (13)))
{var inst_55986 = (state_56027[(8)]);var inst_55985 = (state_56027[(10)]);var inst_55984 = (state_56027[(11)]);var inst_55987 = (state_56027[(12)]);var inst_55994 = (state_56027[(2)]);var inst_55995 = (inst_55987 + (1));var tmp56033 = inst_55986;var tmp56034 = inst_55985;var tmp56035 = inst_55984;var inst_55984__$1 = tmp56035;var inst_55985__$1 = tmp56034;var inst_55986__$1 = tmp56033;var inst_55987__$1 = inst_55995;var state_56027__$1 = (function (){var statearr_56040 = state_56027;(statearr_56040[(14)] = inst_55994);
(statearr_56040[(8)] = inst_55986__$1);
(statearr_56040[(10)] = inst_55985__$1);
(statearr_56040[(11)] = inst_55984__$1);
(statearr_56040[(12)] = inst_55987__$1);
return statearr_56040;
})();var statearr_56041_56072 = state_56027__$1;(statearr_56041_56072[(2)] = null);
(statearr_56041_56072[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (6)))
{var inst_55973 = (state_56027[(13)]);var inst_55978 = f.call(null,inst_55973);var inst_55983 = cljs.core.seq.call(null,inst_55978);var inst_55984 = inst_55983;var inst_55985 = null;var inst_55986 = (0);var inst_55987 = (0);var state_56027__$1 = (function (){var statearr_56042 = state_56027;(statearr_56042[(8)] = inst_55986);
(statearr_56042[(10)] = inst_55985);
(statearr_56042[(11)] = inst_55984);
(statearr_56042[(12)] = inst_55987);
return statearr_56042;
})();var statearr_56043_56073 = state_56027__$1;(statearr_56043_56073[(2)] = null);
(statearr_56043_56073[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (17)))
{var inst_55998 = (state_56027[(7)]);var inst_56002 = cljs.core.chunk_first.call(null,inst_55998);var inst_56003 = cljs.core.chunk_rest.call(null,inst_55998);var inst_56004 = cljs.core.count.call(null,inst_56002);var inst_55984 = inst_56003;var inst_55985 = inst_56002;var inst_55986 = inst_56004;var inst_55987 = (0);var state_56027__$1 = (function (){var statearr_56044 = state_56027;(statearr_56044[(8)] = inst_55986);
(statearr_56044[(10)] = inst_55985);
(statearr_56044[(11)] = inst_55984);
(statearr_56044[(12)] = inst_55987);
return statearr_56044;
})();var statearr_56045_56074 = state_56027__$1;(statearr_56045_56074[(2)] = null);
(statearr_56045_56074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (3)))
{var inst_56025 = (state_56027[(2)]);var state_56027__$1 = state_56027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56027__$1,inst_56025);
} else
{if((state_val_56028 === (12)))
{var inst_56018 = (state_56027[(2)]);var state_56027__$1 = state_56027;var statearr_56046_56075 = state_56027__$1;(statearr_56046_56075[(2)] = inst_56018);
(statearr_56046_56075[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (2)))
{var state_56027__$1 = state_56027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56027__$1,(4),in$);
} else
{if((state_val_56028 === (19)))
{var inst_56013 = (state_56027[(2)]);var state_56027__$1 = state_56027;var statearr_56047_56076 = state_56027__$1;(statearr_56047_56076[(2)] = inst_56013);
(statearr_56047_56076[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (11)))
{var inst_55998 = (state_56027[(7)]);var inst_55984 = (state_56027[(11)]);var inst_55998__$1 = cljs.core.seq.call(null,inst_55984);var state_56027__$1 = (function (){var statearr_56048 = state_56027;(statearr_56048[(7)] = inst_55998__$1);
return statearr_56048;
})();if(inst_55998__$1)
{var statearr_56049_56077 = state_56027__$1;(statearr_56049_56077[(1)] = (14));
} else
{var statearr_56050_56078 = state_56027__$1;(statearr_56050_56078[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (9)))
{var inst_56020 = (state_56027[(2)]);var state_56027__$1 = (function (){var statearr_56051 = state_56027;(statearr_56051[(15)] = inst_56020);
return statearr_56051;
})();var statearr_56052_56079 = state_56027__$1;(statearr_56052_56079[(2)] = null);
(statearr_56052_56079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (5)))
{var inst_55976 = cljs.core.async.close_BANG_.call(null,out);var state_56027__$1 = state_56027;var statearr_56053_56080 = state_56027__$1;(statearr_56053_56080[(2)] = inst_55976);
(statearr_56053_56080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (14)))
{var inst_55998 = (state_56027[(7)]);var inst_56000 = cljs.core.chunked_seq_QMARK_.call(null,inst_55998);var state_56027__$1 = state_56027;if(inst_56000)
{var statearr_56054_56081 = state_56027__$1;(statearr_56054_56081[(1)] = (17));
} else
{var statearr_56055_56082 = state_56027__$1;(statearr_56055_56082[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (16)))
{var inst_56016 = (state_56027[(2)]);var state_56027__$1 = state_56027;var statearr_56056_56083 = state_56027__$1;(statearr_56056_56083[(2)] = inst_56016);
(statearr_56056_56083[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56028 === (10)))
{var inst_55985 = (state_56027[(10)]);var inst_55987 = (state_56027[(12)]);var inst_55992 = cljs.core._nth.call(null,inst_55985,inst_55987);var state_56027__$1 = state_56027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56027__$1,(13),out,inst_55992);
} else
{if((state_val_56028 === (18)))
{var inst_55998 = (state_56027[(7)]);var inst_56007 = cljs.core.first.call(null,inst_55998);var state_56027__$1 = state_56027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56027__$1,(20),out,inst_56007);
} else
{if((state_val_56028 === (8)))
{var inst_55986 = (state_56027[(8)]);var inst_55987 = (state_56027[(12)]);var inst_55989 = (inst_55987 < inst_55986);var inst_55990 = inst_55989;var state_56027__$1 = state_56027;if(cljs.core.truth_(inst_55990))
{var statearr_56057_56084 = state_56027__$1;(statearr_56057_56084[(1)] = (10));
} else
{var statearr_56058_56085 = state_56027__$1;(statearr_56058_56085[(1)] = (11));
}
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56062[(0)] = state_machine__5694__auto__);
(statearr_56062[(1)] = (1));
return statearr_56062;
});
var state_machine__5694__auto____1 = (function (state_56027){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56063){if((e56063 instanceof Object))
{var ex__5697__auto__ = e56063;var statearr_56064_56086 = state_56027;(statearr_56064_56086[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56063;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56087 = state_56027;
state_56027 = G__56087;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56027){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_56065 = f__5709__auto__.call(null);(statearr_56065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___56168 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56168){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56168){
return (function (state_56147){var state_val_56148 = (state_56147[(1)]);if((state_val_56148 === (7)))
{var inst_56143 = (state_56147[(2)]);var state_56147__$1 = state_56147;var statearr_56149_56169 = state_56147__$1;(statearr_56149_56169[(2)] = inst_56143);
(statearr_56149_56169[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (1)))
{var state_56147__$1 = state_56147;var statearr_56150_56170 = state_56147__$1;(statearr_56150_56170[(2)] = null);
(statearr_56150_56170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (4)))
{var inst_56130 = (state_56147[(7)]);var inst_56130__$1 = (state_56147[(2)]);var inst_56131 = (inst_56130__$1 == null);var state_56147__$1 = (function (){var statearr_56151 = state_56147;(statearr_56151[(7)] = inst_56130__$1);
return statearr_56151;
})();if(cljs.core.truth_(inst_56131))
{var statearr_56152_56171 = state_56147__$1;(statearr_56152_56171[(1)] = (5));
} else
{var statearr_56153_56172 = state_56147__$1;(statearr_56153_56172[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (6)))
{var inst_56130 = (state_56147[(7)]);var state_56147__$1 = state_56147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56147__$1,(11),to,inst_56130);
} else
{if((state_val_56148 === (3)))
{var inst_56145 = (state_56147[(2)]);var state_56147__$1 = state_56147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56147__$1,inst_56145);
} else
{if((state_val_56148 === (2)))
{var state_56147__$1 = state_56147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56147__$1,(4),from);
} else
{if((state_val_56148 === (11)))
{var inst_56140 = (state_56147[(2)]);var state_56147__$1 = (function (){var statearr_56154 = state_56147;(statearr_56154[(8)] = inst_56140);
return statearr_56154;
})();var statearr_56155_56173 = state_56147__$1;(statearr_56155_56173[(2)] = null);
(statearr_56155_56173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (9)))
{var state_56147__$1 = state_56147;var statearr_56156_56174 = state_56147__$1;(statearr_56156_56174[(2)] = null);
(statearr_56156_56174[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (5)))
{var state_56147__$1 = state_56147;if(cljs.core.truth_(close_QMARK_))
{var statearr_56157_56175 = state_56147__$1;(statearr_56157_56175[(1)] = (8));
} else
{var statearr_56158_56176 = state_56147__$1;(statearr_56158_56176[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (10)))
{var inst_56137 = (state_56147[(2)]);var state_56147__$1 = state_56147;var statearr_56159_56177 = state_56147__$1;(statearr_56159_56177[(2)] = inst_56137);
(statearr_56159_56177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (8)))
{var inst_56134 = cljs.core.async.close_BANG_.call(null,to);var state_56147__$1 = state_56147;var statearr_56160_56178 = state_56147__$1;(statearr_56160_56178[(2)] = inst_56134);
(statearr_56160_56178[(1)] = (10));
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
});})(c__5708__auto___56168))
;return ((function (switch__5693__auto__,c__5708__auto___56168){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56164 = [null,null,null,null,null,null,null,null,null];(statearr_56164[(0)] = state_machine__5694__auto__);
(statearr_56164[(1)] = (1));
return statearr_56164;
});
var state_machine__5694__auto____1 = (function (state_56147){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56165){if((e56165 instanceof Object))
{var ex__5697__auto__ = e56165;var statearr_56166_56179 = state_56147;(statearr_56166_56179[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56165;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56180 = state_56147;
state_56147 = G__56180;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56147){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56168))
})();var state__5710__auto__ = (function (){var statearr_56167 = f__5709__auto__.call(null);(statearr_56167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56168);
return statearr_56167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56168))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___56267 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56267,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56267,tc,fc){
return (function (state_56245){var state_val_56246 = (state_56245[(1)]);if((state_val_56246 === (7)))
{var inst_56241 = (state_56245[(2)]);var state_56245__$1 = state_56245;var statearr_56247_56268 = state_56245__$1;(statearr_56247_56268[(2)] = inst_56241);
(statearr_56247_56268[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (1)))
{var state_56245__$1 = state_56245;var statearr_56248_56269 = state_56245__$1;(statearr_56248_56269[(2)] = null);
(statearr_56248_56269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (4)))
{var inst_56226 = (state_56245[(7)]);var inst_56226__$1 = (state_56245[(2)]);var inst_56227 = (inst_56226__$1 == null);var state_56245__$1 = (function (){var statearr_56249 = state_56245;(statearr_56249[(7)] = inst_56226__$1);
return statearr_56249;
})();if(cljs.core.truth_(inst_56227))
{var statearr_56250_56270 = state_56245__$1;(statearr_56250_56270[(1)] = (5));
} else
{var statearr_56251_56271 = state_56245__$1;(statearr_56251_56271[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (6)))
{var inst_56226 = (state_56245[(7)]);var inst_56232 = p.call(null,inst_56226);var state_56245__$1 = state_56245;if(cljs.core.truth_(inst_56232))
{var statearr_56252_56272 = state_56245__$1;(statearr_56252_56272[(1)] = (9));
} else
{var statearr_56253_56273 = state_56245__$1;(statearr_56253_56273[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (3)))
{var inst_56243 = (state_56245[(2)]);var state_56245__$1 = state_56245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56245__$1,inst_56243);
} else
{if((state_val_56246 === (2)))
{var state_56245__$1 = state_56245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56245__$1,(4),ch);
} else
{if((state_val_56246 === (11)))
{var inst_56226 = (state_56245[(7)]);var inst_56236 = (state_56245[(2)]);var state_56245__$1 = state_56245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56245__$1,(8),inst_56236,inst_56226);
} else
{if((state_val_56246 === (9)))
{var state_56245__$1 = state_56245;var statearr_56254_56274 = state_56245__$1;(statearr_56254_56274[(2)] = tc);
(statearr_56254_56274[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (5)))
{var inst_56229 = cljs.core.async.close_BANG_.call(null,tc);var inst_56230 = cljs.core.async.close_BANG_.call(null,fc);var state_56245__$1 = (function (){var statearr_56255 = state_56245;(statearr_56255[(8)] = inst_56229);
return statearr_56255;
})();var statearr_56256_56275 = state_56245__$1;(statearr_56256_56275[(2)] = inst_56230);
(statearr_56256_56275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (10)))
{var state_56245__$1 = state_56245;var statearr_56257_56276 = state_56245__$1;(statearr_56257_56276[(2)] = fc);
(statearr_56257_56276[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56246 === (8)))
{var inst_56238 = (state_56245[(2)]);var state_56245__$1 = (function (){var statearr_56258 = state_56245;(statearr_56258[(9)] = inst_56238);
return statearr_56258;
})();var statearr_56259_56277 = state_56245__$1;(statearr_56259_56277[(2)] = null);
(statearr_56259_56277[(1)] = (2));
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
});})(c__5708__auto___56267,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___56267,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56263 = [null,null,null,null,null,null,null,null,null,null];(statearr_56263[(0)] = state_machine__5694__auto__);
(statearr_56263[(1)] = (1));
return statearr_56263;
});
var state_machine__5694__auto____1 = (function (state_56245){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56264){if((e56264 instanceof Object))
{var ex__5697__auto__ = e56264;var statearr_56265_56278 = state_56245;(statearr_56265_56278[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56264;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56279 = state_56245;
state_56245 = G__56279;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56245){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56267,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_56266 = f__5709__auto__.call(null);(statearr_56266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56267);
return statearr_56266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56267,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_56326){var state_val_56327 = (state_56326[(1)]);if((state_val_56327 === (7)))
{var inst_56322 = (state_56326[(2)]);var state_56326__$1 = state_56326;var statearr_56328_56344 = state_56326__$1;(statearr_56328_56344[(2)] = inst_56322);
(statearr_56328_56344[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56327 === (6)))
{var inst_56312 = (state_56326[(7)]);var inst_56315 = (state_56326[(8)]);var inst_56319 = f.call(null,inst_56312,inst_56315);var inst_56312__$1 = inst_56319;var state_56326__$1 = (function (){var statearr_56329 = state_56326;(statearr_56329[(7)] = inst_56312__$1);
return statearr_56329;
})();var statearr_56330_56345 = state_56326__$1;(statearr_56330_56345[(2)] = null);
(statearr_56330_56345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56327 === (5)))
{var inst_56312 = (state_56326[(7)]);var state_56326__$1 = state_56326;var statearr_56331_56346 = state_56326__$1;(statearr_56331_56346[(2)] = inst_56312);
(statearr_56331_56346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56327 === (4)))
{var inst_56315 = (state_56326[(8)]);var inst_56315__$1 = (state_56326[(2)]);var inst_56316 = (inst_56315__$1 == null);var state_56326__$1 = (function (){var statearr_56332 = state_56326;(statearr_56332[(8)] = inst_56315__$1);
return statearr_56332;
})();if(cljs.core.truth_(inst_56316))
{var statearr_56333_56347 = state_56326__$1;(statearr_56333_56347[(1)] = (5));
} else
{var statearr_56334_56348 = state_56326__$1;(statearr_56334_56348[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56327 === (3)))
{var inst_56324 = (state_56326[(2)]);var state_56326__$1 = state_56326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56326__$1,inst_56324);
} else
{if((state_val_56327 === (2)))
{var state_56326__$1 = state_56326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56326__$1,(4),ch);
} else
{if((state_val_56327 === (1)))
{var inst_56312 = init;var state_56326__$1 = (function (){var statearr_56335 = state_56326;(statearr_56335[(7)] = inst_56312);
return statearr_56335;
})();var statearr_56336_56349 = state_56326__$1;(statearr_56336_56349[(2)] = null);
(statearr_56336_56349[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56340 = [null,null,null,null,null,null,null,null,null];(statearr_56340[(0)] = state_machine__5694__auto__);
(statearr_56340[(1)] = (1));
return statearr_56340;
});
var state_machine__5694__auto____1 = (function (state_56326){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56341){if((e56341 instanceof Object))
{var ex__5697__auto__ = e56341;var statearr_56342_56350 = state_56326;(statearr_56342_56350[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56351 = state_56326;
state_56326 = G__56351;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56326){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_56343 = f__5709__auto__.call(null);(statearr_56343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_56413){var state_val_56414 = (state_56413[(1)]);if((state_val_56414 === (7)))
{var inst_56394 = (state_56413[(7)]);var inst_56399 = (state_56413[(2)]);var inst_56400 = cljs.core.next.call(null,inst_56394);var inst_56394__$1 = inst_56400;var state_56413__$1 = (function (){var statearr_56415 = state_56413;(statearr_56415[(7)] = inst_56394__$1);
(statearr_56415[(8)] = inst_56399);
return statearr_56415;
})();var statearr_56416_56434 = state_56413__$1;(statearr_56416_56434[(2)] = null);
(statearr_56416_56434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (1)))
{var inst_56393 = cljs.core.seq.call(null,coll);var inst_56394 = inst_56393;var state_56413__$1 = (function (){var statearr_56417 = state_56413;(statearr_56417[(7)] = inst_56394);
return statearr_56417;
})();var statearr_56418_56435 = state_56413__$1;(statearr_56418_56435[(2)] = null);
(statearr_56418_56435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (4)))
{var inst_56394 = (state_56413[(7)]);var inst_56397 = cljs.core.first.call(null,inst_56394);var state_56413__$1 = state_56413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56413__$1,(7),ch,inst_56397);
} else
{if((state_val_56414 === (6)))
{var inst_56409 = (state_56413[(2)]);var state_56413__$1 = state_56413;var statearr_56419_56436 = state_56413__$1;(statearr_56419_56436[(2)] = inst_56409);
(statearr_56419_56436[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (3)))
{var inst_56411 = (state_56413[(2)]);var state_56413__$1 = state_56413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56413__$1,inst_56411);
} else
{if((state_val_56414 === (2)))
{var inst_56394 = (state_56413[(7)]);var state_56413__$1 = state_56413;if(cljs.core.truth_(inst_56394))
{var statearr_56420_56437 = state_56413__$1;(statearr_56420_56437[(1)] = (4));
} else
{var statearr_56421_56438 = state_56413__$1;(statearr_56421_56438[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (9)))
{var state_56413__$1 = state_56413;var statearr_56422_56439 = state_56413__$1;(statearr_56422_56439[(2)] = null);
(statearr_56422_56439[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (5)))
{var state_56413__$1 = state_56413;if(cljs.core.truth_(close_QMARK_))
{var statearr_56423_56440 = state_56413__$1;(statearr_56423_56440[(1)] = (8));
} else
{var statearr_56424_56441 = state_56413__$1;(statearr_56424_56441[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (10)))
{var inst_56407 = (state_56413[(2)]);var state_56413__$1 = state_56413;var statearr_56425_56442 = state_56413__$1;(statearr_56425_56442[(2)] = inst_56407);
(statearr_56425_56442[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56414 === (8)))
{var inst_56404 = cljs.core.async.close_BANG_.call(null,ch);var state_56413__$1 = state_56413;var statearr_56426_56443 = state_56413__$1;(statearr_56426_56443[(2)] = inst_56404);
(statearr_56426_56443[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56430 = [null,null,null,null,null,null,null,null,null];(statearr_56430[(0)] = state_machine__5694__auto__);
(statearr_56430[(1)] = (1));
return statearr_56430;
});
var state_machine__5694__auto____1 = (function (state_56413){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56431){if((e56431 instanceof Object))
{var ex__5697__auto__ = e56431;var statearr_56432_56444 = state_56413;(statearr_56432_56444[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56431;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56445 = state_56413;
state_56413 = G__56445;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56413){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_56433 = f__5709__auto__.call(null);(statearr_56433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj56447 = {};return obj56447;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj56449 = {};return obj56449;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t56673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56673 = (function (cs,ch,mult,meta56674){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta56674 = meta56674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56673.cljs$lang$type = true;
cljs.core.async.t56673.cljs$lang$ctorStr = "cljs.core.async/t56673";
cljs.core.async.t56673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t56673");
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t56673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_56675){var self__ = this;
var _56675__$1 = this;return self__.meta56674;
});})(cs))
;
cljs.core.async.t56673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_56675,meta56674__$1){var self__ = this;
var _56675__$1 = this;return (new cljs.core.async.t56673(self__.cs,self__.ch,self__.mult,meta56674__$1));
});})(cs))
;
cljs.core.async.__GT_t56673 = ((function (cs){
return (function __GT_t56673(cs__$1,ch__$1,mult__$1,meta56674){return (new cljs.core.async.t56673(cs__$1,ch__$1,mult__$1,meta56674));
});})(cs))
;
}
return (new cljs.core.async.t56673(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___56896 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56896,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56896,cs,m,dchan,dctr,done){
return (function (state_56810){var state_val_56811 = (state_56810[(1)]);if((state_val_56811 === (7)))
{var inst_56806 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56812_56897 = state_56810__$1;(statearr_56812_56897[(2)] = inst_56806);
(statearr_56812_56897[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (20)))
{var inst_56707 = (state_56810[(7)]);var inst_56717 = cljs.core.first.call(null,inst_56707);var inst_56718 = cljs.core.nth.call(null,inst_56717,(0),null);var inst_56719 = cljs.core.nth.call(null,inst_56717,(1),null);var state_56810__$1 = (function (){var statearr_56813 = state_56810;(statearr_56813[(8)] = inst_56718);
return statearr_56813;
})();if(cljs.core.truth_(inst_56719))
{var statearr_56814_56898 = state_56810__$1;(statearr_56814_56898[(1)] = (22));
} else
{var statearr_56815_56899 = state_56810__$1;(statearr_56815_56899[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (27)))
{var inst_56747 = (state_56810[(9)]);var inst_56749 = (state_56810[(10)]);var inst_56754 = cljs.core._nth.call(null,inst_56747,inst_56749);var state_56810__$1 = (function (){var statearr_56816 = state_56810;(statearr_56816[(11)] = inst_56754);
return statearr_56816;
})();var statearr_56817_56900 = state_56810__$1;(statearr_56817_56900[(2)] = null);
(statearr_56817_56900[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (1)))
{var state_56810__$1 = state_56810;var statearr_56818_56901 = state_56810__$1;(statearr_56818_56901[(2)] = null);
(statearr_56818_56901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (24)))
{var inst_56707 = (state_56810[(7)]);var inst_56724 = (state_56810[(2)]);var inst_56725 = cljs.core.next.call(null,inst_56707);var inst_56687 = inst_56725;var inst_56688 = null;var inst_56689 = (0);var inst_56690 = (0);var state_56810__$1 = (function (){var statearr_56819 = state_56810;(statearr_56819[(12)] = inst_56690);
(statearr_56819[(13)] = inst_56687);
(statearr_56819[(14)] = inst_56688);
(statearr_56819[(15)] = inst_56689);
(statearr_56819[(16)] = inst_56724);
return statearr_56819;
})();var statearr_56820_56902 = state_56810__$1;(statearr_56820_56902[(2)] = null);
(statearr_56820_56902[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (39)))
{var inst_56767 = (state_56810[(17)]);var inst_56785 = (state_56810[(2)]);var inst_56786 = cljs.core.next.call(null,inst_56767);var inst_56746 = inst_56786;var inst_56747 = null;var inst_56748 = (0);var inst_56749 = (0);var state_56810__$1 = (function (){var statearr_56824 = state_56810;(statearr_56824[(9)] = inst_56747);
(statearr_56824[(10)] = inst_56749);
(statearr_56824[(18)] = inst_56748);
(statearr_56824[(19)] = inst_56785);
(statearr_56824[(20)] = inst_56746);
return statearr_56824;
})();var statearr_56825_56903 = state_56810__$1;(statearr_56825_56903[(2)] = null);
(statearr_56825_56903[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (4)))
{var inst_56678 = (state_56810[(21)]);var inst_56678__$1 = (state_56810[(2)]);var inst_56679 = (inst_56678__$1 == null);var state_56810__$1 = (function (){var statearr_56826 = state_56810;(statearr_56826[(21)] = inst_56678__$1);
return statearr_56826;
})();if(cljs.core.truth_(inst_56679))
{var statearr_56827_56904 = state_56810__$1;(statearr_56827_56904[(1)] = (5));
} else
{var statearr_56828_56905 = state_56810__$1;(statearr_56828_56905[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (15)))
{var inst_56690 = (state_56810[(12)]);var inst_56687 = (state_56810[(13)]);var inst_56688 = (state_56810[(14)]);var inst_56689 = (state_56810[(15)]);var inst_56703 = (state_56810[(2)]);var inst_56704 = (inst_56690 + (1));var tmp56821 = inst_56687;var tmp56822 = inst_56688;var tmp56823 = inst_56689;var inst_56687__$1 = tmp56821;var inst_56688__$1 = tmp56822;var inst_56689__$1 = tmp56823;var inst_56690__$1 = inst_56704;var state_56810__$1 = (function (){var statearr_56829 = state_56810;(statearr_56829[(12)] = inst_56690__$1);
(statearr_56829[(13)] = inst_56687__$1);
(statearr_56829[(14)] = inst_56688__$1);
(statearr_56829[(15)] = inst_56689__$1);
(statearr_56829[(22)] = inst_56703);
return statearr_56829;
})();var statearr_56830_56906 = state_56810__$1;(statearr_56830_56906[(2)] = null);
(statearr_56830_56906[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (21)))
{var inst_56728 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56831_56907 = state_56810__$1;(statearr_56831_56907[(2)] = inst_56728);
(statearr_56831_56907[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (31)))
{var inst_56754 = (state_56810[(11)]);var inst_56755 = (state_56810[(2)]);var inst_56756 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_56757 = cljs.core.async.untap_STAR_.call(null,m,inst_56754);var state_56810__$1 = (function (){var statearr_56832 = state_56810;(statearr_56832[(23)] = inst_56755);
(statearr_56832[(24)] = inst_56756);
return statearr_56832;
})();var statearr_56833_56908 = state_56810__$1;(statearr_56833_56908[(2)] = inst_56757);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56810__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (32)))
{var inst_56678 = (state_56810[(21)]);var inst_56754 = (state_56810[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56810,(31),Object,null,(30));var inst_56761 = cljs.core.async.put_BANG_.call(null,inst_56754,inst_56678,done);var state_56810__$1 = state_56810;var statearr_56834_56909 = state_56810__$1;(statearr_56834_56909[(2)] = inst_56761);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56810__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (40)))
{var inst_56776 = (state_56810[(25)]);var inst_56777 = (state_56810[(2)]);var inst_56778 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_56779 = cljs.core.async.untap_STAR_.call(null,m,inst_56776);var state_56810__$1 = (function (){var statearr_56835 = state_56810;(statearr_56835[(26)] = inst_56778);
(statearr_56835[(27)] = inst_56777);
return statearr_56835;
})();var statearr_56836_56910 = state_56810__$1;(statearr_56836_56910[(2)] = inst_56779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56810__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (33)))
{var inst_56767 = (state_56810[(17)]);var inst_56769 = cljs.core.chunked_seq_QMARK_.call(null,inst_56767);var state_56810__$1 = state_56810;if(inst_56769)
{var statearr_56837_56911 = state_56810__$1;(statearr_56837_56911[(1)] = (36));
} else
{var statearr_56838_56912 = state_56810__$1;(statearr_56838_56912[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (13)))
{var inst_56697 = (state_56810[(28)]);var inst_56700 = cljs.core.async.close_BANG_.call(null,inst_56697);var state_56810__$1 = state_56810;var statearr_56839_56913 = state_56810__$1;(statearr_56839_56913[(2)] = inst_56700);
(statearr_56839_56913[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (22)))
{var inst_56718 = (state_56810[(8)]);var inst_56721 = cljs.core.async.close_BANG_.call(null,inst_56718);var state_56810__$1 = state_56810;var statearr_56840_56914 = state_56810__$1;(statearr_56840_56914[(2)] = inst_56721);
(statearr_56840_56914[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (36)))
{var inst_56767 = (state_56810[(17)]);var inst_56771 = cljs.core.chunk_first.call(null,inst_56767);var inst_56772 = cljs.core.chunk_rest.call(null,inst_56767);var inst_56773 = cljs.core.count.call(null,inst_56771);var inst_56746 = inst_56772;var inst_56747 = inst_56771;var inst_56748 = inst_56773;var inst_56749 = (0);var state_56810__$1 = (function (){var statearr_56841 = state_56810;(statearr_56841[(9)] = inst_56747);
(statearr_56841[(10)] = inst_56749);
(statearr_56841[(18)] = inst_56748);
(statearr_56841[(20)] = inst_56746);
return statearr_56841;
})();var statearr_56842_56915 = state_56810__$1;(statearr_56842_56915[(2)] = null);
(statearr_56842_56915[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (41)))
{var inst_56678 = (state_56810[(21)]);var inst_56776 = (state_56810[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56810,(40),Object,null,(39));var inst_56783 = cljs.core.async.put_BANG_.call(null,inst_56776,inst_56678,done);var state_56810__$1 = state_56810;var statearr_56843_56916 = state_56810__$1;(statearr_56843_56916[(2)] = inst_56783);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56810__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (43)))
{var state_56810__$1 = state_56810;var statearr_56844_56917 = state_56810__$1;(statearr_56844_56917[(2)] = null);
(statearr_56844_56917[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (29)))
{var inst_56794 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56845_56918 = state_56810__$1;(statearr_56845_56918[(2)] = inst_56794);
(statearr_56845_56918[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (44)))
{var inst_56803 = (state_56810[(2)]);var state_56810__$1 = (function (){var statearr_56846 = state_56810;(statearr_56846[(29)] = inst_56803);
return statearr_56846;
})();var statearr_56847_56919 = state_56810__$1;(statearr_56847_56919[(2)] = null);
(statearr_56847_56919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (6)))
{var inst_56738 = (state_56810[(30)]);var inst_56737 = cljs.core.deref.call(null,cs);var inst_56738__$1 = cljs.core.keys.call(null,inst_56737);var inst_56739 = cljs.core.count.call(null,inst_56738__$1);var inst_56740 = cljs.core.reset_BANG_.call(null,dctr,inst_56739);var inst_56745 = cljs.core.seq.call(null,inst_56738__$1);var inst_56746 = inst_56745;var inst_56747 = null;var inst_56748 = (0);var inst_56749 = (0);var state_56810__$1 = (function (){var statearr_56848 = state_56810;(statearr_56848[(31)] = inst_56740);
(statearr_56848[(9)] = inst_56747);
(statearr_56848[(10)] = inst_56749);
(statearr_56848[(18)] = inst_56748);
(statearr_56848[(20)] = inst_56746);
(statearr_56848[(30)] = inst_56738__$1);
return statearr_56848;
})();var statearr_56849_56920 = state_56810__$1;(statearr_56849_56920[(2)] = null);
(statearr_56849_56920[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (28)))
{var inst_56767 = (state_56810[(17)]);var inst_56746 = (state_56810[(20)]);var inst_56767__$1 = cljs.core.seq.call(null,inst_56746);var state_56810__$1 = (function (){var statearr_56850 = state_56810;(statearr_56850[(17)] = inst_56767__$1);
return statearr_56850;
})();if(inst_56767__$1)
{var statearr_56851_56921 = state_56810__$1;(statearr_56851_56921[(1)] = (33));
} else
{var statearr_56852_56922 = state_56810__$1;(statearr_56852_56922[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (25)))
{var inst_56749 = (state_56810[(10)]);var inst_56748 = (state_56810[(18)]);var inst_56751 = (inst_56749 < inst_56748);var inst_56752 = inst_56751;var state_56810__$1 = state_56810;if(cljs.core.truth_(inst_56752))
{var statearr_56853_56923 = state_56810__$1;(statearr_56853_56923[(1)] = (27));
} else
{var statearr_56854_56924 = state_56810__$1;(statearr_56854_56924[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (34)))
{var state_56810__$1 = state_56810;var statearr_56855_56925 = state_56810__$1;(statearr_56855_56925[(2)] = null);
(statearr_56855_56925[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (17)))
{var state_56810__$1 = state_56810;var statearr_56856_56926 = state_56810__$1;(statearr_56856_56926[(2)] = null);
(statearr_56856_56926[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (3)))
{var inst_56808 = (state_56810[(2)]);var state_56810__$1 = state_56810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56810__$1,inst_56808);
} else
{if((state_val_56811 === (12)))
{var inst_56733 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56857_56927 = state_56810__$1;(statearr_56857_56927[(2)] = inst_56733);
(statearr_56857_56927[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (2)))
{var state_56810__$1 = state_56810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56810__$1,(4),ch);
} else
{if((state_val_56811 === (23)))
{var state_56810__$1 = state_56810;var statearr_56858_56928 = state_56810__$1;(statearr_56858_56928[(2)] = null);
(statearr_56858_56928[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (35)))
{var inst_56792 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56859_56929 = state_56810__$1;(statearr_56859_56929[(2)] = inst_56792);
(statearr_56859_56929[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (19)))
{var inst_56707 = (state_56810[(7)]);var inst_56711 = cljs.core.chunk_first.call(null,inst_56707);var inst_56712 = cljs.core.chunk_rest.call(null,inst_56707);var inst_56713 = cljs.core.count.call(null,inst_56711);var inst_56687 = inst_56712;var inst_56688 = inst_56711;var inst_56689 = inst_56713;var inst_56690 = (0);var state_56810__$1 = (function (){var statearr_56860 = state_56810;(statearr_56860[(12)] = inst_56690);
(statearr_56860[(13)] = inst_56687);
(statearr_56860[(14)] = inst_56688);
(statearr_56860[(15)] = inst_56689);
return statearr_56860;
})();var statearr_56861_56930 = state_56810__$1;(statearr_56861_56930[(2)] = null);
(statearr_56861_56930[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (11)))
{var inst_56707 = (state_56810[(7)]);var inst_56687 = (state_56810[(13)]);var inst_56707__$1 = cljs.core.seq.call(null,inst_56687);var state_56810__$1 = (function (){var statearr_56862 = state_56810;(statearr_56862[(7)] = inst_56707__$1);
return statearr_56862;
})();if(inst_56707__$1)
{var statearr_56863_56931 = state_56810__$1;(statearr_56863_56931[(1)] = (16));
} else
{var statearr_56864_56932 = state_56810__$1;(statearr_56864_56932[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (9)))
{var inst_56735 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56865_56933 = state_56810__$1;(statearr_56865_56933[(2)] = inst_56735);
(statearr_56865_56933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (5)))
{var inst_56685 = cljs.core.deref.call(null,cs);var inst_56686 = cljs.core.seq.call(null,inst_56685);var inst_56687 = inst_56686;var inst_56688 = null;var inst_56689 = (0);var inst_56690 = (0);var state_56810__$1 = (function (){var statearr_56866 = state_56810;(statearr_56866[(12)] = inst_56690);
(statearr_56866[(13)] = inst_56687);
(statearr_56866[(14)] = inst_56688);
(statearr_56866[(15)] = inst_56689);
return statearr_56866;
})();var statearr_56867_56934 = state_56810__$1;(statearr_56867_56934[(2)] = null);
(statearr_56867_56934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (14)))
{var state_56810__$1 = state_56810;var statearr_56868_56935 = state_56810__$1;(statearr_56868_56935[(2)] = null);
(statearr_56868_56935[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (45)))
{var inst_56800 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56869_56936 = state_56810__$1;(statearr_56869_56936[(2)] = inst_56800);
(statearr_56869_56936[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (26)))
{var inst_56738 = (state_56810[(30)]);var inst_56796 = (state_56810[(2)]);var inst_56797 = cljs.core.seq.call(null,inst_56738);var state_56810__$1 = (function (){var statearr_56870 = state_56810;(statearr_56870[(32)] = inst_56796);
return statearr_56870;
})();if(inst_56797)
{var statearr_56871_56937 = state_56810__$1;(statearr_56871_56937[(1)] = (42));
} else
{var statearr_56872_56938 = state_56810__$1;(statearr_56872_56938[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (16)))
{var inst_56707 = (state_56810[(7)]);var inst_56709 = cljs.core.chunked_seq_QMARK_.call(null,inst_56707);var state_56810__$1 = state_56810;if(inst_56709)
{var statearr_56876_56939 = state_56810__$1;(statearr_56876_56939[(1)] = (19));
} else
{var statearr_56877_56940 = state_56810__$1;(statearr_56877_56940[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (38)))
{var inst_56789 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56878_56941 = state_56810__$1;(statearr_56878_56941[(2)] = inst_56789);
(statearr_56878_56941[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (30)))
{var inst_56747 = (state_56810[(9)]);var inst_56749 = (state_56810[(10)]);var inst_56748 = (state_56810[(18)]);var inst_56746 = (state_56810[(20)]);var inst_56763 = (state_56810[(2)]);var inst_56764 = (inst_56749 + (1));var tmp56873 = inst_56747;var tmp56874 = inst_56748;var tmp56875 = inst_56746;var inst_56746__$1 = tmp56875;var inst_56747__$1 = tmp56873;var inst_56748__$1 = tmp56874;var inst_56749__$1 = inst_56764;var state_56810__$1 = (function (){var statearr_56879 = state_56810;(statearr_56879[(9)] = inst_56747__$1);
(statearr_56879[(10)] = inst_56749__$1);
(statearr_56879[(18)] = inst_56748__$1);
(statearr_56879[(20)] = inst_56746__$1);
(statearr_56879[(33)] = inst_56763);
return statearr_56879;
})();var statearr_56880_56942 = state_56810__$1;(statearr_56880_56942[(2)] = null);
(statearr_56880_56942[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (10)))
{var inst_56690 = (state_56810[(12)]);var inst_56688 = (state_56810[(14)]);var inst_56696 = cljs.core._nth.call(null,inst_56688,inst_56690);var inst_56697 = cljs.core.nth.call(null,inst_56696,(0),null);var inst_56698 = cljs.core.nth.call(null,inst_56696,(1),null);var state_56810__$1 = (function (){var statearr_56881 = state_56810;(statearr_56881[(28)] = inst_56697);
return statearr_56881;
})();if(cljs.core.truth_(inst_56698))
{var statearr_56882_56943 = state_56810__$1;(statearr_56882_56943[(1)] = (13));
} else
{var statearr_56883_56944 = state_56810__$1;(statearr_56883_56944[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (18)))
{var inst_56731 = (state_56810[(2)]);var state_56810__$1 = state_56810;var statearr_56884_56945 = state_56810__$1;(statearr_56884_56945[(2)] = inst_56731);
(statearr_56884_56945[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (42)))
{var state_56810__$1 = state_56810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56810__$1,(45),dchan);
} else
{if((state_val_56811 === (37)))
{var inst_56767 = (state_56810[(17)]);var inst_56776 = cljs.core.first.call(null,inst_56767);var state_56810__$1 = (function (){var statearr_56885 = state_56810;(statearr_56885[(25)] = inst_56776);
return statearr_56885;
})();var statearr_56886_56946 = state_56810__$1;(statearr_56886_56946[(2)] = null);
(statearr_56886_56946[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56811 === (8)))
{var inst_56690 = (state_56810[(12)]);var inst_56689 = (state_56810[(15)]);var inst_56692 = (inst_56690 < inst_56689);var inst_56693 = inst_56692;var state_56810__$1 = state_56810;if(cljs.core.truth_(inst_56693))
{var statearr_56887_56947 = state_56810__$1;(statearr_56887_56947[(1)] = (10));
} else
{var statearr_56888_56948 = state_56810__$1;(statearr_56888_56948[(1)] = (11));
}
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
});})(c__5708__auto___56896,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___56896,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56892[(0)] = state_machine__5694__auto__);
(statearr_56892[(1)] = (1));
return statearr_56892;
});
var state_machine__5694__auto____1 = (function (state_56810){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56893){if((e56893 instanceof Object))
{var ex__5697__auto__ = e56893;var statearr_56894_56949 = state_56810;(statearr_56894_56949[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56950 = state_56810;
state_56810 = G__56950;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56810){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56896,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_56895 = f__5709__auto__.call(null);(statearr_56895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56896);
return statearr_56895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56896,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj56952 = {};return obj56952;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t57062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57062 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57063){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57063 = meta57063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57062.cljs$lang$type = true;
cljs.core.async.t57062.cljs$lang$ctorStr = "cljs.core.async/t57062";
cljs.core.async.t57062.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t57062");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t57062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57064){var self__ = this;
var _57064__$1 = this;return self__.meta57063;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t57062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57064,meta57063__$1){var self__ = this;
var _57064__$1 = this;return (new cljs.core.async.t57062(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57063__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t57062 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t57062(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57063){return (new cljs.core.async.t57062(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57063));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t57062(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___57171 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57129){var state_val_57130 = (state_57129[(1)]);if((state_val_57130 === (7)))
{var inst_57078 = (state_57129[(7)]);var inst_57083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57078);var state_57129__$1 = state_57129;var statearr_57131_57172 = state_57129__$1;(statearr_57131_57172[(2)] = inst_57083);
(statearr_57131_57172[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (20)))
{var inst_57093 = (state_57129[(8)]);var state_57129__$1 = state_57129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57129__$1,(23),out,inst_57093);
} else
{if((state_val_57130 === (1)))
{var inst_57068 = (state_57129[(9)]);var inst_57068__$1 = calc_state.call(null);var inst_57069 = cljs.core.seq_QMARK_.call(null,inst_57068__$1);var state_57129__$1 = (function (){var statearr_57132 = state_57129;(statearr_57132[(9)] = inst_57068__$1);
return statearr_57132;
})();if(inst_57069)
{var statearr_57133_57173 = state_57129__$1;(statearr_57133_57173[(1)] = (2));
} else
{var statearr_57134_57174 = state_57129__$1;(statearr_57134_57174[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (4)))
{var inst_57068 = (state_57129[(9)]);var inst_57074 = (state_57129[(2)]);var inst_57075 = cljs.core.get.call(null,inst_57074,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_57076 = cljs.core.get.call(null,inst_57074,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_57077 = cljs.core.get.call(null,inst_57074,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_57078 = inst_57068;var state_57129__$1 = (function (){var statearr_57135 = state_57129;(statearr_57135[(10)] = inst_57076);
(statearr_57135[(11)] = inst_57075);
(statearr_57135[(7)] = inst_57078);
(statearr_57135[(12)] = inst_57077);
return statearr_57135;
})();var statearr_57136_57175 = state_57129__$1;(statearr_57136_57175[(2)] = null);
(statearr_57136_57175[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (15)))
{var state_57129__$1 = state_57129;var statearr_57137_57176 = state_57129__$1;(statearr_57137_57176[(2)] = null);
(statearr_57137_57176[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (21)))
{var state_57129__$1 = state_57129;var statearr_57138_57177 = state_57129__$1;(statearr_57138_57177[(2)] = null);
(statearr_57138_57177[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (13)))
{var inst_57125 = (state_57129[(2)]);var state_57129__$1 = state_57129;var statearr_57139_57178 = state_57129__$1;(statearr_57139_57178[(2)] = inst_57125);
(statearr_57139_57178[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (22)))
{var inst_57086 = (state_57129[(13)]);var inst_57122 = (state_57129[(2)]);var inst_57078 = inst_57086;var state_57129__$1 = (function (){var statearr_57140 = state_57129;(statearr_57140[(7)] = inst_57078);
(statearr_57140[(14)] = inst_57122);
return statearr_57140;
})();var statearr_57141_57179 = state_57129__$1;(statearr_57141_57179[(2)] = null);
(statearr_57141_57179[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (6)))
{var inst_57127 = (state_57129[(2)]);var state_57129__$1 = state_57129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57129__$1,inst_57127);
} else
{if((state_val_57130 === (17)))
{var inst_57108 = (state_57129[(15)]);var state_57129__$1 = state_57129;var statearr_57142_57180 = state_57129__$1;(statearr_57142_57180[(2)] = inst_57108);
(statearr_57142_57180[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (3)))
{var inst_57068 = (state_57129[(9)]);var state_57129__$1 = state_57129;var statearr_57143_57181 = state_57129__$1;(statearr_57143_57181[(2)] = inst_57068);
(statearr_57143_57181[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (12)))
{var inst_57094 = (state_57129[(16)]);var inst_57089 = (state_57129[(17)]);var inst_57108 = (state_57129[(15)]);var inst_57108__$1 = inst_57089.call(null,inst_57094);var state_57129__$1 = (function (){var statearr_57144 = state_57129;(statearr_57144[(15)] = inst_57108__$1);
return statearr_57144;
})();if(cljs.core.truth_(inst_57108__$1))
{var statearr_57145_57182 = state_57129__$1;(statearr_57145_57182[(1)] = (17));
} else
{var statearr_57146_57183 = state_57129__$1;(statearr_57146_57183[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (2)))
{var inst_57068 = (state_57129[(9)]);var inst_57071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57068);var state_57129__$1 = state_57129;var statearr_57147_57184 = state_57129__$1;(statearr_57147_57184[(2)] = inst_57071);
(statearr_57147_57184[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (23)))
{var inst_57119 = (state_57129[(2)]);var state_57129__$1 = state_57129;var statearr_57148_57185 = state_57129__$1;(statearr_57148_57185[(2)] = inst_57119);
(statearr_57148_57185[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (19)))
{var inst_57116 = (state_57129[(2)]);var state_57129__$1 = state_57129;if(cljs.core.truth_(inst_57116))
{var statearr_57149_57186 = state_57129__$1;(statearr_57149_57186[(1)] = (20));
} else
{var statearr_57150_57187 = state_57129__$1;(statearr_57150_57187[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (11)))
{var inst_57093 = (state_57129[(8)]);var inst_57099 = (inst_57093 == null);var state_57129__$1 = state_57129;if(cljs.core.truth_(inst_57099))
{var statearr_57151_57188 = state_57129__$1;(statearr_57151_57188[(1)] = (14));
} else
{var statearr_57152_57189 = state_57129__$1;(statearr_57152_57189[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (9)))
{var inst_57086 = (state_57129[(13)]);var inst_57086__$1 = (state_57129[(2)]);var inst_57087 = cljs.core.get.call(null,inst_57086__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_57088 = cljs.core.get.call(null,inst_57086__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_57089 = cljs.core.get.call(null,inst_57086__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_57129__$1 = (function (){var statearr_57153 = state_57129;(statearr_57153[(13)] = inst_57086__$1);
(statearr_57153[(18)] = inst_57088);
(statearr_57153[(17)] = inst_57089);
return statearr_57153;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_57129__$1,(10),inst_57087);
} else
{if((state_val_57130 === (5)))
{var inst_57078 = (state_57129[(7)]);var inst_57081 = cljs.core.seq_QMARK_.call(null,inst_57078);var state_57129__$1 = state_57129;if(inst_57081)
{var statearr_57154_57190 = state_57129__$1;(statearr_57154_57190[(1)] = (7));
} else
{var statearr_57155_57191 = state_57129__$1;(statearr_57155_57191[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (14)))
{var inst_57094 = (state_57129[(16)]);var inst_57101 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57094);var state_57129__$1 = state_57129;var statearr_57156_57192 = state_57129__$1;(statearr_57156_57192[(2)] = inst_57101);
(statearr_57156_57192[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (16)))
{var inst_57104 = (state_57129[(2)]);var inst_57105 = calc_state.call(null);var inst_57078 = inst_57105;var state_57129__$1 = (function (){var statearr_57157 = state_57129;(statearr_57157[(7)] = inst_57078);
(statearr_57157[(19)] = inst_57104);
return statearr_57157;
})();var statearr_57158_57193 = state_57129__$1;(statearr_57158_57193[(2)] = null);
(statearr_57158_57193[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (10)))
{var inst_57094 = (state_57129[(16)]);var inst_57093 = (state_57129[(8)]);var inst_57092 = (state_57129[(2)]);var inst_57093__$1 = cljs.core.nth.call(null,inst_57092,(0),null);var inst_57094__$1 = cljs.core.nth.call(null,inst_57092,(1),null);var inst_57095 = (inst_57093__$1 == null);var inst_57096 = cljs.core._EQ_.call(null,inst_57094__$1,change);var inst_57097 = (inst_57095) || (inst_57096);var state_57129__$1 = (function (){var statearr_57159 = state_57129;(statearr_57159[(16)] = inst_57094__$1);
(statearr_57159[(8)] = inst_57093__$1);
return statearr_57159;
})();if(cljs.core.truth_(inst_57097))
{var statearr_57160_57194 = state_57129__$1;(statearr_57160_57194[(1)] = (11));
} else
{var statearr_57161_57195 = state_57129__$1;(statearr_57161_57195[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (18)))
{var inst_57094 = (state_57129[(16)]);var inst_57088 = (state_57129[(18)]);var inst_57089 = (state_57129[(17)]);var inst_57111 = cljs.core.empty_QMARK_.call(null,inst_57089);var inst_57112 = inst_57088.call(null,inst_57094);var inst_57113 = cljs.core.not.call(null,inst_57112);var inst_57114 = (inst_57111) && (inst_57113);var state_57129__$1 = state_57129;var statearr_57162_57196 = state_57129__$1;(statearr_57162_57196[(2)] = inst_57114);
(statearr_57162_57196[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57130 === (8)))
{var inst_57078 = (state_57129[(7)]);var state_57129__$1 = state_57129;var statearr_57163_57197 = state_57129__$1;(statearr_57163_57197[(2)] = inst_57078);
(statearr_57163_57197[(1)] = (9));
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
});})(c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57167[(0)] = state_machine__5694__auto__);
(statearr_57167[(1)] = (1));
return statearr_57167;
});
var state_machine__5694__auto____1 = (function (state_57129){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57129);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57168){if((e57168 instanceof Object))
{var ex__5697__auto__ = e57168;var statearr_57169_57198 = state_57129;(statearr_57169_57198[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57199 = state_57129;
state_57129 = G__57199;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57129){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_57170 = f__5709__auto__.call(null);(statearr_57170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57171);
return statearr_57170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj57201 = {};return obj57201;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__57202_SHARP_){if(cljs.core.truth_(p1__57202_SHARP_.call(null,topic)))
{return p1__57202_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__57202_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t57327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57327 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta57328){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta57328 = meta57328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57327.cljs$lang$type = true;
cljs.core.async.t57327.cljs$lang$ctorStr = "cljs.core.async/t57327";
cljs.core.async.t57327.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t57327");
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t57327.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t57327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_57329){var self__ = this;
var _57329__$1 = this;return self__.meta57328;
});})(mults,ensure_mult))
;
cljs.core.async.t57327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_57329,meta57328__$1){var self__ = this;
var _57329__$1 = this;return (new cljs.core.async.t57327(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta57328__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t57327 = ((function (mults,ensure_mult){
return (function __GT_t57327(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta57328){return (new cljs.core.async.t57327(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta57328));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t57327(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___57451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57451,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57451,mults,ensure_mult,p){
return (function (state_57403){var state_val_57404 = (state_57403[(1)]);if((state_val_57404 === (7)))
{var inst_57399 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57405_57452 = state_57403__$1;(statearr_57405_57452[(2)] = inst_57399);
(statearr_57405_57452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (20)))
{var state_57403__$1 = state_57403;var statearr_57406_57453 = state_57403__$1;(statearr_57406_57453[(2)] = null);
(statearr_57406_57453[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (1)))
{var state_57403__$1 = state_57403;var statearr_57407_57454 = state_57403__$1;(statearr_57407_57454[(2)] = null);
(statearr_57407_57454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (24)))
{var inst_57382 = (state_57403[(7)]);var inst_57332 = (state_57403[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_57403,(23),Object,null,(22));var inst_57389 = cljs.core.async.muxch_STAR_.call(null,inst_57382);var state_57403__$1 = state_57403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57403__$1,(25),inst_57389,inst_57332);
} else
{if((state_val_57404 === (4)))
{var inst_57332 = (state_57403[(8)]);var inst_57332__$1 = (state_57403[(2)]);var inst_57333 = (inst_57332__$1 == null);var state_57403__$1 = (function (){var statearr_57408 = state_57403;(statearr_57408[(8)] = inst_57332__$1);
return statearr_57408;
})();if(cljs.core.truth_(inst_57333))
{var statearr_57409_57455 = state_57403__$1;(statearr_57409_57455[(1)] = (5));
} else
{var statearr_57410_57456 = state_57403__$1;(statearr_57410_57456[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (15)))
{var inst_57374 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57411_57457 = state_57403__$1;(statearr_57411_57457[(2)] = inst_57374);
(statearr_57411_57457[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (21)))
{var inst_57396 = (state_57403[(2)]);var state_57403__$1 = (function (){var statearr_57412 = state_57403;(statearr_57412[(9)] = inst_57396);
return statearr_57412;
})();var statearr_57413_57458 = state_57403__$1;(statearr_57413_57458[(2)] = null);
(statearr_57413_57458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (13)))
{var inst_57356 = (state_57403[(10)]);var inst_57358 = cljs.core.chunked_seq_QMARK_.call(null,inst_57356);var state_57403__$1 = state_57403;if(inst_57358)
{var statearr_57414_57459 = state_57403__$1;(statearr_57414_57459[(1)] = (16));
} else
{var statearr_57415_57460 = state_57403__$1;(statearr_57415_57460[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (22)))
{var inst_57393 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57416_57461 = state_57403__$1;(statearr_57416_57461[(2)] = inst_57393);
(statearr_57416_57461[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (6)))
{var inst_57380 = (state_57403[(11)]);var inst_57382 = (state_57403[(7)]);var inst_57332 = (state_57403[(8)]);var inst_57380__$1 = topic_fn.call(null,inst_57332);var inst_57381 = cljs.core.deref.call(null,mults);var inst_57382__$1 = cljs.core.get.call(null,inst_57381,inst_57380__$1);var state_57403__$1 = (function (){var statearr_57417 = state_57403;(statearr_57417[(11)] = inst_57380__$1);
(statearr_57417[(7)] = inst_57382__$1);
return statearr_57417;
})();if(cljs.core.truth_(inst_57382__$1))
{var statearr_57418_57462 = state_57403__$1;(statearr_57418_57462[(1)] = (19));
} else
{var statearr_57419_57463 = state_57403__$1;(statearr_57419_57463[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (25)))
{var inst_57391 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57420_57464 = state_57403__$1;(statearr_57420_57464[(2)] = inst_57391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57403__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (17)))
{var inst_57356 = (state_57403[(10)]);var inst_57365 = cljs.core.first.call(null,inst_57356);var inst_57366 = cljs.core.async.muxch_STAR_.call(null,inst_57365);var inst_57367 = cljs.core.async.close_BANG_.call(null,inst_57366);var inst_57368 = cljs.core.next.call(null,inst_57356);var inst_57342 = inst_57368;var inst_57343 = null;var inst_57344 = (0);var inst_57345 = (0);var state_57403__$1 = (function (){var statearr_57421 = state_57403;(statearr_57421[(12)] = inst_57367);
(statearr_57421[(13)] = inst_57344);
(statearr_57421[(14)] = inst_57345);
(statearr_57421[(15)] = inst_57343);
(statearr_57421[(16)] = inst_57342);
return statearr_57421;
})();var statearr_57422_57465 = state_57403__$1;(statearr_57422_57465[(2)] = null);
(statearr_57422_57465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (3)))
{var inst_57401 = (state_57403[(2)]);var state_57403__$1 = state_57403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57403__$1,inst_57401);
} else
{if((state_val_57404 === (12)))
{var inst_57376 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57423_57466 = state_57403__$1;(statearr_57423_57466[(2)] = inst_57376);
(statearr_57423_57466[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (2)))
{var state_57403__$1 = state_57403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57403__$1,(4),ch);
} else
{if((state_val_57404 === (23)))
{var inst_57380 = (state_57403[(11)]);var inst_57384 = (state_57403[(2)]);var inst_57385 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_57380);var state_57403__$1 = (function (){var statearr_57424 = state_57403;(statearr_57424[(17)] = inst_57384);
return statearr_57424;
})();var statearr_57425_57467 = state_57403__$1;(statearr_57425_57467[(2)] = inst_57385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57403__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (19)))
{var state_57403__$1 = state_57403;var statearr_57426_57468 = state_57403__$1;(statearr_57426_57468[(2)] = null);
(statearr_57426_57468[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (11)))
{var inst_57356 = (state_57403[(10)]);var inst_57342 = (state_57403[(16)]);var inst_57356__$1 = cljs.core.seq.call(null,inst_57342);var state_57403__$1 = (function (){var statearr_57427 = state_57403;(statearr_57427[(10)] = inst_57356__$1);
return statearr_57427;
})();if(inst_57356__$1)
{var statearr_57428_57469 = state_57403__$1;(statearr_57428_57469[(1)] = (13));
} else
{var statearr_57429_57470 = state_57403__$1;(statearr_57429_57470[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (9)))
{var inst_57378 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57430_57471 = state_57403__$1;(statearr_57430_57471[(2)] = inst_57378);
(statearr_57430_57471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (5)))
{var inst_57339 = cljs.core.deref.call(null,mults);var inst_57340 = cljs.core.vals.call(null,inst_57339);var inst_57341 = cljs.core.seq.call(null,inst_57340);var inst_57342 = inst_57341;var inst_57343 = null;var inst_57344 = (0);var inst_57345 = (0);var state_57403__$1 = (function (){var statearr_57431 = state_57403;(statearr_57431[(13)] = inst_57344);
(statearr_57431[(14)] = inst_57345);
(statearr_57431[(15)] = inst_57343);
(statearr_57431[(16)] = inst_57342);
return statearr_57431;
})();var statearr_57432_57472 = state_57403__$1;(statearr_57432_57472[(2)] = null);
(statearr_57432_57472[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (14)))
{var state_57403__$1 = state_57403;var statearr_57436_57473 = state_57403__$1;(statearr_57436_57473[(2)] = null);
(statearr_57436_57473[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (16)))
{var inst_57356 = (state_57403[(10)]);var inst_57360 = cljs.core.chunk_first.call(null,inst_57356);var inst_57361 = cljs.core.chunk_rest.call(null,inst_57356);var inst_57362 = cljs.core.count.call(null,inst_57360);var inst_57342 = inst_57361;var inst_57343 = inst_57360;var inst_57344 = inst_57362;var inst_57345 = (0);var state_57403__$1 = (function (){var statearr_57437 = state_57403;(statearr_57437[(13)] = inst_57344);
(statearr_57437[(14)] = inst_57345);
(statearr_57437[(15)] = inst_57343);
(statearr_57437[(16)] = inst_57342);
return statearr_57437;
})();var statearr_57438_57474 = state_57403__$1;(statearr_57438_57474[(2)] = null);
(statearr_57438_57474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (10)))
{var inst_57344 = (state_57403[(13)]);var inst_57345 = (state_57403[(14)]);var inst_57343 = (state_57403[(15)]);var inst_57342 = (state_57403[(16)]);var inst_57350 = cljs.core._nth.call(null,inst_57343,inst_57345);var inst_57351 = cljs.core.async.muxch_STAR_.call(null,inst_57350);var inst_57352 = cljs.core.async.close_BANG_.call(null,inst_57351);var inst_57353 = (inst_57345 + (1));var tmp57433 = inst_57344;var tmp57434 = inst_57343;var tmp57435 = inst_57342;var inst_57342__$1 = tmp57435;var inst_57343__$1 = tmp57434;var inst_57344__$1 = tmp57433;var inst_57345__$1 = inst_57353;var state_57403__$1 = (function (){var statearr_57439 = state_57403;(statearr_57439[(13)] = inst_57344__$1);
(statearr_57439[(14)] = inst_57345__$1);
(statearr_57439[(15)] = inst_57343__$1);
(statearr_57439[(16)] = inst_57342__$1);
(statearr_57439[(18)] = inst_57352);
return statearr_57439;
})();var statearr_57440_57475 = state_57403__$1;(statearr_57440_57475[(2)] = null);
(statearr_57440_57475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (18)))
{var inst_57371 = (state_57403[(2)]);var state_57403__$1 = state_57403;var statearr_57441_57476 = state_57403__$1;(statearr_57441_57476[(2)] = inst_57371);
(statearr_57441_57476[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57404 === (8)))
{var inst_57344 = (state_57403[(13)]);var inst_57345 = (state_57403[(14)]);var inst_57347 = (inst_57345 < inst_57344);var inst_57348 = inst_57347;var state_57403__$1 = state_57403;if(cljs.core.truth_(inst_57348))
{var statearr_57442_57477 = state_57403__$1;(statearr_57442_57477[(1)] = (10));
} else
{var statearr_57443_57478 = state_57403__$1;(statearr_57443_57478[(1)] = (11));
}
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
}
}
});})(c__5708__auto___57451,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___57451,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57447[(0)] = state_machine__5694__auto__);
(statearr_57447[(1)] = (1));
return statearr_57447;
});
var state_machine__5694__auto____1 = (function (state_57403){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57448){if((e57448 instanceof Object))
{var ex__5697__auto__ = e57448;var statearr_57449_57479 = state_57403;(statearr_57449_57479[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57480 = state_57403;
state_57403 = G__57480;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57403){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57451,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_57450 = f__5709__auto__.call(null);(statearr_57450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57451);
return statearr_57450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57451,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5708__auto___57617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_57587){var state_val_57588 = (state_57587[(1)]);if((state_val_57588 === (7)))
{var state_57587__$1 = state_57587;var statearr_57589_57618 = state_57587__$1;(statearr_57589_57618[(2)] = null);
(statearr_57589_57618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (1)))
{var state_57587__$1 = state_57587;var statearr_57590_57619 = state_57587__$1;(statearr_57590_57619[(2)] = null);
(statearr_57590_57619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (4)))
{var inst_57551 = (state_57587[(7)]);var inst_57553 = (inst_57551 < cnt);var state_57587__$1 = state_57587;if(cljs.core.truth_(inst_57553))
{var statearr_57591_57620 = state_57587__$1;(statearr_57591_57620[(1)] = (6));
} else
{var statearr_57592_57621 = state_57587__$1;(statearr_57592_57621[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (15)))
{var inst_57583 = (state_57587[(2)]);var state_57587__$1 = state_57587;var statearr_57593_57622 = state_57587__$1;(statearr_57593_57622[(2)] = inst_57583);
(statearr_57593_57622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (13)))
{var inst_57576 = cljs.core.async.close_BANG_.call(null,out);var state_57587__$1 = state_57587;var statearr_57594_57623 = state_57587__$1;(statearr_57594_57623[(2)] = inst_57576);
(statearr_57594_57623[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (6)))
{var state_57587__$1 = state_57587;var statearr_57595_57624 = state_57587__$1;(statearr_57595_57624[(2)] = null);
(statearr_57595_57624[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (3)))
{var inst_57585 = (state_57587[(2)]);var state_57587__$1 = state_57587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57587__$1,inst_57585);
} else
{if((state_val_57588 === (12)))
{var inst_57573 = (state_57587[(8)]);var inst_57573__$1 = (state_57587[(2)]);var inst_57574 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_57573__$1);var state_57587__$1 = (function (){var statearr_57596 = state_57587;(statearr_57596[(8)] = inst_57573__$1);
return statearr_57596;
})();if(cljs.core.truth_(inst_57574))
{var statearr_57597_57625 = state_57587__$1;(statearr_57597_57625[(1)] = (13));
} else
{var statearr_57598_57626 = state_57587__$1;(statearr_57598_57626[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (2)))
{var inst_57550 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_57551 = (0);var state_57587__$1 = (function (){var statearr_57599 = state_57587;(statearr_57599[(7)] = inst_57551);
(statearr_57599[(9)] = inst_57550);
return statearr_57599;
})();var statearr_57600_57627 = state_57587__$1;(statearr_57600_57627[(2)] = null);
(statearr_57600_57627[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (11)))
{var inst_57551 = (state_57587[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_57587,(10),Object,null,(9));var inst_57560 = chs__$1.call(null,inst_57551);var inst_57561 = done.call(null,inst_57551);var inst_57562 = cljs.core.async.take_BANG_.call(null,inst_57560,inst_57561);var state_57587__$1 = state_57587;var statearr_57601_57628 = state_57587__$1;(statearr_57601_57628[(2)] = inst_57562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57587__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (9)))
{var inst_57551 = (state_57587[(7)]);var inst_57564 = (state_57587[(2)]);var inst_57565 = (inst_57551 + (1));var inst_57551__$1 = inst_57565;var state_57587__$1 = (function (){var statearr_57602 = state_57587;(statearr_57602[(7)] = inst_57551__$1);
(statearr_57602[(10)] = inst_57564);
return statearr_57602;
})();var statearr_57603_57629 = state_57587__$1;(statearr_57603_57629[(2)] = null);
(statearr_57603_57629[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (5)))
{var inst_57571 = (state_57587[(2)]);var state_57587__$1 = (function (){var statearr_57604 = state_57587;(statearr_57604[(11)] = inst_57571);
return statearr_57604;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57587__$1,(12),dchan);
} else
{if((state_val_57588 === (14)))
{var inst_57573 = (state_57587[(8)]);var inst_57578 = cljs.core.apply.call(null,f,inst_57573);var state_57587__$1 = state_57587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57587__$1,(16),out,inst_57578);
} else
{if((state_val_57588 === (16)))
{var inst_57580 = (state_57587[(2)]);var state_57587__$1 = (function (){var statearr_57605 = state_57587;(statearr_57605[(12)] = inst_57580);
return statearr_57605;
})();var statearr_57606_57630 = state_57587__$1;(statearr_57606_57630[(2)] = null);
(statearr_57606_57630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (10)))
{var inst_57555 = (state_57587[(2)]);var inst_57556 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_57587__$1 = (function (){var statearr_57607 = state_57587;(statearr_57607[(13)] = inst_57555);
return statearr_57607;
})();var statearr_57608_57631 = state_57587__$1;(statearr_57608_57631[(2)] = inst_57556);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57587__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57588 === (8)))
{var inst_57569 = (state_57587[(2)]);var state_57587__$1 = state_57587;var statearr_57609_57632 = state_57587__$1;(statearr_57609_57632[(2)] = inst_57569);
(statearr_57609_57632[(1)] = (5));
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
});})(c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57613[(0)] = state_machine__5694__auto__);
(statearr_57613[(1)] = (1));
return statearr_57613;
});
var state_machine__5694__auto____1 = (function (state_57587){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57614){if((e57614 instanceof Object))
{var ex__5697__auto__ = e57614;var statearr_57615_57633 = state_57587;(statearr_57615_57633[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57634 = state_57587;
state_57587 = G__57634;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57587){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_57616 = f__5709__auto__.call(null);(statearr_57616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57617);
return statearr_57616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57617,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57742,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57742,out){
return (function (state_57718){var state_val_57719 = (state_57718[(1)]);if((state_val_57719 === (7)))
{var inst_57697 = (state_57718[(7)]);var inst_57698 = (state_57718[(8)]);var inst_57697__$1 = (state_57718[(2)]);var inst_57698__$1 = cljs.core.nth.call(null,inst_57697__$1,(0),null);var inst_57699 = cljs.core.nth.call(null,inst_57697__$1,(1),null);var inst_57700 = (inst_57698__$1 == null);var state_57718__$1 = (function (){var statearr_57720 = state_57718;(statearr_57720[(7)] = inst_57697__$1);
(statearr_57720[(8)] = inst_57698__$1);
(statearr_57720[(9)] = inst_57699);
return statearr_57720;
})();if(cljs.core.truth_(inst_57700))
{var statearr_57721_57743 = state_57718__$1;(statearr_57721_57743[(1)] = (8));
} else
{var statearr_57722_57744 = state_57718__$1;(statearr_57722_57744[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (1)))
{var inst_57689 = cljs.core.vec.call(null,chs);var inst_57690 = inst_57689;var state_57718__$1 = (function (){var statearr_57723 = state_57718;(statearr_57723[(10)] = inst_57690);
return statearr_57723;
})();var statearr_57724_57745 = state_57718__$1;(statearr_57724_57745[(2)] = null);
(statearr_57724_57745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (4)))
{var inst_57690 = (state_57718[(10)]);var state_57718__$1 = state_57718;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_57718__$1,(7),inst_57690);
} else
{if((state_val_57719 === (6)))
{var inst_57714 = (state_57718[(2)]);var state_57718__$1 = state_57718;var statearr_57725_57746 = state_57718__$1;(statearr_57725_57746[(2)] = inst_57714);
(statearr_57725_57746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (3)))
{var inst_57716 = (state_57718[(2)]);var state_57718__$1 = state_57718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57718__$1,inst_57716);
} else
{if((state_val_57719 === (2)))
{var inst_57690 = (state_57718[(10)]);var inst_57692 = cljs.core.count.call(null,inst_57690);var inst_57693 = (inst_57692 > (0));var state_57718__$1 = state_57718;if(cljs.core.truth_(inst_57693))
{var statearr_57727_57747 = state_57718__$1;(statearr_57727_57747[(1)] = (4));
} else
{var statearr_57728_57748 = state_57718__$1;(statearr_57728_57748[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (11)))
{var inst_57690 = (state_57718[(10)]);var inst_57707 = (state_57718[(2)]);var tmp57726 = inst_57690;var inst_57690__$1 = tmp57726;var state_57718__$1 = (function (){var statearr_57729 = state_57718;(statearr_57729[(11)] = inst_57707);
(statearr_57729[(10)] = inst_57690__$1);
return statearr_57729;
})();var statearr_57730_57749 = state_57718__$1;(statearr_57730_57749[(2)] = null);
(statearr_57730_57749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (9)))
{var inst_57698 = (state_57718[(8)]);var state_57718__$1 = state_57718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57718__$1,(11),out,inst_57698);
} else
{if((state_val_57719 === (5)))
{var inst_57712 = cljs.core.async.close_BANG_.call(null,out);var state_57718__$1 = state_57718;var statearr_57731_57750 = state_57718__$1;(statearr_57731_57750[(2)] = inst_57712);
(statearr_57731_57750[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (10)))
{var inst_57710 = (state_57718[(2)]);var state_57718__$1 = state_57718;var statearr_57732_57751 = state_57718__$1;(statearr_57732_57751[(2)] = inst_57710);
(statearr_57732_57751[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57719 === (8)))
{var inst_57697 = (state_57718[(7)]);var inst_57698 = (state_57718[(8)]);var inst_57699 = (state_57718[(9)]);var inst_57690 = (state_57718[(10)]);var inst_57702 = (function (){var c = inst_57699;var v = inst_57698;var vec__57695 = inst_57697;var cs = inst_57690;return ((function (c,v,vec__57695,cs,inst_57697,inst_57698,inst_57699,inst_57690,state_val_57719,c__5708__auto___57742,out){
return (function (p1__57635_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__57635_SHARP_);
});
;})(c,v,vec__57695,cs,inst_57697,inst_57698,inst_57699,inst_57690,state_val_57719,c__5708__auto___57742,out))
})();var inst_57703 = cljs.core.filterv.call(null,inst_57702,inst_57690);var inst_57690__$1 = inst_57703;var state_57718__$1 = (function (){var statearr_57733 = state_57718;(statearr_57733[(10)] = inst_57690__$1);
return statearr_57733;
})();var statearr_57734_57752 = state_57718__$1;(statearr_57734_57752[(2)] = null);
(statearr_57734_57752[(1)] = (2));
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
});})(c__5708__auto___57742,out))
;return ((function (switch__5693__auto__,c__5708__auto___57742,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57738 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57738[(0)] = state_machine__5694__auto__);
(statearr_57738[(1)] = (1));
return statearr_57738;
});
var state_machine__5694__auto____1 = (function (state_57718){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57718);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57739){if((e57739 instanceof Object))
{var ex__5697__auto__ = e57739;var statearr_57740_57753 = state_57718;(statearr_57740_57753[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57754 = state_57718;
state_57718 = G__57754;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57718){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57742,out))
})();var state__5710__auto__ = (function (){var statearr_57741 = f__5709__auto__.call(null);(statearr_57741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57742);
return statearr_57741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57742,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57847,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57847,out){
return (function (state_57824){var state_val_57825 = (state_57824[(1)]);if((state_val_57825 === (7)))
{var inst_57806 = (state_57824[(7)]);var inst_57806__$1 = (state_57824[(2)]);var inst_57807 = (inst_57806__$1 == null);var inst_57808 = cljs.core.not.call(null,inst_57807);var state_57824__$1 = (function (){var statearr_57826 = state_57824;(statearr_57826[(7)] = inst_57806__$1);
return statearr_57826;
})();if(inst_57808)
{var statearr_57827_57848 = state_57824__$1;(statearr_57827_57848[(1)] = (8));
} else
{var statearr_57828_57849 = state_57824__$1;(statearr_57828_57849[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (1)))
{var inst_57801 = (0);var state_57824__$1 = (function (){var statearr_57829 = state_57824;(statearr_57829[(8)] = inst_57801);
return statearr_57829;
})();var statearr_57830_57850 = state_57824__$1;(statearr_57830_57850[(2)] = null);
(statearr_57830_57850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (4)))
{var state_57824__$1 = state_57824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57824__$1,(7),ch);
} else
{if((state_val_57825 === (6)))
{var inst_57819 = (state_57824[(2)]);var state_57824__$1 = state_57824;var statearr_57831_57851 = state_57824__$1;(statearr_57831_57851[(2)] = inst_57819);
(statearr_57831_57851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (3)))
{var inst_57821 = (state_57824[(2)]);var inst_57822 = cljs.core.async.close_BANG_.call(null,out);var state_57824__$1 = (function (){var statearr_57832 = state_57824;(statearr_57832[(9)] = inst_57821);
return statearr_57832;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57824__$1,inst_57822);
} else
{if((state_val_57825 === (2)))
{var inst_57801 = (state_57824[(8)]);var inst_57803 = (inst_57801 < n);var state_57824__$1 = state_57824;if(cljs.core.truth_(inst_57803))
{var statearr_57833_57852 = state_57824__$1;(statearr_57833_57852[(1)] = (4));
} else
{var statearr_57834_57853 = state_57824__$1;(statearr_57834_57853[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (11)))
{var inst_57801 = (state_57824[(8)]);var inst_57811 = (state_57824[(2)]);var inst_57812 = (inst_57801 + (1));var inst_57801__$1 = inst_57812;var state_57824__$1 = (function (){var statearr_57835 = state_57824;(statearr_57835[(8)] = inst_57801__$1);
(statearr_57835[(10)] = inst_57811);
return statearr_57835;
})();var statearr_57836_57854 = state_57824__$1;(statearr_57836_57854[(2)] = null);
(statearr_57836_57854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (9)))
{var state_57824__$1 = state_57824;var statearr_57837_57855 = state_57824__$1;(statearr_57837_57855[(2)] = null);
(statearr_57837_57855[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (5)))
{var state_57824__$1 = state_57824;var statearr_57838_57856 = state_57824__$1;(statearr_57838_57856[(2)] = null);
(statearr_57838_57856[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (10)))
{var inst_57816 = (state_57824[(2)]);var state_57824__$1 = state_57824;var statearr_57839_57857 = state_57824__$1;(statearr_57839_57857[(2)] = inst_57816);
(statearr_57839_57857[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57825 === (8)))
{var inst_57806 = (state_57824[(7)]);var state_57824__$1 = state_57824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57824__$1,(11),out,inst_57806);
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
});})(c__5708__auto___57847,out))
;return ((function (switch__5693__auto__,c__5708__auto___57847,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57843 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57843[(0)] = state_machine__5694__auto__);
(statearr_57843[(1)] = (1));
return statearr_57843;
});
var state_machine__5694__auto____1 = (function (state_57824){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57824);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57844){if((e57844 instanceof Object))
{var ex__5697__auto__ = e57844;var statearr_57845_57858 = state_57824;(statearr_57845_57858[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57844;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57859 = state_57824;
state_57824 = G__57859;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57824){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57847,out))
})();var state__5710__auto__ = (function (){var statearr_57846 = f__5709__auto__.call(null);(statearr_57846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57847);
return statearr_57846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57847,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57956,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57956,out){
return (function (state_57931){var state_val_57932 = (state_57931[(1)]);if((state_val_57932 === (7)))
{var inst_57926 = (state_57931[(2)]);var state_57931__$1 = state_57931;var statearr_57933_57957 = state_57931__$1;(statearr_57933_57957[(2)] = inst_57926);
(statearr_57933_57957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (1)))
{var inst_57908 = null;var state_57931__$1 = (function (){var statearr_57934 = state_57931;(statearr_57934[(7)] = inst_57908);
return statearr_57934;
})();var statearr_57935_57958 = state_57931__$1;(statearr_57935_57958[(2)] = null);
(statearr_57935_57958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (4)))
{var inst_57911 = (state_57931[(8)]);var inst_57911__$1 = (state_57931[(2)]);var inst_57912 = (inst_57911__$1 == null);var inst_57913 = cljs.core.not.call(null,inst_57912);var state_57931__$1 = (function (){var statearr_57936 = state_57931;(statearr_57936[(8)] = inst_57911__$1);
return statearr_57936;
})();if(inst_57913)
{var statearr_57937_57959 = state_57931__$1;(statearr_57937_57959[(1)] = (5));
} else
{var statearr_57938_57960 = state_57931__$1;(statearr_57938_57960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (6)))
{var state_57931__$1 = state_57931;var statearr_57939_57961 = state_57931__$1;(statearr_57939_57961[(2)] = null);
(statearr_57939_57961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (3)))
{var inst_57928 = (state_57931[(2)]);var inst_57929 = cljs.core.async.close_BANG_.call(null,out);var state_57931__$1 = (function (){var statearr_57940 = state_57931;(statearr_57940[(9)] = inst_57928);
return statearr_57940;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57931__$1,inst_57929);
} else
{if((state_val_57932 === (2)))
{var state_57931__$1 = state_57931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57931__$1,(4),ch);
} else
{if((state_val_57932 === (11)))
{var inst_57911 = (state_57931[(8)]);var inst_57920 = (state_57931[(2)]);var inst_57908 = inst_57911;var state_57931__$1 = (function (){var statearr_57941 = state_57931;(statearr_57941[(10)] = inst_57920);
(statearr_57941[(7)] = inst_57908);
return statearr_57941;
})();var statearr_57942_57962 = state_57931__$1;(statearr_57942_57962[(2)] = null);
(statearr_57942_57962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (9)))
{var inst_57911 = (state_57931[(8)]);var state_57931__$1 = state_57931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57931__$1,(11),out,inst_57911);
} else
{if((state_val_57932 === (5)))
{var inst_57908 = (state_57931[(7)]);var inst_57911 = (state_57931[(8)]);var inst_57915 = cljs.core._EQ_.call(null,inst_57911,inst_57908);var state_57931__$1 = state_57931;if(inst_57915)
{var statearr_57944_57963 = state_57931__$1;(statearr_57944_57963[(1)] = (8));
} else
{var statearr_57945_57964 = state_57931__$1;(statearr_57945_57964[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (10)))
{var inst_57923 = (state_57931[(2)]);var state_57931__$1 = state_57931;var statearr_57946_57965 = state_57931__$1;(statearr_57946_57965[(2)] = inst_57923);
(statearr_57946_57965[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57932 === (8)))
{var inst_57908 = (state_57931[(7)]);var tmp57943 = inst_57908;var inst_57908__$1 = tmp57943;var state_57931__$1 = (function (){var statearr_57947 = state_57931;(statearr_57947[(7)] = inst_57908__$1);
return statearr_57947;
})();var statearr_57948_57966 = state_57931__$1;(statearr_57948_57966[(2)] = null);
(statearr_57948_57966[(1)] = (2));
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
});})(c__5708__auto___57956,out))
;return ((function (switch__5693__auto__,c__5708__auto___57956,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57952 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57952[(0)] = state_machine__5694__auto__);
(statearr_57952[(1)] = (1));
return statearr_57952;
});
var state_machine__5694__auto____1 = (function (state_57931){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57931);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57953){if((e57953 instanceof Object))
{var ex__5697__auto__ = e57953;var statearr_57954_57967 = state_57931;(statearr_57954_57967[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57968 = state_57931;
state_57931 = G__57968;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57931){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57956,out))
})();var state__5710__auto__ = (function (){var statearr_57955 = f__5709__auto__.call(null);(statearr_57955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57956);
return statearr_57955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57956,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___58103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___58103,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___58103,out){
return (function (state_58073){var state_val_58074 = (state_58073[(1)]);if((state_val_58074 === (7)))
{var inst_58069 = (state_58073[(2)]);var state_58073__$1 = state_58073;var statearr_58075_58104 = state_58073__$1;(statearr_58075_58104[(2)] = inst_58069);
(statearr_58075_58104[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (1)))
{var inst_58036 = (new Array(n));var inst_58037 = inst_58036;var inst_58038 = (0);var state_58073__$1 = (function (){var statearr_58076 = state_58073;(statearr_58076[(7)] = inst_58038);
(statearr_58076[(8)] = inst_58037);
return statearr_58076;
})();var statearr_58077_58105 = state_58073__$1;(statearr_58077_58105[(2)] = null);
(statearr_58077_58105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (4)))
{var inst_58041 = (state_58073[(9)]);var inst_58041__$1 = (state_58073[(2)]);var inst_58042 = (inst_58041__$1 == null);var inst_58043 = cljs.core.not.call(null,inst_58042);var state_58073__$1 = (function (){var statearr_58078 = state_58073;(statearr_58078[(9)] = inst_58041__$1);
return statearr_58078;
})();if(inst_58043)
{var statearr_58079_58106 = state_58073__$1;(statearr_58079_58106[(1)] = (5));
} else
{var statearr_58080_58107 = state_58073__$1;(statearr_58080_58107[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (15)))
{var inst_58063 = (state_58073[(2)]);var state_58073__$1 = state_58073;var statearr_58081_58108 = state_58073__$1;(statearr_58081_58108[(2)] = inst_58063);
(statearr_58081_58108[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (13)))
{var state_58073__$1 = state_58073;var statearr_58082_58109 = state_58073__$1;(statearr_58082_58109[(2)] = null);
(statearr_58082_58109[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (6)))
{var inst_58038 = (state_58073[(7)]);var inst_58059 = (inst_58038 > (0));var state_58073__$1 = state_58073;if(cljs.core.truth_(inst_58059))
{var statearr_58083_58110 = state_58073__$1;(statearr_58083_58110[(1)] = (12));
} else
{var statearr_58084_58111 = state_58073__$1;(statearr_58084_58111[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (3)))
{var inst_58071 = (state_58073[(2)]);var state_58073__$1 = state_58073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58073__$1,inst_58071);
} else
{if((state_val_58074 === (12)))
{var inst_58037 = (state_58073[(8)]);var inst_58061 = cljs.core.vec.call(null,inst_58037);var state_58073__$1 = state_58073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58073__$1,(15),out,inst_58061);
} else
{if((state_val_58074 === (2)))
{var state_58073__$1 = state_58073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58073__$1,(4),ch);
} else
{if((state_val_58074 === (11)))
{var inst_58053 = (state_58073[(2)]);var inst_58054 = (new Array(n));var inst_58037 = inst_58054;var inst_58038 = (0);var state_58073__$1 = (function (){var statearr_58085 = state_58073;(statearr_58085[(10)] = inst_58053);
(statearr_58085[(7)] = inst_58038);
(statearr_58085[(8)] = inst_58037);
return statearr_58085;
})();var statearr_58086_58112 = state_58073__$1;(statearr_58086_58112[(2)] = null);
(statearr_58086_58112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (9)))
{var inst_58037 = (state_58073[(8)]);var inst_58051 = cljs.core.vec.call(null,inst_58037);var state_58073__$1 = state_58073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58073__$1,(11),out,inst_58051);
} else
{if((state_val_58074 === (5)))
{var inst_58041 = (state_58073[(9)]);var inst_58038 = (state_58073[(7)]);var inst_58037 = (state_58073[(8)]);var inst_58046 = (state_58073[(11)]);var inst_58045 = (inst_58037[inst_58038] = inst_58041);var inst_58046__$1 = (inst_58038 + (1));var inst_58047 = (inst_58046__$1 < n);var state_58073__$1 = (function (){var statearr_58087 = state_58073;(statearr_58087[(11)] = inst_58046__$1);
(statearr_58087[(12)] = inst_58045);
return statearr_58087;
})();if(cljs.core.truth_(inst_58047))
{var statearr_58088_58113 = state_58073__$1;(statearr_58088_58113[(1)] = (8));
} else
{var statearr_58089_58114 = state_58073__$1;(statearr_58089_58114[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (14)))
{var inst_58066 = (state_58073[(2)]);var inst_58067 = cljs.core.async.close_BANG_.call(null,out);var state_58073__$1 = (function (){var statearr_58091 = state_58073;(statearr_58091[(13)] = inst_58066);
return statearr_58091;
})();var statearr_58092_58115 = state_58073__$1;(statearr_58092_58115[(2)] = inst_58067);
(statearr_58092_58115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (10)))
{var inst_58057 = (state_58073[(2)]);var state_58073__$1 = state_58073;var statearr_58093_58116 = state_58073__$1;(statearr_58093_58116[(2)] = inst_58057);
(statearr_58093_58116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58074 === (8)))
{var inst_58037 = (state_58073[(8)]);var inst_58046 = (state_58073[(11)]);var tmp58090 = inst_58037;var inst_58037__$1 = tmp58090;var inst_58038 = inst_58046;var state_58073__$1 = (function (){var statearr_58094 = state_58073;(statearr_58094[(7)] = inst_58038);
(statearr_58094[(8)] = inst_58037__$1);
return statearr_58094;
})();var statearr_58095_58117 = state_58073__$1;(statearr_58095_58117[(2)] = null);
(statearr_58095_58117[(1)] = (2));
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
});})(c__5708__auto___58103,out))
;return ((function (switch__5693__auto__,c__5708__auto___58103,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_58099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58099[(0)] = state_machine__5694__auto__);
(statearr_58099[(1)] = (1));
return statearr_58099;
});
var state_machine__5694__auto____1 = (function (state_58073){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_58073);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e58100){if((e58100 instanceof Object))
{var ex__5697__auto__ = e58100;var statearr_58101_58118 = state_58073;(statearr_58101_58118[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58119 = state_58073;
state_58073 = G__58119;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_58073){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_58073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___58103,out))
})();var state__5710__auto__ = (function (){var statearr_58102 = f__5709__auto__.call(null);(statearr_58102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___58103);
return statearr_58102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___58103,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___58262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___58262,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___58262,out){
return (function (state_58232){var state_val_58233 = (state_58232[(1)]);if((state_val_58233 === (7)))
{var inst_58228 = (state_58232[(2)]);var state_58232__$1 = state_58232;var statearr_58234_58263 = state_58232__$1;(statearr_58234_58263[(2)] = inst_58228);
(statearr_58234_58263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (1)))
{var inst_58191 = [];var inst_58192 = inst_58191;var inst_58193 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_58232__$1 = (function (){var statearr_58235 = state_58232;(statearr_58235[(7)] = inst_58192);
(statearr_58235[(8)] = inst_58193);
return statearr_58235;
})();var statearr_58236_58264 = state_58232__$1;(statearr_58236_58264[(2)] = null);
(statearr_58236_58264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (4)))
{var inst_58196 = (state_58232[(9)]);var inst_58196__$1 = (state_58232[(2)]);var inst_58197 = (inst_58196__$1 == null);var inst_58198 = cljs.core.not.call(null,inst_58197);var state_58232__$1 = (function (){var statearr_58237 = state_58232;(statearr_58237[(9)] = inst_58196__$1);
return statearr_58237;
})();if(inst_58198)
{var statearr_58238_58265 = state_58232__$1;(statearr_58238_58265[(1)] = (5));
} else
{var statearr_58239_58266 = state_58232__$1;(statearr_58239_58266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (15)))
{var inst_58222 = (state_58232[(2)]);var state_58232__$1 = state_58232;var statearr_58240_58267 = state_58232__$1;(statearr_58240_58267[(2)] = inst_58222);
(statearr_58240_58267[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (13)))
{var state_58232__$1 = state_58232;var statearr_58241_58268 = state_58232__$1;(statearr_58241_58268[(2)] = null);
(statearr_58241_58268[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (6)))
{var inst_58192 = (state_58232[(7)]);var inst_58217 = inst_58192.length;var inst_58218 = (inst_58217 > (0));var state_58232__$1 = state_58232;if(cljs.core.truth_(inst_58218))
{var statearr_58242_58269 = state_58232__$1;(statearr_58242_58269[(1)] = (12));
} else
{var statearr_58243_58270 = state_58232__$1;(statearr_58243_58270[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (3)))
{var inst_58230 = (state_58232[(2)]);var state_58232__$1 = state_58232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58232__$1,inst_58230);
} else
{if((state_val_58233 === (12)))
{var inst_58192 = (state_58232[(7)]);var inst_58220 = cljs.core.vec.call(null,inst_58192);var state_58232__$1 = state_58232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58232__$1,(15),out,inst_58220);
} else
{if((state_val_58233 === (2)))
{var state_58232__$1 = state_58232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58232__$1,(4),ch);
} else
{if((state_val_58233 === (11)))
{var inst_58196 = (state_58232[(9)]);var inst_58200 = (state_58232[(10)]);var inst_58210 = (state_58232[(2)]);var inst_58211 = [];var inst_58212 = inst_58211.push(inst_58196);var inst_58192 = inst_58211;var inst_58193 = inst_58200;var state_58232__$1 = (function (){var statearr_58244 = state_58232;(statearr_58244[(7)] = inst_58192);
(statearr_58244[(8)] = inst_58193);
(statearr_58244[(11)] = inst_58212);
(statearr_58244[(12)] = inst_58210);
return statearr_58244;
})();var statearr_58245_58271 = state_58232__$1;(statearr_58245_58271[(2)] = null);
(statearr_58245_58271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (9)))
{var inst_58192 = (state_58232[(7)]);var inst_58208 = cljs.core.vec.call(null,inst_58192);var state_58232__$1 = state_58232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58232__$1,(11),out,inst_58208);
} else
{if((state_val_58233 === (5)))
{var inst_58196 = (state_58232[(9)]);var inst_58193 = (state_58232[(8)]);var inst_58200 = (state_58232[(10)]);var inst_58200__$1 = f.call(null,inst_58196);var inst_58201 = cljs.core._EQ_.call(null,inst_58200__$1,inst_58193);var inst_58202 = cljs.core.keyword_identical_QMARK_.call(null,inst_58193,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_58203 = (inst_58201) || (inst_58202);var state_58232__$1 = (function (){var statearr_58246 = state_58232;(statearr_58246[(10)] = inst_58200__$1);
return statearr_58246;
})();if(cljs.core.truth_(inst_58203))
{var statearr_58247_58272 = state_58232__$1;(statearr_58247_58272[(1)] = (8));
} else
{var statearr_58248_58273 = state_58232__$1;(statearr_58248_58273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (14)))
{var inst_58225 = (state_58232[(2)]);var inst_58226 = cljs.core.async.close_BANG_.call(null,out);var state_58232__$1 = (function (){var statearr_58250 = state_58232;(statearr_58250[(13)] = inst_58225);
return statearr_58250;
})();var statearr_58251_58274 = state_58232__$1;(statearr_58251_58274[(2)] = inst_58226);
(statearr_58251_58274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (10)))
{var inst_58215 = (state_58232[(2)]);var state_58232__$1 = state_58232;var statearr_58252_58275 = state_58232__$1;(statearr_58252_58275[(2)] = inst_58215);
(statearr_58252_58275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58233 === (8)))
{var inst_58196 = (state_58232[(9)]);var inst_58192 = (state_58232[(7)]);var inst_58200 = (state_58232[(10)]);var inst_58205 = inst_58192.push(inst_58196);var tmp58249 = inst_58192;var inst_58192__$1 = tmp58249;var inst_58193 = inst_58200;var state_58232__$1 = (function (){var statearr_58253 = state_58232;(statearr_58253[(7)] = inst_58192__$1);
(statearr_58253[(8)] = inst_58193);
(statearr_58253[(14)] = inst_58205);
return statearr_58253;
})();var statearr_58254_58276 = state_58232__$1;(statearr_58254_58276[(2)] = null);
(statearr_58254_58276[(1)] = (2));
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
});})(c__5708__auto___58262,out))
;return ((function (switch__5693__auto__,c__5708__auto___58262,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_58258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58258[(0)] = state_machine__5694__auto__);
(statearr_58258[(1)] = (1));
return statearr_58258;
});
var state_machine__5694__auto____1 = (function (state_58232){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_58232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e58259){if((e58259 instanceof Object))
{var ex__5697__auto__ = e58259;var statearr_58260_58277 = state_58232;(statearr_58260_58277[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58278 = state_58232;
state_58232 = G__58278;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_58232){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_58232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___58262,out))
})();var state__5710__auto__ = (function (){var statearr_58261 = f__5709__auto__.call(null);(statearr_58261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___58262);
return statearr_58261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___58262,out))
);
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