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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25887 = (function (f,fn_handler,meta25888){
this.f = f;
this.fn_handler = fn_handler;
this.meta25888 = meta25888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25887.cljs$lang$type = true;
cljs.core.async.t25887.cljs$lang$ctorStr = "cljs.core.async/t25887";
cljs.core.async.t25887.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25887");
});
cljs.core.async.t25887.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25889){var self__ = this;
var _25889__$1 = this;return self__.meta25888;
});
cljs.core.async.t25887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25889,meta25888__$1){var self__ = this;
var _25889__$1 = this;return (new cljs.core.async.t25887(self__.f,self__.fn_handler,meta25888__$1));
});
cljs.core.async.__GT_t25887 = (function __GT_t25887(f__$1,fn_handler__$1,meta25888){return (new cljs.core.async.t25887(f__$1,fn_handler__$1,meta25888));
});
}
return (new cljs.core.async.t25887(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25891 = buff;if(G__25891)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__25891.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25891.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25891);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25891);
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
{var val_25892 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25892);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25892,ret){
return (function (){return fn1.call(null,val_25892);
});})(val_25892,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___25893 = n;var x_25894 = (0);while(true){
if((x_25894 < n__4399__auto___25893))
{(a[x_25894] = (0));
{
var G__25895 = (x_25894 + (1));
x_25894 = G__25895;
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
var G__25896 = (i + (1));
i = G__25896;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25900 = (function (flag,alt_flag,meta25901){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25901 = meta25901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25900.cljs$lang$type = true;
cljs.core.async.t25900.cljs$lang$ctorStr = "cljs.core.async/t25900";
cljs.core.async.t25900.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25900");
});})(flag))
;
cljs.core.async.t25900.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25902){var self__ = this;
var _25902__$1 = this;return self__.meta25901;
});})(flag))
;
cljs.core.async.t25900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25902,meta25901__$1){var self__ = this;
var _25902__$1 = this;return (new cljs.core.async.t25900(self__.flag,self__.alt_flag,meta25901__$1));
});})(flag))
;
cljs.core.async.__GT_t25900 = ((function (flag){
return (function __GT_t25900(flag__$1,alt_flag__$1,meta25901){return (new cljs.core.async.t25900(flag__$1,alt_flag__$1,meta25901));
});})(flag))
;
}
return (new cljs.core.async.t25900(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25906 = (function (cb,flag,alt_handler,meta25907){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25907 = meta25907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25906.cljs$lang$type = true;
cljs.core.async.t25906.cljs$lang$ctorStr = "cljs.core.async/t25906";
cljs.core.async.t25906.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25906");
});
cljs.core.async.t25906.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25908){var self__ = this;
var _25908__$1 = this;return self__.meta25907;
});
cljs.core.async.t25906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25908,meta25907__$1){var self__ = this;
var _25908__$1 = this;return (new cljs.core.async.t25906(self__.cb,self__.flag,self__.alt_handler,meta25907__$1));
});
cljs.core.async.__GT_t25906 = (function __GT_t25906(cb__$1,flag__$1,alt_handler__$1,meta25907){return (new cljs.core.async.t25906(cb__$1,flag__$1,alt_handler__$1,meta25907));
});
}
return (new cljs.core.async.t25906(cb,flag,alt_handler,null));
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
return (function (p1__25909_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25909_SHARP_,port], null));
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
var G__25910 = (i + (1));
i = G__25910;
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
var alts_BANG___delegate = function (ports,p__25911){var map__25913 = p__25911;var map__25913__$1 = ((cljs.core.seq_QMARK_.call(null,map__25913))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);var opts = map__25913__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25911 = null;if (arguments.length > 1) {
  p__25911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25911);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25914){
var ports = cljs.core.first(arglist__25914);
var p__25911 = cljs.core.rest(arglist__25914);
return alts_BANG___delegate(ports,p__25911);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25922 = (function (ch,f,map_LT_,meta25923){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25923 = meta25923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25922.cljs$lang$type = true;
cljs.core.async.t25922.cljs$lang$ctorStr = "cljs.core.async/t25922";
cljs.core.async.t25922.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25922");
});
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25925 = (function (fn1,_,meta25923,ch,f,map_LT_,meta25926){
this.fn1 = fn1;
this._ = _;
this.meta25923 = meta25923;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25926 = meta25926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25925.cljs$lang$type = true;
cljs.core.async.t25925.cljs$lang$ctorStr = "cljs.core.async/t25925";
cljs.core.async.t25925.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25925");
});})(___$1))
;
cljs.core.async.t25925.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25925.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25915_SHARP_){return f1.call(null,(((p1__25915_SHARP_ == null))?null:self__.f.call(null,p1__25915_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25927){var self__ = this;
var _25927__$1 = this;return self__.meta25926;
});})(___$1))
;
cljs.core.async.t25925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25927,meta25926__$1){var self__ = this;
var _25927__$1 = this;return (new cljs.core.async.t25925(self__.fn1,self__._,self__.meta25923,self__.ch,self__.f,self__.map_LT_,meta25926__$1));
});})(___$1))
;
cljs.core.async.__GT_t25925 = ((function (___$1){
return (function __GT_t25925(fn1__$1,___$2,meta25923__$1,ch__$2,f__$2,map_LT___$2,meta25926){return (new cljs.core.async.t25925(fn1__$1,___$2,meta25923__$1,ch__$2,f__$2,map_LT___$2,meta25926));
});})(___$1))
;
}
return (new cljs.core.async.t25925(fn1,___$1,self__.meta25923,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25924){var self__ = this;
var _25924__$1 = this;return self__.meta25923;
});
cljs.core.async.t25922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25924,meta25923__$1){var self__ = this;
var _25924__$1 = this;return (new cljs.core.async.t25922(self__.ch,self__.f,self__.map_LT_,meta25923__$1));
});
cljs.core.async.__GT_t25922 = (function __GT_t25922(ch__$1,f__$1,map_LT___$1,meta25923){return (new cljs.core.async.t25922(ch__$1,f__$1,map_LT___$1,meta25923));
});
}
return (new cljs.core.async.t25922(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25931 = (function (ch,f,map_GT_,meta25932){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25932 = meta25932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25931.cljs$lang$type = true;
cljs.core.async.t25931.cljs$lang$ctorStr = "cljs.core.async/t25931";
cljs.core.async.t25931.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25931");
});
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25933){var self__ = this;
var _25933__$1 = this;return self__.meta25932;
});
cljs.core.async.t25931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25933,meta25932__$1){var self__ = this;
var _25933__$1 = this;return (new cljs.core.async.t25931(self__.ch,self__.f,self__.map_GT_,meta25932__$1));
});
cljs.core.async.__GT_t25931 = (function __GT_t25931(ch__$1,f__$1,map_GT___$1,meta25932){return (new cljs.core.async.t25931(ch__$1,f__$1,map_GT___$1,meta25932));
});
}
return (new cljs.core.async.t25931(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25937 = (function (ch,p,filter_GT_,meta25938){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25938 = meta25938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25937.cljs$lang$type = true;
cljs.core.async.t25937.cljs$lang$ctorStr = "cljs.core.async/t25937";
cljs.core.async.t25937.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25937");
});
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25939){var self__ = this;
var _25939__$1 = this;return self__.meta25938;
});
cljs.core.async.t25937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25939,meta25938__$1){var self__ = this;
var _25939__$1 = this;return (new cljs.core.async.t25937(self__.ch,self__.p,self__.filter_GT_,meta25938__$1));
});
cljs.core.async.__GT_t25937 = (function __GT_t25937(ch__$1,p__$1,filter_GT___$1,meta25938){return (new cljs.core.async.t25937(ch__$1,p__$1,filter_GT___$1,meta25938));
});
}
return (new cljs.core.async.t25937(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___26022 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26022,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26022,out){
return (function (state_26001){var state_val_26002 = (state_26001[(1)]);if((state_val_26002 === (7)))
{var inst_25997 = (state_26001[(2)]);var state_26001__$1 = state_26001;var statearr_26003_26023 = state_26001__$1;(statearr_26003_26023[(2)] = inst_25997);
(statearr_26003_26023[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (1)))
{var state_26001__$1 = state_26001;var statearr_26004_26024 = state_26001__$1;(statearr_26004_26024[(2)] = null);
(statearr_26004_26024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (4)))
{var inst_25983 = (state_26001[(7)]);var inst_25983__$1 = (state_26001[(2)]);var inst_25984 = (inst_25983__$1 == null);var state_26001__$1 = (function (){var statearr_26005 = state_26001;(statearr_26005[(7)] = inst_25983__$1);
return statearr_26005;
})();if(cljs.core.truth_(inst_25984))
{var statearr_26006_26025 = state_26001__$1;(statearr_26006_26025[(1)] = (5));
} else
{var statearr_26007_26026 = state_26001__$1;(statearr_26007_26026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (6)))
{var inst_25983 = (state_26001[(7)]);var inst_25988 = p.call(null,inst_25983);var state_26001__$1 = state_26001;if(cljs.core.truth_(inst_25988))
{var statearr_26008_26027 = state_26001__$1;(statearr_26008_26027[(1)] = (8));
} else
{var statearr_26009_26028 = state_26001__$1;(statearr_26009_26028[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (3)))
{var inst_25999 = (state_26001[(2)]);var state_26001__$1 = state_26001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26001__$1,inst_25999);
} else
{if((state_val_26002 === (2)))
{var state_26001__$1 = state_26001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26001__$1,(4),ch);
} else
{if((state_val_26002 === (11)))
{var inst_25991 = (state_26001[(2)]);var state_26001__$1 = state_26001;var statearr_26010_26029 = state_26001__$1;(statearr_26010_26029[(2)] = inst_25991);
(statearr_26010_26029[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (9)))
{var state_26001__$1 = state_26001;var statearr_26011_26030 = state_26001__$1;(statearr_26011_26030[(2)] = null);
(statearr_26011_26030[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (5)))
{var inst_25986 = cljs.core.async.close_BANG_.call(null,out);var state_26001__$1 = state_26001;var statearr_26012_26031 = state_26001__$1;(statearr_26012_26031[(2)] = inst_25986);
(statearr_26012_26031[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (10)))
{var inst_25994 = (state_26001[(2)]);var state_26001__$1 = (function (){var statearr_26013 = state_26001;(statearr_26013[(8)] = inst_25994);
return statearr_26013;
})();var statearr_26014_26032 = state_26001__$1;(statearr_26014_26032[(2)] = null);
(statearr_26014_26032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26002 === (8)))
{var inst_25983 = (state_26001[(7)]);var state_26001__$1 = state_26001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26001__$1,(11),out,inst_25983);
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
});})(c__5693__auto___26022,out))
;return ((function (switch__5678__auto__,c__5693__auto___26022,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26018 = [null,null,null,null,null,null,null,null,null];(statearr_26018[(0)] = state_machine__5679__auto__);
(statearr_26018[(1)] = (1));
return statearr_26018;
});
var state_machine__5679__auto____1 = (function (state_26001){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26001);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26019){if((e26019 instanceof Object))
{var ex__5682__auto__ = e26019;var statearr_26020_26033 = state_26001;(statearr_26020_26033[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26034 = state_26001;
state_26001 = G__26034;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26001){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26022,out))
})();var state__5695__auto__ = (function (){var statearr_26021 = f__5694__auto__.call(null);(statearr_26021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26022);
return statearr_26021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26022,out))
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
return (function (state_26186){var state_val_26187 = (state_26186[(1)]);if((state_val_26187 === (7)))
{var inst_26182 = (state_26186[(2)]);var state_26186__$1 = state_26186;var statearr_26188_26225 = state_26186__$1;(statearr_26188_26225[(2)] = inst_26182);
(statearr_26188_26225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (20)))
{var inst_26157 = (state_26186[(7)]);var inst_26168 = (state_26186[(2)]);var inst_26169 = cljs.core.next.call(null,inst_26157);var inst_26143 = inst_26169;var inst_26144 = null;var inst_26145 = (0);var inst_26146 = (0);var state_26186__$1 = (function (){var statearr_26189 = state_26186;(statearr_26189[(8)] = inst_26168);
(statearr_26189[(9)] = inst_26143);
(statearr_26189[(10)] = inst_26146);
(statearr_26189[(11)] = inst_26145);
(statearr_26189[(12)] = inst_26144);
return statearr_26189;
})();var statearr_26190_26226 = state_26186__$1;(statearr_26190_26226[(2)] = null);
(statearr_26190_26226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (1)))
{var state_26186__$1 = state_26186;var statearr_26191_26227 = state_26186__$1;(statearr_26191_26227[(2)] = null);
(statearr_26191_26227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (4)))
{var inst_26132 = (state_26186[(13)]);var inst_26132__$1 = (state_26186[(2)]);var inst_26133 = (inst_26132__$1 == null);var state_26186__$1 = (function (){var statearr_26195 = state_26186;(statearr_26195[(13)] = inst_26132__$1);
return statearr_26195;
})();if(cljs.core.truth_(inst_26133))
{var statearr_26196_26228 = state_26186__$1;(statearr_26196_26228[(1)] = (5));
} else
{var statearr_26197_26229 = state_26186__$1;(statearr_26197_26229[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (15)))
{var state_26186__$1 = state_26186;var statearr_26198_26230 = state_26186__$1;(statearr_26198_26230[(2)] = null);
(statearr_26198_26230[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (13)))
{var inst_26143 = (state_26186[(9)]);var inst_26146 = (state_26186[(10)]);var inst_26145 = (state_26186[(11)]);var inst_26144 = (state_26186[(12)]);var inst_26153 = (state_26186[(2)]);var inst_26154 = (inst_26146 + (1));var tmp26192 = inst_26143;var tmp26193 = inst_26145;var tmp26194 = inst_26144;var inst_26143__$1 = tmp26192;var inst_26144__$1 = tmp26194;var inst_26145__$1 = tmp26193;var inst_26146__$1 = inst_26154;var state_26186__$1 = (function (){var statearr_26199 = state_26186;(statearr_26199[(9)] = inst_26143__$1);
(statearr_26199[(10)] = inst_26146__$1);
(statearr_26199[(14)] = inst_26153);
(statearr_26199[(11)] = inst_26145__$1);
(statearr_26199[(12)] = inst_26144__$1);
return statearr_26199;
})();var statearr_26200_26231 = state_26186__$1;(statearr_26200_26231[(2)] = null);
(statearr_26200_26231[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (6)))
{var inst_26132 = (state_26186[(13)]);var inst_26137 = f.call(null,inst_26132);var inst_26142 = cljs.core.seq.call(null,inst_26137);var inst_26143 = inst_26142;var inst_26144 = null;var inst_26145 = (0);var inst_26146 = (0);var state_26186__$1 = (function (){var statearr_26201 = state_26186;(statearr_26201[(9)] = inst_26143);
(statearr_26201[(10)] = inst_26146);
(statearr_26201[(11)] = inst_26145);
(statearr_26201[(12)] = inst_26144);
return statearr_26201;
})();var statearr_26202_26232 = state_26186__$1;(statearr_26202_26232[(2)] = null);
(statearr_26202_26232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (17)))
{var inst_26157 = (state_26186[(7)]);var inst_26161 = cljs.core.chunk_first.call(null,inst_26157);var inst_26162 = cljs.core.chunk_rest.call(null,inst_26157);var inst_26163 = cljs.core.count.call(null,inst_26161);var inst_26143 = inst_26162;var inst_26144 = inst_26161;var inst_26145 = inst_26163;var inst_26146 = (0);var state_26186__$1 = (function (){var statearr_26203 = state_26186;(statearr_26203[(9)] = inst_26143);
(statearr_26203[(10)] = inst_26146);
(statearr_26203[(11)] = inst_26145);
(statearr_26203[(12)] = inst_26144);
return statearr_26203;
})();var statearr_26204_26233 = state_26186__$1;(statearr_26204_26233[(2)] = null);
(statearr_26204_26233[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (3)))
{var inst_26184 = (state_26186[(2)]);var state_26186__$1 = state_26186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26186__$1,inst_26184);
} else
{if((state_val_26187 === (12)))
{var inst_26177 = (state_26186[(2)]);var state_26186__$1 = state_26186;var statearr_26205_26234 = state_26186__$1;(statearr_26205_26234[(2)] = inst_26177);
(statearr_26205_26234[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (2)))
{var state_26186__$1 = state_26186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26186__$1,(4),in$);
} else
{if((state_val_26187 === (19)))
{var inst_26172 = (state_26186[(2)]);var state_26186__$1 = state_26186;var statearr_26206_26235 = state_26186__$1;(statearr_26206_26235[(2)] = inst_26172);
(statearr_26206_26235[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (11)))
{var inst_26143 = (state_26186[(9)]);var inst_26157 = (state_26186[(7)]);var inst_26157__$1 = cljs.core.seq.call(null,inst_26143);var state_26186__$1 = (function (){var statearr_26207 = state_26186;(statearr_26207[(7)] = inst_26157__$1);
return statearr_26207;
})();if(inst_26157__$1)
{var statearr_26208_26236 = state_26186__$1;(statearr_26208_26236[(1)] = (14));
} else
{var statearr_26209_26237 = state_26186__$1;(statearr_26209_26237[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (9)))
{var inst_26179 = (state_26186[(2)]);var state_26186__$1 = (function (){var statearr_26210 = state_26186;(statearr_26210[(15)] = inst_26179);
return statearr_26210;
})();var statearr_26211_26238 = state_26186__$1;(statearr_26211_26238[(2)] = null);
(statearr_26211_26238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (5)))
{var inst_26135 = cljs.core.async.close_BANG_.call(null,out);var state_26186__$1 = state_26186;var statearr_26212_26239 = state_26186__$1;(statearr_26212_26239[(2)] = inst_26135);
(statearr_26212_26239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (14)))
{var inst_26157 = (state_26186[(7)]);var inst_26159 = cljs.core.chunked_seq_QMARK_.call(null,inst_26157);var state_26186__$1 = state_26186;if(inst_26159)
{var statearr_26213_26240 = state_26186__$1;(statearr_26213_26240[(1)] = (17));
} else
{var statearr_26214_26241 = state_26186__$1;(statearr_26214_26241[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (16)))
{var inst_26175 = (state_26186[(2)]);var state_26186__$1 = state_26186;var statearr_26215_26242 = state_26186__$1;(statearr_26215_26242[(2)] = inst_26175);
(statearr_26215_26242[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26187 === (10)))
{var inst_26146 = (state_26186[(10)]);var inst_26144 = (state_26186[(12)]);var inst_26151 = cljs.core._nth.call(null,inst_26144,inst_26146);var state_26186__$1 = state_26186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26186__$1,(13),out,inst_26151);
} else
{if((state_val_26187 === (18)))
{var inst_26157 = (state_26186[(7)]);var inst_26166 = cljs.core.first.call(null,inst_26157);var state_26186__$1 = state_26186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26186__$1,(20),out,inst_26166);
} else
{if((state_val_26187 === (8)))
{var inst_26146 = (state_26186[(10)]);var inst_26145 = (state_26186[(11)]);var inst_26148 = (inst_26146 < inst_26145);var inst_26149 = inst_26148;var state_26186__$1 = state_26186;if(cljs.core.truth_(inst_26149))
{var statearr_26216_26243 = state_26186__$1;(statearr_26216_26243[(1)] = (10));
} else
{var statearr_26217_26244 = state_26186__$1;(statearr_26217_26244[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_26221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26221[(0)] = state_machine__5679__auto__);
(statearr_26221[(1)] = (1));
return statearr_26221;
});
var state_machine__5679__auto____1 = (function (state_26186){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26186);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26222){if((e26222 instanceof Object))
{var ex__5682__auto__ = e26222;var statearr_26223_26245 = state_26186;(statearr_26223_26245[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26186);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26246 = state_26186;
state_26186 = G__26246;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26186){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_26224 = f__5694__auto__.call(null);(statearr_26224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_26224;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___26327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26327){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26327){
return (function (state_26306){var state_val_26307 = (state_26306[(1)]);if((state_val_26307 === (7)))
{var inst_26302 = (state_26306[(2)]);var state_26306__$1 = state_26306;var statearr_26308_26328 = state_26306__$1;(statearr_26308_26328[(2)] = inst_26302);
(statearr_26308_26328[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (1)))
{var state_26306__$1 = state_26306;var statearr_26309_26329 = state_26306__$1;(statearr_26309_26329[(2)] = null);
(statearr_26309_26329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (4)))
{var inst_26289 = (state_26306[(7)]);var inst_26289__$1 = (state_26306[(2)]);var inst_26290 = (inst_26289__$1 == null);var state_26306__$1 = (function (){var statearr_26310 = state_26306;(statearr_26310[(7)] = inst_26289__$1);
return statearr_26310;
})();if(cljs.core.truth_(inst_26290))
{var statearr_26311_26330 = state_26306__$1;(statearr_26311_26330[(1)] = (5));
} else
{var statearr_26312_26331 = state_26306__$1;(statearr_26312_26331[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (6)))
{var inst_26289 = (state_26306[(7)]);var state_26306__$1 = state_26306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26306__$1,(11),to,inst_26289);
} else
{if((state_val_26307 === (3)))
{var inst_26304 = (state_26306[(2)]);var state_26306__$1 = state_26306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26306__$1,inst_26304);
} else
{if((state_val_26307 === (2)))
{var state_26306__$1 = state_26306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26306__$1,(4),from);
} else
{if((state_val_26307 === (11)))
{var inst_26299 = (state_26306[(2)]);var state_26306__$1 = (function (){var statearr_26313 = state_26306;(statearr_26313[(8)] = inst_26299);
return statearr_26313;
})();var statearr_26314_26332 = state_26306__$1;(statearr_26314_26332[(2)] = null);
(statearr_26314_26332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (9)))
{var state_26306__$1 = state_26306;var statearr_26315_26333 = state_26306__$1;(statearr_26315_26333[(2)] = null);
(statearr_26315_26333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (5)))
{var state_26306__$1 = state_26306;if(cljs.core.truth_(close_QMARK_))
{var statearr_26316_26334 = state_26306__$1;(statearr_26316_26334[(1)] = (8));
} else
{var statearr_26317_26335 = state_26306__$1;(statearr_26317_26335[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (10)))
{var inst_26296 = (state_26306[(2)]);var state_26306__$1 = state_26306;var statearr_26318_26336 = state_26306__$1;(statearr_26318_26336[(2)] = inst_26296);
(statearr_26318_26336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26307 === (8)))
{var inst_26293 = cljs.core.async.close_BANG_.call(null,to);var state_26306__$1 = state_26306;var statearr_26319_26337 = state_26306__$1;(statearr_26319_26337[(2)] = inst_26293);
(statearr_26319_26337[(1)] = (10));
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
});})(c__5693__auto___26327))
;return ((function (switch__5678__auto__,c__5693__auto___26327){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26323 = [null,null,null,null,null,null,null,null,null];(statearr_26323[(0)] = state_machine__5679__auto__);
(statearr_26323[(1)] = (1));
return statearr_26323;
});
var state_machine__5679__auto____1 = (function (state_26306){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26306);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26324){if((e26324 instanceof Object))
{var ex__5682__auto__ = e26324;var statearr_26325_26338 = state_26306;(statearr_26325_26338[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26339 = state_26306;
state_26306 = G__26339;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26306){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26327))
})();var state__5695__auto__ = (function (){var statearr_26326 = f__5694__auto__.call(null);(statearr_26326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26327);
return statearr_26326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26327))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___26426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26426,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26426,tc,fc){
return (function (state_26404){var state_val_26405 = (state_26404[(1)]);if((state_val_26405 === (7)))
{var inst_26400 = (state_26404[(2)]);var state_26404__$1 = state_26404;var statearr_26406_26427 = state_26404__$1;(statearr_26406_26427[(2)] = inst_26400);
(statearr_26406_26427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (1)))
{var state_26404__$1 = state_26404;var statearr_26407_26428 = state_26404__$1;(statearr_26407_26428[(2)] = null);
(statearr_26407_26428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (4)))
{var inst_26385 = (state_26404[(7)]);var inst_26385__$1 = (state_26404[(2)]);var inst_26386 = (inst_26385__$1 == null);var state_26404__$1 = (function (){var statearr_26408 = state_26404;(statearr_26408[(7)] = inst_26385__$1);
return statearr_26408;
})();if(cljs.core.truth_(inst_26386))
{var statearr_26409_26429 = state_26404__$1;(statearr_26409_26429[(1)] = (5));
} else
{var statearr_26410_26430 = state_26404__$1;(statearr_26410_26430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (6)))
{var inst_26385 = (state_26404[(7)]);var inst_26391 = p.call(null,inst_26385);var state_26404__$1 = state_26404;if(cljs.core.truth_(inst_26391))
{var statearr_26411_26431 = state_26404__$1;(statearr_26411_26431[(1)] = (9));
} else
{var statearr_26412_26432 = state_26404__$1;(statearr_26412_26432[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (3)))
{var inst_26402 = (state_26404[(2)]);var state_26404__$1 = state_26404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26404__$1,inst_26402);
} else
{if((state_val_26405 === (2)))
{var state_26404__$1 = state_26404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(4),ch);
} else
{if((state_val_26405 === (11)))
{var inst_26385 = (state_26404[(7)]);var inst_26395 = (state_26404[(2)]);var state_26404__$1 = state_26404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26404__$1,(8),inst_26395,inst_26385);
} else
{if((state_val_26405 === (9)))
{var state_26404__$1 = state_26404;var statearr_26413_26433 = state_26404__$1;(statearr_26413_26433[(2)] = tc);
(statearr_26413_26433[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (5)))
{var inst_26388 = cljs.core.async.close_BANG_.call(null,tc);var inst_26389 = cljs.core.async.close_BANG_.call(null,fc);var state_26404__$1 = (function (){var statearr_26414 = state_26404;(statearr_26414[(8)] = inst_26388);
return statearr_26414;
})();var statearr_26415_26434 = state_26404__$1;(statearr_26415_26434[(2)] = inst_26389);
(statearr_26415_26434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (10)))
{var state_26404__$1 = state_26404;var statearr_26416_26435 = state_26404__$1;(statearr_26416_26435[(2)] = fc);
(statearr_26416_26435[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26405 === (8)))
{var inst_26397 = (state_26404[(2)]);var state_26404__$1 = (function (){var statearr_26417 = state_26404;(statearr_26417[(9)] = inst_26397);
return statearr_26417;
})();var statearr_26418_26436 = state_26404__$1;(statearr_26418_26436[(2)] = null);
(statearr_26418_26436[(1)] = (2));
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
});})(c__5693__auto___26426,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___26426,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26422 = [null,null,null,null,null,null,null,null,null,null];(statearr_26422[(0)] = state_machine__5679__auto__);
(statearr_26422[(1)] = (1));
return statearr_26422;
});
var state_machine__5679__auto____1 = (function (state_26404){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26404);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object))
{var ex__5682__auto__ = e26423;var statearr_26424_26437 = state_26404;(statearr_26424_26437[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26438 = state_26404;
state_26404 = G__26438;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26404){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26426,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_26425 = f__5694__auto__.call(null);(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26426);
return statearr_26425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26426,tc,fc))
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
return (function (state_26485){var state_val_26486 = (state_26485[(1)]);if((state_val_26486 === (7)))
{var inst_26481 = (state_26485[(2)]);var state_26485__$1 = state_26485;var statearr_26487_26503 = state_26485__$1;(statearr_26487_26503[(2)] = inst_26481);
(statearr_26487_26503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26486 === (6)))
{var inst_26471 = (state_26485[(7)]);var inst_26474 = (state_26485[(8)]);var inst_26478 = f.call(null,inst_26471,inst_26474);var inst_26471__$1 = inst_26478;var state_26485__$1 = (function (){var statearr_26488 = state_26485;(statearr_26488[(7)] = inst_26471__$1);
return statearr_26488;
})();var statearr_26489_26504 = state_26485__$1;(statearr_26489_26504[(2)] = null);
(statearr_26489_26504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26486 === (5)))
{var inst_26471 = (state_26485[(7)]);var state_26485__$1 = state_26485;var statearr_26490_26505 = state_26485__$1;(statearr_26490_26505[(2)] = inst_26471);
(statearr_26490_26505[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26486 === (4)))
{var inst_26474 = (state_26485[(8)]);var inst_26474__$1 = (state_26485[(2)]);var inst_26475 = (inst_26474__$1 == null);var state_26485__$1 = (function (){var statearr_26491 = state_26485;(statearr_26491[(8)] = inst_26474__$1);
return statearr_26491;
})();if(cljs.core.truth_(inst_26475))
{var statearr_26492_26506 = state_26485__$1;(statearr_26492_26506[(1)] = (5));
} else
{var statearr_26493_26507 = state_26485__$1;(statearr_26493_26507[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26486 === (3)))
{var inst_26483 = (state_26485[(2)]);var state_26485__$1 = state_26485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26485__$1,inst_26483);
} else
{if((state_val_26486 === (2)))
{var state_26485__$1 = state_26485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26485__$1,(4),ch);
} else
{if((state_val_26486 === (1)))
{var inst_26471 = init;var state_26485__$1 = (function (){var statearr_26494 = state_26485;(statearr_26494[(7)] = inst_26471);
return statearr_26494;
})();var statearr_26495_26508 = state_26485__$1;(statearr_26495_26508[(2)] = null);
(statearr_26495_26508[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_26499 = [null,null,null,null,null,null,null,null,null];(statearr_26499[(0)] = state_machine__5679__auto__);
(statearr_26499[(1)] = (1));
return statearr_26499;
});
var state_machine__5679__auto____1 = (function (state_26485){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26485);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object))
{var ex__5682__auto__ = e26500;var statearr_26501_26509 = state_26485;(statearr_26501_26509[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26510 = state_26485;
state_26485 = G__26510;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26485){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_26502 = f__5694__auto__.call(null);(statearr_26502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_26502;
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
return (function (state_26572){var state_val_26573 = (state_26572[(1)]);if((state_val_26573 === (7)))
{var inst_26553 = (state_26572[(7)]);var inst_26558 = (state_26572[(2)]);var inst_26559 = cljs.core.next.call(null,inst_26553);var inst_26553__$1 = inst_26559;var state_26572__$1 = (function (){var statearr_26574 = state_26572;(statearr_26574[(7)] = inst_26553__$1);
(statearr_26574[(8)] = inst_26558);
return statearr_26574;
})();var statearr_26575_26593 = state_26572__$1;(statearr_26575_26593[(2)] = null);
(statearr_26575_26593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (1)))
{var inst_26552 = cljs.core.seq.call(null,coll);var inst_26553 = inst_26552;var state_26572__$1 = (function (){var statearr_26576 = state_26572;(statearr_26576[(7)] = inst_26553);
return statearr_26576;
})();var statearr_26577_26594 = state_26572__$1;(statearr_26577_26594[(2)] = null);
(statearr_26577_26594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (4)))
{var inst_26553 = (state_26572[(7)]);var inst_26556 = cljs.core.first.call(null,inst_26553);var state_26572__$1 = state_26572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26572__$1,(7),ch,inst_26556);
} else
{if((state_val_26573 === (6)))
{var inst_26568 = (state_26572[(2)]);var state_26572__$1 = state_26572;var statearr_26578_26595 = state_26572__$1;(statearr_26578_26595[(2)] = inst_26568);
(statearr_26578_26595[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (3)))
{var inst_26570 = (state_26572[(2)]);var state_26572__$1 = state_26572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26572__$1,inst_26570);
} else
{if((state_val_26573 === (2)))
{var inst_26553 = (state_26572[(7)]);var state_26572__$1 = state_26572;if(cljs.core.truth_(inst_26553))
{var statearr_26579_26596 = state_26572__$1;(statearr_26579_26596[(1)] = (4));
} else
{var statearr_26580_26597 = state_26572__$1;(statearr_26580_26597[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (9)))
{var state_26572__$1 = state_26572;var statearr_26581_26598 = state_26572__$1;(statearr_26581_26598[(2)] = null);
(statearr_26581_26598[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (5)))
{var state_26572__$1 = state_26572;if(cljs.core.truth_(close_QMARK_))
{var statearr_26582_26599 = state_26572__$1;(statearr_26582_26599[(1)] = (8));
} else
{var statearr_26583_26600 = state_26572__$1;(statearr_26583_26600[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (10)))
{var inst_26566 = (state_26572[(2)]);var state_26572__$1 = state_26572;var statearr_26584_26601 = state_26572__$1;(statearr_26584_26601[(2)] = inst_26566);
(statearr_26584_26601[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26573 === (8)))
{var inst_26563 = cljs.core.async.close_BANG_.call(null,ch);var state_26572__$1 = state_26572;var statearr_26585_26602 = state_26572__$1;(statearr_26585_26602[(2)] = inst_26563);
(statearr_26585_26602[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_26589 = [null,null,null,null,null,null,null,null,null];(statearr_26589[(0)] = state_machine__5679__auto__);
(statearr_26589[(1)] = (1));
return statearr_26589;
});
var state_machine__5679__auto____1 = (function (state_26572){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26572);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26590){if((e26590 instanceof Object))
{var ex__5682__auto__ = e26590;var statearr_26591_26603 = state_26572;(statearr_26591_26603[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26604 = state_26572;
state_26572 = G__26604;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26572){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_26592 = f__5694__auto__.call(null);(statearr_26592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_26592;
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
cljs.core.async.Mux = (function (){var obj26606 = {};return obj26606;
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
cljs.core.async.Mult = (function (){var obj26608 = {};return obj26608;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26832 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26832 = (function (cs,ch,mult,meta26833){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26833 = meta26833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26832.cljs$lang$type = true;
cljs.core.async.t26832.cljs$lang$ctorStr = "cljs.core.async/t26832";
cljs.core.async.t26832.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26832");
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26832.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26834){var self__ = this;
var _26834__$1 = this;return self__.meta26833;
});})(cs))
;
cljs.core.async.t26832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26834,meta26833__$1){var self__ = this;
var _26834__$1 = this;return (new cljs.core.async.t26832(self__.cs,self__.ch,self__.mult,meta26833__$1));
});})(cs))
;
cljs.core.async.__GT_t26832 = ((function (cs){
return (function __GT_t26832(cs__$1,ch__$1,mult__$1,meta26833){return (new cljs.core.async.t26832(cs__$1,ch__$1,mult__$1,meta26833));
});})(cs))
;
}
return (new cljs.core.async.t26832(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___27055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27055,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27055,cs,m,dchan,dctr,done){
return (function (state_26969){var state_val_26970 = (state_26969[(1)]);if((state_val_26970 === (7)))
{var inst_26965 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_26971_27056 = state_26969__$1;(statearr_26971_27056[(2)] = inst_26965);
(statearr_26971_27056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (20)))
{var inst_26866 = (state_26969[(7)]);var inst_26876 = cljs.core.first.call(null,inst_26866);var inst_26877 = cljs.core.nth.call(null,inst_26876,(0),null);var inst_26878 = cljs.core.nth.call(null,inst_26876,(1),null);var state_26969__$1 = (function (){var statearr_26972 = state_26969;(statearr_26972[(8)] = inst_26877);
return statearr_26972;
})();if(cljs.core.truth_(inst_26878))
{var statearr_26973_27057 = state_26969__$1;(statearr_26973_27057[(1)] = (22));
} else
{var statearr_26974_27058 = state_26969__$1;(statearr_26974_27058[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (27)))
{var inst_26908 = (state_26969[(9)]);var inst_26906 = (state_26969[(10)]);var inst_26913 = cljs.core._nth.call(null,inst_26906,inst_26908);var state_26969__$1 = (function (){var statearr_26975 = state_26969;(statearr_26975[(11)] = inst_26913);
return statearr_26975;
})();var statearr_26976_27059 = state_26969__$1;(statearr_26976_27059[(2)] = null);
(statearr_26976_27059[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (1)))
{var state_26969__$1 = state_26969;var statearr_26977_27060 = state_26969__$1;(statearr_26977_27060[(2)] = null);
(statearr_26977_27060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (24)))
{var inst_26866 = (state_26969[(7)]);var inst_26883 = (state_26969[(2)]);var inst_26884 = cljs.core.next.call(null,inst_26866);var inst_26846 = inst_26884;var inst_26847 = null;var inst_26848 = (0);var inst_26849 = (0);var state_26969__$1 = (function (){var statearr_26978 = state_26969;(statearr_26978[(12)] = inst_26883);
(statearr_26978[(13)] = inst_26849);
(statearr_26978[(14)] = inst_26847);
(statearr_26978[(15)] = inst_26848);
(statearr_26978[(16)] = inst_26846);
return statearr_26978;
})();var statearr_26979_27061 = state_26969__$1;(statearr_26979_27061[(2)] = null);
(statearr_26979_27061[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (39)))
{var inst_26926 = (state_26969[(17)]);var inst_26944 = (state_26969[(2)]);var inst_26945 = cljs.core.next.call(null,inst_26926);var inst_26905 = inst_26945;var inst_26906 = null;var inst_26907 = (0);var inst_26908 = (0);var state_26969__$1 = (function (){var statearr_26983 = state_26969;(statearr_26983[(9)] = inst_26908);
(statearr_26983[(10)] = inst_26906);
(statearr_26983[(18)] = inst_26907);
(statearr_26983[(19)] = inst_26905);
(statearr_26983[(20)] = inst_26944);
return statearr_26983;
})();var statearr_26984_27062 = state_26969__$1;(statearr_26984_27062[(2)] = null);
(statearr_26984_27062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (4)))
{var inst_26837 = (state_26969[(21)]);var inst_26837__$1 = (state_26969[(2)]);var inst_26838 = (inst_26837__$1 == null);var state_26969__$1 = (function (){var statearr_26985 = state_26969;(statearr_26985[(21)] = inst_26837__$1);
return statearr_26985;
})();if(cljs.core.truth_(inst_26838))
{var statearr_26986_27063 = state_26969__$1;(statearr_26986_27063[(1)] = (5));
} else
{var statearr_26987_27064 = state_26969__$1;(statearr_26987_27064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (15)))
{var inst_26849 = (state_26969[(13)]);var inst_26847 = (state_26969[(14)]);var inst_26848 = (state_26969[(15)]);var inst_26846 = (state_26969[(16)]);var inst_26862 = (state_26969[(2)]);var inst_26863 = (inst_26849 + (1));var tmp26980 = inst_26847;var tmp26981 = inst_26848;var tmp26982 = inst_26846;var inst_26846__$1 = tmp26982;var inst_26847__$1 = tmp26980;var inst_26848__$1 = tmp26981;var inst_26849__$1 = inst_26863;var state_26969__$1 = (function (){var statearr_26988 = state_26969;(statearr_26988[(13)] = inst_26849__$1);
(statearr_26988[(22)] = inst_26862);
(statearr_26988[(14)] = inst_26847__$1);
(statearr_26988[(15)] = inst_26848__$1);
(statearr_26988[(16)] = inst_26846__$1);
return statearr_26988;
})();var statearr_26989_27065 = state_26969__$1;(statearr_26989_27065[(2)] = null);
(statearr_26989_27065[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (21)))
{var inst_26887 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_26990_27066 = state_26969__$1;(statearr_26990_27066[(2)] = inst_26887);
(statearr_26990_27066[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (31)))
{var inst_26913 = (state_26969[(11)]);var inst_26914 = (state_26969[(2)]);var inst_26915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26916 = cljs.core.async.untap_STAR_.call(null,m,inst_26913);var state_26969__$1 = (function (){var statearr_26991 = state_26969;(statearr_26991[(23)] = inst_26914);
(statearr_26991[(24)] = inst_26915);
return statearr_26991;
})();var statearr_26992_27067 = state_26969__$1;(statearr_26992_27067[(2)] = inst_26916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (32)))
{var inst_26913 = (state_26969[(11)]);var inst_26837 = (state_26969[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26969,(31),Object,null,(30));var inst_26920 = cljs.core.async.put_BANG_.call(null,inst_26913,inst_26837,done);var state_26969__$1 = state_26969;var statearr_26993_27068 = state_26969__$1;(statearr_26993_27068[(2)] = inst_26920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (40)))
{var inst_26935 = (state_26969[(25)]);var inst_26936 = (state_26969[(2)]);var inst_26937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26938 = cljs.core.async.untap_STAR_.call(null,m,inst_26935);var state_26969__$1 = (function (){var statearr_26994 = state_26969;(statearr_26994[(26)] = inst_26937);
(statearr_26994[(27)] = inst_26936);
return statearr_26994;
})();var statearr_26995_27069 = state_26969__$1;(statearr_26995_27069[(2)] = inst_26938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (33)))
{var inst_26926 = (state_26969[(17)]);var inst_26928 = cljs.core.chunked_seq_QMARK_.call(null,inst_26926);var state_26969__$1 = state_26969;if(inst_26928)
{var statearr_26996_27070 = state_26969__$1;(statearr_26996_27070[(1)] = (36));
} else
{var statearr_26997_27071 = state_26969__$1;(statearr_26997_27071[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (13)))
{var inst_26856 = (state_26969[(28)]);var inst_26859 = cljs.core.async.close_BANG_.call(null,inst_26856);var state_26969__$1 = state_26969;var statearr_26998_27072 = state_26969__$1;(statearr_26998_27072[(2)] = inst_26859);
(statearr_26998_27072[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (22)))
{var inst_26877 = (state_26969[(8)]);var inst_26880 = cljs.core.async.close_BANG_.call(null,inst_26877);var state_26969__$1 = state_26969;var statearr_26999_27073 = state_26969__$1;(statearr_26999_27073[(2)] = inst_26880);
(statearr_26999_27073[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (36)))
{var inst_26926 = (state_26969[(17)]);var inst_26930 = cljs.core.chunk_first.call(null,inst_26926);var inst_26931 = cljs.core.chunk_rest.call(null,inst_26926);var inst_26932 = cljs.core.count.call(null,inst_26930);var inst_26905 = inst_26931;var inst_26906 = inst_26930;var inst_26907 = inst_26932;var inst_26908 = (0);var state_26969__$1 = (function (){var statearr_27000 = state_26969;(statearr_27000[(9)] = inst_26908);
(statearr_27000[(10)] = inst_26906);
(statearr_27000[(18)] = inst_26907);
(statearr_27000[(19)] = inst_26905);
return statearr_27000;
})();var statearr_27001_27074 = state_26969__$1;(statearr_27001_27074[(2)] = null);
(statearr_27001_27074[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (41)))
{var inst_26837 = (state_26969[(21)]);var inst_26935 = (state_26969[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26969,(40),Object,null,(39));var inst_26942 = cljs.core.async.put_BANG_.call(null,inst_26935,inst_26837,done);var state_26969__$1 = state_26969;var statearr_27002_27075 = state_26969__$1;(statearr_27002_27075[(2)] = inst_26942);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (43)))
{var state_26969__$1 = state_26969;var statearr_27003_27076 = state_26969__$1;(statearr_27003_27076[(2)] = null);
(statearr_27003_27076[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (29)))
{var inst_26953 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27004_27077 = state_26969__$1;(statearr_27004_27077[(2)] = inst_26953);
(statearr_27004_27077[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (44)))
{var inst_26962 = (state_26969[(2)]);var state_26969__$1 = (function (){var statearr_27005 = state_26969;(statearr_27005[(29)] = inst_26962);
return statearr_27005;
})();var statearr_27006_27078 = state_26969__$1;(statearr_27006_27078[(2)] = null);
(statearr_27006_27078[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (6)))
{var inst_26897 = (state_26969[(30)]);var inst_26896 = cljs.core.deref.call(null,cs);var inst_26897__$1 = cljs.core.keys.call(null,inst_26896);var inst_26898 = cljs.core.count.call(null,inst_26897__$1);var inst_26899 = cljs.core.reset_BANG_.call(null,dctr,inst_26898);var inst_26904 = cljs.core.seq.call(null,inst_26897__$1);var inst_26905 = inst_26904;var inst_26906 = null;var inst_26907 = (0);var inst_26908 = (0);var state_26969__$1 = (function (){var statearr_27007 = state_26969;(statearr_27007[(9)] = inst_26908);
(statearr_27007[(30)] = inst_26897__$1);
(statearr_27007[(10)] = inst_26906);
(statearr_27007[(18)] = inst_26907);
(statearr_27007[(31)] = inst_26899);
(statearr_27007[(19)] = inst_26905);
return statearr_27007;
})();var statearr_27008_27079 = state_26969__$1;(statearr_27008_27079[(2)] = null);
(statearr_27008_27079[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (28)))
{var inst_26926 = (state_26969[(17)]);var inst_26905 = (state_26969[(19)]);var inst_26926__$1 = cljs.core.seq.call(null,inst_26905);var state_26969__$1 = (function (){var statearr_27009 = state_26969;(statearr_27009[(17)] = inst_26926__$1);
return statearr_27009;
})();if(inst_26926__$1)
{var statearr_27010_27080 = state_26969__$1;(statearr_27010_27080[(1)] = (33));
} else
{var statearr_27011_27081 = state_26969__$1;(statearr_27011_27081[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (25)))
{var inst_26908 = (state_26969[(9)]);var inst_26907 = (state_26969[(18)]);var inst_26910 = (inst_26908 < inst_26907);var inst_26911 = inst_26910;var state_26969__$1 = state_26969;if(cljs.core.truth_(inst_26911))
{var statearr_27012_27082 = state_26969__$1;(statearr_27012_27082[(1)] = (27));
} else
{var statearr_27013_27083 = state_26969__$1;(statearr_27013_27083[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (34)))
{var state_26969__$1 = state_26969;var statearr_27014_27084 = state_26969__$1;(statearr_27014_27084[(2)] = null);
(statearr_27014_27084[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (17)))
{var state_26969__$1 = state_26969;var statearr_27015_27085 = state_26969__$1;(statearr_27015_27085[(2)] = null);
(statearr_27015_27085[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (3)))
{var inst_26967 = (state_26969[(2)]);var state_26969__$1 = state_26969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26969__$1,inst_26967);
} else
{if((state_val_26970 === (12)))
{var inst_26892 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27016_27086 = state_26969__$1;(statearr_27016_27086[(2)] = inst_26892);
(statearr_27016_27086[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (2)))
{var state_26969__$1 = state_26969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(4),ch);
} else
{if((state_val_26970 === (23)))
{var state_26969__$1 = state_26969;var statearr_27017_27087 = state_26969__$1;(statearr_27017_27087[(2)] = null);
(statearr_27017_27087[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (35)))
{var inst_26951 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27018_27088 = state_26969__$1;(statearr_27018_27088[(2)] = inst_26951);
(statearr_27018_27088[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (19)))
{var inst_26866 = (state_26969[(7)]);var inst_26870 = cljs.core.chunk_first.call(null,inst_26866);var inst_26871 = cljs.core.chunk_rest.call(null,inst_26866);var inst_26872 = cljs.core.count.call(null,inst_26870);var inst_26846 = inst_26871;var inst_26847 = inst_26870;var inst_26848 = inst_26872;var inst_26849 = (0);var state_26969__$1 = (function (){var statearr_27019 = state_26969;(statearr_27019[(13)] = inst_26849);
(statearr_27019[(14)] = inst_26847);
(statearr_27019[(15)] = inst_26848);
(statearr_27019[(16)] = inst_26846);
return statearr_27019;
})();var statearr_27020_27089 = state_26969__$1;(statearr_27020_27089[(2)] = null);
(statearr_27020_27089[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (11)))
{var inst_26846 = (state_26969[(16)]);var inst_26866 = (state_26969[(7)]);var inst_26866__$1 = cljs.core.seq.call(null,inst_26846);var state_26969__$1 = (function (){var statearr_27021 = state_26969;(statearr_27021[(7)] = inst_26866__$1);
return statearr_27021;
})();if(inst_26866__$1)
{var statearr_27022_27090 = state_26969__$1;(statearr_27022_27090[(1)] = (16));
} else
{var statearr_27023_27091 = state_26969__$1;(statearr_27023_27091[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (9)))
{var inst_26894 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27024_27092 = state_26969__$1;(statearr_27024_27092[(2)] = inst_26894);
(statearr_27024_27092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (5)))
{var inst_26844 = cljs.core.deref.call(null,cs);var inst_26845 = cljs.core.seq.call(null,inst_26844);var inst_26846 = inst_26845;var inst_26847 = null;var inst_26848 = (0);var inst_26849 = (0);var state_26969__$1 = (function (){var statearr_27025 = state_26969;(statearr_27025[(13)] = inst_26849);
(statearr_27025[(14)] = inst_26847);
(statearr_27025[(15)] = inst_26848);
(statearr_27025[(16)] = inst_26846);
return statearr_27025;
})();var statearr_27026_27093 = state_26969__$1;(statearr_27026_27093[(2)] = null);
(statearr_27026_27093[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (14)))
{var state_26969__$1 = state_26969;var statearr_27027_27094 = state_26969__$1;(statearr_27027_27094[(2)] = null);
(statearr_27027_27094[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (45)))
{var inst_26959 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27028_27095 = state_26969__$1;(statearr_27028_27095[(2)] = inst_26959);
(statearr_27028_27095[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (26)))
{var inst_26897 = (state_26969[(30)]);var inst_26955 = (state_26969[(2)]);var inst_26956 = cljs.core.seq.call(null,inst_26897);var state_26969__$1 = (function (){var statearr_27029 = state_26969;(statearr_27029[(32)] = inst_26955);
return statearr_27029;
})();if(inst_26956)
{var statearr_27030_27096 = state_26969__$1;(statearr_27030_27096[(1)] = (42));
} else
{var statearr_27031_27097 = state_26969__$1;(statearr_27031_27097[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (16)))
{var inst_26866 = (state_26969[(7)]);var inst_26868 = cljs.core.chunked_seq_QMARK_.call(null,inst_26866);var state_26969__$1 = state_26969;if(inst_26868)
{var statearr_27035_27098 = state_26969__$1;(statearr_27035_27098[(1)] = (19));
} else
{var statearr_27036_27099 = state_26969__$1;(statearr_27036_27099[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (38)))
{var inst_26948 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27037_27100 = state_26969__$1;(statearr_27037_27100[(2)] = inst_26948);
(statearr_27037_27100[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (30)))
{var inst_26908 = (state_26969[(9)]);var inst_26906 = (state_26969[(10)]);var inst_26907 = (state_26969[(18)]);var inst_26905 = (state_26969[(19)]);var inst_26922 = (state_26969[(2)]);var inst_26923 = (inst_26908 + (1));var tmp27032 = inst_26906;var tmp27033 = inst_26907;var tmp27034 = inst_26905;var inst_26905__$1 = tmp27034;var inst_26906__$1 = tmp27032;var inst_26907__$1 = tmp27033;var inst_26908__$1 = inst_26923;var state_26969__$1 = (function (){var statearr_27038 = state_26969;(statearr_27038[(9)] = inst_26908__$1);
(statearr_27038[(33)] = inst_26922);
(statearr_27038[(10)] = inst_26906__$1);
(statearr_27038[(18)] = inst_26907__$1);
(statearr_27038[(19)] = inst_26905__$1);
return statearr_27038;
})();var statearr_27039_27101 = state_26969__$1;(statearr_27039_27101[(2)] = null);
(statearr_27039_27101[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (10)))
{var inst_26849 = (state_26969[(13)]);var inst_26847 = (state_26969[(14)]);var inst_26855 = cljs.core._nth.call(null,inst_26847,inst_26849);var inst_26856 = cljs.core.nth.call(null,inst_26855,(0),null);var inst_26857 = cljs.core.nth.call(null,inst_26855,(1),null);var state_26969__$1 = (function (){var statearr_27040 = state_26969;(statearr_27040[(28)] = inst_26856);
return statearr_27040;
})();if(cljs.core.truth_(inst_26857))
{var statearr_27041_27102 = state_26969__$1;(statearr_27041_27102[(1)] = (13));
} else
{var statearr_27042_27103 = state_26969__$1;(statearr_27042_27103[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (18)))
{var inst_26890 = (state_26969[(2)]);var state_26969__$1 = state_26969;var statearr_27043_27104 = state_26969__$1;(statearr_27043_27104[(2)] = inst_26890);
(statearr_27043_27104[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (42)))
{var state_26969__$1 = state_26969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(45),dchan);
} else
{if((state_val_26970 === (37)))
{var inst_26926 = (state_26969[(17)]);var inst_26935 = cljs.core.first.call(null,inst_26926);var state_26969__$1 = (function (){var statearr_27044 = state_26969;(statearr_27044[(25)] = inst_26935);
return statearr_27044;
})();var statearr_27045_27105 = state_26969__$1;(statearr_27045_27105[(2)] = null);
(statearr_27045_27105[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26970 === (8)))
{var inst_26849 = (state_26969[(13)]);var inst_26848 = (state_26969[(15)]);var inst_26851 = (inst_26849 < inst_26848);var inst_26852 = inst_26851;var state_26969__$1 = state_26969;if(cljs.core.truth_(inst_26852))
{var statearr_27046_27106 = state_26969__$1;(statearr_27046_27106[(1)] = (10));
} else
{var statearr_27047_27107 = state_26969__$1;(statearr_27047_27107[(1)] = (11));
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
});})(c__5693__auto___27055,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___27055,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27051[(0)] = state_machine__5679__auto__);
(statearr_27051[(1)] = (1));
return statearr_27051;
});
var state_machine__5679__auto____1 = (function (state_26969){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27052){if((e27052 instanceof Object))
{var ex__5682__auto__ = e27052;var statearr_27053_27108 = state_26969;(statearr_27053_27108[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27109 = state_26969;
state_26969 = G__27109;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26969){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27055,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_27054 = f__5694__auto__.call(null);(statearr_27054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27055);
return statearr_27054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27055,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj27111 = {};return obj27111;
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
;var m = (function (){if(typeof cljs.core.async.t27221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27221 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27222){
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
this.meta27222 = meta27222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27221.cljs$lang$type = true;
cljs.core.async.t27221.cljs$lang$ctorStr = "cljs.core.async/t27221";
cljs.core.async.t27221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27223){var self__ = this;
var _27223__$1 = this;return self__.meta27222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27223,meta27222__$1){var self__ = this;
var _27223__$1 = this;return (new cljs.core.async.t27221(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27221(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27222){return (new cljs.core.async.t27221(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27221(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___27330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27288){var state_val_27289 = (state_27288[(1)]);if((state_val_27289 === (7)))
{var inst_27237 = (state_27288[(7)]);var inst_27242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27237);var state_27288__$1 = state_27288;var statearr_27290_27331 = state_27288__$1;(statearr_27290_27331[(2)] = inst_27242);
(statearr_27290_27331[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (20)))
{var inst_27252 = (state_27288[(8)]);var state_27288__$1 = state_27288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27288__$1,(23),out,inst_27252);
} else
{if((state_val_27289 === (1)))
{var inst_27227 = (state_27288[(9)]);var inst_27227__$1 = calc_state.call(null);var inst_27228 = cljs.core.seq_QMARK_.call(null,inst_27227__$1);var state_27288__$1 = (function (){var statearr_27291 = state_27288;(statearr_27291[(9)] = inst_27227__$1);
return statearr_27291;
})();if(inst_27228)
{var statearr_27292_27332 = state_27288__$1;(statearr_27292_27332[(1)] = (2));
} else
{var statearr_27293_27333 = state_27288__$1;(statearr_27293_27333[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (4)))
{var inst_27227 = (state_27288[(9)]);var inst_27233 = (state_27288[(2)]);var inst_27234 = cljs.core.get.call(null,inst_27233,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_27235 = cljs.core.get.call(null,inst_27233,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_27236 = cljs.core.get.call(null,inst_27233,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_27237 = inst_27227;var state_27288__$1 = (function (){var statearr_27294 = state_27288;(statearr_27294[(7)] = inst_27237);
(statearr_27294[(10)] = inst_27236);
(statearr_27294[(11)] = inst_27234);
(statearr_27294[(12)] = inst_27235);
return statearr_27294;
})();var statearr_27295_27334 = state_27288__$1;(statearr_27295_27334[(2)] = null);
(statearr_27295_27334[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (15)))
{var state_27288__$1 = state_27288;var statearr_27296_27335 = state_27288__$1;(statearr_27296_27335[(2)] = null);
(statearr_27296_27335[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (21)))
{var state_27288__$1 = state_27288;var statearr_27297_27336 = state_27288__$1;(statearr_27297_27336[(2)] = null);
(statearr_27297_27336[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (13)))
{var inst_27284 = (state_27288[(2)]);var state_27288__$1 = state_27288;var statearr_27298_27337 = state_27288__$1;(statearr_27298_27337[(2)] = inst_27284);
(statearr_27298_27337[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (22)))
{var inst_27245 = (state_27288[(13)]);var inst_27281 = (state_27288[(2)]);var inst_27237 = inst_27245;var state_27288__$1 = (function (){var statearr_27299 = state_27288;(statearr_27299[(7)] = inst_27237);
(statearr_27299[(14)] = inst_27281);
return statearr_27299;
})();var statearr_27300_27338 = state_27288__$1;(statearr_27300_27338[(2)] = null);
(statearr_27300_27338[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (6)))
{var inst_27286 = (state_27288[(2)]);var state_27288__$1 = state_27288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27288__$1,inst_27286);
} else
{if((state_val_27289 === (17)))
{var inst_27267 = (state_27288[(15)]);var state_27288__$1 = state_27288;var statearr_27301_27339 = state_27288__$1;(statearr_27301_27339[(2)] = inst_27267);
(statearr_27301_27339[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (3)))
{var inst_27227 = (state_27288[(9)]);var state_27288__$1 = state_27288;var statearr_27302_27340 = state_27288__$1;(statearr_27302_27340[(2)] = inst_27227);
(statearr_27302_27340[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (12)))
{var inst_27253 = (state_27288[(16)]);var inst_27248 = (state_27288[(17)]);var inst_27267 = (state_27288[(15)]);var inst_27267__$1 = inst_27248.call(null,inst_27253);var state_27288__$1 = (function (){var statearr_27303 = state_27288;(statearr_27303[(15)] = inst_27267__$1);
return statearr_27303;
})();if(cljs.core.truth_(inst_27267__$1))
{var statearr_27304_27341 = state_27288__$1;(statearr_27304_27341[(1)] = (17));
} else
{var statearr_27305_27342 = state_27288__$1;(statearr_27305_27342[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (2)))
{var inst_27227 = (state_27288[(9)]);var inst_27230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27227);var state_27288__$1 = state_27288;var statearr_27306_27343 = state_27288__$1;(statearr_27306_27343[(2)] = inst_27230);
(statearr_27306_27343[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (23)))
{var inst_27278 = (state_27288[(2)]);var state_27288__$1 = state_27288;var statearr_27307_27344 = state_27288__$1;(statearr_27307_27344[(2)] = inst_27278);
(statearr_27307_27344[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (19)))
{var inst_27275 = (state_27288[(2)]);var state_27288__$1 = state_27288;if(cljs.core.truth_(inst_27275))
{var statearr_27308_27345 = state_27288__$1;(statearr_27308_27345[(1)] = (20));
} else
{var statearr_27309_27346 = state_27288__$1;(statearr_27309_27346[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (11)))
{var inst_27252 = (state_27288[(8)]);var inst_27258 = (inst_27252 == null);var state_27288__$1 = state_27288;if(cljs.core.truth_(inst_27258))
{var statearr_27310_27347 = state_27288__$1;(statearr_27310_27347[(1)] = (14));
} else
{var statearr_27311_27348 = state_27288__$1;(statearr_27311_27348[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (9)))
{var inst_27245 = (state_27288[(13)]);var inst_27245__$1 = (state_27288[(2)]);var inst_27246 = cljs.core.get.call(null,inst_27245__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_27247 = cljs.core.get.call(null,inst_27245__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_27248 = cljs.core.get.call(null,inst_27245__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_27288__$1 = (function (){var statearr_27312 = state_27288;(statearr_27312[(13)] = inst_27245__$1);
(statearr_27312[(17)] = inst_27248);
(statearr_27312[(18)] = inst_27247);
return statearr_27312;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27288__$1,(10),inst_27246);
} else
{if((state_val_27289 === (5)))
{var inst_27237 = (state_27288[(7)]);var inst_27240 = cljs.core.seq_QMARK_.call(null,inst_27237);var state_27288__$1 = state_27288;if(inst_27240)
{var statearr_27313_27349 = state_27288__$1;(statearr_27313_27349[(1)] = (7));
} else
{var statearr_27314_27350 = state_27288__$1;(statearr_27314_27350[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (14)))
{var inst_27253 = (state_27288[(16)]);var inst_27260 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27253);var state_27288__$1 = state_27288;var statearr_27315_27351 = state_27288__$1;(statearr_27315_27351[(2)] = inst_27260);
(statearr_27315_27351[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (16)))
{var inst_27263 = (state_27288[(2)]);var inst_27264 = calc_state.call(null);var inst_27237 = inst_27264;var state_27288__$1 = (function (){var statearr_27316 = state_27288;(statearr_27316[(7)] = inst_27237);
(statearr_27316[(19)] = inst_27263);
return statearr_27316;
})();var statearr_27317_27352 = state_27288__$1;(statearr_27317_27352[(2)] = null);
(statearr_27317_27352[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (10)))
{var inst_27253 = (state_27288[(16)]);var inst_27252 = (state_27288[(8)]);var inst_27251 = (state_27288[(2)]);var inst_27252__$1 = cljs.core.nth.call(null,inst_27251,(0),null);var inst_27253__$1 = cljs.core.nth.call(null,inst_27251,(1),null);var inst_27254 = (inst_27252__$1 == null);var inst_27255 = cljs.core._EQ_.call(null,inst_27253__$1,change);var inst_27256 = (inst_27254) || (inst_27255);var state_27288__$1 = (function (){var statearr_27318 = state_27288;(statearr_27318[(16)] = inst_27253__$1);
(statearr_27318[(8)] = inst_27252__$1);
return statearr_27318;
})();if(cljs.core.truth_(inst_27256))
{var statearr_27319_27353 = state_27288__$1;(statearr_27319_27353[(1)] = (11));
} else
{var statearr_27320_27354 = state_27288__$1;(statearr_27320_27354[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (18)))
{var inst_27253 = (state_27288[(16)]);var inst_27248 = (state_27288[(17)]);var inst_27247 = (state_27288[(18)]);var inst_27270 = cljs.core.empty_QMARK_.call(null,inst_27248);var inst_27271 = inst_27247.call(null,inst_27253);var inst_27272 = cljs.core.not.call(null,inst_27271);var inst_27273 = (inst_27270) && (inst_27272);var state_27288__$1 = state_27288;var statearr_27321_27355 = state_27288__$1;(statearr_27321_27355[(2)] = inst_27273);
(statearr_27321_27355[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (8)))
{var inst_27237 = (state_27288[(7)]);var state_27288__$1 = state_27288;var statearr_27322_27356 = state_27288__$1;(statearr_27322_27356[(2)] = inst_27237);
(statearr_27322_27356[(1)] = (9));
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
});})(c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27326[(0)] = state_machine__5679__auto__);
(statearr_27326[(1)] = (1));
return statearr_27326;
});
var state_machine__5679__auto____1 = (function (state_27288){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27288);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27327){if((e27327 instanceof Object))
{var ex__5682__auto__ = e27327;var statearr_27328_27357 = state_27288;(statearr_27328_27357[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27288);
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
var G__27358 = state_27288;
state_27288 = G__27358;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27288){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_27329 = f__5694__auto__.call(null);(statearr_27329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27330);
return statearr_27329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27360 = {};return obj27360;
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
return (function (p1__27361_SHARP_){if(cljs.core.truth_(p1__27361_SHARP_.call(null,topic)))
{return p1__27361_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27487 = meta27487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27486.cljs$lang$type = true;
cljs.core.async.t27486.cljs$lang$ctorStr = "cljs.core.async/t27486";
cljs.core.async.t27486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27486");
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27488){var self__ = this;
var _27488__$1 = this;return self__.meta27487;
});})(mults,ensure_mult))
;
cljs.core.async.t27486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27488,meta27487__$1){var self__ = this;
var _27488__$1 = this;return (new cljs.core.async.t27486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27487__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27486 = ((function (mults,ensure_mult){
return (function __GT_t27486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27487){return (new cljs.core.async.t27486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27487));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___27610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27610,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27610,mults,ensure_mult,p){
return (function (state_27562){var state_val_27563 = (state_27562[(1)]);if((state_val_27563 === (7)))
{var inst_27558 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27564_27611 = state_27562__$1;(statearr_27564_27611[(2)] = inst_27558);
(statearr_27564_27611[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (20)))
{var state_27562__$1 = state_27562;var statearr_27565_27612 = state_27562__$1;(statearr_27565_27612[(2)] = null);
(statearr_27565_27612[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (1)))
{var state_27562__$1 = state_27562;var statearr_27566_27613 = state_27562__$1;(statearr_27566_27613[(2)] = null);
(statearr_27566_27613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (24)))
{var inst_27491 = (state_27562[(7)]);var inst_27541 = (state_27562[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27562,(23),Object,null,(22));var inst_27548 = cljs.core.async.muxch_STAR_.call(null,inst_27541);var state_27562__$1 = state_27562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27562__$1,(25),inst_27548,inst_27491);
} else
{if((state_val_27563 === (4)))
{var inst_27491 = (state_27562[(7)]);var inst_27491__$1 = (state_27562[(2)]);var inst_27492 = (inst_27491__$1 == null);var state_27562__$1 = (function (){var statearr_27567 = state_27562;(statearr_27567[(7)] = inst_27491__$1);
return statearr_27567;
})();if(cljs.core.truth_(inst_27492))
{var statearr_27568_27614 = state_27562__$1;(statearr_27568_27614[(1)] = (5));
} else
{var statearr_27569_27615 = state_27562__$1;(statearr_27569_27615[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (15)))
{var inst_27533 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27570_27616 = state_27562__$1;(statearr_27570_27616[(2)] = inst_27533);
(statearr_27570_27616[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (21)))
{var inst_27555 = (state_27562[(2)]);var state_27562__$1 = (function (){var statearr_27571 = state_27562;(statearr_27571[(9)] = inst_27555);
return statearr_27571;
})();var statearr_27572_27617 = state_27562__$1;(statearr_27572_27617[(2)] = null);
(statearr_27572_27617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (13)))
{var inst_27515 = (state_27562[(10)]);var inst_27517 = cljs.core.chunked_seq_QMARK_.call(null,inst_27515);var state_27562__$1 = state_27562;if(inst_27517)
{var statearr_27573_27618 = state_27562__$1;(statearr_27573_27618[(1)] = (16));
} else
{var statearr_27574_27619 = state_27562__$1;(statearr_27574_27619[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (22)))
{var inst_27552 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27575_27620 = state_27562__$1;(statearr_27575_27620[(2)] = inst_27552);
(statearr_27575_27620[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (6)))
{var inst_27491 = (state_27562[(7)]);var inst_27541 = (state_27562[(8)]);var inst_27539 = (state_27562[(11)]);var inst_27539__$1 = topic_fn.call(null,inst_27491);var inst_27540 = cljs.core.deref.call(null,mults);var inst_27541__$1 = cljs.core.get.call(null,inst_27540,inst_27539__$1);var state_27562__$1 = (function (){var statearr_27576 = state_27562;(statearr_27576[(8)] = inst_27541__$1);
(statearr_27576[(11)] = inst_27539__$1);
return statearr_27576;
})();if(cljs.core.truth_(inst_27541__$1))
{var statearr_27577_27621 = state_27562__$1;(statearr_27577_27621[(1)] = (19));
} else
{var statearr_27578_27622 = state_27562__$1;(statearr_27578_27622[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (25)))
{var inst_27550 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27579_27623 = state_27562__$1;(statearr_27579_27623[(2)] = inst_27550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (17)))
{var inst_27515 = (state_27562[(10)]);var inst_27524 = cljs.core.first.call(null,inst_27515);var inst_27525 = cljs.core.async.muxch_STAR_.call(null,inst_27524);var inst_27526 = cljs.core.async.close_BANG_.call(null,inst_27525);var inst_27527 = cljs.core.next.call(null,inst_27515);var inst_27501 = inst_27527;var inst_27502 = null;var inst_27503 = (0);var inst_27504 = (0);var state_27562__$1 = (function (){var statearr_27580 = state_27562;(statearr_27580[(12)] = inst_27503);
(statearr_27580[(13)] = inst_27501);
(statearr_27580[(14)] = inst_27526);
(statearr_27580[(15)] = inst_27504);
(statearr_27580[(16)] = inst_27502);
return statearr_27580;
})();var statearr_27581_27624 = state_27562__$1;(statearr_27581_27624[(2)] = null);
(statearr_27581_27624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (3)))
{var inst_27560 = (state_27562[(2)]);var state_27562__$1 = state_27562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27562__$1,inst_27560);
} else
{if((state_val_27563 === (12)))
{var inst_27535 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27582_27625 = state_27562__$1;(statearr_27582_27625[(2)] = inst_27535);
(statearr_27582_27625[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (2)))
{var state_27562__$1 = state_27562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(4),ch);
} else
{if((state_val_27563 === (23)))
{var inst_27539 = (state_27562[(11)]);var inst_27543 = (state_27562[(2)]);var inst_27544 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27539);var state_27562__$1 = (function (){var statearr_27583 = state_27562;(statearr_27583[(17)] = inst_27543);
return statearr_27583;
})();var statearr_27584_27626 = state_27562__$1;(statearr_27584_27626[(2)] = inst_27544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (19)))
{var state_27562__$1 = state_27562;var statearr_27585_27627 = state_27562__$1;(statearr_27585_27627[(2)] = null);
(statearr_27585_27627[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (11)))
{var inst_27515 = (state_27562[(10)]);var inst_27501 = (state_27562[(13)]);var inst_27515__$1 = cljs.core.seq.call(null,inst_27501);var state_27562__$1 = (function (){var statearr_27586 = state_27562;(statearr_27586[(10)] = inst_27515__$1);
return statearr_27586;
})();if(inst_27515__$1)
{var statearr_27587_27628 = state_27562__$1;(statearr_27587_27628[(1)] = (13));
} else
{var statearr_27588_27629 = state_27562__$1;(statearr_27588_27629[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (9)))
{var inst_27537 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27589_27630 = state_27562__$1;(statearr_27589_27630[(2)] = inst_27537);
(statearr_27589_27630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (5)))
{var inst_27498 = cljs.core.deref.call(null,mults);var inst_27499 = cljs.core.vals.call(null,inst_27498);var inst_27500 = cljs.core.seq.call(null,inst_27499);var inst_27501 = inst_27500;var inst_27502 = null;var inst_27503 = (0);var inst_27504 = (0);var state_27562__$1 = (function (){var statearr_27590 = state_27562;(statearr_27590[(12)] = inst_27503);
(statearr_27590[(13)] = inst_27501);
(statearr_27590[(15)] = inst_27504);
(statearr_27590[(16)] = inst_27502);
return statearr_27590;
})();var statearr_27591_27631 = state_27562__$1;(statearr_27591_27631[(2)] = null);
(statearr_27591_27631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (14)))
{var state_27562__$1 = state_27562;var statearr_27595_27632 = state_27562__$1;(statearr_27595_27632[(2)] = null);
(statearr_27595_27632[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (16)))
{var inst_27515 = (state_27562[(10)]);var inst_27519 = cljs.core.chunk_first.call(null,inst_27515);var inst_27520 = cljs.core.chunk_rest.call(null,inst_27515);var inst_27521 = cljs.core.count.call(null,inst_27519);var inst_27501 = inst_27520;var inst_27502 = inst_27519;var inst_27503 = inst_27521;var inst_27504 = (0);var state_27562__$1 = (function (){var statearr_27596 = state_27562;(statearr_27596[(12)] = inst_27503);
(statearr_27596[(13)] = inst_27501);
(statearr_27596[(15)] = inst_27504);
(statearr_27596[(16)] = inst_27502);
return statearr_27596;
})();var statearr_27597_27633 = state_27562__$1;(statearr_27597_27633[(2)] = null);
(statearr_27597_27633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (10)))
{var inst_27503 = (state_27562[(12)]);var inst_27501 = (state_27562[(13)]);var inst_27504 = (state_27562[(15)]);var inst_27502 = (state_27562[(16)]);var inst_27509 = cljs.core._nth.call(null,inst_27502,inst_27504);var inst_27510 = cljs.core.async.muxch_STAR_.call(null,inst_27509);var inst_27511 = cljs.core.async.close_BANG_.call(null,inst_27510);var inst_27512 = (inst_27504 + (1));var tmp27592 = inst_27503;var tmp27593 = inst_27501;var tmp27594 = inst_27502;var inst_27501__$1 = tmp27593;var inst_27502__$1 = tmp27594;var inst_27503__$1 = tmp27592;var inst_27504__$1 = inst_27512;var state_27562__$1 = (function (){var statearr_27598 = state_27562;(statearr_27598[(12)] = inst_27503__$1);
(statearr_27598[(13)] = inst_27501__$1);
(statearr_27598[(15)] = inst_27504__$1);
(statearr_27598[(18)] = inst_27511);
(statearr_27598[(16)] = inst_27502__$1);
return statearr_27598;
})();var statearr_27599_27634 = state_27562__$1;(statearr_27599_27634[(2)] = null);
(statearr_27599_27634[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (18)))
{var inst_27530 = (state_27562[(2)]);var state_27562__$1 = state_27562;var statearr_27600_27635 = state_27562__$1;(statearr_27600_27635[(2)] = inst_27530);
(statearr_27600_27635[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (8)))
{var inst_27503 = (state_27562[(12)]);var inst_27504 = (state_27562[(15)]);var inst_27506 = (inst_27504 < inst_27503);var inst_27507 = inst_27506;var state_27562__$1 = state_27562;if(cljs.core.truth_(inst_27507))
{var statearr_27601_27636 = state_27562__$1;(statearr_27601_27636[(1)] = (10));
} else
{var statearr_27602_27637 = state_27562__$1;(statearr_27602_27637[(1)] = (11));
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
});})(c__5693__auto___27610,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___27610,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27606[(0)] = state_machine__5679__auto__);
(statearr_27606[(1)] = (1));
return statearr_27606;
});
var state_machine__5679__auto____1 = (function (state_27562){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27562);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27607){if((e27607 instanceof Object))
{var ex__5682__auto__ = e27607;var statearr_27608_27638 = state_27562;(statearr_27608_27638[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27639 = state_27562;
state_27562 = G__27639;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27562){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27610,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_27609 = f__5694__auto__.call(null);(statearr_27609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27610);
return statearr_27609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27610,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___27776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27746){var state_val_27747 = (state_27746[(1)]);if((state_val_27747 === (7)))
{var state_27746__$1 = state_27746;var statearr_27748_27777 = state_27746__$1;(statearr_27748_27777[(2)] = null);
(statearr_27748_27777[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (1)))
{var state_27746__$1 = state_27746;var statearr_27749_27778 = state_27746__$1;(statearr_27749_27778[(2)] = null);
(statearr_27749_27778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (4)))
{var inst_27710 = (state_27746[(7)]);var inst_27712 = (inst_27710 < cnt);var state_27746__$1 = state_27746;if(cljs.core.truth_(inst_27712))
{var statearr_27750_27779 = state_27746__$1;(statearr_27750_27779[(1)] = (6));
} else
{var statearr_27751_27780 = state_27746__$1;(statearr_27751_27780[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (15)))
{var inst_27742 = (state_27746[(2)]);var state_27746__$1 = state_27746;var statearr_27752_27781 = state_27746__$1;(statearr_27752_27781[(2)] = inst_27742);
(statearr_27752_27781[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (13)))
{var inst_27735 = cljs.core.async.close_BANG_.call(null,out);var state_27746__$1 = state_27746;var statearr_27753_27782 = state_27746__$1;(statearr_27753_27782[(2)] = inst_27735);
(statearr_27753_27782[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (6)))
{var state_27746__$1 = state_27746;var statearr_27754_27783 = state_27746__$1;(statearr_27754_27783[(2)] = null);
(statearr_27754_27783[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (3)))
{var inst_27744 = (state_27746[(2)]);var state_27746__$1 = state_27746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27746__$1,inst_27744);
} else
{if((state_val_27747 === (12)))
{var inst_27732 = (state_27746[(8)]);var inst_27732__$1 = (state_27746[(2)]);var inst_27733 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27732__$1);var state_27746__$1 = (function (){var statearr_27755 = state_27746;(statearr_27755[(8)] = inst_27732__$1);
return statearr_27755;
})();if(cljs.core.truth_(inst_27733))
{var statearr_27756_27784 = state_27746__$1;(statearr_27756_27784[(1)] = (13));
} else
{var statearr_27757_27785 = state_27746__$1;(statearr_27757_27785[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (2)))
{var inst_27709 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27710 = (0);var state_27746__$1 = (function (){var statearr_27758 = state_27746;(statearr_27758[(7)] = inst_27710);
(statearr_27758[(9)] = inst_27709);
return statearr_27758;
})();var statearr_27759_27786 = state_27746__$1;(statearr_27759_27786[(2)] = null);
(statearr_27759_27786[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (11)))
{var inst_27710 = (state_27746[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27746,(10),Object,null,(9));var inst_27719 = chs__$1.call(null,inst_27710);var inst_27720 = done.call(null,inst_27710);var inst_27721 = cljs.core.async.take_BANG_.call(null,inst_27719,inst_27720);var state_27746__$1 = state_27746;var statearr_27760_27787 = state_27746__$1;(statearr_27760_27787[(2)] = inst_27721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (9)))
{var inst_27710 = (state_27746[(7)]);var inst_27723 = (state_27746[(2)]);var inst_27724 = (inst_27710 + (1));var inst_27710__$1 = inst_27724;var state_27746__$1 = (function (){var statearr_27761 = state_27746;(statearr_27761[(10)] = inst_27723);
(statearr_27761[(7)] = inst_27710__$1);
return statearr_27761;
})();var statearr_27762_27788 = state_27746__$1;(statearr_27762_27788[(2)] = null);
(statearr_27762_27788[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (5)))
{var inst_27730 = (state_27746[(2)]);var state_27746__$1 = (function (){var statearr_27763 = state_27746;(statearr_27763[(11)] = inst_27730);
return statearr_27763;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(12),dchan);
} else
{if((state_val_27747 === (14)))
{var inst_27732 = (state_27746[(8)]);var inst_27737 = cljs.core.apply.call(null,f,inst_27732);var state_27746__$1 = state_27746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27746__$1,(16),out,inst_27737);
} else
{if((state_val_27747 === (16)))
{var inst_27739 = (state_27746[(2)]);var state_27746__$1 = (function (){var statearr_27764 = state_27746;(statearr_27764[(12)] = inst_27739);
return statearr_27764;
})();var statearr_27765_27789 = state_27746__$1;(statearr_27765_27789[(2)] = null);
(statearr_27765_27789[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (10)))
{var inst_27714 = (state_27746[(2)]);var inst_27715 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27746__$1 = (function (){var statearr_27766 = state_27746;(statearr_27766[(13)] = inst_27714);
return statearr_27766;
})();var statearr_27767_27790 = state_27746__$1;(statearr_27767_27790[(2)] = inst_27715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27747 === (8)))
{var inst_27728 = (state_27746[(2)]);var state_27746__$1 = state_27746;var statearr_27768_27791 = state_27746__$1;(statearr_27768_27791[(2)] = inst_27728);
(statearr_27768_27791[(1)] = (5));
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
});})(c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27772[(0)] = state_machine__5679__auto__);
(statearr_27772[(1)] = (1));
return statearr_27772;
});
var state_machine__5679__auto____1 = (function (state_27746){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27746);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27773){if((e27773 instanceof Object))
{var ex__5682__auto__ = e27773;var statearr_27774_27792 = state_27746;(statearr_27774_27792[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27793 = state_27746;
state_27746 = G__27793;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27746){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_27775 = f__5694__auto__.call(null);(statearr_27775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27776);
return statearr_27775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27776,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27901 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27901,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27901,out){
return (function (state_27877){var state_val_27878 = (state_27877[(1)]);if((state_val_27878 === (7)))
{var inst_27856 = (state_27877[(7)]);var inst_27857 = (state_27877[(8)]);var inst_27856__$1 = (state_27877[(2)]);var inst_27857__$1 = cljs.core.nth.call(null,inst_27856__$1,(0),null);var inst_27858 = cljs.core.nth.call(null,inst_27856__$1,(1),null);var inst_27859 = (inst_27857__$1 == null);var state_27877__$1 = (function (){var statearr_27879 = state_27877;(statearr_27879[(7)] = inst_27856__$1);
(statearr_27879[(8)] = inst_27857__$1);
(statearr_27879[(9)] = inst_27858);
return statearr_27879;
})();if(cljs.core.truth_(inst_27859))
{var statearr_27880_27902 = state_27877__$1;(statearr_27880_27902[(1)] = (8));
} else
{var statearr_27881_27903 = state_27877__$1;(statearr_27881_27903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (1)))
{var inst_27848 = cljs.core.vec.call(null,chs);var inst_27849 = inst_27848;var state_27877__$1 = (function (){var statearr_27882 = state_27877;(statearr_27882[(10)] = inst_27849);
return statearr_27882;
})();var statearr_27883_27904 = state_27877__$1;(statearr_27883_27904[(2)] = null);
(statearr_27883_27904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (4)))
{var inst_27849 = (state_27877[(10)]);var state_27877__$1 = state_27877;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27877__$1,(7),inst_27849);
} else
{if((state_val_27878 === (6)))
{var inst_27873 = (state_27877[(2)]);var state_27877__$1 = state_27877;var statearr_27884_27905 = state_27877__$1;(statearr_27884_27905[(2)] = inst_27873);
(statearr_27884_27905[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (3)))
{var inst_27875 = (state_27877[(2)]);var state_27877__$1 = state_27877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27877__$1,inst_27875);
} else
{if((state_val_27878 === (2)))
{var inst_27849 = (state_27877[(10)]);var inst_27851 = cljs.core.count.call(null,inst_27849);var inst_27852 = (inst_27851 > (0));var state_27877__$1 = state_27877;if(cljs.core.truth_(inst_27852))
{var statearr_27886_27906 = state_27877__$1;(statearr_27886_27906[(1)] = (4));
} else
{var statearr_27887_27907 = state_27877__$1;(statearr_27887_27907[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (11)))
{var inst_27849 = (state_27877[(10)]);var inst_27866 = (state_27877[(2)]);var tmp27885 = inst_27849;var inst_27849__$1 = tmp27885;var state_27877__$1 = (function (){var statearr_27888 = state_27877;(statearr_27888[(10)] = inst_27849__$1);
(statearr_27888[(11)] = inst_27866);
return statearr_27888;
})();var statearr_27889_27908 = state_27877__$1;(statearr_27889_27908[(2)] = null);
(statearr_27889_27908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (9)))
{var inst_27857 = (state_27877[(8)]);var state_27877__$1 = state_27877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27877__$1,(11),out,inst_27857);
} else
{if((state_val_27878 === (5)))
{var inst_27871 = cljs.core.async.close_BANG_.call(null,out);var state_27877__$1 = state_27877;var statearr_27890_27909 = state_27877__$1;(statearr_27890_27909[(2)] = inst_27871);
(statearr_27890_27909[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (10)))
{var inst_27869 = (state_27877[(2)]);var state_27877__$1 = state_27877;var statearr_27891_27910 = state_27877__$1;(statearr_27891_27910[(2)] = inst_27869);
(statearr_27891_27910[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27878 === (8)))
{var inst_27849 = (state_27877[(10)]);var inst_27856 = (state_27877[(7)]);var inst_27857 = (state_27877[(8)]);var inst_27858 = (state_27877[(9)]);var inst_27861 = (function (){var c = inst_27858;var v = inst_27857;var vec__27854 = inst_27856;var cs = inst_27849;return ((function (c,v,vec__27854,cs,inst_27849,inst_27856,inst_27857,inst_27858,state_val_27878,c__5693__auto___27901,out){
return (function (p1__27794_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27794_SHARP_);
});
;})(c,v,vec__27854,cs,inst_27849,inst_27856,inst_27857,inst_27858,state_val_27878,c__5693__auto___27901,out))
})();var inst_27862 = cljs.core.filterv.call(null,inst_27861,inst_27849);var inst_27849__$1 = inst_27862;var state_27877__$1 = (function (){var statearr_27892 = state_27877;(statearr_27892[(10)] = inst_27849__$1);
return statearr_27892;
})();var statearr_27893_27911 = state_27877__$1;(statearr_27893_27911[(2)] = null);
(statearr_27893_27911[(1)] = (2));
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
});})(c__5693__auto___27901,out))
;return ((function (switch__5678__auto__,c__5693__auto___27901,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27897 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27897[(0)] = state_machine__5679__auto__);
(statearr_27897[(1)] = (1));
return statearr_27897;
});
var state_machine__5679__auto____1 = (function (state_27877){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object))
{var ex__5682__auto__ = e27898;var statearr_27899_27912 = state_27877;(statearr_27899_27912[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27913 = state_27877;
state_27877 = G__27913;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27877){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27901,out))
})();var state__5695__auto__ = (function (){var statearr_27900 = f__5694__auto__.call(null);(statearr_27900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27901);
return statearr_27900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27901,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28006,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28006,out){
return (function (state_27983){var state_val_27984 = (state_27983[(1)]);if((state_val_27984 === (7)))
{var inst_27965 = (state_27983[(7)]);var inst_27965__$1 = (state_27983[(2)]);var inst_27966 = (inst_27965__$1 == null);var inst_27967 = cljs.core.not.call(null,inst_27966);var state_27983__$1 = (function (){var statearr_27985 = state_27983;(statearr_27985[(7)] = inst_27965__$1);
return statearr_27985;
})();if(inst_27967)
{var statearr_27986_28007 = state_27983__$1;(statearr_27986_28007[(1)] = (8));
} else
{var statearr_27987_28008 = state_27983__$1;(statearr_27987_28008[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (1)))
{var inst_27960 = (0);var state_27983__$1 = (function (){var statearr_27988 = state_27983;(statearr_27988[(8)] = inst_27960);
return statearr_27988;
})();var statearr_27989_28009 = state_27983__$1;(statearr_27989_28009[(2)] = null);
(statearr_27989_28009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (4)))
{var state_27983__$1 = state_27983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27983__$1,(7),ch);
} else
{if((state_val_27984 === (6)))
{var inst_27978 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_27990_28010 = state_27983__$1;(statearr_27990_28010[(2)] = inst_27978);
(statearr_27990_28010[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (3)))
{var inst_27980 = (state_27983[(2)]);var inst_27981 = cljs.core.async.close_BANG_.call(null,out);var state_27983__$1 = (function (){var statearr_27991 = state_27983;(statearr_27991[(9)] = inst_27980);
return statearr_27991;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27983__$1,inst_27981);
} else
{if((state_val_27984 === (2)))
{var inst_27960 = (state_27983[(8)]);var inst_27962 = (inst_27960 < n);var state_27983__$1 = state_27983;if(cljs.core.truth_(inst_27962))
{var statearr_27992_28011 = state_27983__$1;(statearr_27992_28011[(1)] = (4));
} else
{var statearr_27993_28012 = state_27983__$1;(statearr_27993_28012[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (11)))
{var inst_27960 = (state_27983[(8)]);var inst_27970 = (state_27983[(2)]);var inst_27971 = (inst_27960 + (1));var inst_27960__$1 = inst_27971;var state_27983__$1 = (function (){var statearr_27994 = state_27983;(statearr_27994[(10)] = inst_27970);
(statearr_27994[(8)] = inst_27960__$1);
return statearr_27994;
})();var statearr_27995_28013 = state_27983__$1;(statearr_27995_28013[(2)] = null);
(statearr_27995_28013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (9)))
{var state_27983__$1 = state_27983;var statearr_27996_28014 = state_27983__$1;(statearr_27996_28014[(2)] = null);
(statearr_27996_28014[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (5)))
{var state_27983__$1 = state_27983;var statearr_27997_28015 = state_27983__$1;(statearr_27997_28015[(2)] = null);
(statearr_27997_28015[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (10)))
{var inst_27975 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_27998_28016 = state_27983__$1;(statearr_27998_28016[(2)] = inst_27975);
(statearr_27998_28016[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (8)))
{var inst_27965 = (state_27983[(7)]);var state_27983__$1 = state_27983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27983__$1,(11),out,inst_27965);
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
});})(c__5693__auto___28006,out))
;return ((function (switch__5678__auto__,c__5693__auto___28006,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28002 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28002[(0)] = state_machine__5679__auto__);
(statearr_28002[(1)] = (1));
return statearr_28002;
});
var state_machine__5679__auto____1 = (function (state_27983){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27983);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object))
{var ex__5682__auto__ = e28003;var statearr_28004_28017 = state_27983;(statearr_28004_28017[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28018 = state_27983;
state_27983 = G__28018;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27983){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28006,out))
})();var state__5695__auto__ = (function (){var statearr_28005 = f__5694__auto__.call(null);(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28006);
return statearr_28005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28006,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28115,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28115,out){
return (function (state_28090){var state_val_28091 = (state_28090[(1)]);if((state_val_28091 === (7)))
{var inst_28085 = (state_28090[(2)]);var state_28090__$1 = state_28090;var statearr_28092_28116 = state_28090__$1;(statearr_28092_28116[(2)] = inst_28085);
(statearr_28092_28116[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (1)))
{var inst_28067 = null;var state_28090__$1 = (function (){var statearr_28093 = state_28090;(statearr_28093[(7)] = inst_28067);
return statearr_28093;
})();var statearr_28094_28117 = state_28090__$1;(statearr_28094_28117[(2)] = null);
(statearr_28094_28117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (4)))
{var inst_28070 = (state_28090[(8)]);var inst_28070__$1 = (state_28090[(2)]);var inst_28071 = (inst_28070__$1 == null);var inst_28072 = cljs.core.not.call(null,inst_28071);var state_28090__$1 = (function (){var statearr_28095 = state_28090;(statearr_28095[(8)] = inst_28070__$1);
return statearr_28095;
})();if(inst_28072)
{var statearr_28096_28118 = state_28090__$1;(statearr_28096_28118[(1)] = (5));
} else
{var statearr_28097_28119 = state_28090__$1;(statearr_28097_28119[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (6)))
{var state_28090__$1 = state_28090;var statearr_28098_28120 = state_28090__$1;(statearr_28098_28120[(2)] = null);
(statearr_28098_28120[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (3)))
{var inst_28087 = (state_28090[(2)]);var inst_28088 = cljs.core.async.close_BANG_.call(null,out);var state_28090__$1 = (function (){var statearr_28099 = state_28090;(statearr_28099[(9)] = inst_28087);
return statearr_28099;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28090__$1,inst_28088);
} else
{if((state_val_28091 === (2)))
{var state_28090__$1 = state_28090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28090__$1,(4),ch);
} else
{if((state_val_28091 === (11)))
{var inst_28070 = (state_28090[(8)]);var inst_28079 = (state_28090[(2)]);var inst_28067 = inst_28070;var state_28090__$1 = (function (){var statearr_28100 = state_28090;(statearr_28100[(10)] = inst_28079);
(statearr_28100[(7)] = inst_28067);
return statearr_28100;
})();var statearr_28101_28121 = state_28090__$1;(statearr_28101_28121[(2)] = null);
(statearr_28101_28121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (9)))
{var inst_28070 = (state_28090[(8)]);var state_28090__$1 = state_28090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28090__$1,(11),out,inst_28070);
} else
{if((state_val_28091 === (5)))
{var inst_28067 = (state_28090[(7)]);var inst_28070 = (state_28090[(8)]);var inst_28074 = cljs.core._EQ_.call(null,inst_28070,inst_28067);var state_28090__$1 = state_28090;if(inst_28074)
{var statearr_28103_28122 = state_28090__$1;(statearr_28103_28122[(1)] = (8));
} else
{var statearr_28104_28123 = state_28090__$1;(statearr_28104_28123[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (10)))
{var inst_28082 = (state_28090[(2)]);var state_28090__$1 = state_28090;var statearr_28105_28124 = state_28090__$1;(statearr_28105_28124[(2)] = inst_28082);
(statearr_28105_28124[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28091 === (8)))
{var inst_28067 = (state_28090[(7)]);var tmp28102 = inst_28067;var inst_28067__$1 = tmp28102;var state_28090__$1 = (function (){var statearr_28106 = state_28090;(statearr_28106[(7)] = inst_28067__$1);
return statearr_28106;
})();var statearr_28107_28125 = state_28090__$1;(statearr_28107_28125[(2)] = null);
(statearr_28107_28125[(1)] = (2));
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
});})(c__5693__auto___28115,out))
;return ((function (switch__5678__auto__,c__5693__auto___28115,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28111 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28111[(0)] = state_machine__5679__auto__);
(statearr_28111[(1)] = (1));
return statearr_28111;
});
var state_machine__5679__auto____1 = (function (state_28090){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28090);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28112){if((e28112 instanceof Object))
{var ex__5682__auto__ = e28112;var statearr_28113_28126 = state_28090;(statearr_28113_28126[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28127 = state_28090;
state_28090 = G__28127;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28090){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28115,out))
})();var state__5695__auto__ = (function (){var statearr_28114 = f__5694__auto__.call(null);(statearr_28114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28115);
return statearr_28114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28115,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28262,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28262,out){
return (function (state_28232){var state_val_28233 = (state_28232[(1)]);if((state_val_28233 === (7)))
{var inst_28228 = (state_28232[(2)]);var state_28232__$1 = state_28232;var statearr_28234_28263 = state_28232__$1;(statearr_28234_28263[(2)] = inst_28228);
(statearr_28234_28263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (1)))
{var inst_28195 = (new Array(n));var inst_28196 = inst_28195;var inst_28197 = (0);var state_28232__$1 = (function (){var statearr_28235 = state_28232;(statearr_28235[(7)] = inst_28196);
(statearr_28235[(8)] = inst_28197);
return statearr_28235;
})();var statearr_28236_28264 = state_28232__$1;(statearr_28236_28264[(2)] = null);
(statearr_28236_28264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (4)))
{var inst_28200 = (state_28232[(9)]);var inst_28200__$1 = (state_28232[(2)]);var inst_28201 = (inst_28200__$1 == null);var inst_28202 = cljs.core.not.call(null,inst_28201);var state_28232__$1 = (function (){var statearr_28237 = state_28232;(statearr_28237[(9)] = inst_28200__$1);
return statearr_28237;
})();if(inst_28202)
{var statearr_28238_28265 = state_28232__$1;(statearr_28238_28265[(1)] = (5));
} else
{var statearr_28239_28266 = state_28232__$1;(statearr_28239_28266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (15)))
{var inst_28222 = (state_28232[(2)]);var state_28232__$1 = state_28232;var statearr_28240_28267 = state_28232__$1;(statearr_28240_28267[(2)] = inst_28222);
(statearr_28240_28267[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (13)))
{var state_28232__$1 = state_28232;var statearr_28241_28268 = state_28232__$1;(statearr_28241_28268[(2)] = null);
(statearr_28241_28268[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (6)))
{var inst_28197 = (state_28232[(8)]);var inst_28218 = (inst_28197 > (0));var state_28232__$1 = state_28232;if(cljs.core.truth_(inst_28218))
{var statearr_28242_28269 = state_28232__$1;(statearr_28242_28269[(1)] = (12));
} else
{var statearr_28243_28270 = state_28232__$1;(statearr_28243_28270[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (3)))
{var inst_28230 = (state_28232[(2)]);var state_28232__$1 = state_28232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28232__$1,inst_28230);
} else
{if((state_val_28233 === (12)))
{var inst_28196 = (state_28232[(7)]);var inst_28220 = cljs.core.vec.call(null,inst_28196);var state_28232__$1 = state_28232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28232__$1,(15),out,inst_28220);
} else
{if((state_val_28233 === (2)))
{var state_28232__$1 = state_28232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28232__$1,(4),ch);
} else
{if((state_val_28233 === (11)))
{var inst_28212 = (state_28232[(2)]);var inst_28213 = (new Array(n));var inst_28196 = inst_28213;var inst_28197 = (0);var state_28232__$1 = (function (){var statearr_28244 = state_28232;(statearr_28244[(10)] = inst_28212);
(statearr_28244[(7)] = inst_28196);
(statearr_28244[(8)] = inst_28197);
return statearr_28244;
})();var statearr_28245_28271 = state_28232__$1;(statearr_28245_28271[(2)] = null);
(statearr_28245_28271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (9)))
{var inst_28196 = (state_28232[(7)]);var inst_28210 = cljs.core.vec.call(null,inst_28196);var state_28232__$1 = state_28232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28232__$1,(11),out,inst_28210);
} else
{if((state_val_28233 === (5)))
{var inst_28196 = (state_28232[(7)]);var inst_28205 = (state_28232[(11)]);var inst_28197 = (state_28232[(8)]);var inst_28200 = (state_28232[(9)]);var inst_28204 = (inst_28196[inst_28197] = inst_28200);var inst_28205__$1 = (inst_28197 + (1));var inst_28206 = (inst_28205__$1 < n);var state_28232__$1 = (function (){var statearr_28246 = state_28232;(statearr_28246[(11)] = inst_28205__$1);
(statearr_28246[(12)] = inst_28204);
return statearr_28246;
})();if(cljs.core.truth_(inst_28206))
{var statearr_28247_28272 = state_28232__$1;(statearr_28247_28272[(1)] = (8));
} else
{var statearr_28248_28273 = state_28232__$1;(statearr_28248_28273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (14)))
{var inst_28225 = (state_28232[(2)]);var inst_28226 = cljs.core.async.close_BANG_.call(null,out);var state_28232__$1 = (function (){var statearr_28250 = state_28232;(statearr_28250[(13)] = inst_28225);
return statearr_28250;
})();var statearr_28251_28274 = state_28232__$1;(statearr_28251_28274[(2)] = inst_28226);
(statearr_28251_28274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (10)))
{var inst_28216 = (state_28232[(2)]);var state_28232__$1 = state_28232;var statearr_28252_28275 = state_28232__$1;(statearr_28252_28275[(2)] = inst_28216);
(statearr_28252_28275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28233 === (8)))
{var inst_28196 = (state_28232[(7)]);var inst_28205 = (state_28232[(11)]);var tmp28249 = inst_28196;var inst_28196__$1 = tmp28249;var inst_28197 = inst_28205;var state_28232__$1 = (function (){var statearr_28253 = state_28232;(statearr_28253[(7)] = inst_28196__$1);
(statearr_28253[(8)] = inst_28197);
return statearr_28253;
})();var statearr_28254_28276 = state_28232__$1;(statearr_28254_28276[(2)] = null);
(statearr_28254_28276[(1)] = (2));
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
});})(c__5693__auto___28262,out))
;return ((function (switch__5678__auto__,c__5693__auto___28262,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28258[(0)] = state_machine__5679__auto__);
(statearr_28258[(1)] = (1));
return statearr_28258;
});
var state_machine__5679__auto____1 = (function (state_28232){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28259){if((e28259 instanceof Object))
{var ex__5682__auto__ = e28259;var statearr_28260_28277 = state_28232;(statearr_28260_28277[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28278 = state_28232;
state_28232 = G__28278;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28232){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28262,out))
})();var state__5695__auto__ = (function (){var statearr_28261 = f__5694__auto__.call(null);(statearr_28261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28262);
return statearr_28261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28262,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28421 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28421,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28421,out){
return (function (state_28391){var state_val_28392 = (state_28391[(1)]);if((state_val_28392 === (7)))
{var inst_28387 = (state_28391[(2)]);var state_28391__$1 = state_28391;var statearr_28393_28422 = state_28391__$1;(statearr_28393_28422[(2)] = inst_28387);
(statearr_28393_28422[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (1)))
{var inst_28350 = [];var inst_28351 = inst_28350;var inst_28352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_28391__$1 = (function (){var statearr_28394 = state_28391;(statearr_28394[(7)] = inst_28351);
(statearr_28394[(8)] = inst_28352);
return statearr_28394;
})();var statearr_28395_28423 = state_28391__$1;(statearr_28395_28423[(2)] = null);
(statearr_28395_28423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (4)))
{var inst_28355 = (state_28391[(9)]);var inst_28355__$1 = (state_28391[(2)]);var inst_28356 = (inst_28355__$1 == null);var inst_28357 = cljs.core.not.call(null,inst_28356);var state_28391__$1 = (function (){var statearr_28396 = state_28391;(statearr_28396[(9)] = inst_28355__$1);
return statearr_28396;
})();if(inst_28357)
{var statearr_28397_28424 = state_28391__$1;(statearr_28397_28424[(1)] = (5));
} else
{var statearr_28398_28425 = state_28391__$1;(statearr_28398_28425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (15)))
{var inst_28381 = (state_28391[(2)]);var state_28391__$1 = state_28391;var statearr_28399_28426 = state_28391__$1;(statearr_28399_28426[(2)] = inst_28381);
(statearr_28399_28426[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (13)))
{var state_28391__$1 = state_28391;var statearr_28400_28427 = state_28391__$1;(statearr_28400_28427[(2)] = null);
(statearr_28400_28427[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (6)))
{var inst_28351 = (state_28391[(7)]);var inst_28376 = inst_28351.length;var inst_28377 = (inst_28376 > (0));var state_28391__$1 = state_28391;if(cljs.core.truth_(inst_28377))
{var statearr_28401_28428 = state_28391__$1;(statearr_28401_28428[(1)] = (12));
} else
{var statearr_28402_28429 = state_28391__$1;(statearr_28402_28429[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (3)))
{var inst_28389 = (state_28391[(2)]);var state_28391__$1 = state_28391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28391__$1,inst_28389);
} else
{if((state_val_28392 === (12)))
{var inst_28351 = (state_28391[(7)]);var inst_28379 = cljs.core.vec.call(null,inst_28351);var state_28391__$1 = state_28391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28391__$1,(15),out,inst_28379);
} else
{if((state_val_28392 === (2)))
{var state_28391__$1 = state_28391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28391__$1,(4),ch);
} else
{if((state_val_28392 === (11)))
{var inst_28355 = (state_28391[(9)]);var inst_28359 = (state_28391[(10)]);var inst_28369 = (state_28391[(2)]);var inst_28370 = [];var inst_28371 = inst_28370.push(inst_28355);var inst_28351 = inst_28370;var inst_28352 = inst_28359;var state_28391__$1 = (function (){var statearr_28403 = state_28391;(statearr_28403[(7)] = inst_28351);
(statearr_28403[(11)] = inst_28371);
(statearr_28403[(8)] = inst_28352);
(statearr_28403[(12)] = inst_28369);
return statearr_28403;
})();var statearr_28404_28430 = state_28391__$1;(statearr_28404_28430[(2)] = null);
(statearr_28404_28430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (9)))
{var inst_28351 = (state_28391[(7)]);var inst_28367 = cljs.core.vec.call(null,inst_28351);var state_28391__$1 = state_28391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28391__$1,(11),out,inst_28367);
} else
{if((state_val_28392 === (5)))
{var inst_28355 = (state_28391[(9)]);var inst_28352 = (state_28391[(8)]);var inst_28359 = (state_28391[(10)]);var inst_28359__$1 = f.call(null,inst_28355);var inst_28360 = cljs.core._EQ_.call(null,inst_28359__$1,inst_28352);var inst_28361 = cljs.core.keyword_identical_QMARK_.call(null,inst_28352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_28362 = (inst_28360) || (inst_28361);var state_28391__$1 = (function (){var statearr_28405 = state_28391;(statearr_28405[(10)] = inst_28359__$1);
return statearr_28405;
})();if(cljs.core.truth_(inst_28362))
{var statearr_28406_28431 = state_28391__$1;(statearr_28406_28431[(1)] = (8));
} else
{var statearr_28407_28432 = state_28391__$1;(statearr_28407_28432[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (14)))
{var inst_28384 = (state_28391[(2)]);var inst_28385 = cljs.core.async.close_BANG_.call(null,out);var state_28391__$1 = (function (){var statearr_28409 = state_28391;(statearr_28409[(13)] = inst_28384);
return statearr_28409;
})();var statearr_28410_28433 = state_28391__$1;(statearr_28410_28433[(2)] = inst_28385);
(statearr_28410_28433[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (10)))
{var inst_28374 = (state_28391[(2)]);var state_28391__$1 = state_28391;var statearr_28411_28434 = state_28391__$1;(statearr_28411_28434[(2)] = inst_28374);
(statearr_28411_28434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28392 === (8)))
{var inst_28351 = (state_28391[(7)]);var inst_28355 = (state_28391[(9)]);var inst_28359 = (state_28391[(10)]);var inst_28364 = inst_28351.push(inst_28355);var tmp28408 = inst_28351;var inst_28351__$1 = tmp28408;var inst_28352 = inst_28359;var state_28391__$1 = (function (){var statearr_28412 = state_28391;(statearr_28412[(7)] = inst_28351__$1);
(statearr_28412[(8)] = inst_28352);
(statearr_28412[(14)] = inst_28364);
return statearr_28412;
})();var statearr_28413_28435 = state_28391__$1;(statearr_28413_28435[(2)] = null);
(statearr_28413_28435[(1)] = (2));
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
});})(c__5693__auto___28421,out))
;return ((function (switch__5678__auto__,c__5693__auto___28421,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28417[(0)] = state_machine__5679__auto__);
(statearr_28417[(1)] = (1));
return statearr_28417;
});
var state_machine__5679__auto____1 = (function (state_28391){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28418){if((e28418 instanceof Object))
{var ex__5682__auto__ = e28418;var statearr_28419_28436 = state_28391;(statearr_28419_28436[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28437 = state_28391;
state_28391 = G__28437;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28391){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28421,out))
})();var state__5695__auto__ = (function (){var statearr_28420 = f__5694__auto__.call(null);(statearr_28420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28421);
return statearr_28420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28421,out))
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
