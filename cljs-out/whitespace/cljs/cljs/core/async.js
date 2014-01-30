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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33082 = (function (f,fn_handler,meta33083){
this.f = f;
this.fn_handler = fn_handler;
this.meta33083 = meta33083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33082.cljs$lang$type = true;
cljs.core.async.t33082.cljs$lang$ctorStr = "cljs.core.async/t33082";
cljs.core.async.t33082.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33082");
});
cljs.core.async.t33082.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33084){var self__ = this;
var _33084__$1 = this;return self__.meta33083;
});
cljs.core.async.t33082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33084,meta33083__$1){var self__ = this;
var _33084__$1 = this;return (new cljs.core.async.t33082(self__.f,self__.fn_handler,meta33083__$1));
});
cljs.core.async.__GT_t33082 = (function __GT_t33082(f__$1,fn_handler__$1,meta33083){return (new cljs.core.async.t33082(f__$1,fn_handler__$1,meta33083));
});
}
return (new cljs.core.async.t33082(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33086 = buff;if(G__33086)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33086.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33086.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33086);
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
{var val_33087 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33087);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33087);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33088 = n;var x_33089 = 0;while(true){
if((x_33089 < n__4248__auto___33088))
{(a[x_33089] = 0);
{
var G__33090 = (x_33089 + 1);
x_33089 = G__33090;
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
var G__33091 = (i + 1);
i = G__33091;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33095 = (function (flag,alt_flag,meta33096){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33096 = meta33096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33095.cljs$lang$type = true;
cljs.core.async.t33095.cljs$lang$ctorStr = "cljs.core.async/t33095";
cljs.core.async.t33095.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33095");
});
cljs.core.async.t33095.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33097){var self__ = this;
var _33097__$1 = this;return self__.meta33096;
});
cljs.core.async.t33095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33097,meta33096__$1){var self__ = this;
var _33097__$1 = this;return (new cljs.core.async.t33095(self__.flag,self__.alt_flag,meta33096__$1));
});
cljs.core.async.__GT_t33095 = (function __GT_t33095(flag__$1,alt_flag__$1,meta33096){return (new cljs.core.async.t33095(flag__$1,alt_flag__$1,meta33096));
});
}
return (new cljs.core.async.t33095(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33101 = (function (cb,flag,alt_handler,meta33102){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33102 = meta33102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33101.cljs$lang$type = true;
cljs.core.async.t33101.cljs$lang$ctorStr = "cljs.core.async/t33101";
cljs.core.async.t33101.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33101");
});
cljs.core.async.t33101.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33103){var self__ = this;
var _33103__$1 = this;return self__.meta33102;
});
cljs.core.async.t33101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33103,meta33102__$1){var self__ = this;
var _33103__$1 = this;return (new cljs.core.async.t33101(self__.cb,self__.flag,self__.alt_handler,meta33102__$1));
});
cljs.core.async.__GT_t33101 = (function __GT_t33101(cb__$1,flag__$1,alt_handler__$1,meta33102){return (new cljs.core.async.t33101(cb__$1,flag__$1,alt_handler__$1,meta33102));
});
}
return (new cljs.core.async.t33101(cb,flag,alt_handler,null));
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
return (function (p1__33104_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33104_SHARP_,port], null));
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
var G__33105 = (i + 1);
i = G__33105;
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
var alts_BANG___delegate = function (ports,p__33106){var map__33108 = p__33106;var map__33108__$1 = ((cljs.core.seq_QMARK_.call(null,map__33108))?cljs.core.apply.call(null,cljs.core.hash_map,map__33108):map__33108);var opts = map__33108__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33106 = null;if (arguments.length > 1) {
  p__33106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33106);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33109){
var ports = cljs.core.first(arglist__33109);
var p__33106 = cljs.core.rest(arglist__33109);
return alts_BANG___delegate(ports,p__33106);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33117 = (function (ch,f,map_LT_,meta33118){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33118 = meta33118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33117.cljs$lang$type = true;
cljs.core.async.t33117.cljs$lang$ctorStr = "cljs.core.async/t33117";
cljs.core.async.t33117.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33117");
});
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33120 = (function (fn1,_,meta33118,ch,f,map_LT_,meta33121){
this.fn1 = fn1;
this._ = _;
this.meta33118 = meta33118;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33121 = meta33121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33120.cljs$lang$type = true;
cljs.core.async.t33120.cljs$lang$ctorStr = "cljs.core.async/t33120";
cljs.core.async.t33120.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33120");
});
cljs.core.async.t33120.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33120.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33110_SHARP_){return f1.call(null,(((p1__33110_SHARP_ == null))?null:self__.f.call(null,p1__33110_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33122){var self__ = this;
var _33122__$1 = this;return self__.meta33121;
});
cljs.core.async.t33120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33122,meta33121__$1){var self__ = this;
var _33122__$1 = this;return (new cljs.core.async.t33120(self__.fn1,self__._,self__.meta33118,self__.ch,self__.f,self__.map_LT_,meta33121__$1));
});
cljs.core.async.__GT_t33120 = (function __GT_t33120(fn1__$1,___$2,meta33118__$1,ch__$2,f__$2,map_LT___$2,meta33121){return (new cljs.core.async.t33120(fn1__$1,___$2,meta33118__$1,ch__$2,f__$2,map_LT___$2,meta33121));
});
}
return (new cljs.core.async.t33120(fn1,___$1,self__.meta33118,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33119){var self__ = this;
var _33119__$1 = this;return self__.meta33118;
});
cljs.core.async.t33117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33119,meta33118__$1){var self__ = this;
var _33119__$1 = this;return (new cljs.core.async.t33117(self__.ch,self__.f,self__.map_LT_,meta33118__$1));
});
cljs.core.async.__GT_t33117 = (function __GT_t33117(ch__$1,f__$1,map_LT___$1,meta33118){return (new cljs.core.async.t33117(ch__$1,f__$1,map_LT___$1,meta33118));
});
}
return (new cljs.core.async.t33117(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33126 = (function (ch,f,map_GT_,meta33127){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33127 = meta33127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33126.cljs$lang$type = true;
cljs.core.async.t33126.cljs$lang$ctorStr = "cljs.core.async/t33126";
cljs.core.async.t33126.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33126");
});
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33128){var self__ = this;
var _33128__$1 = this;return self__.meta33127;
});
cljs.core.async.t33126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33128,meta33127__$1){var self__ = this;
var _33128__$1 = this;return (new cljs.core.async.t33126(self__.ch,self__.f,self__.map_GT_,meta33127__$1));
});
cljs.core.async.__GT_t33126 = (function __GT_t33126(ch__$1,f__$1,map_GT___$1,meta33127){return (new cljs.core.async.t33126(ch__$1,f__$1,map_GT___$1,meta33127));
});
}
return (new cljs.core.async.t33126(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33132 = (function (ch,p,filter_GT_,meta33133){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33133 = meta33133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33132.cljs$lang$type = true;
cljs.core.async.t33132.cljs$lang$ctorStr = "cljs.core.async/t33132";
cljs.core.async.t33132.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33132");
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33134){var self__ = this;
var _33134__$1 = this;return self__.meta33133;
});
cljs.core.async.t33132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33134,meta33133__$1){var self__ = this;
var _33134__$1 = this;return (new cljs.core.async.t33132(self__.ch,self__.p,self__.filter_GT_,meta33133__$1));
});
cljs.core.async.__GT_t33132 = (function __GT_t33132(ch__$1,p__$1,filter_GT___$1,meta33133){return (new cljs.core.async.t33132(ch__$1,p__$1,filter_GT___$1,meta33133));
});
}
return (new cljs.core.async.t33132(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33196){var state_val_33197 = (state_33196[1]);if((state_val_33197 === 1))
{var state_33196__$1 = state_33196;var statearr_33198_33218 = state_33196__$1;(statearr_33198_33218[2] = null);
(statearr_33198_33218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 2))
{var state_33196__$1 = state_33196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33196__$1,4,ch);
} else
{if((state_val_33197 === 3))
{var inst_33194 = (state_33196[2]);var state_33196__$1 = state_33196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33196__$1,inst_33194);
} else
{if((state_val_33197 === 4))
{var inst_33178 = (state_33196[7]);var inst_33178__$1 = (state_33196[2]);var inst_33179 = (inst_33178__$1 == null);var state_33196__$1 = (function (){var statearr_33199 = state_33196;(statearr_33199[7] = inst_33178__$1);
return statearr_33199;
})();if(cljs.core.truth_(inst_33179))
{var statearr_33200_33219 = state_33196__$1;(statearr_33200_33219[1] = 5);
} else
{var statearr_33201_33220 = state_33196__$1;(statearr_33201_33220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 5))
{var inst_33181 = cljs.core.async.close_BANG_.call(null,out);var state_33196__$1 = state_33196;var statearr_33202_33221 = state_33196__$1;(statearr_33202_33221[2] = inst_33181);
(statearr_33202_33221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 6))
{var inst_33178 = (state_33196[7]);var inst_33183 = p.call(null,inst_33178);var state_33196__$1 = state_33196;if(cljs.core.truth_(inst_33183))
{var statearr_33203_33222 = state_33196__$1;(statearr_33203_33222[1] = 8);
} else
{var statearr_33204_33223 = state_33196__$1;(statearr_33204_33223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 7))
{var inst_33192 = (state_33196[2]);var state_33196__$1 = state_33196;var statearr_33205_33224 = state_33196__$1;(statearr_33205_33224[2] = inst_33192);
(statearr_33205_33224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 8))
{var inst_33178 = (state_33196[7]);var state_33196__$1 = state_33196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33196__$1,11,out,inst_33178);
} else
{if((state_val_33197 === 9))
{var state_33196__$1 = state_33196;var statearr_33206_33225 = state_33196__$1;(statearr_33206_33225[2] = null);
(statearr_33206_33225[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 10))
{var inst_33189 = (state_33196[2]);var state_33196__$1 = (function (){var statearr_33207 = state_33196;(statearr_33207[8] = inst_33189);
return statearr_33207;
})();var statearr_33208_33226 = state_33196__$1;(statearr_33208_33226[2] = null);
(statearr_33208_33226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33197 === 11))
{var inst_33186 = (state_33196[2]);var state_33196__$1 = state_33196;var statearr_33209_33227 = state_33196__$1;(statearr_33209_33227[2] = inst_33186);
(statearr_33209_33227[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33213 = [null,null,null,null,null,null,null,null,null];(statearr_33213[0] = state_machine__5507__auto__);
(statearr_33213[1] = 1);
return statearr_33213;
});
var state_machine__5507__auto____1 = (function (state_33196){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33196);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33214){if((e33214 instanceof Object))
{var ex__5510__auto__ = e33214;var statearr_33215_33228 = state_33196;(statearr_33215_33228[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33229 = state_33196;
state_33196 = G__33229;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33196){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33216 = f__5522__auto__.call(null);(statearr_33216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33217);
return statearr_33216;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33381){var state_val_33382 = (state_33381[1]);if((state_val_33382 === 1))
{var state_33381__$1 = state_33381;var statearr_33383_33420 = state_33381__$1;(statearr_33383_33420[2] = null);
(statearr_33383_33420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 2))
{var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33381__$1,4,in$);
} else
{if((state_val_33382 === 3))
{var inst_33379 = (state_33381[2]);var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33381__$1,inst_33379);
} else
{if((state_val_33382 === 4))
{var inst_33327 = (state_33381[7]);var inst_33327__$1 = (state_33381[2]);var inst_33328 = (inst_33327__$1 == null);var state_33381__$1 = (function (){var statearr_33384 = state_33381;(statearr_33384[7] = inst_33327__$1);
return statearr_33384;
})();if(cljs.core.truth_(inst_33328))
{var statearr_33385_33421 = state_33381__$1;(statearr_33385_33421[1] = 5);
} else
{var statearr_33386_33422 = state_33381__$1;(statearr_33386_33422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 5))
{var inst_33330 = cljs.core.async.close_BANG_.call(null,out);var state_33381__$1 = state_33381;var statearr_33387_33423 = state_33381__$1;(statearr_33387_33423[2] = inst_33330);
(statearr_33387_33423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 6))
{var inst_33327 = (state_33381[7]);var inst_33332 = f.call(null,inst_33327);var inst_33337 = cljs.core.seq.call(null,inst_33332);var inst_33338 = inst_33337;var inst_33339 = null;var inst_33340 = 0;var inst_33341 = 0;var state_33381__$1 = (function (){var statearr_33388 = state_33381;(statearr_33388[8] = inst_33339);
(statearr_33388[9] = inst_33338);
(statearr_33388[10] = inst_33340);
(statearr_33388[11] = inst_33341);
return statearr_33388;
})();var statearr_33389_33424 = state_33381__$1;(statearr_33389_33424[2] = null);
(statearr_33389_33424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 7))
{var inst_33377 = (state_33381[2]);var state_33381__$1 = state_33381;var statearr_33390_33425 = state_33381__$1;(statearr_33390_33425[2] = inst_33377);
(statearr_33390_33425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 8))
{var inst_33340 = (state_33381[10]);var inst_33341 = (state_33381[11]);var inst_33343 = (inst_33341 < inst_33340);var inst_33344 = inst_33343;var state_33381__$1 = state_33381;if(cljs.core.truth_(inst_33344))
{var statearr_33391_33426 = state_33381__$1;(statearr_33391_33426[1] = 10);
} else
{var statearr_33392_33427 = state_33381__$1;(statearr_33392_33427[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 9))
{var inst_33374 = (state_33381[2]);var state_33381__$1 = (function (){var statearr_33393 = state_33381;(statearr_33393[12] = inst_33374);
return statearr_33393;
})();var statearr_33394_33428 = state_33381__$1;(statearr_33394_33428[2] = null);
(statearr_33394_33428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 10))
{var inst_33339 = (state_33381[8]);var inst_33341 = (state_33381[11]);var inst_33346 = cljs.core._nth.call(null,inst_33339,inst_33341);var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33381__$1,13,out,inst_33346);
} else
{if((state_val_33382 === 11))
{var inst_33352 = (state_33381[13]);var inst_33338 = (state_33381[9]);var inst_33352__$1 = cljs.core.seq.call(null,inst_33338);var state_33381__$1 = (function (){var statearr_33398 = state_33381;(statearr_33398[13] = inst_33352__$1);
return statearr_33398;
})();if(inst_33352__$1)
{var statearr_33399_33429 = state_33381__$1;(statearr_33399_33429[1] = 14);
} else
{var statearr_33400_33430 = state_33381__$1;(statearr_33400_33430[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 12))
{var inst_33372 = (state_33381[2]);var state_33381__$1 = state_33381;var statearr_33401_33431 = state_33381__$1;(statearr_33401_33431[2] = inst_33372);
(statearr_33401_33431[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 13))
{var inst_33339 = (state_33381[8]);var inst_33338 = (state_33381[9]);var inst_33340 = (state_33381[10]);var inst_33341 = (state_33381[11]);var inst_33348 = (state_33381[2]);var inst_33349 = (inst_33341 + 1);var tmp33395 = inst_33339;var tmp33396 = inst_33338;var tmp33397 = inst_33340;var inst_33338__$1 = tmp33396;var inst_33339__$1 = tmp33395;var inst_33340__$1 = tmp33397;var inst_33341__$1 = inst_33349;var state_33381__$1 = (function (){var statearr_33402 = state_33381;(statearr_33402[8] = inst_33339__$1);
(statearr_33402[14] = inst_33348);
(statearr_33402[9] = inst_33338__$1);
(statearr_33402[10] = inst_33340__$1);
(statearr_33402[11] = inst_33341__$1);
return statearr_33402;
})();var statearr_33403_33432 = state_33381__$1;(statearr_33403_33432[2] = null);
(statearr_33403_33432[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 14))
{var inst_33352 = (state_33381[13]);var inst_33354 = cljs.core.chunked_seq_QMARK_.call(null,inst_33352);var state_33381__$1 = state_33381;if(inst_33354)
{var statearr_33404_33433 = state_33381__$1;(statearr_33404_33433[1] = 17);
} else
{var statearr_33405_33434 = state_33381__$1;(statearr_33405_33434[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 15))
{var state_33381__$1 = state_33381;var statearr_33406_33435 = state_33381__$1;(statearr_33406_33435[2] = null);
(statearr_33406_33435[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 16))
{var inst_33370 = (state_33381[2]);var state_33381__$1 = state_33381;var statearr_33407_33436 = state_33381__$1;(statearr_33407_33436[2] = inst_33370);
(statearr_33407_33436[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 17))
{var inst_33352 = (state_33381[13]);var inst_33356 = cljs.core.chunk_first.call(null,inst_33352);var inst_33357 = cljs.core.chunk_rest.call(null,inst_33352);var inst_33358 = cljs.core.count.call(null,inst_33356);var inst_33338 = inst_33357;var inst_33339 = inst_33356;var inst_33340 = inst_33358;var inst_33341 = 0;var state_33381__$1 = (function (){var statearr_33408 = state_33381;(statearr_33408[8] = inst_33339);
(statearr_33408[9] = inst_33338);
(statearr_33408[10] = inst_33340);
(statearr_33408[11] = inst_33341);
return statearr_33408;
})();var statearr_33409_33437 = state_33381__$1;(statearr_33409_33437[2] = null);
(statearr_33409_33437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 18))
{var inst_33352 = (state_33381[13]);var inst_33361 = cljs.core.first.call(null,inst_33352);var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33381__$1,20,out,inst_33361);
} else
{if((state_val_33382 === 19))
{var inst_33367 = (state_33381[2]);var state_33381__$1 = state_33381;var statearr_33410_33438 = state_33381__$1;(statearr_33410_33438[2] = inst_33367);
(statearr_33410_33438[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33382 === 20))
{var inst_33352 = (state_33381[13]);var inst_33363 = (state_33381[2]);var inst_33364 = cljs.core.next.call(null,inst_33352);var inst_33338 = inst_33364;var inst_33339 = null;var inst_33340 = 0;var inst_33341 = 0;var state_33381__$1 = (function (){var statearr_33411 = state_33381;(statearr_33411[8] = inst_33339);
(statearr_33411[15] = inst_33363);
(statearr_33411[9] = inst_33338);
(statearr_33411[10] = inst_33340);
(statearr_33411[11] = inst_33341);
return statearr_33411;
})();var statearr_33412_33439 = state_33381__$1;(statearr_33412_33439[2] = null);
(statearr_33412_33439[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33416[0] = state_machine__5507__auto__);
(statearr_33416[1] = 1);
return statearr_33416;
});
var state_machine__5507__auto____1 = (function (state_33381){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33417){if((e33417 instanceof Object))
{var ex__5510__auto__ = e33417;var statearr_33418_33440 = state_33381;(statearr_33418_33440[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33441 = state_33381;
state_33381 = G__33441;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33381){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33419 = f__5522__auto__.call(null);(statearr_33419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33419;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33501){var state_val_33502 = (state_33501[1]);if((state_val_33502 === 1))
{var state_33501__$1 = state_33501;var statearr_33503_33523 = state_33501__$1;(statearr_33503_33523[2] = null);
(statearr_33503_33523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 2))
{var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33501__$1,4,from);
} else
{if((state_val_33502 === 3))
{var inst_33499 = (state_33501[2]);var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33501__$1,inst_33499);
} else
{if((state_val_33502 === 4))
{var inst_33484 = (state_33501[7]);var inst_33484__$1 = (state_33501[2]);var inst_33485 = (inst_33484__$1 == null);var state_33501__$1 = (function (){var statearr_33504 = state_33501;(statearr_33504[7] = inst_33484__$1);
return statearr_33504;
})();if(cljs.core.truth_(inst_33485))
{var statearr_33505_33524 = state_33501__$1;(statearr_33505_33524[1] = 5);
} else
{var statearr_33506_33525 = state_33501__$1;(statearr_33506_33525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 5))
{var state_33501__$1 = state_33501;if(cljs.core.truth_(close_QMARK_))
{var statearr_33507_33526 = state_33501__$1;(statearr_33507_33526[1] = 8);
} else
{var statearr_33508_33527 = state_33501__$1;(statearr_33508_33527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 6))
{var inst_33484 = (state_33501[7]);var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33501__$1,11,to,inst_33484);
} else
{if((state_val_33502 === 7))
{var inst_33497 = (state_33501[2]);var state_33501__$1 = state_33501;var statearr_33509_33528 = state_33501__$1;(statearr_33509_33528[2] = inst_33497);
(statearr_33509_33528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 8))
{var inst_33488 = cljs.core.async.close_BANG_.call(null,to);var state_33501__$1 = state_33501;var statearr_33510_33529 = state_33501__$1;(statearr_33510_33529[2] = inst_33488);
(statearr_33510_33529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 9))
{var state_33501__$1 = state_33501;var statearr_33511_33530 = state_33501__$1;(statearr_33511_33530[2] = null);
(statearr_33511_33530[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 10))
{var inst_33491 = (state_33501[2]);var state_33501__$1 = state_33501;var statearr_33512_33531 = state_33501__$1;(statearr_33512_33531[2] = inst_33491);
(statearr_33512_33531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 11))
{var inst_33494 = (state_33501[2]);var state_33501__$1 = (function (){var statearr_33513 = state_33501;(statearr_33513[8] = inst_33494);
return statearr_33513;
})();var statearr_33514_33532 = state_33501__$1;(statearr_33514_33532[2] = null);
(statearr_33514_33532[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33518 = [null,null,null,null,null,null,null,null,null];(statearr_33518[0] = state_machine__5507__auto__);
(statearr_33518[1] = 1);
return statearr_33518;
});
var state_machine__5507__auto____1 = (function (state_33501){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33501);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33519){if((e33519 instanceof Object))
{var ex__5510__auto__ = e33519;var statearr_33520_33533 = state_33501;(statearr_33520_33533[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33534 = state_33501;
state_33501 = G__33534;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33501){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33521 = f__5522__auto__.call(null);(statearr_33521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33522);
return statearr_33521;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33599){var state_val_33600 = (state_33599[1]);if((state_val_33600 === 1))
{var state_33599__$1 = state_33599;var statearr_33601_33622 = state_33599__$1;(statearr_33601_33622[2] = null);
(statearr_33601_33622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 2))
{var state_33599__$1 = state_33599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33599__$1,4,ch);
} else
{if((state_val_33600 === 3))
{var inst_33597 = (state_33599[2]);var state_33599__$1 = state_33599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33599__$1,inst_33597);
} else
{if((state_val_33600 === 4))
{var inst_33580 = (state_33599[7]);var inst_33580__$1 = (state_33599[2]);var inst_33581 = (inst_33580__$1 == null);var state_33599__$1 = (function (){var statearr_33602 = state_33599;(statearr_33602[7] = inst_33580__$1);
return statearr_33602;
})();if(cljs.core.truth_(inst_33581))
{var statearr_33603_33623 = state_33599__$1;(statearr_33603_33623[1] = 5);
} else
{var statearr_33604_33624 = state_33599__$1;(statearr_33604_33624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 5))
{var inst_33583 = cljs.core.async.close_BANG_.call(null,tc);var inst_33584 = cljs.core.async.close_BANG_.call(null,fc);var state_33599__$1 = (function (){var statearr_33605 = state_33599;(statearr_33605[8] = inst_33583);
return statearr_33605;
})();var statearr_33606_33625 = state_33599__$1;(statearr_33606_33625[2] = inst_33584);
(statearr_33606_33625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 6))
{var inst_33580 = (state_33599[7]);var inst_33586 = p.call(null,inst_33580);var state_33599__$1 = state_33599;if(cljs.core.truth_(inst_33586))
{var statearr_33607_33626 = state_33599__$1;(statearr_33607_33626[1] = 9);
} else
{var statearr_33608_33627 = state_33599__$1;(statearr_33608_33627[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 7))
{var inst_33595 = (state_33599[2]);var state_33599__$1 = state_33599;var statearr_33609_33628 = state_33599__$1;(statearr_33609_33628[2] = inst_33595);
(statearr_33609_33628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 8))
{var inst_33592 = (state_33599[2]);var state_33599__$1 = (function (){var statearr_33610 = state_33599;(statearr_33610[9] = inst_33592);
return statearr_33610;
})();var statearr_33611_33629 = state_33599__$1;(statearr_33611_33629[2] = null);
(statearr_33611_33629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 9))
{var state_33599__$1 = state_33599;var statearr_33612_33630 = state_33599__$1;(statearr_33612_33630[2] = tc);
(statearr_33612_33630[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 10))
{var state_33599__$1 = state_33599;var statearr_33613_33631 = state_33599__$1;(statearr_33613_33631[2] = fc);
(statearr_33613_33631[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33600 === 11))
{var inst_33580 = (state_33599[7]);var inst_33590 = (state_33599[2]);var state_33599__$1 = state_33599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33599__$1,8,inst_33590,inst_33580);
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
var state_machine__5507__auto____0 = (function (){var statearr_33617 = [null,null,null,null,null,null,null,null,null,null];(statearr_33617[0] = state_machine__5507__auto__);
(statearr_33617[1] = 1);
return statearr_33617;
});
var state_machine__5507__auto____1 = (function (state_33599){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33618){if((e33618 instanceof Object))
{var ex__5510__auto__ = e33618;var statearr_33619_33632 = state_33599;(statearr_33619_33632[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33633 = state_33599;
state_33599 = G__33633;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33620 = f__5522__auto__.call(null);(statearr_33620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33621);
return statearr_33620;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33680){var state_val_33681 = (state_33680[1]);if((state_val_33681 === 7))
{var inst_33676 = (state_33680[2]);var state_33680__$1 = state_33680;var statearr_33682_33698 = state_33680__$1;(statearr_33682_33698[2] = inst_33676);
(statearr_33682_33698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 6))
{var inst_33666 = (state_33680[7]);var inst_33669 = (state_33680[8]);var inst_33673 = f.call(null,inst_33666,inst_33669);var inst_33666__$1 = inst_33673;var state_33680__$1 = (function (){var statearr_33683 = state_33680;(statearr_33683[7] = inst_33666__$1);
return statearr_33683;
})();var statearr_33684_33699 = state_33680__$1;(statearr_33684_33699[2] = null);
(statearr_33684_33699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 5))
{var inst_33666 = (state_33680[7]);var state_33680__$1 = state_33680;var statearr_33685_33700 = state_33680__$1;(statearr_33685_33700[2] = inst_33666);
(statearr_33685_33700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 4))
{var inst_33669 = (state_33680[8]);var inst_33669__$1 = (state_33680[2]);var inst_33670 = (inst_33669__$1 == null);var state_33680__$1 = (function (){var statearr_33686 = state_33680;(statearr_33686[8] = inst_33669__$1);
return statearr_33686;
})();if(cljs.core.truth_(inst_33670))
{var statearr_33687_33701 = state_33680__$1;(statearr_33687_33701[1] = 5);
} else
{var statearr_33688_33702 = state_33680__$1;(statearr_33688_33702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 3))
{var inst_33678 = (state_33680[2]);var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33680__$1,inst_33678);
} else
{if((state_val_33681 === 2))
{var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33680__$1,4,ch);
} else
{if((state_val_33681 === 1))
{var inst_33666 = init;var state_33680__$1 = (function (){var statearr_33689 = state_33680;(statearr_33689[7] = inst_33666);
return statearr_33689;
})();var statearr_33690_33703 = state_33680__$1;(statearr_33690_33703[2] = null);
(statearr_33690_33703[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33694 = [null,null,null,null,null,null,null,null,null];(statearr_33694[0] = state_machine__5507__auto__);
(statearr_33694[1] = 1);
return statearr_33694;
});
var state_machine__5507__auto____1 = (function (state_33680){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33695){if((e33695 instanceof Object))
{var ex__5510__auto__ = e33695;var statearr_33696_33704 = state_33680;(statearr_33696_33704[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33705 = state_33680;
state_33680 = G__33705;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33680){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33697 = f__5522__auto__.call(null);(statearr_33697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33697;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33767){var state_val_33768 = (state_33767[1]);if((state_val_33768 === 1))
{var inst_33747 = cljs.core.seq.call(null,coll);var inst_33748 = inst_33747;var state_33767__$1 = (function (){var statearr_33769 = state_33767;(statearr_33769[7] = inst_33748);
return statearr_33769;
})();var statearr_33770_33788 = state_33767__$1;(statearr_33770_33788[2] = null);
(statearr_33770_33788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 2))
{var inst_33748 = (state_33767[7]);var state_33767__$1 = state_33767;if(cljs.core.truth_(inst_33748))
{var statearr_33771_33789 = state_33767__$1;(statearr_33771_33789[1] = 4);
} else
{var statearr_33772_33790 = state_33767__$1;(statearr_33772_33790[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 3))
{var inst_33765 = (state_33767[2]);var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33767__$1,inst_33765);
} else
{if((state_val_33768 === 4))
{var inst_33748 = (state_33767[7]);var inst_33751 = cljs.core.first.call(null,inst_33748);var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33767__$1,7,ch,inst_33751);
} else
{if((state_val_33768 === 5))
{var state_33767__$1 = state_33767;if(cljs.core.truth_(close_QMARK_))
{var statearr_33773_33791 = state_33767__$1;(statearr_33773_33791[1] = 8);
} else
{var statearr_33774_33792 = state_33767__$1;(statearr_33774_33792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 6))
{var inst_33763 = (state_33767[2]);var state_33767__$1 = state_33767;var statearr_33775_33793 = state_33767__$1;(statearr_33775_33793[2] = inst_33763);
(statearr_33775_33793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 7))
{var inst_33748 = (state_33767[7]);var inst_33753 = (state_33767[2]);var inst_33754 = cljs.core.next.call(null,inst_33748);var inst_33748__$1 = inst_33754;var state_33767__$1 = (function (){var statearr_33776 = state_33767;(statearr_33776[8] = inst_33753);
(statearr_33776[7] = inst_33748__$1);
return statearr_33776;
})();var statearr_33777_33794 = state_33767__$1;(statearr_33777_33794[2] = null);
(statearr_33777_33794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 8))
{var inst_33758 = cljs.core.async.close_BANG_.call(null,ch);var state_33767__$1 = state_33767;var statearr_33778_33795 = state_33767__$1;(statearr_33778_33795[2] = inst_33758);
(statearr_33778_33795[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 9))
{var state_33767__$1 = state_33767;var statearr_33779_33796 = state_33767__$1;(statearr_33779_33796[2] = null);
(statearr_33779_33796[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 10))
{var inst_33761 = (state_33767[2]);var state_33767__$1 = state_33767;var statearr_33780_33797 = state_33767__$1;(statearr_33780_33797[2] = inst_33761);
(statearr_33780_33797[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33784 = [null,null,null,null,null,null,null,null,null];(statearr_33784[0] = state_machine__5507__auto__);
(statearr_33784[1] = 1);
return statearr_33784;
});
var state_machine__5507__auto____1 = (function (state_33767){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33767);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33785){if((e33785 instanceof Object))
{var ex__5510__auto__ = e33785;var statearr_33786_33798 = state_33767;(statearr_33786_33798[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33799 = state_33767;
state_33767 = G__33799;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33787 = f__5522__auto__.call(null);(statearr_33787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33787;
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
cljs.core.async.Mux = (function (){var obj33801 = {};return obj33801;
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
cljs.core.async.Mult = (function (){var obj33803 = {};return obj33803;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34027 = (function (cs,ch,mult,meta34028){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34028 = meta34028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34027.cljs$lang$type = true;
cljs.core.async.t34027.cljs$lang$ctorStr = "cljs.core.async/t34027";
cljs.core.async.t34027.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34027");
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34027.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34029){var self__ = this;
var _34029__$1 = this;return self__.meta34028;
});})(cs))
;
cljs.core.async.t34027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34029,meta34028__$1){var self__ = this;
var _34029__$1 = this;return (new cljs.core.async.t34027(self__.cs,self__.ch,self__.mult,meta34028__$1));
});})(cs))
;
cljs.core.async.__GT_t34027 = ((function (cs){
return (function __GT_t34027(cs__$1,ch__$1,mult__$1,meta34028){return (new cljs.core.async.t34027(cs__$1,ch__$1,mult__$1,meta34028));
});})(cs))
;
}
return (new cljs.core.async.t34027(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34250 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34164){var state_val_34165 = (state_34164[1]);if((state_val_34165 === 32))
{var inst_34108 = (state_34164[7]);var inst_34032 = (state_34164[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34164,31,Object,null,30);var inst_34115 = cljs.core.async.put_BANG_.call(null,inst_34108,inst_34032,done);var state_34164__$1 = state_34164;var statearr_34166_34251 = state_34164__$1;(statearr_34166_34251[2] = inst_34115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 1))
{var state_34164__$1 = state_34164;var statearr_34167_34252 = state_34164__$1;(statearr_34167_34252[2] = null);
(statearr_34167_34252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 33))
{var inst_34121 = (state_34164[9]);var inst_34123 = cljs.core.chunked_seq_QMARK_.call(null,inst_34121);var state_34164__$1 = state_34164;if(inst_34123)
{var statearr_34168_34253 = state_34164__$1;(statearr_34168_34253[1] = 36);
} else
{var statearr_34169_34254 = state_34164__$1;(statearr_34169_34254[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 2))
{var state_34164__$1 = state_34164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34164__$1,4,ch);
} else
{if((state_val_34165 === 34))
{var state_34164__$1 = state_34164;var statearr_34170_34255 = state_34164__$1;(statearr_34170_34255[2] = null);
(statearr_34170_34255[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 3))
{var inst_34162 = (state_34164[2]);var state_34164__$1 = state_34164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34164__$1,inst_34162);
} else
{if((state_val_34165 === 35))
{var inst_34146 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34171_34256 = state_34164__$1;(statearr_34171_34256[2] = inst_34146);
(statearr_34171_34256[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 4))
{var inst_34032 = (state_34164[8]);var inst_34032__$1 = (state_34164[2]);var inst_34033 = (inst_34032__$1 == null);var state_34164__$1 = (function (){var statearr_34172 = state_34164;(statearr_34172[8] = inst_34032__$1);
return statearr_34172;
})();if(cljs.core.truth_(inst_34033))
{var statearr_34173_34257 = state_34164__$1;(statearr_34173_34257[1] = 5);
} else
{var statearr_34174_34258 = state_34164__$1;(statearr_34174_34258[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 36))
{var inst_34121 = (state_34164[9]);var inst_34125 = cljs.core.chunk_first.call(null,inst_34121);var inst_34126 = cljs.core.chunk_rest.call(null,inst_34121);var inst_34127 = cljs.core.count.call(null,inst_34125);var inst_34100 = inst_34126;var inst_34101 = inst_34125;var inst_34102 = inst_34127;var inst_34103 = 0;var state_34164__$1 = (function (){var statearr_34175 = state_34164;(statearr_34175[10] = inst_34100);
(statearr_34175[11] = inst_34103);
(statearr_34175[12] = inst_34102);
(statearr_34175[13] = inst_34101);
return statearr_34175;
})();var statearr_34176_34259 = state_34164__$1;(statearr_34176_34259[2] = null);
(statearr_34176_34259[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 5))
{var inst_34039 = cljs.core.deref.call(null,cs);var inst_34040 = cljs.core.seq.call(null,inst_34039);var inst_34041 = inst_34040;var inst_34042 = null;var inst_34043 = 0;var inst_34044 = 0;var state_34164__$1 = (function (){var statearr_34177 = state_34164;(statearr_34177[14] = inst_34044);
(statearr_34177[15] = inst_34042);
(statearr_34177[16] = inst_34043);
(statearr_34177[17] = inst_34041);
return statearr_34177;
})();var statearr_34178_34260 = state_34164__$1;(statearr_34178_34260[2] = null);
(statearr_34178_34260[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 37))
{var inst_34121 = (state_34164[9]);var inst_34130 = cljs.core.first.call(null,inst_34121);var state_34164__$1 = (function (){var statearr_34179 = state_34164;(statearr_34179[18] = inst_34130);
return statearr_34179;
})();var statearr_34180_34261 = state_34164__$1;(statearr_34180_34261[2] = null);
(statearr_34180_34261[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 6))
{var inst_34092 = (state_34164[19]);var inst_34091 = cljs.core.deref.call(null,cs);var inst_34092__$1 = cljs.core.keys.call(null,inst_34091);var inst_34093 = cljs.core.count.call(null,inst_34092__$1);var inst_34094 = cljs.core.reset_BANG_.call(null,dctr,inst_34093);var inst_34099 = cljs.core.seq.call(null,inst_34092__$1);var inst_34100 = inst_34099;var inst_34101 = null;var inst_34102 = 0;var inst_34103 = 0;var state_34164__$1 = (function (){var statearr_34181 = state_34164;(statearr_34181[20] = inst_34094);
(statearr_34181[10] = inst_34100);
(statearr_34181[19] = inst_34092__$1);
(statearr_34181[11] = inst_34103);
(statearr_34181[12] = inst_34102);
(statearr_34181[13] = inst_34101);
return statearr_34181;
})();var statearr_34182_34262 = state_34164__$1;(statearr_34182_34262[2] = null);
(statearr_34182_34262[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 38))
{var inst_34143 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34183_34263 = state_34164__$1;(statearr_34183_34263[2] = inst_34143);
(statearr_34183_34263[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 7))
{var inst_34160 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34184_34264 = state_34164__$1;(statearr_34184_34264[2] = inst_34160);
(statearr_34184_34264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 39))
{var inst_34121 = (state_34164[9]);var inst_34139 = (state_34164[2]);var inst_34140 = cljs.core.next.call(null,inst_34121);var inst_34100 = inst_34140;var inst_34101 = null;var inst_34102 = 0;var inst_34103 = 0;var state_34164__$1 = (function (){var statearr_34185 = state_34164;(statearr_34185[10] = inst_34100);
(statearr_34185[21] = inst_34139);
(statearr_34185[11] = inst_34103);
(statearr_34185[12] = inst_34102);
(statearr_34185[13] = inst_34101);
return statearr_34185;
})();var statearr_34186_34265 = state_34164__$1;(statearr_34186_34265[2] = null);
(statearr_34186_34265[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 8))
{var inst_34044 = (state_34164[14]);var inst_34043 = (state_34164[16]);var inst_34046 = (inst_34044 < inst_34043);var inst_34047 = inst_34046;var state_34164__$1 = state_34164;if(cljs.core.truth_(inst_34047))
{var statearr_34187_34266 = state_34164__$1;(statearr_34187_34266[1] = 10);
} else
{var statearr_34188_34267 = state_34164__$1;(statearr_34188_34267[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 40))
{var inst_34130 = (state_34164[18]);var inst_34131 = (state_34164[2]);var inst_34132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34133 = cljs.core.async.untap_STAR_.call(null,m,inst_34130);var state_34164__$1 = (function (){var statearr_34189 = state_34164;(statearr_34189[22] = inst_34132);
(statearr_34189[23] = inst_34131);
return statearr_34189;
})();var statearr_34190_34268 = state_34164__$1;(statearr_34190_34268[2] = inst_34133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 9))
{var inst_34089 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34191_34269 = state_34164__$1;(statearr_34191_34269[2] = inst_34089);
(statearr_34191_34269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 41))
{var inst_34130 = (state_34164[18]);var inst_34032 = (state_34164[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34164,40,Object,null,39);var inst_34137 = cljs.core.async.put_BANG_.call(null,inst_34130,inst_34032,done);var state_34164__$1 = state_34164;var statearr_34192_34270 = state_34164__$1;(statearr_34192_34270[2] = inst_34137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 10))
{var inst_34044 = (state_34164[14]);var inst_34042 = (state_34164[15]);var inst_34050 = cljs.core._nth.call(null,inst_34042,inst_34044);var inst_34051 = cljs.core.nth.call(null,inst_34050,0,null);var inst_34052 = cljs.core.nth.call(null,inst_34050,1,null);var state_34164__$1 = (function (){var statearr_34193 = state_34164;(statearr_34193[24] = inst_34051);
return statearr_34193;
})();if(cljs.core.truth_(inst_34052))
{var statearr_34194_34271 = state_34164__$1;(statearr_34194_34271[1] = 13);
} else
{var statearr_34195_34272 = state_34164__$1;(statearr_34195_34272[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 42))
{var state_34164__$1 = state_34164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34164__$1,45,dchan);
} else
{if((state_val_34165 === 11))
{var inst_34041 = (state_34164[17]);var inst_34061 = (state_34164[25]);var inst_34061__$1 = cljs.core.seq.call(null,inst_34041);var state_34164__$1 = (function (){var statearr_34196 = state_34164;(statearr_34196[25] = inst_34061__$1);
return statearr_34196;
})();if(inst_34061__$1)
{var statearr_34197_34273 = state_34164__$1;(statearr_34197_34273[1] = 16);
} else
{var statearr_34198_34274 = state_34164__$1;(statearr_34198_34274[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 43))
{var state_34164__$1 = state_34164;var statearr_34199_34275 = state_34164__$1;(statearr_34199_34275[2] = null);
(statearr_34199_34275[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 12))
{var inst_34087 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34200_34276 = state_34164__$1;(statearr_34200_34276[2] = inst_34087);
(statearr_34200_34276[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 44))
{var inst_34157 = (state_34164[2]);var state_34164__$1 = (function (){var statearr_34201 = state_34164;(statearr_34201[26] = inst_34157);
return statearr_34201;
})();var statearr_34202_34277 = state_34164__$1;(statearr_34202_34277[2] = null);
(statearr_34202_34277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 13))
{var inst_34051 = (state_34164[24]);var inst_34054 = cljs.core.async.close_BANG_.call(null,inst_34051);var state_34164__$1 = state_34164;var statearr_34203_34278 = state_34164__$1;(statearr_34203_34278[2] = inst_34054);
(statearr_34203_34278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 45))
{var inst_34154 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34207_34279 = state_34164__$1;(statearr_34207_34279[2] = inst_34154);
(statearr_34207_34279[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 14))
{var state_34164__$1 = state_34164;var statearr_34208_34280 = state_34164__$1;(statearr_34208_34280[2] = null);
(statearr_34208_34280[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 15))
{var inst_34044 = (state_34164[14]);var inst_34042 = (state_34164[15]);var inst_34043 = (state_34164[16]);var inst_34041 = (state_34164[17]);var inst_34057 = (state_34164[2]);var inst_34058 = (inst_34044 + 1);var tmp34204 = inst_34042;var tmp34205 = inst_34043;var tmp34206 = inst_34041;var inst_34041__$1 = tmp34206;var inst_34042__$1 = tmp34204;var inst_34043__$1 = tmp34205;var inst_34044__$1 = inst_34058;var state_34164__$1 = (function (){var statearr_34209 = state_34164;(statearr_34209[14] = inst_34044__$1);
(statearr_34209[15] = inst_34042__$1);
(statearr_34209[16] = inst_34043__$1);
(statearr_34209[17] = inst_34041__$1);
(statearr_34209[27] = inst_34057);
return statearr_34209;
})();var statearr_34210_34281 = state_34164__$1;(statearr_34210_34281[2] = null);
(statearr_34210_34281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 16))
{var inst_34061 = (state_34164[25]);var inst_34063 = cljs.core.chunked_seq_QMARK_.call(null,inst_34061);var state_34164__$1 = state_34164;if(inst_34063)
{var statearr_34211_34282 = state_34164__$1;(statearr_34211_34282[1] = 19);
} else
{var statearr_34212_34283 = state_34164__$1;(statearr_34212_34283[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 17))
{var state_34164__$1 = state_34164;var statearr_34213_34284 = state_34164__$1;(statearr_34213_34284[2] = null);
(statearr_34213_34284[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 18))
{var inst_34085 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34214_34285 = state_34164__$1;(statearr_34214_34285[2] = inst_34085);
(statearr_34214_34285[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 19))
{var inst_34061 = (state_34164[25]);var inst_34065 = cljs.core.chunk_first.call(null,inst_34061);var inst_34066 = cljs.core.chunk_rest.call(null,inst_34061);var inst_34067 = cljs.core.count.call(null,inst_34065);var inst_34041 = inst_34066;var inst_34042 = inst_34065;var inst_34043 = inst_34067;var inst_34044 = 0;var state_34164__$1 = (function (){var statearr_34215 = state_34164;(statearr_34215[14] = inst_34044);
(statearr_34215[15] = inst_34042);
(statearr_34215[16] = inst_34043);
(statearr_34215[17] = inst_34041);
return statearr_34215;
})();var statearr_34216_34286 = state_34164__$1;(statearr_34216_34286[2] = null);
(statearr_34216_34286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 20))
{var inst_34061 = (state_34164[25]);var inst_34071 = cljs.core.first.call(null,inst_34061);var inst_34072 = cljs.core.nth.call(null,inst_34071,0,null);var inst_34073 = cljs.core.nth.call(null,inst_34071,1,null);var state_34164__$1 = (function (){var statearr_34217 = state_34164;(statearr_34217[28] = inst_34072);
return statearr_34217;
})();if(cljs.core.truth_(inst_34073))
{var statearr_34218_34287 = state_34164__$1;(statearr_34218_34287[1] = 22);
} else
{var statearr_34219_34288 = state_34164__$1;(statearr_34219_34288[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 21))
{var inst_34082 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34220_34289 = state_34164__$1;(statearr_34220_34289[2] = inst_34082);
(statearr_34220_34289[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 22))
{var inst_34072 = (state_34164[28]);var inst_34075 = cljs.core.async.close_BANG_.call(null,inst_34072);var state_34164__$1 = state_34164;var statearr_34221_34290 = state_34164__$1;(statearr_34221_34290[2] = inst_34075);
(statearr_34221_34290[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 23))
{var state_34164__$1 = state_34164;var statearr_34222_34291 = state_34164__$1;(statearr_34222_34291[2] = null);
(statearr_34222_34291[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 24))
{var inst_34061 = (state_34164[25]);var inst_34078 = (state_34164[2]);var inst_34079 = cljs.core.next.call(null,inst_34061);var inst_34041 = inst_34079;var inst_34042 = null;var inst_34043 = 0;var inst_34044 = 0;var state_34164__$1 = (function (){var statearr_34223 = state_34164;(statearr_34223[14] = inst_34044);
(statearr_34223[15] = inst_34042);
(statearr_34223[16] = inst_34043);
(statearr_34223[17] = inst_34041);
(statearr_34223[29] = inst_34078);
return statearr_34223;
})();var statearr_34224_34292 = state_34164__$1;(statearr_34224_34292[2] = null);
(statearr_34224_34292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 25))
{var inst_34103 = (state_34164[11]);var inst_34102 = (state_34164[12]);var inst_34105 = (inst_34103 < inst_34102);var inst_34106 = inst_34105;var state_34164__$1 = state_34164;if(cljs.core.truth_(inst_34106))
{var statearr_34225_34293 = state_34164__$1;(statearr_34225_34293[1] = 27);
} else
{var statearr_34226_34294 = state_34164__$1;(statearr_34226_34294[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 26))
{var inst_34092 = (state_34164[19]);var inst_34150 = (state_34164[2]);var inst_34151 = cljs.core.seq.call(null,inst_34092);var state_34164__$1 = (function (){var statearr_34227 = state_34164;(statearr_34227[30] = inst_34150);
return statearr_34227;
})();if(inst_34151)
{var statearr_34228_34295 = state_34164__$1;(statearr_34228_34295[1] = 42);
} else
{var statearr_34229_34296 = state_34164__$1;(statearr_34229_34296[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 27))
{var inst_34103 = (state_34164[11]);var inst_34101 = (state_34164[13]);var inst_34108 = cljs.core._nth.call(null,inst_34101,inst_34103);var state_34164__$1 = (function (){var statearr_34230 = state_34164;(statearr_34230[7] = inst_34108);
return statearr_34230;
})();var statearr_34231_34297 = state_34164__$1;(statearr_34231_34297[2] = null);
(statearr_34231_34297[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 28))
{var inst_34121 = (state_34164[9]);var inst_34100 = (state_34164[10]);var inst_34121__$1 = cljs.core.seq.call(null,inst_34100);var state_34164__$1 = (function (){var statearr_34235 = state_34164;(statearr_34235[9] = inst_34121__$1);
return statearr_34235;
})();if(inst_34121__$1)
{var statearr_34236_34298 = state_34164__$1;(statearr_34236_34298[1] = 33);
} else
{var statearr_34237_34299 = state_34164__$1;(statearr_34237_34299[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 29))
{var inst_34148 = (state_34164[2]);var state_34164__$1 = state_34164;var statearr_34238_34300 = state_34164__$1;(statearr_34238_34300[2] = inst_34148);
(statearr_34238_34300[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 30))
{var inst_34100 = (state_34164[10]);var inst_34103 = (state_34164[11]);var inst_34102 = (state_34164[12]);var inst_34101 = (state_34164[13]);var inst_34117 = (state_34164[2]);var inst_34118 = (inst_34103 + 1);var tmp34232 = inst_34100;var tmp34233 = inst_34102;var tmp34234 = inst_34101;var inst_34100__$1 = tmp34232;var inst_34101__$1 = tmp34234;var inst_34102__$1 = tmp34233;var inst_34103__$1 = inst_34118;var state_34164__$1 = (function (){var statearr_34239 = state_34164;(statearr_34239[31] = inst_34117);
(statearr_34239[10] = inst_34100__$1);
(statearr_34239[11] = inst_34103__$1);
(statearr_34239[12] = inst_34102__$1);
(statearr_34239[13] = inst_34101__$1);
return statearr_34239;
})();var statearr_34240_34301 = state_34164__$1;(statearr_34240_34301[2] = null);
(statearr_34240_34301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34165 === 31))
{var inst_34108 = (state_34164[7]);var inst_34109 = (state_34164[2]);var inst_34110 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34111 = cljs.core.async.untap_STAR_.call(null,m,inst_34108);var state_34164__$1 = (function (){var statearr_34241 = state_34164;(statearr_34241[32] = inst_34109);
(statearr_34241[33] = inst_34110);
return statearr_34241;
})();var statearr_34242_34302 = state_34164__$1;(statearr_34242_34302[2] = inst_34111);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34246[0] = state_machine__5507__auto__);
(statearr_34246[1] = 1);
return statearr_34246;
});
var state_machine__5507__auto____1 = (function (state_34164){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34247){if((e34247 instanceof Object))
{var ex__5510__auto__ = e34247;var statearr_34248_34303 = state_34164;(statearr_34248_34303[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34304 = state_34164;
state_34164 = G__34304;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34249 = f__5522__auto__.call(null);(statearr_34249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34250);
return statearr_34249;
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
cljs.core.async.Mix = (function (){var obj34306 = {};return obj34306;
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
;var m = (function (){if(typeof cljs.core.async.t34416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34416 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34417){
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
this.meta34417 = meta34417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34416.cljs$lang$type = true;
cljs.core.async.t34416.cljs$lang$ctorStr = "cljs.core.async/t34416";
cljs.core.async.t34416.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34416");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34418){var self__ = this;
var _34418__$1 = this;return self__.meta34417;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34418,meta34417__$1){var self__ = this;
var _34418__$1 = this;return (new cljs.core.async.t34416(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34417__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34416 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34416(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34417){return (new cljs.core.async.t34416(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34417));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34416(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34483){var state_val_34484 = (state_34483[1]);if((state_val_34484 === 1))
{var inst_34422 = (state_34483[7]);var inst_34422__$1 = calc_state.call(null);var inst_34423 = cljs.core.seq_QMARK_.call(null,inst_34422__$1);var state_34483__$1 = (function (){var statearr_34485 = state_34483;(statearr_34485[7] = inst_34422__$1);
return statearr_34485;
})();if(inst_34423)
{var statearr_34486_34526 = state_34483__$1;(statearr_34486_34526[1] = 2);
} else
{var statearr_34487_34527 = state_34483__$1;(statearr_34487_34527[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 2))
{var inst_34422 = (state_34483[7]);var inst_34425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34422);var state_34483__$1 = state_34483;var statearr_34488_34528 = state_34483__$1;(statearr_34488_34528[2] = inst_34425);
(statearr_34488_34528[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 3))
{var inst_34422 = (state_34483[7]);var state_34483__$1 = state_34483;var statearr_34489_34529 = state_34483__$1;(statearr_34489_34529[2] = inst_34422);
(statearr_34489_34529[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 4))
{var inst_34422 = (state_34483[7]);var inst_34428 = (state_34483[2]);var inst_34429 = cljs.core.get.call(null,inst_34428,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34430 = cljs.core.get.call(null,inst_34428,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34431 = cljs.core.get.call(null,inst_34428,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34432 = inst_34422;var state_34483__$1 = (function (){var statearr_34490 = state_34483;(statearr_34490[8] = inst_34429);
(statearr_34490[9] = inst_34432);
(statearr_34490[10] = inst_34431);
(statearr_34490[11] = inst_34430);
return statearr_34490;
})();var statearr_34491_34530 = state_34483__$1;(statearr_34491_34530[2] = null);
(statearr_34491_34530[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 5))
{var inst_34432 = (state_34483[9]);var inst_34435 = cljs.core.seq_QMARK_.call(null,inst_34432);var state_34483__$1 = state_34483;if(inst_34435)
{var statearr_34492_34531 = state_34483__$1;(statearr_34492_34531[1] = 7);
} else
{var statearr_34493_34532 = state_34483__$1;(statearr_34493_34532[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 6))
{var inst_34481 = (state_34483[2]);var state_34483__$1 = state_34483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34483__$1,inst_34481);
} else
{if((state_val_34484 === 7))
{var inst_34432 = (state_34483[9]);var inst_34437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34432);var state_34483__$1 = state_34483;var statearr_34494_34533 = state_34483__$1;(statearr_34494_34533[2] = inst_34437);
(statearr_34494_34533[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 8))
{var inst_34432 = (state_34483[9]);var state_34483__$1 = state_34483;var statearr_34495_34534 = state_34483__$1;(statearr_34495_34534[2] = inst_34432);
(statearr_34495_34534[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 9))
{var inst_34440 = (state_34483[12]);var inst_34440__$1 = (state_34483[2]);var inst_34441 = cljs.core.get.call(null,inst_34440__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34442 = cljs.core.get.call(null,inst_34440__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34443 = cljs.core.get.call(null,inst_34440__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34483__$1 = (function (){var statearr_34496 = state_34483;(statearr_34496[12] = inst_34440__$1);
(statearr_34496[13] = inst_34443);
(statearr_34496[14] = inst_34442);
return statearr_34496;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34483__$1,10,inst_34441);
} else
{if((state_val_34484 === 10))
{var inst_34447 = (state_34483[15]);var inst_34448 = (state_34483[16]);var inst_34446 = (state_34483[2]);var inst_34447__$1 = cljs.core.nth.call(null,inst_34446,0,null);var inst_34448__$1 = cljs.core.nth.call(null,inst_34446,1,null);var inst_34449 = (inst_34447__$1 == null);var inst_34450 = cljs.core._EQ_.call(null,inst_34448__$1,change);var inst_34451 = (inst_34449) || (inst_34450);var state_34483__$1 = (function (){var statearr_34497 = state_34483;(statearr_34497[15] = inst_34447__$1);
(statearr_34497[16] = inst_34448__$1);
return statearr_34497;
})();if(cljs.core.truth_(inst_34451))
{var statearr_34498_34535 = state_34483__$1;(statearr_34498_34535[1] = 11);
} else
{var statearr_34499_34536 = state_34483__$1;(statearr_34499_34536[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 11))
{var inst_34447 = (state_34483[15]);var inst_34453 = (inst_34447 == null);var state_34483__$1 = state_34483;if(cljs.core.truth_(inst_34453))
{var statearr_34500_34537 = state_34483__$1;(statearr_34500_34537[1] = 14);
} else
{var statearr_34501_34538 = state_34483__$1;(statearr_34501_34538[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 12))
{var inst_34448 = (state_34483[16]);var inst_34443 = (state_34483[13]);var inst_34462 = (state_34483[17]);var inst_34462__$1 = inst_34443.call(null,inst_34448);var state_34483__$1 = (function (){var statearr_34502 = state_34483;(statearr_34502[17] = inst_34462__$1);
return statearr_34502;
})();if(cljs.core.truth_(inst_34462__$1))
{var statearr_34503_34539 = state_34483__$1;(statearr_34503_34539[1] = 17);
} else
{var statearr_34504_34540 = state_34483__$1;(statearr_34504_34540[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 13))
{var inst_34479 = (state_34483[2]);var state_34483__$1 = state_34483;var statearr_34505_34541 = state_34483__$1;(statearr_34505_34541[2] = inst_34479);
(statearr_34505_34541[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 14))
{var inst_34448 = (state_34483[16]);var inst_34455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34448);var state_34483__$1 = state_34483;var statearr_34506_34542 = state_34483__$1;(statearr_34506_34542[2] = inst_34455);
(statearr_34506_34542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 15))
{var state_34483__$1 = state_34483;var statearr_34507_34543 = state_34483__$1;(statearr_34507_34543[2] = null);
(statearr_34507_34543[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 16))
{var inst_34458 = (state_34483[2]);var inst_34459 = calc_state.call(null);var inst_34432 = inst_34459;var state_34483__$1 = (function (){var statearr_34508 = state_34483;(statearr_34508[9] = inst_34432);
(statearr_34508[18] = inst_34458);
return statearr_34508;
})();var statearr_34509_34544 = state_34483__$1;(statearr_34509_34544[2] = null);
(statearr_34509_34544[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 17))
{var inst_34462 = (state_34483[17]);var state_34483__$1 = state_34483;var statearr_34510_34545 = state_34483__$1;(statearr_34510_34545[2] = inst_34462);
(statearr_34510_34545[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 18))
{var inst_34448 = (state_34483[16]);var inst_34443 = (state_34483[13]);var inst_34442 = (state_34483[14]);var inst_34465 = cljs.core.empty_QMARK_.call(null,inst_34443);var inst_34466 = inst_34442.call(null,inst_34448);var inst_34467 = cljs.core.not.call(null,inst_34466);var inst_34468 = (inst_34465) && (inst_34467);var state_34483__$1 = state_34483;var statearr_34511_34546 = state_34483__$1;(statearr_34511_34546[2] = inst_34468);
(statearr_34511_34546[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 19))
{var inst_34470 = (state_34483[2]);var state_34483__$1 = state_34483;if(cljs.core.truth_(inst_34470))
{var statearr_34512_34547 = state_34483__$1;(statearr_34512_34547[1] = 20);
} else
{var statearr_34513_34548 = state_34483__$1;(statearr_34513_34548[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 20))
{var inst_34447 = (state_34483[15]);var state_34483__$1 = state_34483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34483__$1,23,out,inst_34447);
} else
{if((state_val_34484 === 21))
{var state_34483__$1 = state_34483;var statearr_34514_34549 = state_34483__$1;(statearr_34514_34549[2] = null);
(statearr_34514_34549[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 22))
{var inst_34440 = (state_34483[12]);var inst_34476 = (state_34483[2]);var inst_34432 = inst_34440;var state_34483__$1 = (function (){var statearr_34515 = state_34483;(statearr_34515[9] = inst_34432);
(statearr_34515[19] = inst_34476);
return statearr_34515;
})();var statearr_34516_34550 = state_34483__$1;(statearr_34516_34550[2] = null);
(statearr_34516_34550[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34484 === 23))
{var inst_34473 = (state_34483[2]);var state_34483__$1 = state_34483;var statearr_34517_34551 = state_34483__$1;(statearr_34517_34551[2] = inst_34473);
(statearr_34517_34551[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34521[0] = state_machine__5507__auto__);
(statearr_34521[1] = 1);
return statearr_34521;
});
var state_machine__5507__auto____1 = (function (state_34483){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34522){if((e34522 instanceof Object))
{var ex__5510__auto__ = e34522;var statearr_34523_34552 = state_34483;(statearr_34523_34552[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34553 = state_34483;
state_34483 = G__34553;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34524 = f__5522__auto__.call(null);(statearr_34524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34525);
return statearr_34524;
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
cljs.core.async.Pub = (function (){var obj34555 = {};return obj34555;
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
return (function (p1__34556_SHARP_){if(cljs.core.truth_(p1__34556_SHARP_.call(null,topic)))
{return p1__34556_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34556_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34681 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34682){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34682 = meta34682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34681.cljs$lang$type = true;
cljs.core.async.t34681.cljs$lang$ctorStr = "cljs.core.async/t34681";
cljs.core.async.t34681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34681");
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34683){var self__ = this;
var _34683__$1 = this;return self__.meta34682;
});})(mults,ensure_mult))
;
cljs.core.async.t34681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34683,meta34682__$1){var self__ = this;
var _34683__$1 = this;return (new cljs.core.async.t34681(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34682__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34681 = ((function (mults,ensure_mult){
return (function __GT_t34681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34682){return (new cljs.core.async.t34681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34682));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34681(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34757){var state_val_34758 = (state_34757[1]);if((state_val_34758 === 1))
{var state_34757__$1 = state_34757;var statearr_34759_34806 = state_34757__$1;(statearr_34759_34806[2] = null);
(statearr_34759_34806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 2))
{var state_34757__$1 = state_34757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34757__$1,4,ch);
} else
{if((state_val_34758 === 3))
{var inst_34755 = (state_34757[2]);var state_34757__$1 = state_34757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34757__$1,inst_34755);
} else
{if((state_val_34758 === 4))
{var inst_34686 = (state_34757[7]);var inst_34686__$1 = (state_34757[2]);var inst_34687 = (inst_34686__$1 == null);var state_34757__$1 = (function (){var statearr_34760 = state_34757;(statearr_34760[7] = inst_34686__$1);
return statearr_34760;
})();if(cljs.core.truth_(inst_34687))
{var statearr_34761_34807 = state_34757__$1;(statearr_34761_34807[1] = 5);
} else
{var statearr_34762_34808 = state_34757__$1;(statearr_34762_34808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 5))
{var inst_34693 = cljs.core.deref.call(null,mults);var inst_34694 = cljs.core.vals.call(null,inst_34693);var inst_34695 = cljs.core.seq.call(null,inst_34694);var inst_34696 = inst_34695;var inst_34697 = null;var inst_34698 = 0;var inst_34699 = 0;var state_34757__$1 = (function (){var statearr_34763 = state_34757;(statearr_34763[8] = inst_34698);
(statearr_34763[9] = inst_34697);
(statearr_34763[10] = inst_34696);
(statearr_34763[11] = inst_34699);
return statearr_34763;
})();var statearr_34764_34809 = state_34757__$1;(statearr_34764_34809[2] = null);
(statearr_34764_34809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 6))
{var inst_34736 = (state_34757[12]);var inst_34686 = (state_34757[7]);var inst_34734 = (state_34757[13]);var inst_34734__$1 = topic_fn.call(null,inst_34686);var inst_34735 = cljs.core.deref.call(null,mults);var inst_34736__$1 = cljs.core.get.call(null,inst_34735,inst_34734__$1);var state_34757__$1 = (function (){var statearr_34765 = state_34757;(statearr_34765[12] = inst_34736__$1);
(statearr_34765[13] = inst_34734__$1);
return statearr_34765;
})();if(cljs.core.truth_(inst_34736__$1))
{var statearr_34766_34810 = state_34757__$1;(statearr_34766_34810[1] = 19);
} else
{var statearr_34767_34811 = state_34757__$1;(statearr_34767_34811[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 7))
{var inst_34753 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34768_34812 = state_34757__$1;(statearr_34768_34812[2] = inst_34753);
(statearr_34768_34812[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 8))
{var inst_34698 = (state_34757[8]);var inst_34699 = (state_34757[11]);var inst_34701 = (inst_34699 < inst_34698);var inst_34702 = inst_34701;var state_34757__$1 = state_34757;if(cljs.core.truth_(inst_34702))
{var statearr_34772_34813 = state_34757__$1;(statearr_34772_34813[1] = 10);
} else
{var statearr_34773_34814 = state_34757__$1;(statearr_34773_34814[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 9))
{var inst_34732 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34774_34815 = state_34757__$1;(statearr_34774_34815[2] = inst_34732);
(statearr_34774_34815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 10))
{var inst_34698 = (state_34757[8]);var inst_34697 = (state_34757[9]);var inst_34696 = (state_34757[10]);var inst_34699 = (state_34757[11]);var inst_34704 = cljs.core._nth.call(null,inst_34697,inst_34699);var inst_34705 = cljs.core.async.muxch_STAR_.call(null,inst_34704);var inst_34706 = cljs.core.async.close_BANG_.call(null,inst_34705);var inst_34707 = (inst_34699 + 1);var tmp34769 = inst_34698;var tmp34770 = inst_34697;var tmp34771 = inst_34696;var inst_34696__$1 = tmp34771;var inst_34697__$1 = tmp34770;var inst_34698__$1 = tmp34769;var inst_34699__$1 = inst_34707;var state_34757__$1 = (function (){var statearr_34775 = state_34757;(statearr_34775[8] = inst_34698__$1);
(statearr_34775[9] = inst_34697__$1);
(statearr_34775[10] = inst_34696__$1);
(statearr_34775[14] = inst_34706);
(statearr_34775[11] = inst_34699__$1);
return statearr_34775;
})();var statearr_34776_34816 = state_34757__$1;(statearr_34776_34816[2] = null);
(statearr_34776_34816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 11))
{var inst_34696 = (state_34757[10]);var inst_34710 = (state_34757[15]);var inst_34710__$1 = cljs.core.seq.call(null,inst_34696);var state_34757__$1 = (function (){var statearr_34777 = state_34757;(statearr_34777[15] = inst_34710__$1);
return statearr_34777;
})();if(inst_34710__$1)
{var statearr_34778_34817 = state_34757__$1;(statearr_34778_34817[1] = 13);
} else
{var statearr_34779_34818 = state_34757__$1;(statearr_34779_34818[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 12))
{var inst_34730 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34780_34819 = state_34757__$1;(statearr_34780_34819[2] = inst_34730);
(statearr_34780_34819[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 13))
{var inst_34710 = (state_34757[15]);var inst_34712 = cljs.core.chunked_seq_QMARK_.call(null,inst_34710);var state_34757__$1 = state_34757;if(inst_34712)
{var statearr_34781_34820 = state_34757__$1;(statearr_34781_34820[1] = 16);
} else
{var statearr_34782_34821 = state_34757__$1;(statearr_34782_34821[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 14))
{var state_34757__$1 = state_34757;var statearr_34783_34822 = state_34757__$1;(statearr_34783_34822[2] = null);
(statearr_34783_34822[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 15))
{var inst_34728 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34784_34823 = state_34757__$1;(statearr_34784_34823[2] = inst_34728);
(statearr_34784_34823[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 16))
{var inst_34710 = (state_34757[15]);var inst_34714 = cljs.core.chunk_first.call(null,inst_34710);var inst_34715 = cljs.core.chunk_rest.call(null,inst_34710);var inst_34716 = cljs.core.count.call(null,inst_34714);var inst_34696 = inst_34715;var inst_34697 = inst_34714;var inst_34698 = inst_34716;var inst_34699 = 0;var state_34757__$1 = (function (){var statearr_34785 = state_34757;(statearr_34785[8] = inst_34698);
(statearr_34785[9] = inst_34697);
(statearr_34785[10] = inst_34696);
(statearr_34785[11] = inst_34699);
return statearr_34785;
})();var statearr_34786_34824 = state_34757__$1;(statearr_34786_34824[2] = null);
(statearr_34786_34824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 17))
{var inst_34710 = (state_34757[15]);var inst_34719 = cljs.core.first.call(null,inst_34710);var inst_34720 = cljs.core.async.muxch_STAR_.call(null,inst_34719);var inst_34721 = cljs.core.async.close_BANG_.call(null,inst_34720);var inst_34722 = cljs.core.next.call(null,inst_34710);var inst_34696 = inst_34722;var inst_34697 = null;var inst_34698 = 0;var inst_34699 = 0;var state_34757__$1 = (function (){var statearr_34787 = state_34757;(statearr_34787[8] = inst_34698);
(statearr_34787[16] = inst_34721);
(statearr_34787[9] = inst_34697);
(statearr_34787[10] = inst_34696);
(statearr_34787[11] = inst_34699);
return statearr_34787;
})();var statearr_34788_34825 = state_34757__$1;(statearr_34788_34825[2] = null);
(statearr_34788_34825[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 18))
{var inst_34725 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34789_34826 = state_34757__$1;(statearr_34789_34826[2] = inst_34725);
(statearr_34789_34826[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 19))
{var state_34757__$1 = state_34757;var statearr_34790_34827 = state_34757__$1;(statearr_34790_34827[2] = null);
(statearr_34790_34827[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 20))
{var state_34757__$1 = state_34757;var statearr_34791_34828 = state_34757__$1;(statearr_34791_34828[2] = null);
(statearr_34791_34828[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 21))
{var inst_34750 = (state_34757[2]);var state_34757__$1 = (function (){var statearr_34792 = state_34757;(statearr_34792[17] = inst_34750);
return statearr_34792;
})();var statearr_34793_34829 = state_34757__$1;(statearr_34793_34829[2] = null);
(statearr_34793_34829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 22))
{var inst_34747 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34794_34830 = state_34757__$1;(statearr_34794_34830[2] = inst_34747);
(statearr_34794_34830[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 23))
{var inst_34734 = (state_34757[13]);var inst_34738 = (state_34757[2]);var inst_34739 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34734);var state_34757__$1 = (function (){var statearr_34795 = state_34757;(statearr_34795[18] = inst_34738);
return statearr_34795;
})();var statearr_34796_34831 = state_34757__$1;(statearr_34796_34831[2] = inst_34739);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34758 === 24))
{var inst_34736 = (state_34757[12]);var inst_34686 = (state_34757[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34757,23,Object,null,22);var inst_34743 = cljs.core.async.muxch_STAR_.call(null,inst_34736);var state_34757__$1 = state_34757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34757__$1,25,inst_34743,inst_34686);
} else
{if((state_val_34758 === 25))
{var inst_34745 = (state_34757[2]);var state_34757__$1 = state_34757;var statearr_34797_34832 = state_34757__$1;(statearr_34797_34832[2] = inst_34745);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34801[0] = state_machine__5507__auto__);
(statearr_34801[1] = 1);
return statearr_34801;
});
var state_machine__5507__auto____1 = (function (state_34757){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34802){if((e34802 instanceof Object))
{var ex__5510__auto__ = e34802;var statearr_34803_34833 = state_34757;(statearr_34803_34833[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34834 = state_34757;
state_34757 = G__34834;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34757){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34804 = f__5522__auto__.call(null);(statearr_34804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34805);
return statearr_34804;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34941){var state_val_34942 = (state_34941[1]);if((state_val_34942 === 1))
{var state_34941__$1 = state_34941;var statearr_34943_34972 = state_34941__$1;(statearr_34943_34972[2] = null);
(statearr_34943_34972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 2))
{var inst_34904 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34905 = 0;var state_34941__$1 = (function (){var statearr_34944 = state_34941;(statearr_34944[7] = inst_34904);
(statearr_34944[8] = inst_34905);
return statearr_34944;
})();var statearr_34945_34973 = state_34941__$1;(statearr_34945_34973[2] = null);
(statearr_34945_34973[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 3))
{var inst_34939 = (state_34941[2]);var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34941__$1,inst_34939);
} else
{if((state_val_34942 === 4))
{var inst_34905 = (state_34941[8]);var inst_34907 = (inst_34905 < cnt);var state_34941__$1 = state_34941;if(cljs.core.truth_(inst_34907))
{var statearr_34946_34974 = state_34941__$1;(statearr_34946_34974[1] = 6);
} else
{var statearr_34947_34975 = state_34941__$1;(statearr_34947_34975[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 5))
{var inst_34925 = (state_34941[2]);var state_34941__$1 = (function (){var statearr_34948 = state_34941;(statearr_34948[9] = inst_34925);
return statearr_34948;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34941__$1,12,dchan);
} else
{if((state_val_34942 === 6))
{var state_34941__$1 = state_34941;var statearr_34949_34976 = state_34941__$1;(statearr_34949_34976[2] = null);
(statearr_34949_34976[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 7))
{var state_34941__$1 = state_34941;var statearr_34950_34977 = state_34941__$1;(statearr_34950_34977[2] = null);
(statearr_34950_34977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 8))
{var inst_34923 = (state_34941[2]);var state_34941__$1 = state_34941;var statearr_34951_34978 = state_34941__$1;(statearr_34951_34978[2] = inst_34923);
(statearr_34951_34978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 9))
{var inst_34905 = (state_34941[8]);var inst_34918 = (state_34941[2]);var inst_34919 = (inst_34905 + 1);var inst_34905__$1 = inst_34919;var state_34941__$1 = (function (){var statearr_34952 = state_34941;(statearr_34952[8] = inst_34905__$1);
(statearr_34952[10] = inst_34918);
return statearr_34952;
})();var statearr_34953_34979 = state_34941__$1;(statearr_34953_34979[2] = null);
(statearr_34953_34979[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 10))
{var inst_34909 = (state_34941[2]);var inst_34910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34941__$1 = (function (){var statearr_34954 = state_34941;(statearr_34954[11] = inst_34909);
return statearr_34954;
})();var statearr_34955_34980 = state_34941__$1;(statearr_34955_34980[2] = inst_34910);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 11))
{var inst_34905 = (state_34941[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34941,10,Object,null,9);var inst_34914 = chs__$1.call(null,inst_34905);var inst_34915 = done.call(null,inst_34905);var inst_34916 = cljs.core.async.take_BANG_.call(null,inst_34914,inst_34915);var state_34941__$1 = state_34941;var statearr_34956_34981 = state_34941__$1;(statearr_34956_34981[2] = inst_34916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 12))
{var inst_34927 = (state_34941[12]);var inst_34927__$1 = (state_34941[2]);var inst_34928 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34927__$1);var state_34941__$1 = (function (){var statearr_34957 = state_34941;(statearr_34957[12] = inst_34927__$1);
return statearr_34957;
})();if(cljs.core.truth_(inst_34928))
{var statearr_34958_34982 = state_34941__$1;(statearr_34958_34982[1] = 13);
} else
{var statearr_34959_34983 = state_34941__$1;(statearr_34959_34983[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 13))
{var inst_34930 = cljs.core.async.close_BANG_.call(null,out);var state_34941__$1 = state_34941;var statearr_34960_34984 = state_34941__$1;(statearr_34960_34984[2] = inst_34930);
(statearr_34960_34984[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 14))
{var inst_34927 = (state_34941[12]);var inst_34932 = cljs.core.apply.call(null,f,inst_34927);var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34941__$1,16,out,inst_34932);
} else
{if((state_val_34942 === 15))
{var inst_34937 = (state_34941[2]);var state_34941__$1 = state_34941;var statearr_34961_34985 = state_34941__$1;(statearr_34961_34985[2] = inst_34937);
(statearr_34961_34985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 16))
{var inst_34934 = (state_34941[2]);var state_34941__$1 = (function (){var statearr_34962 = state_34941;(statearr_34962[13] = inst_34934);
return statearr_34962;
})();var statearr_34963_34986 = state_34941__$1;(statearr_34963_34986[2] = null);
(statearr_34963_34986[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34967[0] = state_machine__5507__auto__);
(statearr_34967[1] = 1);
return statearr_34967;
});
var state_machine__5507__auto____1 = (function (state_34941){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34968){if((e34968 instanceof Object))
{var ex__5510__auto__ = e34968;var statearr_34969_34987 = state_34941;(statearr_34969_34987[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34988 = state_34941;
state_34941 = G__34988;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34941){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34970 = f__5522__auto__.call(null);(statearr_34970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34971);
return statearr_34970;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35072){var state_val_35073 = (state_35072[1]);if((state_val_35073 === 1))
{var inst_35043 = cljs.core.vec.call(null,chs);var inst_35044 = inst_35043;var state_35072__$1 = (function (){var statearr_35074 = state_35072;(statearr_35074[7] = inst_35044);
return statearr_35074;
})();var statearr_35075_35097 = state_35072__$1;(statearr_35075_35097[2] = null);
(statearr_35075_35097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 2))
{var inst_35044 = (state_35072[7]);var inst_35046 = cljs.core.count.call(null,inst_35044);var inst_35047 = (inst_35046 > 0);var state_35072__$1 = state_35072;if(cljs.core.truth_(inst_35047))
{var statearr_35076_35098 = state_35072__$1;(statearr_35076_35098[1] = 4);
} else
{var statearr_35077_35099 = state_35072__$1;(statearr_35077_35099[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 3))
{var inst_35070 = (state_35072[2]);var state_35072__$1 = state_35072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35072__$1,inst_35070);
} else
{if((state_val_35073 === 4))
{var inst_35044 = (state_35072[7]);var state_35072__$1 = state_35072;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35072__$1,7,inst_35044);
} else
{if((state_val_35073 === 5))
{var inst_35066 = cljs.core.async.close_BANG_.call(null,out);var state_35072__$1 = state_35072;var statearr_35078_35100 = state_35072__$1;(statearr_35078_35100[2] = inst_35066);
(statearr_35078_35100[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 6))
{var inst_35068 = (state_35072[2]);var state_35072__$1 = state_35072;var statearr_35079_35101 = state_35072__$1;(statearr_35079_35101[2] = inst_35068);
(statearr_35079_35101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 7))
{var inst_35051 = (state_35072[8]);var inst_35052 = (state_35072[9]);var inst_35051__$1 = (state_35072[2]);var inst_35052__$1 = cljs.core.nth.call(null,inst_35051__$1,0,null);var inst_35053 = cljs.core.nth.call(null,inst_35051__$1,1,null);var inst_35054 = (inst_35052__$1 == null);var state_35072__$1 = (function (){var statearr_35080 = state_35072;(statearr_35080[8] = inst_35051__$1);
(statearr_35080[10] = inst_35053);
(statearr_35080[9] = inst_35052__$1);
return statearr_35080;
})();if(cljs.core.truth_(inst_35054))
{var statearr_35081_35102 = state_35072__$1;(statearr_35081_35102[1] = 8);
} else
{var statearr_35082_35103 = state_35072__$1;(statearr_35082_35103[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 8))
{var inst_35051 = (state_35072[8]);var inst_35053 = (state_35072[10]);var inst_35052 = (state_35072[9]);var inst_35044 = (state_35072[7]);var inst_35056 = (function (){var c = inst_35053;var v = inst_35052;var vec__35049 = inst_35051;var cs = inst_35044;return ((function (c,v,vec__35049,cs,inst_35051,inst_35053,inst_35052,inst_35044,state_val_35073){
return (function (p1__34989_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34989_SHARP_);
});
;})(c,v,vec__35049,cs,inst_35051,inst_35053,inst_35052,inst_35044,state_val_35073))
})();var inst_35057 = cljs.core.filterv.call(null,inst_35056,inst_35044);var inst_35044__$1 = inst_35057;var state_35072__$1 = (function (){var statearr_35083 = state_35072;(statearr_35083[7] = inst_35044__$1);
return statearr_35083;
})();var statearr_35084_35104 = state_35072__$1;(statearr_35084_35104[2] = null);
(statearr_35084_35104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 9))
{var inst_35052 = (state_35072[9]);var state_35072__$1 = state_35072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35072__$1,11,out,inst_35052);
} else
{if((state_val_35073 === 10))
{var inst_35064 = (state_35072[2]);var state_35072__$1 = state_35072;var statearr_35086_35105 = state_35072__$1;(statearr_35086_35105[2] = inst_35064);
(statearr_35086_35105[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35073 === 11))
{var inst_35044 = (state_35072[7]);var inst_35061 = (state_35072[2]);var tmp35085 = inst_35044;var inst_35044__$1 = tmp35085;var state_35072__$1 = (function (){var statearr_35087 = state_35072;(statearr_35087[11] = inst_35061);
(statearr_35087[7] = inst_35044__$1);
return statearr_35087;
})();var statearr_35088_35106 = state_35072__$1;(statearr_35088_35106[2] = null);
(statearr_35088_35106[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35092 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35092[0] = state_machine__5507__auto__);
(statearr_35092[1] = 1);
return statearr_35092;
});
var state_machine__5507__auto____1 = (function (state_35072){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35093){if((e35093 instanceof Object))
{var ex__5510__auto__ = e35093;var statearr_35094_35107 = state_35072;(statearr_35094_35107[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35108 = state_35072;
state_35072 = G__35108;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35072){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35095 = f__5522__auto__.call(null);(statearr_35095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35096);
return statearr_35095;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35178){var state_val_35179 = (state_35178[1]);if((state_val_35179 === 1))
{var inst_35155 = 0;var state_35178__$1 = (function (){var statearr_35180 = state_35178;(statearr_35180[7] = inst_35155);
return statearr_35180;
})();var statearr_35181_35202 = state_35178__$1;(statearr_35181_35202[2] = null);
(statearr_35181_35202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 2))
{var inst_35155 = (state_35178[7]);var inst_35157 = (inst_35155 < n);var state_35178__$1 = state_35178;if(cljs.core.truth_(inst_35157))
{var statearr_35182_35203 = state_35178__$1;(statearr_35182_35203[1] = 4);
} else
{var statearr_35183_35204 = state_35178__$1;(statearr_35183_35204[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 3))
{var inst_35175 = (state_35178[2]);var inst_35176 = cljs.core.async.close_BANG_.call(null,out);var state_35178__$1 = (function (){var statearr_35184 = state_35178;(statearr_35184[8] = inst_35175);
return statearr_35184;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35178__$1,inst_35176);
} else
{if((state_val_35179 === 4))
{var state_35178__$1 = state_35178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35178__$1,7,ch);
} else
{if((state_val_35179 === 5))
{var state_35178__$1 = state_35178;var statearr_35185_35205 = state_35178__$1;(statearr_35185_35205[2] = null);
(statearr_35185_35205[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 6))
{var inst_35173 = (state_35178[2]);var state_35178__$1 = state_35178;var statearr_35186_35206 = state_35178__$1;(statearr_35186_35206[2] = inst_35173);
(statearr_35186_35206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 7))
{var inst_35160 = (state_35178[9]);var inst_35160__$1 = (state_35178[2]);var inst_35161 = (inst_35160__$1 == null);var inst_35162 = cljs.core.not.call(null,inst_35161);var state_35178__$1 = (function (){var statearr_35187 = state_35178;(statearr_35187[9] = inst_35160__$1);
return statearr_35187;
})();if(inst_35162)
{var statearr_35188_35207 = state_35178__$1;(statearr_35188_35207[1] = 8);
} else
{var statearr_35189_35208 = state_35178__$1;(statearr_35189_35208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 8))
{var inst_35160 = (state_35178[9]);var state_35178__$1 = state_35178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35178__$1,11,out,inst_35160);
} else
{if((state_val_35179 === 9))
{var state_35178__$1 = state_35178;var statearr_35190_35209 = state_35178__$1;(statearr_35190_35209[2] = null);
(statearr_35190_35209[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 10))
{var inst_35170 = (state_35178[2]);var state_35178__$1 = state_35178;var statearr_35191_35210 = state_35178__$1;(statearr_35191_35210[2] = inst_35170);
(statearr_35191_35210[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35179 === 11))
{var inst_35155 = (state_35178[7]);var inst_35165 = (state_35178[2]);var inst_35166 = (inst_35155 + 1);var inst_35155__$1 = inst_35166;var state_35178__$1 = (function (){var statearr_35192 = state_35178;(statearr_35192[7] = inst_35155__$1);
(statearr_35192[10] = inst_35165);
return statearr_35192;
})();var statearr_35193_35211 = state_35178__$1;(statearr_35193_35211[2] = null);
(statearr_35193_35211[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35197 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35197[0] = state_machine__5507__auto__);
(statearr_35197[1] = 1);
return statearr_35197;
});
var state_machine__5507__auto____1 = (function (state_35178){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35198){if((e35198 instanceof Object))
{var ex__5510__auto__ = e35198;var statearr_35199_35212 = state_35178;(statearr_35199_35212[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35213 = state_35178;
state_35178 = G__35213;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35178){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35200 = f__5522__auto__.call(null);(statearr_35200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35201);
return statearr_35200;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35285){var state_val_35286 = (state_35285[1]);if((state_val_35286 === 1))
{var inst_35262 = null;var state_35285__$1 = (function (){var statearr_35287 = state_35285;(statearr_35287[7] = inst_35262);
return statearr_35287;
})();var statearr_35288_35311 = state_35285__$1;(statearr_35288_35311[2] = null);
(statearr_35288_35311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 2))
{var state_35285__$1 = state_35285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35285__$1,4,ch);
} else
{if((state_val_35286 === 3))
{var inst_35282 = (state_35285[2]);var inst_35283 = cljs.core.async.close_BANG_.call(null,out);var state_35285__$1 = (function (){var statearr_35289 = state_35285;(statearr_35289[8] = inst_35282);
return statearr_35289;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35285__$1,inst_35283);
} else
{if((state_val_35286 === 4))
{var inst_35265 = (state_35285[9]);var inst_35265__$1 = (state_35285[2]);var inst_35266 = (inst_35265__$1 == null);var inst_35267 = cljs.core.not.call(null,inst_35266);var state_35285__$1 = (function (){var statearr_35290 = state_35285;(statearr_35290[9] = inst_35265__$1);
return statearr_35290;
})();if(inst_35267)
{var statearr_35291_35312 = state_35285__$1;(statearr_35291_35312[1] = 5);
} else
{var statearr_35292_35313 = state_35285__$1;(statearr_35292_35313[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 5))
{var inst_35265 = (state_35285[9]);var inst_35262 = (state_35285[7]);var inst_35269 = cljs.core._EQ_.call(null,inst_35265,inst_35262);var state_35285__$1 = state_35285;if(inst_35269)
{var statearr_35293_35314 = state_35285__$1;(statearr_35293_35314[1] = 8);
} else
{var statearr_35294_35315 = state_35285__$1;(statearr_35294_35315[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 6))
{var state_35285__$1 = state_35285;var statearr_35296_35316 = state_35285__$1;(statearr_35296_35316[2] = null);
(statearr_35296_35316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 7))
{var inst_35280 = (state_35285[2]);var state_35285__$1 = state_35285;var statearr_35297_35317 = state_35285__$1;(statearr_35297_35317[2] = inst_35280);
(statearr_35297_35317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 8))
{var inst_35262 = (state_35285[7]);var tmp35295 = inst_35262;var inst_35262__$1 = tmp35295;var state_35285__$1 = (function (){var statearr_35298 = state_35285;(statearr_35298[7] = inst_35262__$1);
return statearr_35298;
})();var statearr_35299_35318 = state_35285__$1;(statearr_35299_35318[2] = null);
(statearr_35299_35318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 9))
{var inst_35265 = (state_35285[9]);var state_35285__$1 = state_35285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35285__$1,11,out,inst_35265);
} else
{if((state_val_35286 === 10))
{var inst_35277 = (state_35285[2]);var state_35285__$1 = state_35285;var statearr_35300_35319 = state_35285__$1;(statearr_35300_35319[2] = inst_35277);
(statearr_35300_35319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35286 === 11))
{var inst_35265 = (state_35285[9]);var inst_35274 = (state_35285[2]);var inst_35262 = inst_35265;var state_35285__$1 = (function (){var statearr_35301 = state_35285;(statearr_35301[7] = inst_35262);
(statearr_35301[10] = inst_35274);
return statearr_35301;
})();var statearr_35302_35320 = state_35285__$1;(statearr_35302_35320[2] = null);
(statearr_35302_35320[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35306 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35306[0] = state_machine__5507__auto__);
(statearr_35306[1] = 1);
return statearr_35306;
});
var state_machine__5507__auto____1 = (function (state_35285){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35285);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35307){if((e35307 instanceof Object))
{var ex__5510__auto__ = e35307;var statearr_35308_35321 = state_35285;(statearr_35308_35321[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35322 = state_35285;
state_35285 = G__35322;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35285){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35309 = f__5522__auto__.call(null);(statearr_35309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35310);
return statearr_35309;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35427){var state_val_35428 = (state_35427[1]);if((state_val_35428 === 1))
{var inst_35390 = (new Array(n));var inst_35391 = inst_35390;var inst_35392 = 0;var state_35427__$1 = (function (){var statearr_35429 = state_35427;(statearr_35429[7] = inst_35392);
(statearr_35429[8] = inst_35391);
return statearr_35429;
})();var statearr_35430_35458 = state_35427__$1;(statearr_35430_35458[2] = null);
(statearr_35430_35458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 2))
{var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35427__$1,4,ch);
} else
{if((state_val_35428 === 3))
{var inst_35425 = (state_35427[2]);var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35427__$1,inst_35425);
} else
{if((state_val_35428 === 4))
{var inst_35395 = (state_35427[9]);var inst_35395__$1 = (state_35427[2]);var inst_35396 = (inst_35395__$1 == null);var inst_35397 = cljs.core.not.call(null,inst_35396);var state_35427__$1 = (function (){var statearr_35431 = state_35427;(statearr_35431[9] = inst_35395__$1);
return statearr_35431;
})();if(inst_35397)
{var statearr_35432_35459 = state_35427__$1;(statearr_35432_35459[1] = 5);
} else
{var statearr_35433_35460 = state_35427__$1;(statearr_35433_35460[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 5))
{var inst_35395 = (state_35427[9]);var inst_35392 = (state_35427[7]);var inst_35391 = (state_35427[8]);var inst_35400 = (state_35427[10]);var inst_35399 = (inst_35391[inst_35392] = inst_35395);var inst_35400__$1 = (inst_35392 + 1);var inst_35401 = (inst_35400__$1 < n);var state_35427__$1 = (function (){var statearr_35434 = state_35427;(statearr_35434[10] = inst_35400__$1);
(statearr_35434[11] = inst_35399);
return statearr_35434;
})();if(cljs.core.truth_(inst_35401))
{var statearr_35435_35461 = state_35427__$1;(statearr_35435_35461[1] = 8);
} else
{var statearr_35436_35462 = state_35427__$1;(statearr_35436_35462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 6))
{var inst_35392 = (state_35427[7]);var inst_35413 = (inst_35392 > 0);var state_35427__$1 = state_35427;if(cljs.core.truth_(inst_35413))
{var statearr_35438_35463 = state_35427__$1;(statearr_35438_35463[1] = 12);
} else
{var statearr_35439_35464 = state_35427__$1;(statearr_35439_35464[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 7))
{var inst_35423 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35440_35465 = state_35427__$1;(statearr_35440_35465[2] = inst_35423);
(statearr_35440_35465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 8))
{var inst_35391 = (state_35427[8]);var inst_35400 = (state_35427[10]);var tmp35437 = inst_35391;var inst_35391__$1 = tmp35437;var inst_35392 = inst_35400;var state_35427__$1 = (function (){var statearr_35441 = state_35427;(statearr_35441[7] = inst_35392);
(statearr_35441[8] = inst_35391__$1);
return statearr_35441;
})();var statearr_35442_35466 = state_35427__$1;(statearr_35442_35466[2] = null);
(statearr_35442_35466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 9))
{var inst_35391 = (state_35427[8]);var inst_35405 = cljs.core.vec.call(null,inst_35391);var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35427__$1,11,out,inst_35405);
} else
{if((state_val_35428 === 10))
{var inst_35411 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35443_35467 = state_35427__$1;(statearr_35443_35467[2] = inst_35411);
(statearr_35443_35467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 11))
{var inst_35407 = (state_35427[2]);var inst_35408 = (new Array(n));var inst_35391 = inst_35408;var inst_35392 = 0;var state_35427__$1 = (function (){var statearr_35444 = state_35427;(statearr_35444[12] = inst_35407);
(statearr_35444[7] = inst_35392);
(statearr_35444[8] = inst_35391);
return statearr_35444;
})();var statearr_35445_35468 = state_35427__$1;(statearr_35445_35468[2] = null);
(statearr_35445_35468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 12))
{var inst_35391 = (state_35427[8]);var inst_35415 = cljs.core.vec.call(null,inst_35391);var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35427__$1,15,out,inst_35415);
} else
{if((state_val_35428 === 13))
{var state_35427__$1 = state_35427;var statearr_35446_35469 = state_35427__$1;(statearr_35446_35469[2] = null);
(statearr_35446_35469[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 14))
{var inst_35420 = (state_35427[2]);var inst_35421 = cljs.core.async.close_BANG_.call(null,out);var state_35427__$1 = (function (){var statearr_35447 = state_35427;(statearr_35447[13] = inst_35420);
return statearr_35447;
})();var statearr_35448_35470 = state_35427__$1;(statearr_35448_35470[2] = inst_35421);
(statearr_35448_35470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 15))
{var inst_35417 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35449_35471 = state_35427__$1;(statearr_35449_35471[2] = inst_35417);
(statearr_35449_35471[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35453[0] = state_machine__5507__auto__);
(statearr_35453[1] = 1);
return statearr_35453;
});
var state_machine__5507__auto____1 = (function (state_35427){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35454){if((e35454 instanceof Object))
{var ex__5510__auto__ = e35454;var statearr_35455_35472 = state_35427;(statearr_35455_35472[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35473 = state_35427;
state_35427 = G__35473;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35427){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35456 = f__5522__auto__.call(null);(statearr_35456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35457);
return statearr_35456;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35586){var state_val_35587 = (state_35586[1]);if((state_val_35587 === 1))
{var inst_35545 = [];var inst_35546 = inst_35545;var inst_35547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35586__$1 = (function (){var statearr_35588 = state_35586;(statearr_35588[7] = inst_35546);
(statearr_35588[8] = inst_35547);
return statearr_35588;
})();var statearr_35589_35617 = state_35586__$1;(statearr_35589_35617[2] = null);
(statearr_35589_35617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 2))
{var state_35586__$1 = state_35586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,4,ch);
} else
{if((state_val_35587 === 3))
{var inst_35584 = (state_35586[2]);var state_35586__$1 = state_35586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35586__$1,inst_35584);
} else
{if((state_val_35587 === 4))
{var inst_35550 = (state_35586[9]);var inst_35550__$1 = (state_35586[2]);var inst_35551 = (inst_35550__$1 == null);var inst_35552 = cljs.core.not.call(null,inst_35551);var state_35586__$1 = (function (){var statearr_35590 = state_35586;(statearr_35590[9] = inst_35550__$1);
return statearr_35590;
})();if(inst_35552)
{var statearr_35591_35618 = state_35586__$1;(statearr_35591_35618[1] = 5);
} else
{var statearr_35592_35619 = state_35586__$1;(statearr_35592_35619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 5))
{var inst_35550 = (state_35586[9]);var inst_35547 = (state_35586[8]);var inst_35554 = (state_35586[10]);var inst_35554__$1 = f.call(null,inst_35550);var inst_35555 = cljs.core._EQ_.call(null,inst_35554__$1,inst_35547);var inst_35556 = cljs.core.keyword_identical_QMARK_.call(null,inst_35547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35557 = (inst_35555) || (inst_35556);var state_35586__$1 = (function (){var statearr_35593 = state_35586;(statearr_35593[10] = inst_35554__$1);
return statearr_35593;
})();if(cljs.core.truth_(inst_35557))
{var statearr_35594_35620 = state_35586__$1;(statearr_35594_35620[1] = 8);
} else
{var statearr_35595_35621 = state_35586__$1;(statearr_35595_35621[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 6))
{var inst_35546 = (state_35586[7]);var inst_35571 = inst_35546.length;var inst_35572 = (inst_35571 > 0);var state_35586__$1 = state_35586;if(cljs.core.truth_(inst_35572))
{var statearr_35597_35622 = state_35586__$1;(statearr_35597_35622[1] = 12);
} else
{var statearr_35598_35623 = state_35586__$1;(statearr_35598_35623[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 7))
{var inst_35582 = (state_35586[2]);var state_35586__$1 = state_35586;var statearr_35599_35624 = state_35586__$1;(statearr_35599_35624[2] = inst_35582);
(statearr_35599_35624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 8))
{var inst_35550 = (state_35586[9]);var inst_35546 = (state_35586[7]);var inst_35554 = (state_35586[10]);var inst_35559 = inst_35546.push(inst_35550);var tmp35596 = inst_35546;var inst_35546__$1 = tmp35596;var inst_35547 = inst_35554;var state_35586__$1 = (function (){var statearr_35600 = state_35586;(statearr_35600[11] = inst_35559);
(statearr_35600[7] = inst_35546__$1);
(statearr_35600[8] = inst_35547);
return statearr_35600;
})();var statearr_35601_35625 = state_35586__$1;(statearr_35601_35625[2] = null);
(statearr_35601_35625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 9))
{var inst_35546 = (state_35586[7]);var inst_35562 = cljs.core.vec.call(null,inst_35546);var state_35586__$1 = state_35586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35586__$1,11,out,inst_35562);
} else
{if((state_val_35587 === 10))
{var inst_35569 = (state_35586[2]);var state_35586__$1 = state_35586;var statearr_35602_35626 = state_35586__$1;(statearr_35602_35626[2] = inst_35569);
(statearr_35602_35626[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 11))
{var inst_35550 = (state_35586[9]);var inst_35554 = (state_35586[10]);var inst_35564 = (state_35586[2]);var inst_35565 = [];var inst_35566 = inst_35565.push(inst_35550);var inst_35546 = inst_35565;var inst_35547 = inst_35554;var state_35586__$1 = (function (){var statearr_35603 = state_35586;(statearr_35603[12] = inst_35566);
(statearr_35603[13] = inst_35564);
(statearr_35603[7] = inst_35546);
(statearr_35603[8] = inst_35547);
return statearr_35603;
})();var statearr_35604_35627 = state_35586__$1;(statearr_35604_35627[2] = null);
(statearr_35604_35627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 12))
{var inst_35546 = (state_35586[7]);var inst_35574 = cljs.core.vec.call(null,inst_35546);var state_35586__$1 = state_35586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35586__$1,15,out,inst_35574);
} else
{if((state_val_35587 === 13))
{var state_35586__$1 = state_35586;var statearr_35605_35628 = state_35586__$1;(statearr_35605_35628[2] = null);
(statearr_35605_35628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 14))
{var inst_35579 = (state_35586[2]);var inst_35580 = cljs.core.async.close_BANG_.call(null,out);var state_35586__$1 = (function (){var statearr_35606 = state_35586;(statearr_35606[14] = inst_35579);
return statearr_35606;
})();var statearr_35607_35629 = state_35586__$1;(statearr_35607_35629[2] = inst_35580);
(statearr_35607_35629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35587 === 15))
{var inst_35576 = (state_35586[2]);var state_35586__$1 = state_35586;var statearr_35608_35630 = state_35586__$1;(statearr_35608_35630[2] = inst_35576);
(statearr_35608_35630[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35612[0] = state_machine__5507__auto__);
(statearr_35612[1] = 1);
return statearr_35612;
});
var state_machine__5507__auto____1 = (function (state_35586){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35586);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object))
{var ex__5510__auto__ = e35613;var statearr_35614_35631 = state_35586;(statearr_35614_35631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35632 = state_35586;
state_35586 = G__35632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35615 = f__5522__auto__.call(null);(statearr_35615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35616);
return statearr_35615;
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
