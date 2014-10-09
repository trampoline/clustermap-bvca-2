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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t63460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63460 = (function (f,fn_handler,meta63461){
this.f = f;
this.fn_handler = fn_handler;
this.meta63461 = meta63461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63460.cljs$lang$type = true;
cljs.core.async.t63460.cljs$lang$ctorStr = "cljs.core.async/t63460";
cljs.core.async.t63460.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63460");
});
cljs.core.async.t63460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t63460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t63460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63462){var self__ = this;
var _63462__$1 = this;return self__.meta63461;
});
cljs.core.async.t63460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63462,meta63461__$1){var self__ = this;
var _63462__$1 = this;return (new cljs.core.async.t63460(self__.f,self__.fn_handler,meta63461__$1));
});
cljs.core.async.__GT_t63460 = (function __GT_t63460(f__$1,fn_handler__$1,meta63461){return (new cljs.core.async.t63460(f__$1,fn_handler__$1,meta63461));
});
}
return (new cljs.core.async.t63460(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__63464 = buff;if(G__63464)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__63464.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__63464.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__63464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__63464);
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
{var val_63465 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_63465);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_63465,ret){
return (function (){return fn1.call(null,val_63465);
});})(val_63465,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___63466 = n;var x_63467 = (0);while(true){
if((x_63467 < n__4414__auto___63466))
{(a[x_63467] = (0));
{
var G__63468 = (x_63467 + (1));
x_63467 = G__63468;
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
var G__63469 = (i + (1));
i = G__63469;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t63473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63473 = (function (flag,alt_flag,meta63474){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta63474 = meta63474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63473.cljs$lang$type = true;
cljs.core.async.t63473.cljs$lang$ctorStr = "cljs.core.async/t63473";
cljs.core.async.t63473.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63473");
});})(flag))
;
cljs.core.async.t63473.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t63473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t63473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_63475){var self__ = this;
var _63475__$1 = this;return self__.meta63474;
});})(flag))
;
cljs.core.async.t63473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_63475,meta63474__$1){var self__ = this;
var _63475__$1 = this;return (new cljs.core.async.t63473(self__.flag,self__.alt_flag,meta63474__$1));
});})(flag))
;
cljs.core.async.__GT_t63473 = ((function (flag){
return (function __GT_t63473(flag__$1,alt_flag__$1,meta63474){return (new cljs.core.async.t63473(flag__$1,alt_flag__$1,meta63474));
});})(flag))
;
}
return (new cljs.core.async.t63473(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t63479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63479 = (function (cb,flag,alt_handler,meta63480){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta63480 = meta63480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63479.cljs$lang$type = true;
cljs.core.async.t63479.cljs$lang$ctorStr = "cljs.core.async/t63479";
cljs.core.async.t63479.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63479");
});
cljs.core.async.t63479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t63479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t63479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63481){var self__ = this;
var _63481__$1 = this;return self__.meta63480;
});
cljs.core.async.t63479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63481,meta63480__$1){var self__ = this;
var _63481__$1 = this;return (new cljs.core.async.t63479(self__.cb,self__.flag,self__.alt_handler,meta63480__$1));
});
cljs.core.async.__GT_t63479 = (function __GT_t63479(cb__$1,flag__$1,alt_handler__$1,meta63480){return (new cljs.core.async.t63479(cb__$1,flag__$1,alt_handler__$1,meta63480));
});
}
return (new cljs.core.async.t63479(cb,flag,alt_handler,null));
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
return (function (p1__63482_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63482_SHARP_,port], null));
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
var G__63483 = (i + (1));
i = G__63483;
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
var alts_BANG___delegate = function (ports,p__63484){var map__63486 = p__63484;var map__63486__$1 = ((cljs.core.seq_QMARK_.call(null,map__63486))?cljs.core.apply.call(null,cljs.core.hash_map,map__63486):map__63486);var opts = map__63486__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__63484 = null;if (arguments.length > 1) {
  p__63484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__63484);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__63487){
var ports = cljs.core.first(arglist__63487);
var p__63484 = cljs.core.rest(arglist__63487);
return alts_BANG___delegate(ports,p__63484);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t63495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63495 = (function (ch,f,map_LT_,meta63496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta63496 = meta63496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63495.cljs$lang$type = true;
cljs.core.async.t63495.cljs$lang$ctorStr = "cljs.core.async/t63495";
cljs.core.async.t63495.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63495");
});
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t63498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63498 = (function (fn1,_,meta63496,ch,f,map_LT_,meta63499){
this.fn1 = fn1;
this._ = _;
this.meta63496 = meta63496;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta63499 = meta63499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63498.cljs$lang$type = true;
cljs.core.async.t63498.cljs$lang$ctorStr = "cljs.core.async/t63498";
cljs.core.async.t63498.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63498");
});})(___$1))
;
cljs.core.async.t63498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t63498.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t63498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__63488_SHARP_){return f1.call(null,(((p1__63488_SHARP_ == null))?null:self__.f.call(null,p1__63488_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t63498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_63500){var self__ = this;
var _63500__$1 = this;return self__.meta63499;
});})(___$1))
;
cljs.core.async.t63498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_63500,meta63499__$1){var self__ = this;
var _63500__$1 = this;return (new cljs.core.async.t63498(self__.fn1,self__._,self__.meta63496,self__.ch,self__.f,self__.map_LT_,meta63499__$1));
});})(___$1))
;
cljs.core.async.__GT_t63498 = ((function (___$1){
return (function __GT_t63498(fn1__$1,___$2,meta63496__$1,ch__$2,f__$2,map_LT___$2,meta63499){return (new cljs.core.async.t63498(fn1__$1,___$2,meta63496__$1,ch__$2,f__$2,map_LT___$2,meta63499));
});})(___$1))
;
}
return (new cljs.core.async.t63498(fn1,___$1,self__.meta63496,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t63495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t63495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63497){var self__ = this;
var _63497__$1 = this;return self__.meta63496;
});
cljs.core.async.t63495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63497,meta63496__$1){var self__ = this;
var _63497__$1 = this;return (new cljs.core.async.t63495(self__.ch,self__.f,self__.map_LT_,meta63496__$1));
});
cljs.core.async.__GT_t63495 = (function __GT_t63495(ch__$1,f__$1,map_LT___$1,meta63496){return (new cljs.core.async.t63495(ch__$1,f__$1,map_LT___$1,meta63496));
});
}
return (new cljs.core.async.t63495(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t63504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63504 = (function (ch,f,map_GT_,meta63505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta63505 = meta63505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63504.cljs$lang$type = true;
cljs.core.async.t63504.cljs$lang$ctorStr = "cljs.core.async/t63504";
cljs.core.async.t63504.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63504");
});
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t63504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t63504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63506){var self__ = this;
var _63506__$1 = this;return self__.meta63505;
});
cljs.core.async.t63504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63506,meta63505__$1){var self__ = this;
var _63506__$1 = this;return (new cljs.core.async.t63504(self__.ch,self__.f,self__.map_GT_,meta63505__$1));
});
cljs.core.async.__GT_t63504 = (function __GT_t63504(ch__$1,f__$1,map_GT___$1,meta63505){return (new cljs.core.async.t63504(ch__$1,f__$1,map_GT___$1,meta63505));
});
}
return (new cljs.core.async.t63504(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t63510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63510 = (function (ch,p,filter_GT_,meta63511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta63511 = meta63511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63510.cljs$lang$type = true;
cljs.core.async.t63510.cljs$lang$ctorStr = "cljs.core.async/t63510";
cljs.core.async.t63510.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t63510");
});
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t63510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t63510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63512){var self__ = this;
var _63512__$1 = this;return self__.meta63511;
});
cljs.core.async.t63510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63512,meta63511__$1){var self__ = this;
var _63512__$1 = this;return (new cljs.core.async.t63510(self__.ch,self__.p,self__.filter_GT_,meta63511__$1));
});
cljs.core.async.__GT_t63510 = (function __GT_t63510(ch__$1,p__$1,filter_GT___$1,meta63511){return (new cljs.core.async.t63510(ch__$1,p__$1,filter_GT___$1,meta63511));
});
}
return (new cljs.core.async.t63510(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___63595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___63595,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___63595,out){
return (function (state_63574){var state_val_63575 = (state_63574[(1)]);if((state_val_63575 === (7)))
{var inst_63570 = (state_63574[(2)]);var state_63574__$1 = state_63574;var statearr_63576_63596 = state_63574__$1;(statearr_63576_63596[(2)] = inst_63570);
(statearr_63576_63596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (1)))
{var state_63574__$1 = state_63574;var statearr_63577_63597 = state_63574__$1;(statearr_63577_63597[(2)] = null);
(statearr_63577_63597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (4)))
{var inst_63556 = (state_63574[(7)]);var inst_63556__$1 = (state_63574[(2)]);var inst_63557 = (inst_63556__$1 == null);var state_63574__$1 = (function (){var statearr_63578 = state_63574;(statearr_63578[(7)] = inst_63556__$1);
return statearr_63578;
})();if(cljs.core.truth_(inst_63557))
{var statearr_63579_63598 = state_63574__$1;(statearr_63579_63598[(1)] = (5));
} else
{var statearr_63580_63599 = state_63574__$1;(statearr_63580_63599[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (6)))
{var inst_63556 = (state_63574[(7)]);var inst_63561 = p.call(null,inst_63556);var state_63574__$1 = state_63574;if(cljs.core.truth_(inst_63561))
{var statearr_63581_63600 = state_63574__$1;(statearr_63581_63600[(1)] = (8));
} else
{var statearr_63582_63601 = state_63574__$1;(statearr_63582_63601[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (3)))
{var inst_63572 = (state_63574[(2)]);var state_63574__$1 = state_63574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63574__$1,inst_63572);
} else
{if((state_val_63575 === (2)))
{var state_63574__$1 = state_63574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63574__$1,(4),ch);
} else
{if((state_val_63575 === (11)))
{var inst_63564 = (state_63574[(2)]);var state_63574__$1 = state_63574;var statearr_63583_63602 = state_63574__$1;(statearr_63583_63602[(2)] = inst_63564);
(statearr_63583_63602[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (9)))
{var state_63574__$1 = state_63574;var statearr_63584_63603 = state_63574__$1;(statearr_63584_63603[(2)] = null);
(statearr_63584_63603[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (5)))
{var inst_63559 = cljs.core.async.close_BANG_.call(null,out);var state_63574__$1 = state_63574;var statearr_63585_63604 = state_63574__$1;(statearr_63585_63604[(2)] = inst_63559);
(statearr_63585_63604[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (10)))
{var inst_63567 = (state_63574[(2)]);var state_63574__$1 = (function (){var statearr_63586 = state_63574;(statearr_63586[(8)] = inst_63567);
return statearr_63586;
})();var statearr_63587_63605 = state_63574__$1;(statearr_63587_63605[(2)] = null);
(statearr_63587_63605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63575 === (8)))
{var inst_63556 = (state_63574[(7)]);var state_63574__$1 = state_63574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63574__$1,(11),out,inst_63556);
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
});})(c__5708__auto___63595,out))
;return ((function (switch__5693__auto__,c__5708__auto___63595,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_63591 = [null,null,null,null,null,null,null,null,null];(statearr_63591[(0)] = state_machine__5694__auto__);
(statearr_63591[(1)] = (1));
return statearr_63591;
});
var state_machine__5694__auto____1 = (function (state_63574){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63592){if((e63592 instanceof Object))
{var ex__5697__auto__ = e63592;var statearr_63593_63606 = state_63574;(statearr_63593_63606[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63607 = state_63574;
state_63574 = G__63607;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63574){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___63595,out))
})();var state__5710__auto__ = (function (){var statearr_63594 = f__5709__auto__.call(null);(statearr_63594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___63595);
return statearr_63594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___63595,out))
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
return (function (state_63759){var state_val_63760 = (state_63759[(1)]);if((state_val_63760 === (7)))
{var inst_63755 = (state_63759[(2)]);var state_63759__$1 = state_63759;var statearr_63761_63798 = state_63759__$1;(statearr_63761_63798[(2)] = inst_63755);
(statearr_63761_63798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (20)))
{var inst_63730 = (state_63759[(7)]);var inst_63741 = (state_63759[(2)]);var inst_63742 = cljs.core.next.call(null,inst_63730);var inst_63716 = inst_63742;var inst_63717 = null;var inst_63718 = (0);var inst_63719 = (0);var state_63759__$1 = (function (){var statearr_63762 = state_63759;(statearr_63762[(8)] = inst_63716);
(statearr_63762[(9)] = inst_63718);
(statearr_63762[(10)] = inst_63719);
(statearr_63762[(11)] = inst_63717);
(statearr_63762[(12)] = inst_63741);
return statearr_63762;
})();var statearr_63763_63799 = state_63759__$1;(statearr_63763_63799[(2)] = null);
(statearr_63763_63799[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (1)))
{var state_63759__$1 = state_63759;var statearr_63764_63800 = state_63759__$1;(statearr_63764_63800[(2)] = null);
(statearr_63764_63800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (4)))
{var inst_63705 = (state_63759[(13)]);var inst_63705__$1 = (state_63759[(2)]);var inst_63706 = (inst_63705__$1 == null);var state_63759__$1 = (function (){var statearr_63768 = state_63759;(statearr_63768[(13)] = inst_63705__$1);
return statearr_63768;
})();if(cljs.core.truth_(inst_63706))
{var statearr_63769_63801 = state_63759__$1;(statearr_63769_63801[(1)] = (5));
} else
{var statearr_63770_63802 = state_63759__$1;(statearr_63770_63802[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (15)))
{var state_63759__$1 = state_63759;var statearr_63771_63803 = state_63759__$1;(statearr_63771_63803[(2)] = null);
(statearr_63771_63803[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (13)))
{var inst_63716 = (state_63759[(8)]);var inst_63718 = (state_63759[(9)]);var inst_63719 = (state_63759[(10)]);var inst_63717 = (state_63759[(11)]);var inst_63726 = (state_63759[(2)]);var inst_63727 = (inst_63719 + (1));var tmp63765 = inst_63716;var tmp63766 = inst_63718;var tmp63767 = inst_63717;var inst_63716__$1 = tmp63765;var inst_63717__$1 = tmp63767;var inst_63718__$1 = tmp63766;var inst_63719__$1 = inst_63727;var state_63759__$1 = (function (){var statearr_63772 = state_63759;(statearr_63772[(8)] = inst_63716__$1);
(statearr_63772[(9)] = inst_63718__$1);
(statearr_63772[(10)] = inst_63719__$1);
(statearr_63772[(11)] = inst_63717__$1);
(statearr_63772[(14)] = inst_63726);
return statearr_63772;
})();var statearr_63773_63804 = state_63759__$1;(statearr_63773_63804[(2)] = null);
(statearr_63773_63804[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (6)))
{var inst_63705 = (state_63759[(13)]);var inst_63710 = f.call(null,inst_63705);var inst_63715 = cljs.core.seq.call(null,inst_63710);var inst_63716 = inst_63715;var inst_63717 = null;var inst_63718 = (0);var inst_63719 = (0);var state_63759__$1 = (function (){var statearr_63774 = state_63759;(statearr_63774[(8)] = inst_63716);
(statearr_63774[(9)] = inst_63718);
(statearr_63774[(10)] = inst_63719);
(statearr_63774[(11)] = inst_63717);
return statearr_63774;
})();var statearr_63775_63805 = state_63759__$1;(statearr_63775_63805[(2)] = null);
(statearr_63775_63805[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (17)))
{var inst_63730 = (state_63759[(7)]);var inst_63734 = cljs.core.chunk_first.call(null,inst_63730);var inst_63735 = cljs.core.chunk_rest.call(null,inst_63730);var inst_63736 = cljs.core.count.call(null,inst_63734);var inst_63716 = inst_63735;var inst_63717 = inst_63734;var inst_63718 = inst_63736;var inst_63719 = (0);var state_63759__$1 = (function (){var statearr_63776 = state_63759;(statearr_63776[(8)] = inst_63716);
(statearr_63776[(9)] = inst_63718);
(statearr_63776[(10)] = inst_63719);
(statearr_63776[(11)] = inst_63717);
return statearr_63776;
})();var statearr_63777_63806 = state_63759__$1;(statearr_63777_63806[(2)] = null);
(statearr_63777_63806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (3)))
{var inst_63757 = (state_63759[(2)]);var state_63759__$1 = state_63759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63759__$1,inst_63757);
} else
{if((state_val_63760 === (12)))
{var inst_63750 = (state_63759[(2)]);var state_63759__$1 = state_63759;var statearr_63778_63807 = state_63759__$1;(statearr_63778_63807[(2)] = inst_63750);
(statearr_63778_63807[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (2)))
{var state_63759__$1 = state_63759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63759__$1,(4),in$);
} else
{if((state_val_63760 === (19)))
{var inst_63745 = (state_63759[(2)]);var state_63759__$1 = state_63759;var statearr_63779_63808 = state_63759__$1;(statearr_63779_63808[(2)] = inst_63745);
(statearr_63779_63808[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (11)))
{var inst_63716 = (state_63759[(8)]);var inst_63730 = (state_63759[(7)]);var inst_63730__$1 = cljs.core.seq.call(null,inst_63716);var state_63759__$1 = (function (){var statearr_63780 = state_63759;(statearr_63780[(7)] = inst_63730__$1);
return statearr_63780;
})();if(inst_63730__$1)
{var statearr_63781_63809 = state_63759__$1;(statearr_63781_63809[(1)] = (14));
} else
{var statearr_63782_63810 = state_63759__$1;(statearr_63782_63810[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (9)))
{var inst_63752 = (state_63759[(2)]);var state_63759__$1 = (function (){var statearr_63783 = state_63759;(statearr_63783[(15)] = inst_63752);
return statearr_63783;
})();var statearr_63784_63811 = state_63759__$1;(statearr_63784_63811[(2)] = null);
(statearr_63784_63811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (5)))
{var inst_63708 = cljs.core.async.close_BANG_.call(null,out);var state_63759__$1 = state_63759;var statearr_63785_63812 = state_63759__$1;(statearr_63785_63812[(2)] = inst_63708);
(statearr_63785_63812[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (14)))
{var inst_63730 = (state_63759[(7)]);var inst_63732 = cljs.core.chunked_seq_QMARK_.call(null,inst_63730);var state_63759__$1 = state_63759;if(inst_63732)
{var statearr_63786_63813 = state_63759__$1;(statearr_63786_63813[(1)] = (17));
} else
{var statearr_63787_63814 = state_63759__$1;(statearr_63787_63814[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (16)))
{var inst_63748 = (state_63759[(2)]);var state_63759__$1 = state_63759;var statearr_63788_63815 = state_63759__$1;(statearr_63788_63815[(2)] = inst_63748);
(statearr_63788_63815[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63760 === (10)))
{var inst_63719 = (state_63759[(10)]);var inst_63717 = (state_63759[(11)]);var inst_63724 = cljs.core._nth.call(null,inst_63717,inst_63719);var state_63759__$1 = state_63759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63759__$1,(13),out,inst_63724);
} else
{if((state_val_63760 === (18)))
{var inst_63730 = (state_63759[(7)]);var inst_63739 = cljs.core.first.call(null,inst_63730);var state_63759__$1 = state_63759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63759__$1,(20),out,inst_63739);
} else
{if((state_val_63760 === (8)))
{var inst_63718 = (state_63759[(9)]);var inst_63719 = (state_63759[(10)]);var inst_63721 = (inst_63719 < inst_63718);var inst_63722 = inst_63721;var state_63759__$1 = state_63759;if(cljs.core.truth_(inst_63722))
{var statearr_63789_63816 = state_63759__$1;(statearr_63789_63816[(1)] = (10));
} else
{var statearr_63790_63817 = state_63759__$1;(statearr_63790_63817[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_63794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63794[(0)] = state_machine__5694__auto__);
(statearr_63794[(1)] = (1));
return statearr_63794;
});
var state_machine__5694__auto____1 = (function (state_63759){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63795){if((e63795 instanceof Object))
{var ex__5697__auto__ = e63795;var statearr_63796_63818 = state_63759;(statearr_63796_63818[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63795;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63819 = state_63759;
state_63759 = G__63819;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63759){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_63797 = f__5709__auto__.call(null);(statearr_63797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_63797;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___63900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___63900){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___63900){
return (function (state_63879){var state_val_63880 = (state_63879[(1)]);if((state_val_63880 === (7)))
{var inst_63875 = (state_63879[(2)]);var state_63879__$1 = state_63879;var statearr_63881_63901 = state_63879__$1;(statearr_63881_63901[(2)] = inst_63875);
(statearr_63881_63901[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (1)))
{var state_63879__$1 = state_63879;var statearr_63882_63902 = state_63879__$1;(statearr_63882_63902[(2)] = null);
(statearr_63882_63902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (4)))
{var inst_63862 = (state_63879[(7)]);var inst_63862__$1 = (state_63879[(2)]);var inst_63863 = (inst_63862__$1 == null);var state_63879__$1 = (function (){var statearr_63883 = state_63879;(statearr_63883[(7)] = inst_63862__$1);
return statearr_63883;
})();if(cljs.core.truth_(inst_63863))
{var statearr_63884_63903 = state_63879__$1;(statearr_63884_63903[(1)] = (5));
} else
{var statearr_63885_63904 = state_63879__$1;(statearr_63885_63904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (6)))
{var inst_63862 = (state_63879[(7)]);var state_63879__$1 = state_63879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63879__$1,(11),to,inst_63862);
} else
{if((state_val_63880 === (3)))
{var inst_63877 = (state_63879[(2)]);var state_63879__$1 = state_63879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63879__$1,inst_63877);
} else
{if((state_val_63880 === (2)))
{var state_63879__$1 = state_63879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63879__$1,(4),from);
} else
{if((state_val_63880 === (11)))
{var inst_63872 = (state_63879[(2)]);var state_63879__$1 = (function (){var statearr_63886 = state_63879;(statearr_63886[(8)] = inst_63872);
return statearr_63886;
})();var statearr_63887_63905 = state_63879__$1;(statearr_63887_63905[(2)] = null);
(statearr_63887_63905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (9)))
{var state_63879__$1 = state_63879;var statearr_63888_63906 = state_63879__$1;(statearr_63888_63906[(2)] = null);
(statearr_63888_63906[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (5)))
{var state_63879__$1 = state_63879;if(cljs.core.truth_(close_QMARK_))
{var statearr_63889_63907 = state_63879__$1;(statearr_63889_63907[(1)] = (8));
} else
{var statearr_63890_63908 = state_63879__$1;(statearr_63890_63908[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (10)))
{var inst_63869 = (state_63879[(2)]);var state_63879__$1 = state_63879;var statearr_63891_63909 = state_63879__$1;(statearr_63891_63909[(2)] = inst_63869);
(statearr_63891_63909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63880 === (8)))
{var inst_63866 = cljs.core.async.close_BANG_.call(null,to);var state_63879__$1 = state_63879;var statearr_63892_63910 = state_63879__$1;(statearr_63892_63910[(2)] = inst_63866);
(statearr_63892_63910[(1)] = (10));
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
});})(c__5708__auto___63900))
;return ((function (switch__5693__auto__,c__5708__auto___63900){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_63896 = [null,null,null,null,null,null,null,null,null];(statearr_63896[(0)] = state_machine__5694__auto__);
(statearr_63896[(1)] = (1));
return statearr_63896;
});
var state_machine__5694__auto____1 = (function (state_63879){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63897){if((e63897 instanceof Object))
{var ex__5697__auto__ = e63897;var statearr_63898_63911 = state_63879;(statearr_63898_63911[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63912 = state_63879;
state_63879 = G__63912;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63879){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___63900))
})();var state__5710__auto__ = (function (){var statearr_63899 = f__5709__auto__.call(null);(statearr_63899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___63900);
return statearr_63899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___63900))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___63999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___63999,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___63999,tc,fc){
return (function (state_63977){var state_val_63978 = (state_63977[(1)]);if((state_val_63978 === (7)))
{var inst_63973 = (state_63977[(2)]);var state_63977__$1 = state_63977;var statearr_63979_64000 = state_63977__$1;(statearr_63979_64000[(2)] = inst_63973);
(statearr_63979_64000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (1)))
{var state_63977__$1 = state_63977;var statearr_63980_64001 = state_63977__$1;(statearr_63980_64001[(2)] = null);
(statearr_63980_64001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (4)))
{var inst_63958 = (state_63977[(7)]);var inst_63958__$1 = (state_63977[(2)]);var inst_63959 = (inst_63958__$1 == null);var state_63977__$1 = (function (){var statearr_63981 = state_63977;(statearr_63981[(7)] = inst_63958__$1);
return statearr_63981;
})();if(cljs.core.truth_(inst_63959))
{var statearr_63982_64002 = state_63977__$1;(statearr_63982_64002[(1)] = (5));
} else
{var statearr_63983_64003 = state_63977__$1;(statearr_63983_64003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (6)))
{var inst_63958 = (state_63977[(7)]);var inst_63964 = p.call(null,inst_63958);var state_63977__$1 = state_63977;if(cljs.core.truth_(inst_63964))
{var statearr_63984_64004 = state_63977__$1;(statearr_63984_64004[(1)] = (9));
} else
{var statearr_63985_64005 = state_63977__$1;(statearr_63985_64005[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (3)))
{var inst_63975 = (state_63977[(2)]);var state_63977__$1 = state_63977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63977__$1,inst_63975);
} else
{if((state_val_63978 === (2)))
{var state_63977__$1 = state_63977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63977__$1,(4),ch);
} else
{if((state_val_63978 === (11)))
{var inst_63958 = (state_63977[(7)]);var inst_63968 = (state_63977[(2)]);var state_63977__$1 = state_63977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63977__$1,(8),inst_63968,inst_63958);
} else
{if((state_val_63978 === (9)))
{var state_63977__$1 = state_63977;var statearr_63986_64006 = state_63977__$1;(statearr_63986_64006[(2)] = tc);
(statearr_63986_64006[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (5)))
{var inst_63961 = cljs.core.async.close_BANG_.call(null,tc);var inst_63962 = cljs.core.async.close_BANG_.call(null,fc);var state_63977__$1 = (function (){var statearr_63987 = state_63977;(statearr_63987[(8)] = inst_63961);
return statearr_63987;
})();var statearr_63988_64007 = state_63977__$1;(statearr_63988_64007[(2)] = inst_63962);
(statearr_63988_64007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (10)))
{var state_63977__$1 = state_63977;var statearr_63989_64008 = state_63977__$1;(statearr_63989_64008[(2)] = fc);
(statearr_63989_64008[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63978 === (8)))
{var inst_63970 = (state_63977[(2)]);var state_63977__$1 = (function (){var statearr_63990 = state_63977;(statearr_63990[(9)] = inst_63970);
return statearr_63990;
})();var statearr_63991_64009 = state_63977__$1;(statearr_63991_64009[(2)] = null);
(statearr_63991_64009[(1)] = (2));
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
});})(c__5708__auto___63999,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___63999,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_63995 = [null,null,null,null,null,null,null,null,null,null];(statearr_63995[(0)] = state_machine__5694__auto__);
(statearr_63995[(1)] = (1));
return statearr_63995;
});
var state_machine__5694__auto____1 = (function (state_63977){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63996){if((e63996 instanceof Object))
{var ex__5697__auto__ = e63996;var statearr_63997_64010 = state_63977;(statearr_63997_64010[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64011 = state_63977;
state_63977 = G__64011;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63977){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___63999,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_63998 = f__5709__auto__.call(null);(statearr_63998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___63999);
return statearr_63998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___63999,tc,fc))
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
return (function (state_64058){var state_val_64059 = (state_64058[(1)]);if((state_val_64059 === (7)))
{var inst_64054 = (state_64058[(2)]);var state_64058__$1 = state_64058;var statearr_64060_64076 = state_64058__$1;(statearr_64060_64076[(2)] = inst_64054);
(statearr_64060_64076[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64059 === (6)))
{var inst_64044 = (state_64058[(7)]);var inst_64047 = (state_64058[(8)]);var inst_64051 = f.call(null,inst_64044,inst_64047);var inst_64044__$1 = inst_64051;var state_64058__$1 = (function (){var statearr_64061 = state_64058;(statearr_64061[(7)] = inst_64044__$1);
return statearr_64061;
})();var statearr_64062_64077 = state_64058__$1;(statearr_64062_64077[(2)] = null);
(statearr_64062_64077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64059 === (5)))
{var inst_64044 = (state_64058[(7)]);var state_64058__$1 = state_64058;var statearr_64063_64078 = state_64058__$1;(statearr_64063_64078[(2)] = inst_64044);
(statearr_64063_64078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64059 === (4)))
{var inst_64047 = (state_64058[(8)]);var inst_64047__$1 = (state_64058[(2)]);var inst_64048 = (inst_64047__$1 == null);var state_64058__$1 = (function (){var statearr_64064 = state_64058;(statearr_64064[(8)] = inst_64047__$1);
return statearr_64064;
})();if(cljs.core.truth_(inst_64048))
{var statearr_64065_64079 = state_64058__$1;(statearr_64065_64079[(1)] = (5));
} else
{var statearr_64066_64080 = state_64058__$1;(statearr_64066_64080[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64059 === (3)))
{var inst_64056 = (state_64058[(2)]);var state_64058__$1 = state_64058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64058__$1,inst_64056);
} else
{if((state_val_64059 === (2)))
{var state_64058__$1 = state_64058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64058__$1,(4),ch);
} else
{if((state_val_64059 === (1)))
{var inst_64044 = init;var state_64058__$1 = (function (){var statearr_64067 = state_64058;(statearr_64067[(7)] = inst_64044);
return statearr_64067;
})();var statearr_64068_64081 = state_64058__$1;(statearr_64068_64081[(2)] = null);
(statearr_64068_64081[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_64072 = [null,null,null,null,null,null,null,null,null];(statearr_64072[(0)] = state_machine__5694__auto__);
(statearr_64072[(1)] = (1));
return statearr_64072;
});
var state_machine__5694__auto____1 = (function (state_64058){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64058);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64073){if((e64073 instanceof Object))
{var ex__5697__auto__ = e64073;var statearr_64074_64082 = state_64058;(statearr_64074_64082[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64083 = state_64058;
state_64058 = G__64083;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64058){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_64075 = f__5709__auto__.call(null);(statearr_64075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_64075;
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
return (function (state_64145){var state_val_64146 = (state_64145[(1)]);if((state_val_64146 === (7)))
{var inst_64126 = (state_64145[(7)]);var inst_64131 = (state_64145[(2)]);var inst_64132 = cljs.core.next.call(null,inst_64126);var inst_64126__$1 = inst_64132;var state_64145__$1 = (function (){var statearr_64147 = state_64145;(statearr_64147[(8)] = inst_64131);
(statearr_64147[(7)] = inst_64126__$1);
return statearr_64147;
})();var statearr_64148_64166 = state_64145__$1;(statearr_64148_64166[(2)] = null);
(statearr_64148_64166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (1)))
{var inst_64125 = cljs.core.seq.call(null,coll);var inst_64126 = inst_64125;var state_64145__$1 = (function (){var statearr_64149 = state_64145;(statearr_64149[(7)] = inst_64126);
return statearr_64149;
})();var statearr_64150_64167 = state_64145__$1;(statearr_64150_64167[(2)] = null);
(statearr_64150_64167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (4)))
{var inst_64126 = (state_64145[(7)]);var inst_64129 = cljs.core.first.call(null,inst_64126);var state_64145__$1 = state_64145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64145__$1,(7),ch,inst_64129);
} else
{if((state_val_64146 === (6)))
{var inst_64141 = (state_64145[(2)]);var state_64145__$1 = state_64145;var statearr_64151_64168 = state_64145__$1;(statearr_64151_64168[(2)] = inst_64141);
(statearr_64151_64168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (3)))
{var inst_64143 = (state_64145[(2)]);var state_64145__$1 = state_64145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64145__$1,inst_64143);
} else
{if((state_val_64146 === (2)))
{var inst_64126 = (state_64145[(7)]);var state_64145__$1 = state_64145;if(cljs.core.truth_(inst_64126))
{var statearr_64152_64169 = state_64145__$1;(statearr_64152_64169[(1)] = (4));
} else
{var statearr_64153_64170 = state_64145__$1;(statearr_64153_64170[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (9)))
{var state_64145__$1 = state_64145;var statearr_64154_64171 = state_64145__$1;(statearr_64154_64171[(2)] = null);
(statearr_64154_64171[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (5)))
{var state_64145__$1 = state_64145;if(cljs.core.truth_(close_QMARK_))
{var statearr_64155_64172 = state_64145__$1;(statearr_64155_64172[(1)] = (8));
} else
{var statearr_64156_64173 = state_64145__$1;(statearr_64156_64173[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (10)))
{var inst_64139 = (state_64145[(2)]);var state_64145__$1 = state_64145;var statearr_64157_64174 = state_64145__$1;(statearr_64157_64174[(2)] = inst_64139);
(statearr_64157_64174[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64146 === (8)))
{var inst_64136 = cljs.core.async.close_BANG_.call(null,ch);var state_64145__$1 = state_64145;var statearr_64158_64175 = state_64145__$1;(statearr_64158_64175[(2)] = inst_64136);
(statearr_64158_64175[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_64162 = [null,null,null,null,null,null,null,null,null];(statearr_64162[(0)] = state_machine__5694__auto__);
(statearr_64162[(1)] = (1));
return statearr_64162;
});
var state_machine__5694__auto____1 = (function (state_64145){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64163){if((e64163 instanceof Object))
{var ex__5697__auto__ = e64163;var statearr_64164_64176 = state_64145;(statearr_64164_64176[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64145);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64177 = state_64145;
state_64145 = G__64177;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64145){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_64165 = f__5709__auto__.call(null);(statearr_64165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_64165;
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
cljs.core.async.Mux = (function (){var obj64179 = {};return obj64179;
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
cljs.core.async.Mult = (function (){var obj64181 = {};return obj64181;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t64405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64405 = (function (cs,ch,mult,meta64406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta64406 = meta64406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64405.cljs$lang$type = true;
cljs.core.async.t64405.cljs$lang$ctorStr = "cljs.core.async/t64405";
cljs.core.async.t64405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64405");
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t64405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t64405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_64407){var self__ = this;
var _64407__$1 = this;return self__.meta64406;
});})(cs))
;
cljs.core.async.t64405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_64407,meta64406__$1){var self__ = this;
var _64407__$1 = this;return (new cljs.core.async.t64405(self__.cs,self__.ch,self__.mult,meta64406__$1));
});})(cs))
;
cljs.core.async.__GT_t64405 = ((function (cs){
return (function __GT_t64405(cs__$1,ch__$1,mult__$1,meta64406){return (new cljs.core.async.t64405(cs__$1,ch__$1,mult__$1,meta64406));
});})(cs))
;
}
return (new cljs.core.async.t64405(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___64628 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___64628,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___64628,cs,m,dchan,dctr,done){
return (function (state_64542){var state_val_64543 = (state_64542[(1)]);if((state_val_64543 === (7)))
{var inst_64538 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64544_64629 = state_64542__$1;(statearr_64544_64629[(2)] = inst_64538);
(statearr_64544_64629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (20)))
{var inst_64439 = (state_64542[(7)]);var inst_64449 = cljs.core.first.call(null,inst_64439);var inst_64450 = cljs.core.nth.call(null,inst_64449,(0),null);var inst_64451 = cljs.core.nth.call(null,inst_64449,(1),null);var state_64542__$1 = (function (){var statearr_64545 = state_64542;(statearr_64545[(8)] = inst_64450);
return statearr_64545;
})();if(cljs.core.truth_(inst_64451))
{var statearr_64546_64630 = state_64542__$1;(statearr_64546_64630[(1)] = (22));
} else
{var statearr_64547_64631 = state_64542__$1;(statearr_64547_64631[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (27)))
{var inst_64479 = (state_64542[(9)]);var inst_64481 = (state_64542[(10)]);var inst_64486 = cljs.core._nth.call(null,inst_64479,inst_64481);var state_64542__$1 = (function (){var statearr_64548 = state_64542;(statearr_64548[(11)] = inst_64486);
return statearr_64548;
})();var statearr_64549_64632 = state_64542__$1;(statearr_64549_64632[(2)] = null);
(statearr_64549_64632[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (1)))
{var state_64542__$1 = state_64542;var statearr_64550_64633 = state_64542__$1;(statearr_64550_64633[(2)] = null);
(statearr_64550_64633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (24)))
{var inst_64439 = (state_64542[(7)]);var inst_64456 = (state_64542[(2)]);var inst_64457 = cljs.core.next.call(null,inst_64439);var inst_64419 = inst_64457;var inst_64420 = null;var inst_64421 = (0);var inst_64422 = (0);var state_64542__$1 = (function (){var statearr_64551 = state_64542;(statearr_64551[(12)] = inst_64422);
(statearr_64551[(13)] = inst_64456);
(statearr_64551[(14)] = inst_64421);
(statearr_64551[(15)] = inst_64420);
(statearr_64551[(16)] = inst_64419);
return statearr_64551;
})();var statearr_64552_64634 = state_64542__$1;(statearr_64552_64634[(2)] = null);
(statearr_64552_64634[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (39)))
{var inst_64499 = (state_64542[(17)]);var inst_64517 = (state_64542[(2)]);var inst_64518 = cljs.core.next.call(null,inst_64499);var inst_64478 = inst_64518;var inst_64479 = null;var inst_64480 = (0);var inst_64481 = (0);var state_64542__$1 = (function (){var statearr_64556 = state_64542;(statearr_64556[(9)] = inst_64479);
(statearr_64556[(10)] = inst_64481);
(statearr_64556[(18)] = inst_64480);
(statearr_64556[(19)] = inst_64478);
(statearr_64556[(20)] = inst_64517);
return statearr_64556;
})();var statearr_64557_64635 = state_64542__$1;(statearr_64557_64635[(2)] = null);
(statearr_64557_64635[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (4)))
{var inst_64410 = (state_64542[(21)]);var inst_64410__$1 = (state_64542[(2)]);var inst_64411 = (inst_64410__$1 == null);var state_64542__$1 = (function (){var statearr_64558 = state_64542;(statearr_64558[(21)] = inst_64410__$1);
return statearr_64558;
})();if(cljs.core.truth_(inst_64411))
{var statearr_64559_64636 = state_64542__$1;(statearr_64559_64636[(1)] = (5));
} else
{var statearr_64560_64637 = state_64542__$1;(statearr_64560_64637[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (15)))
{var inst_64422 = (state_64542[(12)]);var inst_64421 = (state_64542[(14)]);var inst_64420 = (state_64542[(15)]);var inst_64419 = (state_64542[(16)]);var inst_64435 = (state_64542[(2)]);var inst_64436 = (inst_64422 + (1));var tmp64553 = inst_64421;var tmp64554 = inst_64420;var tmp64555 = inst_64419;var inst_64419__$1 = tmp64555;var inst_64420__$1 = tmp64554;var inst_64421__$1 = tmp64553;var inst_64422__$1 = inst_64436;var state_64542__$1 = (function (){var statearr_64561 = state_64542;(statearr_64561[(12)] = inst_64422__$1);
(statearr_64561[(14)] = inst_64421__$1);
(statearr_64561[(15)] = inst_64420__$1);
(statearr_64561[(22)] = inst_64435);
(statearr_64561[(16)] = inst_64419__$1);
return statearr_64561;
})();var statearr_64562_64638 = state_64542__$1;(statearr_64562_64638[(2)] = null);
(statearr_64562_64638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (21)))
{var inst_64460 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64563_64639 = state_64542__$1;(statearr_64563_64639[(2)] = inst_64460);
(statearr_64563_64639[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (31)))
{var inst_64486 = (state_64542[(11)]);var inst_64487 = (state_64542[(2)]);var inst_64488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_64489 = cljs.core.async.untap_STAR_.call(null,m,inst_64486);var state_64542__$1 = (function (){var statearr_64564 = state_64542;(statearr_64564[(23)] = inst_64487);
(statearr_64564[(24)] = inst_64488);
return statearr_64564;
})();var statearr_64565_64640 = state_64542__$1;(statearr_64565_64640[(2)] = inst_64489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64542__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (32)))
{var inst_64486 = (state_64542[(11)]);var inst_64410 = (state_64542[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64542,(31),Object,null,(30));var inst_64493 = cljs.core.async.put_BANG_.call(null,inst_64486,inst_64410,done);var state_64542__$1 = state_64542;var statearr_64566_64641 = state_64542__$1;(statearr_64566_64641[(2)] = inst_64493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64542__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (40)))
{var inst_64508 = (state_64542[(25)]);var inst_64509 = (state_64542[(2)]);var inst_64510 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_64511 = cljs.core.async.untap_STAR_.call(null,m,inst_64508);var state_64542__$1 = (function (){var statearr_64567 = state_64542;(statearr_64567[(26)] = inst_64509);
(statearr_64567[(27)] = inst_64510);
return statearr_64567;
})();var statearr_64568_64642 = state_64542__$1;(statearr_64568_64642[(2)] = inst_64511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64542__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (33)))
{var inst_64499 = (state_64542[(17)]);var inst_64501 = cljs.core.chunked_seq_QMARK_.call(null,inst_64499);var state_64542__$1 = state_64542;if(inst_64501)
{var statearr_64569_64643 = state_64542__$1;(statearr_64569_64643[(1)] = (36));
} else
{var statearr_64570_64644 = state_64542__$1;(statearr_64570_64644[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (13)))
{var inst_64429 = (state_64542[(28)]);var inst_64432 = cljs.core.async.close_BANG_.call(null,inst_64429);var state_64542__$1 = state_64542;var statearr_64571_64645 = state_64542__$1;(statearr_64571_64645[(2)] = inst_64432);
(statearr_64571_64645[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (22)))
{var inst_64450 = (state_64542[(8)]);var inst_64453 = cljs.core.async.close_BANG_.call(null,inst_64450);var state_64542__$1 = state_64542;var statearr_64572_64646 = state_64542__$1;(statearr_64572_64646[(2)] = inst_64453);
(statearr_64572_64646[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (36)))
{var inst_64499 = (state_64542[(17)]);var inst_64503 = cljs.core.chunk_first.call(null,inst_64499);var inst_64504 = cljs.core.chunk_rest.call(null,inst_64499);var inst_64505 = cljs.core.count.call(null,inst_64503);var inst_64478 = inst_64504;var inst_64479 = inst_64503;var inst_64480 = inst_64505;var inst_64481 = (0);var state_64542__$1 = (function (){var statearr_64573 = state_64542;(statearr_64573[(9)] = inst_64479);
(statearr_64573[(10)] = inst_64481);
(statearr_64573[(18)] = inst_64480);
(statearr_64573[(19)] = inst_64478);
return statearr_64573;
})();var statearr_64574_64647 = state_64542__$1;(statearr_64574_64647[(2)] = null);
(statearr_64574_64647[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (41)))
{var inst_64508 = (state_64542[(25)]);var inst_64410 = (state_64542[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64542,(40),Object,null,(39));var inst_64515 = cljs.core.async.put_BANG_.call(null,inst_64508,inst_64410,done);var state_64542__$1 = state_64542;var statearr_64575_64648 = state_64542__$1;(statearr_64575_64648[(2)] = inst_64515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64542__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (43)))
{var state_64542__$1 = state_64542;var statearr_64576_64649 = state_64542__$1;(statearr_64576_64649[(2)] = null);
(statearr_64576_64649[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (29)))
{var inst_64526 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64577_64650 = state_64542__$1;(statearr_64577_64650[(2)] = inst_64526);
(statearr_64577_64650[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (44)))
{var inst_64535 = (state_64542[(2)]);var state_64542__$1 = (function (){var statearr_64578 = state_64542;(statearr_64578[(29)] = inst_64535);
return statearr_64578;
})();var statearr_64579_64651 = state_64542__$1;(statearr_64579_64651[(2)] = null);
(statearr_64579_64651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (6)))
{var inst_64470 = (state_64542[(30)]);var inst_64469 = cljs.core.deref.call(null,cs);var inst_64470__$1 = cljs.core.keys.call(null,inst_64469);var inst_64471 = cljs.core.count.call(null,inst_64470__$1);var inst_64472 = cljs.core.reset_BANG_.call(null,dctr,inst_64471);var inst_64477 = cljs.core.seq.call(null,inst_64470__$1);var inst_64478 = inst_64477;var inst_64479 = null;var inst_64480 = (0);var inst_64481 = (0);var state_64542__$1 = (function (){var statearr_64580 = state_64542;(statearr_64580[(30)] = inst_64470__$1);
(statearr_64580[(9)] = inst_64479);
(statearr_64580[(10)] = inst_64481);
(statearr_64580[(18)] = inst_64480);
(statearr_64580[(19)] = inst_64478);
(statearr_64580[(31)] = inst_64472);
return statearr_64580;
})();var statearr_64581_64652 = state_64542__$1;(statearr_64581_64652[(2)] = null);
(statearr_64581_64652[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (28)))
{var inst_64499 = (state_64542[(17)]);var inst_64478 = (state_64542[(19)]);var inst_64499__$1 = cljs.core.seq.call(null,inst_64478);var state_64542__$1 = (function (){var statearr_64582 = state_64542;(statearr_64582[(17)] = inst_64499__$1);
return statearr_64582;
})();if(inst_64499__$1)
{var statearr_64583_64653 = state_64542__$1;(statearr_64583_64653[(1)] = (33));
} else
{var statearr_64584_64654 = state_64542__$1;(statearr_64584_64654[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (25)))
{var inst_64481 = (state_64542[(10)]);var inst_64480 = (state_64542[(18)]);var inst_64483 = (inst_64481 < inst_64480);var inst_64484 = inst_64483;var state_64542__$1 = state_64542;if(cljs.core.truth_(inst_64484))
{var statearr_64585_64655 = state_64542__$1;(statearr_64585_64655[(1)] = (27));
} else
{var statearr_64586_64656 = state_64542__$1;(statearr_64586_64656[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (34)))
{var state_64542__$1 = state_64542;var statearr_64587_64657 = state_64542__$1;(statearr_64587_64657[(2)] = null);
(statearr_64587_64657[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (17)))
{var state_64542__$1 = state_64542;var statearr_64588_64658 = state_64542__$1;(statearr_64588_64658[(2)] = null);
(statearr_64588_64658[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (3)))
{var inst_64540 = (state_64542[(2)]);var state_64542__$1 = state_64542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64542__$1,inst_64540);
} else
{if((state_val_64543 === (12)))
{var inst_64465 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64589_64659 = state_64542__$1;(statearr_64589_64659[(2)] = inst_64465);
(statearr_64589_64659[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (2)))
{var state_64542__$1 = state_64542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64542__$1,(4),ch);
} else
{if((state_val_64543 === (23)))
{var state_64542__$1 = state_64542;var statearr_64590_64660 = state_64542__$1;(statearr_64590_64660[(2)] = null);
(statearr_64590_64660[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (35)))
{var inst_64524 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64591_64661 = state_64542__$1;(statearr_64591_64661[(2)] = inst_64524);
(statearr_64591_64661[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (19)))
{var inst_64439 = (state_64542[(7)]);var inst_64443 = cljs.core.chunk_first.call(null,inst_64439);var inst_64444 = cljs.core.chunk_rest.call(null,inst_64439);var inst_64445 = cljs.core.count.call(null,inst_64443);var inst_64419 = inst_64444;var inst_64420 = inst_64443;var inst_64421 = inst_64445;var inst_64422 = (0);var state_64542__$1 = (function (){var statearr_64592 = state_64542;(statearr_64592[(12)] = inst_64422);
(statearr_64592[(14)] = inst_64421);
(statearr_64592[(15)] = inst_64420);
(statearr_64592[(16)] = inst_64419);
return statearr_64592;
})();var statearr_64593_64662 = state_64542__$1;(statearr_64593_64662[(2)] = null);
(statearr_64593_64662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (11)))
{var inst_64439 = (state_64542[(7)]);var inst_64419 = (state_64542[(16)]);var inst_64439__$1 = cljs.core.seq.call(null,inst_64419);var state_64542__$1 = (function (){var statearr_64594 = state_64542;(statearr_64594[(7)] = inst_64439__$1);
return statearr_64594;
})();if(inst_64439__$1)
{var statearr_64595_64663 = state_64542__$1;(statearr_64595_64663[(1)] = (16));
} else
{var statearr_64596_64664 = state_64542__$1;(statearr_64596_64664[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (9)))
{var inst_64467 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64597_64665 = state_64542__$1;(statearr_64597_64665[(2)] = inst_64467);
(statearr_64597_64665[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (5)))
{var inst_64417 = cljs.core.deref.call(null,cs);var inst_64418 = cljs.core.seq.call(null,inst_64417);var inst_64419 = inst_64418;var inst_64420 = null;var inst_64421 = (0);var inst_64422 = (0);var state_64542__$1 = (function (){var statearr_64598 = state_64542;(statearr_64598[(12)] = inst_64422);
(statearr_64598[(14)] = inst_64421);
(statearr_64598[(15)] = inst_64420);
(statearr_64598[(16)] = inst_64419);
return statearr_64598;
})();var statearr_64599_64666 = state_64542__$1;(statearr_64599_64666[(2)] = null);
(statearr_64599_64666[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (14)))
{var state_64542__$1 = state_64542;var statearr_64600_64667 = state_64542__$1;(statearr_64600_64667[(2)] = null);
(statearr_64600_64667[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (45)))
{var inst_64532 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64601_64668 = state_64542__$1;(statearr_64601_64668[(2)] = inst_64532);
(statearr_64601_64668[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (26)))
{var inst_64470 = (state_64542[(30)]);var inst_64528 = (state_64542[(2)]);var inst_64529 = cljs.core.seq.call(null,inst_64470);var state_64542__$1 = (function (){var statearr_64602 = state_64542;(statearr_64602[(32)] = inst_64528);
return statearr_64602;
})();if(inst_64529)
{var statearr_64603_64669 = state_64542__$1;(statearr_64603_64669[(1)] = (42));
} else
{var statearr_64604_64670 = state_64542__$1;(statearr_64604_64670[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (16)))
{var inst_64439 = (state_64542[(7)]);var inst_64441 = cljs.core.chunked_seq_QMARK_.call(null,inst_64439);var state_64542__$1 = state_64542;if(inst_64441)
{var statearr_64608_64671 = state_64542__$1;(statearr_64608_64671[(1)] = (19));
} else
{var statearr_64609_64672 = state_64542__$1;(statearr_64609_64672[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (38)))
{var inst_64521 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64610_64673 = state_64542__$1;(statearr_64610_64673[(2)] = inst_64521);
(statearr_64610_64673[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (30)))
{var inst_64479 = (state_64542[(9)]);var inst_64481 = (state_64542[(10)]);var inst_64480 = (state_64542[(18)]);var inst_64478 = (state_64542[(19)]);var inst_64495 = (state_64542[(2)]);var inst_64496 = (inst_64481 + (1));var tmp64605 = inst_64479;var tmp64606 = inst_64480;var tmp64607 = inst_64478;var inst_64478__$1 = tmp64607;var inst_64479__$1 = tmp64605;var inst_64480__$1 = tmp64606;var inst_64481__$1 = inst_64496;var state_64542__$1 = (function (){var statearr_64611 = state_64542;(statearr_64611[(9)] = inst_64479__$1);
(statearr_64611[(10)] = inst_64481__$1);
(statearr_64611[(18)] = inst_64480__$1);
(statearr_64611[(19)] = inst_64478__$1);
(statearr_64611[(33)] = inst_64495);
return statearr_64611;
})();var statearr_64612_64674 = state_64542__$1;(statearr_64612_64674[(2)] = null);
(statearr_64612_64674[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (10)))
{var inst_64422 = (state_64542[(12)]);var inst_64420 = (state_64542[(15)]);var inst_64428 = cljs.core._nth.call(null,inst_64420,inst_64422);var inst_64429 = cljs.core.nth.call(null,inst_64428,(0),null);var inst_64430 = cljs.core.nth.call(null,inst_64428,(1),null);var state_64542__$1 = (function (){var statearr_64613 = state_64542;(statearr_64613[(28)] = inst_64429);
return statearr_64613;
})();if(cljs.core.truth_(inst_64430))
{var statearr_64614_64675 = state_64542__$1;(statearr_64614_64675[(1)] = (13));
} else
{var statearr_64615_64676 = state_64542__$1;(statearr_64615_64676[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (18)))
{var inst_64463 = (state_64542[(2)]);var state_64542__$1 = state_64542;var statearr_64616_64677 = state_64542__$1;(statearr_64616_64677[(2)] = inst_64463);
(statearr_64616_64677[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (42)))
{var state_64542__$1 = state_64542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64542__$1,(45),dchan);
} else
{if((state_val_64543 === (37)))
{var inst_64499 = (state_64542[(17)]);var inst_64508 = cljs.core.first.call(null,inst_64499);var state_64542__$1 = (function (){var statearr_64617 = state_64542;(statearr_64617[(25)] = inst_64508);
return statearr_64617;
})();var statearr_64618_64678 = state_64542__$1;(statearr_64618_64678[(2)] = null);
(statearr_64618_64678[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64543 === (8)))
{var inst_64422 = (state_64542[(12)]);var inst_64421 = (state_64542[(14)]);var inst_64424 = (inst_64422 < inst_64421);var inst_64425 = inst_64424;var state_64542__$1 = state_64542;if(cljs.core.truth_(inst_64425))
{var statearr_64619_64679 = state_64542__$1;(statearr_64619_64679[(1)] = (10));
} else
{var statearr_64620_64680 = state_64542__$1;(statearr_64620_64680[(1)] = (11));
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
});})(c__5708__auto___64628,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___64628,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_64624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64624[(0)] = state_machine__5694__auto__);
(statearr_64624[(1)] = (1));
return statearr_64624;
});
var state_machine__5694__auto____1 = (function (state_64542){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64542);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64625){if((e64625 instanceof Object))
{var ex__5697__auto__ = e64625;var statearr_64626_64681 = state_64542;(statearr_64626_64681[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64682 = state_64542;
state_64542 = G__64682;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64542){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___64628,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_64627 = f__5709__auto__.call(null);(statearr_64627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___64628);
return statearr_64627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___64628,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj64684 = {};return obj64684;
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
;var m = (function (){if(typeof cljs.core.async.t64794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64794 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64795){
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
this.meta64795 = meta64795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64794.cljs$lang$type = true;
cljs.core.async.t64794.cljs$lang$ctorStr = "cljs.core.async/t64794";
cljs.core.async.t64794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t64794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64796){var self__ = this;
var _64796__$1 = this;return self__.meta64795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64796,meta64795__$1){var self__ = this;
var _64796__$1 = this;return (new cljs.core.async.t64794(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t64794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t64794(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64795){return (new cljs.core.async.t64794(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t64794(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___64903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_64861){var state_val_64862 = (state_64861[(1)]);if((state_val_64862 === (7)))
{var inst_64810 = (state_64861[(7)]);var inst_64815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64810);var state_64861__$1 = state_64861;var statearr_64863_64904 = state_64861__$1;(statearr_64863_64904[(2)] = inst_64815);
(statearr_64863_64904[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (20)))
{var inst_64825 = (state_64861[(8)]);var state_64861__$1 = state_64861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64861__$1,(23),out,inst_64825);
} else
{if((state_val_64862 === (1)))
{var inst_64800 = (state_64861[(9)]);var inst_64800__$1 = calc_state.call(null);var inst_64801 = cljs.core.seq_QMARK_.call(null,inst_64800__$1);var state_64861__$1 = (function (){var statearr_64864 = state_64861;(statearr_64864[(9)] = inst_64800__$1);
return statearr_64864;
})();if(inst_64801)
{var statearr_64865_64905 = state_64861__$1;(statearr_64865_64905[(1)] = (2));
} else
{var statearr_64866_64906 = state_64861__$1;(statearr_64866_64906[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (4)))
{var inst_64800 = (state_64861[(9)]);var inst_64806 = (state_64861[(2)]);var inst_64807 = cljs.core.get.call(null,inst_64806,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_64808 = cljs.core.get.call(null,inst_64806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_64809 = cljs.core.get.call(null,inst_64806,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_64810 = inst_64800;var state_64861__$1 = (function (){var statearr_64867 = state_64861;(statearr_64867[(7)] = inst_64810);
(statearr_64867[(10)] = inst_64808);
(statearr_64867[(11)] = inst_64807);
(statearr_64867[(12)] = inst_64809);
return statearr_64867;
})();var statearr_64868_64907 = state_64861__$1;(statearr_64868_64907[(2)] = null);
(statearr_64868_64907[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (15)))
{var state_64861__$1 = state_64861;var statearr_64869_64908 = state_64861__$1;(statearr_64869_64908[(2)] = null);
(statearr_64869_64908[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (21)))
{var state_64861__$1 = state_64861;var statearr_64870_64909 = state_64861__$1;(statearr_64870_64909[(2)] = null);
(statearr_64870_64909[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (13)))
{var inst_64857 = (state_64861[(2)]);var state_64861__$1 = state_64861;var statearr_64871_64910 = state_64861__$1;(statearr_64871_64910[(2)] = inst_64857);
(statearr_64871_64910[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (22)))
{var inst_64818 = (state_64861[(13)]);var inst_64854 = (state_64861[(2)]);var inst_64810 = inst_64818;var state_64861__$1 = (function (){var statearr_64872 = state_64861;(statearr_64872[(7)] = inst_64810);
(statearr_64872[(14)] = inst_64854);
return statearr_64872;
})();var statearr_64873_64911 = state_64861__$1;(statearr_64873_64911[(2)] = null);
(statearr_64873_64911[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (6)))
{var inst_64859 = (state_64861[(2)]);var state_64861__$1 = state_64861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64861__$1,inst_64859);
} else
{if((state_val_64862 === (17)))
{var inst_64840 = (state_64861[(15)]);var state_64861__$1 = state_64861;var statearr_64874_64912 = state_64861__$1;(statearr_64874_64912[(2)] = inst_64840);
(statearr_64874_64912[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (3)))
{var inst_64800 = (state_64861[(9)]);var state_64861__$1 = state_64861;var statearr_64875_64913 = state_64861__$1;(statearr_64875_64913[(2)] = inst_64800);
(statearr_64875_64913[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (12)))
{var inst_64821 = (state_64861[(16)]);var inst_64826 = (state_64861[(17)]);var inst_64840 = (state_64861[(15)]);var inst_64840__$1 = inst_64821.call(null,inst_64826);var state_64861__$1 = (function (){var statearr_64876 = state_64861;(statearr_64876[(15)] = inst_64840__$1);
return statearr_64876;
})();if(cljs.core.truth_(inst_64840__$1))
{var statearr_64877_64914 = state_64861__$1;(statearr_64877_64914[(1)] = (17));
} else
{var statearr_64878_64915 = state_64861__$1;(statearr_64878_64915[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (2)))
{var inst_64800 = (state_64861[(9)]);var inst_64803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64800);var state_64861__$1 = state_64861;var statearr_64879_64916 = state_64861__$1;(statearr_64879_64916[(2)] = inst_64803);
(statearr_64879_64916[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (23)))
{var inst_64851 = (state_64861[(2)]);var state_64861__$1 = state_64861;var statearr_64880_64917 = state_64861__$1;(statearr_64880_64917[(2)] = inst_64851);
(statearr_64880_64917[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (19)))
{var inst_64848 = (state_64861[(2)]);var state_64861__$1 = state_64861;if(cljs.core.truth_(inst_64848))
{var statearr_64881_64918 = state_64861__$1;(statearr_64881_64918[(1)] = (20));
} else
{var statearr_64882_64919 = state_64861__$1;(statearr_64882_64919[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (11)))
{var inst_64825 = (state_64861[(8)]);var inst_64831 = (inst_64825 == null);var state_64861__$1 = state_64861;if(cljs.core.truth_(inst_64831))
{var statearr_64883_64920 = state_64861__$1;(statearr_64883_64920[(1)] = (14));
} else
{var statearr_64884_64921 = state_64861__$1;(statearr_64884_64921[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (9)))
{var inst_64818 = (state_64861[(13)]);var inst_64818__$1 = (state_64861[(2)]);var inst_64819 = cljs.core.get.call(null,inst_64818__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_64820 = cljs.core.get.call(null,inst_64818__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_64821 = cljs.core.get.call(null,inst_64818__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_64861__$1 = (function (){var statearr_64885 = state_64861;(statearr_64885[(13)] = inst_64818__$1);
(statearr_64885[(18)] = inst_64820);
(statearr_64885[(16)] = inst_64821);
return statearr_64885;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_64861__$1,(10),inst_64819);
} else
{if((state_val_64862 === (5)))
{var inst_64810 = (state_64861[(7)]);var inst_64813 = cljs.core.seq_QMARK_.call(null,inst_64810);var state_64861__$1 = state_64861;if(inst_64813)
{var statearr_64886_64922 = state_64861__$1;(statearr_64886_64922[(1)] = (7));
} else
{var statearr_64887_64923 = state_64861__$1;(statearr_64887_64923[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (14)))
{var inst_64826 = (state_64861[(17)]);var inst_64833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_64826);var state_64861__$1 = state_64861;var statearr_64888_64924 = state_64861__$1;(statearr_64888_64924[(2)] = inst_64833);
(statearr_64888_64924[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (16)))
{var inst_64836 = (state_64861[(2)]);var inst_64837 = calc_state.call(null);var inst_64810 = inst_64837;var state_64861__$1 = (function (){var statearr_64889 = state_64861;(statearr_64889[(7)] = inst_64810);
(statearr_64889[(19)] = inst_64836);
return statearr_64889;
})();var statearr_64890_64925 = state_64861__$1;(statearr_64890_64925[(2)] = null);
(statearr_64890_64925[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (10)))
{var inst_64825 = (state_64861[(8)]);var inst_64826 = (state_64861[(17)]);var inst_64824 = (state_64861[(2)]);var inst_64825__$1 = cljs.core.nth.call(null,inst_64824,(0),null);var inst_64826__$1 = cljs.core.nth.call(null,inst_64824,(1),null);var inst_64827 = (inst_64825__$1 == null);var inst_64828 = cljs.core._EQ_.call(null,inst_64826__$1,change);var inst_64829 = (inst_64827) || (inst_64828);var state_64861__$1 = (function (){var statearr_64891 = state_64861;(statearr_64891[(8)] = inst_64825__$1);
(statearr_64891[(17)] = inst_64826__$1);
return statearr_64891;
})();if(cljs.core.truth_(inst_64829))
{var statearr_64892_64926 = state_64861__$1;(statearr_64892_64926[(1)] = (11));
} else
{var statearr_64893_64927 = state_64861__$1;(statearr_64893_64927[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (18)))
{var inst_64820 = (state_64861[(18)]);var inst_64821 = (state_64861[(16)]);var inst_64826 = (state_64861[(17)]);var inst_64843 = cljs.core.empty_QMARK_.call(null,inst_64821);var inst_64844 = inst_64820.call(null,inst_64826);var inst_64845 = cljs.core.not.call(null,inst_64844);var inst_64846 = (inst_64843) && (inst_64845);var state_64861__$1 = state_64861;var statearr_64894_64928 = state_64861__$1;(statearr_64894_64928[(2)] = inst_64846);
(statearr_64894_64928[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64862 === (8)))
{var inst_64810 = (state_64861[(7)]);var state_64861__$1 = state_64861;var statearr_64895_64929 = state_64861__$1;(statearr_64895_64929[(2)] = inst_64810);
(statearr_64895_64929[(1)] = (9));
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
});})(c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_64899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64899[(0)] = state_machine__5694__auto__);
(statearr_64899[(1)] = (1));
return statearr_64899;
});
var state_machine__5694__auto____1 = (function (state_64861){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64900){if((e64900 instanceof Object))
{var ex__5697__auto__ = e64900;var statearr_64901_64930 = state_64861;(statearr_64901_64930[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64931 = state_64861;
state_64861 = G__64931;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64861){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_64902 = f__5709__auto__.call(null);(statearr_64902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___64903);
return statearr_64902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___64903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj64933 = {};return obj64933;
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
return (function (p1__64934_SHARP_){if(cljs.core.truth_(p1__64934_SHARP_.call(null,topic)))
{return p1__64934_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__64934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t65059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65059 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta65060){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta65060 = meta65060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65059.cljs$lang$type = true;
cljs.core.async.t65059.cljs$lang$ctorStr = "cljs.core.async/t65059";
cljs.core.async.t65059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t65059");
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t65059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_65061){var self__ = this;
var _65061__$1 = this;return self__.meta65060;
});})(mults,ensure_mult))
;
cljs.core.async.t65059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_65061,meta65060__$1){var self__ = this;
var _65061__$1 = this;return (new cljs.core.async.t65059(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta65060__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t65059 = ((function (mults,ensure_mult){
return (function __GT_t65059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65060){return (new cljs.core.async.t65059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65060));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t65059(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___65183 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65183,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65183,mults,ensure_mult,p){
return (function (state_65135){var state_val_65136 = (state_65135[(1)]);if((state_val_65136 === (7)))
{var inst_65131 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65137_65184 = state_65135__$1;(statearr_65137_65184[(2)] = inst_65131);
(statearr_65137_65184[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (20)))
{var state_65135__$1 = state_65135;var statearr_65138_65185 = state_65135__$1;(statearr_65138_65185[(2)] = null);
(statearr_65138_65185[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (1)))
{var state_65135__$1 = state_65135;var statearr_65139_65186 = state_65135__$1;(statearr_65139_65186[(2)] = null);
(statearr_65139_65186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (24)))
{var inst_65064 = (state_65135[(7)]);var inst_65114 = (state_65135[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65135,(23),Object,null,(22));var inst_65121 = cljs.core.async.muxch_STAR_.call(null,inst_65114);var state_65135__$1 = state_65135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65135__$1,(25),inst_65121,inst_65064);
} else
{if((state_val_65136 === (4)))
{var inst_65064 = (state_65135[(7)]);var inst_65064__$1 = (state_65135[(2)]);var inst_65065 = (inst_65064__$1 == null);var state_65135__$1 = (function (){var statearr_65140 = state_65135;(statearr_65140[(7)] = inst_65064__$1);
return statearr_65140;
})();if(cljs.core.truth_(inst_65065))
{var statearr_65141_65187 = state_65135__$1;(statearr_65141_65187[(1)] = (5));
} else
{var statearr_65142_65188 = state_65135__$1;(statearr_65142_65188[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (15)))
{var inst_65106 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65143_65189 = state_65135__$1;(statearr_65143_65189[(2)] = inst_65106);
(statearr_65143_65189[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (21)))
{var inst_65128 = (state_65135[(2)]);var state_65135__$1 = (function (){var statearr_65144 = state_65135;(statearr_65144[(9)] = inst_65128);
return statearr_65144;
})();var statearr_65145_65190 = state_65135__$1;(statearr_65145_65190[(2)] = null);
(statearr_65145_65190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (13)))
{var inst_65088 = (state_65135[(10)]);var inst_65090 = cljs.core.chunked_seq_QMARK_.call(null,inst_65088);var state_65135__$1 = state_65135;if(inst_65090)
{var statearr_65146_65191 = state_65135__$1;(statearr_65146_65191[(1)] = (16));
} else
{var statearr_65147_65192 = state_65135__$1;(statearr_65147_65192[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (22)))
{var inst_65125 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65148_65193 = state_65135__$1;(statearr_65148_65193[(2)] = inst_65125);
(statearr_65148_65193[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (6)))
{var inst_65064 = (state_65135[(7)]);var inst_65112 = (state_65135[(11)]);var inst_65114 = (state_65135[(8)]);var inst_65112__$1 = topic_fn.call(null,inst_65064);var inst_65113 = cljs.core.deref.call(null,mults);var inst_65114__$1 = cljs.core.get.call(null,inst_65113,inst_65112__$1);var state_65135__$1 = (function (){var statearr_65149 = state_65135;(statearr_65149[(11)] = inst_65112__$1);
(statearr_65149[(8)] = inst_65114__$1);
return statearr_65149;
})();if(cljs.core.truth_(inst_65114__$1))
{var statearr_65150_65194 = state_65135__$1;(statearr_65150_65194[(1)] = (19));
} else
{var statearr_65151_65195 = state_65135__$1;(statearr_65151_65195[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (25)))
{var inst_65123 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65152_65196 = state_65135__$1;(statearr_65152_65196[(2)] = inst_65123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65135__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (17)))
{var inst_65088 = (state_65135[(10)]);var inst_65097 = cljs.core.first.call(null,inst_65088);var inst_65098 = cljs.core.async.muxch_STAR_.call(null,inst_65097);var inst_65099 = cljs.core.async.close_BANG_.call(null,inst_65098);var inst_65100 = cljs.core.next.call(null,inst_65088);var inst_65074 = inst_65100;var inst_65075 = null;var inst_65076 = (0);var inst_65077 = (0);var state_65135__$1 = (function (){var statearr_65153 = state_65135;(statearr_65153[(12)] = inst_65099);
(statearr_65153[(13)] = inst_65075);
(statearr_65153[(14)] = inst_65074);
(statearr_65153[(15)] = inst_65076);
(statearr_65153[(16)] = inst_65077);
return statearr_65153;
})();var statearr_65154_65197 = state_65135__$1;(statearr_65154_65197[(2)] = null);
(statearr_65154_65197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (3)))
{var inst_65133 = (state_65135[(2)]);var state_65135__$1 = state_65135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65135__$1,inst_65133);
} else
{if((state_val_65136 === (12)))
{var inst_65108 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65155_65198 = state_65135__$1;(statearr_65155_65198[(2)] = inst_65108);
(statearr_65155_65198[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (2)))
{var state_65135__$1 = state_65135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65135__$1,(4),ch);
} else
{if((state_val_65136 === (23)))
{var inst_65112 = (state_65135[(11)]);var inst_65116 = (state_65135[(2)]);var inst_65117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_65112);var state_65135__$1 = (function (){var statearr_65156 = state_65135;(statearr_65156[(17)] = inst_65116);
return statearr_65156;
})();var statearr_65157_65199 = state_65135__$1;(statearr_65157_65199[(2)] = inst_65117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65135__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (19)))
{var state_65135__$1 = state_65135;var statearr_65158_65200 = state_65135__$1;(statearr_65158_65200[(2)] = null);
(statearr_65158_65200[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (11)))
{var inst_65074 = (state_65135[(14)]);var inst_65088 = (state_65135[(10)]);var inst_65088__$1 = cljs.core.seq.call(null,inst_65074);var state_65135__$1 = (function (){var statearr_65159 = state_65135;(statearr_65159[(10)] = inst_65088__$1);
return statearr_65159;
})();if(inst_65088__$1)
{var statearr_65160_65201 = state_65135__$1;(statearr_65160_65201[(1)] = (13));
} else
{var statearr_65161_65202 = state_65135__$1;(statearr_65161_65202[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (9)))
{var inst_65110 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65162_65203 = state_65135__$1;(statearr_65162_65203[(2)] = inst_65110);
(statearr_65162_65203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (5)))
{var inst_65071 = cljs.core.deref.call(null,mults);var inst_65072 = cljs.core.vals.call(null,inst_65071);var inst_65073 = cljs.core.seq.call(null,inst_65072);var inst_65074 = inst_65073;var inst_65075 = null;var inst_65076 = (0);var inst_65077 = (0);var state_65135__$1 = (function (){var statearr_65163 = state_65135;(statearr_65163[(13)] = inst_65075);
(statearr_65163[(14)] = inst_65074);
(statearr_65163[(15)] = inst_65076);
(statearr_65163[(16)] = inst_65077);
return statearr_65163;
})();var statearr_65164_65204 = state_65135__$1;(statearr_65164_65204[(2)] = null);
(statearr_65164_65204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (14)))
{var state_65135__$1 = state_65135;var statearr_65168_65205 = state_65135__$1;(statearr_65168_65205[(2)] = null);
(statearr_65168_65205[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (16)))
{var inst_65088 = (state_65135[(10)]);var inst_65092 = cljs.core.chunk_first.call(null,inst_65088);var inst_65093 = cljs.core.chunk_rest.call(null,inst_65088);var inst_65094 = cljs.core.count.call(null,inst_65092);var inst_65074 = inst_65093;var inst_65075 = inst_65092;var inst_65076 = inst_65094;var inst_65077 = (0);var state_65135__$1 = (function (){var statearr_65169 = state_65135;(statearr_65169[(13)] = inst_65075);
(statearr_65169[(14)] = inst_65074);
(statearr_65169[(15)] = inst_65076);
(statearr_65169[(16)] = inst_65077);
return statearr_65169;
})();var statearr_65170_65206 = state_65135__$1;(statearr_65170_65206[(2)] = null);
(statearr_65170_65206[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (10)))
{var inst_65075 = (state_65135[(13)]);var inst_65074 = (state_65135[(14)]);var inst_65076 = (state_65135[(15)]);var inst_65077 = (state_65135[(16)]);var inst_65082 = cljs.core._nth.call(null,inst_65075,inst_65077);var inst_65083 = cljs.core.async.muxch_STAR_.call(null,inst_65082);var inst_65084 = cljs.core.async.close_BANG_.call(null,inst_65083);var inst_65085 = (inst_65077 + (1));var tmp65165 = inst_65075;var tmp65166 = inst_65074;var tmp65167 = inst_65076;var inst_65074__$1 = tmp65166;var inst_65075__$1 = tmp65165;var inst_65076__$1 = tmp65167;var inst_65077__$1 = inst_65085;var state_65135__$1 = (function (){var statearr_65171 = state_65135;(statearr_65171[(13)] = inst_65075__$1);
(statearr_65171[(14)] = inst_65074__$1);
(statearr_65171[(18)] = inst_65084);
(statearr_65171[(15)] = inst_65076__$1);
(statearr_65171[(16)] = inst_65077__$1);
return statearr_65171;
})();var statearr_65172_65207 = state_65135__$1;(statearr_65172_65207[(2)] = null);
(statearr_65172_65207[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (18)))
{var inst_65103 = (state_65135[(2)]);var state_65135__$1 = state_65135;var statearr_65173_65208 = state_65135__$1;(statearr_65173_65208[(2)] = inst_65103);
(statearr_65173_65208[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65136 === (8)))
{var inst_65076 = (state_65135[(15)]);var inst_65077 = (state_65135[(16)]);var inst_65079 = (inst_65077 < inst_65076);var inst_65080 = inst_65079;var state_65135__$1 = state_65135;if(cljs.core.truth_(inst_65080))
{var statearr_65174_65209 = state_65135__$1;(statearr_65174_65209[(1)] = (10));
} else
{var statearr_65175_65210 = state_65135__$1;(statearr_65175_65210[(1)] = (11));
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
});})(c__5708__auto___65183,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___65183,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65179[(0)] = state_machine__5694__auto__);
(statearr_65179[(1)] = (1));
return statearr_65179;
});
var state_machine__5694__auto____1 = (function (state_65135){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65180){if((e65180 instanceof Object))
{var ex__5697__auto__ = e65180;var statearr_65181_65211 = state_65135;(statearr_65181_65211[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65180;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65212 = state_65135;
state_65135 = G__65212;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65135){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65183,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_65182 = f__5709__auto__.call(null);(statearr_65182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65183);
return statearr_65182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65183,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___65349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_65319){var state_val_65320 = (state_65319[(1)]);if((state_val_65320 === (7)))
{var state_65319__$1 = state_65319;var statearr_65321_65350 = state_65319__$1;(statearr_65321_65350[(2)] = null);
(statearr_65321_65350[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (1)))
{var state_65319__$1 = state_65319;var statearr_65322_65351 = state_65319__$1;(statearr_65322_65351[(2)] = null);
(statearr_65322_65351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (4)))
{var inst_65283 = (state_65319[(7)]);var inst_65285 = (inst_65283 < cnt);var state_65319__$1 = state_65319;if(cljs.core.truth_(inst_65285))
{var statearr_65323_65352 = state_65319__$1;(statearr_65323_65352[(1)] = (6));
} else
{var statearr_65324_65353 = state_65319__$1;(statearr_65324_65353[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (15)))
{var inst_65315 = (state_65319[(2)]);var state_65319__$1 = state_65319;var statearr_65325_65354 = state_65319__$1;(statearr_65325_65354[(2)] = inst_65315);
(statearr_65325_65354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (13)))
{var inst_65308 = cljs.core.async.close_BANG_.call(null,out);var state_65319__$1 = state_65319;var statearr_65326_65355 = state_65319__$1;(statearr_65326_65355[(2)] = inst_65308);
(statearr_65326_65355[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (6)))
{var state_65319__$1 = state_65319;var statearr_65327_65356 = state_65319__$1;(statearr_65327_65356[(2)] = null);
(statearr_65327_65356[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (3)))
{var inst_65317 = (state_65319[(2)]);var state_65319__$1 = state_65319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65319__$1,inst_65317);
} else
{if((state_val_65320 === (12)))
{var inst_65305 = (state_65319[(8)]);var inst_65305__$1 = (state_65319[(2)]);var inst_65306 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_65305__$1);var state_65319__$1 = (function (){var statearr_65328 = state_65319;(statearr_65328[(8)] = inst_65305__$1);
return statearr_65328;
})();if(cljs.core.truth_(inst_65306))
{var statearr_65329_65357 = state_65319__$1;(statearr_65329_65357[(1)] = (13));
} else
{var statearr_65330_65358 = state_65319__$1;(statearr_65330_65358[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (2)))
{var inst_65282 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_65283 = (0);var state_65319__$1 = (function (){var statearr_65331 = state_65319;(statearr_65331[(9)] = inst_65282);
(statearr_65331[(7)] = inst_65283);
return statearr_65331;
})();var statearr_65332_65359 = state_65319__$1;(statearr_65332_65359[(2)] = null);
(statearr_65332_65359[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (11)))
{var inst_65283 = (state_65319[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65319,(10),Object,null,(9));var inst_65292 = chs__$1.call(null,inst_65283);var inst_65293 = done.call(null,inst_65283);var inst_65294 = cljs.core.async.take_BANG_.call(null,inst_65292,inst_65293);var state_65319__$1 = state_65319;var statearr_65333_65360 = state_65319__$1;(statearr_65333_65360[(2)] = inst_65294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65319__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (9)))
{var inst_65283 = (state_65319[(7)]);var inst_65296 = (state_65319[(2)]);var inst_65297 = (inst_65283 + (1));var inst_65283__$1 = inst_65297;var state_65319__$1 = (function (){var statearr_65334 = state_65319;(statearr_65334[(10)] = inst_65296);
(statearr_65334[(7)] = inst_65283__$1);
return statearr_65334;
})();var statearr_65335_65361 = state_65319__$1;(statearr_65335_65361[(2)] = null);
(statearr_65335_65361[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (5)))
{var inst_65303 = (state_65319[(2)]);var state_65319__$1 = (function (){var statearr_65336 = state_65319;(statearr_65336[(11)] = inst_65303);
return statearr_65336;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65319__$1,(12),dchan);
} else
{if((state_val_65320 === (14)))
{var inst_65305 = (state_65319[(8)]);var inst_65310 = cljs.core.apply.call(null,f,inst_65305);var state_65319__$1 = state_65319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65319__$1,(16),out,inst_65310);
} else
{if((state_val_65320 === (16)))
{var inst_65312 = (state_65319[(2)]);var state_65319__$1 = (function (){var statearr_65337 = state_65319;(statearr_65337[(12)] = inst_65312);
return statearr_65337;
})();var statearr_65338_65362 = state_65319__$1;(statearr_65338_65362[(2)] = null);
(statearr_65338_65362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (10)))
{var inst_65287 = (state_65319[(2)]);var inst_65288 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_65319__$1 = (function (){var statearr_65339 = state_65319;(statearr_65339[(13)] = inst_65287);
return statearr_65339;
})();var statearr_65340_65363 = state_65319__$1;(statearr_65340_65363[(2)] = inst_65288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65319__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65320 === (8)))
{var inst_65301 = (state_65319[(2)]);var state_65319__$1 = state_65319;var statearr_65341_65364 = state_65319__$1;(statearr_65341_65364[(2)] = inst_65301);
(statearr_65341_65364[(1)] = (5));
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
});})(c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65345[(0)] = state_machine__5694__auto__);
(statearr_65345[(1)] = (1));
return statearr_65345;
});
var state_machine__5694__auto____1 = (function (state_65319){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65346){if((e65346 instanceof Object))
{var ex__5697__auto__ = e65346;var statearr_65347_65365 = state_65319;(statearr_65347_65365[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65366 = state_65319;
state_65319 = G__65366;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65319){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_65348 = f__5709__auto__.call(null);(statearr_65348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65349);
return statearr_65348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65349,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___65474 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65474,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65474,out){
return (function (state_65450){var state_val_65451 = (state_65450[(1)]);if((state_val_65451 === (7)))
{var inst_65429 = (state_65450[(7)]);var inst_65430 = (state_65450[(8)]);var inst_65429__$1 = (state_65450[(2)]);var inst_65430__$1 = cljs.core.nth.call(null,inst_65429__$1,(0),null);var inst_65431 = cljs.core.nth.call(null,inst_65429__$1,(1),null);var inst_65432 = (inst_65430__$1 == null);var state_65450__$1 = (function (){var statearr_65452 = state_65450;(statearr_65452[(7)] = inst_65429__$1);
(statearr_65452[(9)] = inst_65431);
(statearr_65452[(8)] = inst_65430__$1);
return statearr_65452;
})();if(cljs.core.truth_(inst_65432))
{var statearr_65453_65475 = state_65450__$1;(statearr_65453_65475[(1)] = (8));
} else
{var statearr_65454_65476 = state_65450__$1;(statearr_65454_65476[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (1)))
{var inst_65421 = cljs.core.vec.call(null,chs);var inst_65422 = inst_65421;var state_65450__$1 = (function (){var statearr_65455 = state_65450;(statearr_65455[(10)] = inst_65422);
return statearr_65455;
})();var statearr_65456_65477 = state_65450__$1;(statearr_65456_65477[(2)] = null);
(statearr_65456_65477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (4)))
{var inst_65422 = (state_65450[(10)]);var state_65450__$1 = state_65450;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_65450__$1,(7),inst_65422);
} else
{if((state_val_65451 === (6)))
{var inst_65446 = (state_65450[(2)]);var state_65450__$1 = state_65450;var statearr_65457_65478 = state_65450__$1;(statearr_65457_65478[(2)] = inst_65446);
(statearr_65457_65478[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (3)))
{var inst_65448 = (state_65450[(2)]);var state_65450__$1 = state_65450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65450__$1,inst_65448);
} else
{if((state_val_65451 === (2)))
{var inst_65422 = (state_65450[(10)]);var inst_65424 = cljs.core.count.call(null,inst_65422);var inst_65425 = (inst_65424 > (0));var state_65450__$1 = state_65450;if(cljs.core.truth_(inst_65425))
{var statearr_65459_65479 = state_65450__$1;(statearr_65459_65479[(1)] = (4));
} else
{var statearr_65460_65480 = state_65450__$1;(statearr_65460_65480[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (11)))
{var inst_65422 = (state_65450[(10)]);var inst_65439 = (state_65450[(2)]);var tmp65458 = inst_65422;var inst_65422__$1 = tmp65458;var state_65450__$1 = (function (){var statearr_65461 = state_65450;(statearr_65461[(11)] = inst_65439);
(statearr_65461[(10)] = inst_65422__$1);
return statearr_65461;
})();var statearr_65462_65481 = state_65450__$1;(statearr_65462_65481[(2)] = null);
(statearr_65462_65481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (9)))
{var inst_65430 = (state_65450[(8)]);var state_65450__$1 = state_65450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65450__$1,(11),out,inst_65430);
} else
{if((state_val_65451 === (5)))
{var inst_65444 = cljs.core.async.close_BANG_.call(null,out);var state_65450__$1 = state_65450;var statearr_65463_65482 = state_65450__$1;(statearr_65463_65482[(2)] = inst_65444);
(statearr_65463_65482[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (10)))
{var inst_65442 = (state_65450[(2)]);var state_65450__$1 = state_65450;var statearr_65464_65483 = state_65450__$1;(statearr_65464_65483[(2)] = inst_65442);
(statearr_65464_65483[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65451 === (8)))
{var inst_65429 = (state_65450[(7)]);var inst_65431 = (state_65450[(9)]);var inst_65430 = (state_65450[(8)]);var inst_65422 = (state_65450[(10)]);var inst_65434 = (function (){var c = inst_65431;var v = inst_65430;var vec__65427 = inst_65429;var cs = inst_65422;return ((function (c,v,vec__65427,cs,inst_65429,inst_65431,inst_65430,inst_65422,state_val_65451,c__5708__auto___65474,out){
return (function (p1__65367_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__65367_SHARP_);
});
;})(c,v,vec__65427,cs,inst_65429,inst_65431,inst_65430,inst_65422,state_val_65451,c__5708__auto___65474,out))
})();var inst_65435 = cljs.core.filterv.call(null,inst_65434,inst_65422);var inst_65422__$1 = inst_65435;var state_65450__$1 = (function (){var statearr_65465 = state_65450;(statearr_65465[(10)] = inst_65422__$1);
return statearr_65465;
})();var statearr_65466_65484 = state_65450__$1;(statearr_65466_65484[(2)] = null);
(statearr_65466_65484[(1)] = (2));
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
});})(c__5708__auto___65474,out))
;return ((function (switch__5693__auto__,c__5708__auto___65474,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65470 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65470[(0)] = state_machine__5694__auto__);
(statearr_65470[(1)] = (1));
return statearr_65470;
});
var state_machine__5694__auto____1 = (function (state_65450){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65450);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65471){if((e65471 instanceof Object))
{var ex__5697__auto__ = e65471;var statearr_65472_65485 = state_65450;(statearr_65472_65485[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65471;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65486 = state_65450;
state_65450 = G__65486;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65450){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65474,out))
})();var state__5710__auto__ = (function (){var statearr_65473 = f__5709__auto__.call(null);(statearr_65473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65474);
return statearr_65473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65474,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___65579 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65579,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65579,out){
return (function (state_65556){var state_val_65557 = (state_65556[(1)]);if((state_val_65557 === (7)))
{var inst_65538 = (state_65556[(7)]);var inst_65538__$1 = (state_65556[(2)]);var inst_65539 = (inst_65538__$1 == null);var inst_65540 = cljs.core.not.call(null,inst_65539);var state_65556__$1 = (function (){var statearr_65558 = state_65556;(statearr_65558[(7)] = inst_65538__$1);
return statearr_65558;
})();if(inst_65540)
{var statearr_65559_65580 = state_65556__$1;(statearr_65559_65580[(1)] = (8));
} else
{var statearr_65560_65581 = state_65556__$1;(statearr_65560_65581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (1)))
{var inst_65533 = (0);var state_65556__$1 = (function (){var statearr_65561 = state_65556;(statearr_65561[(8)] = inst_65533);
return statearr_65561;
})();var statearr_65562_65582 = state_65556__$1;(statearr_65562_65582[(2)] = null);
(statearr_65562_65582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (4)))
{var state_65556__$1 = state_65556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65556__$1,(7),ch);
} else
{if((state_val_65557 === (6)))
{var inst_65551 = (state_65556[(2)]);var state_65556__$1 = state_65556;var statearr_65563_65583 = state_65556__$1;(statearr_65563_65583[(2)] = inst_65551);
(statearr_65563_65583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (3)))
{var inst_65553 = (state_65556[(2)]);var inst_65554 = cljs.core.async.close_BANG_.call(null,out);var state_65556__$1 = (function (){var statearr_65564 = state_65556;(statearr_65564[(9)] = inst_65553);
return statearr_65564;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65556__$1,inst_65554);
} else
{if((state_val_65557 === (2)))
{var inst_65533 = (state_65556[(8)]);var inst_65535 = (inst_65533 < n);var state_65556__$1 = state_65556;if(cljs.core.truth_(inst_65535))
{var statearr_65565_65584 = state_65556__$1;(statearr_65565_65584[(1)] = (4));
} else
{var statearr_65566_65585 = state_65556__$1;(statearr_65566_65585[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (11)))
{var inst_65533 = (state_65556[(8)]);var inst_65543 = (state_65556[(2)]);var inst_65544 = (inst_65533 + (1));var inst_65533__$1 = inst_65544;var state_65556__$1 = (function (){var statearr_65567 = state_65556;(statearr_65567[(10)] = inst_65543);
(statearr_65567[(8)] = inst_65533__$1);
return statearr_65567;
})();var statearr_65568_65586 = state_65556__$1;(statearr_65568_65586[(2)] = null);
(statearr_65568_65586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (9)))
{var state_65556__$1 = state_65556;var statearr_65569_65587 = state_65556__$1;(statearr_65569_65587[(2)] = null);
(statearr_65569_65587[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (5)))
{var state_65556__$1 = state_65556;var statearr_65570_65588 = state_65556__$1;(statearr_65570_65588[(2)] = null);
(statearr_65570_65588[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (10)))
{var inst_65548 = (state_65556[(2)]);var state_65556__$1 = state_65556;var statearr_65571_65589 = state_65556__$1;(statearr_65571_65589[(2)] = inst_65548);
(statearr_65571_65589[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65557 === (8)))
{var inst_65538 = (state_65556[(7)]);var state_65556__$1 = state_65556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65556__$1,(11),out,inst_65538);
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
});})(c__5708__auto___65579,out))
;return ((function (switch__5693__auto__,c__5708__auto___65579,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65575 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_65575[(0)] = state_machine__5694__auto__);
(statearr_65575[(1)] = (1));
return statearr_65575;
});
var state_machine__5694__auto____1 = (function (state_65556){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65576){if((e65576 instanceof Object))
{var ex__5697__auto__ = e65576;var statearr_65577_65590 = state_65556;(statearr_65577_65590[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65576;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65591 = state_65556;
state_65556 = G__65591;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65556){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65579,out))
})();var state__5710__auto__ = (function (){var statearr_65578 = f__5709__auto__.call(null);(statearr_65578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65579);
return statearr_65578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65579,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___65688 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65688,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65688,out){
return (function (state_65663){var state_val_65664 = (state_65663[(1)]);if((state_val_65664 === (7)))
{var inst_65658 = (state_65663[(2)]);var state_65663__$1 = state_65663;var statearr_65665_65689 = state_65663__$1;(statearr_65665_65689[(2)] = inst_65658);
(statearr_65665_65689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (1)))
{var inst_65640 = null;var state_65663__$1 = (function (){var statearr_65666 = state_65663;(statearr_65666[(7)] = inst_65640);
return statearr_65666;
})();var statearr_65667_65690 = state_65663__$1;(statearr_65667_65690[(2)] = null);
(statearr_65667_65690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (4)))
{var inst_65643 = (state_65663[(8)]);var inst_65643__$1 = (state_65663[(2)]);var inst_65644 = (inst_65643__$1 == null);var inst_65645 = cljs.core.not.call(null,inst_65644);var state_65663__$1 = (function (){var statearr_65668 = state_65663;(statearr_65668[(8)] = inst_65643__$1);
return statearr_65668;
})();if(inst_65645)
{var statearr_65669_65691 = state_65663__$1;(statearr_65669_65691[(1)] = (5));
} else
{var statearr_65670_65692 = state_65663__$1;(statearr_65670_65692[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (6)))
{var state_65663__$1 = state_65663;var statearr_65671_65693 = state_65663__$1;(statearr_65671_65693[(2)] = null);
(statearr_65671_65693[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (3)))
{var inst_65660 = (state_65663[(2)]);var inst_65661 = cljs.core.async.close_BANG_.call(null,out);var state_65663__$1 = (function (){var statearr_65672 = state_65663;(statearr_65672[(9)] = inst_65660);
return statearr_65672;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65663__$1,inst_65661);
} else
{if((state_val_65664 === (2)))
{var state_65663__$1 = state_65663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65663__$1,(4),ch);
} else
{if((state_val_65664 === (11)))
{var inst_65643 = (state_65663[(8)]);var inst_65652 = (state_65663[(2)]);var inst_65640 = inst_65643;var state_65663__$1 = (function (){var statearr_65673 = state_65663;(statearr_65673[(10)] = inst_65652);
(statearr_65673[(7)] = inst_65640);
return statearr_65673;
})();var statearr_65674_65694 = state_65663__$1;(statearr_65674_65694[(2)] = null);
(statearr_65674_65694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (9)))
{var inst_65643 = (state_65663[(8)]);var state_65663__$1 = state_65663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65663__$1,(11),out,inst_65643);
} else
{if((state_val_65664 === (5)))
{var inst_65640 = (state_65663[(7)]);var inst_65643 = (state_65663[(8)]);var inst_65647 = cljs.core._EQ_.call(null,inst_65643,inst_65640);var state_65663__$1 = state_65663;if(inst_65647)
{var statearr_65676_65695 = state_65663__$1;(statearr_65676_65695[(1)] = (8));
} else
{var statearr_65677_65696 = state_65663__$1;(statearr_65677_65696[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (10)))
{var inst_65655 = (state_65663[(2)]);var state_65663__$1 = state_65663;var statearr_65678_65697 = state_65663__$1;(statearr_65678_65697[(2)] = inst_65655);
(statearr_65678_65697[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65664 === (8)))
{var inst_65640 = (state_65663[(7)]);var tmp65675 = inst_65640;var inst_65640__$1 = tmp65675;var state_65663__$1 = (function (){var statearr_65679 = state_65663;(statearr_65679[(7)] = inst_65640__$1);
return statearr_65679;
})();var statearr_65680_65698 = state_65663__$1;(statearr_65680_65698[(2)] = null);
(statearr_65680_65698[(1)] = (2));
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
});})(c__5708__auto___65688,out))
;return ((function (switch__5693__auto__,c__5708__auto___65688,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65684 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_65684[(0)] = state_machine__5694__auto__);
(statearr_65684[(1)] = (1));
return statearr_65684;
});
var state_machine__5694__auto____1 = (function (state_65663){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65685){if((e65685 instanceof Object))
{var ex__5697__auto__ = e65685;var statearr_65686_65699 = state_65663;(statearr_65686_65699[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65685;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65700 = state_65663;
state_65663 = G__65700;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65663){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65688,out))
})();var state__5710__auto__ = (function (){var statearr_65687 = f__5709__auto__.call(null);(statearr_65687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65688);
return statearr_65687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65688,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___65835 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65835,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65835,out){
return (function (state_65805){var state_val_65806 = (state_65805[(1)]);if((state_val_65806 === (7)))
{var inst_65801 = (state_65805[(2)]);var state_65805__$1 = state_65805;var statearr_65807_65836 = state_65805__$1;(statearr_65807_65836[(2)] = inst_65801);
(statearr_65807_65836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (1)))
{var inst_65768 = (new Array(n));var inst_65769 = inst_65768;var inst_65770 = (0);var state_65805__$1 = (function (){var statearr_65808 = state_65805;(statearr_65808[(7)] = inst_65770);
(statearr_65808[(8)] = inst_65769);
return statearr_65808;
})();var statearr_65809_65837 = state_65805__$1;(statearr_65809_65837[(2)] = null);
(statearr_65809_65837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (4)))
{var inst_65773 = (state_65805[(9)]);var inst_65773__$1 = (state_65805[(2)]);var inst_65774 = (inst_65773__$1 == null);var inst_65775 = cljs.core.not.call(null,inst_65774);var state_65805__$1 = (function (){var statearr_65810 = state_65805;(statearr_65810[(9)] = inst_65773__$1);
return statearr_65810;
})();if(inst_65775)
{var statearr_65811_65838 = state_65805__$1;(statearr_65811_65838[(1)] = (5));
} else
{var statearr_65812_65839 = state_65805__$1;(statearr_65812_65839[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (15)))
{var inst_65795 = (state_65805[(2)]);var state_65805__$1 = state_65805;var statearr_65813_65840 = state_65805__$1;(statearr_65813_65840[(2)] = inst_65795);
(statearr_65813_65840[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (13)))
{var state_65805__$1 = state_65805;var statearr_65814_65841 = state_65805__$1;(statearr_65814_65841[(2)] = null);
(statearr_65814_65841[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (6)))
{var inst_65770 = (state_65805[(7)]);var inst_65791 = (inst_65770 > (0));var state_65805__$1 = state_65805;if(cljs.core.truth_(inst_65791))
{var statearr_65815_65842 = state_65805__$1;(statearr_65815_65842[(1)] = (12));
} else
{var statearr_65816_65843 = state_65805__$1;(statearr_65816_65843[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (3)))
{var inst_65803 = (state_65805[(2)]);var state_65805__$1 = state_65805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65805__$1,inst_65803);
} else
{if((state_val_65806 === (12)))
{var inst_65769 = (state_65805[(8)]);var inst_65793 = cljs.core.vec.call(null,inst_65769);var state_65805__$1 = state_65805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65805__$1,(15),out,inst_65793);
} else
{if((state_val_65806 === (2)))
{var state_65805__$1 = state_65805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65805__$1,(4),ch);
} else
{if((state_val_65806 === (11)))
{var inst_65785 = (state_65805[(2)]);var inst_65786 = (new Array(n));var inst_65769 = inst_65786;var inst_65770 = (0);var state_65805__$1 = (function (){var statearr_65817 = state_65805;(statearr_65817[(7)] = inst_65770);
(statearr_65817[(8)] = inst_65769);
(statearr_65817[(10)] = inst_65785);
return statearr_65817;
})();var statearr_65818_65844 = state_65805__$1;(statearr_65818_65844[(2)] = null);
(statearr_65818_65844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (9)))
{var inst_65769 = (state_65805[(8)]);var inst_65783 = cljs.core.vec.call(null,inst_65769);var state_65805__$1 = state_65805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65805__$1,(11),out,inst_65783);
} else
{if((state_val_65806 === (5)))
{var inst_65770 = (state_65805[(7)]);var inst_65773 = (state_65805[(9)]);var inst_65769 = (state_65805[(8)]);var inst_65778 = (state_65805[(11)]);var inst_65777 = (inst_65769[inst_65770] = inst_65773);var inst_65778__$1 = (inst_65770 + (1));var inst_65779 = (inst_65778__$1 < n);var state_65805__$1 = (function (){var statearr_65819 = state_65805;(statearr_65819[(12)] = inst_65777);
(statearr_65819[(11)] = inst_65778__$1);
return statearr_65819;
})();if(cljs.core.truth_(inst_65779))
{var statearr_65820_65845 = state_65805__$1;(statearr_65820_65845[(1)] = (8));
} else
{var statearr_65821_65846 = state_65805__$1;(statearr_65821_65846[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (14)))
{var inst_65798 = (state_65805[(2)]);var inst_65799 = cljs.core.async.close_BANG_.call(null,out);var state_65805__$1 = (function (){var statearr_65823 = state_65805;(statearr_65823[(13)] = inst_65798);
return statearr_65823;
})();var statearr_65824_65847 = state_65805__$1;(statearr_65824_65847[(2)] = inst_65799);
(statearr_65824_65847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (10)))
{var inst_65789 = (state_65805[(2)]);var state_65805__$1 = state_65805;var statearr_65825_65848 = state_65805__$1;(statearr_65825_65848[(2)] = inst_65789);
(statearr_65825_65848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65806 === (8)))
{var inst_65769 = (state_65805[(8)]);var inst_65778 = (state_65805[(11)]);var tmp65822 = inst_65769;var inst_65769__$1 = tmp65822;var inst_65770 = inst_65778;var state_65805__$1 = (function (){var statearr_65826 = state_65805;(statearr_65826[(7)] = inst_65770);
(statearr_65826[(8)] = inst_65769__$1);
return statearr_65826;
})();var statearr_65827_65849 = state_65805__$1;(statearr_65827_65849[(2)] = null);
(statearr_65827_65849[(1)] = (2));
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
});})(c__5708__auto___65835,out))
;return ((function (switch__5693__auto__,c__5708__auto___65835,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65831[(0)] = state_machine__5694__auto__);
(statearr_65831[(1)] = (1));
return statearr_65831;
});
var state_machine__5694__auto____1 = (function (state_65805){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65832){if((e65832 instanceof Object))
{var ex__5697__auto__ = e65832;var statearr_65833_65850 = state_65805;(statearr_65833_65850[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65851 = state_65805;
state_65805 = G__65851;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65805){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65835,out))
})();var state__5710__auto__ = (function (){var statearr_65834 = f__5709__auto__.call(null);(statearr_65834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65835);
return statearr_65834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65835,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___65994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65994,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65994,out){
return (function (state_65964){var state_val_65965 = (state_65964[(1)]);if((state_val_65965 === (7)))
{var inst_65960 = (state_65964[(2)]);var state_65964__$1 = state_65964;var statearr_65966_65995 = state_65964__$1;(statearr_65966_65995[(2)] = inst_65960);
(statearr_65966_65995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (1)))
{var inst_65923 = [];var inst_65924 = inst_65923;var inst_65925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_65964__$1 = (function (){var statearr_65967 = state_65964;(statearr_65967[(7)] = inst_65924);
(statearr_65967[(8)] = inst_65925);
return statearr_65967;
})();var statearr_65968_65996 = state_65964__$1;(statearr_65968_65996[(2)] = null);
(statearr_65968_65996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (4)))
{var inst_65928 = (state_65964[(9)]);var inst_65928__$1 = (state_65964[(2)]);var inst_65929 = (inst_65928__$1 == null);var inst_65930 = cljs.core.not.call(null,inst_65929);var state_65964__$1 = (function (){var statearr_65969 = state_65964;(statearr_65969[(9)] = inst_65928__$1);
return statearr_65969;
})();if(inst_65930)
{var statearr_65970_65997 = state_65964__$1;(statearr_65970_65997[(1)] = (5));
} else
{var statearr_65971_65998 = state_65964__$1;(statearr_65971_65998[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (15)))
{var inst_65954 = (state_65964[(2)]);var state_65964__$1 = state_65964;var statearr_65972_65999 = state_65964__$1;(statearr_65972_65999[(2)] = inst_65954);
(statearr_65972_65999[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (13)))
{var state_65964__$1 = state_65964;var statearr_65973_66000 = state_65964__$1;(statearr_65973_66000[(2)] = null);
(statearr_65973_66000[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (6)))
{var inst_65924 = (state_65964[(7)]);var inst_65949 = inst_65924.length;var inst_65950 = (inst_65949 > (0));var state_65964__$1 = state_65964;if(cljs.core.truth_(inst_65950))
{var statearr_65974_66001 = state_65964__$1;(statearr_65974_66001[(1)] = (12));
} else
{var statearr_65975_66002 = state_65964__$1;(statearr_65975_66002[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (3)))
{var inst_65962 = (state_65964[(2)]);var state_65964__$1 = state_65964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65964__$1,inst_65962);
} else
{if((state_val_65965 === (12)))
{var inst_65924 = (state_65964[(7)]);var inst_65952 = cljs.core.vec.call(null,inst_65924);var state_65964__$1 = state_65964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65964__$1,(15),out,inst_65952);
} else
{if((state_val_65965 === (2)))
{var state_65964__$1 = state_65964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65964__$1,(4),ch);
} else
{if((state_val_65965 === (11)))
{var inst_65932 = (state_65964[(10)]);var inst_65928 = (state_65964[(9)]);var inst_65942 = (state_65964[(2)]);var inst_65943 = [];var inst_65944 = inst_65943.push(inst_65928);var inst_65924 = inst_65943;var inst_65925 = inst_65932;var state_65964__$1 = (function (){var statearr_65976 = state_65964;(statearr_65976[(7)] = inst_65924);
(statearr_65976[(11)] = inst_65944);
(statearr_65976[(8)] = inst_65925);
(statearr_65976[(12)] = inst_65942);
return statearr_65976;
})();var statearr_65977_66003 = state_65964__$1;(statearr_65977_66003[(2)] = null);
(statearr_65977_66003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (9)))
{var inst_65924 = (state_65964[(7)]);var inst_65940 = cljs.core.vec.call(null,inst_65924);var state_65964__$1 = state_65964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65964__$1,(11),out,inst_65940);
} else
{if((state_val_65965 === (5)))
{var inst_65932 = (state_65964[(10)]);var inst_65928 = (state_65964[(9)]);var inst_65925 = (state_65964[(8)]);var inst_65932__$1 = f.call(null,inst_65928);var inst_65933 = cljs.core._EQ_.call(null,inst_65932__$1,inst_65925);var inst_65934 = cljs.core.keyword_identical_QMARK_.call(null,inst_65925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_65935 = (inst_65933) || (inst_65934);var state_65964__$1 = (function (){var statearr_65978 = state_65964;(statearr_65978[(10)] = inst_65932__$1);
return statearr_65978;
})();if(cljs.core.truth_(inst_65935))
{var statearr_65979_66004 = state_65964__$1;(statearr_65979_66004[(1)] = (8));
} else
{var statearr_65980_66005 = state_65964__$1;(statearr_65980_66005[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (14)))
{var inst_65957 = (state_65964[(2)]);var inst_65958 = cljs.core.async.close_BANG_.call(null,out);var state_65964__$1 = (function (){var statearr_65982 = state_65964;(statearr_65982[(13)] = inst_65957);
return statearr_65982;
})();var statearr_65983_66006 = state_65964__$1;(statearr_65983_66006[(2)] = inst_65958);
(statearr_65983_66006[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (10)))
{var inst_65947 = (state_65964[(2)]);var state_65964__$1 = state_65964;var statearr_65984_66007 = state_65964__$1;(statearr_65984_66007[(2)] = inst_65947);
(statearr_65984_66007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65965 === (8)))
{var inst_65932 = (state_65964[(10)]);var inst_65924 = (state_65964[(7)]);var inst_65928 = (state_65964[(9)]);var inst_65937 = inst_65924.push(inst_65928);var tmp65981 = inst_65924;var inst_65924__$1 = tmp65981;var inst_65925 = inst_65932;var state_65964__$1 = (function (){var statearr_65985 = state_65964;(statearr_65985[(7)] = inst_65924__$1);
(statearr_65985[(14)] = inst_65937);
(statearr_65985[(8)] = inst_65925);
return statearr_65985;
})();var statearr_65986_66008 = state_65964__$1;(statearr_65986_66008[(2)] = null);
(statearr_65986_66008[(1)] = (2));
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
});})(c__5708__auto___65994,out))
;return ((function (switch__5693__auto__,c__5708__auto___65994,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65990[(0)] = state_machine__5694__auto__);
(statearr_65990[(1)] = (1));
return statearr_65990;
});
var state_machine__5694__auto____1 = (function (state_65964){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65991){if((e65991 instanceof Object))
{var ex__5697__auto__ = e65991;var statearr_65992_66009 = state_65964;(statearr_65992_66009[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65991;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66010 = state_65964;
state_65964 = G__66010;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65964){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65994,out))
})();var state__5710__auto__ = (function (){var statearr_65993 = f__5709__auto__.call(null);(statearr_65993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65994);
return statearr_65993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65994,out))
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