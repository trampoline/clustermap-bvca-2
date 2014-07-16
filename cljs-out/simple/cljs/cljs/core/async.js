// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26791 = (function (f,fn_handler,meta26792){
this.f = f;
this.fn_handler = fn_handler;
this.meta26792 = meta26792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26791.cljs$lang$type = true;
cljs.core.async.t26791.cljs$lang$ctorStr = "cljs.core.async/t26791";
cljs.core.async.t26791.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26791");
});
cljs.core.async.t26791.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26793){var self__ = this;
var _26793__$1 = this;return self__.meta26792;
});
cljs.core.async.t26791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26793,meta26792__$1){var self__ = this;
var _26793__$1 = this;return (new cljs.core.async.t26791(self__.f,self__.fn_handler,meta26792__$1));
});
cljs.core.async.__GT_t26791 = (function __GT_t26791(f__$1,fn_handler__$1,meta26792){return (new cljs.core.async.t26791(f__$1,fn_handler__$1,meta26792));
});
}
return (new cljs.core.async.t26791(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26795 = buff;if(G__26795)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__26795.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26795.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26795);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26795);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_26796 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26796);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_26796,ret){
return (function (){return fn1.call(null,val_26796);
});})(val_26796,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___26797 = n;var x_26798 = (0);while(true){
if((x_26798 < n__4399__auto___26797))
{(a[x_26798] = (0));
{
var G__26799 = (x_26798 + (1));
x_26798 = G__26799;
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
var G__26800 = (i + (1));
i = G__26800;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26804 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26804 = (function (flag,alt_flag,meta26805){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26805 = meta26805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26804.cljs$lang$type = true;
cljs.core.async.t26804.cljs$lang$ctorStr = "cljs.core.async/t26804";
cljs.core.async.t26804.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26804");
});})(flag))
;
cljs.core.async.t26804.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26806){var self__ = this;
var _26806__$1 = this;return self__.meta26805;
});})(flag))
;
cljs.core.async.t26804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26806,meta26805__$1){var self__ = this;
var _26806__$1 = this;return (new cljs.core.async.t26804(self__.flag,self__.alt_flag,meta26805__$1));
});})(flag))
;
cljs.core.async.__GT_t26804 = ((function (flag){
return (function __GT_t26804(flag__$1,alt_flag__$1,meta26805){return (new cljs.core.async.t26804(flag__$1,alt_flag__$1,meta26805));
});})(flag))
;
}
return (new cljs.core.async.t26804(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26810 = (function (cb,flag,alt_handler,meta26811){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26811 = meta26811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26810.cljs$lang$type = true;
cljs.core.async.t26810.cljs$lang$ctorStr = "cljs.core.async/t26810";
cljs.core.async.t26810.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26810");
});
cljs.core.async.t26810.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26812){var self__ = this;
var _26812__$1 = this;return self__.meta26811;
});
cljs.core.async.t26810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26812,meta26811__$1){var self__ = this;
var _26812__$1 = this;return (new cljs.core.async.t26810(self__.cb,self__.flag,self__.alt_handler,meta26811__$1));
});
cljs.core.async.__GT_t26810 = (function __GT_t26810(cb__$1,flag__$1,alt_handler__$1,meta26811){return (new cljs.core.async.t26810(cb__$1,flag__$1,alt_handler__$1,meta26811));
});
}
return (new cljs.core.async.t26810(cb,flag,alt_handler,null));
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
return (function (p1__26813_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26813_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__26814 = (i + (1));
i = G__26814;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
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
var alts_BANG___delegate = function (ports,p__26815){var map__26817 = p__26815;var map__26817__$1 = ((cljs.core.seq_QMARK_.call(null,map__26817))?cljs.core.apply.call(null,cljs.core.hash_map,map__26817):map__26817);var opts = map__26817__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26815 = null;if (arguments.length > 1) {
  p__26815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26815);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26818){
var ports = cljs.core.first(arglist__26818);
var p__26815 = cljs.core.rest(arglist__26818);
return alts_BANG___delegate(ports,p__26815);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26826 = (function (ch,f,map_LT_,meta26827){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26827 = meta26827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26826.cljs$lang$type = true;
cljs.core.async.t26826.cljs$lang$ctorStr = "cljs.core.async/t26826";
cljs.core.async.t26826.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26826");
});
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26829 = (function (fn1,_,meta26827,ch,f,map_LT_,meta26830){
this.fn1 = fn1;
this._ = _;
this.meta26827 = meta26827;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26830 = meta26830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26829.cljs$lang$type = true;
cljs.core.async.t26829.cljs$lang$ctorStr = "cljs.core.async/t26829";
cljs.core.async.t26829.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26829");
});})(___$1))
;
cljs.core.async.t26829.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26829.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26819_SHARP_){return f1.call(null,(((p1__26819_SHARP_ == null))?null:self__.f.call(null,p1__26819_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26831){var self__ = this;
var _26831__$1 = this;return self__.meta26830;
});})(___$1))
;
cljs.core.async.t26829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26831,meta26830__$1){var self__ = this;
var _26831__$1 = this;return (new cljs.core.async.t26829(self__.fn1,self__._,self__.meta26827,self__.ch,self__.f,self__.map_LT_,meta26830__$1));
});})(___$1))
;
cljs.core.async.__GT_t26829 = ((function (___$1){
return (function __GT_t26829(fn1__$1,___$2,meta26827__$1,ch__$2,f__$2,map_LT___$2,meta26830){return (new cljs.core.async.t26829(fn1__$1,___$2,meta26827__$1,ch__$2,f__$2,map_LT___$2,meta26830));
});})(___$1))
;
}
return (new cljs.core.async.t26829(fn1,___$1,self__.meta26827,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26828){var self__ = this;
var _26828__$1 = this;return self__.meta26827;
});
cljs.core.async.t26826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26828,meta26827__$1){var self__ = this;
var _26828__$1 = this;return (new cljs.core.async.t26826(self__.ch,self__.f,self__.map_LT_,meta26827__$1));
});
cljs.core.async.__GT_t26826 = (function __GT_t26826(ch__$1,f__$1,map_LT___$1,meta26827){return (new cljs.core.async.t26826(ch__$1,f__$1,map_LT___$1,meta26827));
});
}
return (new cljs.core.async.t26826(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26835 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26835 = (function (ch,f,map_GT_,meta26836){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26836 = meta26836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26835.cljs$lang$type = true;
cljs.core.async.t26835.cljs$lang$ctorStr = "cljs.core.async/t26835";
cljs.core.async.t26835.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26835");
});
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26837){var self__ = this;
var _26837__$1 = this;return self__.meta26836;
});
cljs.core.async.t26835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26837,meta26836__$1){var self__ = this;
var _26837__$1 = this;return (new cljs.core.async.t26835(self__.ch,self__.f,self__.map_GT_,meta26836__$1));
});
cljs.core.async.__GT_t26835 = (function __GT_t26835(ch__$1,f__$1,map_GT___$1,meta26836){return (new cljs.core.async.t26835(ch__$1,f__$1,map_GT___$1,meta26836));
});
}
return (new cljs.core.async.t26835(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26841 = (function (ch,p,filter_GT_,meta26842){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26842 = meta26842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26841.cljs$lang$type = true;
cljs.core.async.t26841.cljs$lang$ctorStr = "cljs.core.async/t26841";
cljs.core.async.t26841.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26841");
});
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26843){var self__ = this;
var _26843__$1 = this;return self__.meta26842;
});
cljs.core.async.t26841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26843,meta26842__$1){var self__ = this;
var _26843__$1 = this;return (new cljs.core.async.t26841(self__.ch,self__.p,self__.filter_GT_,meta26842__$1));
});
cljs.core.async.__GT_t26841 = (function __GT_t26841(ch__$1,p__$1,filter_GT___$1,meta26842){return (new cljs.core.async.t26841(ch__$1,p__$1,filter_GT___$1,meta26842));
});
}
return (new cljs.core.async.t26841(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___26926 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26926,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26926,out){
return (function (state_26905){var state_val_26906 = (state_26905[(1)]);if((state_val_26906 === (7)))
{var inst_26901 = (state_26905[(2)]);var state_26905__$1 = state_26905;var statearr_26907_26927 = state_26905__$1;(statearr_26907_26927[(2)] = inst_26901);
(statearr_26907_26927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (1)))
{var state_26905__$1 = state_26905;var statearr_26908_26928 = state_26905__$1;(statearr_26908_26928[(2)] = null);
(statearr_26908_26928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (4)))
{var inst_26887 = (state_26905[(7)]);var inst_26887__$1 = (state_26905[(2)]);var inst_26888 = (inst_26887__$1 == null);var state_26905__$1 = (function (){var statearr_26909 = state_26905;(statearr_26909[(7)] = inst_26887__$1);
return statearr_26909;
})();if(cljs.core.truth_(inst_26888))
{var statearr_26910_26929 = state_26905__$1;(statearr_26910_26929[(1)] = (5));
} else
{var statearr_26911_26930 = state_26905__$1;(statearr_26911_26930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (6)))
{var inst_26887 = (state_26905[(7)]);var inst_26892 = p.call(null,inst_26887);var state_26905__$1 = state_26905;if(cljs.core.truth_(inst_26892))
{var statearr_26912_26931 = state_26905__$1;(statearr_26912_26931[(1)] = (8));
} else
{var statearr_26913_26932 = state_26905__$1;(statearr_26913_26932[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (3)))
{var inst_26903 = (state_26905[(2)]);var state_26905__$1 = state_26905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26905__$1,inst_26903);
} else
{if((state_val_26906 === (2)))
{var state_26905__$1 = state_26905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26905__$1,(4),ch);
} else
{if((state_val_26906 === (11)))
{var inst_26895 = (state_26905[(2)]);var state_26905__$1 = state_26905;var statearr_26914_26933 = state_26905__$1;(statearr_26914_26933[(2)] = inst_26895);
(statearr_26914_26933[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (9)))
{var state_26905__$1 = state_26905;var statearr_26915_26934 = state_26905__$1;(statearr_26915_26934[(2)] = null);
(statearr_26915_26934[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (5)))
{var inst_26890 = cljs.core.async.close_BANG_.call(null,out);var state_26905__$1 = state_26905;var statearr_26916_26935 = state_26905__$1;(statearr_26916_26935[(2)] = inst_26890);
(statearr_26916_26935[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (10)))
{var inst_26898 = (state_26905[(2)]);var state_26905__$1 = (function (){var statearr_26917 = state_26905;(statearr_26917[(8)] = inst_26898);
return statearr_26917;
})();var statearr_26918_26936 = state_26905__$1;(statearr_26918_26936[(2)] = null);
(statearr_26918_26936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26906 === (8)))
{var inst_26887 = (state_26905[(7)]);var state_26905__$1 = state_26905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26905__$1,(11),out,inst_26887);
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
});})(c__5693__auto___26926,out))
;return ((function (switch__5678__auto__,c__5693__auto___26926,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26922 = [null,null,null,null,null,null,null,null,null];(statearr_26922[(0)] = state_machine__5679__auto__);
(statearr_26922[(1)] = (1));
return statearr_26922;
});
var state_machine__5679__auto____1 = (function (state_26905){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26905);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object))
{var ex__5682__auto__ = e26923;var statearr_26924_26937 = state_26905;(statearr_26924_26937[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26905);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26938 = state_26905;
state_26905 = G__26938;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26905){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26926,out))
})();var state__5695__auto__ = (function (){var statearr_26925 = f__5694__auto__.call(null);(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26926);
return statearr_26925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26926,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_27090){var state_val_27091 = (state_27090[(1)]);if((state_val_27091 === (7)))
{var inst_27086 = (state_27090[(2)]);var state_27090__$1 = state_27090;var statearr_27092_27129 = state_27090__$1;(statearr_27092_27129[(2)] = inst_27086);
(statearr_27092_27129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (20)))
{var inst_27061 = (state_27090[(7)]);var inst_27072 = (state_27090[(2)]);var inst_27073 = cljs.core.next.call(null,inst_27061);var inst_27047 = inst_27073;var inst_27048 = null;var inst_27049 = (0);var inst_27050 = (0);var state_27090__$1 = (function (){var statearr_27093 = state_27090;(statearr_27093[(8)] = inst_27050);
(statearr_27093[(9)] = inst_27048);
(statearr_27093[(10)] = inst_27047);
(statearr_27093[(11)] = inst_27072);
(statearr_27093[(12)] = inst_27049);
return statearr_27093;
})();var statearr_27094_27130 = state_27090__$1;(statearr_27094_27130[(2)] = null);
(statearr_27094_27130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (1)))
{var state_27090__$1 = state_27090;var statearr_27095_27131 = state_27090__$1;(statearr_27095_27131[(2)] = null);
(statearr_27095_27131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (4)))
{var inst_27036 = (state_27090[(13)]);var inst_27036__$1 = (state_27090[(2)]);var inst_27037 = (inst_27036__$1 == null);var state_27090__$1 = (function (){var statearr_27099 = state_27090;(statearr_27099[(13)] = inst_27036__$1);
return statearr_27099;
})();if(cljs.core.truth_(inst_27037))
{var statearr_27100_27132 = state_27090__$1;(statearr_27100_27132[(1)] = (5));
} else
{var statearr_27101_27133 = state_27090__$1;(statearr_27101_27133[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (15)))
{var state_27090__$1 = state_27090;var statearr_27102_27134 = state_27090__$1;(statearr_27102_27134[(2)] = null);
(statearr_27102_27134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (13)))
{var inst_27050 = (state_27090[(8)]);var inst_27048 = (state_27090[(9)]);var inst_27047 = (state_27090[(10)]);var inst_27049 = (state_27090[(12)]);var inst_27057 = (state_27090[(2)]);var inst_27058 = (inst_27050 + (1));var tmp27096 = inst_27048;var tmp27097 = inst_27047;var tmp27098 = inst_27049;var inst_27047__$1 = tmp27097;var inst_27048__$1 = tmp27096;var inst_27049__$1 = tmp27098;var inst_27050__$1 = inst_27058;var state_27090__$1 = (function (){var statearr_27103 = state_27090;(statearr_27103[(8)] = inst_27050__$1);
(statearr_27103[(9)] = inst_27048__$1);
(statearr_27103[(10)] = inst_27047__$1);
(statearr_27103[(14)] = inst_27057);
(statearr_27103[(12)] = inst_27049__$1);
return statearr_27103;
})();var statearr_27104_27135 = state_27090__$1;(statearr_27104_27135[(2)] = null);
(statearr_27104_27135[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (6)))
{var inst_27036 = (state_27090[(13)]);var inst_27041 = f.call(null,inst_27036);var inst_27046 = cljs.core.seq.call(null,inst_27041);var inst_27047 = inst_27046;var inst_27048 = null;var inst_27049 = (0);var inst_27050 = (0);var state_27090__$1 = (function (){var statearr_27105 = state_27090;(statearr_27105[(8)] = inst_27050);
(statearr_27105[(9)] = inst_27048);
(statearr_27105[(10)] = inst_27047);
(statearr_27105[(12)] = inst_27049);
return statearr_27105;
})();var statearr_27106_27136 = state_27090__$1;(statearr_27106_27136[(2)] = null);
(statearr_27106_27136[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (17)))
{var inst_27061 = (state_27090[(7)]);var inst_27065 = cljs.core.chunk_first.call(null,inst_27061);var inst_27066 = cljs.core.chunk_rest.call(null,inst_27061);var inst_27067 = cljs.core.count.call(null,inst_27065);var inst_27047 = inst_27066;var inst_27048 = inst_27065;var inst_27049 = inst_27067;var inst_27050 = (0);var state_27090__$1 = (function (){var statearr_27107 = state_27090;(statearr_27107[(8)] = inst_27050);
(statearr_27107[(9)] = inst_27048);
(statearr_27107[(10)] = inst_27047);
(statearr_27107[(12)] = inst_27049);
return statearr_27107;
})();var statearr_27108_27137 = state_27090__$1;(statearr_27108_27137[(2)] = null);
(statearr_27108_27137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (3)))
{var inst_27088 = (state_27090[(2)]);var state_27090__$1 = state_27090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else
{if((state_val_27091 === (12)))
{var inst_27081 = (state_27090[(2)]);var state_27090__$1 = state_27090;var statearr_27109_27138 = state_27090__$1;(statearr_27109_27138[(2)] = inst_27081);
(statearr_27109_27138[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (2)))
{var state_27090__$1 = state_27090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(4),in$);
} else
{if((state_val_27091 === (19)))
{var inst_27076 = (state_27090[(2)]);var state_27090__$1 = state_27090;var statearr_27110_27139 = state_27090__$1;(statearr_27110_27139[(2)] = inst_27076);
(statearr_27110_27139[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (11)))
{var inst_27061 = (state_27090[(7)]);var inst_27047 = (state_27090[(10)]);var inst_27061__$1 = cljs.core.seq.call(null,inst_27047);var state_27090__$1 = (function (){var statearr_27111 = state_27090;(statearr_27111[(7)] = inst_27061__$1);
return statearr_27111;
})();if(inst_27061__$1)
{var statearr_27112_27140 = state_27090__$1;(statearr_27112_27140[(1)] = (14));
} else
{var statearr_27113_27141 = state_27090__$1;(statearr_27113_27141[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (9)))
{var inst_27083 = (state_27090[(2)]);var state_27090__$1 = (function (){var statearr_27114 = state_27090;(statearr_27114[(15)] = inst_27083);
return statearr_27114;
})();var statearr_27115_27142 = state_27090__$1;(statearr_27115_27142[(2)] = null);
(statearr_27115_27142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (5)))
{var inst_27039 = cljs.core.async.close_BANG_.call(null,out);var state_27090__$1 = state_27090;var statearr_27116_27143 = state_27090__$1;(statearr_27116_27143[(2)] = inst_27039);
(statearr_27116_27143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (14)))
{var inst_27061 = (state_27090[(7)]);var inst_27063 = cljs.core.chunked_seq_QMARK_.call(null,inst_27061);var state_27090__$1 = state_27090;if(inst_27063)
{var statearr_27117_27144 = state_27090__$1;(statearr_27117_27144[(1)] = (17));
} else
{var statearr_27118_27145 = state_27090__$1;(statearr_27118_27145[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (16)))
{var inst_27079 = (state_27090[(2)]);var state_27090__$1 = state_27090;var statearr_27119_27146 = state_27090__$1;(statearr_27119_27146[(2)] = inst_27079);
(statearr_27119_27146[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27091 === (10)))
{var inst_27050 = (state_27090[(8)]);var inst_27048 = (state_27090[(9)]);var inst_27055 = cljs.core._nth.call(null,inst_27048,inst_27050);var state_27090__$1 = state_27090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27090__$1,(13),out,inst_27055);
} else
{if((state_val_27091 === (18)))
{var inst_27061 = (state_27090[(7)]);var inst_27070 = cljs.core.first.call(null,inst_27061);var state_27090__$1 = state_27090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27090__$1,(20),out,inst_27070);
} else
{if((state_val_27091 === (8)))
{var inst_27050 = (state_27090[(8)]);var inst_27049 = (state_27090[(12)]);var inst_27052 = (inst_27050 < inst_27049);var inst_27053 = inst_27052;var state_27090__$1 = state_27090;if(cljs.core.truth_(inst_27053))
{var statearr_27120_27147 = state_27090__$1;(statearr_27120_27147[(1)] = (10));
} else
{var statearr_27121_27148 = state_27090__$1;(statearr_27121_27148[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27125[(0)] = state_machine__5679__auto__);
(statearr_27125[(1)] = (1));
return statearr_27125;
});
var state_machine__5679__auto____1 = (function (state_27090){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27090);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27126){if((e27126 instanceof Object))
{var ex__5682__auto__ = e27126;var statearr_27127_27149 = state_27090;(statearr_27127_27149[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27150 = state_27090;
state_27090 = G__27150;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27128 = f__5694__auto__.call(null);(statearr_27128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___27231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27231){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27231){
return (function (state_27210){var state_val_27211 = (state_27210[(1)]);if((state_val_27211 === (7)))
{var inst_27206 = (state_27210[(2)]);var state_27210__$1 = state_27210;var statearr_27212_27232 = state_27210__$1;(statearr_27212_27232[(2)] = inst_27206);
(statearr_27212_27232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (1)))
{var state_27210__$1 = state_27210;var statearr_27213_27233 = state_27210__$1;(statearr_27213_27233[(2)] = null);
(statearr_27213_27233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (4)))
{var inst_27193 = (state_27210[(7)]);var inst_27193__$1 = (state_27210[(2)]);var inst_27194 = (inst_27193__$1 == null);var state_27210__$1 = (function (){var statearr_27214 = state_27210;(statearr_27214[(7)] = inst_27193__$1);
return statearr_27214;
})();if(cljs.core.truth_(inst_27194))
{var statearr_27215_27234 = state_27210__$1;(statearr_27215_27234[(1)] = (5));
} else
{var statearr_27216_27235 = state_27210__$1;(statearr_27216_27235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (6)))
{var inst_27193 = (state_27210[(7)]);var state_27210__$1 = state_27210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27210__$1,(11),to,inst_27193);
} else
{if((state_val_27211 === (3)))
{var inst_27208 = (state_27210[(2)]);var state_27210__$1 = state_27210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27210__$1,inst_27208);
} else
{if((state_val_27211 === (2)))
{var state_27210__$1 = state_27210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(4),from);
} else
{if((state_val_27211 === (11)))
{var inst_27203 = (state_27210[(2)]);var state_27210__$1 = (function (){var statearr_27217 = state_27210;(statearr_27217[(8)] = inst_27203);
return statearr_27217;
})();var statearr_27218_27236 = state_27210__$1;(statearr_27218_27236[(2)] = null);
(statearr_27218_27236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (9)))
{var state_27210__$1 = state_27210;var statearr_27219_27237 = state_27210__$1;(statearr_27219_27237[(2)] = null);
(statearr_27219_27237[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (5)))
{var state_27210__$1 = state_27210;if(cljs.core.truth_(close_QMARK_))
{var statearr_27220_27238 = state_27210__$1;(statearr_27220_27238[(1)] = (8));
} else
{var statearr_27221_27239 = state_27210__$1;(statearr_27221_27239[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (10)))
{var inst_27200 = (state_27210[(2)]);var state_27210__$1 = state_27210;var statearr_27222_27240 = state_27210__$1;(statearr_27222_27240[(2)] = inst_27200);
(statearr_27222_27240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27211 === (8)))
{var inst_27197 = cljs.core.async.close_BANG_.call(null,to);var state_27210__$1 = state_27210;var statearr_27223_27241 = state_27210__$1;(statearr_27223_27241[(2)] = inst_27197);
(statearr_27223_27241[(1)] = (10));
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
});})(c__5693__auto___27231))
;return ((function (switch__5678__auto__,c__5693__auto___27231){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27227 = [null,null,null,null,null,null,null,null,null];(statearr_27227[(0)] = state_machine__5679__auto__);
(statearr_27227[(1)] = (1));
return statearr_27227;
});
var state_machine__5679__auto____1 = (function (state_27210){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27228){if((e27228 instanceof Object))
{var ex__5682__auto__ = e27228;var statearr_27229_27242 = state_27210;(statearr_27229_27242[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27243 = state_27210;
state_27210 = G__27243;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27210){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27231))
})();var state__5695__auto__ = (function (){var statearr_27230 = f__5694__auto__.call(null);(statearr_27230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27231);
return statearr_27230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27231))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___27330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27330,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27330,tc,fc){
return (function (state_27308){var state_val_27309 = (state_27308[(1)]);if((state_val_27309 === (7)))
{var inst_27304 = (state_27308[(2)]);var state_27308__$1 = state_27308;var statearr_27310_27331 = state_27308__$1;(statearr_27310_27331[(2)] = inst_27304);
(statearr_27310_27331[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (1)))
{var state_27308__$1 = state_27308;var statearr_27311_27332 = state_27308__$1;(statearr_27311_27332[(2)] = null);
(statearr_27311_27332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (4)))
{var inst_27289 = (state_27308[(7)]);var inst_27289__$1 = (state_27308[(2)]);var inst_27290 = (inst_27289__$1 == null);var state_27308__$1 = (function (){var statearr_27312 = state_27308;(statearr_27312[(7)] = inst_27289__$1);
return statearr_27312;
})();if(cljs.core.truth_(inst_27290))
{var statearr_27313_27333 = state_27308__$1;(statearr_27313_27333[(1)] = (5));
} else
{var statearr_27314_27334 = state_27308__$1;(statearr_27314_27334[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (6)))
{var inst_27289 = (state_27308[(7)]);var inst_27295 = p.call(null,inst_27289);var state_27308__$1 = state_27308;if(cljs.core.truth_(inst_27295))
{var statearr_27315_27335 = state_27308__$1;(statearr_27315_27335[(1)] = (9));
} else
{var statearr_27316_27336 = state_27308__$1;(statearr_27316_27336[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (3)))
{var inst_27306 = (state_27308[(2)]);var state_27308__$1 = state_27308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27308__$1,inst_27306);
} else
{if((state_val_27309 === (2)))
{var state_27308__$1 = state_27308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27308__$1,(4),ch);
} else
{if((state_val_27309 === (11)))
{var inst_27289 = (state_27308[(7)]);var inst_27299 = (state_27308[(2)]);var state_27308__$1 = state_27308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27308__$1,(8),inst_27299,inst_27289);
} else
{if((state_val_27309 === (9)))
{var state_27308__$1 = state_27308;var statearr_27317_27337 = state_27308__$1;(statearr_27317_27337[(2)] = tc);
(statearr_27317_27337[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (5)))
{var inst_27292 = cljs.core.async.close_BANG_.call(null,tc);var inst_27293 = cljs.core.async.close_BANG_.call(null,fc);var state_27308__$1 = (function (){var statearr_27318 = state_27308;(statearr_27318[(8)] = inst_27292);
return statearr_27318;
})();var statearr_27319_27338 = state_27308__$1;(statearr_27319_27338[(2)] = inst_27293);
(statearr_27319_27338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (10)))
{var state_27308__$1 = state_27308;var statearr_27320_27339 = state_27308__$1;(statearr_27320_27339[(2)] = fc);
(statearr_27320_27339[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27309 === (8)))
{var inst_27301 = (state_27308[(2)]);var state_27308__$1 = (function (){var statearr_27321 = state_27308;(statearr_27321[(9)] = inst_27301);
return statearr_27321;
})();var statearr_27322_27340 = state_27308__$1;(statearr_27322_27340[(2)] = null);
(statearr_27322_27340[(1)] = (2));
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
});})(c__5693__auto___27330,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___27330,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27326 = [null,null,null,null,null,null,null,null,null,null];(statearr_27326[(0)] = state_machine__5679__auto__);
(statearr_27326[(1)] = (1));
return statearr_27326;
});
var state_machine__5679__auto____1 = (function (state_27308){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27308);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27327){if((e27327 instanceof Object))
{var ex__5682__auto__ = e27327;var statearr_27328_27341 = state_27308;(statearr_27328_27341[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27342 = state_27308;
state_27308 = G__27342;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27308){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27330,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_27329 = f__5694__auto__.call(null);(statearr_27329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27330);
return statearr_27329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27330,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_27389){var state_val_27390 = (state_27389[(1)]);if((state_val_27390 === (7)))
{var inst_27385 = (state_27389[(2)]);var state_27389__$1 = state_27389;var statearr_27391_27407 = state_27389__$1;(statearr_27391_27407[(2)] = inst_27385);
(statearr_27391_27407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27390 === (6)))
{var inst_27375 = (state_27389[(7)]);var inst_27378 = (state_27389[(8)]);var inst_27382 = f.call(null,inst_27375,inst_27378);var inst_27375__$1 = inst_27382;var state_27389__$1 = (function (){var statearr_27392 = state_27389;(statearr_27392[(7)] = inst_27375__$1);
return statearr_27392;
})();var statearr_27393_27408 = state_27389__$1;(statearr_27393_27408[(2)] = null);
(statearr_27393_27408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27390 === (5)))
{var inst_27375 = (state_27389[(7)]);var state_27389__$1 = state_27389;var statearr_27394_27409 = state_27389__$1;(statearr_27394_27409[(2)] = inst_27375);
(statearr_27394_27409[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27390 === (4)))
{var inst_27378 = (state_27389[(8)]);var inst_27378__$1 = (state_27389[(2)]);var inst_27379 = (inst_27378__$1 == null);var state_27389__$1 = (function (){var statearr_27395 = state_27389;(statearr_27395[(8)] = inst_27378__$1);
return statearr_27395;
})();if(cljs.core.truth_(inst_27379))
{var statearr_27396_27410 = state_27389__$1;(statearr_27396_27410[(1)] = (5));
} else
{var statearr_27397_27411 = state_27389__$1;(statearr_27397_27411[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27390 === (3)))
{var inst_27387 = (state_27389[(2)]);var state_27389__$1 = state_27389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27389__$1,inst_27387);
} else
{if((state_val_27390 === (2)))
{var state_27389__$1 = state_27389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27389__$1,(4),ch);
} else
{if((state_val_27390 === (1)))
{var inst_27375 = init;var state_27389__$1 = (function (){var statearr_27398 = state_27389;(statearr_27398[(7)] = inst_27375);
return statearr_27398;
})();var statearr_27399_27412 = state_27389__$1;(statearr_27399_27412[(2)] = null);
(statearr_27399_27412[(1)] = (2));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27403 = [null,null,null,null,null,null,null,null,null];(statearr_27403[(0)] = state_machine__5679__auto__);
(statearr_27403[(1)] = (1));
return statearr_27403;
});
var state_machine__5679__auto____1 = (function (state_27389){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27404){if((e27404 instanceof Object))
{var ex__5682__auto__ = e27404;var statearr_27405_27413 = state_27389;(statearr_27405_27413[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27414 = state_27389;
state_27389 = G__27414;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27389){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27406 = f__5694__auto__.call(null);(statearr_27406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_27476){var state_val_27477 = (state_27476[(1)]);if((state_val_27477 === (7)))
{var inst_27457 = (state_27476[(7)]);var inst_27462 = (state_27476[(2)]);var inst_27463 = cljs.core.next.call(null,inst_27457);var inst_27457__$1 = inst_27463;var state_27476__$1 = (function (){var statearr_27478 = state_27476;(statearr_27478[(7)] = inst_27457__$1);
(statearr_27478[(8)] = inst_27462);
return statearr_27478;
})();var statearr_27479_27497 = state_27476__$1;(statearr_27479_27497[(2)] = null);
(statearr_27479_27497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (1)))
{var inst_27456 = cljs.core.seq.call(null,coll);var inst_27457 = inst_27456;var state_27476__$1 = (function (){var statearr_27480 = state_27476;(statearr_27480[(7)] = inst_27457);
return statearr_27480;
})();var statearr_27481_27498 = state_27476__$1;(statearr_27481_27498[(2)] = null);
(statearr_27481_27498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (4)))
{var inst_27457 = (state_27476[(7)]);var inst_27460 = cljs.core.first.call(null,inst_27457);var state_27476__$1 = state_27476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27476__$1,(7),ch,inst_27460);
} else
{if((state_val_27477 === (6)))
{var inst_27472 = (state_27476[(2)]);var state_27476__$1 = state_27476;var statearr_27482_27499 = state_27476__$1;(statearr_27482_27499[(2)] = inst_27472);
(statearr_27482_27499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (3)))
{var inst_27474 = (state_27476[(2)]);var state_27476__$1 = state_27476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27476__$1,inst_27474);
} else
{if((state_val_27477 === (2)))
{var inst_27457 = (state_27476[(7)]);var state_27476__$1 = state_27476;if(cljs.core.truth_(inst_27457))
{var statearr_27483_27500 = state_27476__$1;(statearr_27483_27500[(1)] = (4));
} else
{var statearr_27484_27501 = state_27476__$1;(statearr_27484_27501[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (9)))
{var state_27476__$1 = state_27476;var statearr_27485_27502 = state_27476__$1;(statearr_27485_27502[(2)] = null);
(statearr_27485_27502[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (5)))
{var state_27476__$1 = state_27476;if(cljs.core.truth_(close_QMARK_))
{var statearr_27486_27503 = state_27476__$1;(statearr_27486_27503[(1)] = (8));
} else
{var statearr_27487_27504 = state_27476__$1;(statearr_27487_27504[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (10)))
{var inst_27470 = (state_27476[(2)]);var state_27476__$1 = state_27476;var statearr_27488_27505 = state_27476__$1;(statearr_27488_27505[(2)] = inst_27470);
(statearr_27488_27505[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27477 === (8)))
{var inst_27467 = cljs.core.async.close_BANG_.call(null,ch);var state_27476__$1 = state_27476;var statearr_27489_27506 = state_27476__$1;(statearr_27489_27506[(2)] = inst_27467);
(statearr_27489_27506[(1)] = (10));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27493 = [null,null,null,null,null,null,null,null,null];(statearr_27493[(0)] = state_machine__5679__auto__);
(statearr_27493[(1)] = (1));
return statearr_27493;
});
var state_machine__5679__auto____1 = (function (state_27476){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27476);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27494){if((e27494 instanceof Object))
{var ex__5682__auto__ = e27494;var statearr_27495_27507 = state_27476;(statearr_27495_27507[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27476);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27508 = state_27476;
state_27476 = G__27508;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27476){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27496 = f__5694__auto__.call(null);(statearr_27496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.Mux = (function (){var obj27510 = {};return obj27510;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj27512 = {};return obj27512;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27736 = (function (cs,ch,mult,meta27737){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27737 = meta27737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27736.cljs$lang$type = true;
cljs.core.async.t27736.cljs$lang$ctorStr = "cljs.core.async/t27736";
cljs.core.async.t27736.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27736");
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27736.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27738){var self__ = this;
var _27738__$1 = this;return self__.meta27737;
});})(cs))
;
cljs.core.async.t27736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27738,meta27737__$1){var self__ = this;
var _27738__$1 = this;return (new cljs.core.async.t27736(self__.cs,self__.ch,self__.mult,meta27737__$1));
});})(cs))
;
cljs.core.async.__GT_t27736 = ((function (cs){
return (function __GT_t27736(cs__$1,ch__$1,mult__$1,meta27737){return (new cljs.core.async.t27736(cs__$1,ch__$1,mult__$1,meta27737));
});})(cs))
;
}
return (new cljs.core.async.t27736(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___27959 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27959,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27959,cs,m,dchan,dctr,done){
return (function (state_27873){var state_val_27874 = (state_27873[(1)]);if((state_val_27874 === (7)))
{var inst_27869 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27875_27960 = state_27873__$1;(statearr_27875_27960[(2)] = inst_27869);
(statearr_27875_27960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (20)))
{var inst_27770 = (state_27873[(7)]);var inst_27780 = cljs.core.first.call(null,inst_27770);var inst_27781 = cljs.core.nth.call(null,inst_27780,(0),null);var inst_27782 = cljs.core.nth.call(null,inst_27780,(1),null);var state_27873__$1 = (function (){var statearr_27876 = state_27873;(statearr_27876[(8)] = inst_27781);
return statearr_27876;
})();if(cljs.core.truth_(inst_27782))
{var statearr_27877_27961 = state_27873__$1;(statearr_27877_27961[(1)] = (22));
} else
{var statearr_27878_27962 = state_27873__$1;(statearr_27878_27962[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (27)))
{var inst_27810 = (state_27873[(9)]);var inst_27812 = (state_27873[(10)]);var inst_27817 = cljs.core._nth.call(null,inst_27810,inst_27812);var state_27873__$1 = (function (){var statearr_27879 = state_27873;(statearr_27879[(11)] = inst_27817);
return statearr_27879;
})();var statearr_27880_27963 = state_27873__$1;(statearr_27880_27963[(2)] = null);
(statearr_27880_27963[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (1)))
{var state_27873__$1 = state_27873;var statearr_27881_27964 = state_27873__$1;(statearr_27881_27964[(2)] = null);
(statearr_27881_27964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (24)))
{var inst_27770 = (state_27873[(7)]);var inst_27787 = (state_27873[(2)]);var inst_27788 = cljs.core.next.call(null,inst_27770);var inst_27750 = inst_27788;var inst_27751 = null;var inst_27752 = (0);var inst_27753 = (0);var state_27873__$1 = (function (){var statearr_27882 = state_27873;(statearr_27882[(12)] = inst_27753);
(statearr_27882[(13)] = inst_27787);
(statearr_27882[(14)] = inst_27750);
(statearr_27882[(15)] = inst_27751);
(statearr_27882[(16)] = inst_27752);
return statearr_27882;
})();var statearr_27883_27965 = state_27873__$1;(statearr_27883_27965[(2)] = null);
(statearr_27883_27965[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (39)))
{var inst_27830 = (state_27873[(17)]);var inst_27848 = (state_27873[(2)]);var inst_27849 = cljs.core.next.call(null,inst_27830);var inst_27809 = inst_27849;var inst_27810 = null;var inst_27811 = (0);var inst_27812 = (0);var state_27873__$1 = (function (){var statearr_27887 = state_27873;(statearr_27887[(18)] = inst_27811);
(statearr_27887[(9)] = inst_27810);
(statearr_27887[(19)] = inst_27848);
(statearr_27887[(20)] = inst_27809);
(statearr_27887[(10)] = inst_27812);
return statearr_27887;
})();var statearr_27888_27966 = state_27873__$1;(statearr_27888_27966[(2)] = null);
(statearr_27888_27966[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (4)))
{var inst_27741 = (state_27873[(21)]);var inst_27741__$1 = (state_27873[(2)]);var inst_27742 = (inst_27741__$1 == null);var state_27873__$1 = (function (){var statearr_27889 = state_27873;(statearr_27889[(21)] = inst_27741__$1);
return statearr_27889;
})();if(cljs.core.truth_(inst_27742))
{var statearr_27890_27967 = state_27873__$1;(statearr_27890_27967[(1)] = (5));
} else
{var statearr_27891_27968 = state_27873__$1;(statearr_27891_27968[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (15)))
{var inst_27753 = (state_27873[(12)]);var inst_27750 = (state_27873[(14)]);var inst_27751 = (state_27873[(15)]);var inst_27752 = (state_27873[(16)]);var inst_27766 = (state_27873[(2)]);var inst_27767 = (inst_27753 + (1));var tmp27884 = inst_27750;var tmp27885 = inst_27751;var tmp27886 = inst_27752;var inst_27750__$1 = tmp27884;var inst_27751__$1 = tmp27885;var inst_27752__$1 = tmp27886;var inst_27753__$1 = inst_27767;var state_27873__$1 = (function (){var statearr_27892 = state_27873;(statearr_27892[(12)] = inst_27753__$1);
(statearr_27892[(14)] = inst_27750__$1);
(statearr_27892[(22)] = inst_27766);
(statearr_27892[(15)] = inst_27751__$1);
(statearr_27892[(16)] = inst_27752__$1);
return statearr_27892;
})();var statearr_27893_27969 = state_27873__$1;(statearr_27893_27969[(2)] = null);
(statearr_27893_27969[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (21)))
{var inst_27791 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27894_27970 = state_27873__$1;(statearr_27894_27970[(2)] = inst_27791);
(statearr_27894_27970[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (31)))
{var inst_27817 = (state_27873[(11)]);var inst_27818 = (state_27873[(2)]);var inst_27819 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27820 = cljs.core.async.untap_STAR_.call(null,m,inst_27817);var state_27873__$1 = (function (){var statearr_27895 = state_27873;(statearr_27895[(23)] = inst_27818);
(statearr_27895[(24)] = inst_27819);
return statearr_27895;
})();var statearr_27896_27971 = state_27873__$1;(statearr_27896_27971[(2)] = inst_27820);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (32)))
{var inst_27817 = (state_27873[(11)]);var inst_27741 = (state_27873[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27873,(31),Object,null,(30));var inst_27824 = cljs.core.async.put_BANG_.call(null,inst_27817,inst_27741,done);var state_27873__$1 = state_27873;var statearr_27897_27972 = state_27873__$1;(statearr_27897_27972[(2)] = inst_27824);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (40)))
{var inst_27839 = (state_27873[(25)]);var inst_27840 = (state_27873[(2)]);var inst_27841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27842 = cljs.core.async.untap_STAR_.call(null,m,inst_27839);var state_27873__$1 = (function (){var statearr_27898 = state_27873;(statearr_27898[(26)] = inst_27841);
(statearr_27898[(27)] = inst_27840);
return statearr_27898;
})();var statearr_27899_27973 = state_27873__$1;(statearr_27899_27973[(2)] = inst_27842);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (33)))
{var inst_27830 = (state_27873[(17)]);var inst_27832 = cljs.core.chunked_seq_QMARK_.call(null,inst_27830);var state_27873__$1 = state_27873;if(inst_27832)
{var statearr_27900_27974 = state_27873__$1;(statearr_27900_27974[(1)] = (36));
} else
{var statearr_27901_27975 = state_27873__$1;(statearr_27901_27975[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (13)))
{var inst_27760 = (state_27873[(28)]);var inst_27763 = cljs.core.async.close_BANG_.call(null,inst_27760);var state_27873__$1 = state_27873;var statearr_27902_27976 = state_27873__$1;(statearr_27902_27976[(2)] = inst_27763);
(statearr_27902_27976[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (22)))
{var inst_27781 = (state_27873[(8)]);var inst_27784 = cljs.core.async.close_BANG_.call(null,inst_27781);var state_27873__$1 = state_27873;var statearr_27903_27977 = state_27873__$1;(statearr_27903_27977[(2)] = inst_27784);
(statearr_27903_27977[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (36)))
{var inst_27830 = (state_27873[(17)]);var inst_27834 = cljs.core.chunk_first.call(null,inst_27830);var inst_27835 = cljs.core.chunk_rest.call(null,inst_27830);var inst_27836 = cljs.core.count.call(null,inst_27834);var inst_27809 = inst_27835;var inst_27810 = inst_27834;var inst_27811 = inst_27836;var inst_27812 = (0);var state_27873__$1 = (function (){var statearr_27904 = state_27873;(statearr_27904[(18)] = inst_27811);
(statearr_27904[(9)] = inst_27810);
(statearr_27904[(20)] = inst_27809);
(statearr_27904[(10)] = inst_27812);
return statearr_27904;
})();var statearr_27905_27978 = state_27873__$1;(statearr_27905_27978[(2)] = null);
(statearr_27905_27978[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (41)))
{var inst_27741 = (state_27873[(21)]);var inst_27839 = (state_27873[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27873,(40),Object,null,(39));var inst_27846 = cljs.core.async.put_BANG_.call(null,inst_27839,inst_27741,done);var state_27873__$1 = state_27873;var statearr_27906_27979 = state_27873__$1;(statearr_27906_27979[(2)] = inst_27846);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (43)))
{var state_27873__$1 = state_27873;var statearr_27907_27980 = state_27873__$1;(statearr_27907_27980[(2)] = null);
(statearr_27907_27980[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (29)))
{var inst_27857 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27908_27981 = state_27873__$1;(statearr_27908_27981[(2)] = inst_27857);
(statearr_27908_27981[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (44)))
{var inst_27866 = (state_27873[(2)]);var state_27873__$1 = (function (){var statearr_27909 = state_27873;(statearr_27909[(29)] = inst_27866);
return statearr_27909;
})();var statearr_27910_27982 = state_27873__$1;(statearr_27910_27982[(2)] = null);
(statearr_27910_27982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (6)))
{var inst_27801 = (state_27873[(30)]);var inst_27800 = cljs.core.deref.call(null,cs);var inst_27801__$1 = cljs.core.keys.call(null,inst_27800);var inst_27802 = cljs.core.count.call(null,inst_27801__$1);var inst_27803 = cljs.core.reset_BANG_.call(null,dctr,inst_27802);var inst_27808 = cljs.core.seq.call(null,inst_27801__$1);var inst_27809 = inst_27808;var inst_27810 = null;var inst_27811 = (0);var inst_27812 = (0);var state_27873__$1 = (function (){var statearr_27911 = state_27873;(statearr_27911[(18)] = inst_27811);
(statearr_27911[(31)] = inst_27803);
(statearr_27911[(9)] = inst_27810);
(statearr_27911[(30)] = inst_27801__$1);
(statearr_27911[(20)] = inst_27809);
(statearr_27911[(10)] = inst_27812);
return statearr_27911;
})();var statearr_27912_27983 = state_27873__$1;(statearr_27912_27983[(2)] = null);
(statearr_27912_27983[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (28)))
{var inst_27830 = (state_27873[(17)]);var inst_27809 = (state_27873[(20)]);var inst_27830__$1 = cljs.core.seq.call(null,inst_27809);var state_27873__$1 = (function (){var statearr_27913 = state_27873;(statearr_27913[(17)] = inst_27830__$1);
return statearr_27913;
})();if(inst_27830__$1)
{var statearr_27914_27984 = state_27873__$1;(statearr_27914_27984[(1)] = (33));
} else
{var statearr_27915_27985 = state_27873__$1;(statearr_27915_27985[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (25)))
{var inst_27811 = (state_27873[(18)]);var inst_27812 = (state_27873[(10)]);var inst_27814 = (inst_27812 < inst_27811);var inst_27815 = inst_27814;var state_27873__$1 = state_27873;if(cljs.core.truth_(inst_27815))
{var statearr_27916_27986 = state_27873__$1;(statearr_27916_27986[(1)] = (27));
} else
{var statearr_27917_27987 = state_27873__$1;(statearr_27917_27987[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (34)))
{var state_27873__$1 = state_27873;var statearr_27918_27988 = state_27873__$1;(statearr_27918_27988[(2)] = null);
(statearr_27918_27988[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (17)))
{var state_27873__$1 = state_27873;var statearr_27919_27989 = state_27873__$1;(statearr_27919_27989[(2)] = null);
(statearr_27919_27989[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (3)))
{var inst_27871 = (state_27873[(2)]);var state_27873__$1 = state_27873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27873__$1,inst_27871);
} else
{if((state_val_27874 === (12)))
{var inst_27796 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27920_27990 = state_27873__$1;(statearr_27920_27990[(2)] = inst_27796);
(statearr_27920_27990[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (2)))
{var state_27873__$1 = state_27873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27873__$1,(4),ch);
} else
{if((state_val_27874 === (23)))
{var state_27873__$1 = state_27873;var statearr_27921_27991 = state_27873__$1;(statearr_27921_27991[(2)] = null);
(statearr_27921_27991[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (35)))
{var inst_27855 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27922_27992 = state_27873__$1;(statearr_27922_27992[(2)] = inst_27855);
(statearr_27922_27992[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (19)))
{var inst_27770 = (state_27873[(7)]);var inst_27774 = cljs.core.chunk_first.call(null,inst_27770);var inst_27775 = cljs.core.chunk_rest.call(null,inst_27770);var inst_27776 = cljs.core.count.call(null,inst_27774);var inst_27750 = inst_27775;var inst_27751 = inst_27774;var inst_27752 = inst_27776;var inst_27753 = (0);var state_27873__$1 = (function (){var statearr_27923 = state_27873;(statearr_27923[(12)] = inst_27753);
(statearr_27923[(14)] = inst_27750);
(statearr_27923[(15)] = inst_27751);
(statearr_27923[(16)] = inst_27752);
return statearr_27923;
})();var statearr_27924_27993 = state_27873__$1;(statearr_27924_27993[(2)] = null);
(statearr_27924_27993[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (11)))
{var inst_27770 = (state_27873[(7)]);var inst_27750 = (state_27873[(14)]);var inst_27770__$1 = cljs.core.seq.call(null,inst_27750);var state_27873__$1 = (function (){var statearr_27925 = state_27873;(statearr_27925[(7)] = inst_27770__$1);
return statearr_27925;
})();if(inst_27770__$1)
{var statearr_27926_27994 = state_27873__$1;(statearr_27926_27994[(1)] = (16));
} else
{var statearr_27927_27995 = state_27873__$1;(statearr_27927_27995[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (9)))
{var inst_27798 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27928_27996 = state_27873__$1;(statearr_27928_27996[(2)] = inst_27798);
(statearr_27928_27996[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (5)))
{var inst_27748 = cljs.core.deref.call(null,cs);var inst_27749 = cljs.core.seq.call(null,inst_27748);var inst_27750 = inst_27749;var inst_27751 = null;var inst_27752 = (0);var inst_27753 = (0);var state_27873__$1 = (function (){var statearr_27929 = state_27873;(statearr_27929[(12)] = inst_27753);
(statearr_27929[(14)] = inst_27750);
(statearr_27929[(15)] = inst_27751);
(statearr_27929[(16)] = inst_27752);
return statearr_27929;
})();var statearr_27930_27997 = state_27873__$1;(statearr_27930_27997[(2)] = null);
(statearr_27930_27997[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (14)))
{var state_27873__$1 = state_27873;var statearr_27931_27998 = state_27873__$1;(statearr_27931_27998[(2)] = null);
(statearr_27931_27998[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (45)))
{var inst_27863 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27932_27999 = state_27873__$1;(statearr_27932_27999[(2)] = inst_27863);
(statearr_27932_27999[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (26)))
{var inst_27801 = (state_27873[(30)]);var inst_27859 = (state_27873[(2)]);var inst_27860 = cljs.core.seq.call(null,inst_27801);var state_27873__$1 = (function (){var statearr_27933 = state_27873;(statearr_27933[(32)] = inst_27859);
return statearr_27933;
})();if(inst_27860)
{var statearr_27934_28000 = state_27873__$1;(statearr_27934_28000[(1)] = (42));
} else
{var statearr_27935_28001 = state_27873__$1;(statearr_27935_28001[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (16)))
{var inst_27770 = (state_27873[(7)]);var inst_27772 = cljs.core.chunked_seq_QMARK_.call(null,inst_27770);var state_27873__$1 = state_27873;if(inst_27772)
{var statearr_27939_28002 = state_27873__$1;(statearr_27939_28002[(1)] = (19));
} else
{var statearr_27940_28003 = state_27873__$1;(statearr_27940_28003[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (38)))
{var inst_27852 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27941_28004 = state_27873__$1;(statearr_27941_28004[(2)] = inst_27852);
(statearr_27941_28004[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (30)))
{var inst_27811 = (state_27873[(18)]);var inst_27810 = (state_27873[(9)]);var inst_27809 = (state_27873[(20)]);var inst_27812 = (state_27873[(10)]);var inst_27826 = (state_27873[(2)]);var inst_27827 = (inst_27812 + (1));var tmp27936 = inst_27811;var tmp27937 = inst_27810;var tmp27938 = inst_27809;var inst_27809__$1 = tmp27938;var inst_27810__$1 = tmp27937;var inst_27811__$1 = tmp27936;var inst_27812__$1 = inst_27827;var state_27873__$1 = (function (){var statearr_27942 = state_27873;(statearr_27942[(18)] = inst_27811__$1);
(statearr_27942[(33)] = inst_27826);
(statearr_27942[(9)] = inst_27810__$1);
(statearr_27942[(20)] = inst_27809__$1);
(statearr_27942[(10)] = inst_27812__$1);
return statearr_27942;
})();var statearr_27943_28005 = state_27873__$1;(statearr_27943_28005[(2)] = null);
(statearr_27943_28005[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (10)))
{var inst_27753 = (state_27873[(12)]);var inst_27751 = (state_27873[(15)]);var inst_27759 = cljs.core._nth.call(null,inst_27751,inst_27753);var inst_27760 = cljs.core.nth.call(null,inst_27759,(0),null);var inst_27761 = cljs.core.nth.call(null,inst_27759,(1),null);var state_27873__$1 = (function (){var statearr_27944 = state_27873;(statearr_27944[(28)] = inst_27760);
return statearr_27944;
})();if(cljs.core.truth_(inst_27761))
{var statearr_27945_28006 = state_27873__$1;(statearr_27945_28006[(1)] = (13));
} else
{var statearr_27946_28007 = state_27873__$1;(statearr_27946_28007[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (18)))
{var inst_27794 = (state_27873[(2)]);var state_27873__$1 = state_27873;var statearr_27947_28008 = state_27873__$1;(statearr_27947_28008[(2)] = inst_27794);
(statearr_27947_28008[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (42)))
{var state_27873__$1 = state_27873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27873__$1,(45),dchan);
} else
{if((state_val_27874 === (37)))
{var inst_27830 = (state_27873[(17)]);var inst_27839 = cljs.core.first.call(null,inst_27830);var state_27873__$1 = (function (){var statearr_27948 = state_27873;(statearr_27948[(25)] = inst_27839);
return statearr_27948;
})();var statearr_27949_28009 = state_27873__$1;(statearr_27949_28009[(2)] = null);
(statearr_27949_28009[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27874 === (8)))
{var inst_27753 = (state_27873[(12)]);var inst_27752 = (state_27873[(16)]);var inst_27755 = (inst_27753 < inst_27752);var inst_27756 = inst_27755;var state_27873__$1 = state_27873;if(cljs.core.truth_(inst_27756))
{var statearr_27950_28010 = state_27873__$1;(statearr_27950_28010[(1)] = (10));
} else
{var statearr_27951_28011 = state_27873__$1;(statearr_27951_28011[(1)] = (11));
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
});})(c__5693__auto___27959,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___27959,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27955[(0)] = state_machine__5679__auto__);
(statearr_27955[(1)] = (1));
return statearr_27955;
});
var state_machine__5679__auto____1 = (function (state_27873){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27956){if((e27956 instanceof Object))
{var ex__5682__auto__ = e27956;var statearr_27957_28012 = state_27873;(statearr_27957_28012[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28013 = state_27873;
state_27873 = G__28013;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27873){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27959,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_27958 = f__5694__auto__.call(null);(statearr_27958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27959);
return statearr_27958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27959,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj28015 = {};return obj28015;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t28125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28125 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28126){
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
this.meta28126 = meta28126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28125.cljs$lang$type = true;
cljs.core.async.t28125.cljs$lang$ctorStr = "cljs.core.async/t28125";
cljs.core.async.t28125.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28125");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28127){var self__ = this;
var _28127__$1 = this;return self__.meta28126;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28127,meta28126__$1){var self__ = this;
var _28127__$1 = this;return (new cljs.core.async.t28125(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28126__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28125 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28125(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28126){return (new cljs.core.async.t28125(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28126));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28125(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___28234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28192){var state_val_28193 = (state_28192[(1)]);if((state_val_28193 === (7)))
{var inst_28141 = (state_28192[(7)]);var inst_28146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28141);var state_28192__$1 = state_28192;var statearr_28194_28235 = state_28192__$1;(statearr_28194_28235[(2)] = inst_28146);
(statearr_28194_28235[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (20)))
{var inst_28156 = (state_28192[(8)]);var state_28192__$1 = state_28192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28192__$1,(23),out,inst_28156);
} else
{if((state_val_28193 === (1)))
{var inst_28131 = (state_28192[(9)]);var inst_28131__$1 = calc_state.call(null);var inst_28132 = cljs.core.seq_QMARK_.call(null,inst_28131__$1);var state_28192__$1 = (function (){var statearr_28195 = state_28192;(statearr_28195[(9)] = inst_28131__$1);
return statearr_28195;
})();if(inst_28132)
{var statearr_28196_28236 = state_28192__$1;(statearr_28196_28236[(1)] = (2));
} else
{var statearr_28197_28237 = state_28192__$1;(statearr_28197_28237[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (4)))
{var inst_28131 = (state_28192[(9)]);var inst_28137 = (state_28192[(2)]);var inst_28138 = cljs.core.get.call(null,inst_28137,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28139 = cljs.core.get.call(null,inst_28137,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28140 = cljs.core.get.call(null,inst_28137,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_28141 = inst_28131;var state_28192__$1 = (function (){var statearr_28198 = state_28192;(statearr_28198[(10)] = inst_28139);
(statearr_28198[(11)] = inst_28140);
(statearr_28198[(7)] = inst_28141);
(statearr_28198[(12)] = inst_28138);
return statearr_28198;
})();var statearr_28199_28238 = state_28192__$1;(statearr_28199_28238[(2)] = null);
(statearr_28199_28238[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (15)))
{var state_28192__$1 = state_28192;var statearr_28200_28239 = state_28192__$1;(statearr_28200_28239[(2)] = null);
(statearr_28200_28239[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (21)))
{var state_28192__$1 = state_28192;var statearr_28201_28240 = state_28192__$1;(statearr_28201_28240[(2)] = null);
(statearr_28201_28240[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (13)))
{var inst_28188 = (state_28192[(2)]);var state_28192__$1 = state_28192;var statearr_28202_28241 = state_28192__$1;(statearr_28202_28241[(2)] = inst_28188);
(statearr_28202_28241[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (22)))
{var inst_28149 = (state_28192[(13)]);var inst_28185 = (state_28192[(2)]);var inst_28141 = inst_28149;var state_28192__$1 = (function (){var statearr_28203 = state_28192;(statearr_28203[(14)] = inst_28185);
(statearr_28203[(7)] = inst_28141);
return statearr_28203;
})();var statearr_28204_28242 = state_28192__$1;(statearr_28204_28242[(2)] = null);
(statearr_28204_28242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (6)))
{var inst_28190 = (state_28192[(2)]);var state_28192__$1 = state_28192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28192__$1,inst_28190);
} else
{if((state_val_28193 === (17)))
{var inst_28171 = (state_28192[(15)]);var state_28192__$1 = state_28192;var statearr_28205_28243 = state_28192__$1;(statearr_28205_28243[(2)] = inst_28171);
(statearr_28205_28243[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (3)))
{var inst_28131 = (state_28192[(9)]);var state_28192__$1 = state_28192;var statearr_28206_28244 = state_28192__$1;(statearr_28206_28244[(2)] = inst_28131);
(statearr_28206_28244[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (12)))
{var inst_28157 = (state_28192[(16)]);var inst_28152 = (state_28192[(17)]);var inst_28171 = (state_28192[(15)]);var inst_28171__$1 = inst_28152.call(null,inst_28157);var state_28192__$1 = (function (){var statearr_28207 = state_28192;(statearr_28207[(15)] = inst_28171__$1);
return statearr_28207;
})();if(cljs.core.truth_(inst_28171__$1))
{var statearr_28208_28245 = state_28192__$1;(statearr_28208_28245[(1)] = (17));
} else
{var statearr_28209_28246 = state_28192__$1;(statearr_28209_28246[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (2)))
{var inst_28131 = (state_28192[(9)]);var inst_28134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28131);var state_28192__$1 = state_28192;var statearr_28210_28247 = state_28192__$1;(statearr_28210_28247[(2)] = inst_28134);
(statearr_28210_28247[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (23)))
{var inst_28182 = (state_28192[(2)]);var state_28192__$1 = state_28192;var statearr_28211_28248 = state_28192__$1;(statearr_28211_28248[(2)] = inst_28182);
(statearr_28211_28248[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (19)))
{var inst_28179 = (state_28192[(2)]);var state_28192__$1 = state_28192;if(cljs.core.truth_(inst_28179))
{var statearr_28212_28249 = state_28192__$1;(statearr_28212_28249[(1)] = (20));
} else
{var statearr_28213_28250 = state_28192__$1;(statearr_28213_28250[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (11)))
{var inst_28156 = (state_28192[(8)]);var inst_28162 = (inst_28156 == null);var state_28192__$1 = state_28192;if(cljs.core.truth_(inst_28162))
{var statearr_28214_28251 = state_28192__$1;(statearr_28214_28251[(1)] = (14));
} else
{var statearr_28215_28252 = state_28192__$1;(statearr_28215_28252[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (9)))
{var inst_28149 = (state_28192[(13)]);var inst_28149__$1 = (state_28192[(2)]);var inst_28150 = cljs.core.get.call(null,inst_28149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28151 = cljs.core.get.call(null,inst_28149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28152 = cljs.core.get.call(null,inst_28149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_28192__$1 = (function (){var statearr_28216 = state_28192;(statearr_28216[(18)] = inst_28151);
(statearr_28216[(17)] = inst_28152);
(statearr_28216[(13)] = inst_28149__$1);
return statearr_28216;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28192__$1,(10),inst_28150);
} else
{if((state_val_28193 === (5)))
{var inst_28141 = (state_28192[(7)]);var inst_28144 = cljs.core.seq_QMARK_.call(null,inst_28141);var state_28192__$1 = state_28192;if(inst_28144)
{var statearr_28217_28253 = state_28192__$1;(statearr_28217_28253[(1)] = (7));
} else
{var statearr_28218_28254 = state_28192__$1;(statearr_28218_28254[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (14)))
{var inst_28157 = (state_28192[(16)]);var inst_28164 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28157);var state_28192__$1 = state_28192;var statearr_28219_28255 = state_28192__$1;(statearr_28219_28255[(2)] = inst_28164);
(statearr_28219_28255[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (16)))
{var inst_28167 = (state_28192[(2)]);var inst_28168 = calc_state.call(null);var inst_28141 = inst_28168;var state_28192__$1 = (function (){var statearr_28220 = state_28192;(statearr_28220[(7)] = inst_28141);
(statearr_28220[(19)] = inst_28167);
return statearr_28220;
})();var statearr_28221_28256 = state_28192__$1;(statearr_28221_28256[(2)] = null);
(statearr_28221_28256[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (10)))
{var inst_28157 = (state_28192[(16)]);var inst_28156 = (state_28192[(8)]);var inst_28155 = (state_28192[(2)]);var inst_28156__$1 = cljs.core.nth.call(null,inst_28155,(0),null);var inst_28157__$1 = cljs.core.nth.call(null,inst_28155,(1),null);var inst_28158 = (inst_28156__$1 == null);var inst_28159 = cljs.core._EQ_.call(null,inst_28157__$1,change);var inst_28160 = (inst_28158) || (inst_28159);var state_28192__$1 = (function (){var statearr_28222 = state_28192;(statearr_28222[(16)] = inst_28157__$1);
(statearr_28222[(8)] = inst_28156__$1);
return statearr_28222;
})();if(cljs.core.truth_(inst_28160))
{var statearr_28223_28257 = state_28192__$1;(statearr_28223_28257[(1)] = (11));
} else
{var statearr_28224_28258 = state_28192__$1;(statearr_28224_28258[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (18)))
{var inst_28151 = (state_28192[(18)]);var inst_28157 = (state_28192[(16)]);var inst_28152 = (state_28192[(17)]);var inst_28174 = cljs.core.empty_QMARK_.call(null,inst_28152);var inst_28175 = inst_28151.call(null,inst_28157);var inst_28176 = cljs.core.not.call(null,inst_28175);var inst_28177 = (inst_28174) && (inst_28176);var state_28192__$1 = state_28192;var statearr_28225_28259 = state_28192__$1;(statearr_28225_28259[(2)] = inst_28177);
(statearr_28225_28259[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28193 === (8)))
{var inst_28141 = (state_28192[(7)]);var state_28192__$1 = state_28192;var statearr_28226_28260 = state_28192__$1;(statearr_28226_28260[(2)] = inst_28141);
(statearr_28226_28260[(1)] = (9));
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
});})(c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28230[(0)] = state_machine__5679__auto__);
(statearr_28230[(1)] = (1));
return statearr_28230;
});
var state_machine__5679__auto____1 = (function (state_28192){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28192);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28231){if((e28231 instanceof Object))
{var ex__5682__auto__ = e28231;var statearr_28232_28261 = state_28192;(statearr_28232_28261[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28262 = state_28192;
state_28192 = G__28262;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28192){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_28233 = f__5694__auto__.call(null);(statearr_28233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28234);
return statearr_28233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj28264 = {};return obj28264;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__28265_SHARP_){if(cljs.core.truth_(p1__28265_SHARP_.call(null,topic)))
{return p1__28265_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28265_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28390 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28391){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28390.cljs$lang$type = true;
cljs.core.async.t28390.cljs$lang$ctorStr = "cljs.core.async/t28390";
cljs.core.async.t28390.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28390");
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28390.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28392){var self__ = this;
var _28392__$1 = this;return self__.meta28391;
});})(mults,ensure_mult))
;
cljs.core.async.t28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28392,meta28391__$1){var self__ = this;
var _28392__$1 = this;return (new cljs.core.async.t28390(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28391__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28390 = ((function (mults,ensure_mult){
return (function __GT_t28390(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28391){return (new cljs.core.async.t28390(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28391));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28390(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___28514 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28514,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28514,mults,ensure_mult,p){
return (function (state_28466){var state_val_28467 = (state_28466[(1)]);if((state_val_28467 === (7)))
{var inst_28462 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28468_28515 = state_28466__$1;(statearr_28468_28515[(2)] = inst_28462);
(statearr_28468_28515[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (20)))
{var state_28466__$1 = state_28466;var statearr_28469_28516 = state_28466__$1;(statearr_28469_28516[(2)] = null);
(statearr_28469_28516[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (1)))
{var state_28466__$1 = state_28466;var statearr_28470_28517 = state_28466__$1;(statearr_28470_28517[(2)] = null);
(statearr_28470_28517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (24)))
{var inst_28395 = (state_28466[(7)]);var inst_28445 = (state_28466[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28466,(23),Object,null,(22));var inst_28452 = cljs.core.async.muxch_STAR_.call(null,inst_28445);var state_28466__$1 = state_28466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28466__$1,(25),inst_28452,inst_28395);
} else
{if((state_val_28467 === (4)))
{var inst_28395 = (state_28466[(7)]);var inst_28395__$1 = (state_28466[(2)]);var inst_28396 = (inst_28395__$1 == null);var state_28466__$1 = (function (){var statearr_28471 = state_28466;(statearr_28471[(7)] = inst_28395__$1);
return statearr_28471;
})();if(cljs.core.truth_(inst_28396))
{var statearr_28472_28518 = state_28466__$1;(statearr_28472_28518[(1)] = (5));
} else
{var statearr_28473_28519 = state_28466__$1;(statearr_28473_28519[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (15)))
{var inst_28437 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28474_28520 = state_28466__$1;(statearr_28474_28520[(2)] = inst_28437);
(statearr_28474_28520[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (21)))
{var inst_28459 = (state_28466[(2)]);var state_28466__$1 = (function (){var statearr_28475 = state_28466;(statearr_28475[(9)] = inst_28459);
return statearr_28475;
})();var statearr_28476_28521 = state_28466__$1;(statearr_28476_28521[(2)] = null);
(statearr_28476_28521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (13)))
{var inst_28419 = (state_28466[(10)]);var inst_28421 = cljs.core.chunked_seq_QMARK_.call(null,inst_28419);var state_28466__$1 = state_28466;if(inst_28421)
{var statearr_28477_28522 = state_28466__$1;(statearr_28477_28522[(1)] = (16));
} else
{var statearr_28478_28523 = state_28466__$1;(statearr_28478_28523[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (22)))
{var inst_28456 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28479_28524 = state_28466__$1;(statearr_28479_28524[(2)] = inst_28456);
(statearr_28479_28524[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (6)))
{var inst_28443 = (state_28466[(11)]);var inst_28395 = (state_28466[(7)]);var inst_28445 = (state_28466[(8)]);var inst_28443__$1 = topic_fn.call(null,inst_28395);var inst_28444 = cljs.core.deref.call(null,mults);var inst_28445__$1 = cljs.core.get.call(null,inst_28444,inst_28443__$1);var state_28466__$1 = (function (){var statearr_28480 = state_28466;(statearr_28480[(11)] = inst_28443__$1);
(statearr_28480[(8)] = inst_28445__$1);
return statearr_28480;
})();if(cljs.core.truth_(inst_28445__$1))
{var statearr_28481_28525 = state_28466__$1;(statearr_28481_28525[(1)] = (19));
} else
{var statearr_28482_28526 = state_28466__$1;(statearr_28482_28526[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (25)))
{var inst_28454 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28483_28527 = state_28466__$1;(statearr_28483_28527[(2)] = inst_28454);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28466__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (17)))
{var inst_28419 = (state_28466[(10)]);var inst_28428 = cljs.core.first.call(null,inst_28419);var inst_28429 = cljs.core.async.muxch_STAR_.call(null,inst_28428);var inst_28430 = cljs.core.async.close_BANG_.call(null,inst_28429);var inst_28431 = cljs.core.next.call(null,inst_28419);var inst_28405 = inst_28431;var inst_28406 = null;var inst_28407 = (0);var inst_28408 = (0);var state_28466__$1 = (function (){var statearr_28484 = state_28466;(statearr_28484[(12)] = inst_28407);
(statearr_28484[(13)] = inst_28408);
(statearr_28484[(14)] = inst_28406);
(statearr_28484[(15)] = inst_28405);
(statearr_28484[(16)] = inst_28430);
return statearr_28484;
})();var statearr_28485_28528 = state_28466__$1;(statearr_28485_28528[(2)] = null);
(statearr_28485_28528[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (3)))
{var inst_28464 = (state_28466[(2)]);var state_28466__$1 = state_28466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28466__$1,inst_28464);
} else
{if((state_val_28467 === (12)))
{var inst_28439 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28486_28529 = state_28466__$1;(statearr_28486_28529[(2)] = inst_28439);
(statearr_28486_28529[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (2)))
{var state_28466__$1 = state_28466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28466__$1,(4),ch);
} else
{if((state_val_28467 === (23)))
{var inst_28443 = (state_28466[(11)]);var inst_28447 = (state_28466[(2)]);var inst_28448 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28443);var state_28466__$1 = (function (){var statearr_28487 = state_28466;(statearr_28487[(17)] = inst_28447);
return statearr_28487;
})();var statearr_28488_28530 = state_28466__$1;(statearr_28488_28530[(2)] = inst_28448);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28466__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (19)))
{var state_28466__$1 = state_28466;var statearr_28489_28531 = state_28466__$1;(statearr_28489_28531[(2)] = null);
(statearr_28489_28531[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (11)))
{var inst_28419 = (state_28466[(10)]);var inst_28405 = (state_28466[(15)]);var inst_28419__$1 = cljs.core.seq.call(null,inst_28405);var state_28466__$1 = (function (){var statearr_28490 = state_28466;(statearr_28490[(10)] = inst_28419__$1);
return statearr_28490;
})();if(inst_28419__$1)
{var statearr_28491_28532 = state_28466__$1;(statearr_28491_28532[(1)] = (13));
} else
{var statearr_28492_28533 = state_28466__$1;(statearr_28492_28533[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (9)))
{var inst_28441 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28493_28534 = state_28466__$1;(statearr_28493_28534[(2)] = inst_28441);
(statearr_28493_28534[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (5)))
{var inst_28402 = cljs.core.deref.call(null,mults);var inst_28403 = cljs.core.vals.call(null,inst_28402);var inst_28404 = cljs.core.seq.call(null,inst_28403);var inst_28405 = inst_28404;var inst_28406 = null;var inst_28407 = (0);var inst_28408 = (0);var state_28466__$1 = (function (){var statearr_28494 = state_28466;(statearr_28494[(12)] = inst_28407);
(statearr_28494[(13)] = inst_28408);
(statearr_28494[(14)] = inst_28406);
(statearr_28494[(15)] = inst_28405);
return statearr_28494;
})();var statearr_28495_28535 = state_28466__$1;(statearr_28495_28535[(2)] = null);
(statearr_28495_28535[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (14)))
{var state_28466__$1 = state_28466;var statearr_28499_28536 = state_28466__$1;(statearr_28499_28536[(2)] = null);
(statearr_28499_28536[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (16)))
{var inst_28419 = (state_28466[(10)]);var inst_28423 = cljs.core.chunk_first.call(null,inst_28419);var inst_28424 = cljs.core.chunk_rest.call(null,inst_28419);var inst_28425 = cljs.core.count.call(null,inst_28423);var inst_28405 = inst_28424;var inst_28406 = inst_28423;var inst_28407 = inst_28425;var inst_28408 = (0);var state_28466__$1 = (function (){var statearr_28500 = state_28466;(statearr_28500[(12)] = inst_28407);
(statearr_28500[(13)] = inst_28408);
(statearr_28500[(14)] = inst_28406);
(statearr_28500[(15)] = inst_28405);
return statearr_28500;
})();var statearr_28501_28537 = state_28466__$1;(statearr_28501_28537[(2)] = null);
(statearr_28501_28537[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (10)))
{var inst_28407 = (state_28466[(12)]);var inst_28408 = (state_28466[(13)]);var inst_28406 = (state_28466[(14)]);var inst_28405 = (state_28466[(15)]);var inst_28413 = cljs.core._nth.call(null,inst_28406,inst_28408);var inst_28414 = cljs.core.async.muxch_STAR_.call(null,inst_28413);var inst_28415 = cljs.core.async.close_BANG_.call(null,inst_28414);var inst_28416 = (inst_28408 + (1));var tmp28496 = inst_28407;var tmp28497 = inst_28406;var tmp28498 = inst_28405;var inst_28405__$1 = tmp28498;var inst_28406__$1 = tmp28497;var inst_28407__$1 = tmp28496;var inst_28408__$1 = inst_28416;var state_28466__$1 = (function (){var statearr_28502 = state_28466;(statearr_28502[(12)] = inst_28407__$1);
(statearr_28502[(13)] = inst_28408__$1);
(statearr_28502[(14)] = inst_28406__$1);
(statearr_28502[(18)] = inst_28415);
(statearr_28502[(15)] = inst_28405__$1);
return statearr_28502;
})();var statearr_28503_28538 = state_28466__$1;(statearr_28503_28538[(2)] = null);
(statearr_28503_28538[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (18)))
{var inst_28434 = (state_28466[(2)]);var state_28466__$1 = state_28466;var statearr_28504_28539 = state_28466__$1;(statearr_28504_28539[(2)] = inst_28434);
(statearr_28504_28539[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28467 === (8)))
{var inst_28407 = (state_28466[(12)]);var inst_28408 = (state_28466[(13)]);var inst_28410 = (inst_28408 < inst_28407);var inst_28411 = inst_28410;var state_28466__$1 = state_28466;if(cljs.core.truth_(inst_28411))
{var statearr_28505_28540 = state_28466__$1;(statearr_28505_28540[(1)] = (10));
} else
{var statearr_28506_28541 = state_28466__$1;(statearr_28506_28541[(1)] = (11));
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
});})(c__5693__auto___28514,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___28514,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28510[(0)] = state_machine__5679__auto__);
(statearr_28510[(1)] = (1));
return statearr_28510;
});
var state_machine__5679__auto____1 = (function (state_28466){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object))
{var ex__5682__auto__ = e28511;var statearr_28512_28542 = state_28466;(statearr_28512_28542[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28543 = state_28466;
state_28466 = G__28543;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28466){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28514,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_28513 = f__5694__auto__.call(null);(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28514);
return statearr_28513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28514,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___28680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28650){var state_val_28651 = (state_28650[(1)]);if((state_val_28651 === (7)))
{var state_28650__$1 = state_28650;var statearr_28652_28681 = state_28650__$1;(statearr_28652_28681[(2)] = null);
(statearr_28652_28681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (1)))
{var state_28650__$1 = state_28650;var statearr_28653_28682 = state_28650__$1;(statearr_28653_28682[(2)] = null);
(statearr_28653_28682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (4)))
{var inst_28614 = (state_28650[(7)]);var inst_28616 = (inst_28614 < cnt);var state_28650__$1 = state_28650;if(cljs.core.truth_(inst_28616))
{var statearr_28654_28683 = state_28650__$1;(statearr_28654_28683[(1)] = (6));
} else
{var statearr_28655_28684 = state_28650__$1;(statearr_28655_28684[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (15)))
{var inst_28646 = (state_28650[(2)]);var state_28650__$1 = state_28650;var statearr_28656_28685 = state_28650__$1;(statearr_28656_28685[(2)] = inst_28646);
(statearr_28656_28685[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (13)))
{var inst_28639 = cljs.core.async.close_BANG_.call(null,out);var state_28650__$1 = state_28650;var statearr_28657_28686 = state_28650__$1;(statearr_28657_28686[(2)] = inst_28639);
(statearr_28657_28686[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (6)))
{var state_28650__$1 = state_28650;var statearr_28658_28687 = state_28650__$1;(statearr_28658_28687[(2)] = null);
(statearr_28658_28687[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (3)))
{var inst_28648 = (state_28650[(2)]);var state_28650__$1 = state_28650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28650__$1,inst_28648);
} else
{if((state_val_28651 === (12)))
{var inst_28636 = (state_28650[(8)]);var inst_28636__$1 = (state_28650[(2)]);var inst_28637 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28636__$1);var state_28650__$1 = (function (){var statearr_28659 = state_28650;(statearr_28659[(8)] = inst_28636__$1);
return statearr_28659;
})();if(cljs.core.truth_(inst_28637))
{var statearr_28660_28688 = state_28650__$1;(statearr_28660_28688[(1)] = (13));
} else
{var statearr_28661_28689 = state_28650__$1;(statearr_28661_28689[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (2)))
{var inst_28613 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28614 = (0);var state_28650__$1 = (function (){var statearr_28662 = state_28650;(statearr_28662[(7)] = inst_28614);
(statearr_28662[(9)] = inst_28613);
return statearr_28662;
})();var statearr_28663_28690 = state_28650__$1;(statearr_28663_28690[(2)] = null);
(statearr_28663_28690[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (11)))
{var inst_28614 = (state_28650[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28650,(10),Object,null,(9));var inst_28623 = chs__$1.call(null,inst_28614);var inst_28624 = done.call(null,inst_28614);var inst_28625 = cljs.core.async.take_BANG_.call(null,inst_28623,inst_28624);var state_28650__$1 = state_28650;var statearr_28664_28691 = state_28650__$1;(statearr_28664_28691[(2)] = inst_28625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28650__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (9)))
{var inst_28614 = (state_28650[(7)]);var inst_28627 = (state_28650[(2)]);var inst_28628 = (inst_28614 + (1));var inst_28614__$1 = inst_28628;var state_28650__$1 = (function (){var statearr_28665 = state_28650;(statearr_28665[(7)] = inst_28614__$1);
(statearr_28665[(10)] = inst_28627);
return statearr_28665;
})();var statearr_28666_28692 = state_28650__$1;(statearr_28666_28692[(2)] = null);
(statearr_28666_28692[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (5)))
{var inst_28634 = (state_28650[(2)]);var state_28650__$1 = (function (){var statearr_28667 = state_28650;(statearr_28667[(11)] = inst_28634);
return statearr_28667;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28650__$1,(12),dchan);
} else
{if((state_val_28651 === (14)))
{var inst_28636 = (state_28650[(8)]);var inst_28641 = cljs.core.apply.call(null,f,inst_28636);var state_28650__$1 = state_28650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28650__$1,(16),out,inst_28641);
} else
{if((state_val_28651 === (16)))
{var inst_28643 = (state_28650[(2)]);var state_28650__$1 = (function (){var statearr_28668 = state_28650;(statearr_28668[(12)] = inst_28643);
return statearr_28668;
})();var statearr_28669_28693 = state_28650__$1;(statearr_28669_28693[(2)] = null);
(statearr_28669_28693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (10)))
{var inst_28618 = (state_28650[(2)]);var inst_28619 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28650__$1 = (function (){var statearr_28670 = state_28650;(statearr_28670[(13)] = inst_28618);
return statearr_28670;
})();var statearr_28671_28694 = state_28650__$1;(statearr_28671_28694[(2)] = inst_28619);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28650__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28651 === (8)))
{var inst_28632 = (state_28650[(2)]);var state_28650__$1 = state_28650;var statearr_28672_28695 = state_28650__$1;(statearr_28672_28695[(2)] = inst_28632);
(statearr_28672_28695[(1)] = (5));
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
});})(c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28676[(0)] = state_machine__5679__auto__);
(statearr_28676[(1)] = (1));
return statearr_28676;
});
var state_machine__5679__auto____1 = (function (state_28650){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28650);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28677){if((e28677 instanceof Object))
{var ex__5682__auto__ = e28677;var statearr_28678_28696 = state_28650;(statearr_28678_28696[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28697 = state_28650;
state_28650 = G__28697;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28650){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28679 = f__5694__auto__.call(null);(statearr_28679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28680);
return statearr_28679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28805,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28805,out){
return (function (state_28781){var state_val_28782 = (state_28781[(1)]);if((state_val_28782 === (7)))
{var inst_28761 = (state_28781[(7)]);var inst_28760 = (state_28781[(8)]);var inst_28760__$1 = (state_28781[(2)]);var inst_28761__$1 = cljs.core.nth.call(null,inst_28760__$1,(0),null);var inst_28762 = cljs.core.nth.call(null,inst_28760__$1,(1),null);var inst_28763 = (inst_28761__$1 == null);var state_28781__$1 = (function (){var statearr_28783 = state_28781;(statearr_28783[(9)] = inst_28762);
(statearr_28783[(7)] = inst_28761__$1);
(statearr_28783[(8)] = inst_28760__$1);
return statearr_28783;
})();if(cljs.core.truth_(inst_28763))
{var statearr_28784_28806 = state_28781__$1;(statearr_28784_28806[(1)] = (8));
} else
{var statearr_28785_28807 = state_28781__$1;(statearr_28785_28807[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (1)))
{var inst_28752 = cljs.core.vec.call(null,chs);var inst_28753 = inst_28752;var state_28781__$1 = (function (){var statearr_28786 = state_28781;(statearr_28786[(10)] = inst_28753);
return statearr_28786;
})();var statearr_28787_28808 = state_28781__$1;(statearr_28787_28808[(2)] = null);
(statearr_28787_28808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (4)))
{var inst_28753 = (state_28781[(10)]);var state_28781__$1 = state_28781;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28781__$1,(7),inst_28753);
} else
{if((state_val_28782 === (6)))
{var inst_28777 = (state_28781[(2)]);var state_28781__$1 = state_28781;var statearr_28788_28809 = state_28781__$1;(statearr_28788_28809[(2)] = inst_28777);
(statearr_28788_28809[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (3)))
{var inst_28779 = (state_28781[(2)]);var state_28781__$1 = state_28781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28781__$1,inst_28779);
} else
{if((state_val_28782 === (2)))
{var inst_28753 = (state_28781[(10)]);var inst_28755 = cljs.core.count.call(null,inst_28753);var inst_28756 = (inst_28755 > (0));var state_28781__$1 = state_28781;if(cljs.core.truth_(inst_28756))
{var statearr_28790_28810 = state_28781__$1;(statearr_28790_28810[(1)] = (4));
} else
{var statearr_28791_28811 = state_28781__$1;(statearr_28791_28811[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (11)))
{var inst_28753 = (state_28781[(10)]);var inst_28770 = (state_28781[(2)]);var tmp28789 = inst_28753;var inst_28753__$1 = tmp28789;var state_28781__$1 = (function (){var statearr_28792 = state_28781;(statearr_28792[(11)] = inst_28770);
(statearr_28792[(10)] = inst_28753__$1);
return statearr_28792;
})();var statearr_28793_28812 = state_28781__$1;(statearr_28793_28812[(2)] = null);
(statearr_28793_28812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (9)))
{var inst_28761 = (state_28781[(7)]);var state_28781__$1 = state_28781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28781__$1,(11),out,inst_28761);
} else
{if((state_val_28782 === (5)))
{var inst_28775 = cljs.core.async.close_BANG_.call(null,out);var state_28781__$1 = state_28781;var statearr_28794_28813 = state_28781__$1;(statearr_28794_28813[(2)] = inst_28775);
(statearr_28794_28813[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (10)))
{var inst_28773 = (state_28781[(2)]);var state_28781__$1 = state_28781;var statearr_28795_28814 = state_28781__$1;(statearr_28795_28814[(2)] = inst_28773);
(statearr_28795_28814[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28782 === (8)))
{var inst_28762 = (state_28781[(9)]);var inst_28761 = (state_28781[(7)]);var inst_28753 = (state_28781[(10)]);var inst_28760 = (state_28781[(8)]);var inst_28765 = (function (){var c = inst_28762;var v = inst_28761;var vec__28758 = inst_28760;var cs = inst_28753;return ((function (c,v,vec__28758,cs,inst_28762,inst_28761,inst_28753,inst_28760,state_val_28782,c__5693__auto___28805,out){
return (function (p1__28698_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28698_SHARP_);
});
;})(c,v,vec__28758,cs,inst_28762,inst_28761,inst_28753,inst_28760,state_val_28782,c__5693__auto___28805,out))
})();var inst_28766 = cljs.core.filterv.call(null,inst_28765,inst_28753);var inst_28753__$1 = inst_28766;var state_28781__$1 = (function (){var statearr_28796 = state_28781;(statearr_28796[(10)] = inst_28753__$1);
return statearr_28796;
})();var statearr_28797_28815 = state_28781__$1;(statearr_28797_28815[(2)] = null);
(statearr_28797_28815[(1)] = (2));
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
});})(c__5693__auto___28805,out))
;return ((function (switch__5678__auto__,c__5693__auto___28805,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28801 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28801[(0)] = state_machine__5679__auto__);
(statearr_28801[(1)] = (1));
return statearr_28801;
});
var state_machine__5679__auto____1 = (function (state_28781){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28781);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28802){if((e28802 instanceof Object))
{var ex__5682__auto__ = e28802;var statearr_28803_28816 = state_28781;(statearr_28803_28816[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28817 = state_28781;
state_28781 = G__28817;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28781){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28805,out))
})();var state__5695__auto__ = (function (){var statearr_28804 = f__5694__auto__.call(null);(statearr_28804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28805);
return statearr_28804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28805,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28910 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28910,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28910,out){
return (function (state_28887){var state_val_28888 = (state_28887[(1)]);if((state_val_28888 === (7)))
{var inst_28869 = (state_28887[(7)]);var inst_28869__$1 = (state_28887[(2)]);var inst_28870 = (inst_28869__$1 == null);var inst_28871 = cljs.core.not.call(null,inst_28870);var state_28887__$1 = (function (){var statearr_28889 = state_28887;(statearr_28889[(7)] = inst_28869__$1);
return statearr_28889;
})();if(inst_28871)
{var statearr_28890_28911 = state_28887__$1;(statearr_28890_28911[(1)] = (8));
} else
{var statearr_28891_28912 = state_28887__$1;(statearr_28891_28912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (1)))
{var inst_28864 = (0);var state_28887__$1 = (function (){var statearr_28892 = state_28887;(statearr_28892[(8)] = inst_28864);
return statearr_28892;
})();var statearr_28893_28913 = state_28887__$1;(statearr_28893_28913[(2)] = null);
(statearr_28893_28913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (4)))
{var state_28887__$1 = state_28887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28887__$1,(7),ch);
} else
{if((state_val_28888 === (6)))
{var inst_28882 = (state_28887[(2)]);var state_28887__$1 = state_28887;var statearr_28894_28914 = state_28887__$1;(statearr_28894_28914[(2)] = inst_28882);
(statearr_28894_28914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (3)))
{var inst_28884 = (state_28887[(2)]);var inst_28885 = cljs.core.async.close_BANG_.call(null,out);var state_28887__$1 = (function (){var statearr_28895 = state_28887;(statearr_28895[(9)] = inst_28884);
return statearr_28895;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28887__$1,inst_28885);
} else
{if((state_val_28888 === (2)))
{var inst_28864 = (state_28887[(8)]);var inst_28866 = (inst_28864 < n);var state_28887__$1 = state_28887;if(cljs.core.truth_(inst_28866))
{var statearr_28896_28915 = state_28887__$1;(statearr_28896_28915[(1)] = (4));
} else
{var statearr_28897_28916 = state_28887__$1;(statearr_28897_28916[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (11)))
{var inst_28864 = (state_28887[(8)]);var inst_28874 = (state_28887[(2)]);var inst_28875 = (inst_28864 + (1));var inst_28864__$1 = inst_28875;var state_28887__$1 = (function (){var statearr_28898 = state_28887;(statearr_28898[(8)] = inst_28864__$1);
(statearr_28898[(10)] = inst_28874);
return statearr_28898;
})();var statearr_28899_28917 = state_28887__$1;(statearr_28899_28917[(2)] = null);
(statearr_28899_28917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (9)))
{var state_28887__$1 = state_28887;var statearr_28900_28918 = state_28887__$1;(statearr_28900_28918[(2)] = null);
(statearr_28900_28918[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (5)))
{var state_28887__$1 = state_28887;var statearr_28901_28919 = state_28887__$1;(statearr_28901_28919[(2)] = null);
(statearr_28901_28919[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (10)))
{var inst_28879 = (state_28887[(2)]);var state_28887__$1 = state_28887;var statearr_28902_28920 = state_28887__$1;(statearr_28902_28920[(2)] = inst_28879);
(statearr_28902_28920[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28888 === (8)))
{var inst_28869 = (state_28887[(7)]);var state_28887__$1 = state_28887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28887__$1,(11),out,inst_28869);
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
});})(c__5693__auto___28910,out))
;return ((function (switch__5678__auto__,c__5693__auto___28910,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28906 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28906[(0)] = state_machine__5679__auto__);
(statearr_28906[(1)] = (1));
return statearr_28906;
});
var state_machine__5679__auto____1 = (function (state_28887){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28907){if((e28907 instanceof Object))
{var ex__5682__auto__ = e28907;var statearr_28908_28921 = state_28887;(statearr_28908_28921[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28922 = state_28887;
state_28887 = G__28922;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28887){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28910,out))
})();var state__5695__auto__ = (function (){var statearr_28909 = f__5694__auto__.call(null);(statearr_28909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28910);
return statearr_28909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28910,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29019,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29019,out){
return (function (state_28994){var state_val_28995 = (state_28994[(1)]);if((state_val_28995 === (7)))
{var inst_28989 = (state_28994[(2)]);var state_28994__$1 = state_28994;var statearr_28996_29020 = state_28994__$1;(statearr_28996_29020[(2)] = inst_28989);
(statearr_28996_29020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (1)))
{var inst_28971 = null;var state_28994__$1 = (function (){var statearr_28997 = state_28994;(statearr_28997[(7)] = inst_28971);
return statearr_28997;
})();var statearr_28998_29021 = state_28994__$1;(statearr_28998_29021[(2)] = null);
(statearr_28998_29021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (4)))
{var inst_28974 = (state_28994[(8)]);var inst_28974__$1 = (state_28994[(2)]);var inst_28975 = (inst_28974__$1 == null);var inst_28976 = cljs.core.not.call(null,inst_28975);var state_28994__$1 = (function (){var statearr_28999 = state_28994;(statearr_28999[(8)] = inst_28974__$1);
return statearr_28999;
})();if(inst_28976)
{var statearr_29000_29022 = state_28994__$1;(statearr_29000_29022[(1)] = (5));
} else
{var statearr_29001_29023 = state_28994__$1;(statearr_29001_29023[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (6)))
{var state_28994__$1 = state_28994;var statearr_29002_29024 = state_28994__$1;(statearr_29002_29024[(2)] = null);
(statearr_29002_29024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (3)))
{var inst_28991 = (state_28994[(2)]);var inst_28992 = cljs.core.async.close_BANG_.call(null,out);var state_28994__$1 = (function (){var statearr_29003 = state_28994;(statearr_29003[(9)] = inst_28991);
return statearr_29003;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else
{if((state_val_28995 === (2)))
{var state_28994__$1 = state_28994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28994__$1,(4),ch);
} else
{if((state_val_28995 === (11)))
{var inst_28974 = (state_28994[(8)]);var inst_28983 = (state_28994[(2)]);var inst_28971 = inst_28974;var state_28994__$1 = (function (){var statearr_29004 = state_28994;(statearr_29004[(10)] = inst_28983);
(statearr_29004[(7)] = inst_28971);
return statearr_29004;
})();var statearr_29005_29025 = state_28994__$1;(statearr_29005_29025[(2)] = null);
(statearr_29005_29025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (9)))
{var inst_28974 = (state_28994[(8)]);var state_28994__$1 = state_28994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(11),out,inst_28974);
} else
{if((state_val_28995 === (5)))
{var inst_28974 = (state_28994[(8)]);var inst_28971 = (state_28994[(7)]);var inst_28978 = cljs.core._EQ_.call(null,inst_28974,inst_28971);var state_28994__$1 = state_28994;if(inst_28978)
{var statearr_29007_29026 = state_28994__$1;(statearr_29007_29026[(1)] = (8));
} else
{var statearr_29008_29027 = state_28994__$1;(statearr_29008_29027[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (10)))
{var inst_28986 = (state_28994[(2)]);var state_28994__$1 = state_28994;var statearr_29009_29028 = state_28994__$1;(statearr_29009_29028[(2)] = inst_28986);
(statearr_29009_29028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28995 === (8)))
{var inst_28971 = (state_28994[(7)]);var tmp29006 = inst_28971;var inst_28971__$1 = tmp29006;var state_28994__$1 = (function (){var statearr_29010 = state_28994;(statearr_29010[(7)] = inst_28971__$1);
return statearr_29010;
})();var statearr_29011_29029 = state_28994__$1;(statearr_29011_29029[(2)] = null);
(statearr_29011_29029[(1)] = (2));
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
});})(c__5693__auto___29019,out))
;return ((function (switch__5678__auto__,c__5693__auto___29019,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29015 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29015[(0)] = state_machine__5679__auto__);
(statearr_29015[(1)] = (1));
return statearr_29015;
});
var state_machine__5679__auto____1 = (function (state_28994){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29016){if((e29016 instanceof Object))
{var ex__5682__auto__ = e29016;var statearr_29017_29030 = state_28994;(statearr_29017_29030[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29031 = state_28994;
state_28994 = G__29031;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29019,out))
})();var state__5695__auto__ = (function (){var statearr_29018 = f__5694__auto__.call(null);(statearr_29018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29019);
return statearr_29018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29019,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29166,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29166,out){
return (function (state_29136){var state_val_29137 = (state_29136[(1)]);if((state_val_29137 === (7)))
{var inst_29132 = (state_29136[(2)]);var state_29136__$1 = state_29136;var statearr_29138_29167 = state_29136__$1;(statearr_29138_29167[(2)] = inst_29132);
(statearr_29138_29167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (1)))
{var inst_29099 = (new Array(n));var inst_29100 = inst_29099;var inst_29101 = (0);var state_29136__$1 = (function (){var statearr_29139 = state_29136;(statearr_29139[(7)] = inst_29100);
(statearr_29139[(8)] = inst_29101);
return statearr_29139;
})();var statearr_29140_29168 = state_29136__$1;(statearr_29140_29168[(2)] = null);
(statearr_29140_29168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (4)))
{var inst_29104 = (state_29136[(9)]);var inst_29104__$1 = (state_29136[(2)]);var inst_29105 = (inst_29104__$1 == null);var inst_29106 = cljs.core.not.call(null,inst_29105);var state_29136__$1 = (function (){var statearr_29141 = state_29136;(statearr_29141[(9)] = inst_29104__$1);
return statearr_29141;
})();if(inst_29106)
{var statearr_29142_29169 = state_29136__$1;(statearr_29142_29169[(1)] = (5));
} else
{var statearr_29143_29170 = state_29136__$1;(statearr_29143_29170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (15)))
{var inst_29126 = (state_29136[(2)]);var state_29136__$1 = state_29136;var statearr_29144_29171 = state_29136__$1;(statearr_29144_29171[(2)] = inst_29126);
(statearr_29144_29171[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (13)))
{var state_29136__$1 = state_29136;var statearr_29145_29172 = state_29136__$1;(statearr_29145_29172[(2)] = null);
(statearr_29145_29172[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (6)))
{var inst_29101 = (state_29136[(8)]);var inst_29122 = (inst_29101 > (0));var state_29136__$1 = state_29136;if(cljs.core.truth_(inst_29122))
{var statearr_29146_29173 = state_29136__$1;(statearr_29146_29173[(1)] = (12));
} else
{var statearr_29147_29174 = state_29136__$1;(statearr_29147_29174[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (3)))
{var inst_29134 = (state_29136[(2)]);var state_29136__$1 = state_29136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29136__$1,inst_29134);
} else
{if((state_val_29137 === (12)))
{var inst_29100 = (state_29136[(7)]);var inst_29124 = cljs.core.vec.call(null,inst_29100);var state_29136__$1 = state_29136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29136__$1,(15),out,inst_29124);
} else
{if((state_val_29137 === (2)))
{var state_29136__$1 = state_29136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29136__$1,(4),ch);
} else
{if((state_val_29137 === (11)))
{var inst_29116 = (state_29136[(2)]);var inst_29117 = (new Array(n));var inst_29100 = inst_29117;var inst_29101 = (0);var state_29136__$1 = (function (){var statearr_29148 = state_29136;(statearr_29148[(10)] = inst_29116);
(statearr_29148[(7)] = inst_29100);
(statearr_29148[(8)] = inst_29101);
return statearr_29148;
})();var statearr_29149_29175 = state_29136__$1;(statearr_29149_29175[(2)] = null);
(statearr_29149_29175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (9)))
{var inst_29100 = (state_29136[(7)]);var inst_29114 = cljs.core.vec.call(null,inst_29100);var state_29136__$1 = state_29136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29136__$1,(11),out,inst_29114);
} else
{if((state_val_29137 === (5)))
{var inst_29109 = (state_29136[(11)]);var inst_29100 = (state_29136[(7)]);var inst_29101 = (state_29136[(8)]);var inst_29104 = (state_29136[(9)]);var inst_29108 = (inst_29100[inst_29101] = inst_29104);var inst_29109__$1 = (inst_29101 + (1));var inst_29110 = (inst_29109__$1 < n);var state_29136__$1 = (function (){var statearr_29150 = state_29136;(statearr_29150[(11)] = inst_29109__$1);
(statearr_29150[(12)] = inst_29108);
return statearr_29150;
})();if(cljs.core.truth_(inst_29110))
{var statearr_29151_29176 = state_29136__$1;(statearr_29151_29176[(1)] = (8));
} else
{var statearr_29152_29177 = state_29136__$1;(statearr_29152_29177[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (14)))
{var inst_29129 = (state_29136[(2)]);var inst_29130 = cljs.core.async.close_BANG_.call(null,out);var state_29136__$1 = (function (){var statearr_29154 = state_29136;(statearr_29154[(13)] = inst_29129);
return statearr_29154;
})();var statearr_29155_29178 = state_29136__$1;(statearr_29155_29178[(2)] = inst_29130);
(statearr_29155_29178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (10)))
{var inst_29120 = (state_29136[(2)]);var state_29136__$1 = state_29136;var statearr_29156_29179 = state_29136__$1;(statearr_29156_29179[(2)] = inst_29120);
(statearr_29156_29179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29137 === (8)))
{var inst_29109 = (state_29136[(11)]);var inst_29100 = (state_29136[(7)]);var tmp29153 = inst_29100;var inst_29100__$1 = tmp29153;var inst_29101 = inst_29109;var state_29136__$1 = (function (){var statearr_29157 = state_29136;(statearr_29157[(7)] = inst_29100__$1);
(statearr_29157[(8)] = inst_29101);
return statearr_29157;
})();var statearr_29158_29180 = state_29136__$1;(statearr_29158_29180[(2)] = null);
(statearr_29158_29180[(1)] = (2));
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
});})(c__5693__auto___29166,out))
;return ((function (switch__5678__auto__,c__5693__auto___29166,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29162[(0)] = state_machine__5679__auto__);
(statearr_29162[(1)] = (1));
return statearr_29162;
});
var state_machine__5679__auto____1 = (function (state_29136){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29136);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29163){if((e29163 instanceof Object))
{var ex__5682__auto__ = e29163;var statearr_29164_29181 = state_29136;(statearr_29164_29181[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29182 = state_29136;
state_29136 = G__29182;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29136){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29166,out))
})();var state__5695__auto__ = (function (){var statearr_29165 = f__5694__auto__.call(null);(statearr_29165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29166);
return statearr_29165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29166,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29325,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29325,out){
return (function (state_29295){var state_val_29296 = (state_29295[(1)]);if((state_val_29296 === (7)))
{var inst_29291 = (state_29295[(2)]);var state_29295__$1 = state_29295;var statearr_29297_29326 = state_29295__$1;(statearr_29297_29326[(2)] = inst_29291);
(statearr_29297_29326[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (1)))
{var inst_29254 = [];var inst_29255 = inst_29254;var inst_29256 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_29295__$1 = (function (){var statearr_29298 = state_29295;(statearr_29298[(7)] = inst_29256);
(statearr_29298[(8)] = inst_29255);
return statearr_29298;
})();var statearr_29299_29327 = state_29295__$1;(statearr_29299_29327[(2)] = null);
(statearr_29299_29327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (4)))
{var inst_29259 = (state_29295[(9)]);var inst_29259__$1 = (state_29295[(2)]);var inst_29260 = (inst_29259__$1 == null);var inst_29261 = cljs.core.not.call(null,inst_29260);var state_29295__$1 = (function (){var statearr_29300 = state_29295;(statearr_29300[(9)] = inst_29259__$1);
return statearr_29300;
})();if(inst_29261)
{var statearr_29301_29328 = state_29295__$1;(statearr_29301_29328[(1)] = (5));
} else
{var statearr_29302_29329 = state_29295__$1;(statearr_29302_29329[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (15)))
{var inst_29285 = (state_29295[(2)]);var state_29295__$1 = state_29295;var statearr_29303_29330 = state_29295__$1;(statearr_29303_29330[(2)] = inst_29285);
(statearr_29303_29330[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (13)))
{var state_29295__$1 = state_29295;var statearr_29304_29331 = state_29295__$1;(statearr_29304_29331[(2)] = null);
(statearr_29304_29331[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (6)))
{var inst_29255 = (state_29295[(8)]);var inst_29280 = inst_29255.length;var inst_29281 = (inst_29280 > (0));var state_29295__$1 = state_29295;if(cljs.core.truth_(inst_29281))
{var statearr_29305_29332 = state_29295__$1;(statearr_29305_29332[(1)] = (12));
} else
{var statearr_29306_29333 = state_29295__$1;(statearr_29306_29333[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (3)))
{var inst_29293 = (state_29295[(2)]);var state_29295__$1 = state_29295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29295__$1,inst_29293);
} else
{if((state_val_29296 === (12)))
{var inst_29255 = (state_29295[(8)]);var inst_29283 = cljs.core.vec.call(null,inst_29255);var state_29295__$1 = state_29295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(15),out,inst_29283);
} else
{if((state_val_29296 === (2)))
{var state_29295__$1 = state_29295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29295__$1,(4),ch);
} else
{if((state_val_29296 === (11)))
{var inst_29263 = (state_29295[(10)]);var inst_29259 = (state_29295[(9)]);var inst_29273 = (state_29295[(2)]);var inst_29274 = [];var inst_29275 = inst_29274.push(inst_29259);var inst_29255 = inst_29274;var inst_29256 = inst_29263;var state_29295__$1 = (function (){var statearr_29307 = state_29295;(statearr_29307[(11)] = inst_29275);
(statearr_29307[(7)] = inst_29256);
(statearr_29307[(8)] = inst_29255);
(statearr_29307[(12)] = inst_29273);
return statearr_29307;
})();var statearr_29308_29334 = state_29295__$1;(statearr_29308_29334[(2)] = null);
(statearr_29308_29334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (9)))
{var inst_29255 = (state_29295[(8)]);var inst_29271 = cljs.core.vec.call(null,inst_29255);var state_29295__$1 = state_29295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(11),out,inst_29271);
} else
{if((state_val_29296 === (5)))
{var inst_29263 = (state_29295[(10)]);var inst_29256 = (state_29295[(7)]);var inst_29259 = (state_29295[(9)]);var inst_29263__$1 = f.call(null,inst_29259);var inst_29264 = cljs.core._EQ_.call(null,inst_29263__$1,inst_29256);var inst_29265 = cljs.core.keyword_identical_QMARK_.call(null,inst_29256,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_29266 = (inst_29264) || (inst_29265);var state_29295__$1 = (function (){var statearr_29309 = state_29295;(statearr_29309[(10)] = inst_29263__$1);
return statearr_29309;
})();if(cljs.core.truth_(inst_29266))
{var statearr_29310_29335 = state_29295__$1;(statearr_29310_29335[(1)] = (8));
} else
{var statearr_29311_29336 = state_29295__$1;(statearr_29311_29336[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (14)))
{var inst_29288 = (state_29295[(2)]);var inst_29289 = cljs.core.async.close_BANG_.call(null,out);var state_29295__$1 = (function (){var statearr_29313 = state_29295;(statearr_29313[(13)] = inst_29288);
return statearr_29313;
})();var statearr_29314_29337 = state_29295__$1;(statearr_29314_29337[(2)] = inst_29289);
(statearr_29314_29337[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (10)))
{var inst_29278 = (state_29295[(2)]);var state_29295__$1 = state_29295;var statearr_29315_29338 = state_29295__$1;(statearr_29315_29338[(2)] = inst_29278);
(statearr_29315_29338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29296 === (8)))
{var inst_29263 = (state_29295[(10)]);var inst_29255 = (state_29295[(8)]);var inst_29259 = (state_29295[(9)]);var inst_29268 = inst_29255.push(inst_29259);var tmp29312 = inst_29255;var inst_29255__$1 = tmp29312;var inst_29256 = inst_29263;var state_29295__$1 = (function (){var statearr_29316 = state_29295;(statearr_29316[(7)] = inst_29256);
(statearr_29316[(8)] = inst_29255__$1);
(statearr_29316[(14)] = inst_29268);
return statearr_29316;
})();var statearr_29317_29339 = state_29295__$1;(statearr_29317_29339[(2)] = null);
(statearr_29317_29339[(1)] = (2));
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
});})(c__5693__auto___29325,out))
;return ((function (switch__5678__auto__,c__5693__auto___29325,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29321[(0)] = state_machine__5679__auto__);
(statearr_29321[(1)] = (1));
return statearr_29321;
});
var state_machine__5679__auto____1 = (function (state_29295){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29295);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29322){if((e29322 instanceof Object))
{var ex__5682__auto__ = e29322;var statearr_29323_29340 = state_29295;(statearr_29323_29340[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29341 = state_29295;
state_29295 = G__29341;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29295){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29325,out))
})();var state__5695__auto__ = (function (){var statearr_29324 = f__5694__auto__.call(null);(statearr_29324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29325);
return statearr_29324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29325,out))
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
