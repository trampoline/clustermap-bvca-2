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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13110 = (function (f,fn_handler,meta13111){
this.f = f;
this.fn_handler = fn_handler;
this.meta13111 = meta13111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13110.cljs$lang$type = true;
cljs.core.async.t13110.cljs$lang$ctorStr = "cljs.core.async/t13110";
cljs.core.async.t13110.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13110");
});
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13112){var self__ = this;
var _13112__$1 = this;return self__.meta13111;
});
cljs.core.async.t13110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13112,meta13111__$1){var self__ = this;
var _13112__$1 = this;return (new cljs.core.async.t13110(self__.f,self__.fn_handler,meta13111__$1));
});
cljs.core.async.__GT_t13110 = (function __GT_t13110(f__$1,fn_handler__$1,meta13111){return (new cljs.core.async.t13110(f__$1,fn_handler__$1,meta13111));
});
}
return (new cljs.core.async.t13110(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13114 = buff;if(G__13114)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13114.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13114.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13114);
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
{var val_13115 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13115);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13115);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13116 = n;var x_13117 = 0;while(true){
if((x_13117 < n__4248__auto___13116))
{(a[x_13117] = 0);
{
var G__13118 = (x_13117 + 1);
x_13117 = G__13118;
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
var G__13119 = (i + 1);
i = G__13119;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13123 = (function (flag,alt_flag,meta13124){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13124 = meta13124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13123.cljs$lang$type = true;
cljs.core.async.t13123.cljs$lang$ctorStr = "cljs.core.async/t13123";
cljs.core.async.t13123.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13123");
});
cljs.core.async.t13123.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13125){var self__ = this;
var _13125__$1 = this;return self__.meta13124;
});
cljs.core.async.t13123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13125,meta13124__$1){var self__ = this;
var _13125__$1 = this;return (new cljs.core.async.t13123(self__.flag,self__.alt_flag,meta13124__$1));
});
cljs.core.async.__GT_t13123 = (function __GT_t13123(flag__$1,alt_flag__$1,meta13124){return (new cljs.core.async.t13123(flag__$1,alt_flag__$1,meta13124));
});
}
return (new cljs.core.async.t13123(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13129 = (function (cb,flag,alt_handler,meta13130){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13130 = meta13130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13129.cljs$lang$type = true;
cljs.core.async.t13129.cljs$lang$ctorStr = "cljs.core.async/t13129";
cljs.core.async.t13129.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13129");
});
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13131){var self__ = this;
var _13131__$1 = this;return self__.meta13130;
});
cljs.core.async.t13129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13131,meta13130__$1){var self__ = this;
var _13131__$1 = this;return (new cljs.core.async.t13129(self__.cb,self__.flag,self__.alt_handler,meta13130__$1));
});
cljs.core.async.__GT_t13129 = (function __GT_t13129(cb__$1,flag__$1,alt_handler__$1,meta13130){return (new cljs.core.async.t13129(cb__$1,flag__$1,alt_handler__$1,meta13130));
});
}
return (new cljs.core.async.t13129(cb,flag,alt_handler,null));
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
return (function (p1__13132_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13132_SHARP_,port], null));
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
var G__13133 = (i + 1);
i = G__13133;
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
var alts_BANG___delegate = function (ports,p__13134){var map__13136 = p__13134;var map__13136__$1 = ((cljs.core.seq_QMARK_.call(null,map__13136))?cljs.core.apply.call(null,cljs.core.hash_map,map__13136):map__13136);var opts = map__13136__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13134 = null;if (arguments.length > 1) {
  p__13134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13134);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13137){
var ports = cljs.core.first(arglist__13137);
var p__13134 = cljs.core.rest(arglist__13137);
return alts_BANG___delegate(ports,p__13134);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13145 = (function (ch,f,map_LT_,meta13146){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13146 = meta13146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13145.cljs$lang$type = true;
cljs.core.async.t13145.cljs$lang$ctorStr = "cljs.core.async/t13145";
cljs.core.async.t13145.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13145");
});
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13148 = (function (fn1,_,meta13146,ch,f,map_LT_,meta13149){
this.fn1 = fn1;
this._ = _;
this.meta13146 = meta13146;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13149 = meta13149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13148.cljs$lang$type = true;
cljs.core.async.t13148.cljs$lang$ctorStr = "cljs.core.async/t13148";
cljs.core.async.t13148.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13148");
});
cljs.core.async.t13148.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13148.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13138_SHARP_){return f1.call(null,(((p1__13138_SHARP_ == null))?null:self__.f.call(null,p1__13138_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13150){var self__ = this;
var _13150__$1 = this;return self__.meta13149;
});
cljs.core.async.t13148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13150,meta13149__$1){var self__ = this;
var _13150__$1 = this;return (new cljs.core.async.t13148(self__.fn1,self__._,self__.meta13146,self__.ch,self__.f,self__.map_LT_,meta13149__$1));
});
cljs.core.async.__GT_t13148 = (function __GT_t13148(fn1__$1,___$2,meta13146__$1,ch__$2,f__$2,map_LT___$2,meta13149){return (new cljs.core.async.t13148(fn1__$1,___$2,meta13146__$1,ch__$2,f__$2,map_LT___$2,meta13149));
});
}
return (new cljs.core.async.t13148(fn1,___$1,self__.meta13146,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13147){var self__ = this;
var _13147__$1 = this;return self__.meta13146;
});
cljs.core.async.t13145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13147,meta13146__$1){var self__ = this;
var _13147__$1 = this;return (new cljs.core.async.t13145(self__.ch,self__.f,self__.map_LT_,meta13146__$1));
});
cljs.core.async.__GT_t13145 = (function __GT_t13145(ch__$1,f__$1,map_LT___$1,meta13146){return (new cljs.core.async.t13145(ch__$1,f__$1,map_LT___$1,meta13146));
});
}
return (new cljs.core.async.t13145(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13154 = (function (ch,f,map_GT_,meta13155){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13155 = meta13155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13154.cljs$lang$type = true;
cljs.core.async.t13154.cljs$lang$ctorStr = "cljs.core.async/t13154";
cljs.core.async.t13154.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13154");
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13156){var self__ = this;
var _13156__$1 = this;return self__.meta13155;
});
cljs.core.async.t13154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13156,meta13155__$1){var self__ = this;
var _13156__$1 = this;return (new cljs.core.async.t13154(self__.ch,self__.f,self__.map_GT_,meta13155__$1));
});
cljs.core.async.__GT_t13154 = (function __GT_t13154(ch__$1,f__$1,map_GT___$1,meta13155){return (new cljs.core.async.t13154(ch__$1,f__$1,map_GT___$1,meta13155));
});
}
return (new cljs.core.async.t13154(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13160 = (function (ch,p,filter_GT_,meta13161){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13161 = meta13161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13160.cljs$lang$type = true;
cljs.core.async.t13160.cljs$lang$ctorStr = "cljs.core.async/t13160";
cljs.core.async.t13160.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13160");
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13162){var self__ = this;
var _13162__$1 = this;return self__.meta13161;
});
cljs.core.async.t13160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13162,meta13161__$1){var self__ = this;
var _13162__$1 = this;return (new cljs.core.async.t13160(self__.ch,self__.p,self__.filter_GT_,meta13161__$1));
});
cljs.core.async.__GT_t13160 = (function __GT_t13160(ch__$1,p__$1,filter_GT___$1,meta13161){return (new cljs.core.async.t13160(ch__$1,p__$1,filter_GT___$1,meta13161));
});
}
return (new cljs.core.async.t13160(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13224){var state_val_13225 = (state_13224[1]);if((state_val_13225 === 1))
{var state_13224__$1 = state_13224;var statearr_13226_13246 = state_13224__$1;(statearr_13226_13246[2] = null);
(statearr_13226_13246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 2))
{var state_13224__$1 = state_13224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13224__$1,4,ch);
} else
{if((state_val_13225 === 3))
{var inst_13222 = (state_13224[2]);var state_13224__$1 = state_13224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13224__$1,inst_13222);
} else
{if((state_val_13225 === 4))
{var inst_13206 = (state_13224[7]);var inst_13206__$1 = (state_13224[2]);var inst_13207 = (inst_13206__$1 == null);var state_13224__$1 = (function (){var statearr_13227 = state_13224;(statearr_13227[7] = inst_13206__$1);
return statearr_13227;
})();if(cljs.core.truth_(inst_13207))
{var statearr_13228_13247 = state_13224__$1;(statearr_13228_13247[1] = 5);
} else
{var statearr_13229_13248 = state_13224__$1;(statearr_13229_13248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 5))
{var inst_13209 = cljs.core.async.close_BANG_.call(null,out);var state_13224__$1 = state_13224;var statearr_13230_13249 = state_13224__$1;(statearr_13230_13249[2] = inst_13209);
(statearr_13230_13249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 6))
{var inst_13206 = (state_13224[7]);var inst_13211 = p.call(null,inst_13206);var state_13224__$1 = state_13224;if(cljs.core.truth_(inst_13211))
{var statearr_13231_13250 = state_13224__$1;(statearr_13231_13250[1] = 8);
} else
{var statearr_13232_13251 = state_13224__$1;(statearr_13232_13251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 7))
{var inst_13220 = (state_13224[2]);var state_13224__$1 = state_13224;var statearr_13233_13252 = state_13224__$1;(statearr_13233_13252[2] = inst_13220);
(statearr_13233_13252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 8))
{var inst_13206 = (state_13224[7]);var state_13224__$1 = state_13224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13224__$1,11,out,inst_13206);
} else
{if((state_val_13225 === 9))
{var state_13224__$1 = state_13224;var statearr_13234_13253 = state_13224__$1;(statearr_13234_13253[2] = null);
(statearr_13234_13253[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 10))
{var inst_13217 = (state_13224[2]);var state_13224__$1 = (function (){var statearr_13235 = state_13224;(statearr_13235[8] = inst_13217);
return statearr_13235;
})();var statearr_13236_13254 = state_13224__$1;(statearr_13236_13254[2] = null);
(statearr_13236_13254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13225 === 11))
{var inst_13214 = (state_13224[2]);var state_13224__$1 = state_13224;var statearr_13237_13255 = state_13224__$1;(statearr_13237_13255[2] = inst_13214);
(statearr_13237_13255[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13241 = [null,null,null,null,null,null,null,null,null];(statearr_13241[0] = state_machine__5507__auto__);
(statearr_13241[1] = 1);
return statearr_13241;
});
var state_machine__5507__auto____1 = (function (state_13224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13242){if((e13242 instanceof Object))
{var ex__5510__auto__ = e13242;var statearr_13243_13256 = state_13224;(statearr_13243_13256[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13257 = state_13224;
state_13224 = G__13257;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13244 = f__5522__auto__.call(null);(statearr_13244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13245);
return statearr_13244;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13409){var state_val_13410 = (state_13409[1]);if((state_val_13410 === 1))
{var state_13409__$1 = state_13409;var statearr_13411_13448 = state_13409__$1;(statearr_13411_13448[2] = null);
(statearr_13411_13448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 2))
{var state_13409__$1 = state_13409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13409__$1,4,in$);
} else
{if((state_val_13410 === 3))
{var inst_13407 = (state_13409[2]);var state_13409__$1 = state_13409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13409__$1,inst_13407);
} else
{if((state_val_13410 === 4))
{var inst_13355 = (state_13409[7]);var inst_13355__$1 = (state_13409[2]);var inst_13356 = (inst_13355__$1 == null);var state_13409__$1 = (function (){var statearr_13412 = state_13409;(statearr_13412[7] = inst_13355__$1);
return statearr_13412;
})();if(cljs.core.truth_(inst_13356))
{var statearr_13413_13449 = state_13409__$1;(statearr_13413_13449[1] = 5);
} else
{var statearr_13414_13450 = state_13409__$1;(statearr_13414_13450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 5))
{var inst_13358 = cljs.core.async.close_BANG_.call(null,out);var state_13409__$1 = state_13409;var statearr_13415_13451 = state_13409__$1;(statearr_13415_13451[2] = inst_13358);
(statearr_13415_13451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 6))
{var inst_13355 = (state_13409[7]);var inst_13360 = f.call(null,inst_13355);var inst_13365 = cljs.core.seq.call(null,inst_13360);var inst_13366 = inst_13365;var inst_13367 = null;var inst_13368 = 0;var inst_13369 = 0;var state_13409__$1 = (function (){var statearr_13416 = state_13409;(statearr_13416[8] = inst_13369);
(statearr_13416[9] = inst_13368);
(statearr_13416[10] = inst_13367);
(statearr_13416[11] = inst_13366);
return statearr_13416;
})();var statearr_13417_13452 = state_13409__$1;(statearr_13417_13452[2] = null);
(statearr_13417_13452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 7))
{var inst_13405 = (state_13409[2]);var state_13409__$1 = state_13409;var statearr_13418_13453 = state_13409__$1;(statearr_13418_13453[2] = inst_13405);
(statearr_13418_13453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 8))
{var inst_13369 = (state_13409[8]);var inst_13368 = (state_13409[9]);var inst_13371 = (inst_13369 < inst_13368);var inst_13372 = inst_13371;var state_13409__$1 = state_13409;if(cljs.core.truth_(inst_13372))
{var statearr_13419_13454 = state_13409__$1;(statearr_13419_13454[1] = 10);
} else
{var statearr_13420_13455 = state_13409__$1;(statearr_13420_13455[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 9))
{var inst_13402 = (state_13409[2]);var state_13409__$1 = (function (){var statearr_13421 = state_13409;(statearr_13421[12] = inst_13402);
return statearr_13421;
})();var statearr_13422_13456 = state_13409__$1;(statearr_13422_13456[2] = null);
(statearr_13422_13456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 10))
{var inst_13369 = (state_13409[8]);var inst_13367 = (state_13409[10]);var inst_13374 = cljs.core._nth.call(null,inst_13367,inst_13369);var state_13409__$1 = state_13409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13409__$1,13,out,inst_13374);
} else
{if((state_val_13410 === 11))
{var inst_13366 = (state_13409[11]);var inst_13380 = (state_13409[13]);var inst_13380__$1 = cljs.core.seq.call(null,inst_13366);var state_13409__$1 = (function (){var statearr_13426 = state_13409;(statearr_13426[13] = inst_13380__$1);
return statearr_13426;
})();if(inst_13380__$1)
{var statearr_13427_13457 = state_13409__$1;(statearr_13427_13457[1] = 14);
} else
{var statearr_13428_13458 = state_13409__$1;(statearr_13428_13458[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 12))
{var inst_13400 = (state_13409[2]);var state_13409__$1 = state_13409;var statearr_13429_13459 = state_13409__$1;(statearr_13429_13459[2] = inst_13400);
(statearr_13429_13459[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 13))
{var inst_13369 = (state_13409[8]);var inst_13368 = (state_13409[9]);var inst_13367 = (state_13409[10]);var inst_13366 = (state_13409[11]);var inst_13376 = (state_13409[2]);var inst_13377 = (inst_13369 + 1);var tmp13423 = inst_13368;var tmp13424 = inst_13367;var tmp13425 = inst_13366;var inst_13366__$1 = tmp13425;var inst_13367__$1 = tmp13424;var inst_13368__$1 = tmp13423;var inst_13369__$1 = inst_13377;var state_13409__$1 = (function (){var statearr_13430 = state_13409;(statearr_13430[8] = inst_13369__$1);
(statearr_13430[9] = inst_13368__$1);
(statearr_13430[10] = inst_13367__$1);
(statearr_13430[11] = inst_13366__$1);
(statearr_13430[14] = inst_13376);
return statearr_13430;
})();var statearr_13431_13460 = state_13409__$1;(statearr_13431_13460[2] = null);
(statearr_13431_13460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 14))
{var inst_13380 = (state_13409[13]);var inst_13382 = cljs.core.chunked_seq_QMARK_.call(null,inst_13380);var state_13409__$1 = state_13409;if(inst_13382)
{var statearr_13432_13461 = state_13409__$1;(statearr_13432_13461[1] = 17);
} else
{var statearr_13433_13462 = state_13409__$1;(statearr_13433_13462[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 15))
{var state_13409__$1 = state_13409;var statearr_13434_13463 = state_13409__$1;(statearr_13434_13463[2] = null);
(statearr_13434_13463[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 16))
{var inst_13398 = (state_13409[2]);var state_13409__$1 = state_13409;var statearr_13435_13464 = state_13409__$1;(statearr_13435_13464[2] = inst_13398);
(statearr_13435_13464[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 17))
{var inst_13380 = (state_13409[13]);var inst_13384 = cljs.core.chunk_first.call(null,inst_13380);var inst_13385 = cljs.core.chunk_rest.call(null,inst_13380);var inst_13386 = cljs.core.count.call(null,inst_13384);var inst_13366 = inst_13385;var inst_13367 = inst_13384;var inst_13368 = inst_13386;var inst_13369 = 0;var state_13409__$1 = (function (){var statearr_13436 = state_13409;(statearr_13436[8] = inst_13369);
(statearr_13436[9] = inst_13368);
(statearr_13436[10] = inst_13367);
(statearr_13436[11] = inst_13366);
return statearr_13436;
})();var statearr_13437_13465 = state_13409__$1;(statearr_13437_13465[2] = null);
(statearr_13437_13465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 18))
{var inst_13380 = (state_13409[13]);var inst_13389 = cljs.core.first.call(null,inst_13380);var state_13409__$1 = state_13409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13409__$1,20,out,inst_13389);
} else
{if((state_val_13410 === 19))
{var inst_13395 = (state_13409[2]);var state_13409__$1 = state_13409;var statearr_13438_13466 = state_13409__$1;(statearr_13438_13466[2] = inst_13395);
(statearr_13438_13466[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13410 === 20))
{var inst_13380 = (state_13409[13]);var inst_13391 = (state_13409[2]);var inst_13392 = cljs.core.next.call(null,inst_13380);var inst_13366 = inst_13392;var inst_13367 = null;var inst_13368 = 0;var inst_13369 = 0;var state_13409__$1 = (function (){var statearr_13439 = state_13409;(statearr_13439[8] = inst_13369);
(statearr_13439[9] = inst_13368);
(statearr_13439[15] = inst_13391);
(statearr_13439[10] = inst_13367);
(statearr_13439[11] = inst_13366);
return statearr_13439;
})();var statearr_13440_13467 = state_13409__$1;(statearr_13440_13467[2] = null);
(statearr_13440_13467[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13444[0] = state_machine__5507__auto__);
(statearr_13444[1] = 1);
return statearr_13444;
});
var state_machine__5507__auto____1 = (function (state_13409){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13409);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13445){if((e13445 instanceof Object))
{var ex__5510__auto__ = e13445;var statearr_13446_13468 = state_13409;(statearr_13446_13468[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13469 = state_13409;
state_13409 = G__13469;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13409){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13447 = f__5522__auto__.call(null);(statearr_13447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13447;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13550 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13529){var state_val_13530 = (state_13529[1]);if((state_val_13530 === 1))
{var state_13529__$1 = state_13529;var statearr_13531_13551 = state_13529__$1;(statearr_13531_13551[2] = null);
(statearr_13531_13551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 2))
{var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13529__$1,4,from);
} else
{if((state_val_13530 === 3))
{var inst_13527 = (state_13529[2]);var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13529__$1,inst_13527);
} else
{if((state_val_13530 === 4))
{var inst_13512 = (state_13529[7]);var inst_13512__$1 = (state_13529[2]);var inst_13513 = (inst_13512__$1 == null);var state_13529__$1 = (function (){var statearr_13532 = state_13529;(statearr_13532[7] = inst_13512__$1);
return statearr_13532;
})();if(cljs.core.truth_(inst_13513))
{var statearr_13533_13552 = state_13529__$1;(statearr_13533_13552[1] = 5);
} else
{var statearr_13534_13553 = state_13529__$1;(statearr_13534_13553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 5))
{var state_13529__$1 = state_13529;if(cljs.core.truth_(close_QMARK_))
{var statearr_13535_13554 = state_13529__$1;(statearr_13535_13554[1] = 8);
} else
{var statearr_13536_13555 = state_13529__$1;(statearr_13536_13555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 6))
{var inst_13512 = (state_13529[7]);var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13529__$1,11,to,inst_13512);
} else
{if((state_val_13530 === 7))
{var inst_13525 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13537_13556 = state_13529__$1;(statearr_13537_13556[2] = inst_13525);
(statearr_13537_13556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 8))
{var inst_13516 = cljs.core.async.close_BANG_.call(null,to);var state_13529__$1 = state_13529;var statearr_13538_13557 = state_13529__$1;(statearr_13538_13557[2] = inst_13516);
(statearr_13538_13557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 9))
{var state_13529__$1 = state_13529;var statearr_13539_13558 = state_13529__$1;(statearr_13539_13558[2] = null);
(statearr_13539_13558[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 10))
{var inst_13519 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13540_13559 = state_13529__$1;(statearr_13540_13559[2] = inst_13519);
(statearr_13540_13559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 11))
{var inst_13522 = (state_13529[2]);var state_13529__$1 = (function (){var statearr_13541 = state_13529;(statearr_13541[8] = inst_13522);
return statearr_13541;
})();var statearr_13542_13560 = state_13529__$1;(statearr_13542_13560[2] = null);
(statearr_13542_13560[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13546 = [null,null,null,null,null,null,null,null,null];(statearr_13546[0] = state_machine__5507__auto__);
(statearr_13546[1] = 1);
return statearr_13546;
});
var state_machine__5507__auto____1 = (function (state_13529){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13529);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13547){if((e13547 instanceof Object))
{var ex__5510__auto__ = e13547;var statearr_13548_13561 = state_13529;(statearr_13548_13561[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13562 = state_13529;
state_13529 = G__13562;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13529){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13549 = f__5522__auto__.call(null);(statearr_13549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13550);
return statearr_13549;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13627){var state_val_13628 = (state_13627[1]);if((state_val_13628 === 1))
{var state_13627__$1 = state_13627;var statearr_13629_13650 = state_13627__$1;(statearr_13629_13650[2] = null);
(statearr_13629_13650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 2))
{var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13627__$1,4,ch);
} else
{if((state_val_13628 === 3))
{var inst_13625 = (state_13627[2]);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13627__$1,inst_13625);
} else
{if((state_val_13628 === 4))
{var inst_13608 = (state_13627[7]);var inst_13608__$1 = (state_13627[2]);var inst_13609 = (inst_13608__$1 == null);var state_13627__$1 = (function (){var statearr_13630 = state_13627;(statearr_13630[7] = inst_13608__$1);
return statearr_13630;
})();if(cljs.core.truth_(inst_13609))
{var statearr_13631_13651 = state_13627__$1;(statearr_13631_13651[1] = 5);
} else
{var statearr_13632_13652 = state_13627__$1;(statearr_13632_13652[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 5))
{var inst_13611 = cljs.core.async.close_BANG_.call(null,tc);var inst_13612 = cljs.core.async.close_BANG_.call(null,fc);var state_13627__$1 = (function (){var statearr_13633 = state_13627;(statearr_13633[8] = inst_13611);
return statearr_13633;
})();var statearr_13634_13653 = state_13627__$1;(statearr_13634_13653[2] = inst_13612);
(statearr_13634_13653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 6))
{var inst_13608 = (state_13627[7]);var inst_13614 = p.call(null,inst_13608);var state_13627__$1 = state_13627;if(cljs.core.truth_(inst_13614))
{var statearr_13635_13654 = state_13627__$1;(statearr_13635_13654[1] = 9);
} else
{var statearr_13636_13655 = state_13627__$1;(statearr_13636_13655[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 7))
{var inst_13623 = (state_13627[2]);var state_13627__$1 = state_13627;var statearr_13637_13656 = state_13627__$1;(statearr_13637_13656[2] = inst_13623);
(statearr_13637_13656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 8))
{var inst_13620 = (state_13627[2]);var state_13627__$1 = (function (){var statearr_13638 = state_13627;(statearr_13638[9] = inst_13620);
return statearr_13638;
})();var statearr_13639_13657 = state_13627__$1;(statearr_13639_13657[2] = null);
(statearr_13639_13657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 9))
{var state_13627__$1 = state_13627;var statearr_13640_13658 = state_13627__$1;(statearr_13640_13658[2] = tc);
(statearr_13640_13658[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 10))
{var state_13627__$1 = state_13627;var statearr_13641_13659 = state_13627__$1;(statearr_13641_13659[2] = fc);
(statearr_13641_13659[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 11))
{var inst_13608 = (state_13627[7]);var inst_13618 = (state_13627[2]);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,8,inst_13618,inst_13608);
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
var state_machine__5507__auto____0 = (function (){var statearr_13645 = [null,null,null,null,null,null,null,null,null,null];(statearr_13645[0] = state_machine__5507__auto__);
(statearr_13645[1] = 1);
return statearr_13645;
});
var state_machine__5507__auto____1 = (function (state_13627){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13627);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13646){if((e13646 instanceof Object))
{var ex__5510__auto__ = e13646;var statearr_13647_13660 = state_13627;(statearr_13647_13660[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13661 = state_13627;
state_13627 = G__13661;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13627){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13648 = f__5522__auto__.call(null);(statearr_13648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13649);
return statearr_13648;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13708){var state_val_13709 = (state_13708[1]);if((state_val_13709 === 7))
{var inst_13704 = (state_13708[2]);var state_13708__$1 = state_13708;var statearr_13710_13726 = state_13708__$1;(statearr_13710_13726[2] = inst_13704);
(statearr_13710_13726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13709 === 6))
{var inst_13694 = (state_13708[7]);var inst_13697 = (state_13708[8]);var inst_13701 = f.call(null,inst_13694,inst_13697);var inst_13694__$1 = inst_13701;var state_13708__$1 = (function (){var statearr_13711 = state_13708;(statearr_13711[7] = inst_13694__$1);
return statearr_13711;
})();var statearr_13712_13727 = state_13708__$1;(statearr_13712_13727[2] = null);
(statearr_13712_13727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13709 === 5))
{var inst_13694 = (state_13708[7]);var state_13708__$1 = state_13708;var statearr_13713_13728 = state_13708__$1;(statearr_13713_13728[2] = inst_13694);
(statearr_13713_13728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13709 === 4))
{var inst_13697 = (state_13708[8]);var inst_13697__$1 = (state_13708[2]);var inst_13698 = (inst_13697__$1 == null);var state_13708__$1 = (function (){var statearr_13714 = state_13708;(statearr_13714[8] = inst_13697__$1);
return statearr_13714;
})();if(cljs.core.truth_(inst_13698))
{var statearr_13715_13729 = state_13708__$1;(statearr_13715_13729[1] = 5);
} else
{var statearr_13716_13730 = state_13708__$1;(statearr_13716_13730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13709 === 3))
{var inst_13706 = (state_13708[2]);var state_13708__$1 = state_13708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13708__$1,inst_13706);
} else
{if((state_val_13709 === 2))
{var state_13708__$1 = state_13708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13708__$1,4,ch);
} else
{if((state_val_13709 === 1))
{var inst_13694 = init;var state_13708__$1 = (function (){var statearr_13717 = state_13708;(statearr_13717[7] = inst_13694);
return statearr_13717;
})();var statearr_13718_13731 = state_13708__$1;(statearr_13718_13731[2] = null);
(statearr_13718_13731[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13722 = [null,null,null,null,null,null,null,null,null];(statearr_13722[0] = state_machine__5507__auto__);
(statearr_13722[1] = 1);
return statearr_13722;
});
var state_machine__5507__auto____1 = (function (state_13708){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13708);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13723){if((e13723 instanceof Object))
{var ex__5510__auto__ = e13723;var statearr_13724_13732 = state_13708;(statearr_13724_13732[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13733 = state_13708;
state_13708 = G__13733;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13708){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13725 = f__5522__auto__.call(null);(statearr_13725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13725;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13795){var state_val_13796 = (state_13795[1]);if((state_val_13796 === 1))
{var inst_13775 = cljs.core.seq.call(null,coll);var inst_13776 = inst_13775;var state_13795__$1 = (function (){var statearr_13797 = state_13795;(statearr_13797[7] = inst_13776);
return statearr_13797;
})();var statearr_13798_13816 = state_13795__$1;(statearr_13798_13816[2] = null);
(statearr_13798_13816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 2))
{var inst_13776 = (state_13795[7]);var state_13795__$1 = state_13795;if(cljs.core.truth_(inst_13776))
{var statearr_13799_13817 = state_13795__$1;(statearr_13799_13817[1] = 4);
} else
{var statearr_13800_13818 = state_13795__$1;(statearr_13800_13818[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 3))
{var inst_13793 = (state_13795[2]);var state_13795__$1 = state_13795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13795__$1,inst_13793);
} else
{if((state_val_13796 === 4))
{var inst_13776 = (state_13795[7]);var inst_13779 = cljs.core.first.call(null,inst_13776);var state_13795__$1 = state_13795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13795__$1,7,ch,inst_13779);
} else
{if((state_val_13796 === 5))
{var state_13795__$1 = state_13795;if(cljs.core.truth_(close_QMARK_))
{var statearr_13801_13819 = state_13795__$1;(statearr_13801_13819[1] = 8);
} else
{var statearr_13802_13820 = state_13795__$1;(statearr_13802_13820[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 6))
{var inst_13791 = (state_13795[2]);var state_13795__$1 = state_13795;var statearr_13803_13821 = state_13795__$1;(statearr_13803_13821[2] = inst_13791);
(statearr_13803_13821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 7))
{var inst_13776 = (state_13795[7]);var inst_13781 = (state_13795[2]);var inst_13782 = cljs.core.next.call(null,inst_13776);var inst_13776__$1 = inst_13782;var state_13795__$1 = (function (){var statearr_13804 = state_13795;(statearr_13804[8] = inst_13781);
(statearr_13804[7] = inst_13776__$1);
return statearr_13804;
})();var statearr_13805_13822 = state_13795__$1;(statearr_13805_13822[2] = null);
(statearr_13805_13822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 8))
{var inst_13786 = cljs.core.async.close_BANG_.call(null,ch);var state_13795__$1 = state_13795;var statearr_13806_13823 = state_13795__$1;(statearr_13806_13823[2] = inst_13786);
(statearr_13806_13823[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 9))
{var state_13795__$1 = state_13795;var statearr_13807_13824 = state_13795__$1;(statearr_13807_13824[2] = null);
(statearr_13807_13824[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 10))
{var inst_13789 = (state_13795[2]);var state_13795__$1 = state_13795;var statearr_13808_13825 = state_13795__$1;(statearr_13808_13825[2] = inst_13789);
(statearr_13808_13825[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13812 = [null,null,null,null,null,null,null,null,null];(statearr_13812[0] = state_machine__5507__auto__);
(statearr_13812[1] = 1);
return statearr_13812;
});
var state_machine__5507__auto____1 = (function (state_13795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13813){if((e13813 instanceof Object))
{var ex__5510__auto__ = e13813;var statearr_13814_13826 = state_13795;(statearr_13814_13826[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13827 = state_13795;
state_13795 = G__13827;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13815 = f__5522__auto__.call(null);(statearr_13815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13815;
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
cljs.core.async.Mux = (function (){var obj13829 = {};return obj13829;
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
cljs.core.async.Mult = (function (){var obj13831 = {};return obj13831;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14055 = (function (cs,ch,mult,meta14056){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14056 = meta14056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14055.cljs$lang$type = true;
cljs.core.async.t14055.cljs$lang$ctorStr = "cljs.core.async/t14055";
cljs.core.async.t14055.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14055");
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14057){var self__ = this;
var _14057__$1 = this;return self__.meta14056;
});})(cs))
;
cljs.core.async.t14055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14057,meta14056__$1){var self__ = this;
var _14057__$1 = this;return (new cljs.core.async.t14055(self__.cs,self__.ch,self__.mult,meta14056__$1));
});})(cs))
;
cljs.core.async.__GT_t14055 = ((function (cs){
return (function __GT_t14055(cs__$1,ch__$1,mult__$1,meta14056){return (new cljs.core.async.t14055(cs__$1,ch__$1,mult__$1,meta14056));
});})(cs))
;
}
return (new cljs.core.async.t14055(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14192){var state_val_14193 = (state_14192[1]);if((state_val_14193 === 32))
{var inst_14136 = (state_14192[7]);var inst_14060 = (state_14192[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14192,31,Object,null,30);var inst_14143 = cljs.core.async.put_BANG_.call(null,inst_14136,inst_14060,done);var state_14192__$1 = state_14192;var statearr_14194_14279 = state_14192__$1;(statearr_14194_14279[2] = inst_14143);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 1))
{var state_14192__$1 = state_14192;var statearr_14195_14280 = state_14192__$1;(statearr_14195_14280[2] = null);
(statearr_14195_14280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 33))
{var inst_14149 = (state_14192[9]);var inst_14151 = cljs.core.chunked_seq_QMARK_.call(null,inst_14149);var state_14192__$1 = state_14192;if(inst_14151)
{var statearr_14196_14281 = state_14192__$1;(statearr_14196_14281[1] = 36);
} else
{var statearr_14197_14282 = state_14192__$1;(statearr_14197_14282[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 2))
{var state_14192__$1 = state_14192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14192__$1,4,ch);
} else
{if((state_val_14193 === 34))
{var state_14192__$1 = state_14192;var statearr_14198_14283 = state_14192__$1;(statearr_14198_14283[2] = null);
(statearr_14198_14283[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 3))
{var inst_14190 = (state_14192[2]);var state_14192__$1 = state_14192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14192__$1,inst_14190);
} else
{if((state_val_14193 === 35))
{var inst_14174 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14199_14284 = state_14192__$1;(statearr_14199_14284[2] = inst_14174);
(statearr_14199_14284[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 4))
{var inst_14060 = (state_14192[8]);var inst_14060__$1 = (state_14192[2]);var inst_14061 = (inst_14060__$1 == null);var state_14192__$1 = (function (){var statearr_14200 = state_14192;(statearr_14200[8] = inst_14060__$1);
return statearr_14200;
})();if(cljs.core.truth_(inst_14061))
{var statearr_14201_14285 = state_14192__$1;(statearr_14201_14285[1] = 5);
} else
{var statearr_14202_14286 = state_14192__$1;(statearr_14202_14286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 36))
{var inst_14149 = (state_14192[9]);var inst_14153 = cljs.core.chunk_first.call(null,inst_14149);var inst_14154 = cljs.core.chunk_rest.call(null,inst_14149);var inst_14155 = cljs.core.count.call(null,inst_14153);var inst_14128 = inst_14154;var inst_14129 = inst_14153;var inst_14130 = inst_14155;var inst_14131 = 0;var state_14192__$1 = (function (){var statearr_14203 = state_14192;(statearr_14203[10] = inst_14129);
(statearr_14203[11] = inst_14128);
(statearr_14203[12] = inst_14131);
(statearr_14203[13] = inst_14130);
return statearr_14203;
})();var statearr_14204_14287 = state_14192__$1;(statearr_14204_14287[2] = null);
(statearr_14204_14287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 5))
{var inst_14067 = cljs.core.deref.call(null,cs);var inst_14068 = cljs.core.seq.call(null,inst_14067);var inst_14069 = inst_14068;var inst_14070 = null;var inst_14071 = 0;var inst_14072 = 0;var state_14192__$1 = (function (){var statearr_14205 = state_14192;(statearr_14205[14] = inst_14070);
(statearr_14205[15] = inst_14071);
(statearr_14205[16] = inst_14072);
(statearr_14205[17] = inst_14069);
return statearr_14205;
})();var statearr_14206_14288 = state_14192__$1;(statearr_14206_14288[2] = null);
(statearr_14206_14288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 37))
{var inst_14149 = (state_14192[9]);var inst_14158 = cljs.core.first.call(null,inst_14149);var state_14192__$1 = (function (){var statearr_14207 = state_14192;(statearr_14207[18] = inst_14158);
return statearr_14207;
})();var statearr_14208_14289 = state_14192__$1;(statearr_14208_14289[2] = null);
(statearr_14208_14289[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 6))
{var inst_14120 = (state_14192[19]);var inst_14119 = cljs.core.deref.call(null,cs);var inst_14120__$1 = cljs.core.keys.call(null,inst_14119);var inst_14121 = cljs.core.count.call(null,inst_14120__$1);var inst_14122 = cljs.core.reset_BANG_.call(null,dctr,inst_14121);var inst_14127 = cljs.core.seq.call(null,inst_14120__$1);var inst_14128 = inst_14127;var inst_14129 = null;var inst_14130 = 0;var inst_14131 = 0;var state_14192__$1 = (function (){var statearr_14209 = state_14192;(statearr_14209[20] = inst_14122);
(statearr_14209[10] = inst_14129);
(statearr_14209[19] = inst_14120__$1);
(statearr_14209[11] = inst_14128);
(statearr_14209[12] = inst_14131);
(statearr_14209[13] = inst_14130);
return statearr_14209;
})();var statearr_14210_14290 = state_14192__$1;(statearr_14210_14290[2] = null);
(statearr_14210_14290[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 38))
{var inst_14171 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14211_14291 = state_14192__$1;(statearr_14211_14291[2] = inst_14171);
(statearr_14211_14291[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 7))
{var inst_14188 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14212_14292 = state_14192__$1;(statearr_14212_14292[2] = inst_14188);
(statearr_14212_14292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 39))
{var inst_14149 = (state_14192[9]);var inst_14167 = (state_14192[2]);var inst_14168 = cljs.core.next.call(null,inst_14149);var inst_14128 = inst_14168;var inst_14129 = null;var inst_14130 = 0;var inst_14131 = 0;var state_14192__$1 = (function (){var statearr_14213 = state_14192;(statearr_14213[21] = inst_14167);
(statearr_14213[10] = inst_14129);
(statearr_14213[11] = inst_14128);
(statearr_14213[12] = inst_14131);
(statearr_14213[13] = inst_14130);
return statearr_14213;
})();var statearr_14214_14293 = state_14192__$1;(statearr_14214_14293[2] = null);
(statearr_14214_14293[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 8))
{var inst_14071 = (state_14192[15]);var inst_14072 = (state_14192[16]);var inst_14074 = (inst_14072 < inst_14071);var inst_14075 = inst_14074;var state_14192__$1 = state_14192;if(cljs.core.truth_(inst_14075))
{var statearr_14215_14294 = state_14192__$1;(statearr_14215_14294[1] = 10);
} else
{var statearr_14216_14295 = state_14192__$1;(statearr_14216_14295[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 40))
{var inst_14158 = (state_14192[18]);var inst_14159 = (state_14192[2]);var inst_14160 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14161 = cljs.core.async.untap_STAR_.call(null,m,inst_14158);var state_14192__$1 = (function (){var statearr_14217 = state_14192;(statearr_14217[22] = inst_14159);
(statearr_14217[23] = inst_14160);
return statearr_14217;
})();var statearr_14218_14296 = state_14192__$1;(statearr_14218_14296[2] = inst_14161);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 9))
{var inst_14117 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14219_14297 = state_14192__$1;(statearr_14219_14297[2] = inst_14117);
(statearr_14219_14297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 41))
{var inst_14060 = (state_14192[8]);var inst_14158 = (state_14192[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14192,40,Object,null,39);var inst_14165 = cljs.core.async.put_BANG_.call(null,inst_14158,inst_14060,done);var state_14192__$1 = state_14192;var statearr_14220_14298 = state_14192__$1;(statearr_14220_14298[2] = inst_14165);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 10))
{var inst_14070 = (state_14192[14]);var inst_14072 = (state_14192[16]);var inst_14078 = cljs.core._nth.call(null,inst_14070,inst_14072);var inst_14079 = cljs.core.nth.call(null,inst_14078,0,null);var inst_14080 = cljs.core.nth.call(null,inst_14078,1,null);var state_14192__$1 = (function (){var statearr_14221 = state_14192;(statearr_14221[24] = inst_14079);
return statearr_14221;
})();if(cljs.core.truth_(inst_14080))
{var statearr_14222_14299 = state_14192__$1;(statearr_14222_14299[1] = 13);
} else
{var statearr_14223_14300 = state_14192__$1;(statearr_14223_14300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 42))
{var state_14192__$1 = state_14192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14192__$1,45,dchan);
} else
{if((state_val_14193 === 11))
{var inst_14089 = (state_14192[25]);var inst_14069 = (state_14192[17]);var inst_14089__$1 = cljs.core.seq.call(null,inst_14069);var state_14192__$1 = (function (){var statearr_14224 = state_14192;(statearr_14224[25] = inst_14089__$1);
return statearr_14224;
})();if(inst_14089__$1)
{var statearr_14225_14301 = state_14192__$1;(statearr_14225_14301[1] = 16);
} else
{var statearr_14226_14302 = state_14192__$1;(statearr_14226_14302[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 43))
{var state_14192__$1 = state_14192;var statearr_14227_14303 = state_14192__$1;(statearr_14227_14303[2] = null);
(statearr_14227_14303[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 12))
{var inst_14115 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14228_14304 = state_14192__$1;(statearr_14228_14304[2] = inst_14115);
(statearr_14228_14304[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 44))
{var inst_14185 = (state_14192[2]);var state_14192__$1 = (function (){var statearr_14229 = state_14192;(statearr_14229[26] = inst_14185);
return statearr_14229;
})();var statearr_14230_14305 = state_14192__$1;(statearr_14230_14305[2] = null);
(statearr_14230_14305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 13))
{var inst_14079 = (state_14192[24]);var inst_14082 = cljs.core.async.close_BANG_.call(null,inst_14079);var state_14192__$1 = state_14192;var statearr_14231_14306 = state_14192__$1;(statearr_14231_14306[2] = inst_14082);
(statearr_14231_14306[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 45))
{var inst_14182 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14235_14307 = state_14192__$1;(statearr_14235_14307[2] = inst_14182);
(statearr_14235_14307[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 14))
{var state_14192__$1 = state_14192;var statearr_14236_14308 = state_14192__$1;(statearr_14236_14308[2] = null);
(statearr_14236_14308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 15))
{var inst_14070 = (state_14192[14]);var inst_14071 = (state_14192[15]);var inst_14072 = (state_14192[16]);var inst_14069 = (state_14192[17]);var inst_14085 = (state_14192[2]);var inst_14086 = (inst_14072 + 1);var tmp14232 = inst_14070;var tmp14233 = inst_14071;var tmp14234 = inst_14069;var inst_14069__$1 = tmp14234;var inst_14070__$1 = tmp14232;var inst_14071__$1 = tmp14233;var inst_14072__$1 = inst_14086;var state_14192__$1 = (function (){var statearr_14237 = state_14192;(statearr_14237[14] = inst_14070__$1);
(statearr_14237[15] = inst_14071__$1);
(statearr_14237[16] = inst_14072__$1);
(statearr_14237[27] = inst_14085);
(statearr_14237[17] = inst_14069__$1);
return statearr_14237;
})();var statearr_14238_14309 = state_14192__$1;(statearr_14238_14309[2] = null);
(statearr_14238_14309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 16))
{var inst_14089 = (state_14192[25]);var inst_14091 = cljs.core.chunked_seq_QMARK_.call(null,inst_14089);var state_14192__$1 = state_14192;if(inst_14091)
{var statearr_14239_14310 = state_14192__$1;(statearr_14239_14310[1] = 19);
} else
{var statearr_14240_14311 = state_14192__$1;(statearr_14240_14311[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 17))
{var state_14192__$1 = state_14192;var statearr_14241_14312 = state_14192__$1;(statearr_14241_14312[2] = null);
(statearr_14241_14312[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 18))
{var inst_14113 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14242_14313 = state_14192__$1;(statearr_14242_14313[2] = inst_14113);
(statearr_14242_14313[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 19))
{var inst_14089 = (state_14192[25]);var inst_14093 = cljs.core.chunk_first.call(null,inst_14089);var inst_14094 = cljs.core.chunk_rest.call(null,inst_14089);var inst_14095 = cljs.core.count.call(null,inst_14093);var inst_14069 = inst_14094;var inst_14070 = inst_14093;var inst_14071 = inst_14095;var inst_14072 = 0;var state_14192__$1 = (function (){var statearr_14243 = state_14192;(statearr_14243[14] = inst_14070);
(statearr_14243[15] = inst_14071);
(statearr_14243[16] = inst_14072);
(statearr_14243[17] = inst_14069);
return statearr_14243;
})();var statearr_14244_14314 = state_14192__$1;(statearr_14244_14314[2] = null);
(statearr_14244_14314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 20))
{var inst_14089 = (state_14192[25]);var inst_14099 = cljs.core.first.call(null,inst_14089);var inst_14100 = cljs.core.nth.call(null,inst_14099,0,null);var inst_14101 = cljs.core.nth.call(null,inst_14099,1,null);var state_14192__$1 = (function (){var statearr_14245 = state_14192;(statearr_14245[28] = inst_14100);
return statearr_14245;
})();if(cljs.core.truth_(inst_14101))
{var statearr_14246_14315 = state_14192__$1;(statearr_14246_14315[1] = 22);
} else
{var statearr_14247_14316 = state_14192__$1;(statearr_14247_14316[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 21))
{var inst_14110 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14248_14317 = state_14192__$1;(statearr_14248_14317[2] = inst_14110);
(statearr_14248_14317[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 22))
{var inst_14100 = (state_14192[28]);var inst_14103 = cljs.core.async.close_BANG_.call(null,inst_14100);var state_14192__$1 = state_14192;var statearr_14249_14318 = state_14192__$1;(statearr_14249_14318[2] = inst_14103);
(statearr_14249_14318[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 23))
{var state_14192__$1 = state_14192;var statearr_14250_14319 = state_14192__$1;(statearr_14250_14319[2] = null);
(statearr_14250_14319[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 24))
{var inst_14089 = (state_14192[25]);var inst_14106 = (state_14192[2]);var inst_14107 = cljs.core.next.call(null,inst_14089);var inst_14069 = inst_14107;var inst_14070 = null;var inst_14071 = 0;var inst_14072 = 0;var state_14192__$1 = (function (){var statearr_14251 = state_14192;(statearr_14251[14] = inst_14070);
(statearr_14251[15] = inst_14071);
(statearr_14251[16] = inst_14072);
(statearr_14251[17] = inst_14069);
(statearr_14251[29] = inst_14106);
return statearr_14251;
})();var statearr_14252_14320 = state_14192__$1;(statearr_14252_14320[2] = null);
(statearr_14252_14320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 25))
{var inst_14131 = (state_14192[12]);var inst_14130 = (state_14192[13]);var inst_14133 = (inst_14131 < inst_14130);var inst_14134 = inst_14133;var state_14192__$1 = state_14192;if(cljs.core.truth_(inst_14134))
{var statearr_14253_14321 = state_14192__$1;(statearr_14253_14321[1] = 27);
} else
{var statearr_14254_14322 = state_14192__$1;(statearr_14254_14322[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 26))
{var inst_14120 = (state_14192[19]);var inst_14178 = (state_14192[2]);var inst_14179 = cljs.core.seq.call(null,inst_14120);var state_14192__$1 = (function (){var statearr_14255 = state_14192;(statearr_14255[30] = inst_14178);
return statearr_14255;
})();if(inst_14179)
{var statearr_14256_14323 = state_14192__$1;(statearr_14256_14323[1] = 42);
} else
{var statearr_14257_14324 = state_14192__$1;(statearr_14257_14324[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 27))
{var inst_14129 = (state_14192[10]);var inst_14131 = (state_14192[12]);var inst_14136 = cljs.core._nth.call(null,inst_14129,inst_14131);var state_14192__$1 = (function (){var statearr_14258 = state_14192;(statearr_14258[7] = inst_14136);
return statearr_14258;
})();var statearr_14259_14325 = state_14192__$1;(statearr_14259_14325[2] = null);
(statearr_14259_14325[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 28))
{var inst_14128 = (state_14192[11]);var inst_14149 = (state_14192[9]);var inst_14149__$1 = cljs.core.seq.call(null,inst_14128);var state_14192__$1 = (function (){var statearr_14263 = state_14192;(statearr_14263[9] = inst_14149__$1);
return statearr_14263;
})();if(inst_14149__$1)
{var statearr_14264_14326 = state_14192__$1;(statearr_14264_14326[1] = 33);
} else
{var statearr_14265_14327 = state_14192__$1;(statearr_14265_14327[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 29))
{var inst_14176 = (state_14192[2]);var state_14192__$1 = state_14192;var statearr_14266_14328 = state_14192__$1;(statearr_14266_14328[2] = inst_14176);
(statearr_14266_14328[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 30))
{var inst_14129 = (state_14192[10]);var inst_14128 = (state_14192[11]);var inst_14131 = (state_14192[12]);var inst_14130 = (state_14192[13]);var inst_14145 = (state_14192[2]);var inst_14146 = (inst_14131 + 1);var tmp14260 = inst_14129;var tmp14261 = inst_14128;var tmp14262 = inst_14130;var inst_14128__$1 = tmp14261;var inst_14129__$1 = tmp14260;var inst_14130__$1 = tmp14262;var inst_14131__$1 = inst_14146;var state_14192__$1 = (function (){var statearr_14267 = state_14192;(statearr_14267[10] = inst_14129__$1);
(statearr_14267[11] = inst_14128__$1);
(statearr_14267[12] = inst_14131__$1);
(statearr_14267[13] = inst_14130__$1);
(statearr_14267[31] = inst_14145);
return statearr_14267;
})();var statearr_14268_14329 = state_14192__$1;(statearr_14268_14329[2] = null);
(statearr_14268_14329[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14193 === 31))
{var inst_14136 = (state_14192[7]);var inst_14137 = (state_14192[2]);var inst_14138 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14139 = cljs.core.async.untap_STAR_.call(null,m,inst_14136);var state_14192__$1 = (function (){var statearr_14269 = state_14192;(statearr_14269[32] = inst_14138);
(statearr_14269[33] = inst_14137);
return statearr_14269;
})();var statearr_14270_14330 = state_14192__$1;(statearr_14270_14330[2] = inst_14139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14274[0] = state_machine__5507__auto__);
(statearr_14274[1] = 1);
return statearr_14274;
});
var state_machine__5507__auto____1 = (function (state_14192){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14192);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14275){if((e14275 instanceof Object))
{var ex__5510__auto__ = e14275;var statearr_14276_14331 = state_14192;(statearr_14276_14331[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14332 = state_14192;
state_14192 = G__14332;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14192){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14277 = f__5522__auto__.call(null);(statearr_14277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14278);
return statearr_14277;
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
cljs.core.async.Mix = (function (){var obj14334 = {};return obj14334;
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
;var m = (function (){if(typeof cljs.core.async.t14444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14444 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14445){
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
this.meta14445 = meta14445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14444.cljs$lang$type = true;
cljs.core.async.t14444.cljs$lang$ctorStr = "cljs.core.async/t14444";
cljs.core.async.t14444.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14444");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14446){var self__ = this;
var _14446__$1 = this;return self__.meta14445;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14446,meta14445__$1){var self__ = this;
var _14446__$1 = this;return (new cljs.core.async.t14444(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14445__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14444 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14444(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14445){return (new cljs.core.async.t14444(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14445));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14444(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14553 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14511){var state_val_14512 = (state_14511[1]);if((state_val_14512 === 1))
{var inst_14450 = (state_14511[7]);var inst_14450__$1 = calc_state.call(null);var inst_14451 = cljs.core.seq_QMARK_.call(null,inst_14450__$1);var state_14511__$1 = (function (){var statearr_14513 = state_14511;(statearr_14513[7] = inst_14450__$1);
return statearr_14513;
})();if(inst_14451)
{var statearr_14514_14554 = state_14511__$1;(statearr_14514_14554[1] = 2);
} else
{var statearr_14515_14555 = state_14511__$1;(statearr_14515_14555[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 2))
{var inst_14450 = (state_14511[7]);var inst_14453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14450);var state_14511__$1 = state_14511;var statearr_14516_14556 = state_14511__$1;(statearr_14516_14556[2] = inst_14453);
(statearr_14516_14556[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 3))
{var inst_14450 = (state_14511[7]);var state_14511__$1 = state_14511;var statearr_14517_14557 = state_14511__$1;(statearr_14517_14557[2] = inst_14450);
(statearr_14517_14557[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 4))
{var inst_14450 = (state_14511[7]);var inst_14456 = (state_14511[2]);var inst_14457 = cljs.core.get.call(null,inst_14456,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14458 = cljs.core.get.call(null,inst_14456,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14459 = cljs.core.get.call(null,inst_14456,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14460 = inst_14450;var state_14511__$1 = (function (){var statearr_14518 = state_14511;(statearr_14518[8] = inst_14458);
(statearr_14518[9] = inst_14457);
(statearr_14518[10] = inst_14460);
(statearr_14518[11] = inst_14459);
return statearr_14518;
})();var statearr_14519_14558 = state_14511__$1;(statearr_14519_14558[2] = null);
(statearr_14519_14558[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 5))
{var inst_14460 = (state_14511[10]);var inst_14463 = cljs.core.seq_QMARK_.call(null,inst_14460);var state_14511__$1 = state_14511;if(inst_14463)
{var statearr_14520_14559 = state_14511__$1;(statearr_14520_14559[1] = 7);
} else
{var statearr_14521_14560 = state_14511__$1;(statearr_14521_14560[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 6))
{var inst_14509 = (state_14511[2]);var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14511__$1,inst_14509);
} else
{if((state_val_14512 === 7))
{var inst_14460 = (state_14511[10]);var inst_14465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14460);var state_14511__$1 = state_14511;var statearr_14522_14561 = state_14511__$1;(statearr_14522_14561[2] = inst_14465);
(statearr_14522_14561[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 8))
{var inst_14460 = (state_14511[10]);var state_14511__$1 = state_14511;var statearr_14523_14562 = state_14511__$1;(statearr_14523_14562[2] = inst_14460);
(statearr_14523_14562[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 9))
{var inst_14468 = (state_14511[12]);var inst_14468__$1 = (state_14511[2]);var inst_14469 = cljs.core.get.call(null,inst_14468__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14470 = cljs.core.get.call(null,inst_14468__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14471 = cljs.core.get.call(null,inst_14468__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14511__$1 = (function (){var statearr_14524 = state_14511;(statearr_14524[13] = inst_14470);
(statearr_14524[12] = inst_14468__$1);
(statearr_14524[14] = inst_14471);
return statearr_14524;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14511__$1,10,inst_14469);
} else
{if((state_val_14512 === 10))
{var inst_14475 = (state_14511[15]);var inst_14476 = (state_14511[16]);var inst_14474 = (state_14511[2]);var inst_14475__$1 = cljs.core.nth.call(null,inst_14474,0,null);var inst_14476__$1 = cljs.core.nth.call(null,inst_14474,1,null);var inst_14477 = (inst_14475__$1 == null);var inst_14478 = cljs.core._EQ_.call(null,inst_14476__$1,change);var inst_14479 = (inst_14477) || (inst_14478);var state_14511__$1 = (function (){var statearr_14525 = state_14511;(statearr_14525[15] = inst_14475__$1);
(statearr_14525[16] = inst_14476__$1);
return statearr_14525;
})();if(cljs.core.truth_(inst_14479))
{var statearr_14526_14563 = state_14511__$1;(statearr_14526_14563[1] = 11);
} else
{var statearr_14527_14564 = state_14511__$1;(statearr_14527_14564[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 11))
{var inst_14475 = (state_14511[15]);var inst_14481 = (inst_14475 == null);var state_14511__$1 = state_14511;if(cljs.core.truth_(inst_14481))
{var statearr_14528_14565 = state_14511__$1;(statearr_14528_14565[1] = 14);
} else
{var statearr_14529_14566 = state_14511__$1;(statearr_14529_14566[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 12))
{var inst_14490 = (state_14511[17]);var inst_14476 = (state_14511[16]);var inst_14471 = (state_14511[14]);var inst_14490__$1 = inst_14471.call(null,inst_14476);var state_14511__$1 = (function (){var statearr_14530 = state_14511;(statearr_14530[17] = inst_14490__$1);
return statearr_14530;
})();if(cljs.core.truth_(inst_14490__$1))
{var statearr_14531_14567 = state_14511__$1;(statearr_14531_14567[1] = 17);
} else
{var statearr_14532_14568 = state_14511__$1;(statearr_14532_14568[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 13))
{var inst_14507 = (state_14511[2]);var state_14511__$1 = state_14511;var statearr_14533_14569 = state_14511__$1;(statearr_14533_14569[2] = inst_14507);
(statearr_14533_14569[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 14))
{var inst_14476 = (state_14511[16]);var inst_14483 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14476);var state_14511__$1 = state_14511;var statearr_14534_14570 = state_14511__$1;(statearr_14534_14570[2] = inst_14483);
(statearr_14534_14570[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 15))
{var state_14511__$1 = state_14511;var statearr_14535_14571 = state_14511__$1;(statearr_14535_14571[2] = null);
(statearr_14535_14571[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 16))
{var inst_14486 = (state_14511[2]);var inst_14487 = calc_state.call(null);var inst_14460 = inst_14487;var state_14511__$1 = (function (){var statearr_14536 = state_14511;(statearr_14536[18] = inst_14486);
(statearr_14536[10] = inst_14460);
return statearr_14536;
})();var statearr_14537_14572 = state_14511__$1;(statearr_14537_14572[2] = null);
(statearr_14537_14572[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 17))
{var inst_14490 = (state_14511[17]);var state_14511__$1 = state_14511;var statearr_14538_14573 = state_14511__$1;(statearr_14538_14573[2] = inst_14490);
(statearr_14538_14573[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 18))
{var inst_14476 = (state_14511[16]);var inst_14470 = (state_14511[13]);var inst_14471 = (state_14511[14]);var inst_14493 = cljs.core.empty_QMARK_.call(null,inst_14471);var inst_14494 = inst_14470.call(null,inst_14476);var inst_14495 = cljs.core.not.call(null,inst_14494);var inst_14496 = (inst_14493) && (inst_14495);var state_14511__$1 = state_14511;var statearr_14539_14574 = state_14511__$1;(statearr_14539_14574[2] = inst_14496);
(statearr_14539_14574[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 19))
{var inst_14498 = (state_14511[2]);var state_14511__$1 = state_14511;if(cljs.core.truth_(inst_14498))
{var statearr_14540_14575 = state_14511__$1;(statearr_14540_14575[1] = 20);
} else
{var statearr_14541_14576 = state_14511__$1;(statearr_14541_14576[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 20))
{var inst_14475 = (state_14511[15]);var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14511__$1,23,out,inst_14475);
} else
{if((state_val_14512 === 21))
{var state_14511__$1 = state_14511;var statearr_14542_14577 = state_14511__$1;(statearr_14542_14577[2] = null);
(statearr_14542_14577[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 22))
{var inst_14468 = (state_14511[12]);var inst_14504 = (state_14511[2]);var inst_14460 = inst_14468;var state_14511__$1 = (function (){var statearr_14543 = state_14511;(statearr_14543[19] = inst_14504);
(statearr_14543[10] = inst_14460);
return statearr_14543;
})();var statearr_14544_14578 = state_14511__$1;(statearr_14544_14578[2] = null);
(statearr_14544_14578[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14512 === 23))
{var inst_14501 = (state_14511[2]);var state_14511__$1 = state_14511;var statearr_14545_14579 = state_14511__$1;(statearr_14545_14579[2] = inst_14501);
(statearr_14545_14579[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14549[0] = state_machine__5507__auto__);
(statearr_14549[1] = 1);
return statearr_14549;
});
var state_machine__5507__auto____1 = (function (state_14511){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14511);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14550){if((e14550 instanceof Object))
{var ex__5510__auto__ = e14550;var statearr_14551_14580 = state_14511;(statearr_14551_14580[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14581 = state_14511;
state_14511 = G__14581;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14511){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14552 = f__5522__auto__.call(null);(statearr_14552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14553);
return statearr_14552;
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
cljs.core.async.Pub = (function (){var obj14583 = {};return obj14583;
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
return (function (p1__14584_SHARP_){if(cljs.core.truth_(p1__14584_SHARP_.call(null,topic)))
{return p1__14584_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14584_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14709 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14710){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14710 = meta14710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14709.cljs$lang$type = true;
cljs.core.async.t14709.cljs$lang$ctorStr = "cljs.core.async/t14709";
cljs.core.async.t14709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14709");
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14711){var self__ = this;
var _14711__$1 = this;return self__.meta14710;
});})(mults,ensure_mult))
;
cljs.core.async.t14709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14711,meta14710__$1){var self__ = this;
var _14711__$1 = this;return (new cljs.core.async.t14709(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14710__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14709 = ((function (mults,ensure_mult){
return (function __GT_t14709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14710){return (new cljs.core.async.t14709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14710));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14709(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14785){var state_val_14786 = (state_14785[1]);if((state_val_14786 === 1))
{var state_14785__$1 = state_14785;var statearr_14787_14834 = state_14785__$1;(statearr_14787_14834[2] = null);
(statearr_14787_14834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 2))
{var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14785__$1,4,ch);
} else
{if((state_val_14786 === 3))
{var inst_14783 = (state_14785[2]);var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14785__$1,inst_14783);
} else
{if((state_val_14786 === 4))
{var inst_14714 = (state_14785[7]);var inst_14714__$1 = (state_14785[2]);var inst_14715 = (inst_14714__$1 == null);var state_14785__$1 = (function (){var statearr_14788 = state_14785;(statearr_14788[7] = inst_14714__$1);
return statearr_14788;
})();if(cljs.core.truth_(inst_14715))
{var statearr_14789_14835 = state_14785__$1;(statearr_14789_14835[1] = 5);
} else
{var statearr_14790_14836 = state_14785__$1;(statearr_14790_14836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 5))
{var inst_14721 = cljs.core.deref.call(null,mults);var inst_14722 = cljs.core.vals.call(null,inst_14721);var inst_14723 = cljs.core.seq.call(null,inst_14722);var inst_14724 = inst_14723;var inst_14725 = null;var inst_14726 = 0;var inst_14727 = 0;var state_14785__$1 = (function (){var statearr_14791 = state_14785;(statearr_14791[8] = inst_14724);
(statearr_14791[9] = inst_14725);
(statearr_14791[10] = inst_14726);
(statearr_14791[11] = inst_14727);
return statearr_14791;
})();var statearr_14792_14837 = state_14785__$1;(statearr_14792_14837[2] = null);
(statearr_14792_14837[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 6))
{var inst_14762 = (state_14785[12]);var inst_14764 = (state_14785[13]);var inst_14714 = (state_14785[7]);var inst_14762__$1 = topic_fn.call(null,inst_14714);var inst_14763 = cljs.core.deref.call(null,mults);var inst_14764__$1 = cljs.core.get.call(null,inst_14763,inst_14762__$1);var state_14785__$1 = (function (){var statearr_14793 = state_14785;(statearr_14793[12] = inst_14762__$1);
(statearr_14793[13] = inst_14764__$1);
return statearr_14793;
})();if(cljs.core.truth_(inst_14764__$1))
{var statearr_14794_14838 = state_14785__$1;(statearr_14794_14838[1] = 19);
} else
{var statearr_14795_14839 = state_14785__$1;(statearr_14795_14839[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 7))
{var inst_14781 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14796_14840 = state_14785__$1;(statearr_14796_14840[2] = inst_14781);
(statearr_14796_14840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 8))
{var inst_14726 = (state_14785[10]);var inst_14727 = (state_14785[11]);var inst_14729 = (inst_14727 < inst_14726);var inst_14730 = inst_14729;var state_14785__$1 = state_14785;if(cljs.core.truth_(inst_14730))
{var statearr_14800_14841 = state_14785__$1;(statearr_14800_14841[1] = 10);
} else
{var statearr_14801_14842 = state_14785__$1;(statearr_14801_14842[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 9))
{var inst_14760 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14802_14843 = state_14785__$1;(statearr_14802_14843[2] = inst_14760);
(statearr_14802_14843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 10))
{var inst_14724 = (state_14785[8]);var inst_14725 = (state_14785[9]);var inst_14726 = (state_14785[10]);var inst_14727 = (state_14785[11]);var inst_14732 = cljs.core._nth.call(null,inst_14725,inst_14727);var inst_14733 = cljs.core.async.muxch_STAR_.call(null,inst_14732);var inst_14734 = cljs.core.async.close_BANG_.call(null,inst_14733);var inst_14735 = (inst_14727 + 1);var tmp14797 = inst_14724;var tmp14798 = inst_14725;var tmp14799 = inst_14726;var inst_14724__$1 = tmp14797;var inst_14725__$1 = tmp14798;var inst_14726__$1 = tmp14799;var inst_14727__$1 = inst_14735;var state_14785__$1 = (function (){var statearr_14803 = state_14785;(statearr_14803[8] = inst_14724__$1);
(statearr_14803[9] = inst_14725__$1);
(statearr_14803[10] = inst_14726__$1);
(statearr_14803[11] = inst_14727__$1);
(statearr_14803[14] = inst_14734);
return statearr_14803;
})();var statearr_14804_14844 = state_14785__$1;(statearr_14804_14844[2] = null);
(statearr_14804_14844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 11))
{var inst_14738 = (state_14785[15]);var inst_14724 = (state_14785[8]);var inst_14738__$1 = cljs.core.seq.call(null,inst_14724);var state_14785__$1 = (function (){var statearr_14805 = state_14785;(statearr_14805[15] = inst_14738__$1);
return statearr_14805;
})();if(inst_14738__$1)
{var statearr_14806_14845 = state_14785__$1;(statearr_14806_14845[1] = 13);
} else
{var statearr_14807_14846 = state_14785__$1;(statearr_14807_14846[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 12))
{var inst_14758 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14808_14847 = state_14785__$1;(statearr_14808_14847[2] = inst_14758);
(statearr_14808_14847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 13))
{var inst_14738 = (state_14785[15]);var inst_14740 = cljs.core.chunked_seq_QMARK_.call(null,inst_14738);var state_14785__$1 = state_14785;if(inst_14740)
{var statearr_14809_14848 = state_14785__$1;(statearr_14809_14848[1] = 16);
} else
{var statearr_14810_14849 = state_14785__$1;(statearr_14810_14849[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 14))
{var state_14785__$1 = state_14785;var statearr_14811_14850 = state_14785__$1;(statearr_14811_14850[2] = null);
(statearr_14811_14850[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 15))
{var inst_14756 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14812_14851 = state_14785__$1;(statearr_14812_14851[2] = inst_14756);
(statearr_14812_14851[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 16))
{var inst_14738 = (state_14785[15]);var inst_14742 = cljs.core.chunk_first.call(null,inst_14738);var inst_14743 = cljs.core.chunk_rest.call(null,inst_14738);var inst_14744 = cljs.core.count.call(null,inst_14742);var inst_14724 = inst_14743;var inst_14725 = inst_14742;var inst_14726 = inst_14744;var inst_14727 = 0;var state_14785__$1 = (function (){var statearr_14813 = state_14785;(statearr_14813[8] = inst_14724);
(statearr_14813[9] = inst_14725);
(statearr_14813[10] = inst_14726);
(statearr_14813[11] = inst_14727);
return statearr_14813;
})();var statearr_14814_14852 = state_14785__$1;(statearr_14814_14852[2] = null);
(statearr_14814_14852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 17))
{var inst_14738 = (state_14785[15]);var inst_14747 = cljs.core.first.call(null,inst_14738);var inst_14748 = cljs.core.async.muxch_STAR_.call(null,inst_14747);var inst_14749 = cljs.core.async.close_BANG_.call(null,inst_14748);var inst_14750 = cljs.core.next.call(null,inst_14738);var inst_14724 = inst_14750;var inst_14725 = null;var inst_14726 = 0;var inst_14727 = 0;var state_14785__$1 = (function (){var statearr_14815 = state_14785;(statearr_14815[8] = inst_14724);
(statearr_14815[9] = inst_14725);
(statearr_14815[10] = inst_14726);
(statearr_14815[16] = inst_14749);
(statearr_14815[11] = inst_14727);
return statearr_14815;
})();var statearr_14816_14853 = state_14785__$1;(statearr_14816_14853[2] = null);
(statearr_14816_14853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 18))
{var inst_14753 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14817_14854 = state_14785__$1;(statearr_14817_14854[2] = inst_14753);
(statearr_14817_14854[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 19))
{var state_14785__$1 = state_14785;var statearr_14818_14855 = state_14785__$1;(statearr_14818_14855[2] = null);
(statearr_14818_14855[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 20))
{var state_14785__$1 = state_14785;var statearr_14819_14856 = state_14785__$1;(statearr_14819_14856[2] = null);
(statearr_14819_14856[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 21))
{var inst_14778 = (state_14785[2]);var state_14785__$1 = (function (){var statearr_14820 = state_14785;(statearr_14820[17] = inst_14778);
return statearr_14820;
})();var statearr_14821_14857 = state_14785__$1;(statearr_14821_14857[2] = null);
(statearr_14821_14857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 22))
{var inst_14775 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14822_14858 = state_14785__$1;(statearr_14822_14858[2] = inst_14775);
(statearr_14822_14858[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 23))
{var inst_14762 = (state_14785[12]);var inst_14766 = (state_14785[2]);var inst_14767 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14762);var state_14785__$1 = (function (){var statearr_14823 = state_14785;(statearr_14823[18] = inst_14766);
return statearr_14823;
})();var statearr_14824_14859 = state_14785__$1;(statearr_14824_14859[2] = inst_14767);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14785__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 24))
{var inst_14764 = (state_14785[13]);var inst_14714 = (state_14785[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14785,23,Object,null,22);var inst_14771 = cljs.core.async.muxch_STAR_.call(null,inst_14764);var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14785__$1,25,inst_14771,inst_14714);
} else
{if((state_val_14786 === 25))
{var inst_14773 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14825_14860 = state_14785__$1;(statearr_14825_14860[2] = inst_14773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14785__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14829[0] = state_machine__5507__auto__);
(statearr_14829[1] = 1);
return statearr_14829;
});
var state_machine__5507__auto____1 = (function (state_14785){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14830){if((e14830 instanceof Object))
{var ex__5510__auto__ = e14830;var statearr_14831_14861 = state_14785;(statearr_14831_14861[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14862 = state_14785;
state_14785 = G__14862;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14785){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14832 = f__5522__auto__.call(null);(statearr_14832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14833);
return statearr_14832;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14969){var state_val_14970 = (state_14969[1]);if((state_val_14970 === 1))
{var state_14969__$1 = state_14969;var statearr_14971_15000 = state_14969__$1;(statearr_14971_15000[2] = null);
(statearr_14971_15000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 2))
{var inst_14932 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14933 = 0;var state_14969__$1 = (function (){var statearr_14972 = state_14969;(statearr_14972[7] = inst_14932);
(statearr_14972[8] = inst_14933);
return statearr_14972;
})();var statearr_14973_15001 = state_14969__$1;(statearr_14973_15001[2] = null);
(statearr_14973_15001[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 3))
{var inst_14967 = (state_14969[2]);var state_14969__$1 = state_14969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14969__$1,inst_14967);
} else
{if((state_val_14970 === 4))
{var inst_14933 = (state_14969[8]);var inst_14935 = (inst_14933 < cnt);var state_14969__$1 = state_14969;if(cljs.core.truth_(inst_14935))
{var statearr_14974_15002 = state_14969__$1;(statearr_14974_15002[1] = 6);
} else
{var statearr_14975_15003 = state_14969__$1;(statearr_14975_15003[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 5))
{var inst_14953 = (state_14969[2]);var state_14969__$1 = (function (){var statearr_14976 = state_14969;(statearr_14976[9] = inst_14953);
return statearr_14976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14969__$1,12,dchan);
} else
{if((state_val_14970 === 6))
{var state_14969__$1 = state_14969;var statearr_14977_15004 = state_14969__$1;(statearr_14977_15004[2] = null);
(statearr_14977_15004[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 7))
{var state_14969__$1 = state_14969;var statearr_14978_15005 = state_14969__$1;(statearr_14978_15005[2] = null);
(statearr_14978_15005[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 8))
{var inst_14951 = (state_14969[2]);var state_14969__$1 = state_14969;var statearr_14979_15006 = state_14969__$1;(statearr_14979_15006[2] = inst_14951);
(statearr_14979_15006[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 9))
{var inst_14933 = (state_14969[8]);var inst_14946 = (state_14969[2]);var inst_14947 = (inst_14933 + 1);var inst_14933__$1 = inst_14947;var state_14969__$1 = (function (){var statearr_14980 = state_14969;(statearr_14980[10] = inst_14946);
(statearr_14980[8] = inst_14933__$1);
return statearr_14980;
})();var statearr_14981_15007 = state_14969__$1;(statearr_14981_15007[2] = null);
(statearr_14981_15007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 10))
{var inst_14937 = (state_14969[2]);var inst_14938 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14969__$1 = (function (){var statearr_14982 = state_14969;(statearr_14982[11] = inst_14937);
return statearr_14982;
})();var statearr_14983_15008 = state_14969__$1;(statearr_14983_15008[2] = inst_14938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 11))
{var inst_14933 = (state_14969[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14969,10,Object,null,9);var inst_14942 = chs__$1.call(null,inst_14933);var inst_14943 = done.call(null,inst_14933);var inst_14944 = cljs.core.async.take_BANG_.call(null,inst_14942,inst_14943);var state_14969__$1 = state_14969;var statearr_14984_15009 = state_14969__$1;(statearr_14984_15009[2] = inst_14944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 12))
{var inst_14955 = (state_14969[12]);var inst_14955__$1 = (state_14969[2]);var inst_14956 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14955__$1);var state_14969__$1 = (function (){var statearr_14985 = state_14969;(statearr_14985[12] = inst_14955__$1);
return statearr_14985;
})();if(cljs.core.truth_(inst_14956))
{var statearr_14986_15010 = state_14969__$1;(statearr_14986_15010[1] = 13);
} else
{var statearr_14987_15011 = state_14969__$1;(statearr_14987_15011[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 13))
{var inst_14958 = cljs.core.async.close_BANG_.call(null,out);var state_14969__$1 = state_14969;var statearr_14988_15012 = state_14969__$1;(statearr_14988_15012[2] = inst_14958);
(statearr_14988_15012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 14))
{var inst_14955 = (state_14969[12]);var inst_14960 = cljs.core.apply.call(null,f,inst_14955);var state_14969__$1 = state_14969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14969__$1,16,out,inst_14960);
} else
{if((state_val_14970 === 15))
{var inst_14965 = (state_14969[2]);var state_14969__$1 = state_14969;var statearr_14989_15013 = state_14969__$1;(statearr_14989_15013[2] = inst_14965);
(statearr_14989_15013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14970 === 16))
{var inst_14962 = (state_14969[2]);var state_14969__$1 = (function (){var statearr_14990 = state_14969;(statearr_14990[13] = inst_14962);
return statearr_14990;
})();var statearr_14991_15014 = state_14969__$1;(statearr_14991_15014[2] = null);
(statearr_14991_15014[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14995[0] = state_machine__5507__auto__);
(statearr_14995[1] = 1);
return statearr_14995;
});
var state_machine__5507__auto____1 = (function (state_14969){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14996){if((e14996 instanceof Object))
{var ex__5510__auto__ = e14996;var statearr_14997_15015 = state_14969;(statearr_14997_15015[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15016 = state_14969;
state_14969 = G__15016;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14969){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14998 = f__5522__auto__.call(null);(statearr_14998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14999);
return statearr_14998;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15100){var state_val_15101 = (state_15100[1]);if((state_val_15101 === 1))
{var inst_15071 = cljs.core.vec.call(null,chs);var inst_15072 = inst_15071;var state_15100__$1 = (function (){var statearr_15102 = state_15100;(statearr_15102[7] = inst_15072);
return statearr_15102;
})();var statearr_15103_15125 = state_15100__$1;(statearr_15103_15125[2] = null);
(statearr_15103_15125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 2))
{var inst_15072 = (state_15100[7]);var inst_15074 = cljs.core.count.call(null,inst_15072);var inst_15075 = (inst_15074 > 0);var state_15100__$1 = state_15100;if(cljs.core.truth_(inst_15075))
{var statearr_15104_15126 = state_15100__$1;(statearr_15104_15126[1] = 4);
} else
{var statearr_15105_15127 = state_15100__$1;(statearr_15105_15127[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 3))
{var inst_15098 = (state_15100[2]);var state_15100__$1 = state_15100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15100__$1,inst_15098);
} else
{if((state_val_15101 === 4))
{var inst_15072 = (state_15100[7]);var state_15100__$1 = state_15100;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15100__$1,7,inst_15072);
} else
{if((state_val_15101 === 5))
{var inst_15094 = cljs.core.async.close_BANG_.call(null,out);var state_15100__$1 = state_15100;var statearr_15106_15128 = state_15100__$1;(statearr_15106_15128[2] = inst_15094);
(statearr_15106_15128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 6))
{var inst_15096 = (state_15100[2]);var state_15100__$1 = state_15100;var statearr_15107_15129 = state_15100__$1;(statearr_15107_15129[2] = inst_15096);
(statearr_15107_15129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 7))
{var inst_15080 = (state_15100[8]);var inst_15079 = (state_15100[9]);var inst_15079__$1 = (state_15100[2]);var inst_15080__$1 = cljs.core.nth.call(null,inst_15079__$1,0,null);var inst_15081 = cljs.core.nth.call(null,inst_15079__$1,1,null);var inst_15082 = (inst_15080__$1 == null);var state_15100__$1 = (function (){var statearr_15108 = state_15100;(statearr_15108[8] = inst_15080__$1);
(statearr_15108[10] = inst_15081);
(statearr_15108[9] = inst_15079__$1);
return statearr_15108;
})();if(cljs.core.truth_(inst_15082))
{var statearr_15109_15130 = state_15100__$1;(statearr_15109_15130[1] = 8);
} else
{var statearr_15110_15131 = state_15100__$1;(statearr_15110_15131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 8))
{var inst_15080 = (state_15100[8]);var inst_15081 = (state_15100[10]);var inst_15072 = (state_15100[7]);var inst_15079 = (state_15100[9]);var inst_15084 = (function (){var c = inst_15081;var v = inst_15080;var vec__15077 = inst_15079;var cs = inst_15072;return ((function (c,v,vec__15077,cs,inst_15080,inst_15081,inst_15072,inst_15079,state_val_15101){
return (function (p1__15017_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15017_SHARP_);
});
;})(c,v,vec__15077,cs,inst_15080,inst_15081,inst_15072,inst_15079,state_val_15101))
})();var inst_15085 = cljs.core.filterv.call(null,inst_15084,inst_15072);var inst_15072__$1 = inst_15085;var state_15100__$1 = (function (){var statearr_15111 = state_15100;(statearr_15111[7] = inst_15072__$1);
return statearr_15111;
})();var statearr_15112_15132 = state_15100__$1;(statearr_15112_15132[2] = null);
(statearr_15112_15132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 9))
{var inst_15080 = (state_15100[8]);var state_15100__$1 = state_15100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15100__$1,11,out,inst_15080);
} else
{if((state_val_15101 === 10))
{var inst_15092 = (state_15100[2]);var state_15100__$1 = state_15100;var statearr_15114_15133 = state_15100__$1;(statearr_15114_15133[2] = inst_15092);
(statearr_15114_15133[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15101 === 11))
{var inst_15072 = (state_15100[7]);var inst_15089 = (state_15100[2]);var tmp15113 = inst_15072;var inst_15072__$1 = tmp15113;var state_15100__$1 = (function (){var statearr_15115 = state_15100;(statearr_15115[7] = inst_15072__$1);
(statearr_15115[11] = inst_15089);
return statearr_15115;
})();var statearr_15116_15134 = state_15100__$1;(statearr_15116_15134[2] = null);
(statearr_15116_15134[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15120 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15120[0] = state_machine__5507__auto__);
(statearr_15120[1] = 1);
return statearr_15120;
});
var state_machine__5507__auto____1 = (function (state_15100){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15121){if((e15121 instanceof Object))
{var ex__5510__auto__ = e15121;var statearr_15122_15135 = state_15100;(statearr_15122_15135[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15136 = state_15100;
state_15100 = G__15136;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15123 = f__5522__auto__.call(null);(statearr_15123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15124);
return statearr_15123;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15206){var state_val_15207 = (state_15206[1]);if((state_val_15207 === 1))
{var inst_15183 = 0;var state_15206__$1 = (function (){var statearr_15208 = state_15206;(statearr_15208[7] = inst_15183);
return statearr_15208;
})();var statearr_15209_15230 = state_15206__$1;(statearr_15209_15230[2] = null);
(statearr_15209_15230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 2))
{var inst_15183 = (state_15206[7]);var inst_15185 = (inst_15183 < n);var state_15206__$1 = state_15206;if(cljs.core.truth_(inst_15185))
{var statearr_15210_15231 = state_15206__$1;(statearr_15210_15231[1] = 4);
} else
{var statearr_15211_15232 = state_15206__$1;(statearr_15211_15232[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 3))
{var inst_15203 = (state_15206[2]);var inst_15204 = cljs.core.async.close_BANG_.call(null,out);var state_15206__$1 = (function (){var statearr_15212 = state_15206;(statearr_15212[8] = inst_15203);
return statearr_15212;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15206__$1,inst_15204);
} else
{if((state_val_15207 === 4))
{var state_15206__$1 = state_15206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15206__$1,7,ch);
} else
{if((state_val_15207 === 5))
{var state_15206__$1 = state_15206;var statearr_15213_15233 = state_15206__$1;(statearr_15213_15233[2] = null);
(statearr_15213_15233[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 6))
{var inst_15201 = (state_15206[2]);var state_15206__$1 = state_15206;var statearr_15214_15234 = state_15206__$1;(statearr_15214_15234[2] = inst_15201);
(statearr_15214_15234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 7))
{var inst_15188 = (state_15206[9]);var inst_15188__$1 = (state_15206[2]);var inst_15189 = (inst_15188__$1 == null);var inst_15190 = cljs.core.not.call(null,inst_15189);var state_15206__$1 = (function (){var statearr_15215 = state_15206;(statearr_15215[9] = inst_15188__$1);
return statearr_15215;
})();if(inst_15190)
{var statearr_15216_15235 = state_15206__$1;(statearr_15216_15235[1] = 8);
} else
{var statearr_15217_15236 = state_15206__$1;(statearr_15217_15236[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 8))
{var inst_15188 = (state_15206[9]);var state_15206__$1 = state_15206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15206__$1,11,out,inst_15188);
} else
{if((state_val_15207 === 9))
{var state_15206__$1 = state_15206;var statearr_15218_15237 = state_15206__$1;(statearr_15218_15237[2] = null);
(statearr_15218_15237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 10))
{var inst_15198 = (state_15206[2]);var state_15206__$1 = state_15206;var statearr_15219_15238 = state_15206__$1;(statearr_15219_15238[2] = inst_15198);
(statearr_15219_15238[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 11))
{var inst_15183 = (state_15206[7]);var inst_15193 = (state_15206[2]);var inst_15194 = (inst_15183 + 1);var inst_15183__$1 = inst_15194;var state_15206__$1 = (function (){var statearr_15220 = state_15206;(statearr_15220[10] = inst_15193);
(statearr_15220[7] = inst_15183__$1);
return statearr_15220;
})();var statearr_15221_15239 = state_15206__$1;(statearr_15221_15239[2] = null);
(statearr_15221_15239[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15225 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15225[0] = state_machine__5507__auto__);
(statearr_15225[1] = 1);
return statearr_15225;
});
var state_machine__5507__auto____1 = (function (state_15206){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15226){if((e15226 instanceof Object))
{var ex__5510__auto__ = e15226;var statearr_15227_15240 = state_15206;(statearr_15227_15240[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15241 = state_15206;
state_15206 = G__15241;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15206){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15228 = f__5522__auto__.call(null);(statearr_15228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15229);
return statearr_15228;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15313){var state_val_15314 = (state_15313[1]);if((state_val_15314 === 1))
{var inst_15290 = null;var state_15313__$1 = (function (){var statearr_15315 = state_15313;(statearr_15315[7] = inst_15290);
return statearr_15315;
})();var statearr_15316_15339 = state_15313__$1;(statearr_15316_15339[2] = null);
(statearr_15316_15339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 2))
{var state_15313__$1 = state_15313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15313__$1,4,ch);
} else
{if((state_val_15314 === 3))
{var inst_15310 = (state_15313[2]);var inst_15311 = cljs.core.async.close_BANG_.call(null,out);var state_15313__$1 = (function (){var statearr_15317 = state_15313;(statearr_15317[8] = inst_15310);
return statearr_15317;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15313__$1,inst_15311);
} else
{if((state_val_15314 === 4))
{var inst_15293 = (state_15313[9]);var inst_15293__$1 = (state_15313[2]);var inst_15294 = (inst_15293__$1 == null);var inst_15295 = cljs.core.not.call(null,inst_15294);var state_15313__$1 = (function (){var statearr_15318 = state_15313;(statearr_15318[9] = inst_15293__$1);
return statearr_15318;
})();if(inst_15295)
{var statearr_15319_15340 = state_15313__$1;(statearr_15319_15340[1] = 5);
} else
{var statearr_15320_15341 = state_15313__$1;(statearr_15320_15341[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 5))
{var inst_15290 = (state_15313[7]);var inst_15293 = (state_15313[9]);var inst_15297 = cljs.core._EQ_.call(null,inst_15293,inst_15290);var state_15313__$1 = state_15313;if(inst_15297)
{var statearr_15321_15342 = state_15313__$1;(statearr_15321_15342[1] = 8);
} else
{var statearr_15322_15343 = state_15313__$1;(statearr_15322_15343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 6))
{var state_15313__$1 = state_15313;var statearr_15324_15344 = state_15313__$1;(statearr_15324_15344[2] = null);
(statearr_15324_15344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 7))
{var inst_15308 = (state_15313[2]);var state_15313__$1 = state_15313;var statearr_15325_15345 = state_15313__$1;(statearr_15325_15345[2] = inst_15308);
(statearr_15325_15345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 8))
{var inst_15290 = (state_15313[7]);var tmp15323 = inst_15290;var inst_15290__$1 = tmp15323;var state_15313__$1 = (function (){var statearr_15326 = state_15313;(statearr_15326[7] = inst_15290__$1);
return statearr_15326;
})();var statearr_15327_15346 = state_15313__$1;(statearr_15327_15346[2] = null);
(statearr_15327_15346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 9))
{var inst_15293 = (state_15313[9]);var state_15313__$1 = state_15313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15313__$1,11,out,inst_15293);
} else
{if((state_val_15314 === 10))
{var inst_15305 = (state_15313[2]);var state_15313__$1 = state_15313;var statearr_15328_15347 = state_15313__$1;(statearr_15328_15347[2] = inst_15305);
(statearr_15328_15347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15314 === 11))
{var inst_15293 = (state_15313[9]);var inst_15302 = (state_15313[2]);var inst_15290 = inst_15293;var state_15313__$1 = (function (){var statearr_15329 = state_15313;(statearr_15329[10] = inst_15302);
(statearr_15329[7] = inst_15290);
return statearr_15329;
})();var statearr_15330_15348 = state_15313__$1;(statearr_15330_15348[2] = null);
(statearr_15330_15348[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15334[0] = state_machine__5507__auto__);
(statearr_15334[1] = 1);
return statearr_15334;
});
var state_machine__5507__auto____1 = (function (state_15313){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15313);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15335){if((e15335 instanceof Object))
{var ex__5510__auto__ = e15335;var statearr_15336_15349 = state_15313;(statearr_15336_15349[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15350 = state_15313;
state_15313 = G__15350;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15313){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15337 = f__5522__auto__.call(null);(statearr_15337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15338);
return statearr_15337;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15455){var state_val_15456 = (state_15455[1]);if((state_val_15456 === 1))
{var inst_15418 = (new Array(n));var inst_15419 = inst_15418;var inst_15420 = 0;var state_15455__$1 = (function (){var statearr_15457 = state_15455;(statearr_15457[7] = inst_15419);
(statearr_15457[8] = inst_15420);
return statearr_15457;
})();var statearr_15458_15486 = state_15455__$1;(statearr_15458_15486[2] = null);
(statearr_15458_15486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 2))
{var state_15455__$1 = state_15455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15455__$1,4,ch);
} else
{if((state_val_15456 === 3))
{var inst_15453 = (state_15455[2]);var state_15455__$1 = state_15455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15455__$1,inst_15453);
} else
{if((state_val_15456 === 4))
{var inst_15423 = (state_15455[9]);var inst_15423__$1 = (state_15455[2]);var inst_15424 = (inst_15423__$1 == null);var inst_15425 = cljs.core.not.call(null,inst_15424);var state_15455__$1 = (function (){var statearr_15459 = state_15455;(statearr_15459[9] = inst_15423__$1);
return statearr_15459;
})();if(inst_15425)
{var statearr_15460_15487 = state_15455__$1;(statearr_15460_15487[1] = 5);
} else
{var statearr_15461_15488 = state_15455__$1;(statearr_15461_15488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 5))
{var inst_15419 = (state_15455[7]);var inst_15423 = (state_15455[9]);var inst_15420 = (state_15455[8]);var inst_15428 = (state_15455[10]);var inst_15427 = (inst_15419[inst_15420] = inst_15423);var inst_15428__$1 = (inst_15420 + 1);var inst_15429 = (inst_15428__$1 < n);var state_15455__$1 = (function (){var statearr_15462 = state_15455;(statearr_15462[11] = inst_15427);
(statearr_15462[10] = inst_15428__$1);
return statearr_15462;
})();if(cljs.core.truth_(inst_15429))
{var statearr_15463_15489 = state_15455__$1;(statearr_15463_15489[1] = 8);
} else
{var statearr_15464_15490 = state_15455__$1;(statearr_15464_15490[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 6))
{var inst_15420 = (state_15455[8]);var inst_15441 = (inst_15420 > 0);var state_15455__$1 = state_15455;if(cljs.core.truth_(inst_15441))
{var statearr_15466_15491 = state_15455__$1;(statearr_15466_15491[1] = 12);
} else
{var statearr_15467_15492 = state_15455__$1;(statearr_15467_15492[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 7))
{var inst_15451 = (state_15455[2]);var state_15455__$1 = state_15455;var statearr_15468_15493 = state_15455__$1;(statearr_15468_15493[2] = inst_15451);
(statearr_15468_15493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 8))
{var inst_15419 = (state_15455[7]);var inst_15428 = (state_15455[10]);var tmp15465 = inst_15419;var inst_15419__$1 = tmp15465;var inst_15420 = inst_15428;var state_15455__$1 = (function (){var statearr_15469 = state_15455;(statearr_15469[7] = inst_15419__$1);
(statearr_15469[8] = inst_15420);
return statearr_15469;
})();var statearr_15470_15494 = state_15455__$1;(statearr_15470_15494[2] = null);
(statearr_15470_15494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 9))
{var inst_15419 = (state_15455[7]);var inst_15433 = cljs.core.vec.call(null,inst_15419);var state_15455__$1 = state_15455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,11,out,inst_15433);
} else
{if((state_val_15456 === 10))
{var inst_15439 = (state_15455[2]);var state_15455__$1 = state_15455;var statearr_15471_15495 = state_15455__$1;(statearr_15471_15495[2] = inst_15439);
(statearr_15471_15495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 11))
{var inst_15435 = (state_15455[2]);var inst_15436 = (new Array(n));var inst_15419 = inst_15436;var inst_15420 = 0;var state_15455__$1 = (function (){var statearr_15472 = state_15455;(statearr_15472[7] = inst_15419);
(statearr_15472[8] = inst_15420);
(statearr_15472[12] = inst_15435);
return statearr_15472;
})();var statearr_15473_15496 = state_15455__$1;(statearr_15473_15496[2] = null);
(statearr_15473_15496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 12))
{var inst_15419 = (state_15455[7]);var inst_15443 = cljs.core.vec.call(null,inst_15419);var state_15455__$1 = state_15455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,15,out,inst_15443);
} else
{if((state_val_15456 === 13))
{var state_15455__$1 = state_15455;var statearr_15474_15497 = state_15455__$1;(statearr_15474_15497[2] = null);
(statearr_15474_15497[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 14))
{var inst_15448 = (state_15455[2]);var inst_15449 = cljs.core.async.close_BANG_.call(null,out);var state_15455__$1 = (function (){var statearr_15475 = state_15455;(statearr_15475[13] = inst_15448);
return statearr_15475;
})();var statearr_15476_15498 = state_15455__$1;(statearr_15476_15498[2] = inst_15449);
(statearr_15476_15498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15456 === 15))
{var inst_15445 = (state_15455[2]);var state_15455__$1 = state_15455;var statearr_15477_15499 = state_15455__$1;(statearr_15477_15499[2] = inst_15445);
(statearr_15477_15499[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15481[0] = state_machine__5507__auto__);
(statearr_15481[1] = 1);
return statearr_15481;
});
var state_machine__5507__auto____1 = (function (state_15455){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15482){if((e15482 instanceof Object))
{var ex__5510__auto__ = e15482;var statearr_15483_15500 = state_15455;(statearr_15483_15500[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15501 = state_15455;
state_15455 = G__15501;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15484 = f__5522__auto__.call(null);(statearr_15484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15485);
return statearr_15484;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15614){var state_val_15615 = (state_15614[1]);if((state_val_15615 === 1))
{var inst_15573 = [];var inst_15574 = inst_15573;var inst_15575 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15614__$1 = (function (){var statearr_15616 = state_15614;(statearr_15616[7] = inst_15575);
(statearr_15616[8] = inst_15574);
return statearr_15616;
})();var statearr_15617_15645 = state_15614__$1;(statearr_15617_15645[2] = null);
(statearr_15617_15645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 2))
{var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15614__$1,4,ch);
} else
{if((state_val_15615 === 3))
{var inst_15612 = (state_15614[2]);var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15614__$1,inst_15612);
} else
{if((state_val_15615 === 4))
{var inst_15578 = (state_15614[9]);var inst_15578__$1 = (state_15614[2]);var inst_15579 = (inst_15578__$1 == null);var inst_15580 = cljs.core.not.call(null,inst_15579);var state_15614__$1 = (function (){var statearr_15618 = state_15614;(statearr_15618[9] = inst_15578__$1);
return statearr_15618;
})();if(inst_15580)
{var statearr_15619_15646 = state_15614__$1;(statearr_15619_15646[1] = 5);
} else
{var statearr_15620_15647 = state_15614__$1;(statearr_15620_15647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 5))
{var inst_15575 = (state_15614[7]);var inst_15578 = (state_15614[9]);var inst_15582 = (state_15614[10]);var inst_15582__$1 = f.call(null,inst_15578);var inst_15583 = cljs.core._EQ_.call(null,inst_15582__$1,inst_15575);var inst_15584 = cljs.core.keyword_identical_QMARK_.call(null,inst_15575,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15585 = (inst_15583) || (inst_15584);var state_15614__$1 = (function (){var statearr_15621 = state_15614;(statearr_15621[10] = inst_15582__$1);
return statearr_15621;
})();if(cljs.core.truth_(inst_15585))
{var statearr_15622_15648 = state_15614__$1;(statearr_15622_15648[1] = 8);
} else
{var statearr_15623_15649 = state_15614__$1;(statearr_15623_15649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 6))
{var inst_15574 = (state_15614[8]);var inst_15599 = inst_15574.length;var inst_15600 = (inst_15599 > 0);var state_15614__$1 = state_15614;if(cljs.core.truth_(inst_15600))
{var statearr_15625_15650 = state_15614__$1;(statearr_15625_15650[1] = 12);
} else
{var statearr_15626_15651 = state_15614__$1;(statearr_15626_15651[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 7))
{var inst_15610 = (state_15614[2]);var state_15614__$1 = state_15614;var statearr_15627_15652 = state_15614__$1;(statearr_15627_15652[2] = inst_15610);
(statearr_15627_15652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 8))
{var inst_15574 = (state_15614[8]);var inst_15578 = (state_15614[9]);var inst_15582 = (state_15614[10]);var inst_15587 = inst_15574.push(inst_15578);var tmp15624 = inst_15574;var inst_15574__$1 = tmp15624;var inst_15575 = inst_15582;var state_15614__$1 = (function (){var statearr_15628 = state_15614;(statearr_15628[7] = inst_15575);
(statearr_15628[8] = inst_15574__$1);
(statearr_15628[11] = inst_15587);
return statearr_15628;
})();var statearr_15629_15653 = state_15614__$1;(statearr_15629_15653[2] = null);
(statearr_15629_15653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 9))
{var inst_15574 = (state_15614[8]);var inst_15590 = cljs.core.vec.call(null,inst_15574);var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15614__$1,11,out,inst_15590);
} else
{if((state_val_15615 === 10))
{var inst_15597 = (state_15614[2]);var state_15614__$1 = state_15614;var statearr_15630_15654 = state_15614__$1;(statearr_15630_15654[2] = inst_15597);
(statearr_15630_15654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 11))
{var inst_15578 = (state_15614[9]);var inst_15582 = (state_15614[10]);var inst_15592 = (state_15614[2]);var inst_15593 = [];var inst_15594 = inst_15593.push(inst_15578);var inst_15574 = inst_15593;var inst_15575 = inst_15582;var state_15614__$1 = (function (){var statearr_15631 = state_15614;(statearr_15631[7] = inst_15575);
(statearr_15631[8] = inst_15574);
(statearr_15631[12] = inst_15592);
(statearr_15631[13] = inst_15594);
return statearr_15631;
})();var statearr_15632_15655 = state_15614__$1;(statearr_15632_15655[2] = null);
(statearr_15632_15655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 12))
{var inst_15574 = (state_15614[8]);var inst_15602 = cljs.core.vec.call(null,inst_15574);var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15614__$1,15,out,inst_15602);
} else
{if((state_val_15615 === 13))
{var state_15614__$1 = state_15614;var statearr_15633_15656 = state_15614__$1;(statearr_15633_15656[2] = null);
(statearr_15633_15656[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 14))
{var inst_15607 = (state_15614[2]);var inst_15608 = cljs.core.async.close_BANG_.call(null,out);var state_15614__$1 = (function (){var statearr_15634 = state_15614;(statearr_15634[14] = inst_15607);
return statearr_15634;
})();var statearr_15635_15657 = state_15614__$1;(statearr_15635_15657[2] = inst_15608);
(statearr_15635_15657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15615 === 15))
{var inst_15604 = (state_15614[2]);var state_15614__$1 = state_15614;var statearr_15636_15658 = state_15614__$1;(statearr_15636_15658[2] = inst_15604);
(statearr_15636_15658[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15640[0] = state_machine__5507__auto__);
(statearr_15640[1] = 1);
return statearr_15640;
});
var state_machine__5507__auto____1 = (function (state_15614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15641){if((e15641 instanceof Object))
{var ex__5510__auto__ = e15641;var statearr_15642_15659 = state_15614;(statearr_15642_15659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15660 = state_15614;
state_15614 = G__15660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15643 = f__5522__auto__.call(null);(statearr_15643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15644);
return statearr_15643;
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