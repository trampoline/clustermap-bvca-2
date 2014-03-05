// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25082 = (function (f,fn_handler,meta25083){
this.f = f;
this.fn_handler = fn_handler;
this.meta25083 = meta25083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25082.cljs$lang$type = true;
cljs.core.async.t25082.cljs$lang$ctorStr = "cljs.core.async/t25082";
cljs.core.async.t25082.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25082");
});
cljs.core.async.t25082.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25084){var self__ = this;
var _25084__$1 = this;return self__.meta25083;
});
cljs.core.async.t25082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25084,meta25083__$1){var self__ = this;
var _25084__$1 = this;return (new cljs.core.async.t25082(self__.f,self__.fn_handler,meta25083__$1));
});
cljs.core.async.__GT_t25082 = (function __GT_t25082(f__$1,fn_handler__$1,meta25083){return (new cljs.core.async.t25082(f__$1,fn_handler__$1,meta25083));
});
}
return (new cljs.core.async.t25082(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25086 = buff;if(G__25086)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__25086.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25086.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25086);
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
{var val_25087 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25087);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25087);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___25088 = n;var x_25089 = 0;while(true){
if((x_25089 < n__4289__auto___25088))
{(a[x_25089] = 0);
{
var G__25090 = (x_25089 + 1);
x_25089 = G__25090;
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
var G__25091 = (i + 1);
i = G__25091;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25095 = (function (flag,alt_flag,meta25096){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25096 = meta25096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25095.cljs$lang$type = true;
cljs.core.async.t25095.cljs$lang$ctorStr = "cljs.core.async/t25095";
cljs.core.async.t25095.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25095");
});
cljs.core.async.t25095.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25097){var self__ = this;
var _25097__$1 = this;return self__.meta25096;
});
cljs.core.async.t25095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25097,meta25096__$1){var self__ = this;
var _25097__$1 = this;return (new cljs.core.async.t25095(self__.flag,self__.alt_flag,meta25096__$1));
});
cljs.core.async.__GT_t25095 = (function __GT_t25095(flag__$1,alt_flag__$1,meta25096){return (new cljs.core.async.t25095(flag__$1,alt_flag__$1,meta25096));
});
}
return (new cljs.core.async.t25095(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25101 = (function (cb,flag,alt_handler,meta25102){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25102 = meta25102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25101.cljs$lang$type = true;
cljs.core.async.t25101.cljs$lang$ctorStr = "cljs.core.async/t25101";
cljs.core.async.t25101.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25101");
});
cljs.core.async.t25101.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25103){var self__ = this;
var _25103__$1 = this;return self__.meta25102;
});
cljs.core.async.t25101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25103,meta25102__$1){var self__ = this;
var _25103__$1 = this;return (new cljs.core.async.t25101(self__.cb,self__.flag,self__.alt_handler,meta25102__$1));
});
cljs.core.async.__GT_t25101 = (function __GT_t25101(cb__$1,flag__$1,alt_handler__$1,meta25102){return (new cljs.core.async.t25101(cb__$1,flag__$1,alt_handler__$1,meta25102));
});
}
return (new cljs.core.async.t25101(cb,flag,alt_handler,null));
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
return (function (p1__25104_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25104_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25105 = (i + 1);
i = G__25105;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__25106){var map__25108 = p__25106;var map__25108__$1 = ((cljs.core.seq_QMARK_.call(null,map__25108))?cljs.core.apply.call(null,cljs.core.hash_map,map__25108):map__25108);var opts = map__25108__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25106 = null;if (arguments.length > 1) {
  p__25106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25106);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25109){
var ports = cljs.core.first(arglist__25109);
var p__25106 = cljs.core.rest(arglist__25109);
return alts_BANG___delegate(ports,p__25106);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25117 = (function (ch,f,map_LT_,meta25118){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25117.cljs$lang$type = true;
cljs.core.async.t25117.cljs$lang$ctorStr = "cljs.core.async/t25117";
cljs.core.async.t25117.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25117");
});
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25120 = (function (fn1,_,meta25118,ch,f,map_LT_,meta25121){
this.fn1 = fn1;
this._ = _;
this.meta25118 = meta25118;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25121 = meta25121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25120.cljs$lang$type = true;
cljs.core.async.t25120.cljs$lang$ctorStr = "cljs.core.async/t25120";
cljs.core.async.t25120.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25120");
});
cljs.core.async.t25120.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25120.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25110_SHARP_){return f1.call(null,(((p1__25110_SHARP_ == null))?null:self__.f.call(null,p1__25110_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25122){var self__ = this;
var _25122__$1 = this;return self__.meta25121;
});
cljs.core.async.t25120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25122,meta25121__$1){var self__ = this;
var _25122__$1 = this;return (new cljs.core.async.t25120(self__.fn1,self__._,self__.meta25118,self__.ch,self__.f,self__.map_LT_,meta25121__$1));
});
cljs.core.async.__GT_t25120 = (function __GT_t25120(fn1__$1,___$2,meta25118__$1,ch__$2,f__$2,map_LT___$2,meta25121){return (new cljs.core.async.t25120(fn1__$1,___$2,meta25118__$1,ch__$2,f__$2,map_LT___$2,meta25121));
});
}
return (new cljs.core.async.t25120(fn1,___$1,self__.meta25118,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25119){var self__ = this;
var _25119__$1 = this;return self__.meta25118;
});
cljs.core.async.t25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25119,meta25118__$1){var self__ = this;
var _25119__$1 = this;return (new cljs.core.async.t25117(self__.ch,self__.f,self__.map_LT_,meta25118__$1));
});
cljs.core.async.__GT_t25117 = (function __GT_t25117(ch__$1,f__$1,map_LT___$1,meta25118){return (new cljs.core.async.t25117(ch__$1,f__$1,map_LT___$1,meta25118));
});
}
return (new cljs.core.async.t25117(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25126 = (function (ch,f,map_GT_,meta25127){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25127 = meta25127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25126.cljs$lang$type = true;
cljs.core.async.t25126.cljs$lang$ctorStr = "cljs.core.async/t25126";
cljs.core.async.t25126.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25126");
});
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25128){var self__ = this;
var _25128__$1 = this;return self__.meta25127;
});
cljs.core.async.t25126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25128,meta25127__$1){var self__ = this;
var _25128__$1 = this;return (new cljs.core.async.t25126(self__.ch,self__.f,self__.map_GT_,meta25127__$1));
});
cljs.core.async.__GT_t25126 = (function __GT_t25126(ch__$1,f__$1,map_GT___$1,meta25127){return (new cljs.core.async.t25126(ch__$1,f__$1,map_GT___$1,meta25127));
});
}
return (new cljs.core.async.t25126(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25132 = (function (ch,p,filter_GT_,meta25133){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25133 = meta25133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25132.cljs$lang$type = true;
cljs.core.async.t25132.cljs$lang$ctorStr = "cljs.core.async/t25132";
cljs.core.async.t25132.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25132");
});
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25134){var self__ = this;
var _25134__$1 = this;return self__.meta25133;
});
cljs.core.async.t25132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25134,meta25133__$1){var self__ = this;
var _25134__$1 = this;return (new cljs.core.async.t25132(self__.ch,self__.p,self__.filter_GT_,meta25133__$1));
});
cljs.core.async.__GT_t25132 = (function __GT_t25132(ch__$1,p__$1,filter_GT___$1,meta25133){return (new cljs.core.async.t25132(ch__$1,p__$1,filter_GT___$1,meta25133));
});
}
return (new cljs.core.async.t25132(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25196){var state_val_25197 = (state_25196[1]);if((state_val_25197 === 1))
{var state_25196__$1 = state_25196;var statearr_25198_25218 = state_25196__$1;(statearr_25198_25218[2] = null);
(statearr_25198_25218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 2))
{var state_25196__$1 = state_25196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25196__$1,4,ch);
} else
{if((state_val_25197 === 3))
{var inst_25194 = (state_25196[2]);var state_25196__$1 = state_25196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25196__$1,inst_25194);
} else
{if((state_val_25197 === 4))
{var inst_25178 = (state_25196[7]);var inst_25178__$1 = (state_25196[2]);var inst_25179 = (inst_25178__$1 == null);var state_25196__$1 = (function (){var statearr_25199 = state_25196;(statearr_25199[7] = inst_25178__$1);
return statearr_25199;
})();if(cljs.core.truth_(inst_25179))
{var statearr_25200_25219 = state_25196__$1;(statearr_25200_25219[1] = 5);
} else
{var statearr_25201_25220 = state_25196__$1;(statearr_25201_25220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 5))
{var inst_25181 = cljs.core.async.close_BANG_.call(null,out);var state_25196__$1 = state_25196;var statearr_25202_25221 = state_25196__$1;(statearr_25202_25221[2] = inst_25181);
(statearr_25202_25221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 6))
{var inst_25178 = (state_25196[7]);var inst_25183 = p.call(null,inst_25178);var state_25196__$1 = state_25196;if(cljs.core.truth_(inst_25183))
{var statearr_25203_25222 = state_25196__$1;(statearr_25203_25222[1] = 8);
} else
{var statearr_25204_25223 = state_25196__$1;(statearr_25204_25223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 7))
{var inst_25192 = (state_25196[2]);var state_25196__$1 = state_25196;var statearr_25205_25224 = state_25196__$1;(statearr_25205_25224[2] = inst_25192);
(statearr_25205_25224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 8))
{var inst_25178 = (state_25196[7]);var state_25196__$1 = state_25196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25196__$1,11,out,inst_25178);
} else
{if((state_val_25197 === 9))
{var state_25196__$1 = state_25196;var statearr_25206_25225 = state_25196__$1;(statearr_25206_25225[2] = null);
(statearr_25206_25225[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 10))
{var inst_25189 = (state_25196[2]);var state_25196__$1 = (function (){var statearr_25207 = state_25196;(statearr_25207[8] = inst_25189);
return statearr_25207;
})();var statearr_25208_25226 = state_25196__$1;(statearr_25208_25226[2] = null);
(statearr_25208_25226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25197 === 11))
{var inst_25186 = (state_25196[2]);var state_25196__$1 = state_25196;var statearr_25209_25227 = state_25196__$1;(statearr_25209_25227[2] = inst_25186);
(statearr_25209_25227[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25213 = [null,null,null,null,null,null,null,null,null];(statearr_25213[0] = state_machine__5548__auto__);
(statearr_25213[1] = 1);
return statearr_25213;
});
var state_machine__5548__auto____1 = (function (state_25196){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25196);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25214){if((e25214 instanceof Object))
{var ex__5551__auto__ = e25214;var statearr_25215_25228 = state_25196;(statearr_25215_25228[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25229 = state_25196;
state_25196 = G__25229;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25196){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25216 = f__5563__auto__.call(null);(statearr_25216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25217);
return statearr_25216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25381){var state_val_25382 = (state_25381[1]);if((state_val_25382 === 1))
{var state_25381__$1 = state_25381;var statearr_25383_25420 = state_25381__$1;(statearr_25383_25420[2] = null);
(statearr_25383_25420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 2))
{var state_25381__$1 = state_25381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25381__$1,4,in$);
} else
{if((state_val_25382 === 3))
{var inst_25379 = (state_25381[2]);var state_25381__$1 = state_25381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25381__$1,inst_25379);
} else
{if((state_val_25382 === 4))
{var inst_25327 = (state_25381[7]);var inst_25327__$1 = (state_25381[2]);var inst_25328 = (inst_25327__$1 == null);var state_25381__$1 = (function (){var statearr_25384 = state_25381;(statearr_25384[7] = inst_25327__$1);
return statearr_25384;
})();if(cljs.core.truth_(inst_25328))
{var statearr_25385_25421 = state_25381__$1;(statearr_25385_25421[1] = 5);
} else
{var statearr_25386_25422 = state_25381__$1;(statearr_25386_25422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 5))
{var inst_25330 = cljs.core.async.close_BANG_.call(null,out);var state_25381__$1 = state_25381;var statearr_25387_25423 = state_25381__$1;(statearr_25387_25423[2] = inst_25330);
(statearr_25387_25423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 6))
{var inst_25327 = (state_25381[7]);var inst_25332 = f.call(null,inst_25327);var inst_25337 = cljs.core.seq.call(null,inst_25332);var inst_25338 = inst_25337;var inst_25339 = null;var inst_25340 = 0;var inst_25341 = 0;var state_25381__$1 = (function (){var statearr_25388 = state_25381;(statearr_25388[8] = inst_25338);
(statearr_25388[9] = inst_25339);
(statearr_25388[10] = inst_25341);
(statearr_25388[11] = inst_25340);
return statearr_25388;
})();var statearr_25389_25424 = state_25381__$1;(statearr_25389_25424[2] = null);
(statearr_25389_25424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 7))
{var inst_25377 = (state_25381[2]);var state_25381__$1 = state_25381;var statearr_25390_25425 = state_25381__$1;(statearr_25390_25425[2] = inst_25377);
(statearr_25390_25425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 8))
{var inst_25341 = (state_25381[10]);var inst_25340 = (state_25381[11]);var inst_25343 = (inst_25341 < inst_25340);var inst_25344 = inst_25343;var state_25381__$1 = state_25381;if(cljs.core.truth_(inst_25344))
{var statearr_25391_25426 = state_25381__$1;(statearr_25391_25426[1] = 10);
} else
{var statearr_25392_25427 = state_25381__$1;(statearr_25392_25427[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 9))
{var inst_25374 = (state_25381[2]);var state_25381__$1 = (function (){var statearr_25393 = state_25381;(statearr_25393[12] = inst_25374);
return statearr_25393;
})();var statearr_25394_25428 = state_25381__$1;(statearr_25394_25428[2] = null);
(statearr_25394_25428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 10))
{var inst_25339 = (state_25381[9]);var inst_25341 = (state_25381[10]);var inst_25346 = cljs.core._nth.call(null,inst_25339,inst_25341);var state_25381__$1 = state_25381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25381__$1,13,out,inst_25346);
} else
{if((state_val_25382 === 11))
{var inst_25338 = (state_25381[8]);var inst_25352 = (state_25381[13]);var inst_25352__$1 = cljs.core.seq.call(null,inst_25338);var state_25381__$1 = (function (){var statearr_25398 = state_25381;(statearr_25398[13] = inst_25352__$1);
return statearr_25398;
})();if(inst_25352__$1)
{var statearr_25399_25429 = state_25381__$1;(statearr_25399_25429[1] = 14);
} else
{var statearr_25400_25430 = state_25381__$1;(statearr_25400_25430[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 12))
{var inst_25372 = (state_25381[2]);var state_25381__$1 = state_25381;var statearr_25401_25431 = state_25381__$1;(statearr_25401_25431[2] = inst_25372);
(statearr_25401_25431[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 13))
{var inst_25338 = (state_25381[8]);var inst_25339 = (state_25381[9]);var inst_25341 = (state_25381[10]);var inst_25340 = (state_25381[11]);var inst_25348 = (state_25381[2]);var inst_25349 = (inst_25341 + 1);var tmp25395 = inst_25338;var tmp25396 = inst_25339;var tmp25397 = inst_25340;var inst_25338__$1 = tmp25395;var inst_25339__$1 = tmp25396;var inst_25340__$1 = tmp25397;var inst_25341__$1 = inst_25349;var state_25381__$1 = (function (){var statearr_25402 = state_25381;(statearr_25402[8] = inst_25338__$1);
(statearr_25402[14] = inst_25348);
(statearr_25402[9] = inst_25339__$1);
(statearr_25402[10] = inst_25341__$1);
(statearr_25402[11] = inst_25340__$1);
return statearr_25402;
})();var statearr_25403_25432 = state_25381__$1;(statearr_25403_25432[2] = null);
(statearr_25403_25432[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 14))
{var inst_25352 = (state_25381[13]);var inst_25354 = cljs.core.chunked_seq_QMARK_.call(null,inst_25352);var state_25381__$1 = state_25381;if(inst_25354)
{var statearr_25404_25433 = state_25381__$1;(statearr_25404_25433[1] = 17);
} else
{var statearr_25405_25434 = state_25381__$1;(statearr_25405_25434[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 15))
{var state_25381__$1 = state_25381;var statearr_25406_25435 = state_25381__$1;(statearr_25406_25435[2] = null);
(statearr_25406_25435[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 16))
{var inst_25370 = (state_25381[2]);var state_25381__$1 = state_25381;var statearr_25407_25436 = state_25381__$1;(statearr_25407_25436[2] = inst_25370);
(statearr_25407_25436[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 17))
{var inst_25352 = (state_25381[13]);var inst_25356 = cljs.core.chunk_first.call(null,inst_25352);var inst_25357 = cljs.core.chunk_rest.call(null,inst_25352);var inst_25358 = cljs.core.count.call(null,inst_25356);var inst_25338 = inst_25357;var inst_25339 = inst_25356;var inst_25340 = inst_25358;var inst_25341 = 0;var state_25381__$1 = (function (){var statearr_25408 = state_25381;(statearr_25408[8] = inst_25338);
(statearr_25408[9] = inst_25339);
(statearr_25408[10] = inst_25341);
(statearr_25408[11] = inst_25340);
return statearr_25408;
})();var statearr_25409_25437 = state_25381__$1;(statearr_25409_25437[2] = null);
(statearr_25409_25437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 18))
{var inst_25352 = (state_25381[13]);var inst_25361 = cljs.core.first.call(null,inst_25352);var state_25381__$1 = state_25381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25381__$1,20,out,inst_25361);
} else
{if((state_val_25382 === 19))
{var inst_25367 = (state_25381[2]);var state_25381__$1 = state_25381;var statearr_25410_25438 = state_25381__$1;(statearr_25410_25438[2] = inst_25367);
(statearr_25410_25438[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25382 === 20))
{var inst_25352 = (state_25381[13]);var inst_25363 = (state_25381[2]);var inst_25364 = cljs.core.next.call(null,inst_25352);var inst_25338 = inst_25364;var inst_25339 = null;var inst_25340 = 0;var inst_25341 = 0;var state_25381__$1 = (function (){var statearr_25411 = state_25381;(statearr_25411[8] = inst_25338);
(statearr_25411[9] = inst_25339);
(statearr_25411[10] = inst_25341);
(statearr_25411[11] = inst_25340);
(statearr_25411[15] = inst_25363);
return statearr_25411;
})();var statearr_25412_25439 = state_25381__$1;(statearr_25412_25439[2] = null);
(statearr_25412_25439[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25416[0] = state_machine__5548__auto__);
(statearr_25416[1] = 1);
return statearr_25416;
});
var state_machine__5548__auto____1 = (function (state_25381){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25417){if((e25417 instanceof Object))
{var ex__5551__auto__ = e25417;var statearr_25418_25440 = state_25381;(statearr_25418_25440[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25441 = state_25381;
state_25381 = G__25441;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25381){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25419 = f__5563__auto__.call(null);(statearr_25419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25501){var state_val_25502 = (state_25501[1]);if((state_val_25502 === 1))
{var state_25501__$1 = state_25501;var statearr_25503_25523 = state_25501__$1;(statearr_25503_25523[2] = null);
(statearr_25503_25523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 2))
{var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,4,from);
} else
{if((state_val_25502 === 3))
{var inst_25499 = (state_25501[2]);var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else
{if((state_val_25502 === 4))
{var inst_25484 = (state_25501[7]);var inst_25484__$1 = (state_25501[2]);var inst_25485 = (inst_25484__$1 == null);var state_25501__$1 = (function (){var statearr_25504 = state_25501;(statearr_25504[7] = inst_25484__$1);
return statearr_25504;
})();if(cljs.core.truth_(inst_25485))
{var statearr_25505_25524 = state_25501__$1;(statearr_25505_25524[1] = 5);
} else
{var statearr_25506_25525 = state_25501__$1;(statearr_25506_25525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 5))
{var state_25501__$1 = state_25501;if(cljs.core.truth_(close_QMARK_))
{var statearr_25507_25526 = state_25501__$1;(statearr_25507_25526[1] = 8);
} else
{var statearr_25508_25527 = state_25501__$1;(statearr_25508_25527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 6))
{var inst_25484 = (state_25501[7]);var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,11,to,inst_25484);
} else
{if((state_val_25502 === 7))
{var inst_25497 = (state_25501[2]);var state_25501__$1 = state_25501;var statearr_25509_25528 = state_25501__$1;(statearr_25509_25528[2] = inst_25497);
(statearr_25509_25528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 8))
{var inst_25488 = cljs.core.async.close_BANG_.call(null,to);var state_25501__$1 = state_25501;var statearr_25510_25529 = state_25501__$1;(statearr_25510_25529[2] = inst_25488);
(statearr_25510_25529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 9))
{var state_25501__$1 = state_25501;var statearr_25511_25530 = state_25501__$1;(statearr_25511_25530[2] = null);
(statearr_25511_25530[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 10))
{var inst_25491 = (state_25501[2]);var state_25501__$1 = state_25501;var statearr_25512_25531 = state_25501__$1;(statearr_25512_25531[2] = inst_25491);
(statearr_25512_25531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25502 === 11))
{var inst_25494 = (state_25501[2]);var state_25501__$1 = (function (){var statearr_25513 = state_25501;(statearr_25513[8] = inst_25494);
return statearr_25513;
})();var statearr_25514_25532 = state_25501__$1;(statearr_25514_25532[2] = null);
(statearr_25514_25532[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25518 = [null,null,null,null,null,null,null,null,null];(statearr_25518[0] = state_machine__5548__auto__);
(statearr_25518[1] = 1);
return statearr_25518;
});
var state_machine__5548__auto____1 = (function (state_25501){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25501);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25519){if((e25519 instanceof Object))
{var ex__5551__auto__ = e25519;var statearr_25520_25533 = state_25501;(statearr_25520_25533[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25534 = state_25501;
state_25501 = G__25534;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25521 = f__5563__auto__.call(null);(statearr_25521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25522);
return statearr_25521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25599){var state_val_25600 = (state_25599[1]);if((state_val_25600 === 1))
{var state_25599__$1 = state_25599;var statearr_25601_25622 = state_25599__$1;(statearr_25601_25622[2] = null);
(statearr_25601_25622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 2))
{var state_25599__$1 = state_25599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,4,ch);
} else
{if((state_val_25600 === 3))
{var inst_25597 = (state_25599[2]);var state_25599__$1 = state_25599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else
{if((state_val_25600 === 4))
{var inst_25580 = (state_25599[7]);var inst_25580__$1 = (state_25599[2]);var inst_25581 = (inst_25580__$1 == null);var state_25599__$1 = (function (){var statearr_25602 = state_25599;(statearr_25602[7] = inst_25580__$1);
return statearr_25602;
})();if(cljs.core.truth_(inst_25581))
{var statearr_25603_25623 = state_25599__$1;(statearr_25603_25623[1] = 5);
} else
{var statearr_25604_25624 = state_25599__$1;(statearr_25604_25624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 5))
{var inst_25583 = cljs.core.async.close_BANG_.call(null,tc);var inst_25584 = cljs.core.async.close_BANG_.call(null,fc);var state_25599__$1 = (function (){var statearr_25605 = state_25599;(statearr_25605[8] = inst_25583);
return statearr_25605;
})();var statearr_25606_25625 = state_25599__$1;(statearr_25606_25625[2] = inst_25584);
(statearr_25606_25625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 6))
{var inst_25580 = (state_25599[7]);var inst_25586 = p.call(null,inst_25580);var state_25599__$1 = state_25599;if(cljs.core.truth_(inst_25586))
{var statearr_25607_25626 = state_25599__$1;(statearr_25607_25626[1] = 9);
} else
{var statearr_25608_25627 = state_25599__$1;(statearr_25608_25627[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 7))
{var inst_25595 = (state_25599[2]);var state_25599__$1 = state_25599;var statearr_25609_25628 = state_25599__$1;(statearr_25609_25628[2] = inst_25595);
(statearr_25609_25628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 8))
{var inst_25592 = (state_25599[2]);var state_25599__$1 = (function (){var statearr_25610 = state_25599;(statearr_25610[9] = inst_25592);
return statearr_25610;
})();var statearr_25611_25629 = state_25599__$1;(statearr_25611_25629[2] = null);
(statearr_25611_25629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 9))
{var state_25599__$1 = state_25599;var statearr_25612_25630 = state_25599__$1;(statearr_25612_25630[2] = tc);
(statearr_25612_25630[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 10))
{var state_25599__$1 = state_25599;var statearr_25613_25631 = state_25599__$1;(statearr_25613_25631[2] = fc);
(statearr_25613_25631[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 11))
{var inst_25580 = (state_25599[7]);var inst_25590 = (state_25599[2]);var state_25599__$1 = state_25599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25599__$1,8,inst_25590,inst_25580);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25617 = [null,null,null,null,null,null,null,null,null,null];(statearr_25617[0] = state_machine__5548__auto__);
(statearr_25617[1] = 1);
return statearr_25617;
});
var state_machine__5548__auto____1 = (function (state_25599){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object))
{var ex__5551__auto__ = e25618;var statearr_25619_25632 = state_25599;(statearr_25619_25632[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25633 = state_25599;
state_25599 = G__25633;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25620 = f__5563__auto__.call(null);(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25621);
return statearr_25620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25680){var state_val_25681 = (state_25680[1]);if((state_val_25681 === 7))
{var inst_25676 = (state_25680[2]);var state_25680__$1 = state_25680;var statearr_25682_25698 = state_25680__$1;(statearr_25682_25698[2] = inst_25676);
(statearr_25682_25698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25681 === 6))
{var inst_25666 = (state_25680[7]);var inst_25669 = (state_25680[8]);var inst_25673 = f.call(null,inst_25666,inst_25669);var inst_25666__$1 = inst_25673;var state_25680__$1 = (function (){var statearr_25683 = state_25680;(statearr_25683[7] = inst_25666__$1);
return statearr_25683;
})();var statearr_25684_25699 = state_25680__$1;(statearr_25684_25699[2] = null);
(statearr_25684_25699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25681 === 5))
{var inst_25666 = (state_25680[7]);var state_25680__$1 = state_25680;var statearr_25685_25700 = state_25680__$1;(statearr_25685_25700[2] = inst_25666);
(statearr_25685_25700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25681 === 4))
{var inst_25669 = (state_25680[8]);var inst_25669__$1 = (state_25680[2]);var inst_25670 = (inst_25669__$1 == null);var state_25680__$1 = (function (){var statearr_25686 = state_25680;(statearr_25686[8] = inst_25669__$1);
return statearr_25686;
})();if(cljs.core.truth_(inst_25670))
{var statearr_25687_25701 = state_25680__$1;(statearr_25687_25701[1] = 5);
} else
{var statearr_25688_25702 = state_25680__$1;(statearr_25688_25702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25681 === 3))
{var inst_25678 = (state_25680[2]);var state_25680__$1 = state_25680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25680__$1,inst_25678);
} else
{if((state_val_25681 === 2))
{var state_25680__$1 = state_25680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25680__$1,4,ch);
} else
{if((state_val_25681 === 1))
{var inst_25666 = init;var state_25680__$1 = (function (){var statearr_25689 = state_25680;(statearr_25689[7] = inst_25666);
return statearr_25689;
})();var statearr_25690_25703 = state_25680__$1;(statearr_25690_25703[2] = null);
(statearr_25690_25703[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25694 = [null,null,null,null,null,null,null,null,null];(statearr_25694[0] = state_machine__5548__auto__);
(statearr_25694[1] = 1);
return statearr_25694;
});
var state_machine__5548__auto____1 = (function (state_25680){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25695){if((e25695 instanceof Object))
{var ex__5551__auto__ = e25695;var statearr_25696_25704 = state_25680;(statearr_25696_25704[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25705 = state_25680;
state_25680 = G__25705;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25680){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25697 = f__5563__auto__.call(null);(statearr_25697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25767){var state_val_25768 = (state_25767[1]);if((state_val_25768 === 1))
{var inst_25747 = cljs.core.seq.call(null,coll);var inst_25748 = inst_25747;var state_25767__$1 = (function (){var statearr_25769 = state_25767;(statearr_25769[7] = inst_25748);
return statearr_25769;
})();var statearr_25770_25788 = state_25767__$1;(statearr_25770_25788[2] = null);
(statearr_25770_25788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 2))
{var inst_25748 = (state_25767[7]);var state_25767__$1 = state_25767;if(cljs.core.truth_(inst_25748))
{var statearr_25771_25789 = state_25767__$1;(statearr_25771_25789[1] = 4);
} else
{var statearr_25772_25790 = state_25767__$1;(statearr_25772_25790[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 3))
{var inst_25765 = (state_25767[2]);var state_25767__$1 = state_25767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25767__$1,inst_25765);
} else
{if((state_val_25768 === 4))
{var inst_25748 = (state_25767[7]);var inst_25751 = cljs.core.first.call(null,inst_25748);var state_25767__$1 = state_25767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25767__$1,7,ch,inst_25751);
} else
{if((state_val_25768 === 5))
{var state_25767__$1 = state_25767;if(cljs.core.truth_(close_QMARK_))
{var statearr_25773_25791 = state_25767__$1;(statearr_25773_25791[1] = 8);
} else
{var statearr_25774_25792 = state_25767__$1;(statearr_25774_25792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 6))
{var inst_25763 = (state_25767[2]);var state_25767__$1 = state_25767;var statearr_25775_25793 = state_25767__$1;(statearr_25775_25793[2] = inst_25763);
(statearr_25775_25793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 7))
{var inst_25748 = (state_25767[7]);var inst_25753 = (state_25767[2]);var inst_25754 = cljs.core.next.call(null,inst_25748);var inst_25748__$1 = inst_25754;var state_25767__$1 = (function (){var statearr_25776 = state_25767;(statearr_25776[8] = inst_25753);
(statearr_25776[7] = inst_25748__$1);
return statearr_25776;
})();var statearr_25777_25794 = state_25767__$1;(statearr_25777_25794[2] = null);
(statearr_25777_25794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 8))
{var inst_25758 = cljs.core.async.close_BANG_.call(null,ch);var state_25767__$1 = state_25767;var statearr_25778_25795 = state_25767__$1;(statearr_25778_25795[2] = inst_25758);
(statearr_25778_25795[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 9))
{var state_25767__$1 = state_25767;var statearr_25779_25796 = state_25767__$1;(statearr_25779_25796[2] = null);
(statearr_25779_25796[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25768 === 10))
{var inst_25761 = (state_25767[2]);var state_25767__$1 = state_25767;var statearr_25780_25797 = state_25767__$1;(statearr_25780_25797[2] = inst_25761);
(statearr_25780_25797[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25784 = [null,null,null,null,null,null,null,null,null];(statearr_25784[0] = state_machine__5548__auto__);
(statearr_25784[1] = 1);
return statearr_25784;
});
var state_machine__5548__auto____1 = (function (state_25767){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25767);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25785){if((e25785 instanceof Object))
{var ex__5551__auto__ = e25785;var statearr_25786_25798 = state_25767;(statearr_25786_25798[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25799 = state_25767;
state_25767 = G__25799;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25767){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25787 = f__5563__auto__.call(null);(statearr_25787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj25801 = {};return obj25801;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25803 = {};return obj25803;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26027 = (function (cs,ch,mult,meta26028){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26028 = meta26028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26027.cljs$lang$type = true;
cljs.core.async.t26027.cljs$lang$ctorStr = "cljs.core.async/t26027";
cljs.core.async.t26027.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26027");
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26027.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26029){var self__ = this;
var _26029__$1 = this;return self__.meta26028;
});})(cs))
;
cljs.core.async.t26027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26029,meta26028__$1){var self__ = this;
var _26029__$1 = this;return (new cljs.core.async.t26027(self__.cs,self__.ch,self__.mult,meta26028__$1));
});})(cs))
;
cljs.core.async.__GT_t26027 = ((function (cs){
return (function __GT_t26027(cs__$1,ch__$1,mult__$1,meta26028){return (new cljs.core.async.t26027(cs__$1,ch__$1,mult__$1,meta26028));
});})(cs))
;
}
return (new cljs.core.async.t26027(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26250 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26164){var state_val_26165 = (state_26164[1]);if((state_val_26165 === 32))
{var inst_26108 = (state_26164[7]);var inst_26032 = (state_26164[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26164,31,Object,null,30);var inst_26115 = cljs.core.async.put_BANG_.call(null,inst_26108,inst_26032,done);var state_26164__$1 = state_26164;var statearr_26166_26251 = state_26164__$1;(statearr_26166_26251[2] = inst_26115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 1))
{var state_26164__$1 = state_26164;var statearr_26167_26252 = state_26164__$1;(statearr_26167_26252[2] = null);
(statearr_26167_26252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 33))
{var inst_26121 = (state_26164[9]);var inst_26123 = cljs.core.chunked_seq_QMARK_.call(null,inst_26121);var state_26164__$1 = state_26164;if(inst_26123)
{var statearr_26168_26253 = state_26164__$1;(statearr_26168_26253[1] = 36);
} else
{var statearr_26169_26254 = state_26164__$1;(statearr_26169_26254[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 2))
{var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26164__$1,4,ch);
} else
{if((state_val_26165 === 34))
{var state_26164__$1 = state_26164;var statearr_26170_26255 = state_26164__$1;(statearr_26170_26255[2] = null);
(statearr_26170_26255[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 3))
{var inst_26162 = (state_26164[2]);var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26164__$1,inst_26162);
} else
{if((state_val_26165 === 35))
{var inst_26146 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26171_26256 = state_26164__$1;(statearr_26171_26256[2] = inst_26146);
(statearr_26171_26256[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 4))
{var inst_26032 = (state_26164[8]);var inst_26032__$1 = (state_26164[2]);var inst_26033 = (inst_26032__$1 == null);var state_26164__$1 = (function (){var statearr_26172 = state_26164;(statearr_26172[8] = inst_26032__$1);
return statearr_26172;
})();if(cljs.core.truth_(inst_26033))
{var statearr_26173_26257 = state_26164__$1;(statearr_26173_26257[1] = 5);
} else
{var statearr_26174_26258 = state_26164__$1;(statearr_26174_26258[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 36))
{var inst_26121 = (state_26164[9]);var inst_26125 = cljs.core.chunk_first.call(null,inst_26121);var inst_26126 = cljs.core.chunk_rest.call(null,inst_26121);var inst_26127 = cljs.core.count.call(null,inst_26125);var inst_26100 = inst_26126;var inst_26101 = inst_26125;var inst_26102 = inst_26127;var inst_26103 = 0;var state_26164__$1 = (function (){var statearr_26175 = state_26164;(statearr_26175[10] = inst_26102);
(statearr_26175[11] = inst_26103);
(statearr_26175[12] = inst_26100);
(statearr_26175[13] = inst_26101);
return statearr_26175;
})();var statearr_26176_26259 = state_26164__$1;(statearr_26176_26259[2] = null);
(statearr_26176_26259[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 5))
{var inst_26039 = cljs.core.deref.call(null,cs);var inst_26040 = cljs.core.seq.call(null,inst_26039);var inst_26041 = inst_26040;var inst_26042 = null;var inst_26043 = 0;var inst_26044 = 0;var state_26164__$1 = (function (){var statearr_26177 = state_26164;(statearr_26177[14] = inst_26042);
(statearr_26177[15] = inst_26041);
(statearr_26177[16] = inst_26044);
(statearr_26177[17] = inst_26043);
return statearr_26177;
})();var statearr_26178_26260 = state_26164__$1;(statearr_26178_26260[2] = null);
(statearr_26178_26260[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 37))
{var inst_26121 = (state_26164[9]);var inst_26130 = cljs.core.first.call(null,inst_26121);var state_26164__$1 = (function (){var statearr_26179 = state_26164;(statearr_26179[18] = inst_26130);
return statearr_26179;
})();var statearr_26180_26261 = state_26164__$1;(statearr_26180_26261[2] = null);
(statearr_26180_26261[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 6))
{var inst_26092 = (state_26164[19]);var inst_26091 = cljs.core.deref.call(null,cs);var inst_26092__$1 = cljs.core.keys.call(null,inst_26091);var inst_26093 = cljs.core.count.call(null,inst_26092__$1);var inst_26094 = cljs.core.reset_BANG_.call(null,dctr,inst_26093);var inst_26099 = cljs.core.seq.call(null,inst_26092__$1);var inst_26100 = inst_26099;var inst_26101 = null;var inst_26102 = 0;var inst_26103 = 0;var state_26164__$1 = (function (){var statearr_26181 = state_26164;(statearr_26181[19] = inst_26092__$1);
(statearr_26181[10] = inst_26102);
(statearr_26181[11] = inst_26103);
(statearr_26181[20] = inst_26094);
(statearr_26181[12] = inst_26100);
(statearr_26181[13] = inst_26101);
return statearr_26181;
})();var statearr_26182_26262 = state_26164__$1;(statearr_26182_26262[2] = null);
(statearr_26182_26262[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 38))
{var inst_26143 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26183_26263 = state_26164__$1;(statearr_26183_26263[2] = inst_26143);
(statearr_26183_26263[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 7))
{var inst_26160 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26184_26264 = state_26164__$1;(statearr_26184_26264[2] = inst_26160);
(statearr_26184_26264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 39))
{var inst_26121 = (state_26164[9]);var inst_26139 = (state_26164[2]);var inst_26140 = cljs.core.next.call(null,inst_26121);var inst_26100 = inst_26140;var inst_26101 = null;var inst_26102 = 0;var inst_26103 = 0;var state_26164__$1 = (function (){var statearr_26185 = state_26164;(statearr_26185[10] = inst_26102);
(statearr_26185[11] = inst_26103);
(statearr_26185[12] = inst_26100);
(statearr_26185[13] = inst_26101);
(statearr_26185[21] = inst_26139);
return statearr_26185;
})();var statearr_26186_26265 = state_26164__$1;(statearr_26186_26265[2] = null);
(statearr_26186_26265[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 8))
{var inst_26044 = (state_26164[16]);var inst_26043 = (state_26164[17]);var inst_26046 = (inst_26044 < inst_26043);var inst_26047 = inst_26046;var state_26164__$1 = state_26164;if(cljs.core.truth_(inst_26047))
{var statearr_26187_26266 = state_26164__$1;(statearr_26187_26266[1] = 10);
} else
{var statearr_26188_26267 = state_26164__$1;(statearr_26188_26267[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 40))
{var inst_26130 = (state_26164[18]);var inst_26131 = (state_26164[2]);var inst_26132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26133 = cljs.core.async.untap_STAR_.call(null,m,inst_26130);var state_26164__$1 = (function (){var statearr_26189 = state_26164;(statearr_26189[22] = inst_26132);
(statearr_26189[23] = inst_26131);
return statearr_26189;
})();var statearr_26190_26268 = state_26164__$1;(statearr_26190_26268[2] = inst_26133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 9))
{var inst_26089 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26191_26269 = state_26164__$1;(statearr_26191_26269[2] = inst_26089);
(statearr_26191_26269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 41))
{var inst_26032 = (state_26164[8]);var inst_26130 = (state_26164[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26164,40,Object,null,39);var inst_26137 = cljs.core.async.put_BANG_.call(null,inst_26130,inst_26032,done);var state_26164__$1 = state_26164;var statearr_26192_26270 = state_26164__$1;(statearr_26192_26270[2] = inst_26137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 10))
{var inst_26042 = (state_26164[14]);var inst_26044 = (state_26164[16]);var inst_26050 = cljs.core._nth.call(null,inst_26042,inst_26044);var inst_26051 = cljs.core.nth.call(null,inst_26050,0,null);var inst_26052 = cljs.core.nth.call(null,inst_26050,1,null);var state_26164__$1 = (function (){var statearr_26193 = state_26164;(statearr_26193[24] = inst_26051);
return statearr_26193;
})();if(cljs.core.truth_(inst_26052))
{var statearr_26194_26271 = state_26164__$1;(statearr_26194_26271[1] = 13);
} else
{var statearr_26195_26272 = state_26164__$1;(statearr_26195_26272[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 42))
{var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26164__$1,45,dchan);
} else
{if((state_val_26165 === 11))
{var inst_26041 = (state_26164[15]);var inst_26061 = (state_26164[25]);var inst_26061__$1 = cljs.core.seq.call(null,inst_26041);var state_26164__$1 = (function (){var statearr_26196 = state_26164;(statearr_26196[25] = inst_26061__$1);
return statearr_26196;
})();if(inst_26061__$1)
{var statearr_26197_26273 = state_26164__$1;(statearr_26197_26273[1] = 16);
} else
{var statearr_26198_26274 = state_26164__$1;(statearr_26198_26274[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 43))
{var state_26164__$1 = state_26164;var statearr_26199_26275 = state_26164__$1;(statearr_26199_26275[2] = null);
(statearr_26199_26275[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 12))
{var inst_26087 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26200_26276 = state_26164__$1;(statearr_26200_26276[2] = inst_26087);
(statearr_26200_26276[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 44))
{var inst_26157 = (state_26164[2]);var state_26164__$1 = (function (){var statearr_26201 = state_26164;(statearr_26201[26] = inst_26157);
return statearr_26201;
})();var statearr_26202_26277 = state_26164__$1;(statearr_26202_26277[2] = null);
(statearr_26202_26277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 13))
{var inst_26051 = (state_26164[24]);var inst_26054 = cljs.core.async.close_BANG_.call(null,inst_26051);var state_26164__$1 = state_26164;var statearr_26203_26278 = state_26164__$1;(statearr_26203_26278[2] = inst_26054);
(statearr_26203_26278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 45))
{var inst_26154 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26207_26279 = state_26164__$1;(statearr_26207_26279[2] = inst_26154);
(statearr_26207_26279[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 14))
{var state_26164__$1 = state_26164;var statearr_26208_26280 = state_26164__$1;(statearr_26208_26280[2] = null);
(statearr_26208_26280[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 15))
{var inst_26042 = (state_26164[14]);var inst_26041 = (state_26164[15]);var inst_26044 = (state_26164[16]);var inst_26043 = (state_26164[17]);var inst_26057 = (state_26164[2]);var inst_26058 = (inst_26044 + 1);var tmp26204 = inst_26042;var tmp26205 = inst_26041;var tmp26206 = inst_26043;var inst_26041__$1 = tmp26205;var inst_26042__$1 = tmp26204;var inst_26043__$1 = tmp26206;var inst_26044__$1 = inst_26058;var state_26164__$1 = (function (){var statearr_26209 = state_26164;(statearr_26209[14] = inst_26042__$1);
(statearr_26209[15] = inst_26041__$1);
(statearr_26209[16] = inst_26044__$1);
(statearr_26209[17] = inst_26043__$1);
(statearr_26209[27] = inst_26057);
return statearr_26209;
})();var statearr_26210_26281 = state_26164__$1;(statearr_26210_26281[2] = null);
(statearr_26210_26281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 16))
{var inst_26061 = (state_26164[25]);var inst_26063 = cljs.core.chunked_seq_QMARK_.call(null,inst_26061);var state_26164__$1 = state_26164;if(inst_26063)
{var statearr_26211_26282 = state_26164__$1;(statearr_26211_26282[1] = 19);
} else
{var statearr_26212_26283 = state_26164__$1;(statearr_26212_26283[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 17))
{var state_26164__$1 = state_26164;var statearr_26213_26284 = state_26164__$1;(statearr_26213_26284[2] = null);
(statearr_26213_26284[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 18))
{var inst_26085 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26214_26285 = state_26164__$1;(statearr_26214_26285[2] = inst_26085);
(statearr_26214_26285[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 19))
{var inst_26061 = (state_26164[25]);var inst_26065 = cljs.core.chunk_first.call(null,inst_26061);var inst_26066 = cljs.core.chunk_rest.call(null,inst_26061);var inst_26067 = cljs.core.count.call(null,inst_26065);var inst_26041 = inst_26066;var inst_26042 = inst_26065;var inst_26043 = inst_26067;var inst_26044 = 0;var state_26164__$1 = (function (){var statearr_26215 = state_26164;(statearr_26215[14] = inst_26042);
(statearr_26215[15] = inst_26041);
(statearr_26215[16] = inst_26044);
(statearr_26215[17] = inst_26043);
return statearr_26215;
})();var statearr_26216_26286 = state_26164__$1;(statearr_26216_26286[2] = null);
(statearr_26216_26286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 20))
{var inst_26061 = (state_26164[25]);var inst_26071 = cljs.core.first.call(null,inst_26061);var inst_26072 = cljs.core.nth.call(null,inst_26071,0,null);var inst_26073 = cljs.core.nth.call(null,inst_26071,1,null);var state_26164__$1 = (function (){var statearr_26217 = state_26164;(statearr_26217[28] = inst_26072);
return statearr_26217;
})();if(cljs.core.truth_(inst_26073))
{var statearr_26218_26287 = state_26164__$1;(statearr_26218_26287[1] = 22);
} else
{var statearr_26219_26288 = state_26164__$1;(statearr_26219_26288[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 21))
{var inst_26082 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26220_26289 = state_26164__$1;(statearr_26220_26289[2] = inst_26082);
(statearr_26220_26289[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 22))
{var inst_26072 = (state_26164[28]);var inst_26075 = cljs.core.async.close_BANG_.call(null,inst_26072);var state_26164__$1 = state_26164;var statearr_26221_26290 = state_26164__$1;(statearr_26221_26290[2] = inst_26075);
(statearr_26221_26290[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 23))
{var state_26164__$1 = state_26164;var statearr_26222_26291 = state_26164__$1;(statearr_26222_26291[2] = null);
(statearr_26222_26291[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 24))
{var inst_26061 = (state_26164[25]);var inst_26078 = (state_26164[2]);var inst_26079 = cljs.core.next.call(null,inst_26061);var inst_26041 = inst_26079;var inst_26042 = null;var inst_26043 = 0;var inst_26044 = 0;var state_26164__$1 = (function (){var statearr_26223 = state_26164;(statearr_26223[29] = inst_26078);
(statearr_26223[14] = inst_26042);
(statearr_26223[15] = inst_26041);
(statearr_26223[16] = inst_26044);
(statearr_26223[17] = inst_26043);
return statearr_26223;
})();var statearr_26224_26292 = state_26164__$1;(statearr_26224_26292[2] = null);
(statearr_26224_26292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 25))
{var inst_26102 = (state_26164[10]);var inst_26103 = (state_26164[11]);var inst_26105 = (inst_26103 < inst_26102);var inst_26106 = inst_26105;var state_26164__$1 = state_26164;if(cljs.core.truth_(inst_26106))
{var statearr_26225_26293 = state_26164__$1;(statearr_26225_26293[1] = 27);
} else
{var statearr_26226_26294 = state_26164__$1;(statearr_26226_26294[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 26))
{var inst_26092 = (state_26164[19]);var inst_26150 = (state_26164[2]);var inst_26151 = cljs.core.seq.call(null,inst_26092);var state_26164__$1 = (function (){var statearr_26227 = state_26164;(statearr_26227[30] = inst_26150);
return statearr_26227;
})();if(inst_26151)
{var statearr_26228_26295 = state_26164__$1;(statearr_26228_26295[1] = 42);
} else
{var statearr_26229_26296 = state_26164__$1;(statearr_26229_26296[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 27))
{var inst_26103 = (state_26164[11]);var inst_26101 = (state_26164[13]);var inst_26108 = cljs.core._nth.call(null,inst_26101,inst_26103);var state_26164__$1 = (function (){var statearr_26230 = state_26164;(statearr_26230[7] = inst_26108);
return statearr_26230;
})();var statearr_26231_26297 = state_26164__$1;(statearr_26231_26297[2] = null);
(statearr_26231_26297[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 28))
{var inst_26100 = (state_26164[12]);var inst_26121 = (state_26164[9]);var inst_26121__$1 = cljs.core.seq.call(null,inst_26100);var state_26164__$1 = (function (){var statearr_26235 = state_26164;(statearr_26235[9] = inst_26121__$1);
return statearr_26235;
})();if(inst_26121__$1)
{var statearr_26236_26298 = state_26164__$1;(statearr_26236_26298[1] = 33);
} else
{var statearr_26237_26299 = state_26164__$1;(statearr_26237_26299[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 29))
{var inst_26148 = (state_26164[2]);var state_26164__$1 = state_26164;var statearr_26238_26300 = state_26164__$1;(statearr_26238_26300[2] = inst_26148);
(statearr_26238_26300[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 30))
{var inst_26102 = (state_26164[10]);var inst_26103 = (state_26164[11]);var inst_26100 = (state_26164[12]);var inst_26101 = (state_26164[13]);var inst_26117 = (state_26164[2]);var inst_26118 = (inst_26103 + 1);var tmp26232 = inst_26102;var tmp26233 = inst_26100;var tmp26234 = inst_26101;var inst_26100__$1 = tmp26233;var inst_26101__$1 = tmp26234;var inst_26102__$1 = tmp26232;var inst_26103__$1 = inst_26118;var state_26164__$1 = (function (){var statearr_26239 = state_26164;(statearr_26239[10] = inst_26102__$1);
(statearr_26239[11] = inst_26103__$1);
(statearr_26239[12] = inst_26100__$1);
(statearr_26239[13] = inst_26101__$1);
(statearr_26239[31] = inst_26117);
return statearr_26239;
})();var statearr_26240_26301 = state_26164__$1;(statearr_26240_26301[2] = null);
(statearr_26240_26301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26165 === 31))
{var inst_26108 = (state_26164[7]);var inst_26109 = (state_26164[2]);var inst_26110 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26111 = cljs.core.async.untap_STAR_.call(null,m,inst_26108);var state_26164__$1 = (function (){var statearr_26241 = state_26164;(statearr_26241[32] = inst_26109);
(statearr_26241[33] = inst_26110);
return statearr_26241;
})();var statearr_26242_26302 = state_26164__$1;(statearr_26242_26302[2] = inst_26111);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26246[0] = state_machine__5548__auto__);
(statearr_26246[1] = 1);
return statearr_26246;
});
var state_machine__5548__auto____1 = (function (state_26164){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26247){if((e26247 instanceof Object))
{var ex__5551__auto__ = e26247;var statearr_26248_26303 = state_26164;(statearr_26248_26303[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26304 = state_26164;
state_26164 = G__26304;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26164){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26249 = f__5563__auto__.call(null);(statearr_26249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26250);
return statearr_26249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj26306 = {};return obj26306;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26416 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26417){
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
this.meta26417 = meta26417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26416.cljs$lang$type = true;
cljs.core.async.t26416.cljs$lang$ctorStr = "cljs.core.async/t26416";
cljs.core.async.t26416.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26416");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26418){var self__ = this;
var _26418__$1 = this;return self__.meta26417;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26418,meta26417__$1){var self__ = this;
var _26418__$1 = this;return (new cljs.core.async.t26416(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26417__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26416 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26416(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26417){return (new cljs.core.async.t26416(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26417));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26416(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26483){var state_val_26484 = (state_26483[1]);if((state_val_26484 === 1))
{var inst_26422 = (state_26483[7]);var inst_26422__$1 = calc_state.call(null);var inst_26423 = cljs.core.seq_QMARK_.call(null,inst_26422__$1);var state_26483__$1 = (function (){var statearr_26485 = state_26483;(statearr_26485[7] = inst_26422__$1);
return statearr_26485;
})();if(inst_26423)
{var statearr_26486_26526 = state_26483__$1;(statearr_26486_26526[1] = 2);
} else
{var statearr_26487_26527 = state_26483__$1;(statearr_26487_26527[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 2))
{var inst_26422 = (state_26483[7]);var inst_26425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26422);var state_26483__$1 = state_26483;var statearr_26488_26528 = state_26483__$1;(statearr_26488_26528[2] = inst_26425);
(statearr_26488_26528[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 3))
{var inst_26422 = (state_26483[7]);var state_26483__$1 = state_26483;var statearr_26489_26529 = state_26483__$1;(statearr_26489_26529[2] = inst_26422);
(statearr_26489_26529[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 4))
{var inst_26422 = (state_26483[7]);var inst_26428 = (state_26483[2]);var inst_26429 = cljs.core.get.call(null,inst_26428,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26430 = cljs.core.get.call(null,inst_26428,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26431 = cljs.core.get.call(null,inst_26428,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26432 = inst_26422;var state_26483__$1 = (function (){var statearr_26490 = state_26483;(statearr_26490[8] = inst_26429);
(statearr_26490[9] = inst_26432);
(statearr_26490[10] = inst_26430);
(statearr_26490[11] = inst_26431);
return statearr_26490;
})();var statearr_26491_26530 = state_26483__$1;(statearr_26491_26530[2] = null);
(statearr_26491_26530[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 5))
{var inst_26432 = (state_26483[9]);var inst_26435 = cljs.core.seq_QMARK_.call(null,inst_26432);var state_26483__$1 = state_26483;if(inst_26435)
{var statearr_26492_26531 = state_26483__$1;(statearr_26492_26531[1] = 7);
} else
{var statearr_26493_26532 = state_26483__$1;(statearr_26493_26532[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 6))
{var inst_26481 = (state_26483[2]);var state_26483__$1 = state_26483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26483__$1,inst_26481);
} else
{if((state_val_26484 === 7))
{var inst_26432 = (state_26483[9]);var inst_26437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26432);var state_26483__$1 = state_26483;var statearr_26494_26533 = state_26483__$1;(statearr_26494_26533[2] = inst_26437);
(statearr_26494_26533[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 8))
{var inst_26432 = (state_26483[9]);var state_26483__$1 = state_26483;var statearr_26495_26534 = state_26483__$1;(statearr_26495_26534[2] = inst_26432);
(statearr_26495_26534[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 9))
{var inst_26440 = (state_26483[12]);var inst_26440__$1 = (state_26483[2]);var inst_26441 = cljs.core.get.call(null,inst_26440__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26442 = cljs.core.get.call(null,inst_26440__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26443 = cljs.core.get.call(null,inst_26440__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26483__$1 = (function (){var statearr_26496 = state_26483;(statearr_26496[13] = inst_26443);
(statearr_26496[14] = inst_26442);
(statearr_26496[12] = inst_26440__$1);
return statearr_26496;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26483__$1,10,inst_26441);
} else
{if((state_val_26484 === 10))
{var inst_26448 = (state_26483[15]);var inst_26447 = (state_26483[16]);var inst_26446 = (state_26483[2]);var inst_26447__$1 = cljs.core.nth.call(null,inst_26446,0,null);var inst_26448__$1 = cljs.core.nth.call(null,inst_26446,1,null);var inst_26449 = (inst_26447__$1 == null);var inst_26450 = cljs.core._EQ_.call(null,inst_26448__$1,change);var inst_26451 = (inst_26449) || (inst_26450);var state_26483__$1 = (function (){var statearr_26497 = state_26483;(statearr_26497[15] = inst_26448__$1);
(statearr_26497[16] = inst_26447__$1);
return statearr_26497;
})();if(cljs.core.truth_(inst_26451))
{var statearr_26498_26535 = state_26483__$1;(statearr_26498_26535[1] = 11);
} else
{var statearr_26499_26536 = state_26483__$1;(statearr_26499_26536[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 11))
{var inst_26447 = (state_26483[16]);var inst_26453 = (inst_26447 == null);var state_26483__$1 = state_26483;if(cljs.core.truth_(inst_26453))
{var statearr_26500_26537 = state_26483__$1;(statearr_26500_26537[1] = 14);
} else
{var statearr_26501_26538 = state_26483__$1;(statearr_26501_26538[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 12))
{var inst_26462 = (state_26483[17]);var inst_26443 = (state_26483[13]);var inst_26448 = (state_26483[15]);var inst_26462__$1 = inst_26443.call(null,inst_26448);var state_26483__$1 = (function (){var statearr_26502 = state_26483;(statearr_26502[17] = inst_26462__$1);
return statearr_26502;
})();if(cljs.core.truth_(inst_26462__$1))
{var statearr_26503_26539 = state_26483__$1;(statearr_26503_26539[1] = 17);
} else
{var statearr_26504_26540 = state_26483__$1;(statearr_26504_26540[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 13))
{var inst_26479 = (state_26483[2]);var state_26483__$1 = state_26483;var statearr_26505_26541 = state_26483__$1;(statearr_26505_26541[2] = inst_26479);
(statearr_26505_26541[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 14))
{var inst_26448 = (state_26483[15]);var inst_26455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26448);var state_26483__$1 = state_26483;var statearr_26506_26542 = state_26483__$1;(statearr_26506_26542[2] = inst_26455);
(statearr_26506_26542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 15))
{var state_26483__$1 = state_26483;var statearr_26507_26543 = state_26483__$1;(statearr_26507_26543[2] = null);
(statearr_26507_26543[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 16))
{var inst_26458 = (state_26483[2]);var inst_26459 = calc_state.call(null);var inst_26432 = inst_26459;var state_26483__$1 = (function (){var statearr_26508 = state_26483;(statearr_26508[9] = inst_26432);
(statearr_26508[18] = inst_26458);
return statearr_26508;
})();var statearr_26509_26544 = state_26483__$1;(statearr_26509_26544[2] = null);
(statearr_26509_26544[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 17))
{var inst_26462 = (state_26483[17]);var state_26483__$1 = state_26483;var statearr_26510_26545 = state_26483__$1;(statearr_26510_26545[2] = inst_26462);
(statearr_26510_26545[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 18))
{var inst_26443 = (state_26483[13]);var inst_26442 = (state_26483[14]);var inst_26448 = (state_26483[15]);var inst_26465 = cljs.core.empty_QMARK_.call(null,inst_26443);var inst_26466 = inst_26442.call(null,inst_26448);var inst_26467 = cljs.core.not.call(null,inst_26466);var inst_26468 = (inst_26465) && (inst_26467);var state_26483__$1 = state_26483;var statearr_26511_26546 = state_26483__$1;(statearr_26511_26546[2] = inst_26468);
(statearr_26511_26546[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 19))
{var inst_26470 = (state_26483[2]);var state_26483__$1 = state_26483;if(cljs.core.truth_(inst_26470))
{var statearr_26512_26547 = state_26483__$1;(statearr_26512_26547[1] = 20);
} else
{var statearr_26513_26548 = state_26483__$1;(statearr_26513_26548[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 20))
{var inst_26447 = (state_26483[16]);var state_26483__$1 = state_26483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26483__$1,23,out,inst_26447);
} else
{if((state_val_26484 === 21))
{var state_26483__$1 = state_26483;var statearr_26514_26549 = state_26483__$1;(statearr_26514_26549[2] = null);
(statearr_26514_26549[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 22))
{var inst_26440 = (state_26483[12]);var inst_26476 = (state_26483[2]);var inst_26432 = inst_26440;var state_26483__$1 = (function (){var statearr_26515 = state_26483;(statearr_26515[9] = inst_26432);
(statearr_26515[19] = inst_26476);
return statearr_26515;
})();var statearr_26516_26550 = state_26483__$1;(statearr_26516_26550[2] = null);
(statearr_26516_26550[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26484 === 23))
{var inst_26473 = (state_26483[2]);var state_26483__$1 = state_26483;var statearr_26517_26551 = state_26483__$1;(statearr_26517_26551[2] = inst_26473);
(statearr_26517_26551[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26521[0] = state_machine__5548__auto__);
(statearr_26521[1] = 1);
return statearr_26521;
});
var state_machine__5548__auto____1 = (function (state_26483){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26522){if((e26522 instanceof Object))
{var ex__5551__auto__ = e26522;var statearr_26523_26552 = state_26483;(statearr_26523_26552[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26553 = state_26483;
state_26483 = G__26553;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26483){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26524 = f__5563__auto__.call(null);(statearr_26524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26525);
return statearr_26524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj26555 = {};return obj26555;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__26556_SHARP_){if(cljs.core.truth_(p1__26556_SHARP_.call(null,topic)))
{return p1__26556_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26556_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26681 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26682){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26682 = meta26682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26681.cljs$lang$type = true;
cljs.core.async.t26681.cljs$lang$ctorStr = "cljs.core.async/t26681";
cljs.core.async.t26681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26681");
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26683){var self__ = this;
var _26683__$1 = this;return self__.meta26682;
});})(mults,ensure_mult))
;
cljs.core.async.t26681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26683,meta26682__$1){var self__ = this;
var _26683__$1 = this;return (new cljs.core.async.t26681(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26682__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26681 = ((function (mults,ensure_mult){
return (function __GT_t26681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26682){return (new cljs.core.async.t26681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26682));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26681(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26757){var state_val_26758 = (state_26757[1]);if((state_val_26758 === 1))
{var state_26757__$1 = state_26757;var statearr_26759_26806 = state_26757__$1;(statearr_26759_26806[2] = null);
(statearr_26759_26806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 2))
{var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,4,ch);
} else
{if((state_val_26758 === 3))
{var inst_26755 = (state_26757[2]);var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else
{if((state_val_26758 === 4))
{var inst_26686 = (state_26757[7]);var inst_26686__$1 = (state_26757[2]);var inst_26687 = (inst_26686__$1 == null);var state_26757__$1 = (function (){var statearr_26760 = state_26757;(statearr_26760[7] = inst_26686__$1);
return statearr_26760;
})();if(cljs.core.truth_(inst_26687))
{var statearr_26761_26807 = state_26757__$1;(statearr_26761_26807[1] = 5);
} else
{var statearr_26762_26808 = state_26757__$1;(statearr_26762_26808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 5))
{var inst_26693 = cljs.core.deref.call(null,mults);var inst_26694 = cljs.core.vals.call(null,inst_26693);var inst_26695 = cljs.core.seq.call(null,inst_26694);var inst_26696 = inst_26695;var inst_26697 = null;var inst_26698 = 0;var inst_26699 = 0;var state_26757__$1 = (function (){var statearr_26763 = state_26757;(statearr_26763[8] = inst_26699);
(statearr_26763[9] = inst_26698);
(statearr_26763[10] = inst_26696);
(statearr_26763[11] = inst_26697);
return statearr_26763;
})();var statearr_26764_26809 = state_26757__$1;(statearr_26764_26809[2] = null);
(statearr_26764_26809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 6))
{var inst_26736 = (state_26757[12]);var inst_26686 = (state_26757[7]);var inst_26734 = (state_26757[13]);var inst_26734__$1 = topic_fn.call(null,inst_26686);var inst_26735 = cljs.core.deref.call(null,mults);var inst_26736__$1 = cljs.core.get.call(null,inst_26735,inst_26734__$1);var state_26757__$1 = (function (){var statearr_26765 = state_26757;(statearr_26765[12] = inst_26736__$1);
(statearr_26765[13] = inst_26734__$1);
return statearr_26765;
})();if(cljs.core.truth_(inst_26736__$1))
{var statearr_26766_26810 = state_26757__$1;(statearr_26766_26810[1] = 19);
} else
{var statearr_26767_26811 = state_26757__$1;(statearr_26767_26811[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 7))
{var inst_26753 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26768_26812 = state_26757__$1;(statearr_26768_26812[2] = inst_26753);
(statearr_26768_26812[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 8))
{var inst_26699 = (state_26757[8]);var inst_26698 = (state_26757[9]);var inst_26701 = (inst_26699 < inst_26698);var inst_26702 = inst_26701;var state_26757__$1 = state_26757;if(cljs.core.truth_(inst_26702))
{var statearr_26772_26813 = state_26757__$1;(statearr_26772_26813[1] = 10);
} else
{var statearr_26773_26814 = state_26757__$1;(statearr_26773_26814[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 9))
{var inst_26732 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26774_26815 = state_26757__$1;(statearr_26774_26815[2] = inst_26732);
(statearr_26774_26815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 10))
{var inst_26699 = (state_26757[8]);var inst_26698 = (state_26757[9]);var inst_26696 = (state_26757[10]);var inst_26697 = (state_26757[11]);var inst_26704 = cljs.core._nth.call(null,inst_26697,inst_26699);var inst_26705 = cljs.core.async.muxch_STAR_.call(null,inst_26704);var inst_26706 = cljs.core.async.close_BANG_.call(null,inst_26705);var inst_26707 = (inst_26699 + 1);var tmp26769 = inst_26698;var tmp26770 = inst_26696;var tmp26771 = inst_26697;var inst_26696__$1 = tmp26770;var inst_26697__$1 = tmp26771;var inst_26698__$1 = tmp26769;var inst_26699__$1 = inst_26707;var state_26757__$1 = (function (){var statearr_26775 = state_26757;(statearr_26775[8] = inst_26699__$1);
(statearr_26775[9] = inst_26698__$1);
(statearr_26775[10] = inst_26696__$1);
(statearr_26775[11] = inst_26697__$1);
(statearr_26775[14] = inst_26706);
return statearr_26775;
})();var statearr_26776_26816 = state_26757__$1;(statearr_26776_26816[2] = null);
(statearr_26776_26816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 11))
{var inst_26710 = (state_26757[15]);var inst_26696 = (state_26757[10]);var inst_26710__$1 = cljs.core.seq.call(null,inst_26696);var state_26757__$1 = (function (){var statearr_26777 = state_26757;(statearr_26777[15] = inst_26710__$1);
return statearr_26777;
})();if(inst_26710__$1)
{var statearr_26778_26817 = state_26757__$1;(statearr_26778_26817[1] = 13);
} else
{var statearr_26779_26818 = state_26757__$1;(statearr_26779_26818[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 12))
{var inst_26730 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26780_26819 = state_26757__$1;(statearr_26780_26819[2] = inst_26730);
(statearr_26780_26819[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 13))
{var inst_26710 = (state_26757[15]);var inst_26712 = cljs.core.chunked_seq_QMARK_.call(null,inst_26710);var state_26757__$1 = state_26757;if(inst_26712)
{var statearr_26781_26820 = state_26757__$1;(statearr_26781_26820[1] = 16);
} else
{var statearr_26782_26821 = state_26757__$1;(statearr_26782_26821[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 14))
{var state_26757__$1 = state_26757;var statearr_26783_26822 = state_26757__$1;(statearr_26783_26822[2] = null);
(statearr_26783_26822[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 15))
{var inst_26728 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26784_26823 = state_26757__$1;(statearr_26784_26823[2] = inst_26728);
(statearr_26784_26823[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 16))
{var inst_26710 = (state_26757[15]);var inst_26714 = cljs.core.chunk_first.call(null,inst_26710);var inst_26715 = cljs.core.chunk_rest.call(null,inst_26710);var inst_26716 = cljs.core.count.call(null,inst_26714);var inst_26696 = inst_26715;var inst_26697 = inst_26714;var inst_26698 = inst_26716;var inst_26699 = 0;var state_26757__$1 = (function (){var statearr_26785 = state_26757;(statearr_26785[8] = inst_26699);
(statearr_26785[9] = inst_26698);
(statearr_26785[10] = inst_26696);
(statearr_26785[11] = inst_26697);
return statearr_26785;
})();var statearr_26786_26824 = state_26757__$1;(statearr_26786_26824[2] = null);
(statearr_26786_26824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 17))
{var inst_26710 = (state_26757[15]);var inst_26719 = cljs.core.first.call(null,inst_26710);var inst_26720 = cljs.core.async.muxch_STAR_.call(null,inst_26719);var inst_26721 = cljs.core.async.close_BANG_.call(null,inst_26720);var inst_26722 = cljs.core.next.call(null,inst_26710);var inst_26696 = inst_26722;var inst_26697 = null;var inst_26698 = 0;var inst_26699 = 0;var state_26757__$1 = (function (){var statearr_26787 = state_26757;(statearr_26787[8] = inst_26699);
(statearr_26787[9] = inst_26698);
(statearr_26787[10] = inst_26696);
(statearr_26787[11] = inst_26697);
(statearr_26787[16] = inst_26721);
return statearr_26787;
})();var statearr_26788_26825 = state_26757__$1;(statearr_26788_26825[2] = null);
(statearr_26788_26825[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 18))
{var inst_26725 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26789_26826 = state_26757__$1;(statearr_26789_26826[2] = inst_26725);
(statearr_26789_26826[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 19))
{var state_26757__$1 = state_26757;var statearr_26790_26827 = state_26757__$1;(statearr_26790_26827[2] = null);
(statearr_26790_26827[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 20))
{var state_26757__$1 = state_26757;var statearr_26791_26828 = state_26757__$1;(statearr_26791_26828[2] = null);
(statearr_26791_26828[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 21))
{var inst_26750 = (state_26757[2]);var state_26757__$1 = (function (){var statearr_26792 = state_26757;(statearr_26792[17] = inst_26750);
return statearr_26792;
})();var statearr_26793_26829 = state_26757__$1;(statearr_26793_26829[2] = null);
(statearr_26793_26829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 22))
{var inst_26747 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26794_26830 = state_26757__$1;(statearr_26794_26830[2] = inst_26747);
(statearr_26794_26830[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 23))
{var inst_26734 = (state_26757[13]);var inst_26738 = (state_26757[2]);var inst_26739 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26734);var state_26757__$1 = (function (){var statearr_26795 = state_26757;(statearr_26795[18] = inst_26738);
return statearr_26795;
})();var statearr_26796_26831 = state_26757__$1;(statearr_26796_26831[2] = inst_26739);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 24))
{var inst_26736 = (state_26757[12]);var inst_26686 = (state_26757[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26757,23,Object,null,22);var inst_26743 = cljs.core.async.muxch_STAR_.call(null,inst_26736);var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26757__$1,25,inst_26743,inst_26686);
} else
{if((state_val_26758 === 25))
{var inst_26745 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26797_26832 = state_26757__$1;(statearr_26797_26832[2] = inst_26745);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26801[0] = state_machine__5548__auto__);
(statearr_26801[1] = 1);
return statearr_26801;
});
var state_machine__5548__auto____1 = (function (state_26757){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26802){if((e26802 instanceof Object))
{var ex__5551__auto__ = e26802;var statearr_26803_26833 = state_26757;(statearr_26803_26833[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26834 = state_26757;
state_26757 = G__26834;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26804 = f__5563__auto__.call(null);(statearr_26804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26805);
return statearr_26804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26941){var state_val_26942 = (state_26941[1]);if((state_val_26942 === 1))
{var state_26941__$1 = state_26941;var statearr_26943_26972 = state_26941__$1;(statearr_26943_26972[2] = null);
(statearr_26943_26972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 2))
{var inst_26904 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26905 = 0;var state_26941__$1 = (function (){var statearr_26944 = state_26941;(statearr_26944[7] = inst_26905);
(statearr_26944[8] = inst_26904);
return statearr_26944;
})();var statearr_26945_26973 = state_26941__$1;(statearr_26945_26973[2] = null);
(statearr_26945_26973[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 3))
{var inst_26939 = (state_26941[2]);var state_26941__$1 = state_26941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else
{if((state_val_26942 === 4))
{var inst_26905 = (state_26941[7]);var inst_26907 = (inst_26905 < cnt);var state_26941__$1 = state_26941;if(cljs.core.truth_(inst_26907))
{var statearr_26946_26974 = state_26941__$1;(statearr_26946_26974[1] = 6);
} else
{var statearr_26947_26975 = state_26941__$1;(statearr_26947_26975[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 5))
{var inst_26925 = (state_26941[2]);var state_26941__$1 = (function (){var statearr_26948 = state_26941;(statearr_26948[9] = inst_26925);
return statearr_26948;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,12,dchan);
} else
{if((state_val_26942 === 6))
{var state_26941__$1 = state_26941;var statearr_26949_26976 = state_26941__$1;(statearr_26949_26976[2] = null);
(statearr_26949_26976[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 7))
{var state_26941__$1 = state_26941;var statearr_26950_26977 = state_26941__$1;(statearr_26950_26977[2] = null);
(statearr_26950_26977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 8))
{var inst_26923 = (state_26941[2]);var state_26941__$1 = state_26941;var statearr_26951_26978 = state_26941__$1;(statearr_26951_26978[2] = inst_26923);
(statearr_26951_26978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 9))
{var inst_26905 = (state_26941[7]);var inst_26918 = (state_26941[2]);var inst_26919 = (inst_26905 + 1);var inst_26905__$1 = inst_26919;var state_26941__$1 = (function (){var statearr_26952 = state_26941;(statearr_26952[10] = inst_26918);
(statearr_26952[7] = inst_26905__$1);
return statearr_26952;
})();var statearr_26953_26979 = state_26941__$1;(statearr_26953_26979[2] = null);
(statearr_26953_26979[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 10))
{var inst_26909 = (state_26941[2]);var inst_26910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26941__$1 = (function (){var statearr_26954 = state_26941;(statearr_26954[11] = inst_26909);
return statearr_26954;
})();var statearr_26955_26980 = state_26941__$1;(statearr_26955_26980[2] = inst_26910);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 11))
{var inst_26905 = (state_26941[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26941,10,Object,null,9);var inst_26914 = chs__$1.call(null,inst_26905);var inst_26915 = done.call(null,inst_26905);var inst_26916 = cljs.core.async.take_BANG_.call(null,inst_26914,inst_26915);var state_26941__$1 = state_26941;var statearr_26956_26981 = state_26941__$1;(statearr_26956_26981[2] = inst_26916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 12))
{var inst_26927 = (state_26941[12]);var inst_26927__$1 = (state_26941[2]);var inst_26928 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26927__$1);var state_26941__$1 = (function (){var statearr_26957 = state_26941;(statearr_26957[12] = inst_26927__$1);
return statearr_26957;
})();if(cljs.core.truth_(inst_26928))
{var statearr_26958_26982 = state_26941__$1;(statearr_26958_26982[1] = 13);
} else
{var statearr_26959_26983 = state_26941__$1;(statearr_26959_26983[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 13))
{var inst_26930 = cljs.core.async.close_BANG_.call(null,out);var state_26941__$1 = state_26941;var statearr_26960_26984 = state_26941__$1;(statearr_26960_26984[2] = inst_26930);
(statearr_26960_26984[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 14))
{var inst_26927 = (state_26941[12]);var inst_26932 = cljs.core.apply.call(null,f,inst_26927);var state_26941__$1 = state_26941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26941__$1,16,out,inst_26932);
} else
{if((state_val_26942 === 15))
{var inst_26937 = (state_26941[2]);var state_26941__$1 = state_26941;var statearr_26961_26985 = state_26941__$1;(statearr_26961_26985[2] = inst_26937);
(statearr_26961_26985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26942 === 16))
{var inst_26934 = (state_26941[2]);var state_26941__$1 = (function (){var statearr_26962 = state_26941;(statearr_26962[13] = inst_26934);
return statearr_26962;
})();var statearr_26963_26986 = state_26941__$1;(statearr_26963_26986[2] = null);
(statearr_26963_26986[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26967[0] = state_machine__5548__auto__);
(statearr_26967[1] = 1);
return statearr_26967;
});
var state_machine__5548__auto____1 = (function (state_26941){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26968){if((e26968 instanceof Object))
{var ex__5551__auto__ = e26968;var statearr_26969_26987 = state_26941;(statearr_26969_26987[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26988 = state_26941;
state_26941 = G__26988;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26970 = f__5563__auto__.call(null);(statearr_26970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26971);
return statearr_26970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27072){var state_val_27073 = (state_27072[1]);if((state_val_27073 === 1))
{var inst_27043 = cljs.core.vec.call(null,chs);var inst_27044 = inst_27043;var state_27072__$1 = (function (){var statearr_27074 = state_27072;(statearr_27074[7] = inst_27044);
return statearr_27074;
})();var statearr_27075_27097 = state_27072__$1;(statearr_27075_27097[2] = null);
(statearr_27075_27097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 2))
{var inst_27044 = (state_27072[7]);var inst_27046 = cljs.core.count.call(null,inst_27044);var inst_27047 = (inst_27046 > 0);var state_27072__$1 = state_27072;if(cljs.core.truth_(inst_27047))
{var statearr_27076_27098 = state_27072__$1;(statearr_27076_27098[1] = 4);
} else
{var statearr_27077_27099 = state_27072__$1;(statearr_27077_27099[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 3))
{var inst_27070 = (state_27072[2]);var state_27072__$1 = state_27072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else
{if((state_val_27073 === 4))
{var inst_27044 = (state_27072[7]);var state_27072__$1 = state_27072;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27072__$1,7,inst_27044);
} else
{if((state_val_27073 === 5))
{var inst_27066 = cljs.core.async.close_BANG_.call(null,out);var state_27072__$1 = state_27072;var statearr_27078_27100 = state_27072__$1;(statearr_27078_27100[2] = inst_27066);
(statearr_27078_27100[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 6))
{var inst_27068 = (state_27072[2]);var state_27072__$1 = state_27072;var statearr_27079_27101 = state_27072__$1;(statearr_27079_27101[2] = inst_27068);
(statearr_27079_27101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 7))
{var inst_27051 = (state_27072[8]);var inst_27052 = (state_27072[9]);var inst_27051__$1 = (state_27072[2]);var inst_27052__$1 = cljs.core.nth.call(null,inst_27051__$1,0,null);var inst_27053 = cljs.core.nth.call(null,inst_27051__$1,1,null);var inst_27054 = (inst_27052__$1 == null);var state_27072__$1 = (function (){var statearr_27080 = state_27072;(statearr_27080[8] = inst_27051__$1);
(statearr_27080[9] = inst_27052__$1);
(statearr_27080[10] = inst_27053);
return statearr_27080;
})();if(cljs.core.truth_(inst_27054))
{var statearr_27081_27102 = state_27072__$1;(statearr_27081_27102[1] = 8);
} else
{var statearr_27082_27103 = state_27072__$1;(statearr_27082_27103[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 8))
{var inst_27051 = (state_27072[8]);var inst_27052 = (state_27072[9]);var inst_27044 = (state_27072[7]);var inst_27053 = (state_27072[10]);var inst_27056 = (function (){var c = inst_27053;var v = inst_27052;var vec__27049 = inst_27051;var cs = inst_27044;return ((function (c,v,vec__27049,cs,inst_27051,inst_27052,inst_27044,inst_27053,state_val_27073){
return (function (p1__26989_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26989_SHARP_);
});
;})(c,v,vec__27049,cs,inst_27051,inst_27052,inst_27044,inst_27053,state_val_27073))
})();var inst_27057 = cljs.core.filterv.call(null,inst_27056,inst_27044);var inst_27044__$1 = inst_27057;var state_27072__$1 = (function (){var statearr_27083 = state_27072;(statearr_27083[7] = inst_27044__$1);
return statearr_27083;
})();var statearr_27084_27104 = state_27072__$1;(statearr_27084_27104[2] = null);
(statearr_27084_27104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 9))
{var inst_27052 = (state_27072[9]);var state_27072__$1 = state_27072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27072__$1,11,out,inst_27052);
} else
{if((state_val_27073 === 10))
{var inst_27064 = (state_27072[2]);var state_27072__$1 = state_27072;var statearr_27086_27105 = state_27072__$1;(statearr_27086_27105[2] = inst_27064);
(statearr_27086_27105[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27073 === 11))
{var inst_27044 = (state_27072[7]);var inst_27061 = (state_27072[2]);var tmp27085 = inst_27044;var inst_27044__$1 = tmp27085;var state_27072__$1 = (function (){var statearr_27087 = state_27072;(statearr_27087[11] = inst_27061);
(statearr_27087[7] = inst_27044__$1);
return statearr_27087;
})();var statearr_27088_27106 = state_27072__$1;(statearr_27088_27106[2] = null);
(statearr_27088_27106[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27092 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27092[0] = state_machine__5548__auto__);
(statearr_27092[1] = 1);
return statearr_27092;
});
var state_machine__5548__auto____1 = (function (state_27072){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27093){if((e27093 instanceof Object))
{var ex__5551__auto__ = e27093;var statearr_27094_27107 = state_27072;(statearr_27094_27107[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27108 = state_27072;
state_27072 = G__27108;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27095 = f__5563__auto__.call(null);(statearr_27095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27096);
return statearr_27095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27178){var state_val_27179 = (state_27178[1]);if((state_val_27179 === 1))
{var inst_27155 = 0;var state_27178__$1 = (function (){var statearr_27180 = state_27178;(statearr_27180[7] = inst_27155);
return statearr_27180;
})();var statearr_27181_27202 = state_27178__$1;(statearr_27181_27202[2] = null);
(statearr_27181_27202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 2))
{var inst_27155 = (state_27178[7]);var inst_27157 = (inst_27155 < n);var state_27178__$1 = state_27178;if(cljs.core.truth_(inst_27157))
{var statearr_27182_27203 = state_27178__$1;(statearr_27182_27203[1] = 4);
} else
{var statearr_27183_27204 = state_27178__$1;(statearr_27183_27204[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 3))
{var inst_27175 = (state_27178[2]);var inst_27176 = cljs.core.async.close_BANG_.call(null,out);var state_27178__$1 = (function (){var statearr_27184 = state_27178;(statearr_27184[8] = inst_27175);
return statearr_27184;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27178__$1,inst_27176);
} else
{if((state_val_27179 === 4))
{var state_27178__$1 = state_27178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,7,ch);
} else
{if((state_val_27179 === 5))
{var state_27178__$1 = state_27178;var statearr_27185_27205 = state_27178__$1;(statearr_27185_27205[2] = null);
(statearr_27185_27205[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 6))
{var inst_27173 = (state_27178[2]);var state_27178__$1 = state_27178;var statearr_27186_27206 = state_27178__$1;(statearr_27186_27206[2] = inst_27173);
(statearr_27186_27206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 7))
{var inst_27160 = (state_27178[9]);var inst_27160__$1 = (state_27178[2]);var inst_27161 = (inst_27160__$1 == null);var inst_27162 = cljs.core.not.call(null,inst_27161);var state_27178__$1 = (function (){var statearr_27187 = state_27178;(statearr_27187[9] = inst_27160__$1);
return statearr_27187;
})();if(inst_27162)
{var statearr_27188_27207 = state_27178__$1;(statearr_27188_27207[1] = 8);
} else
{var statearr_27189_27208 = state_27178__$1;(statearr_27189_27208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 8))
{var inst_27160 = (state_27178[9]);var state_27178__$1 = state_27178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27178__$1,11,out,inst_27160);
} else
{if((state_val_27179 === 9))
{var state_27178__$1 = state_27178;var statearr_27190_27209 = state_27178__$1;(statearr_27190_27209[2] = null);
(statearr_27190_27209[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 10))
{var inst_27170 = (state_27178[2]);var state_27178__$1 = state_27178;var statearr_27191_27210 = state_27178__$1;(statearr_27191_27210[2] = inst_27170);
(statearr_27191_27210[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27179 === 11))
{var inst_27155 = (state_27178[7]);var inst_27165 = (state_27178[2]);var inst_27166 = (inst_27155 + 1);var inst_27155__$1 = inst_27166;var state_27178__$1 = (function (){var statearr_27192 = state_27178;(statearr_27192[7] = inst_27155__$1);
(statearr_27192[10] = inst_27165);
return statearr_27192;
})();var statearr_27193_27211 = state_27178__$1;(statearr_27193_27211[2] = null);
(statearr_27193_27211[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27197 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27197[0] = state_machine__5548__auto__);
(statearr_27197[1] = 1);
return statearr_27197;
});
var state_machine__5548__auto____1 = (function (state_27178){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object))
{var ex__5551__auto__ = e27198;var statearr_27199_27212 = state_27178;(statearr_27199_27212[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27213 = state_27178;
state_27178 = G__27213;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27178){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27200 = f__5563__auto__.call(null);(statearr_27200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27201);
return statearr_27200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27285){var state_val_27286 = (state_27285[1]);if((state_val_27286 === 1))
{var inst_27262 = null;var state_27285__$1 = (function (){var statearr_27287 = state_27285;(statearr_27287[7] = inst_27262);
return statearr_27287;
})();var statearr_27288_27311 = state_27285__$1;(statearr_27288_27311[2] = null);
(statearr_27288_27311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 2))
{var state_27285__$1 = state_27285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27285__$1,4,ch);
} else
{if((state_val_27286 === 3))
{var inst_27282 = (state_27285[2]);var inst_27283 = cljs.core.async.close_BANG_.call(null,out);var state_27285__$1 = (function (){var statearr_27289 = state_27285;(statearr_27289[8] = inst_27282);
return statearr_27289;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27285__$1,inst_27283);
} else
{if((state_val_27286 === 4))
{var inst_27265 = (state_27285[9]);var inst_27265__$1 = (state_27285[2]);var inst_27266 = (inst_27265__$1 == null);var inst_27267 = cljs.core.not.call(null,inst_27266);var state_27285__$1 = (function (){var statearr_27290 = state_27285;(statearr_27290[9] = inst_27265__$1);
return statearr_27290;
})();if(inst_27267)
{var statearr_27291_27312 = state_27285__$1;(statearr_27291_27312[1] = 5);
} else
{var statearr_27292_27313 = state_27285__$1;(statearr_27292_27313[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 5))
{var inst_27262 = (state_27285[7]);var inst_27265 = (state_27285[9]);var inst_27269 = cljs.core._EQ_.call(null,inst_27265,inst_27262);var state_27285__$1 = state_27285;if(inst_27269)
{var statearr_27293_27314 = state_27285__$1;(statearr_27293_27314[1] = 8);
} else
{var statearr_27294_27315 = state_27285__$1;(statearr_27294_27315[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 6))
{var state_27285__$1 = state_27285;var statearr_27296_27316 = state_27285__$1;(statearr_27296_27316[2] = null);
(statearr_27296_27316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 7))
{var inst_27280 = (state_27285[2]);var state_27285__$1 = state_27285;var statearr_27297_27317 = state_27285__$1;(statearr_27297_27317[2] = inst_27280);
(statearr_27297_27317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 8))
{var inst_27262 = (state_27285[7]);var tmp27295 = inst_27262;var inst_27262__$1 = tmp27295;var state_27285__$1 = (function (){var statearr_27298 = state_27285;(statearr_27298[7] = inst_27262__$1);
return statearr_27298;
})();var statearr_27299_27318 = state_27285__$1;(statearr_27299_27318[2] = null);
(statearr_27299_27318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 9))
{var inst_27265 = (state_27285[9]);var state_27285__$1 = state_27285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27285__$1,11,out,inst_27265);
} else
{if((state_val_27286 === 10))
{var inst_27277 = (state_27285[2]);var state_27285__$1 = state_27285;var statearr_27300_27319 = state_27285__$1;(statearr_27300_27319[2] = inst_27277);
(statearr_27300_27319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27286 === 11))
{var inst_27265 = (state_27285[9]);var inst_27274 = (state_27285[2]);var inst_27262 = inst_27265;var state_27285__$1 = (function (){var statearr_27301 = state_27285;(statearr_27301[10] = inst_27274);
(statearr_27301[7] = inst_27262);
return statearr_27301;
})();var statearr_27302_27320 = state_27285__$1;(statearr_27302_27320[2] = null);
(statearr_27302_27320[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27306 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27306[0] = state_machine__5548__auto__);
(statearr_27306[1] = 1);
return statearr_27306;
});
var state_machine__5548__auto____1 = (function (state_27285){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27285);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27307){if((e27307 instanceof Object))
{var ex__5551__auto__ = e27307;var statearr_27308_27321 = state_27285;(statearr_27308_27321[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27322 = state_27285;
state_27285 = G__27322;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27285){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27309 = f__5563__auto__.call(null);(statearr_27309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27310);
return statearr_27309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27427){var state_val_27428 = (state_27427[1]);if((state_val_27428 === 1))
{var inst_27390 = (new Array(n));var inst_27391 = inst_27390;var inst_27392 = 0;var state_27427__$1 = (function (){var statearr_27429 = state_27427;(statearr_27429[7] = inst_27391);
(statearr_27429[8] = inst_27392);
return statearr_27429;
})();var statearr_27430_27458 = state_27427__$1;(statearr_27430_27458[2] = null);
(statearr_27430_27458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 2))
{var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27427__$1,4,ch);
} else
{if((state_val_27428 === 3))
{var inst_27425 = (state_27427[2]);var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27427__$1,inst_27425);
} else
{if((state_val_27428 === 4))
{var inst_27395 = (state_27427[9]);var inst_27395__$1 = (state_27427[2]);var inst_27396 = (inst_27395__$1 == null);var inst_27397 = cljs.core.not.call(null,inst_27396);var state_27427__$1 = (function (){var statearr_27431 = state_27427;(statearr_27431[9] = inst_27395__$1);
return statearr_27431;
})();if(inst_27397)
{var statearr_27432_27459 = state_27427__$1;(statearr_27432_27459[1] = 5);
} else
{var statearr_27433_27460 = state_27427__$1;(statearr_27433_27460[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 5))
{var inst_27395 = (state_27427[9]);var inst_27400 = (state_27427[10]);var inst_27391 = (state_27427[7]);var inst_27392 = (state_27427[8]);var inst_27399 = (inst_27391[inst_27392] = inst_27395);var inst_27400__$1 = (inst_27392 + 1);var inst_27401 = (inst_27400__$1 < n);var state_27427__$1 = (function (){var statearr_27434 = state_27427;(statearr_27434[11] = inst_27399);
(statearr_27434[10] = inst_27400__$1);
return statearr_27434;
})();if(cljs.core.truth_(inst_27401))
{var statearr_27435_27461 = state_27427__$1;(statearr_27435_27461[1] = 8);
} else
{var statearr_27436_27462 = state_27427__$1;(statearr_27436_27462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 6))
{var inst_27392 = (state_27427[8]);var inst_27413 = (inst_27392 > 0);var state_27427__$1 = state_27427;if(cljs.core.truth_(inst_27413))
{var statearr_27438_27463 = state_27427__$1;(statearr_27438_27463[1] = 12);
} else
{var statearr_27439_27464 = state_27427__$1;(statearr_27439_27464[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 7))
{var inst_27423 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27440_27465 = state_27427__$1;(statearr_27440_27465[2] = inst_27423);
(statearr_27440_27465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 8))
{var inst_27400 = (state_27427[10]);var inst_27391 = (state_27427[7]);var tmp27437 = inst_27391;var inst_27391__$1 = tmp27437;var inst_27392 = inst_27400;var state_27427__$1 = (function (){var statearr_27441 = state_27427;(statearr_27441[7] = inst_27391__$1);
(statearr_27441[8] = inst_27392);
return statearr_27441;
})();var statearr_27442_27466 = state_27427__$1;(statearr_27442_27466[2] = null);
(statearr_27442_27466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 9))
{var inst_27391 = (state_27427[7]);var inst_27405 = cljs.core.vec.call(null,inst_27391);var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27427__$1,11,out,inst_27405);
} else
{if((state_val_27428 === 10))
{var inst_27411 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27443_27467 = state_27427__$1;(statearr_27443_27467[2] = inst_27411);
(statearr_27443_27467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 11))
{var inst_27407 = (state_27427[2]);var inst_27408 = (new Array(n));var inst_27391 = inst_27408;var inst_27392 = 0;var state_27427__$1 = (function (){var statearr_27444 = state_27427;(statearr_27444[7] = inst_27391);
(statearr_27444[8] = inst_27392);
(statearr_27444[12] = inst_27407);
return statearr_27444;
})();var statearr_27445_27468 = state_27427__$1;(statearr_27445_27468[2] = null);
(statearr_27445_27468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 12))
{var inst_27391 = (state_27427[7]);var inst_27415 = cljs.core.vec.call(null,inst_27391);var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27427__$1,15,out,inst_27415);
} else
{if((state_val_27428 === 13))
{var state_27427__$1 = state_27427;var statearr_27446_27469 = state_27427__$1;(statearr_27446_27469[2] = null);
(statearr_27446_27469[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 14))
{var inst_27420 = (state_27427[2]);var inst_27421 = cljs.core.async.close_BANG_.call(null,out);var state_27427__$1 = (function (){var statearr_27447 = state_27427;(statearr_27447[13] = inst_27420);
return statearr_27447;
})();var statearr_27448_27470 = state_27427__$1;(statearr_27448_27470[2] = inst_27421);
(statearr_27448_27470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 15))
{var inst_27417 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27449_27471 = state_27427__$1;(statearr_27449_27471[2] = inst_27417);
(statearr_27449_27471[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27453[0] = state_machine__5548__auto__);
(statearr_27453[1] = 1);
return statearr_27453;
});
var state_machine__5548__auto____1 = (function (state_27427){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27454){if((e27454 instanceof Object))
{var ex__5551__auto__ = e27454;var statearr_27455_27472 = state_27427;(statearr_27455_27472[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27473 = state_27427;
state_27427 = G__27473;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27427){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27456 = f__5563__auto__.call(null);(statearr_27456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27457);
return statearr_27456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27586){var state_val_27587 = (state_27586[1]);if((state_val_27587 === 1))
{var inst_27545 = [];var inst_27546 = inst_27545;var inst_27547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27586__$1 = (function (){var statearr_27588 = state_27586;(statearr_27588[7] = inst_27547);
(statearr_27588[8] = inst_27546);
return statearr_27588;
})();var statearr_27589_27617 = state_27586__$1;(statearr_27589_27617[2] = null);
(statearr_27589_27617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 2))
{var state_27586__$1 = state_27586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27586__$1,4,ch);
} else
{if((state_val_27587 === 3))
{var inst_27584 = (state_27586[2]);var state_27586__$1 = state_27586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27586__$1,inst_27584);
} else
{if((state_val_27587 === 4))
{var inst_27550 = (state_27586[9]);var inst_27550__$1 = (state_27586[2]);var inst_27551 = (inst_27550__$1 == null);var inst_27552 = cljs.core.not.call(null,inst_27551);var state_27586__$1 = (function (){var statearr_27590 = state_27586;(statearr_27590[9] = inst_27550__$1);
return statearr_27590;
})();if(inst_27552)
{var statearr_27591_27618 = state_27586__$1;(statearr_27591_27618[1] = 5);
} else
{var statearr_27592_27619 = state_27586__$1;(statearr_27592_27619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 5))
{var inst_27554 = (state_27586[10]);var inst_27550 = (state_27586[9]);var inst_27547 = (state_27586[7]);var inst_27554__$1 = f.call(null,inst_27550);var inst_27555 = cljs.core._EQ_.call(null,inst_27554__$1,inst_27547);var inst_27556 = cljs.core.keyword_identical_QMARK_.call(null,inst_27547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27557 = (inst_27555) || (inst_27556);var state_27586__$1 = (function (){var statearr_27593 = state_27586;(statearr_27593[10] = inst_27554__$1);
return statearr_27593;
})();if(cljs.core.truth_(inst_27557))
{var statearr_27594_27620 = state_27586__$1;(statearr_27594_27620[1] = 8);
} else
{var statearr_27595_27621 = state_27586__$1;(statearr_27595_27621[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 6))
{var inst_27546 = (state_27586[8]);var inst_27571 = inst_27546.length;var inst_27572 = (inst_27571 > 0);var state_27586__$1 = state_27586;if(cljs.core.truth_(inst_27572))
{var statearr_27597_27622 = state_27586__$1;(statearr_27597_27622[1] = 12);
} else
{var statearr_27598_27623 = state_27586__$1;(statearr_27598_27623[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 7))
{var inst_27582 = (state_27586[2]);var state_27586__$1 = state_27586;var statearr_27599_27624 = state_27586__$1;(statearr_27599_27624[2] = inst_27582);
(statearr_27599_27624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 8))
{var inst_27554 = (state_27586[10]);var inst_27550 = (state_27586[9]);var inst_27546 = (state_27586[8]);var inst_27559 = inst_27546.push(inst_27550);var tmp27596 = inst_27546;var inst_27546__$1 = tmp27596;var inst_27547 = inst_27554;var state_27586__$1 = (function (){var statearr_27600 = state_27586;(statearr_27600[11] = inst_27559);
(statearr_27600[7] = inst_27547);
(statearr_27600[8] = inst_27546__$1);
return statearr_27600;
})();var statearr_27601_27625 = state_27586__$1;(statearr_27601_27625[2] = null);
(statearr_27601_27625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 9))
{var inst_27546 = (state_27586[8]);var inst_27562 = cljs.core.vec.call(null,inst_27546);var state_27586__$1 = state_27586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27586__$1,11,out,inst_27562);
} else
{if((state_val_27587 === 10))
{var inst_27569 = (state_27586[2]);var state_27586__$1 = state_27586;var statearr_27602_27626 = state_27586__$1;(statearr_27602_27626[2] = inst_27569);
(statearr_27602_27626[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 11))
{var inst_27554 = (state_27586[10]);var inst_27550 = (state_27586[9]);var inst_27564 = (state_27586[2]);var inst_27565 = [];var inst_27566 = inst_27565.push(inst_27550);var inst_27546 = inst_27565;var inst_27547 = inst_27554;var state_27586__$1 = (function (){var statearr_27603 = state_27586;(statearr_27603[12] = inst_27566);
(statearr_27603[13] = inst_27564);
(statearr_27603[7] = inst_27547);
(statearr_27603[8] = inst_27546);
return statearr_27603;
})();var statearr_27604_27627 = state_27586__$1;(statearr_27604_27627[2] = null);
(statearr_27604_27627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 12))
{var inst_27546 = (state_27586[8]);var inst_27574 = cljs.core.vec.call(null,inst_27546);var state_27586__$1 = state_27586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27586__$1,15,out,inst_27574);
} else
{if((state_val_27587 === 13))
{var state_27586__$1 = state_27586;var statearr_27605_27628 = state_27586__$1;(statearr_27605_27628[2] = null);
(statearr_27605_27628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 14))
{var inst_27579 = (state_27586[2]);var inst_27580 = cljs.core.async.close_BANG_.call(null,out);var state_27586__$1 = (function (){var statearr_27606 = state_27586;(statearr_27606[14] = inst_27579);
return statearr_27606;
})();var statearr_27607_27629 = state_27586__$1;(statearr_27607_27629[2] = inst_27580);
(statearr_27607_27629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27587 === 15))
{var inst_27576 = (state_27586[2]);var state_27586__$1 = state_27586;var statearr_27608_27630 = state_27586__$1;(statearr_27608_27630[2] = inst_27576);
(statearr_27608_27630[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27612[0] = state_machine__5548__auto__);
(statearr_27612[1] = 1);
return statearr_27612;
});
var state_machine__5548__auto____1 = (function (state_27586){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27586);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27613){if((e27613 instanceof Object))
{var ex__5551__auto__ = e27613;var statearr_27614_27631 = state_27586;(statearr_27614_27631[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27632 = state_27586;
state_27586 = G__27632;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27586){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27615 = f__5563__auto__.call(null);(statearr_27615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27616);
return statearr_27615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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