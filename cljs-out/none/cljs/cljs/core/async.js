// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t51877 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51877 = (function (f,fn_handler,meta51878){
this.f = f;
this.fn_handler = fn_handler;
this.meta51878 = meta51878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51877.cljs$lang$type = true;
cljs.core.async.t51877.cljs$lang$ctorStr = "cljs.core.async/t51877";
cljs.core.async.t51877.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51877");
});
cljs.core.async.t51877.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t51877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t51877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t51877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51879){var self__ = this;
var _51879__$1 = this;return self__.meta51878;
});
cljs.core.async.t51877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51879,meta51878__$1){var self__ = this;
var _51879__$1 = this;return (new cljs.core.async.t51877(self__.f,self__.fn_handler,meta51878__$1));
});
cljs.core.async.__GT_t51877 = (function __GT_t51877(f__$1,fn_handler__$1,meta51878){return (new cljs.core.async.t51877(f__$1,fn_handler__$1,meta51878));
});
}
return (new cljs.core.async.t51877(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__51881 = buff;if(G__51881)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__51881.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__51881.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__51881);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__51881);
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
{var val_51882 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_51882);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_51882,ret){
return (function (){return fn1.call(null,val_51882);
});})(val_51882,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___51883 = n;var x_51884 = (0);while(true){
if((x_51884 < n__4399__auto___51883))
{(a[x_51884] = (0));
{
var G__51885 = (x_51884 + (1));
x_51884 = G__51885;
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
var G__51886 = (i + (1));
i = G__51886;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t51890 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51890 = (function (flag,alt_flag,meta51891){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta51891 = meta51891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51890.cljs$lang$type = true;
cljs.core.async.t51890.cljs$lang$ctorStr = "cljs.core.async/t51890";
cljs.core.async.t51890.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51890");
});})(flag))
;
cljs.core.async.t51890.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t51890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t51890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t51890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51892){var self__ = this;
var _51892__$1 = this;return self__.meta51891;
});})(flag))
;
cljs.core.async.t51890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51892,meta51891__$1){var self__ = this;
var _51892__$1 = this;return (new cljs.core.async.t51890(self__.flag,self__.alt_flag,meta51891__$1));
});})(flag))
;
cljs.core.async.__GT_t51890 = ((function (flag){
return (function __GT_t51890(flag__$1,alt_flag__$1,meta51891){return (new cljs.core.async.t51890(flag__$1,alt_flag__$1,meta51891));
});})(flag))
;
}
return (new cljs.core.async.t51890(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t51896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51896 = (function (cb,flag,alt_handler,meta51897){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta51897 = meta51897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51896.cljs$lang$type = true;
cljs.core.async.t51896.cljs$lang$ctorStr = "cljs.core.async/t51896";
cljs.core.async.t51896.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51896");
});
cljs.core.async.t51896.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t51896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t51896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t51896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51898){var self__ = this;
var _51898__$1 = this;return self__.meta51897;
});
cljs.core.async.t51896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51898,meta51897__$1){var self__ = this;
var _51898__$1 = this;return (new cljs.core.async.t51896(self__.cb,self__.flag,self__.alt_handler,meta51897__$1));
});
cljs.core.async.__GT_t51896 = (function __GT_t51896(cb__$1,flag__$1,alt_handler__$1,meta51897){return (new cljs.core.async.t51896(cb__$1,flag__$1,alt_handler__$1,meta51897));
});
}
return (new cljs.core.async.t51896(cb,flag,alt_handler,null));
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
return (function (p1__51899_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51899_SHARP_,port], null));
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
var G__51900 = (i + (1));
i = G__51900;
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
var alts_BANG___delegate = function (ports,p__51901){var map__51903 = p__51901;var map__51903__$1 = ((cljs.core.seq_QMARK_.call(null,map__51903))?cljs.core.apply.call(null,cljs.core.hash_map,map__51903):map__51903);var opts = map__51903__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__51901 = null;if (arguments.length > 1) {
  p__51901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__51901);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__51904){
var ports = cljs.core.first(arglist__51904);
var p__51901 = cljs.core.rest(arglist__51904);
return alts_BANG___delegate(ports,p__51901);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t51912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51912 = (function (ch,f,map_LT_,meta51913){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta51913 = meta51913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51912.cljs$lang$type = true;
cljs.core.async.t51912.cljs$lang$ctorStr = "cljs.core.async/t51912";
cljs.core.async.t51912.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51912");
});
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t51915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51915 = (function (fn1,_,meta51913,ch,f,map_LT_,meta51916){
this.fn1 = fn1;
this._ = _;
this.meta51913 = meta51913;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta51916 = meta51916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51915.cljs$lang$type = true;
cljs.core.async.t51915.cljs$lang$ctorStr = "cljs.core.async/t51915";
cljs.core.async.t51915.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51915");
});})(___$1))
;
cljs.core.async.t51915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t51915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t51915.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t51915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__51905_SHARP_){return f1.call(null,(((p1__51905_SHARP_ == null))?null:self__.f.call(null,p1__51905_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t51915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51917){var self__ = this;
var _51917__$1 = this;return self__.meta51916;
});})(___$1))
;
cljs.core.async.t51915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51917,meta51916__$1){var self__ = this;
var _51917__$1 = this;return (new cljs.core.async.t51915(self__.fn1,self__._,self__.meta51913,self__.ch,self__.f,self__.map_LT_,meta51916__$1));
});})(___$1))
;
cljs.core.async.__GT_t51915 = ((function (___$1){
return (function __GT_t51915(fn1__$1,___$2,meta51913__$1,ch__$2,f__$2,map_LT___$2,meta51916){return (new cljs.core.async.t51915(fn1__$1,___$2,meta51913__$1,ch__$2,f__$2,map_LT___$2,meta51916));
});})(___$1))
;
}
return (new cljs.core.async.t51915(fn1,___$1,self__.meta51913,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t51912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t51912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51914){var self__ = this;
var _51914__$1 = this;return self__.meta51913;
});
cljs.core.async.t51912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51914,meta51913__$1){var self__ = this;
var _51914__$1 = this;return (new cljs.core.async.t51912(self__.ch,self__.f,self__.map_LT_,meta51913__$1));
});
cljs.core.async.__GT_t51912 = (function __GT_t51912(ch__$1,f__$1,map_LT___$1,meta51913){return (new cljs.core.async.t51912(ch__$1,f__$1,map_LT___$1,meta51913));
});
}
return (new cljs.core.async.t51912(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t51921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51921 = (function (ch,f,map_GT_,meta51922){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta51922 = meta51922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51921.cljs$lang$type = true;
cljs.core.async.t51921.cljs$lang$ctorStr = "cljs.core.async/t51921";
cljs.core.async.t51921.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51921");
});
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t51921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t51921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51923){var self__ = this;
var _51923__$1 = this;return self__.meta51922;
});
cljs.core.async.t51921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51923,meta51922__$1){var self__ = this;
var _51923__$1 = this;return (new cljs.core.async.t51921(self__.ch,self__.f,self__.map_GT_,meta51922__$1));
});
cljs.core.async.__GT_t51921 = (function __GT_t51921(ch__$1,f__$1,map_GT___$1,meta51922){return (new cljs.core.async.t51921(ch__$1,f__$1,map_GT___$1,meta51922));
});
}
return (new cljs.core.async.t51921(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t51927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51927 = (function (ch,p,filter_GT_,meta51928){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta51928 = meta51928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51927.cljs$lang$type = true;
cljs.core.async.t51927.cljs$lang$ctorStr = "cljs.core.async/t51927";
cljs.core.async.t51927.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51927");
});
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t51927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t51927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51929){var self__ = this;
var _51929__$1 = this;return self__.meta51928;
});
cljs.core.async.t51927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51929,meta51928__$1){var self__ = this;
var _51929__$1 = this;return (new cljs.core.async.t51927(self__.ch,self__.p,self__.filter_GT_,meta51928__$1));
});
cljs.core.async.__GT_t51927 = (function __GT_t51927(ch__$1,p__$1,filter_GT___$1,meta51928){return (new cljs.core.async.t51927(ch__$1,p__$1,filter_GT___$1,meta51928));
});
}
return (new cljs.core.async.t51927(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52012 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52012,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52012,out){
return (function (state_51991){var state_val_51992 = (state_51991[(1)]);if((state_val_51992 === (7)))
{var inst_51987 = (state_51991[(2)]);var state_51991__$1 = state_51991;var statearr_51993_52013 = state_51991__$1;(statearr_51993_52013[(2)] = inst_51987);
(statearr_51993_52013[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (1)))
{var state_51991__$1 = state_51991;var statearr_51994_52014 = state_51991__$1;(statearr_51994_52014[(2)] = null);
(statearr_51994_52014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (4)))
{var inst_51973 = (state_51991[(7)]);var inst_51973__$1 = (state_51991[(2)]);var inst_51974 = (inst_51973__$1 == null);var state_51991__$1 = (function (){var statearr_51995 = state_51991;(statearr_51995[(7)] = inst_51973__$1);
return statearr_51995;
})();if(cljs.core.truth_(inst_51974))
{var statearr_51996_52015 = state_51991__$1;(statearr_51996_52015[(1)] = (5));
} else
{var statearr_51997_52016 = state_51991__$1;(statearr_51997_52016[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (6)))
{var inst_51973 = (state_51991[(7)]);var inst_51978 = p.call(null,inst_51973);var state_51991__$1 = state_51991;if(cljs.core.truth_(inst_51978))
{var statearr_51998_52017 = state_51991__$1;(statearr_51998_52017[(1)] = (8));
} else
{var statearr_51999_52018 = state_51991__$1;(statearr_51999_52018[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (3)))
{var inst_51989 = (state_51991[(2)]);var state_51991__$1 = state_51991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51991__$1,inst_51989);
} else
{if((state_val_51992 === (2)))
{var state_51991__$1 = state_51991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51991__$1,(4),ch);
} else
{if((state_val_51992 === (11)))
{var inst_51981 = (state_51991[(2)]);var state_51991__$1 = state_51991;var statearr_52000_52019 = state_51991__$1;(statearr_52000_52019[(2)] = inst_51981);
(statearr_52000_52019[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (9)))
{var state_51991__$1 = state_51991;var statearr_52001_52020 = state_51991__$1;(statearr_52001_52020[(2)] = null);
(statearr_52001_52020[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (5)))
{var inst_51976 = cljs.core.async.close_BANG_.call(null,out);var state_51991__$1 = state_51991;var statearr_52002_52021 = state_51991__$1;(statearr_52002_52021[(2)] = inst_51976);
(statearr_52002_52021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (10)))
{var inst_51984 = (state_51991[(2)]);var state_51991__$1 = (function (){var statearr_52003 = state_51991;(statearr_52003[(8)] = inst_51984);
return statearr_52003;
})();var statearr_52004_52022 = state_51991__$1;(statearr_52004_52022[(2)] = null);
(statearr_52004_52022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51992 === (8)))
{var inst_51973 = (state_51991[(7)]);var state_51991__$1 = state_51991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51991__$1,(11),out,inst_51973);
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
});})(c__5693__auto___52012,out))
;return ((function (switch__5678__auto__,c__5693__auto___52012,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52008 = [null,null,null,null,null,null,null,null,null];(statearr_52008[(0)] = state_machine__5679__auto__);
(statearr_52008[(1)] = (1));
return statearr_52008;
});
var state_machine__5679__auto____1 = (function (state_51991){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52009){if((e52009 instanceof Object))
{var ex__5682__auto__ = e52009;var statearr_52010_52023 = state_51991;(statearr_52010_52023[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52024 = state_51991;
state_51991 = G__52024;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51991){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52012,out))
})();var state__5695__auto__ = (function (){var statearr_52011 = f__5694__auto__.call(null);(statearr_52011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52012);
return statearr_52011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52012,out))
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
return (function (state_52176){var state_val_52177 = (state_52176[(1)]);if((state_val_52177 === (7)))
{var inst_52172 = (state_52176[(2)]);var state_52176__$1 = state_52176;var statearr_52178_52215 = state_52176__$1;(statearr_52178_52215[(2)] = inst_52172);
(statearr_52178_52215[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (20)))
{var inst_52147 = (state_52176[(7)]);var inst_52158 = (state_52176[(2)]);var inst_52159 = cljs.core.next.call(null,inst_52147);var inst_52133 = inst_52159;var inst_52134 = null;var inst_52135 = (0);var inst_52136 = (0);var state_52176__$1 = (function (){var statearr_52179 = state_52176;(statearr_52179[(8)] = inst_52133);
(statearr_52179[(9)] = inst_52158);
(statearr_52179[(10)] = inst_52135);
(statearr_52179[(11)] = inst_52134);
(statearr_52179[(12)] = inst_52136);
return statearr_52179;
})();var statearr_52180_52216 = state_52176__$1;(statearr_52180_52216[(2)] = null);
(statearr_52180_52216[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (1)))
{var state_52176__$1 = state_52176;var statearr_52181_52217 = state_52176__$1;(statearr_52181_52217[(2)] = null);
(statearr_52181_52217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (4)))
{var inst_52122 = (state_52176[(13)]);var inst_52122__$1 = (state_52176[(2)]);var inst_52123 = (inst_52122__$1 == null);var state_52176__$1 = (function (){var statearr_52185 = state_52176;(statearr_52185[(13)] = inst_52122__$1);
return statearr_52185;
})();if(cljs.core.truth_(inst_52123))
{var statearr_52186_52218 = state_52176__$1;(statearr_52186_52218[(1)] = (5));
} else
{var statearr_52187_52219 = state_52176__$1;(statearr_52187_52219[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (15)))
{var state_52176__$1 = state_52176;var statearr_52188_52220 = state_52176__$1;(statearr_52188_52220[(2)] = null);
(statearr_52188_52220[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (13)))
{var inst_52133 = (state_52176[(8)]);var inst_52135 = (state_52176[(10)]);var inst_52134 = (state_52176[(11)]);var inst_52136 = (state_52176[(12)]);var inst_52143 = (state_52176[(2)]);var inst_52144 = (inst_52136 + (1));var tmp52182 = inst_52133;var tmp52183 = inst_52135;var tmp52184 = inst_52134;var inst_52133__$1 = tmp52182;var inst_52134__$1 = tmp52184;var inst_52135__$1 = tmp52183;var inst_52136__$1 = inst_52144;var state_52176__$1 = (function (){var statearr_52189 = state_52176;(statearr_52189[(8)] = inst_52133__$1);
(statearr_52189[(14)] = inst_52143);
(statearr_52189[(10)] = inst_52135__$1);
(statearr_52189[(11)] = inst_52134__$1);
(statearr_52189[(12)] = inst_52136__$1);
return statearr_52189;
})();var statearr_52190_52221 = state_52176__$1;(statearr_52190_52221[(2)] = null);
(statearr_52190_52221[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (6)))
{var inst_52122 = (state_52176[(13)]);var inst_52127 = f.call(null,inst_52122);var inst_52132 = cljs.core.seq.call(null,inst_52127);var inst_52133 = inst_52132;var inst_52134 = null;var inst_52135 = (0);var inst_52136 = (0);var state_52176__$1 = (function (){var statearr_52191 = state_52176;(statearr_52191[(8)] = inst_52133);
(statearr_52191[(10)] = inst_52135);
(statearr_52191[(11)] = inst_52134);
(statearr_52191[(12)] = inst_52136);
return statearr_52191;
})();var statearr_52192_52222 = state_52176__$1;(statearr_52192_52222[(2)] = null);
(statearr_52192_52222[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (17)))
{var inst_52147 = (state_52176[(7)]);var inst_52151 = cljs.core.chunk_first.call(null,inst_52147);var inst_52152 = cljs.core.chunk_rest.call(null,inst_52147);var inst_52153 = cljs.core.count.call(null,inst_52151);var inst_52133 = inst_52152;var inst_52134 = inst_52151;var inst_52135 = inst_52153;var inst_52136 = (0);var state_52176__$1 = (function (){var statearr_52193 = state_52176;(statearr_52193[(8)] = inst_52133);
(statearr_52193[(10)] = inst_52135);
(statearr_52193[(11)] = inst_52134);
(statearr_52193[(12)] = inst_52136);
return statearr_52193;
})();var statearr_52194_52223 = state_52176__$1;(statearr_52194_52223[(2)] = null);
(statearr_52194_52223[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (3)))
{var inst_52174 = (state_52176[(2)]);var state_52176__$1 = state_52176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52176__$1,inst_52174);
} else
{if((state_val_52177 === (12)))
{var inst_52167 = (state_52176[(2)]);var state_52176__$1 = state_52176;var statearr_52195_52224 = state_52176__$1;(statearr_52195_52224[(2)] = inst_52167);
(statearr_52195_52224[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (2)))
{var state_52176__$1 = state_52176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52176__$1,(4),in$);
} else
{if((state_val_52177 === (19)))
{var inst_52162 = (state_52176[(2)]);var state_52176__$1 = state_52176;var statearr_52196_52225 = state_52176__$1;(statearr_52196_52225[(2)] = inst_52162);
(statearr_52196_52225[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (11)))
{var inst_52147 = (state_52176[(7)]);var inst_52133 = (state_52176[(8)]);var inst_52147__$1 = cljs.core.seq.call(null,inst_52133);var state_52176__$1 = (function (){var statearr_52197 = state_52176;(statearr_52197[(7)] = inst_52147__$1);
return statearr_52197;
})();if(inst_52147__$1)
{var statearr_52198_52226 = state_52176__$1;(statearr_52198_52226[(1)] = (14));
} else
{var statearr_52199_52227 = state_52176__$1;(statearr_52199_52227[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (9)))
{var inst_52169 = (state_52176[(2)]);var state_52176__$1 = (function (){var statearr_52200 = state_52176;(statearr_52200[(15)] = inst_52169);
return statearr_52200;
})();var statearr_52201_52228 = state_52176__$1;(statearr_52201_52228[(2)] = null);
(statearr_52201_52228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (5)))
{var inst_52125 = cljs.core.async.close_BANG_.call(null,out);var state_52176__$1 = state_52176;var statearr_52202_52229 = state_52176__$1;(statearr_52202_52229[(2)] = inst_52125);
(statearr_52202_52229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (14)))
{var inst_52147 = (state_52176[(7)]);var inst_52149 = cljs.core.chunked_seq_QMARK_.call(null,inst_52147);var state_52176__$1 = state_52176;if(inst_52149)
{var statearr_52203_52230 = state_52176__$1;(statearr_52203_52230[(1)] = (17));
} else
{var statearr_52204_52231 = state_52176__$1;(statearr_52204_52231[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (16)))
{var inst_52165 = (state_52176[(2)]);var state_52176__$1 = state_52176;var statearr_52205_52232 = state_52176__$1;(statearr_52205_52232[(2)] = inst_52165);
(statearr_52205_52232[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52177 === (10)))
{var inst_52134 = (state_52176[(11)]);var inst_52136 = (state_52176[(12)]);var inst_52141 = cljs.core._nth.call(null,inst_52134,inst_52136);var state_52176__$1 = state_52176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52176__$1,(13),out,inst_52141);
} else
{if((state_val_52177 === (18)))
{var inst_52147 = (state_52176[(7)]);var inst_52156 = cljs.core.first.call(null,inst_52147);var state_52176__$1 = state_52176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52176__$1,(20),out,inst_52156);
} else
{if((state_val_52177 === (8)))
{var inst_52135 = (state_52176[(10)]);var inst_52136 = (state_52176[(12)]);var inst_52138 = (inst_52136 < inst_52135);var inst_52139 = inst_52138;var state_52176__$1 = state_52176;if(cljs.core.truth_(inst_52139))
{var statearr_52206_52233 = state_52176__$1;(statearr_52206_52233[(1)] = (10));
} else
{var statearr_52207_52234 = state_52176__$1;(statearr_52207_52234[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_52211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52211[(0)] = state_machine__5679__auto__);
(statearr_52211[(1)] = (1));
return statearr_52211;
});
var state_machine__5679__auto____1 = (function (state_52176){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52176);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52212){if((e52212 instanceof Object))
{var ex__5682__auto__ = e52212;var statearr_52213_52235 = state_52176;(statearr_52213_52235[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52176);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52236 = state_52176;
state_52176 = G__52236;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52176){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52214 = f__5694__auto__.call(null);(statearr_52214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52214;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___52317 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52317){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52317){
return (function (state_52296){var state_val_52297 = (state_52296[(1)]);if((state_val_52297 === (7)))
{var inst_52292 = (state_52296[(2)]);var state_52296__$1 = state_52296;var statearr_52298_52318 = state_52296__$1;(statearr_52298_52318[(2)] = inst_52292);
(statearr_52298_52318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (1)))
{var state_52296__$1 = state_52296;var statearr_52299_52319 = state_52296__$1;(statearr_52299_52319[(2)] = null);
(statearr_52299_52319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (4)))
{var inst_52279 = (state_52296[(7)]);var inst_52279__$1 = (state_52296[(2)]);var inst_52280 = (inst_52279__$1 == null);var state_52296__$1 = (function (){var statearr_52300 = state_52296;(statearr_52300[(7)] = inst_52279__$1);
return statearr_52300;
})();if(cljs.core.truth_(inst_52280))
{var statearr_52301_52320 = state_52296__$1;(statearr_52301_52320[(1)] = (5));
} else
{var statearr_52302_52321 = state_52296__$1;(statearr_52302_52321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (6)))
{var inst_52279 = (state_52296[(7)]);var state_52296__$1 = state_52296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52296__$1,(11),to,inst_52279);
} else
{if((state_val_52297 === (3)))
{var inst_52294 = (state_52296[(2)]);var state_52296__$1 = state_52296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52296__$1,inst_52294);
} else
{if((state_val_52297 === (2)))
{var state_52296__$1 = state_52296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52296__$1,(4),from);
} else
{if((state_val_52297 === (11)))
{var inst_52289 = (state_52296[(2)]);var state_52296__$1 = (function (){var statearr_52303 = state_52296;(statearr_52303[(8)] = inst_52289);
return statearr_52303;
})();var statearr_52304_52322 = state_52296__$1;(statearr_52304_52322[(2)] = null);
(statearr_52304_52322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (9)))
{var state_52296__$1 = state_52296;var statearr_52305_52323 = state_52296__$1;(statearr_52305_52323[(2)] = null);
(statearr_52305_52323[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (5)))
{var state_52296__$1 = state_52296;if(cljs.core.truth_(close_QMARK_))
{var statearr_52306_52324 = state_52296__$1;(statearr_52306_52324[(1)] = (8));
} else
{var statearr_52307_52325 = state_52296__$1;(statearr_52307_52325[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (10)))
{var inst_52286 = (state_52296[(2)]);var state_52296__$1 = state_52296;var statearr_52308_52326 = state_52296__$1;(statearr_52308_52326[(2)] = inst_52286);
(statearr_52308_52326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52297 === (8)))
{var inst_52283 = cljs.core.async.close_BANG_.call(null,to);var state_52296__$1 = state_52296;var statearr_52309_52327 = state_52296__$1;(statearr_52309_52327[(2)] = inst_52283);
(statearr_52309_52327[(1)] = (10));
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
});})(c__5693__auto___52317))
;return ((function (switch__5678__auto__,c__5693__auto___52317){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52313 = [null,null,null,null,null,null,null,null,null];(statearr_52313[(0)] = state_machine__5679__auto__);
(statearr_52313[(1)] = (1));
return statearr_52313;
});
var state_machine__5679__auto____1 = (function (state_52296){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52296);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52314){if((e52314 instanceof Object))
{var ex__5682__auto__ = e52314;var statearr_52315_52328 = state_52296;(statearr_52315_52328[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52329 = state_52296;
state_52296 = G__52329;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52296){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52317))
})();var state__5695__auto__ = (function (){var statearr_52316 = f__5694__auto__.call(null);(statearr_52316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52317);
return statearr_52316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52317))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___52416 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52416,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52416,tc,fc){
return (function (state_52394){var state_val_52395 = (state_52394[(1)]);if((state_val_52395 === (7)))
{var inst_52390 = (state_52394[(2)]);var state_52394__$1 = state_52394;var statearr_52396_52417 = state_52394__$1;(statearr_52396_52417[(2)] = inst_52390);
(statearr_52396_52417[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (1)))
{var state_52394__$1 = state_52394;var statearr_52397_52418 = state_52394__$1;(statearr_52397_52418[(2)] = null);
(statearr_52397_52418[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (4)))
{var inst_52375 = (state_52394[(7)]);var inst_52375__$1 = (state_52394[(2)]);var inst_52376 = (inst_52375__$1 == null);var state_52394__$1 = (function (){var statearr_52398 = state_52394;(statearr_52398[(7)] = inst_52375__$1);
return statearr_52398;
})();if(cljs.core.truth_(inst_52376))
{var statearr_52399_52419 = state_52394__$1;(statearr_52399_52419[(1)] = (5));
} else
{var statearr_52400_52420 = state_52394__$1;(statearr_52400_52420[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (6)))
{var inst_52375 = (state_52394[(7)]);var inst_52381 = p.call(null,inst_52375);var state_52394__$1 = state_52394;if(cljs.core.truth_(inst_52381))
{var statearr_52401_52421 = state_52394__$1;(statearr_52401_52421[(1)] = (9));
} else
{var statearr_52402_52422 = state_52394__$1;(statearr_52402_52422[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (3)))
{var inst_52392 = (state_52394[(2)]);var state_52394__$1 = state_52394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52394__$1,inst_52392);
} else
{if((state_val_52395 === (2)))
{var state_52394__$1 = state_52394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52394__$1,(4),ch);
} else
{if((state_val_52395 === (11)))
{var inst_52375 = (state_52394[(7)]);var inst_52385 = (state_52394[(2)]);var state_52394__$1 = state_52394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52394__$1,(8),inst_52385,inst_52375);
} else
{if((state_val_52395 === (9)))
{var state_52394__$1 = state_52394;var statearr_52403_52423 = state_52394__$1;(statearr_52403_52423[(2)] = tc);
(statearr_52403_52423[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (5)))
{var inst_52378 = cljs.core.async.close_BANG_.call(null,tc);var inst_52379 = cljs.core.async.close_BANG_.call(null,fc);var state_52394__$1 = (function (){var statearr_52404 = state_52394;(statearr_52404[(8)] = inst_52378);
return statearr_52404;
})();var statearr_52405_52424 = state_52394__$1;(statearr_52405_52424[(2)] = inst_52379);
(statearr_52405_52424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (10)))
{var state_52394__$1 = state_52394;var statearr_52406_52425 = state_52394__$1;(statearr_52406_52425[(2)] = fc);
(statearr_52406_52425[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52395 === (8)))
{var inst_52387 = (state_52394[(2)]);var state_52394__$1 = (function (){var statearr_52407 = state_52394;(statearr_52407[(9)] = inst_52387);
return statearr_52407;
})();var statearr_52408_52426 = state_52394__$1;(statearr_52408_52426[(2)] = null);
(statearr_52408_52426[(1)] = (2));
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
});})(c__5693__auto___52416,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___52416,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52412 = [null,null,null,null,null,null,null,null,null,null];(statearr_52412[(0)] = state_machine__5679__auto__);
(statearr_52412[(1)] = (1));
return statearr_52412;
});
var state_machine__5679__auto____1 = (function (state_52394){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52394);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52413){if((e52413 instanceof Object))
{var ex__5682__auto__ = e52413;var statearr_52414_52427 = state_52394;(statearr_52414_52427[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52428 = state_52394;
state_52394 = G__52428;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52394){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52416,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_52415 = f__5694__auto__.call(null);(statearr_52415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52416);
return statearr_52415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52416,tc,fc))
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
return (function (state_52475){var state_val_52476 = (state_52475[(1)]);if((state_val_52476 === (7)))
{var inst_52471 = (state_52475[(2)]);var state_52475__$1 = state_52475;var statearr_52477_52493 = state_52475__$1;(statearr_52477_52493[(2)] = inst_52471);
(statearr_52477_52493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52476 === (6)))
{var inst_52464 = (state_52475[(7)]);var inst_52461 = (state_52475[(8)]);var inst_52468 = f.call(null,inst_52461,inst_52464);var inst_52461__$1 = inst_52468;var state_52475__$1 = (function (){var statearr_52478 = state_52475;(statearr_52478[(8)] = inst_52461__$1);
return statearr_52478;
})();var statearr_52479_52494 = state_52475__$1;(statearr_52479_52494[(2)] = null);
(statearr_52479_52494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52476 === (5)))
{var inst_52461 = (state_52475[(8)]);var state_52475__$1 = state_52475;var statearr_52480_52495 = state_52475__$1;(statearr_52480_52495[(2)] = inst_52461);
(statearr_52480_52495[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52476 === (4)))
{var inst_52464 = (state_52475[(7)]);var inst_52464__$1 = (state_52475[(2)]);var inst_52465 = (inst_52464__$1 == null);var state_52475__$1 = (function (){var statearr_52481 = state_52475;(statearr_52481[(7)] = inst_52464__$1);
return statearr_52481;
})();if(cljs.core.truth_(inst_52465))
{var statearr_52482_52496 = state_52475__$1;(statearr_52482_52496[(1)] = (5));
} else
{var statearr_52483_52497 = state_52475__$1;(statearr_52483_52497[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52476 === (3)))
{var inst_52473 = (state_52475[(2)]);var state_52475__$1 = state_52475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52475__$1,inst_52473);
} else
{if((state_val_52476 === (2)))
{var state_52475__$1 = state_52475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52475__$1,(4),ch);
} else
{if((state_val_52476 === (1)))
{var inst_52461 = init;var state_52475__$1 = (function (){var statearr_52484 = state_52475;(statearr_52484[(8)] = inst_52461);
return statearr_52484;
})();var statearr_52485_52498 = state_52475__$1;(statearr_52485_52498[(2)] = null);
(statearr_52485_52498[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_52489 = [null,null,null,null,null,null,null,null,null];(statearr_52489[(0)] = state_machine__5679__auto__);
(statearr_52489[(1)] = (1));
return statearr_52489;
});
var state_machine__5679__auto____1 = (function (state_52475){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52475);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52490){if((e52490 instanceof Object))
{var ex__5682__auto__ = e52490;var statearr_52491_52499 = state_52475;(statearr_52491_52499[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52500 = state_52475;
state_52475 = G__52500;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52475){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52492 = f__5694__auto__.call(null);(statearr_52492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52492;
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
return (function (state_52562){var state_val_52563 = (state_52562[(1)]);if((state_val_52563 === (7)))
{var inst_52543 = (state_52562[(7)]);var inst_52548 = (state_52562[(2)]);var inst_52549 = cljs.core.next.call(null,inst_52543);var inst_52543__$1 = inst_52549;var state_52562__$1 = (function (){var statearr_52564 = state_52562;(statearr_52564[(8)] = inst_52548);
(statearr_52564[(7)] = inst_52543__$1);
return statearr_52564;
})();var statearr_52565_52583 = state_52562__$1;(statearr_52565_52583[(2)] = null);
(statearr_52565_52583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (1)))
{var inst_52542 = cljs.core.seq.call(null,coll);var inst_52543 = inst_52542;var state_52562__$1 = (function (){var statearr_52566 = state_52562;(statearr_52566[(7)] = inst_52543);
return statearr_52566;
})();var statearr_52567_52584 = state_52562__$1;(statearr_52567_52584[(2)] = null);
(statearr_52567_52584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (4)))
{var inst_52543 = (state_52562[(7)]);var inst_52546 = cljs.core.first.call(null,inst_52543);var state_52562__$1 = state_52562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52562__$1,(7),ch,inst_52546);
} else
{if((state_val_52563 === (6)))
{var inst_52558 = (state_52562[(2)]);var state_52562__$1 = state_52562;var statearr_52568_52585 = state_52562__$1;(statearr_52568_52585[(2)] = inst_52558);
(statearr_52568_52585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (3)))
{var inst_52560 = (state_52562[(2)]);var state_52562__$1 = state_52562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52562__$1,inst_52560);
} else
{if((state_val_52563 === (2)))
{var inst_52543 = (state_52562[(7)]);var state_52562__$1 = state_52562;if(cljs.core.truth_(inst_52543))
{var statearr_52569_52586 = state_52562__$1;(statearr_52569_52586[(1)] = (4));
} else
{var statearr_52570_52587 = state_52562__$1;(statearr_52570_52587[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (9)))
{var state_52562__$1 = state_52562;var statearr_52571_52588 = state_52562__$1;(statearr_52571_52588[(2)] = null);
(statearr_52571_52588[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (5)))
{var state_52562__$1 = state_52562;if(cljs.core.truth_(close_QMARK_))
{var statearr_52572_52589 = state_52562__$1;(statearr_52572_52589[(1)] = (8));
} else
{var statearr_52573_52590 = state_52562__$1;(statearr_52573_52590[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (10)))
{var inst_52556 = (state_52562[(2)]);var state_52562__$1 = state_52562;var statearr_52574_52591 = state_52562__$1;(statearr_52574_52591[(2)] = inst_52556);
(statearr_52574_52591[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52563 === (8)))
{var inst_52553 = cljs.core.async.close_BANG_.call(null,ch);var state_52562__$1 = state_52562;var statearr_52575_52592 = state_52562__$1;(statearr_52575_52592[(2)] = inst_52553);
(statearr_52575_52592[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_52579 = [null,null,null,null,null,null,null,null,null];(statearr_52579[(0)] = state_machine__5679__auto__);
(statearr_52579[(1)] = (1));
return statearr_52579;
});
var state_machine__5679__auto____1 = (function (state_52562){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52562);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52580){if((e52580 instanceof Object))
{var ex__5682__auto__ = e52580;var statearr_52581_52593 = state_52562;(statearr_52581_52593[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52594 = state_52562;
state_52562 = G__52594;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52562){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52582 = f__5694__auto__.call(null);(statearr_52582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52582;
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
cljs.core.async.Mux = (function (){var obj52596 = {};return obj52596;
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
cljs.core.async.Mult = (function (){var obj52598 = {};return obj52598;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t52822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52822 = (function (cs,ch,mult,meta52823){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta52823 = meta52823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52822.cljs$lang$type = true;
cljs.core.async.t52822.cljs$lang$ctorStr = "cljs.core.async/t52822";
cljs.core.async.t52822.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52822");
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t52822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52824){var self__ = this;
var _52824__$1 = this;return self__.meta52823;
});})(cs))
;
cljs.core.async.t52822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52824,meta52823__$1){var self__ = this;
var _52824__$1 = this;return (new cljs.core.async.t52822(self__.cs,self__.ch,self__.mult,meta52823__$1));
});})(cs))
;
cljs.core.async.__GT_t52822 = ((function (cs){
return (function __GT_t52822(cs__$1,ch__$1,mult__$1,meta52823){return (new cljs.core.async.t52822(cs__$1,ch__$1,mult__$1,meta52823));
});})(cs))
;
}
return (new cljs.core.async.t52822(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___53045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53045,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53045,cs,m,dchan,dctr,done){
return (function (state_52959){var state_val_52960 = (state_52959[(1)]);if((state_val_52960 === (7)))
{var inst_52955 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_52961_53046 = state_52959__$1;(statearr_52961_53046[(2)] = inst_52955);
(statearr_52961_53046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (20)))
{var inst_52856 = (state_52959[(7)]);var inst_52866 = cljs.core.first.call(null,inst_52856);var inst_52867 = cljs.core.nth.call(null,inst_52866,(0),null);var inst_52868 = cljs.core.nth.call(null,inst_52866,(1),null);var state_52959__$1 = (function (){var statearr_52962 = state_52959;(statearr_52962[(8)] = inst_52867);
return statearr_52962;
})();if(cljs.core.truth_(inst_52868))
{var statearr_52963_53047 = state_52959__$1;(statearr_52963_53047[(1)] = (22));
} else
{var statearr_52964_53048 = state_52959__$1;(statearr_52964_53048[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (27)))
{var inst_52896 = (state_52959[(9)]);var inst_52898 = (state_52959[(10)]);var inst_52903 = cljs.core._nth.call(null,inst_52896,inst_52898);var state_52959__$1 = (function (){var statearr_52965 = state_52959;(statearr_52965[(11)] = inst_52903);
return statearr_52965;
})();var statearr_52966_53049 = state_52959__$1;(statearr_52966_53049[(2)] = null);
(statearr_52966_53049[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (1)))
{var state_52959__$1 = state_52959;var statearr_52967_53050 = state_52959__$1;(statearr_52967_53050[(2)] = null);
(statearr_52967_53050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (24)))
{var inst_52856 = (state_52959[(7)]);var inst_52873 = (state_52959[(2)]);var inst_52874 = cljs.core.next.call(null,inst_52856);var inst_52836 = inst_52874;var inst_52837 = null;var inst_52838 = (0);var inst_52839 = (0);var state_52959__$1 = (function (){var statearr_52968 = state_52959;(statearr_52968[(12)] = inst_52836);
(statearr_52968[(13)] = inst_52839);
(statearr_52968[(14)] = inst_52873);
(statearr_52968[(15)] = inst_52838);
(statearr_52968[(16)] = inst_52837);
return statearr_52968;
})();var statearr_52969_53051 = state_52959__$1;(statearr_52969_53051[(2)] = null);
(statearr_52969_53051[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (39)))
{var inst_52916 = (state_52959[(17)]);var inst_52934 = (state_52959[(2)]);var inst_52935 = cljs.core.next.call(null,inst_52916);var inst_52895 = inst_52935;var inst_52896 = null;var inst_52897 = (0);var inst_52898 = (0);var state_52959__$1 = (function (){var statearr_52973 = state_52959;(statearr_52973[(18)] = inst_52934);
(statearr_52973[(9)] = inst_52896);
(statearr_52973[(19)] = inst_52895);
(statearr_52973[(10)] = inst_52898);
(statearr_52973[(20)] = inst_52897);
return statearr_52973;
})();var statearr_52974_53052 = state_52959__$1;(statearr_52974_53052[(2)] = null);
(statearr_52974_53052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (4)))
{var inst_52827 = (state_52959[(21)]);var inst_52827__$1 = (state_52959[(2)]);var inst_52828 = (inst_52827__$1 == null);var state_52959__$1 = (function (){var statearr_52975 = state_52959;(statearr_52975[(21)] = inst_52827__$1);
return statearr_52975;
})();if(cljs.core.truth_(inst_52828))
{var statearr_52976_53053 = state_52959__$1;(statearr_52976_53053[(1)] = (5));
} else
{var statearr_52977_53054 = state_52959__$1;(statearr_52977_53054[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (15)))
{var inst_52836 = (state_52959[(12)]);var inst_52839 = (state_52959[(13)]);var inst_52838 = (state_52959[(15)]);var inst_52837 = (state_52959[(16)]);var inst_52852 = (state_52959[(2)]);var inst_52853 = (inst_52839 + (1));var tmp52970 = inst_52836;var tmp52971 = inst_52838;var tmp52972 = inst_52837;var inst_52836__$1 = tmp52970;var inst_52837__$1 = tmp52972;var inst_52838__$1 = tmp52971;var inst_52839__$1 = inst_52853;var state_52959__$1 = (function (){var statearr_52978 = state_52959;(statearr_52978[(12)] = inst_52836__$1);
(statearr_52978[(13)] = inst_52839__$1);
(statearr_52978[(15)] = inst_52838__$1);
(statearr_52978[(22)] = inst_52852);
(statearr_52978[(16)] = inst_52837__$1);
return statearr_52978;
})();var statearr_52979_53055 = state_52959__$1;(statearr_52979_53055[(2)] = null);
(statearr_52979_53055[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (21)))
{var inst_52877 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_52980_53056 = state_52959__$1;(statearr_52980_53056[(2)] = inst_52877);
(statearr_52980_53056[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (31)))
{var inst_52903 = (state_52959[(11)]);var inst_52904 = (state_52959[(2)]);var inst_52905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_52906 = cljs.core.async.untap_STAR_.call(null,m,inst_52903);var state_52959__$1 = (function (){var statearr_52981 = state_52959;(statearr_52981[(23)] = inst_52905);
(statearr_52981[(24)] = inst_52904);
return statearr_52981;
})();var statearr_52982_53057 = state_52959__$1;(statearr_52982_53057[(2)] = inst_52906);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (32)))
{var inst_52827 = (state_52959[(21)]);var inst_52903 = (state_52959[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52959,(31),Object,null,(30));var inst_52910 = cljs.core.async.put_BANG_.call(null,inst_52903,inst_52827,done);var state_52959__$1 = state_52959;var statearr_52983_53058 = state_52959__$1;(statearr_52983_53058[(2)] = inst_52910);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (40)))
{var inst_52925 = (state_52959[(25)]);var inst_52926 = (state_52959[(2)]);var inst_52927 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_52928 = cljs.core.async.untap_STAR_.call(null,m,inst_52925);var state_52959__$1 = (function (){var statearr_52984 = state_52959;(statearr_52984[(26)] = inst_52927);
(statearr_52984[(27)] = inst_52926);
return statearr_52984;
})();var statearr_52985_53059 = state_52959__$1;(statearr_52985_53059[(2)] = inst_52928);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (33)))
{var inst_52916 = (state_52959[(17)]);var inst_52918 = cljs.core.chunked_seq_QMARK_.call(null,inst_52916);var state_52959__$1 = state_52959;if(inst_52918)
{var statearr_52986_53060 = state_52959__$1;(statearr_52986_53060[(1)] = (36));
} else
{var statearr_52987_53061 = state_52959__$1;(statearr_52987_53061[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (13)))
{var inst_52846 = (state_52959[(28)]);var inst_52849 = cljs.core.async.close_BANG_.call(null,inst_52846);var state_52959__$1 = state_52959;var statearr_52988_53062 = state_52959__$1;(statearr_52988_53062[(2)] = inst_52849);
(statearr_52988_53062[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (22)))
{var inst_52867 = (state_52959[(8)]);var inst_52870 = cljs.core.async.close_BANG_.call(null,inst_52867);var state_52959__$1 = state_52959;var statearr_52989_53063 = state_52959__$1;(statearr_52989_53063[(2)] = inst_52870);
(statearr_52989_53063[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (36)))
{var inst_52916 = (state_52959[(17)]);var inst_52920 = cljs.core.chunk_first.call(null,inst_52916);var inst_52921 = cljs.core.chunk_rest.call(null,inst_52916);var inst_52922 = cljs.core.count.call(null,inst_52920);var inst_52895 = inst_52921;var inst_52896 = inst_52920;var inst_52897 = inst_52922;var inst_52898 = (0);var state_52959__$1 = (function (){var statearr_52990 = state_52959;(statearr_52990[(9)] = inst_52896);
(statearr_52990[(19)] = inst_52895);
(statearr_52990[(10)] = inst_52898);
(statearr_52990[(20)] = inst_52897);
return statearr_52990;
})();var statearr_52991_53064 = state_52959__$1;(statearr_52991_53064[(2)] = null);
(statearr_52991_53064[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (41)))
{var inst_52827 = (state_52959[(21)]);var inst_52925 = (state_52959[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52959,(40),Object,null,(39));var inst_52932 = cljs.core.async.put_BANG_.call(null,inst_52925,inst_52827,done);var state_52959__$1 = state_52959;var statearr_52992_53065 = state_52959__$1;(statearr_52992_53065[(2)] = inst_52932);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (43)))
{var state_52959__$1 = state_52959;var statearr_52993_53066 = state_52959__$1;(statearr_52993_53066[(2)] = null);
(statearr_52993_53066[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (29)))
{var inst_52943 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_52994_53067 = state_52959__$1;(statearr_52994_53067[(2)] = inst_52943);
(statearr_52994_53067[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (44)))
{var inst_52952 = (state_52959[(2)]);var state_52959__$1 = (function (){var statearr_52995 = state_52959;(statearr_52995[(29)] = inst_52952);
return statearr_52995;
})();var statearr_52996_53068 = state_52959__$1;(statearr_52996_53068[(2)] = null);
(statearr_52996_53068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (6)))
{var inst_52887 = (state_52959[(30)]);var inst_52886 = cljs.core.deref.call(null,cs);var inst_52887__$1 = cljs.core.keys.call(null,inst_52886);var inst_52888 = cljs.core.count.call(null,inst_52887__$1);var inst_52889 = cljs.core.reset_BANG_.call(null,dctr,inst_52888);var inst_52894 = cljs.core.seq.call(null,inst_52887__$1);var inst_52895 = inst_52894;var inst_52896 = null;var inst_52897 = (0);var inst_52898 = (0);var state_52959__$1 = (function (){var statearr_52997 = state_52959;(statearr_52997[(9)] = inst_52896);
(statearr_52997[(31)] = inst_52889);
(statearr_52997[(19)] = inst_52895);
(statearr_52997[(10)] = inst_52898);
(statearr_52997[(20)] = inst_52897);
(statearr_52997[(30)] = inst_52887__$1);
return statearr_52997;
})();var statearr_52998_53069 = state_52959__$1;(statearr_52998_53069[(2)] = null);
(statearr_52998_53069[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (28)))
{var inst_52916 = (state_52959[(17)]);var inst_52895 = (state_52959[(19)]);var inst_52916__$1 = cljs.core.seq.call(null,inst_52895);var state_52959__$1 = (function (){var statearr_52999 = state_52959;(statearr_52999[(17)] = inst_52916__$1);
return statearr_52999;
})();if(inst_52916__$1)
{var statearr_53000_53070 = state_52959__$1;(statearr_53000_53070[(1)] = (33));
} else
{var statearr_53001_53071 = state_52959__$1;(statearr_53001_53071[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (25)))
{var inst_52898 = (state_52959[(10)]);var inst_52897 = (state_52959[(20)]);var inst_52900 = (inst_52898 < inst_52897);var inst_52901 = inst_52900;var state_52959__$1 = state_52959;if(cljs.core.truth_(inst_52901))
{var statearr_53002_53072 = state_52959__$1;(statearr_53002_53072[(1)] = (27));
} else
{var statearr_53003_53073 = state_52959__$1;(statearr_53003_53073[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (34)))
{var state_52959__$1 = state_52959;var statearr_53004_53074 = state_52959__$1;(statearr_53004_53074[(2)] = null);
(statearr_53004_53074[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (17)))
{var state_52959__$1 = state_52959;var statearr_53005_53075 = state_52959__$1;(statearr_53005_53075[(2)] = null);
(statearr_53005_53075[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (3)))
{var inst_52957 = (state_52959[(2)]);var state_52959__$1 = state_52959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52959__$1,inst_52957);
} else
{if((state_val_52960 === (12)))
{var inst_52882 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53006_53076 = state_52959__$1;(statearr_53006_53076[(2)] = inst_52882);
(statearr_53006_53076[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (2)))
{var state_52959__$1 = state_52959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52959__$1,(4),ch);
} else
{if((state_val_52960 === (23)))
{var state_52959__$1 = state_52959;var statearr_53007_53077 = state_52959__$1;(statearr_53007_53077[(2)] = null);
(statearr_53007_53077[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (35)))
{var inst_52941 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53008_53078 = state_52959__$1;(statearr_53008_53078[(2)] = inst_52941);
(statearr_53008_53078[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (19)))
{var inst_52856 = (state_52959[(7)]);var inst_52860 = cljs.core.chunk_first.call(null,inst_52856);var inst_52861 = cljs.core.chunk_rest.call(null,inst_52856);var inst_52862 = cljs.core.count.call(null,inst_52860);var inst_52836 = inst_52861;var inst_52837 = inst_52860;var inst_52838 = inst_52862;var inst_52839 = (0);var state_52959__$1 = (function (){var statearr_53009 = state_52959;(statearr_53009[(12)] = inst_52836);
(statearr_53009[(13)] = inst_52839);
(statearr_53009[(15)] = inst_52838);
(statearr_53009[(16)] = inst_52837);
return statearr_53009;
})();var statearr_53010_53079 = state_52959__$1;(statearr_53010_53079[(2)] = null);
(statearr_53010_53079[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (11)))
{var inst_52836 = (state_52959[(12)]);var inst_52856 = (state_52959[(7)]);var inst_52856__$1 = cljs.core.seq.call(null,inst_52836);var state_52959__$1 = (function (){var statearr_53011 = state_52959;(statearr_53011[(7)] = inst_52856__$1);
return statearr_53011;
})();if(inst_52856__$1)
{var statearr_53012_53080 = state_52959__$1;(statearr_53012_53080[(1)] = (16));
} else
{var statearr_53013_53081 = state_52959__$1;(statearr_53013_53081[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (9)))
{var inst_52884 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53014_53082 = state_52959__$1;(statearr_53014_53082[(2)] = inst_52884);
(statearr_53014_53082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (5)))
{var inst_52834 = cljs.core.deref.call(null,cs);var inst_52835 = cljs.core.seq.call(null,inst_52834);var inst_52836 = inst_52835;var inst_52837 = null;var inst_52838 = (0);var inst_52839 = (0);var state_52959__$1 = (function (){var statearr_53015 = state_52959;(statearr_53015[(12)] = inst_52836);
(statearr_53015[(13)] = inst_52839);
(statearr_53015[(15)] = inst_52838);
(statearr_53015[(16)] = inst_52837);
return statearr_53015;
})();var statearr_53016_53083 = state_52959__$1;(statearr_53016_53083[(2)] = null);
(statearr_53016_53083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (14)))
{var state_52959__$1 = state_52959;var statearr_53017_53084 = state_52959__$1;(statearr_53017_53084[(2)] = null);
(statearr_53017_53084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (45)))
{var inst_52949 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53018_53085 = state_52959__$1;(statearr_53018_53085[(2)] = inst_52949);
(statearr_53018_53085[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (26)))
{var inst_52887 = (state_52959[(30)]);var inst_52945 = (state_52959[(2)]);var inst_52946 = cljs.core.seq.call(null,inst_52887);var state_52959__$1 = (function (){var statearr_53019 = state_52959;(statearr_53019[(32)] = inst_52945);
return statearr_53019;
})();if(inst_52946)
{var statearr_53020_53086 = state_52959__$1;(statearr_53020_53086[(1)] = (42));
} else
{var statearr_53021_53087 = state_52959__$1;(statearr_53021_53087[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (16)))
{var inst_52856 = (state_52959[(7)]);var inst_52858 = cljs.core.chunked_seq_QMARK_.call(null,inst_52856);var state_52959__$1 = state_52959;if(inst_52858)
{var statearr_53025_53088 = state_52959__$1;(statearr_53025_53088[(1)] = (19));
} else
{var statearr_53026_53089 = state_52959__$1;(statearr_53026_53089[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (38)))
{var inst_52938 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53027_53090 = state_52959__$1;(statearr_53027_53090[(2)] = inst_52938);
(statearr_53027_53090[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (30)))
{var inst_52896 = (state_52959[(9)]);var inst_52895 = (state_52959[(19)]);var inst_52898 = (state_52959[(10)]);var inst_52897 = (state_52959[(20)]);var inst_52912 = (state_52959[(2)]);var inst_52913 = (inst_52898 + (1));var tmp53022 = inst_52896;var tmp53023 = inst_52895;var tmp53024 = inst_52897;var inst_52895__$1 = tmp53023;var inst_52896__$1 = tmp53022;var inst_52897__$1 = tmp53024;var inst_52898__$1 = inst_52913;var state_52959__$1 = (function (){var statearr_53028 = state_52959;(statearr_53028[(9)] = inst_52896__$1);
(statearr_53028[(33)] = inst_52912);
(statearr_53028[(19)] = inst_52895__$1);
(statearr_53028[(10)] = inst_52898__$1);
(statearr_53028[(20)] = inst_52897__$1);
return statearr_53028;
})();var statearr_53029_53091 = state_52959__$1;(statearr_53029_53091[(2)] = null);
(statearr_53029_53091[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (10)))
{var inst_52839 = (state_52959[(13)]);var inst_52837 = (state_52959[(16)]);var inst_52845 = cljs.core._nth.call(null,inst_52837,inst_52839);var inst_52846 = cljs.core.nth.call(null,inst_52845,(0),null);var inst_52847 = cljs.core.nth.call(null,inst_52845,(1),null);var state_52959__$1 = (function (){var statearr_53030 = state_52959;(statearr_53030[(28)] = inst_52846);
return statearr_53030;
})();if(cljs.core.truth_(inst_52847))
{var statearr_53031_53092 = state_52959__$1;(statearr_53031_53092[(1)] = (13));
} else
{var statearr_53032_53093 = state_52959__$1;(statearr_53032_53093[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (18)))
{var inst_52880 = (state_52959[(2)]);var state_52959__$1 = state_52959;var statearr_53033_53094 = state_52959__$1;(statearr_53033_53094[(2)] = inst_52880);
(statearr_53033_53094[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (42)))
{var state_52959__$1 = state_52959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52959__$1,(45),dchan);
} else
{if((state_val_52960 === (37)))
{var inst_52916 = (state_52959[(17)]);var inst_52925 = cljs.core.first.call(null,inst_52916);var state_52959__$1 = (function (){var statearr_53034 = state_52959;(statearr_53034[(25)] = inst_52925);
return statearr_53034;
})();var statearr_53035_53095 = state_52959__$1;(statearr_53035_53095[(2)] = null);
(statearr_53035_53095[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52960 === (8)))
{var inst_52839 = (state_52959[(13)]);var inst_52838 = (state_52959[(15)]);var inst_52841 = (inst_52839 < inst_52838);var inst_52842 = inst_52841;var state_52959__$1 = state_52959;if(cljs.core.truth_(inst_52842))
{var statearr_53036_53096 = state_52959__$1;(statearr_53036_53096[(1)] = (10));
} else
{var statearr_53037_53097 = state_52959__$1;(statearr_53037_53097[(1)] = (11));
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
});})(c__5693__auto___53045,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___53045,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53041[(0)] = state_machine__5679__auto__);
(statearr_53041[(1)] = (1));
return statearr_53041;
});
var state_machine__5679__auto____1 = (function (state_52959){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53042){if((e53042 instanceof Object))
{var ex__5682__auto__ = e53042;var statearr_53043_53098 = state_52959;(statearr_53043_53098[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53099 = state_52959;
state_52959 = G__53099;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52959){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53045,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_53044 = f__5694__auto__.call(null);(statearr_53044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53045);
return statearr_53044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53045,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj53101 = {};return obj53101;
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
;var m = (function (){if(typeof cljs.core.async.t53211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53211 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53212){
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
this.meta53212 = meta53212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53211.cljs$lang$type = true;
cljs.core.async.t53211.cljs$lang$ctorStr = "cljs.core.async/t53211";
cljs.core.async.t53211.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53211");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53213){var self__ = this;
var _53213__$1 = this;return self__.meta53212;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53213,meta53212__$1){var self__ = this;
var _53213__$1 = this;return (new cljs.core.async.t53211(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53212__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t53211 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t53211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53212){return (new cljs.core.async.t53211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53212));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t53211(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___53320 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53278){var state_val_53279 = (state_53278[(1)]);if((state_val_53279 === (7)))
{var inst_53227 = (state_53278[(7)]);var inst_53232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53227);var state_53278__$1 = state_53278;var statearr_53280_53321 = state_53278__$1;(statearr_53280_53321[(2)] = inst_53232);
(statearr_53280_53321[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (20)))
{var inst_53242 = (state_53278[(8)]);var state_53278__$1 = state_53278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53278__$1,(23),out,inst_53242);
} else
{if((state_val_53279 === (1)))
{var inst_53217 = (state_53278[(9)]);var inst_53217__$1 = calc_state.call(null);var inst_53218 = cljs.core.seq_QMARK_.call(null,inst_53217__$1);var state_53278__$1 = (function (){var statearr_53281 = state_53278;(statearr_53281[(9)] = inst_53217__$1);
return statearr_53281;
})();if(inst_53218)
{var statearr_53282_53322 = state_53278__$1;(statearr_53282_53322[(1)] = (2));
} else
{var statearr_53283_53323 = state_53278__$1;(statearr_53283_53323[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (4)))
{var inst_53217 = (state_53278[(9)]);var inst_53223 = (state_53278[(2)]);var inst_53224 = cljs.core.get.call(null,inst_53223,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53225 = cljs.core.get.call(null,inst_53223,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53226 = cljs.core.get.call(null,inst_53223,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_53227 = inst_53217;var state_53278__$1 = (function (){var statearr_53284 = state_53278;(statearr_53284[(7)] = inst_53227);
(statearr_53284[(10)] = inst_53224);
(statearr_53284[(11)] = inst_53226);
(statearr_53284[(12)] = inst_53225);
return statearr_53284;
})();var statearr_53285_53324 = state_53278__$1;(statearr_53285_53324[(2)] = null);
(statearr_53285_53324[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (15)))
{var state_53278__$1 = state_53278;var statearr_53286_53325 = state_53278__$1;(statearr_53286_53325[(2)] = null);
(statearr_53286_53325[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (21)))
{var state_53278__$1 = state_53278;var statearr_53287_53326 = state_53278__$1;(statearr_53287_53326[(2)] = null);
(statearr_53287_53326[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (13)))
{var inst_53274 = (state_53278[(2)]);var state_53278__$1 = state_53278;var statearr_53288_53327 = state_53278__$1;(statearr_53288_53327[(2)] = inst_53274);
(statearr_53288_53327[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (22)))
{var inst_53235 = (state_53278[(13)]);var inst_53271 = (state_53278[(2)]);var inst_53227 = inst_53235;var state_53278__$1 = (function (){var statearr_53289 = state_53278;(statearr_53289[(7)] = inst_53227);
(statearr_53289[(14)] = inst_53271);
return statearr_53289;
})();var statearr_53290_53328 = state_53278__$1;(statearr_53290_53328[(2)] = null);
(statearr_53290_53328[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (6)))
{var inst_53276 = (state_53278[(2)]);var state_53278__$1 = state_53278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53278__$1,inst_53276);
} else
{if((state_val_53279 === (17)))
{var inst_53257 = (state_53278[(15)]);var state_53278__$1 = state_53278;var statearr_53291_53329 = state_53278__$1;(statearr_53291_53329[(2)] = inst_53257);
(statearr_53291_53329[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (3)))
{var inst_53217 = (state_53278[(9)]);var state_53278__$1 = state_53278;var statearr_53292_53330 = state_53278__$1;(statearr_53292_53330[(2)] = inst_53217);
(statearr_53292_53330[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (12)))
{var inst_53238 = (state_53278[(16)]);var inst_53257 = (state_53278[(15)]);var inst_53243 = (state_53278[(17)]);var inst_53257__$1 = inst_53238.call(null,inst_53243);var state_53278__$1 = (function (){var statearr_53293 = state_53278;(statearr_53293[(15)] = inst_53257__$1);
return statearr_53293;
})();if(cljs.core.truth_(inst_53257__$1))
{var statearr_53294_53331 = state_53278__$1;(statearr_53294_53331[(1)] = (17));
} else
{var statearr_53295_53332 = state_53278__$1;(statearr_53295_53332[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (2)))
{var inst_53217 = (state_53278[(9)]);var inst_53220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53217);var state_53278__$1 = state_53278;var statearr_53296_53333 = state_53278__$1;(statearr_53296_53333[(2)] = inst_53220);
(statearr_53296_53333[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (23)))
{var inst_53268 = (state_53278[(2)]);var state_53278__$1 = state_53278;var statearr_53297_53334 = state_53278__$1;(statearr_53297_53334[(2)] = inst_53268);
(statearr_53297_53334[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (19)))
{var inst_53265 = (state_53278[(2)]);var state_53278__$1 = state_53278;if(cljs.core.truth_(inst_53265))
{var statearr_53298_53335 = state_53278__$1;(statearr_53298_53335[(1)] = (20));
} else
{var statearr_53299_53336 = state_53278__$1;(statearr_53299_53336[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (11)))
{var inst_53242 = (state_53278[(8)]);var inst_53248 = (inst_53242 == null);var state_53278__$1 = state_53278;if(cljs.core.truth_(inst_53248))
{var statearr_53300_53337 = state_53278__$1;(statearr_53300_53337[(1)] = (14));
} else
{var statearr_53301_53338 = state_53278__$1;(statearr_53301_53338[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (9)))
{var inst_53235 = (state_53278[(13)]);var inst_53235__$1 = (state_53278[(2)]);var inst_53236 = cljs.core.get.call(null,inst_53235__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53237 = cljs.core.get.call(null,inst_53235__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53238 = cljs.core.get.call(null,inst_53235__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_53278__$1 = (function (){var statearr_53302 = state_53278;(statearr_53302[(16)] = inst_53238);
(statearr_53302[(18)] = inst_53237);
(statearr_53302[(13)] = inst_53235__$1);
return statearr_53302;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53278__$1,(10),inst_53236);
} else
{if((state_val_53279 === (5)))
{var inst_53227 = (state_53278[(7)]);var inst_53230 = cljs.core.seq_QMARK_.call(null,inst_53227);var state_53278__$1 = state_53278;if(inst_53230)
{var statearr_53303_53339 = state_53278__$1;(statearr_53303_53339[(1)] = (7));
} else
{var statearr_53304_53340 = state_53278__$1;(statearr_53304_53340[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (14)))
{var inst_53243 = (state_53278[(17)]);var inst_53250 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53243);var state_53278__$1 = state_53278;var statearr_53305_53341 = state_53278__$1;(statearr_53305_53341[(2)] = inst_53250);
(statearr_53305_53341[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (16)))
{var inst_53253 = (state_53278[(2)]);var inst_53254 = calc_state.call(null);var inst_53227 = inst_53254;var state_53278__$1 = (function (){var statearr_53306 = state_53278;(statearr_53306[(7)] = inst_53227);
(statearr_53306[(19)] = inst_53253);
return statearr_53306;
})();var statearr_53307_53342 = state_53278__$1;(statearr_53307_53342[(2)] = null);
(statearr_53307_53342[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (10)))
{var inst_53243 = (state_53278[(17)]);var inst_53242 = (state_53278[(8)]);var inst_53241 = (state_53278[(2)]);var inst_53242__$1 = cljs.core.nth.call(null,inst_53241,(0),null);var inst_53243__$1 = cljs.core.nth.call(null,inst_53241,(1),null);var inst_53244 = (inst_53242__$1 == null);var inst_53245 = cljs.core._EQ_.call(null,inst_53243__$1,change);var inst_53246 = (inst_53244) || (inst_53245);var state_53278__$1 = (function (){var statearr_53308 = state_53278;(statearr_53308[(17)] = inst_53243__$1);
(statearr_53308[(8)] = inst_53242__$1);
return statearr_53308;
})();if(cljs.core.truth_(inst_53246))
{var statearr_53309_53343 = state_53278__$1;(statearr_53309_53343[(1)] = (11));
} else
{var statearr_53310_53344 = state_53278__$1;(statearr_53310_53344[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (18)))
{var inst_53238 = (state_53278[(16)]);var inst_53237 = (state_53278[(18)]);var inst_53243 = (state_53278[(17)]);var inst_53260 = cljs.core.empty_QMARK_.call(null,inst_53238);var inst_53261 = inst_53237.call(null,inst_53243);var inst_53262 = cljs.core.not.call(null,inst_53261);var inst_53263 = (inst_53260) && (inst_53262);var state_53278__$1 = state_53278;var statearr_53311_53345 = state_53278__$1;(statearr_53311_53345[(2)] = inst_53263);
(statearr_53311_53345[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53279 === (8)))
{var inst_53227 = (state_53278[(7)]);var state_53278__$1 = state_53278;var statearr_53312_53346 = state_53278__$1;(statearr_53312_53346[(2)] = inst_53227);
(statearr_53312_53346[(1)] = (9));
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
});})(c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53316[(0)] = state_machine__5679__auto__);
(statearr_53316[(1)] = (1));
return statearr_53316;
});
var state_machine__5679__auto____1 = (function (state_53278){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53278);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53317){if((e53317 instanceof Object))
{var ex__5682__auto__ = e53317;var statearr_53318_53347 = state_53278;(statearr_53318_53347[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53348 = state_53278;
state_53278 = G__53348;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53278){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_53319 = f__5694__auto__.call(null);(statearr_53319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53320);
return statearr_53319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj53350 = {};return obj53350;
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
return (function (p1__53351_SHARP_){if(cljs.core.truth_(p1__53351_SHARP_.call(null,topic)))
{return p1__53351_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__53351_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t53476 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53476 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta53477){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta53477 = meta53477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53476.cljs$lang$type = true;
cljs.core.async.t53476.cljs$lang$ctorStr = "cljs.core.async/t53476";
cljs.core.async.t53476.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53476");
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t53476.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53478){var self__ = this;
var _53478__$1 = this;return self__.meta53477;
});})(mults,ensure_mult))
;
cljs.core.async.t53476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53478,meta53477__$1){var self__ = this;
var _53478__$1 = this;return (new cljs.core.async.t53476(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta53477__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t53476 = ((function (mults,ensure_mult){
return (function __GT_t53476(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53477){return (new cljs.core.async.t53476(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53477));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t53476(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___53600 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53600,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53600,mults,ensure_mult,p){
return (function (state_53552){var state_val_53553 = (state_53552[(1)]);if((state_val_53553 === (7)))
{var inst_53548 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53554_53601 = state_53552__$1;(statearr_53554_53601[(2)] = inst_53548);
(statearr_53554_53601[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (20)))
{var state_53552__$1 = state_53552;var statearr_53555_53602 = state_53552__$1;(statearr_53555_53602[(2)] = null);
(statearr_53555_53602[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (1)))
{var state_53552__$1 = state_53552;var statearr_53556_53603 = state_53552__$1;(statearr_53556_53603[(2)] = null);
(statearr_53556_53603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (24)))
{var inst_53481 = (state_53552[(7)]);var inst_53531 = (state_53552[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53552,(23),Object,null,(22));var inst_53538 = cljs.core.async.muxch_STAR_.call(null,inst_53531);var state_53552__$1 = state_53552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53552__$1,(25),inst_53538,inst_53481);
} else
{if((state_val_53553 === (4)))
{var inst_53481 = (state_53552[(7)]);var inst_53481__$1 = (state_53552[(2)]);var inst_53482 = (inst_53481__$1 == null);var state_53552__$1 = (function (){var statearr_53557 = state_53552;(statearr_53557[(7)] = inst_53481__$1);
return statearr_53557;
})();if(cljs.core.truth_(inst_53482))
{var statearr_53558_53604 = state_53552__$1;(statearr_53558_53604[(1)] = (5));
} else
{var statearr_53559_53605 = state_53552__$1;(statearr_53559_53605[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (15)))
{var inst_53523 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53560_53606 = state_53552__$1;(statearr_53560_53606[(2)] = inst_53523);
(statearr_53560_53606[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (21)))
{var inst_53545 = (state_53552[(2)]);var state_53552__$1 = (function (){var statearr_53561 = state_53552;(statearr_53561[(9)] = inst_53545);
return statearr_53561;
})();var statearr_53562_53607 = state_53552__$1;(statearr_53562_53607[(2)] = null);
(statearr_53562_53607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (13)))
{var inst_53505 = (state_53552[(10)]);var inst_53507 = cljs.core.chunked_seq_QMARK_.call(null,inst_53505);var state_53552__$1 = state_53552;if(inst_53507)
{var statearr_53563_53608 = state_53552__$1;(statearr_53563_53608[(1)] = (16));
} else
{var statearr_53564_53609 = state_53552__$1;(statearr_53564_53609[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (22)))
{var inst_53542 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53565_53610 = state_53552__$1;(statearr_53565_53610[(2)] = inst_53542);
(statearr_53565_53610[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (6)))
{var inst_53481 = (state_53552[(7)]);var inst_53531 = (state_53552[(8)]);var inst_53529 = (state_53552[(11)]);var inst_53529__$1 = topic_fn.call(null,inst_53481);var inst_53530 = cljs.core.deref.call(null,mults);var inst_53531__$1 = cljs.core.get.call(null,inst_53530,inst_53529__$1);var state_53552__$1 = (function (){var statearr_53566 = state_53552;(statearr_53566[(8)] = inst_53531__$1);
(statearr_53566[(11)] = inst_53529__$1);
return statearr_53566;
})();if(cljs.core.truth_(inst_53531__$1))
{var statearr_53567_53611 = state_53552__$1;(statearr_53567_53611[(1)] = (19));
} else
{var statearr_53568_53612 = state_53552__$1;(statearr_53568_53612[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (25)))
{var inst_53540 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53569_53613 = state_53552__$1;(statearr_53569_53613[(2)] = inst_53540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53552__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (17)))
{var inst_53505 = (state_53552[(10)]);var inst_53514 = cljs.core.first.call(null,inst_53505);var inst_53515 = cljs.core.async.muxch_STAR_.call(null,inst_53514);var inst_53516 = cljs.core.async.close_BANG_.call(null,inst_53515);var inst_53517 = cljs.core.next.call(null,inst_53505);var inst_53491 = inst_53517;var inst_53492 = null;var inst_53493 = (0);var inst_53494 = (0);var state_53552__$1 = (function (){var statearr_53570 = state_53552;(statearr_53570[(12)] = inst_53492);
(statearr_53570[(13)] = inst_53491);
(statearr_53570[(14)] = inst_53493);
(statearr_53570[(15)] = inst_53494);
(statearr_53570[(16)] = inst_53516);
return statearr_53570;
})();var statearr_53571_53614 = state_53552__$1;(statearr_53571_53614[(2)] = null);
(statearr_53571_53614[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (3)))
{var inst_53550 = (state_53552[(2)]);var state_53552__$1 = state_53552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53552__$1,inst_53550);
} else
{if((state_val_53553 === (12)))
{var inst_53525 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53572_53615 = state_53552__$1;(statearr_53572_53615[(2)] = inst_53525);
(statearr_53572_53615[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (2)))
{var state_53552__$1 = state_53552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53552__$1,(4),ch);
} else
{if((state_val_53553 === (23)))
{var inst_53529 = (state_53552[(11)]);var inst_53533 = (state_53552[(2)]);var inst_53534 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53529);var state_53552__$1 = (function (){var statearr_53573 = state_53552;(statearr_53573[(17)] = inst_53533);
return statearr_53573;
})();var statearr_53574_53616 = state_53552__$1;(statearr_53574_53616[(2)] = inst_53534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53552__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (19)))
{var state_53552__$1 = state_53552;var statearr_53575_53617 = state_53552__$1;(statearr_53575_53617[(2)] = null);
(statearr_53575_53617[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (11)))
{var inst_53491 = (state_53552[(13)]);var inst_53505 = (state_53552[(10)]);var inst_53505__$1 = cljs.core.seq.call(null,inst_53491);var state_53552__$1 = (function (){var statearr_53576 = state_53552;(statearr_53576[(10)] = inst_53505__$1);
return statearr_53576;
})();if(inst_53505__$1)
{var statearr_53577_53618 = state_53552__$1;(statearr_53577_53618[(1)] = (13));
} else
{var statearr_53578_53619 = state_53552__$1;(statearr_53578_53619[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (9)))
{var inst_53527 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53579_53620 = state_53552__$1;(statearr_53579_53620[(2)] = inst_53527);
(statearr_53579_53620[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (5)))
{var inst_53488 = cljs.core.deref.call(null,mults);var inst_53489 = cljs.core.vals.call(null,inst_53488);var inst_53490 = cljs.core.seq.call(null,inst_53489);var inst_53491 = inst_53490;var inst_53492 = null;var inst_53493 = (0);var inst_53494 = (0);var state_53552__$1 = (function (){var statearr_53580 = state_53552;(statearr_53580[(12)] = inst_53492);
(statearr_53580[(13)] = inst_53491);
(statearr_53580[(14)] = inst_53493);
(statearr_53580[(15)] = inst_53494);
return statearr_53580;
})();var statearr_53581_53621 = state_53552__$1;(statearr_53581_53621[(2)] = null);
(statearr_53581_53621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (14)))
{var state_53552__$1 = state_53552;var statearr_53585_53622 = state_53552__$1;(statearr_53585_53622[(2)] = null);
(statearr_53585_53622[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (16)))
{var inst_53505 = (state_53552[(10)]);var inst_53509 = cljs.core.chunk_first.call(null,inst_53505);var inst_53510 = cljs.core.chunk_rest.call(null,inst_53505);var inst_53511 = cljs.core.count.call(null,inst_53509);var inst_53491 = inst_53510;var inst_53492 = inst_53509;var inst_53493 = inst_53511;var inst_53494 = (0);var state_53552__$1 = (function (){var statearr_53586 = state_53552;(statearr_53586[(12)] = inst_53492);
(statearr_53586[(13)] = inst_53491);
(statearr_53586[(14)] = inst_53493);
(statearr_53586[(15)] = inst_53494);
return statearr_53586;
})();var statearr_53587_53623 = state_53552__$1;(statearr_53587_53623[(2)] = null);
(statearr_53587_53623[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (10)))
{var inst_53492 = (state_53552[(12)]);var inst_53491 = (state_53552[(13)]);var inst_53493 = (state_53552[(14)]);var inst_53494 = (state_53552[(15)]);var inst_53499 = cljs.core._nth.call(null,inst_53492,inst_53494);var inst_53500 = cljs.core.async.muxch_STAR_.call(null,inst_53499);var inst_53501 = cljs.core.async.close_BANG_.call(null,inst_53500);var inst_53502 = (inst_53494 + (1));var tmp53582 = inst_53492;var tmp53583 = inst_53491;var tmp53584 = inst_53493;var inst_53491__$1 = tmp53583;var inst_53492__$1 = tmp53582;var inst_53493__$1 = tmp53584;var inst_53494__$1 = inst_53502;var state_53552__$1 = (function (){var statearr_53588 = state_53552;(statearr_53588[(12)] = inst_53492__$1);
(statearr_53588[(18)] = inst_53501);
(statearr_53588[(13)] = inst_53491__$1);
(statearr_53588[(14)] = inst_53493__$1);
(statearr_53588[(15)] = inst_53494__$1);
return statearr_53588;
})();var statearr_53589_53624 = state_53552__$1;(statearr_53589_53624[(2)] = null);
(statearr_53589_53624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (18)))
{var inst_53520 = (state_53552[(2)]);var state_53552__$1 = state_53552;var statearr_53590_53625 = state_53552__$1;(statearr_53590_53625[(2)] = inst_53520);
(statearr_53590_53625[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53553 === (8)))
{var inst_53493 = (state_53552[(14)]);var inst_53494 = (state_53552[(15)]);var inst_53496 = (inst_53494 < inst_53493);var inst_53497 = inst_53496;var state_53552__$1 = state_53552;if(cljs.core.truth_(inst_53497))
{var statearr_53591_53626 = state_53552__$1;(statearr_53591_53626[(1)] = (10));
} else
{var statearr_53592_53627 = state_53552__$1;(statearr_53592_53627[(1)] = (11));
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
});})(c__5693__auto___53600,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___53600,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53596[(0)] = state_machine__5679__auto__);
(statearr_53596[(1)] = (1));
return statearr_53596;
});
var state_machine__5679__auto____1 = (function (state_53552){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53552);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53597){if((e53597 instanceof Object))
{var ex__5682__auto__ = e53597;var statearr_53598_53628 = state_53552;(statearr_53598_53628[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53629 = state_53552;
state_53552 = G__53629;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53552){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53600,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_53599 = f__5694__auto__.call(null);(statearr_53599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53600);
return statearr_53599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53600,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___53766 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53736){var state_val_53737 = (state_53736[(1)]);if((state_val_53737 === (7)))
{var state_53736__$1 = state_53736;var statearr_53738_53767 = state_53736__$1;(statearr_53738_53767[(2)] = null);
(statearr_53738_53767[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (1)))
{var state_53736__$1 = state_53736;var statearr_53739_53768 = state_53736__$1;(statearr_53739_53768[(2)] = null);
(statearr_53739_53768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (4)))
{var inst_53700 = (state_53736[(7)]);var inst_53702 = (inst_53700 < cnt);var state_53736__$1 = state_53736;if(cljs.core.truth_(inst_53702))
{var statearr_53740_53769 = state_53736__$1;(statearr_53740_53769[(1)] = (6));
} else
{var statearr_53741_53770 = state_53736__$1;(statearr_53741_53770[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (15)))
{var inst_53732 = (state_53736[(2)]);var state_53736__$1 = state_53736;var statearr_53742_53771 = state_53736__$1;(statearr_53742_53771[(2)] = inst_53732);
(statearr_53742_53771[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (13)))
{var inst_53725 = cljs.core.async.close_BANG_.call(null,out);var state_53736__$1 = state_53736;var statearr_53743_53772 = state_53736__$1;(statearr_53743_53772[(2)] = inst_53725);
(statearr_53743_53772[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (6)))
{var state_53736__$1 = state_53736;var statearr_53744_53773 = state_53736__$1;(statearr_53744_53773[(2)] = null);
(statearr_53744_53773[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (3)))
{var inst_53734 = (state_53736[(2)]);var state_53736__$1 = state_53736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53736__$1,inst_53734);
} else
{if((state_val_53737 === (12)))
{var inst_53722 = (state_53736[(8)]);var inst_53722__$1 = (state_53736[(2)]);var inst_53723 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53722__$1);var state_53736__$1 = (function (){var statearr_53745 = state_53736;(statearr_53745[(8)] = inst_53722__$1);
return statearr_53745;
})();if(cljs.core.truth_(inst_53723))
{var statearr_53746_53774 = state_53736__$1;(statearr_53746_53774[(1)] = (13));
} else
{var statearr_53747_53775 = state_53736__$1;(statearr_53747_53775[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (2)))
{var inst_53699 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_53700 = (0);var state_53736__$1 = (function (){var statearr_53748 = state_53736;(statearr_53748[(9)] = inst_53699);
(statearr_53748[(7)] = inst_53700);
return statearr_53748;
})();var statearr_53749_53776 = state_53736__$1;(statearr_53749_53776[(2)] = null);
(statearr_53749_53776[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (11)))
{var inst_53700 = (state_53736[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53736,(10),Object,null,(9));var inst_53709 = chs__$1.call(null,inst_53700);var inst_53710 = done.call(null,inst_53700);var inst_53711 = cljs.core.async.take_BANG_.call(null,inst_53709,inst_53710);var state_53736__$1 = state_53736;var statearr_53750_53777 = state_53736__$1;(statearr_53750_53777[(2)] = inst_53711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53736__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (9)))
{var inst_53700 = (state_53736[(7)]);var inst_53713 = (state_53736[(2)]);var inst_53714 = (inst_53700 + (1));var inst_53700__$1 = inst_53714;var state_53736__$1 = (function (){var statearr_53751 = state_53736;(statearr_53751[(10)] = inst_53713);
(statearr_53751[(7)] = inst_53700__$1);
return statearr_53751;
})();var statearr_53752_53778 = state_53736__$1;(statearr_53752_53778[(2)] = null);
(statearr_53752_53778[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (5)))
{var inst_53720 = (state_53736[(2)]);var state_53736__$1 = (function (){var statearr_53753 = state_53736;(statearr_53753[(11)] = inst_53720);
return statearr_53753;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53736__$1,(12),dchan);
} else
{if((state_val_53737 === (14)))
{var inst_53722 = (state_53736[(8)]);var inst_53727 = cljs.core.apply.call(null,f,inst_53722);var state_53736__$1 = state_53736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53736__$1,(16),out,inst_53727);
} else
{if((state_val_53737 === (16)))
{var inst_53729 = (state_53736[(2)]);var state_53736__$1 = (function (){var statearr_53754 = state_53736;(statearr_53754[(12)] = inst_53729);
return statearr_53754;
})();var statearr_53755_53779 = state_53736__$1;(statearr_53755_53779[(2)] = null);
(statearr_53755_53779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (10)))
{var inst_53704 = (state_53736[(2)]);var inst_53705 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_53736__$1 = (function (){var statearr_53756 = state_53736;(statearr_53756[(13)] = inst_53704);
return statearr_53756;
})();var statearr_53757_53780 = state_53736__$1;(statearr_53757_53780[(2)] = inst_53705);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53736__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53737 === (8)))
{var inst_53718 = (state_53736[(2)]);var state_53736__$1 = state_53736;var statearr_53758_53781 = state_53736__$1;(statearr_53758_53781[(2)] = inst_53718);
(statearr_53758_53781[(1)] = (5));
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
});})(c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53762[(0)] = state_machine__5679__auto__);
(statearr_53762[(1)] = (1));
return statearr_53762;
});
var state_machine__5679__auto____1 = (function (state_53736){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53763){if((e53763 instanceof Object))
{var ex__5682__auto__ = e53763;var statearr_53764_53782 = state_53736;(statearr_53764_53782[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53783 = state_53736;
state_53736 = G__53783;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53736){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_53765 = f__5694__auto__.call(null);(statearr_53765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53766);
return statearr_53765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53766,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53891 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53891,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53891,out){
return (function (state_53867){var state_val_53868 = (state_53867[(1)]);if((state_val_53868 === (7)))
{var inst_53847 = (state_53867[(7)]);var inst_53846 = (state_53867[(8)]);var inst_53846__$1 = (state_53867[(2)]);var inst_53847__$1 = cljs.core.nth.call(null,inst_53846__$1,(0),null);var inst_53848 = cljs.core.nth.call(null,inst_53846__$1,(1),null);var inst_53849 = (inst_53847__$1 == null);var state_53867__$1 = (function (){var statearr_53869 = state_53867;(statearr_53869[(9)] = inst_53848);
(statearr_53869[(7)] = inst_53847__$1);
(statearr_53869[(8)] = inst_53846__$1);
return statearr_53869;
})();if(cljs.core.truth_(inst_53849))
{var statearr_53870_53892 = state_53867__$1;(statearr_53870_53892[(1)] = (8));
} else
{var statearr_53871_53893 = state_53867__$1;(statearr_53871_53893[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (1)))
{var inst_53838 = cljs.core.vec.call(null,chs);var inst_53839 = inst_53838;var state_53867__$1 = (function (){var statearr_53872 = state_53867;(statearr_53872[(10)] = inst_53839);
return statearr_53872;
})();var statearr_53873_53894 = state_53867__$1;(statearr_53873_53894[(2)] = null);
(statearr_53873_53894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (4)))
{var inst_53839 = (state_53867[(10)]);var state_53867__$1 = state_53867;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53867__$1,(7),inst_53839);
} else
{if((state_val_53868 === (6)))
{var inst_53863 = (state_53867[(2)]);var state_53867__$1 = state_53867;var statearr_53874_53895 = state_53867__$1;(statearr_53874_53895[(2)] = inst_53863);
(statearr_53874_53895[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (3)))
{var inst_53865 = (state_53867[(2)]);var state_53867__$1 = state_53867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53867__$1,inst_53865);
} else
{if((state_val_53868 === (2)))
{var inst_53839 = (state_53867[(10)]);var inst_53841 = cljs.core.count.call(null,inst_53839);var inst_53842 = (inst_53841 > (0));var state_53867__$1 = state_53867;if(cljs.core.truth_(inst_53842))
{var statearr_53876_53896 = state_53867__$1;(statearr_53876_53896[(1)] = (4));
} else
{var statearr_53877_53897 = state_53867__$1;(statearr_53877_53897[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (11)))
{var inst_53839 = (state_53867[(10)]);var inst_53856 = (state_53867[(2)]);var tmp53875 = inst_53839;var inst_53839__$1 = tmp53875;var state_53867__$1 = (function (){var statearr_53878 = state_53867;(statearr_53878[(11)] = inst_53856);
(statearr_53878[(10)] = inst_53839__$1);
return statearr_53878;
})();var statearr_53879_53898 = state_53867__$1;(statearr_53879_53898[(2)] = null);
(statearr_53879_53898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (9)))
{var inst_53847 = (state_53867[(7)]);var state_53867__$1 = state_53867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53867__$1,(11),out,inst_53847);
} else
{if((state_val_53868 === (5)))
{var inst_53861 = cljs.core.async.close_BANG_.call(null,out);var state_53867__$1 = state_53867;var statearr_53880_53899 = state_53867__$1;(statearr_53880_53899[(2)] = inst_53861);
(statearr_53880_53899[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (10)))
{var inst_53859 = (state_53867[(2)]);var state_53867__$1 = state_53867;var statearr_53881_53900 = state_53867__$1;(statearr_53881_53900[(2)] = inst_53859);
(statearr_53881_53900[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53868 === (8)))
{var inst_53848 = (state_53867[(9)]);var inst_53839 = (state_53867[(10)]);var inst_53847 = (state_53867[(7)]);var inst_53846 = (state_53867[(8)]);var inst_53851 = (function (){var c = inst_53848;var v = inst_53847;var vec__53844 = inst_53846;var cs = inst_53839;return ((function (c,v,vec__53844,cs,inst_53848,inst_53839,inst_53847,inst_53846,state_val_53868,c__5693__auto___53891,out){
return (function (p1__53784_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__53784_SHARP_);
});
;})(c,v,vec__53844,cs,inst_53848,inst_53839,inst_53847,inst_53846,state_val_53868,c__5693__auto___53891,out))
})();var inst_53852 = cljs.core.filterv.call(null,inst_53851,inst_53839);var inst_53839__$1 = inst_53852;var state_53867__$1 = (function (){var statearr_53882 = state_53867;(statearr_53882[(10)] = inst_53839__$1);
return statearr_53882;
})();var statearr_53883_53901 = state_53867__$1;(statearr_53883_53901[(2)] = null);
(statearr_53883_53901[(1)] = (2));
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
});})(c__5693__auto___53891,out))
;return ((function (switch__5678__auto__,c__5693__auto___53891,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53887 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53887[(0)] = state_machine__5679__auto__);
(statearr_53887[(1)] = (1));
return statearr_53887;
});
var state_machine__5679__auto____1 = (function (state_53867){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53867);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53888){if((e53888 instanceof Object))
{var ex__5682__auto__ = e53888;var statearr_53889_53902 = state_53867;(statearr_53889_53902[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53903 = state_53867;
state_53867 = G__53903;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53867){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53891,out))
})();var state__5695__auto__ = (function (){var statearr_53890 = f__5694__auto__.call(null);(statearr_53890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53891);
return statearr_53890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53891,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53996 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53996,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53996,out){
return (function (state_53973){var state_val_53974 = (state_53973[(1)]);if((state_val_53974 === (7)))
{var inst_53955 = (state_53973[(7)]);var inst_53955__$1 = (state_53973[(2)]);var inst_53956 = (inst_53955__$1 == null);var inst_53957 = cljs.core.not.call(null,inst_53956);var state_53973__$1 = (function (){var statearr_53975 = state_53973;(statearr_53975[(7)] = inst_53955__$1);
return statearr_53975;
})();if(inst_53957)
{var statearr_53976_53997 = state_53973__$1;(statearr_53976_53997[(1)] = (8));
} else
{var statearr_53977_53998 = state_53973__$1;(statearr_53977_53998[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (1)))
{var inst_53950 = (0);var state_53973__$1 = (function (){var statearr_53978 = state_53973;(statearr_53978[(8)] = inst_53950);
return statearr_53978;
})();var statearr_53979_53999 = state_53973__$1;(statearr_53979_53999[(2)] = null);
(statearr_53979_53999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (4)))
{var state_53973__$1 = state_53973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53973__$1,(7),ch);
} else
{if((state_val_53974 === (6)))
{var inst_53968 = (state_53973[(2)]);var state_53973__$1 = state_53973;var statearr_53980_54000 = state_53973__$1;(statearr_53980_54000[(2)] = inst_53968);
(statearr_53980_54000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (3)))
{var inst_53970 = (state_53973[(2)]);var inst_53971 = cljs.core.async.close_BANG_.call(null,out);var state_53973__$1 = (function (){var statearr_53981 = state_53973;(statearr_53981[(9)] = inst_53970);
return statearr_53981;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53973__$1,inst_53971);
} else
{if((state_val_53974 === (2)))
{var inst_53950 = (state_53973[(8)]);var inst_53952 = (inst_53950 < n);var state_53973__$1 = state_53973;if(cljs.core.truth_(inst_53952))
{var statearr_53982_54001 = state_53973__$1;(statearr_53982_54001[(1)] = (4));
} else
{var statearr_53983_54002 = state_53973__$1;(statearr_53983_54002[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (11)))
{var inst_53950 = (state_53973[(8)]);var inst_53960 = (state_53973[(2)]);var inst_53961 = (inst_53950 + (1));var inst_53950__$1 = inst_53961;var state_53973__$1 = (function (){var statearr_53984 = state_53973;(statearr_53984[(10)] = inst_53960);
(statearr_53984[(8)] = inst_53950__$1);
return statearr_53984;
})();var statearr_53985_54003 = state_53973__$1;(statearr_53985_54003[(2)] = null);
(statearr_53985_54003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (9)))
{var state_53973__$1 = state_53973;var statearr_53986_54004 = state_53973__$1;(statearr_53986_54004[(2)] = null);
(statearr_53986_54004[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (5)))
{var state_53973__$1 = state_53973;var statearr_53987_54005 = state_53973__$1;(statearr_53987_54005[(2)] = null);
(statearr_53987_54005[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (10)))
{var inst_53965 = (state_53973[(2)]);var state_53973__$1 = state_53973;var statearr_53988_54006 = state_53973__$1;(statearr_53988_54006[(2)] = inst_53965);
(statearr_53988_54006[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53974 === (8)))
{var inst_53955 = (state_53973[(7)]);var state_53973__$1 = state_53973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53973__$1,(11),out,inst_53955);
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
});})(c__5693__auto___53996,out))
;return ((function (switch__5678__auto__,c__5693__auto___53996,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53992 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_53992[(0)] = state_machine__5679__auto__);
(statearr_53992[(1)] = (1));
return statearr_53992;
});
var state_machine__5679__auto____1 = (function (state_53973){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53973);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53993){if((e53993 instanceof Object))
{var ex__5682__auto__ = e53993;var statearr_53994_54007 = state_53973;(statearr_53994_54007[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54008 = state_53973;
state_53973 = G__54008;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53973){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53996,out))
})();var state__5695__auto__ = (function (){var statearr_53995 = f__5694__auto__.call(null);(statearr_53995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53996);
return statearr_53995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53996,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54105 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54105,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54105,out){
return (function (state_54080){var state_val_54081 = (state_54080[(1)]);if((state_val_54081 === (7)))
{var inst_54075 = (state_54080[(2)]);var state_54080__$1 = state_54080;var statearr_54082_54106 = state_54080__$1;(statearr_54082_54106[(2)] = inst_54075);
(statearr_54082_54106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (1)))
{var inst_54057 = null;var state_54080__$1 = (function (){var statearr_54083 = state_54080;(statearr_54083[(7)] = inst_54057);
return statearr_54083;
})();var statearr_54084_54107 = state_54080__$1;(statearr_54084_54107[(2)] = null);
(statearr_54084_54107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (4)))
{var inst_54060 = (state_54080[(8)]);var inst_54060__$1 = (state_54080[(2)]);var inst_54061 = (inst_54060__$1 == null);var inst_54062 = cljs.core.not.call(null,inst_54061);var state_54080__$1 = (function (){var statearr_54085 = state_54080;(statearr_54085[(8)] = inst_54060__$1);
return statearr_54085;
})();if(inst_54062)
{var statearr_54086_54108 = state_54080__$1;(statearr_54086_54108[(1)] = (5));
} else
{var statearr_54087_54109 = state_54080__$1;(statearr_54087_54109[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (6)))
{var state_54080__$1 = state_54080;var statearr_54088_54110 = state_54080__$1;(statearr_54088_54110[(2)] = null);
(statearr_54088_54110[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (3)))
{var inst_54077 = (state_54080[(2)]);var inst_54078 = cljs.core.async.close_BANG_.call(null,out);var state_54080__$1 = (function (){var statearr_54089 = state_54080;(statearr_54089[(9)] = inst_54077);
return statearr_54089;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54080__$1,inst_54078);
} else
{if((state_val_54081 === (2)))
{var state_54080__$1 = state_54080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54080__$1,(4),ch);
} else
{if((state_val_54081 === (11)))
{var inst_54060 = (state_54080[(8)]);var inst_54069 = (state_54080[(2)]);var inst_54057 = inst_54060;var state_54080__$1 = (function (){var statearr_54090 = state_54080;(statearr_54090[(7)] = inst_54057);
(statearr_54090[(10)] = inst_54069);
return statearr_54090;
})();var statearr_54091_54111 = state_54080__$1;(statearr_54091_54111[(2)] = null);
(statearr_54091_54111[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (9)))
{var inst_54060 = (state_54080[(8)]);var state_54080__$1 = state_54080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54080__$1,(11),out,inst_54060);
} else
{if((state_val_54081 === (5)))
{var inst_54057 = (state_54080[(7)]);var inst_54060 = (state_54080[(8)]);var inst_54064 = cljs.core._EQ_.call(null,inst_54060,inst_54057);var state_54080__$1 = state_54080;if(inst_54064)
{var statearr_54093_54112 = state_54080__$1;(statearr_54093_54112[(1)] = (8));
} else
{var statearr_54094_54113 = state_54080__$1;(statearr_54094_54113[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (10)))
{var inst_54072 = (state_54080[(2)]);var state_54080__$1 = state_54080;var statearr_54095_54114 = state_54080__$1;(statearr_54095_54114[(2)] = inst_54072);
(statearr_54095_54114[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54081 === (8)))
{var inst_54057 = (state_54080[(7)]);var tmp54092 = inst_54057;var inst_54057__$1 = tmp54092;var state_54080__$1 = (function (){var statearr_54096 = state_54080;(statearr_54096[(7)] = inst_54057__$1);
return statearr_54096;
})();var statearr_54097_54115 = state_54080__$1;(statearr_54097_54115[(2)] = null);
(statearr_54097_54115[(1)] = (2));
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
});})(c__5693__auto___54105,out))
;return ((function (switch__5678__auto__,c__5693__auto___54105,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54101 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54101[(0)] = state_machine__5679__auto__);
(statearr_54101[(1)] = (1));
return statearr_54101;
});
var state_machine__5679__auto____1 = (function (state_54080){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54080);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54102){if((e54102 instanceof Object))
{var ex__5682__auto__ = e54102;var statearr_54103_54116 = state_54080;(statearr_54103_54116[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54117 = state_54080;
state_54080 = G__54117;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54080){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54105,out))
})();var state__5695__auto__ = (function (){var statearr_54104 = f__5694__auto__.call(null);(statearr_54104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54105);
return statearr_54104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54105,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54252,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54252,out){
return (function (state_54222){var state_val_54223 = (state_54222[(1)]);if((state_val_54223 === (7)))
{var inst_54218 = (state_54222[(2)]);var state_54222__$1 = state_54222;var statearr_54224_54253 = state_54222__$1;(statearr_54224_54253[(2)] = inst_54218);
(statearr_54224_54253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (1)))
{var inst_54185 = (new Array(n));var inst_54186 = inst_54185;var inst_54187 = (0);var state_54222__$1 = (function (){var statearr_54225 = state_54222;(statearr_54225[(7)] = inst_54186);
(statearr_54225[(8)] = inst_54187);
return statearr_54225;
})();var statearr_54226_54254 = state_54222__$1;(statearr_54226_54254[(2)] = null);
(statearr_54226_54254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (4)))
{var inst_54190 = (state_54222[(9)]);var inst_54190__$1 = (state_54222[(2)]);var inst_54191 = (inst_54190__$1 == null);var inst_54192 = cljs.core.not.call(null,inst_54191);var state_54222__$1 = (function (){var statearr_54227 = state_54222;(statearr_54227[(9)] = inst_54190__$1);
return statearr_54227;
})();if(inst_54192)
{var statearr_54228_54255 = state_54222__$1;(statearr_54228_54255[(1)] = (5));
} else
{var statearr_54229_54256 = state_54222__$1;(statearr_54229_54256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (15)))
{var inst_54212 = (state_54222[(2)]);var state_54222__$1 = state_54222;var statearr_54230_54257 = state_54222__$1;(statearr_54230_54257[(2)] = inst_54212);
(statearr_54230_54257[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (13)))
{var state_54222__$1 = state_54222;var statearr_54231_54258 = state_54222__$1;(statearr_54231_54258[(2)] = null);
(statearr_54231_54258[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (6)))
{var inst_54187 = (state_54222[(8)]);var inst_54208 = (inst_54187 > (0));var state_54222__$1 = state_54222;if(cljs.core.truth_(inst_54208))
{var statearr_54232_54259 = state_54222__$1;(statearr_54232_54259[(1)] = (12));
} else
{var statearr_54233_54260 = state_54222__$1;(statearr_54233_54260[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (3)))
{var inst_54220 = (state_54222[(2)]);var state_54222__$1 = state_54222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54222__$1,inst_54220);
} else
{if((state_val_54223 === (12)))
{var inst_54186 = (state_54222[(7)]);var inst_54210 = cljs.core.vec.call(null,inst_54186);var state_54222__$1 = state_54222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54222__$1,(15),out,inst_54210);
} else
{if((state_val_54223 === (2)))
{var state_54222__$1 = state_54222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54222__$1,(4),ch);
} else
{if((state_val_54223 === (11)))
{var inst_54202 = (state_54222[(2)]);var inst_54203 = (new Array(n));var inst_54186 = inst_54203;var inst_54187 = (0);var state_54222__$1 = (function (){var statearr_54234 = state_54222;(statearr_54234[(10)] = inst_54202);
(statearr_54234[(7)] = inst_54186);
(statearr_54234[(8)] = inst_54187);
return statearr_54234;
})();var statearr_54235_54261 = state_54222__$1;(statearr_54235_54261[(2)] = null);
(statearr_54235_54261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (9)))
{var inst_54186 = (state_54222[(7)]);var inst_54200 = cljs.core.vec.call(null,inst_54186);var state_54222__$1 = state_54222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54222__$1,(11),out,inst_54200);
} else
{if((state_val_54223 === (5)))
{var inst_54195 = (state_54222[(11)]);var inst_54190 = (state_54222[(9)]);var inst_54186 = (state_54222[(7)]);var inst_54187 = (state_54222[(8)]);var inst_54194 = (inst_54186[inst_54187] = inst_54190);var inst_54195__$1 = (inst_54187 + (1));var inst_54196 = (inst_54195__$1 < n);var state_54222__$1 = (function (){var statearr_54236 = state_54222;(statearr_54236[(11)] = inst_54195__$1);
(statearr_54236[(12)] = inst_54194);
return statearr_54236;
})();if(cljs.core.truth_(inst_54196))
{var statearr_54237_54262 = state_54222__$1;(statearr_54237_54262[(1)] = (8));
} else
{var statearr_54238_54263 = state_54222__$1;(statearr_54238_54263[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (14)))
{var inst_54215 = (state_54222[(2)]);var inst_54216 = cljs.core.async.close_BANG_.call(null,out);var state_54222__$1 = (function (){var statearr_54240 = state_54222;(statearr_54240[(13)] = inst_54215);
return statearr_54240;
})();var statearr_54241_54264 = state_54222__$1;(statearr_54241_54264[(2)] = inst_54216);
(statearr_54241_54264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (10)))
{var inst_54206 = (state_54222[(2)]);var state_54222__$1 = state_54222;var statearr_54242_54265 = state_54222__$1;(statearr_54242_54265[(2)] = inst_54206);
(statearr_54242_54265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54223 === (8)))
{var inst_54195 = (state_54222[(11)]);var inst_54186 = (state_54222[(7)]);var tmp54239 = inst_54186;var inst_54186__$1 = tmp54239;var inst_54187 = inst_54195;var state_54222__$1 = (function (){var statearr_54243 = state_54222;(statearr_54243[(7)] = inst_54186__$1);
(statearr_54243[(8)] = inst_54187);
return statearr_54243;
})();var statearr_54244_54266 = state_54222__$1;(statearr_54244_54266[(2)] = null);
(statearr_54244_54266[(1)] = (2));
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
});})(c__5693__auto___54252,out))
;return ((function (switch__5678__auto__,c__5693__auto___54252,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54248[(0)] = state_machine__5679__auto__);
(statearr_54248[(1)] = (1));
return statearr_54248;
});
var state_machine__5679__auto____1 = (function (state_54222){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54249){if((e54249 instanceof Object))
{var ex__5682__auto__ = e54249;var statearr_54250_54267 = state_54222;(statearr_54250_54267[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54268 = state_54222;
state_54222 = G__54268;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54222){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54252,out))
})();var state__5695__auto__ = (function (){var statearr_54251 = f__5694__auto__.call(null);(statearr_54251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54252);
return statearr_54251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54252,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54411 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54411,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54411,out){
return (function (state_54381){var state_val_54382 = (state_54381[(1)]);if((state_val_54382 === (7)))
{var inst_54377 = (state_54381[(2)]);var state_54381__$1 = state_54381;var statearr_54383_54412 = state_54381__$1;(statearr_54383_54412[(2)] = inst_54377);
(statearr_54383_54412[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (1)))
{var inst_54340 = [];var inst_54341 = inst_54340;var inst_54342 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_54381__$1 = (function (){var statearr_54384 = state_54381;(statearr_54384[(7)] = inst_54341);
(statearr_54384[(8)] = inst_54342);
return statearr_54384;
})();var statearr_54385_54413 = state_54381__$1;(statearr_54385_54413[(2)] = null);
(statearr_54385_54413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (4)))
{var inst_54345 = (state_54381[(9)]);var inst_54345__$1 = (state_54381[(2)]);var inst_54346 = (inst_54345__$1 == null);var inst_54347 = cljs.core.not.call(null,inst_54346);var state_54381__$1 = (function (){var statearr_54386 = state_54381;(statearr_54386[(9)] = inst_54345__$1);
return statearr_54386;
})();if(inst_54347)
{var statearr_54387_54414 = state_54381__$1;(statearr_54387_54414[(1)] = (5));
} else
{var statearr_54388_54415 = state_54381__$1;(statearr_54388_54415[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (15)))
{var inst_54371 = (state_54381[(2)]);var state_54381__$1 = state_54381;var statearr_54389_54416 = state_54381__$1;(statearr_54389_54416[(2)] = inst_54371);
(statearr_54389_54416[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (13)))
{var state_54381__$1 = state_54381;var statearr_54390_54417 = state_54381__$1;(statearr_54390_54417[(2)] = null);
(statearr_54390_54417[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (6)))
{var inst_54341 = (state_54381[(7)]);var inst_54366 = inst_54341.length;var inst_54367 = (inst_54366 > (0));var state_54381__$1 = state_54381;if(cljs.core.truth_(inst_54367))
{var statearr_54391_54418 = state_54381__$1;(statearr_54391_54418[(1)] = (12));
} else
{var statearr_54392_54419 = state_54381__$1;(statearr_54392_54419[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (3)))
{var inst_54379 = (state_54381[(2)]);var state_54381__$1 = state_54381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54381__$1,inst_54379);
} else
{if((state_val_54382 === (12)))
{var inst_54341 = (state_54381[(7)]);var inst_54369 = cljs.core.vec.call(null,inst_54341);var state_54381__$1 = state_54381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54381__$1,(15),out,inst_54369);
} else
{if((state_val_54382 === (2)))
{var state_54381__$1 = state_54381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54381__$1,(4),ch);
} else
{if((state_val_54382 === (11)))
{var inst_54349 = (state_54381[(10)]);var inst_54345 = (state_54381[(9)]);var inst_54359 = (state_54381[(2)]);var inst_54360 = [];var inst_54361 = inst_54360.push(inst_54345);var inst_54341 = inst_54360;var inst_54342 = inst_54349;var state_54381__$1 = (function (){var statearr_54393 = state_54381;(statearr_54393[(7)] = inst_54341);
(statearr_54393[(11)] = inst_54359);
(statearr_54393[(8)] = inst_54342);
(statearr_54393[(12)] = inst_54361);
return statearr_54393;
})();var statearr_54394_54420 = state_54381__$1;(statearr_54394_54420[(2)] = null);
(statearr_54394_54420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (9)))
{var inst_54341 = (state_54381[(7)]);var inst_54357 = cljs.core.vec.call(null,inst_54341);var state_54381__$1 = state_54381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54381__$1,(11),out,inst_54357);
} else
{if((state_val_54382 === (5)))
{var inst_54349 = (state_54381[(10)]);var inst_54345 = (state_54381[(9)]);var inst_54342 = (state_54381[(8)]);var inst_54349__$1 = f.call(null,inst_54345);var inst_54350 = cljs.core._EQ_.call(null,inst_54349__$1,inst_54342);var inst_54351 = cljs.core.keyword_identical_QMARK_.call(null,inst_54342,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_54352 = (inst_54350) || (inst_54351);var state_54381__$1 = (function (){var statearr_54395 = state_54381;(statearr_54395[(10)] = inst_54349__$1);
return statearr_54395;
})();if(cljs.core.truth_(inst_54352))
{var statearr_54396_54421 = state_54381__$1;(statearr_54396_54421[(1)] = (8));
} else
{var statearr_54397_54422 = state_54381__$1;(statearr_54397_54422[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (14)))
{var inst_54374 = (state_54381[(2)]);var inst_54375 = cljs.core.async.close_BANG_.call(null,out);var state_54381__$1 = (function (){var statearr_54399 = state_54381;(statearr_54399[(13)] = inst_54374);
return statearr_54399;
})();var statearr_54400_54423 = state_54381__$1;(statearr_54400_54423[(2)] = inst_54375);
(statearr_54400_54423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (10)))
{var inst_54364 = (state_54381[(2)]);var state_54381__$1 = state_54381;var statearr_54401_54424 = state_54381__$1;(statearr_54401_54424[(2)] = inst_54364);
(statearr_54401_54424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54382 === (8)))
{var inst_54349 = (state_54381[(10)]);var inst_54345 = (state_54381[(9)]);var inst_54341 = (state_54381[(7)]);var inst_54354 = inst_54341.push(inst_54345);var tmp54398 = inst_54341;var inst_54341__$1 = tmp54398;var inst_54342 = inst_54349;var state_54381__$1 = (function (){var statearr_54402 = state_54381;(statearr_54402[(14)] = inst_54354);
(statearr_54402[(7)] = inst_54341__$1);
(statearr_54402[(8)] = inst_54342);
return statearr_54402;
})();var statearr_54403_54425 = state_54381__$1;(statearr_54403_54425[(2)] = null);
(statearr_54403_54425[(1)] = (2));
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
});})(c__5693__auto___54411,out))
;return ((function (switch__5678__auto__,c__5693__auto___54411,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54407[(0)] = state_machine__5679__auto__);
(statearr_54407[(1)] = (1));
return statearr_54407;
});
var state_machine__5679__auto____1 = (function (state_54381){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54408){if((e54408 instanceof Object))
{var ex__5682__auto__ = e54408;var statearr_54409_54426 = state_54381;(statearr_54409_54426[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54427 = state_54381;
state_54381 = G__54427;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54381){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54411,out))
})();var state__5695__auto__ = (function (){var statearr_54410 = f__5694__auto__.call(null);(statearr_54410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54411);
return statearr_54410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54411,out))
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