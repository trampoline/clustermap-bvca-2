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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13256 = (function (f,fn_handler,meta13257){
this.f = f;
this.fn_handler = fn_handler;
this.meta13257 = meta13257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13256.cljs$lang$type = true;
cljs.core.async.t13256.cljs$lang$ctorStr = "cljs.core.async/t13256";
cljs.core.async.t13256.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13256");
});
cljs.core.async.t13256.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13258){var self__ = this;
var _13258__$1 = this;return self__.meta13257;
});
cljs.core.async.t13256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13258,meta13257__$1){var self__ = this;
var _13258__$1 = this;return (new cljs.core.async.t13256(self__.f,self__.fn_handler,meta13257__$1));
});
cljs.core.async.__GT_t13256 = (function __GT_t13256(f__$1,fn_handler__$1,meta13257){return (new cljs.core.async.t13256(f__$1,fn_handler__$1,meta13257));
});
}
return (new cljs.core.async.t13256(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13260 = buff;if(G__13260)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13260.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13260.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13260);
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
{var val_13261 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13261);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13261);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13262 = n;var x_13263 = 0;while(true){
if((x_13263 < n__4248__auto___13262))
{(a[x_13263] = 0);
{
var G__13264 = (x_13263 + 1);
x_13263 = G__13264;
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
var G__13265 = (i + 1);
i = G__13265;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13269 = (function (flag,alt_flag,meta13270){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13270 = meta13270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13269.cljs$lang$type = true;
cljs.core.async.t13269.cljs$lang$ctorStr = "cljs.core.async/t13269";
cljs.core.async.t13269.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13269");
});
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13271){var self__ = this;
var _13271__$1 = this;return self__.meta13270;
});
cljs.core.async.t13269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13271,meta13270__$1){var self__ = this;
var _13271__$1 = this;return (new cljs.core.async.t13269(self__.flag,self__.alt_flag,meta13270__$1));
});
cljs.core.async.__GT_t13269 = (function __GT_t13269(flag__$1,alt_flag__$1,meta13270){return (new cljs.core.async.t13269(flag__$1,alt_flag__$1,meta13270));
});
}
return (new cljs.core.async.t13269(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13275 = (function (cb,flag,alt_handler,meta13276){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13276 = meta13276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13275.cljs$lang$type = true;
cljs.core.async.t13275.cljs$lang$ctorStr = "cljs.core.async/t13275";
cljs.core.async.t13275.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13275");
});
cljs.core.async.t13275.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13277){var self__ = this;
var _13277__$1 = this;return self__.meta13276;
});
cljs.core.async.t13275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13277,meta13276__$1){var self__ = this;
var _13277__$1 = this;return (new cljs.core.async.t13275(self__.cb,self__.flag,self__.alt_handler,meta13276__$1));
});
cljs.core.async.__GT_t13275 = (function __GT_t13275(cb__$1,flag__$1,alt_handler__$1,meta13276){return (new cljs.core.async.t13275(cb__$1,flag__$1,alt_handler__$1,meta13276));
});
}
return (new cljs.core.async.t13275(cb,flag,alt_handler,null));
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
return (function (p1__13278_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13278_SHARP_,port], null));
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
var G__13279 = (i + 1);
i = G__13279;
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
var alts_BANG___delegate = function (ports,p__13280){var map__13282 = p__13280;var map__13282__$1 = ((cljs.core.seq_QMARK_.call(null,map__13282))?cljs.core.apply.call(null,cljs.core.hash_map,map__13282):map__13282);var opts = map__13282__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13280 = null;if (arguments.length > 1) {
  p__13280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13280);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13283){
var ports = cljs.core.first(arglist__13283);
var p__13280 = cljs.core.rest(arglist__13283);
return alts_BANG___delegate(ports,p__13280);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13291 = (function (ch,f,map_LT_,meta13292){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13292 = meta13292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13291.cljs$lang$type = true;
cljs.core.async.t13291.cljs$lang$ctorStr = "cljs.core.async/t13291";
cljs.core.async.t13291.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13291");
});
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13294 = (function (fn1,_,meta13292,ch,f,map_LT_,meta13295){
this.fn1 = fn1;
this._ = _;
this.meta13292 = meta13292;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13295 = meta13295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13294.cljs$lang$type = true;
cljs.core.async.t13294.cljs$lang$ctorStr = "cljs.core.async/t13294";
cljs.core.async.t13294.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13294");
});
cljs.core.async.t13294.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13294.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13284_SHARP_){return f1.call(null,(((p1__13284_SHARP_ == null))?null:self__.f.call(null,p1__13284_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13296){var self__ = this;
var _13296__$1 = this;return self__.meta13295;
});
cljs.core.async.t13294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13296,meta13295__$1){var self__ = this;
var _13296__$1 = this;return (new cljs.core.async.t13294(self__.fn1,self__._,self__.meta13292,self__.ch,self__.f,self__.map_LT_,meta13295__$1));
});
cljs.core.async.__GT_t13294 = (function __GT_t13294(fn1__$1,___$2,meta13292__$1,ch__$2,f__$2,map_LT___$2,meta13295){return (new cljs.core.async.t13294(fn1__$1,___$2,meta13292__$1,ch__$2,f__$2,map_LT___$2,meta13295));
});
}
return (new cljs.core.async.t13294(fn1,___$1,self__.meta13292,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13293){var self__ = this;
var _13293__$1 = this;return self__.meta13292;
});
cljs.core.async.t13291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13293,meta13292__$1){var self__ = this;
var _13293__$1 = this;return (new cljs.core.async.t13291(self__.ch,self__.f,self__.map_LT_,meta13292__$1));
});
cljs.core.async.__GT_t13291 = (function __GT_t13291(ch__$1,f__$1,map_LT___$1,meta13292){return (new cljs.core.async.t13291(ch__$1,f__$1,map_LT___$1,meta13292));
});
}
return (new cljs.core.async.t13291(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13300 = (function (ch,f,map_GT_,meta13301){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13301 = meta13301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13300.cljs$lang$type = true;
cljs.core.async.t13300.cljs$lang$ctorStr = "cljs.core.async/t13300";
cljs.core.async.t13300.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13300");
});
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13302){var self__ = this;
var _13302__$1 = this;return self__.meta13301;
});
cljs.core.async.t13300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13302,meta13301__$1){var self__ = this;
var _13302__$1 = this;return (new cljs.core.async.t13300(self__.ch,self__.f,self__.map_GT_,meta13301__$1));
});
cljs.core.async.__GT_t13300 = (function __GT_t13300(ch__$1,f__$1,map_GT___$1,meta13301){return (new cljs.core.async.t13300(ch__$1,f__$1,map_GT___$1,meta13301));
});
}
return (new cljs.core.async.t13300(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13306 = (function (ch,p,filter_GT_,meta13307){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13307 = meta13307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13306.cljs$lang$type = true;
cljs.core.async.t13306.cljs$lang$ctorStr = "cljs.core.async/t13306";
cljs.core.async.t13306.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13306");
});
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13308){var self__ = this;
var _13308__$1 = this;return self__.meta13307;
});
cljs.core.async.t13306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13308,meta13307__$1){var self__ = this;
var _13308__$1 = this;return (new cljs.core.async.t13306(self__.ch,self__.p,self__.filter_GT_,meta13307__$1));
});
cljs.core.async.__GT_t13306 = (function __GT_t13306(ch__$1,p__$1,filter_GT___$1,meta13307){return (new cljs.core.async.t13306(ch__$1,p__$1,filter_GT___$1,meta13307));
});
}
return (new cljs.core.async.t13306(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13391 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13370){var state_val_13371 = (state_13370[1]);if((state_val_13371 === 1))
{var state_13370__$1 = state_13370;var statearr_13372_13392 = state_13370__$1;(statearr_13372_13392[2] = null);
(statearr_13372_13392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 2))
{var state_13370__$1 = state_13370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13370__$1,4,ch);
} else
{if((state_val_13371 === 3))
{var inst_13368 = (state_13370[2]);var state_13370__$1 = state_13370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13370__$1,inst_13368);
} else
{if((state_val_13371 === 4))
{var inst_13352 = (state_13370[7]);var inst_13352__$1 = (state_13370[2]);var inst_13353 = (inst_13352__$1 == null);var state_13370__$1 = (function (){var statearr_13373 = state_13370;(statearr_13373[7] = inst_13352__$1);
return statearr_13373;
})();if(cljs.core.truth_(inst_13353))
{var statearr_13374_13393 = state_13370__$1;(statearr_13374_13393[1] = 5);
} else
{var statearr_13375_13394 = state_13370__$1;(statearr_13375_13394[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 5))
{var inst_13355 = cljs.core.async.close_BANG_.call(null,out);var state_13370__$1 = state_13370;var statearr_13376_13395 = state_13370__$1;(statearr_13376_13395[2] = inst_13355);
(statearr_13376_13395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 6))
{var inst_13352 = (state_13370[7]);var inst_13357 = p.call(null,inst_13352);var state_13370__$1 = state_13370;if(cljs.core.truth_(inst_13357))
{var statearr_13377_13396 = state_13370__$1;(statearr_13377_13396[1] = 8);
} else
{var statearr_13378_13397 = state_13370__$1;(statearr_13378_13397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 7))
{var inst_13366 = (state_13370[2]);var state_13370__$1 = state_13370;var statearr_13379_13398 = state_13370__$1;(statearr_13379_13398[2] = inst_13366);
(statearr_13379_13398[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 8))
{var inst_13352 = (state_13370[7]);var state_13370__$1 = state_13370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13370__$1,11,out,inst_13352);
} else
{if((state_val_13371 === 9))
{var state_13370__$1 = state_13370;var statearr_13380_13399 = state_13370__$1;(statearr_13380_13399[2] = null);
(statearr_13380_13399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 10))
{var inst_13363 = (state_13370[2]);var state_13370__$1 = (function (){var statearr_13381 = state_13370;(statearr_13381[8] = inst_13363);
return statearr_13381;
})();var statearr_13382_13400 = state_13370__$1;(statearr_13382_13400[2] = null);
(statearr_13382_13400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13371 === 11))
{var inst_13360 = (state_13370[2]);var state_13370__$1 = state_13370;var statearr_13383_13401 = state_13370__$1;(statearr_13383_13401[2] = inst_13360);
(statearr_13383_13401[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13387 = [null,null,null,null,null,null,null,null,null];(statearr_13387[0] = state_machine__5507__auto__);
(statearr_13387[1] = 1);
return statearr_13387;
});
var state_machine__5507__auto____1 = (function (state_13370){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13370);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13388){if((e13388 instanceof Object))
{var ex__5510__auto__ = e13388;var statearr_13389_13402 = state_13370;(statearr_13389_13402[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13403 = state_13370;
state_13370 = G__13403;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13370){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13390 = f__5522__auto__.call(null);(statearr_13390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13391);
return statearr_13390;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13555){var state_val_13556 = (state_13555[1]);if((state_val_13556 === 1))
{var state_13555__$1 = state_13555;var statearr_13557_13594 = state_13555__$1;(statearr_13557_13594[2] = null);
(statearr_13557_13594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 2))
{var state_13555__$1 = state_13555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13555__$1,4,in$);
} else
{if((state_val_13556 === 3))
{var inst_13553 = (state_13555[2]);var state_13555__$1 = state_13555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13555__$1,inst_13553);
} else
{if((state_val_13556 === 4))
{var inst_13501 = (state_13555[7]);var inst_13501__$1 = (state_13555[2]);var inst_13502 = (inst_13501__$1 == null);var state_13555__$1 = (function (){var statearr_13558 = state_13555;(statearr_13558[7] = inst_13501__$1);
return statearr_13558;
})();if(cljs.core.truth_(inst_13502))
{var statearr_13559_13595 = state_13555__$1;(statearr_13559_13595[1] = 5);
} else
{var statearr_13560_13596 = state_13555__$1;(statearr_13560_13596[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 5))
{var inst_13504 = cljs.core.async.close_BANG_.call(null,out);var state_13555__$1 = state_13555;var statearr_13561_13597 = state_13555__$1;(statearr_13561_13597[2] = inst_13504);
(statearr_13561_13597[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 6))
{var inst_13501 = (state_13555[7]);var inst_13506 = f.call(null,inst_13501);var inst_13511 = cljs.core.seq.call(null,inst_13506);var inst_13512 = inst_13511;var inst_13513 = null;var inst_13514 = 0;var inst_13515 = 0;var state_13555__$1 = (function (){var statearr_13562 = state_13555;(statearr_13562[8] = inst_13513);
(statearr_13562[9] = inst_13514);
(statearr_13562[10] = inst_13515);
(statearr_13562[11] = inst_13512);
return statearr_13562;
})();var statearr_13563_13598 = state_13555__$1;(statearr_13563_13598[2] = null);
(statearr_13563_13598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 7))
{var inst_13551 = (state_13555[2]);var state_13555__$1 = state_13555;var statearr_13564_13599 = state_13555__$1;(statearr_13564_13599[2] = inst_13551);
(statearr_13564_13599[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 8))
{var inst_13514 = (state_13555[9]);var inst_13515 = (state_13555[10]);var inst_13517 = (inst_13515 < inst_13514);var inst_13518 = inst_13517;var state_13555__$1 = state_13555;if(cljs.core.truth_(inst_13518))
{var statearr_13565_13600 = state_13555__$1;(statearr_13565_13600[1] = 10);
} else
{var statearr_13566_13601 = state_13555__$1;(statearr_13566_13601[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 9))
{var inst_13548 = (state_13555[2]);var state_13555__$1 = (function (){var statearr_13567 = state_13555;(statearr_13567[12] = inst_13548);
return statearr_13567;
})();var statearr_13568_13602 = state_13555__$1;(statearr_13568_13602[2] = null);
(statearr_13568_13602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 10))
{var inst_13513 = (state_13555[8]);var inst_13515 = (state_13555[10]);var inst_13520 = cljs.core._nth.call(null,inst_13513,inst_13515);var state_13555__$1 = state_13555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13555__$1,13,out,inst_13520);
} else
{if((state_val_13556 === 11))
{var inst_13512 = (state_13555[11]);var inst_13526 = (state_13555[13]);var inst_13526__$1 = cljs.core.seq.call(null,inst_13512);var state_13555__$1 = (function (){var statearr_13572 = state_13555;(statearr_13572[13] = inst_13526__$1);
return statearr_13572;
})();if(inst_13526__$1)
{var statearr_13573_13603 = state_13555__$1;(statearr_13573_13603[1] = 14);
} else
{var statearr_13574_13604 = state_13555__$1;(statearr_13574_13604[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 12))
{var inst_13546 = (state_13555[2]);var state_13555__$1 = state_13555;var statearr_13575_13605 = state_13555__$1;(statearr_13575_13605[2] = inst_13546);
(statearr_13575_13605[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 13))
{var inst_13513 = (state_13555[8]);var inst_13514 = (state_13555[9]);var inst_13515 = (state_13555[10]);var inst_13512 = (state_13555[11]);var inst_13522 = (state_13555[2]);var inst_13523 = (inst_13515 + 1);var tmp13569 = inst_13513;var tmp13570 = inst_13514;var tmp13571 = inst_13512;var inst_13512__$1 = tmp13571;var inst_13513__$1 = tmp13569;var inst_13514__$1 = tmp13570;var inst_13515__$1 = inst_13523;var state_13555__$1 = (function (){var statearr_13576 = state_13555;(statearr_13576[8] = inst_13513__$1);
(statearr_13576[14] = inst_13522);
(statearr_13576[9] = inst_13514__$1);
(statearr_13576[10] = inst_13515__$1);
(statearr_13576[11] = inst_13512__$1);
return statearr_13576;
})();var statearr_13577_13606 = state_13555__$1;(statearr_13577_13606[2] = null);
(statearr_13577_13606[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 14))
{var inst_13526 = (state_13555[13]);var inst_13528 = cljs.core.chunked_seq_QMARK_.call(null,inst_13526);var state_13555__$1 = state_13555;if(inst_13528)
{var statearr_13578_13607 = state_13555__$1;(statearr_13578_13607[1] = 17);
} else
{var statearr_13579_13608 = state_13555__$1;(statearr_13579_13608[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 15))
{var state_13555__$1 = state_13555;var statearr_13580_13609 = state_13555__$1;(statearr_13580_13609[2] = null);
(statearr_13580_13609[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 16))
{var inst_13544 = (state_13555[2]);var state_13555__$1 = state_13555;var statearr_13581_13610 = state_13555__$1;(statearr_13581_13610[2] = inst_13544);
(statearr_13581_13610[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 17))
{var inst_13526 = (state_13555[13]);var inst_13530 = cljs.core.chunk_first.call(null,inst_13526);var inst_13531 = cljs.core.chunk_rest.call(null,inst_13526);var inst_13532 = cljs.core.count.call(null,inst_13530);var inst_13512 = inst_13531;var inst_13513 = inst_13530;var inst_13514 = inst_13532;var inst_13515 = 0;var state_13555__$1 = (function (){var statearr_13582 = state_13555;(statearr_13582[8] = inst_13513);
(statearr_13582[9] = inst_13514);
(statearr_13582[10] = inst_13515);
(statearr_13582[11] = inst_13512);
return statearr_13582;
})();var statearr_13583_13611 = state_13555__$1;(statearr_13583_13611[2] = null);
(statearr_13583_13611[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 18))
{var inst_13526 = (state_13555[13]);var inst_13535 = cljs.core.first.call(null,inst_13526);var state_13555__$1 = state_13555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13555__$1,20,out,inst_13535);
} else
{if((state_val_13556 === 19))
{var inst_13541 = (state_13555[2]);var state_13555__$1 = state_13555;var statearr_13584_13612 = state_13555__$1;(statearr_13584_13612[2] = inst_13541);
(statearr_13584_13612[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13556 === 20))
{var inst_13526 = (state_13555[13]);var inst_13537 = (state_13555[2]);var inst_13538 = cljs.core.next.call(null,inst_13526);var inst_13512 = inst_13538;var inst_13513 = null;var inst_13514 = 0;var inst_13515 = 0;var state_13555__$1 = (function (){var statearr_13585 = state_13555;(statearr_13585[8] = inst_13513);
(statearr_13585[9] = inst_13514);
(statearr_13585[10] = inst_13515);
(statearr_13585[11] = inst_13512);
(statearr_13585[15] = inst_13537);
return statearr_13585;
})();var statearr_13586_13613 = state_13555__$1;(statearr_13586_13613[2] = null);
(statearr_13586_13613[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13590[0] = state_machine__5507__auto__);
(statearr_13590[1] = 1);
return statearr_13590;
});
var state_machine__5507__auto____1 = (function (state_13555){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13555);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13591){if((e13591 instanceof Object))
{var ex__5510__auto__ = e13591;var statearr_13592_13614 = state_13555;(statearr_13592_13614[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13591;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13615 = state_13555;
state_13555 = G__13615;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13555){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13593 = f__5522__auto__.call(null);(statearr_13593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13593;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13675){var state_val_13676 = (state_13675[1]);if((state_val_13676 === 1))
{var state_13675__$1 = state_13675;var statearr_13677_13697 = state_13675__$1;(statearr_13677_13697[2] = null);
(statearr_13677_13697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 2))
{var state_13675__$1 = state_13675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13675__$1,4,from);
} else
{if((state_val_13676 === 3))
{var inst_13673 = (state_13675[2]);var state_13675__$1 = state_13675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13675__$1,inst_13673);
} else
{if((state_val_13676 === 4))
{var inst_13658 = (state_13675[7]);var inst_13658__$1 = (state_13675[2]);var inst_13659 = (inst_13658__$1 == null);var state_13675__$1 = (function (){var statearr_13678 = state_13675;(statearr_13678[7] = inst_13658__$1);
return statearr_13678;
})();if(cljs.core.truth_(inst_13659))
{var statearr_13679_13698 = state_13675__$1;(statearr_13679_13698[1] = 5);
} else
{var statearr_13680_13699 = state_13675__$1;(statearr_13680_13699[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 5))
{var state_13675__$1 = state_13675;if(cljs.core.truth_(close_QMARK_))
{var statearr_13681_13700 = state_13675__$1;(statearr_13681_13700[1] = 8);
} else
{var statearr_13682_13701 = state_13675__$1;(statearr_13682_13701[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 6))
{var inst_13658 = (state_13675[7]);var state_13675__$1 = state_13675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13675__$1,11,to,inst_13658);
} else
{if((state_val_13676 === 7))
{var inst_13671 = (state_13675[2]);var state_13675__$1 = state_13675;var statearr_13683_13702 = state_13675__$1;(statearr_13683_13702[2] = inst_13671);
(statearr_13683_13702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 8))
{var inst_13662 = cljs.core.async.close_BANG_.call(null,to);var state_13675__$1 = state_13675;var statearr_13684_13703 = state_13675__$1;(statearr_13684_13703[2] = inst_13662);
(statearr_13684_13703[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 9))
{var state_13675__$1 = state_13675;var statearr_13685_13704 = state_13675__$1;(statearr_13685_13704[2] = null);
(statearr_13685_13704[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 10))
{var inst_13665 = (state_13675[2]);var state_13675__$1 = state_13675;var statearr_13686_13705 = state_13675__$1;(statearr_13686_13705[2] = inst_13665);
(statearr_13686_13705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 11))
{var inst_13668 = (state_13675[2]);var state_13675__$1 = (function (){var statearr_13687 = state_13675;(statearr_13687[8] = inst_13668);
return statearr_13687;
})();var statearr_13688_13706 = state_13675__$1;(statearr_13688_13706[2] = null);
(statearr_13688_13706[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13692 = [null,null,null,null,null,null,null,null,null];(statearr_13692[0] = state_machine__5507__auto__);
(statearr_13692[1] = 1);
return statearr_13692;
});
var state_machine__5507__auto____1 = (function (state_13675){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13693){if((e13693 instanceof Object))
{var ex__5510__auto__ = e13693;var statearr_13694_13707 = state_13675;(statearr_13694_13707[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13708 = state_13675;
state_13675 = G__13708;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13675){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13695 = f__5522__auto__.call(null);(statearr_13695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13696);
return statearr_13695;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13795 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13773){var state_val_13774 = (state_13773[1]);if((state_val_13774 === 1))
{var state_13773__$1 = state_13773;var statearr_13775_13796 = state_13773__$1;(statearr_13775_13796[2] = null);
(statearr_13775_13796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 2))
{var state_13773__$1 = state_13773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13773__$1,4,ch);
} else
{if((state_val_13774 === 3))
{var inst_13771 = (state_13773[2]);var state_13773__$1 = state_13773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13773__$1,inst_13771);
} else
{if((state_val_13774 === 4))
{var inst_13754 = (state_13773[7]);var inst_13754__$1 = (state_13773[2]);var inst_13755 = (inst_13754__$1 == null);var state_13773__$1 = (function (){var statearr_13776 = state_13773;(statearr_13776[7] = inst_13754__$1);
return statearr_13776;
})();if(cljs.core.truth_(inst_13755))
{var statearr_13777_13797 = state_13773__$1;(statearr_13777_13797[1] = 5);
} else
{var statearr_13778_13798 = state_13773__$1;(statearr_13778_13798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 5))
{var inst_13757 = cljs.core.async.close_BANG_.call(null,tc);var inst_13758 = cljs.core.async.close_BANG_.call(null,fc);var state_13773__$1 = (function (){var statearr_13779 = state_13773;(statearr_13779[8] = inst_13757);
return statearr_13779;
})();var statearr_13780_13799 = state_13773__$1;(statearr_13780_13799[2] = inst_13758);
(statearr_13780_13799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 6))
{var inst_13754 = (state_13773[7]);var inst_13760 = p.call(null,inst_13754);var state_13773__$1 = state_13773;if(cljs.core.truth_(inst_13760))
{var statearr_13781_13800 = state_13773__$1;(statearr_13781_13800[1] = 9);
} else
{var statearr_13782_13801 = state_13773__$1;(statearr_13782_13801[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 7))
{var inst_13769 = (state_13773[2]);var state_13773__$1 = state_13773;var statearr_13783_13802 = state_13773__$1;(statearr_13783_13802[2] = inst_13769);
(statearr_13783_13802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 8))
{var inst_13766 = (state_13773[2]);var state_13773__$1 = (function (){var statearr_13784 = state_13773;(statearr_13784[9] = inst_13766);
return statearr_13784;
})();var statearr_13785_13803 = state_13773__$1;(statearr_13785_13803[2] = null);
(statearr_13785_13803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 9))
{var state_13773__$1 = state_13773;var statearr_13786_13804 = state_13773__$1;(statearr_13786_13804[2] = tc);
(statearr_13786_13804[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 10))
{var state_13773__$1 = state_13773;var statearr_13787_13805 = state_13773__$1;(statearr_13787_13805[2] = fc);
(statearr_13787_13805[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13774 === 11))
{var inst_13754 = (state_13773[7]);var inst_13764 = (state_13773[2]);var state_13773__$1 = state_13773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13773__$1,8,inst_13764,inst_13754);
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
var state_machine__5507__auto____0 = (function (){var statearr_13791 = [null,null,null,null,null,null,null,null,null,null];(statearr_13791[0] = state_machine__5507__auto__);
(statearr_13791[1] = 1);
return statearr_13791;
});
var state_machine__5507__auto____1 = (function (state_13773){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13792){if((e13792 instanceof Object))
{var ex__5510__auto__ = e13792;var statearr_13793_13806 = state_13773;(statearr_13793_13806[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13807 = state_13773;
state_13773 = G__13807;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13773){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13794 = f__5522__auto__.call(null);(statearr_13794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13795);
return statearr_13794;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13854){var state_val_13855 = (state_13854[1]);if((state_val_13855 === 7))
{var inst_13850 = (state_13854[2]);var state_13854__$1 = state_13854;var statearr_13856_13872 = state_13854__$1;(statearr_13856_13872[2] = inst_13850);
(statearr_13856_13872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 6))
{var inst_13840 = (state_13854[7]);var inst_13843 = (state_13854[8]);var inst_13847 = f.call(null,inst_13840,inst_13843);var inst_13840__$1 = inst_13847;var state_13854__$1 = (function (){var statearr_13857 = state_13854;(statearr_13857[7] = inst_13840__$1);
return statearr_13857;
})();var statearr_13858_13873 = state_13854__$1;(statearr_13858_13873[2] = null);
(statearr_13858_13873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 5))
{var inst_13840 = (state_13854[7]);var state_13854__$1 = state_13854;var statearr_13859_13874 = state_13854__$1;(statearr_13859_13874[2] = inst_13840);
(statearr_13859_13874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 4))
{var inst_13843 = (state_13854[8]);var inst_13843__$1 = (state_13854[2]);var inst_13844 = (inst_13843__$1 == null);var state_13854__$1 = (function (){var statearr_13860 = state_13854;(statearr_13860[8] = inst_13843__$1);
return statearr_13860;
})();if(cljs.core.truth_(inst_13844))
{var statearr_13861_13875 = state_13854__$1;(statearr_13861_13875[1] = 5);
} else
{var statearr_13862_13876 = state_13854__$1;(statearr_13862_13876[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 3))
{var inst_13852 = (state_13854[2]);var state_13854__$1 = state_13854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13854__$1,inst_13852);
} else
{if((state_val_13855 === 2))
{var state_13854__$1 = state_13854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,4,ch);
} else
{if((state_val_13855 === 1))
{var inst_13840 = init;var state_13854__$1 = (function (){var statearr_13863 = state_13854;(statearr_13863[7] = inst_13840);
return statearr_13863;
})();var statearr_13864_13877 = state_13854__$1;(statearr_13864_13877[2] = null);
(statearr_13864_13877[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13868 = [null,null,null,null,null,null,null,null,null];(statearr_13868[0] = state_machine__5507__auto__);
(statearr_13868[1] = 1);
return statearr_13868;
});
var state_machine__5507__auto____1 = (function (state_13854){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13854);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13869){if((e13869 instanceof Object))
{var ex__5510__auto__ = e13869;var statearr_13870_13878 = state_13854;(statearr_13870_13878[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13879 = state_13854;
state_13854 = G__13879;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13854){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13871 = f__5522__auto__.call(null);(statearr_13871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13871;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13941){var state_val_13942 = (state_13941[1]);if((state_val_13942 === 1))
{var inst_13921 = cljs.core.seq.call(null,coll);var inst_13922 = inst_13921;var state_13941__$1 = (function (){var statearr_13943 = state_13941;(statearr_13943[7] = inst_13922);
return statearr_13943;
})();var statearr_13944_13962 = state_13941__$1;(statearr_13944_13962[2] = null);
(statearr_13944_13962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 2))
{var inst_13922 = (state_13941[7]);var state_13941__$1 = state_13941;if(cljs.core.truth_(inst_13922))
{var statearr_13945_13963 = state_13941__$1;(statearr_13945_13963[1] = 4);
} else
{var statearr_13946_13964 = state_13941__$1;(statearr_13946_13964[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 3))
{var inst_13939 = (state_13941[2]);var state_13941__$1 = state_13941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13941__$1,inst_13939);
} else
{if((state_val_13942 === 4))
{var inst_13922 = (state_13941[7]);var inst_13925 = cljs.core.first.call(null,inst_13922);var state_13941__$1 = state_13941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13941__$1,7,ch,inst_13925);
} else
{if((state_val_13942 === 5))
{var state_13941__$1 = state_13941;if(cljs.core.truth_(close_QMARK_))
{var statearr_13947_13965 = state_13941__$1;(statearr_13947_13965[1] = 8);
} else
{var statearr_13948_13966 = state_13941__$1;(statearr_13948_13966[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 6))
{var inst_13937 = (state_13941[2]);var state_13941__$1 = state_13941;var statearr_13949_13967 = state_13941__$1;(statearr_13949_13967[2] = inst_13937);
(statearr_13949_13967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 7))
{var inst_13922 = (state_13941[7]);var inst_13927 = (state_13941[2]);var inst_13928 = cljs.core.next.call(null,inst_13922);var inst_13922__$1 = inst_13928;var state_13941__$1 = (function (){var statearr_13950 = state_13941;(statearr_13950[8] = inst_13927);
(statearr_13950[7] = inst_13922__$1);
return statearr_13950;
})();var statearr_13951_13968 = state_13941__$1;(statearr_13951_13968[2] = null);
(statearr_13951_13968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 8))
{var inst_13932 = cljs.core.async.close_BANG_.call(null,ch);var state_13941__$1 = state_13941;var statearr_13952_13969 = state_13941__$1;(statearr_13952_13969[2] = inst_13932);
(statearr_13952_13969[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 9))
{var state_13941__$1 = state_13941;var statearr_13953_13970 = state_13941__$1;(statearr_13953_13970[2] = null);
(statearr_13953_13970[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13942 === 10))
{var inst_13935 = (state_13941[2]);var state_13941__$1 = state_13941;var statearr_13954_13971 = state_13941__$1;(statearr_13954_13971[2] = inst_13935);
(statearr_13954_13971[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13958 = [null,null,null,null,null,null,null,null,null];(statearr_13958[0] = state_machine__5507__auto__);
(statearr_13958[1] = 1);
return statearr_13958;
});
var state_machine__5507__auto____1 = (function (state_13941){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13959){if((e13959 instanceof Object))
{var ex__5510__auto__ = e13959;var statearr_13960_13972 = state_13941;(statearr_13960_13972[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13973 = state_13941;
state_13941 = G__13973;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13941){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13961 = f__5522__auto__.call(null);(statearr_13961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13961;
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
cljs.core.async.Mux = (function (){var obj13975 = {};return obj13975;
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
cljs.core.async.Mult = (function (){var obj13977 = {};return obj13977;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14201 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14201 = (function (cs,ch,mult,meta14202){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14202 = meta14202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14201.cljs$lang$type = true;
cljs.core.async.t14201.cljs$lang$ctorStr = "cljs.core.async/t14201";
cljs.core.async.t14201.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14201");
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14201.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14203){var self__ = this;
var _14203__$1 = this;return self__.meta14202;
});})(cs))
;
cljs.core.async.t14201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14203,meta14202__$1){var self__ = this;
var _14203__$1 = this;return (new cljs.core.async.t14201(self__.cs,self__.ch,self__.mult,meta14202__$1));
});})(cs))
;
cljs.core.async.__GT_t14201 = ((function (cs){
return (function __GT_t14201(cs__$1,ch__$1,mult__$1,meta14202){return (new cljs.core.async.t14201(cs__$1,ch__$1,mult__$1,meta14202));
});})(cs))
;
}
return (new cljs.core.async.t14201(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14338){var state_val_14339 = (state_14338[1]);if((state_val_14339 === 32))
{var inst_14206 = (state_14338[7]);var inst_14282 = (state_14338[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14338,31,Object,null,30);var inst_14289 = cljs.core.async.put_BANG_.call(null,inst_14282,inst_14206,done);var state_14338__$1 = state_14338;var statearr_14340_14425 = state_14338__$1;(statearr_14340_14425[2] = inst_14289);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 1))
{var state_14338__$1 = state_14338;var statearr_14341_14426 = state_14338__$1;(statearr_14341_14426[2] = null);
(statearr_14341_14426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 33))
{var inst_14295 = (state_14338[9]);var inst_14297 = cljs.core.chunked_seq_QMARK_.call(null,inst_14295);var state_14338__$1 = state_14338;if(inst_14297)
{var statearr_14342_14427 = state_14338__$1;(statearr_14342_14427[1] = 36);
} else
{var statearr_14343_14428 = state_14338__$1;(statearr_14343_14428[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 2))
{var state_14338__$1 = state_14338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14338__$1,4,ch);
} else
{if((state_val_14339 === 34))
{var state_14338__$1 = state_14338;var statearr_14344_14429 = state_14338__$1;(statearr_14344_14429[2] = null);
(statearr_14344_14429[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 3))
{var inst_14336 = (state_14338[2]);var state_14338__$1 = state_14338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14338__$1,inst_14336);
} else
{if((state_val_14339 === 35))
{var inst_14320 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14345_14430 = state_14338__$1;(statearr_14345_14430[2] = inst_14320);
(statearr_14345_14430[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 4))
{var inst_14206 = (state_14338[7]);var inst_14206__$1 = (state_14338[2]);var inst_14207 = (inst_14206__$1 == null);var state_14338__$1 = (function (){var statearr_14346 = state_14338;(statearr_14346[7] = inst_14206__$1);
return statearr_14346;
})();if(cljs.core.truth_(inst_14207))
{var statearr_14347_14431 = state_14338__$1;(statearr_14347_14431[1] = 5);
} else
{var statearr_14348_14432 = state_14338__$1;(statearr_14348_14432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 36))
{var inst_14295 = (state_14338[9]);var inst_14299 = cljs.core.chunk_first.call(null,inst_14295);var inst_14300 = cljs.core.chunk_rest.call(null,inst_14295);var inst_14301 = cljs.core.count.call(null,inst_14299);var inst_14274 = inst_14300;var inst_14275 = inst_14299;var inst_14276 = inst_14301;var inst_14277 = 0;var state_14338__$1 = (function (){var statearr_14349 = state_14338;(statearr_14349[10] = inst_14277);
(statearr_14349[11] = inst_14275);
(statearr_14349[12] = inst_14276);
(statearr_14349[13] = inst_14274);
return statearr_14349;
})();var statearr_14350_14433 = state_14338__$1;(statearr_14350_14433[2] = null);
(statearr_14350_14433[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 5))
{var inst_14213 = cljs.core.deref.call(null,cs);var inst_14214 = cljs.core.seq.call(null,inst_14213);var inst_14215 = inst_14214;var inst_14216 = null;var inst_14217 = 0;var inst_14218 = 0;var state_14338__$1 = (function (){var statearr_14351 = state_14338;(statearr_14351[14] = inst_14216);
(statearr_14351[15] = inst_14215);
(statearr_14351[16] = inst_14217);
(statearr_14351[17] = inst_14218);
return statearr_14351;
})();var statearr_14352_14434 = state_14338__$1;(statearr_14352_14434[2] = null);
(statearr_14352_14434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 37))
{var inst_14295 = (state_14338[9]);var inst_14304 = cljs.core.first.call(null,inst_14295);var state_14338__$1 = (function (){var statearr_14353 = state_14338;(statearr_14353[18] = inst_14304);
return statearr_14353;
})();var statearr_14354_14435 = state_14338__$1;(statearr_14354_14435[2] = null);
(statearr_14354_14435[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 6))
{var inst_14266 = (state_14338[19]);var inst_14265 = cljs.core.deref.call(null,cs);var inst_14266__$1 = cljs.core.keys.call(null,inst_14265);var inst_14267 = cljs.core.count.call(null,inst_14266__$1);var inst_14268 = cljs.core.reset_BANG_.call(null,dctr,inst_14267);var inst_14273 = cljs.core.seq.call(null,inst_14266__$1);var inst_14274 = inst_14273;var inst_14275 = null;var inst_14276 = 0;var inst_14277 = 0;var state_14338__$1 = (function (){var statearr_14355 = state_14338;(statearr_14355[19] = inst_14266__$1);
(statearr_14355[10] = inst_14277);
(statearr_14355[11] = inst_14275);
(statearr_14355[12] = inst_14276);
(statearr_14355[13] = inst_14274);
(statearr_14355[20] = inst_14268);
return statearr_14355;
})();var statearr_14356_14436 = state_14338__$1;(statearr_14356_14436[2] = null);
(statearr_14356_14436[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 38))
{var inst_14317 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14357_14437 = state_14338__$1;(statearr_14357_14437[2] = inst_14317);
(statearr_14357_14437[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 7))
{var inst_14334 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14358_14438 = state_14338__$1;(statearr_14358_14438[2] = inst_14334);
(statearr_14358_14438[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 39))
{var inst_14295 = (state_14338[9]);var inst_14313 = (state_14338[2]);var inst_14314 = cljs.core.next.call(null,inst_14295);var inst_14274 = inst_14314;var inst_14275 = null;var inst_14276 = 0;var inst_14277 = 0;var state_14338__$1 = (function (){var statearr_14359 = state_14338;(statearr_14359[21] = inst_14313);
(statearr_14359[10] = inst_14277);
(statearr_14359[11] = inst_14275);
(statearr_14359[12] = inst_14276);
(statearr_14359[13] = inst_14274);
return statearr_14359;
})();var statearr_14360_14439 = state_14338__$1;(statearr_14360_14439[2] = null);
(statearr_14360_14439[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 8))
{var inst_14217 = (state_14338[16]);var inst_14218 = (state_14338[17]);var inst_14220 = (inst_14218 < inst_14217);var inst_14221 = inst_14220;var state_14338__$1 = state_14338;if(cljs.core.truth_(inst_14221))
{var statearr_14361_14440 = state_14338__$1;(statearr_14361_14440[1] = 10);
} else
{var statearr_14362_14441 = state_14338__$1;(statearr_14362_14441[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 40))
{var inst_14304 = (state_14338[18]);var inst_14305 = (state_14338[2]);var inst_14306 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14307 = cljs.core.async.untap_STAR_.call(null,m,inst_14304);var state_14338__$1 = (function (){var statearr_14363 = state_14338;(statearr_14363[22] = inst_14305);
(statearr_14363[23] = inst_14306);
return statearr_14363;
})();var statearr_14364_14442 = state_14338__$1;(statearr_14364_14442[2] = inst_14307);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 9))
{var inst_14263 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14365_14443 = state_14338__$1;(statearr_14365_14443[2] = inst_14263);
(statearr_14365_14443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 41))
{var inst_14206 = (state_14338[7]);var inst_14304 = (state_14338[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14338,40,Object,null,39);var inst_14311 = cljs.core.async.put_BANG_.call(null,inst_14304,inst_14206,done);var state_14338__$1 = state_14338;var statearr_14366_14444 = state_14338__$1;(statearr_14366_14444[2] = inst_14311);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 10))
{var inst_14216 = (state_14338[14]);var inst_14218 = (state_14338[17]);var inst_14224 = cljs.core._nth.call(null,inst_14216,inst_14218);var inst_14225 = cljs.core.nth.call(null,inst_14224,0,null);var inst_14226 = cljs.core.nth.call(null,inst_14224,1,null);var state_14338__$1 = (function (){var statearr_14367 = state_14338;(statearr_14367[24] = inst_14225);
return statearr_14367;
})();if(cljs.core.truth_(inst_14226))
{var statearr_14368_14445 = state_14338__$1;(statearr_14368_14445[1] = 13);
} else
{var statearr_14369_14446 = state_14338__$1;(statearr_14369_14446[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 42))
{var state_14338__$1 = state_14338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14338__$1,45,dchan);
} else
{if((state_val_14339 === 11))
{var inst_14215 = (state_14338[15]);var inst_14235 = (state_14338[25]);var inst_14235__$1 = cljs.core.seq.call(null,inst_14215);var state_14338__$1 = (function (){var statearr_14370 = state_14338;(statearr_14370[25] = inst_14235__$1);
return statearr_14370;
})();if(inst_14235__$1)
{var statearr_14371_14447 = state_14338__$1;(statearr_14371_14447[1] = 16);
} else
{var statearr_14372_14448 = state_14338__$1;(statearr_14372_14448[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 43))
{var state_14338__$1 = state_14338;var statearr_14373_14449 = state_14338__$1;(statearr_14373_14449[2] = null);
(statearr_14373_14449[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 12))
{var inst_14261 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14374_14450 = state_14338__$1;(statearr_14374_14450[2] = inst_14261);
(statearr_14374_14450[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 44))
{var inst_14331 = (state_14338[2]);var state_14338__$1 = (function (){var statearr_14375 = state_14338;(statearr_14375[26] = inst_14331);
return statearr_14375;
})();var statearr_14376_14451 = state_14338__$1;(statearr_14376_14451[2] = null);
(statearr_14376_14451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 13))
{var inst_14225 = (state_14338[24]);var inst_14228 = cljs.core.async.close_BANG_.call(null,inst_14225);var state_14338__$1 = state_14338;var statearr_14377_14452 = state_14338__$1;(statearr_14377_14452[2] = inst_14228);
(statearr_14377_14452[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 45))
{var inst_14328 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14381_14453 = state_14338__$1;(statearr_14381_14453[2] = inst_14328);
(statearr_14381_14453[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 14))
{var state_14338__$1 = state_14338;var statearr_14382_14454 = state_14338__$1;(statearr_14382_14454[2] = null);
(statearr_14382_14454[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 15))
{var inst_14216 = (state_14338[14]);var inst_14215 = (state_14338[15]);var inst_14217 = (state_14338[16]);var inst_14218 = (state_14338[17]);var inst_14231 = (state_14338[2]);var inst_14232 = (inst_14218 + 1);var tmp14378 = inst_14216;var tmp14379 = inst_14215;var tmp14380 = inst_14217;var inst_14215__$1 = tmp14379;var inst_14216__$1 = tmp14378;var inst_14217__$1 = tmp14380;var inst_14218__$1 = inst_14232;var state_14338__$1 = (function (){var statearr_14383 = state_14338;(statearr_14383[14] = inst_14216__$1);
(statearr_14383[15] = inst_14215__$1);
(statearr_14383[27] = inst_14231);
(statearr_14383[16] = inst_14217__$1);
(statearr_14383[17] = inst_14218__$1);
return statearr_14383;
})();var statearr_14384_14455 = state_14338__$1;(statearr_14384_14455[2] = null);
(statearr_14384_14455[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 16))
{var inst_14235 = (state_14338[25]);var inst_14237 = cljs.core.chunked_seq_QMARK_.call(null,inst_14235);var state_14338__$1 = state_14338;if(inst_14237)
{var statearr_14385_14456 = state_14338__$1;(statearr_14385_14456[1] = 19);
} else
{var statearr_14386_14457 = state_14338__$1;(statearr_14386_14457[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 17))
{var state_14338__$1 = state_14338;var statearr_14387_14458 = state_14338__$1;(statearr_14387_14458[2] = null);
(statearr_14387_14458[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 18))
{var inst_14259 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14388_14459 = state_14338__$1;(statearr_14388_14459[2] = inst_14259);
(statearr_14388_14459[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 19))
{var inst_14235 = (state_14338[25]);var inst_14239 = cljs.core.chunk_first.call(null,inst_14235);var inst_14240 = cljs.core.chunk_rest.call(null,inst_14235);var inst_14241 = cljs.core.count.call(null,inst_14239);var inst_14215 = inst_14240;var inst_14216 = inst_14239;var inst_14217 = inst_14241;var inst_14218 = 0;var state_14338__$1 = (function (){var statearr_14389 = state_14338;(statearr_14389[14] = inst_14216);
(statearr_14389[15] = inst_14215);
(statearr_14389[16] = inst_14217);
(statearr_14389[17] = inst_14218);
return statearr_14389;
})();var statearr_14390_14460 = state_14338__$1;(statearr_14390_14460[2] = null);
(statearr_14390_14460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 20))
{var inst_14235 = (state_14338[25]);var inst_14245 = cljs.core.first.call(null,inst_14235);var inst_14246 = cljs.core.nth.call(null,inst_14245,0,null);var inst_14247 = cljs.core.nth.call(null,inst_14245,1,null);var state_14338__$1 = (function (){var statearr_14391 = state_14338;(statearr_14391[28] = inst_14246);
return statearr_14391;
})();if(cljs.core.truth_(inst_14247))
{var statearr_14392_14461 = state_14338__$1;(statearr_14392_14461[1] = 22);
} else
{var statearr_14393_14462 = state_14338__$1;(statearr_14393_14462[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 21))
{var inst_14256 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14394_14463 = state_14338__$1;(statearr_14394_14463[2] = inst_14256);
(statearr_14394_14463[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 22))
{var inst_14246 = (state_14338[28]);var inst_14249 = cljs.core.async.close_BANG_.call(null,inst_14246);var state_14338__$1 = state_14338;var statearr_14395_14464 = state_14338__$1;(statearr_14395_14464[2] = inst_14249);
(statearr_14395_14464[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 23))
{var state_14338__$1 = state_14338;var statearr_14396_14465 = state_14338__$1;(statearr_14396_14465[2] = null);
(statearr_14396_14465[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 24))
{var inst_14235 = (state_14338[25]);var inst_14252 = (state_14338[2]);var inst_14253 = cljs.core.next.call(null,inst_14235);var inst_14215 = inst_14253;var inst_14216 = null;var inst_14217 = 0;var inst_14218 = 0;var state_14338__$1 = (function (){var statearr_14397 = state_14338;(statearr_14397[14] = inst_14216);
(statearr_14397[15] = inst_14215);
(statearr_14397[29] = inst_14252);
(statearr_14397[16] = inst_14217);
(statearr_14397[17] = inst_14218);
return statearr_14397;
})();var statearr_14398_14466 = state_14338__$1;(statearr_14398_14466[2] = null);
(statearr_14398_14466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 25))
{var inst_14277 = (state_14338[10]);var inst_14276 = (state_14338[12]);var inst_14279 = (inst_14277 < inst_14276);var inst_14280 = inst_14279;var state_14338__$1 = state_14338;if(cljs.core.truth_(inst_14280))
{var statearr_14399_14467 = state_14338__$1;(statearr_14399_14467[1] = 27);
} else
{var statearr_14400_14468 = state_14338__$1;(statearr_14400_14468[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 26))
{var inst_14266 = (state_14338[19]);var inst_14324 = (state_14338[2]);var inst_14325 = cljs.core.seq.call(null,inst_14266);var state_14338__$1 = (function (){var statearr_14401 = state_14338;(statearr_14401[30] = inst_14324);
return statearr_14401;
})();if(inst_14325)
{var statearr_14402_14469 = state_14338__$1;(statearr_14402_14469[1] = 42);
} else
{var statearr_14403_14470 = state_14338__$1;(statearr_14403_14470[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 27))
{var inst_14277 = (state_14338[10]);var inst_14275 = (state_14338[11]);var inst_14282 = cljs.core._nth.call(null,inst_14275,inst_14277);var state_14338__$1 = (function (){var statearr_14404 = state_14338;(statearr_14404[8] = inst_14282);
return statearr_14404;
})();var statearr_14405_14471 = state_14338__$1;(statearr_14405_14471[2] = null);
(statearr_14405_14471[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 28))
{var inst_14295 = (state_14338[9]);var inst_14274 = (state_14338[13]);var inst_14295__$1 = cljs.core.seq.call(null,inst_14274);var state_14338__$1 = (function (){var statearr_14409 = state_14338;(statearr_14409[9] = inst_14295__$1);
return statearr_14409;
})();if(inst_14295__$1)
{var statearr_14410_14472 = state_14338__$1;(statearr_14410_14472[1] = 33);
} else
{var statearr_14411_14473 = state_14338__$1;(statearr_14411_14473[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 29))
{var inst_14322 = (state_14338[2]);var state_14338__$1 = state_14338;var statearr_14412_14474 = state_14338__$1;(statearr_14412_14474[2] = inst_14322);
(statearr_14412_14474[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 30))
{var inst_14277 = (state_14338[10]);var inst_14275 = (state_14338[11]);var inst_14276 = (state_14338[12]);var inst_14274 = (state_14338[13]);var inst_14291 = (state_14338[2]);var inst_14292 = (inst_14277 + 1);var tmp14406 = inst_14275;var tmp14407 = inst_14276;var tmp14408 = inst_14274;var inst_14274__$1 = tmp14408;var inst_14275__$1 = tmp14406;var inst_14276__$1 = tmp14407;var inst_14277__$1 = inst_14292;var state_14338__$1 = (function (){var statearr_14413 = state_14338;(statearr_14413[31] = inst_14291);
(statearr_14413[10] = inst_14277__$1);
(statearr_14413[11] = inst_14275__$1);
(statearr_14413[12] = inst_14276__$1);
(statearr_14413[13] = inst_14274__$1);
return statearr_14413;
})();var statearr_14414_14475 = state_14338__$1;(statearr_14414_14475[2] = null);
(statearr_14414_14475[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14339 === 31))
{var inst_14282 = (state_14338[8]);var inst_14283 = (state_14338[2]);var inst_14284 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14285 = cljs.core.async.untap_STAR_.call(null,m,inst_14282);var state_14338__$1 = (function (){var statearr_14415 = state_14338;(statearr_14415[32] = inst_14283);
(statearr_14415[33] = inst_14284);
return statearr_14415;
})();var statearr_14416_14476 = state_14338__$1;(statearr_14416_14476[2] = inst_14285);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14420[0] = state_machine__5507__auto__);
(statearr_14420[1] = 1);
return statearr_14420;
});
var state_machine__5507__auto____1 = (function (state_14338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14421){if((e14421 instanceof Object))
{var ex__5510__auto__ = e14421;var statearr_14422_14477 = state_14338;(statearr_14422_14477[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14478 = state_14338;
state_14338 = G__14478;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14423 = f__5522__auto__.call(null);(statearr_14423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14424);
return statearr_14423;
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
cljs.core.async.Mix = (function (){var obj14480 = {};return obj14480;
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
;var m = (function (){if(typeof cljs.core.async.t14590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14590 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14591){
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
this.meta14591 = meta14591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14590.cljs$lang$type = true;
cljs.core.async.t14590.cljs$lang$ctorStr = "cljs.core.async/t14590";
cljs.core.async.t14590.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14590");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14592){var self__ = this;
var _14592__$1 = this;return self__.meta14591;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14592,meta14591__$1){var self__ = this;
var _14592__$1 = this;return (new cljs.core.async.t14590(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14591__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14590 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14590(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14591){return (new cljs.core.async.t14590(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14591));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14590(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14699 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14657){var state_val_14658 = (state_14657[1]);if((state_val_14658 === 1))
{var inst_14596 = (state_14657[7]);var inst_14596__$1 = calc_state.call(null);var inst_14597 = cljs.core.seq_QMARK_.call(null,inst_14596__$1);var state_14657__$1 = (function (){var statearr_14659 = state_14657;(statearr_14659[7] = inst_14596__$1);
return statearr_14659;
})();if(inst_14597)
{var statearr_14660_14700 = state_14657__$1;(statearr_14660_14700[1] = 2);
} else
{var statearr_14661_14701 = state_14657__$1;(statearr_14661_14701[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 2))
{var inst_14596 = (state_14657[7]);var inst_14599 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14596);var state_14657__$1 = state_14657;var statearr_14662_14702 = state_14657__$1;(statearr_14662_14702[2] = inst_14599);
(statearr_14662_14702[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 3))
{var inst_14596 = (state_14657[7]);var state_14657__$1 = state_14657;var statearr_14663_14703 = state_14657__$1;(statearr_14663_14703[2] = inst_14596);
(statearr_14663_14703[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 4))
{var inst_14596 = (state_14657[7]);var inst_14602 = (state_14657[2]);var inst_14603 = cljs.core.get.call(null,inst_14602,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14604 = cljs.core.get.call(null,inst_14602,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14605 = cljs.core.get.call(null,inst_14602,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14606 = inst_14596;var state_14657__$1 = (function (){var statearr_14664 = state_14657;(statearr_14664[8] = inst_14603);
(statearr_14664[9] = inst_14604);
(statearr_14664[10] = inst_14605);
(statearr_14664[11] = inst_14606);
return statearr_14664;
})();var statearr_14665_14704 = state_14657__$1;(statearr_14665_14704[2] = null);
(statearr_14665_14704[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 5))
{var inst_14606 = (state_14657[11]);var inst_14609 = cljs.core.seq_QMARK_.call(null,inst_14606);var state_14657__$1 = state_14657;if(inst_14609)
{var statearr_14666_14705 = state_14657__$1;(statearr_14666_14705[1] = 7);
} else
{var statearr_14667_14706 = state_14657__$1;(statearr_14667_14706[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 6))
{var inst_14655 = (state_14657[2]);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14657__$1,inst_14655);
} else
{if((state_val_14658 === 7))
{var inst_14606 = (state_14657[11]);var inst_14611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14606);var state_14657__$1 = state_14657;var statearr_14668_14707 = state_14657__$1;(statearr_14668_14707[2] = inst_14611);
(statearr_14668_14707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 8))
{var inst_14606 = (state_14657[11]);var state_14657__$1 = state_14657;var statearr_14669_14708 = state_14657__$1;(statearr_14669_14708[2] = inst_14606);
(statearr_14669_14708[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 9))
{var inst_14614 = (state_14657[12]);var inst_14614__$1 = (state_14657[2]);var inst_14615 = cljs.core.get.call(null,inst_14614__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14616 = cljs.core.get.call(null,inst_14614__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14617 = cljs.core.get.call(null,inst_14614__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14657__$1 = (function (){var statearr_14670 = state_14657;(statearr_14670[13] = inst_14617);
(statearr_14670[12] = inst_14614__$1);
(statearr_14670[14] = inst_14616);
return statearr_14670;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14657__$1,10,inst_14615);
} else
{if((state_val_14658 === 10))
{var inst_14622 = (state_14657[15]);var inst_14621 = (state_14657[16]);var inst_14620 = (state_14657[2]);var inst_14621__$1 = cljs.core.nth.call(null,inst_14620,0,null);var inst_14622__$1 = cljs.core.nth.call(null,inst_14620,1,null);var inst_14623 = (inst_14621__$1 == null);var inst_14624 = cljs.core._EQ_.call(null,inst_14622__$1,change);var inst_14625 = (inst_14623) || (inst_14624);var state_14657__$1 = (function (){var statearr_14671 = state_14657;(statearr_14671[15] = inst_14622__$1);
(statearr_14671[16] = inst_14621__$1);
return statearr_14671;
})();if(cljs.core.truth_(inst_14625))
{var statearr_14672_14709 = state_14657__$1;(statearr_14672_14709[1] = 11);
} else
{var statearr_14673_14710 = state_14657__$1;(statearr_14673_14710[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 11))
{var inst_14621 = (state_14657[16]);var inst_14627 = (inst_14621 == null);var state_14657__$1 = state_14657;if(cljs.core.truth_(inst_14627))
{var statearr_14674_14711 = state_14657__$1;(statearr_14674_14711[1] = 14);
} else
{var statearr_14675_14712 = state_14657__$1;(statearr_14675_14712[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 12))
{var inst_14617 = (state_14657[13]);var inst_14636 = (state_14657[17]);var inst_14622 = (state_14657[15]);var inst_14636__$1 = inst_14617.call(null,inst_14622);var state_14657__$1 = (function (){var statearr_14676 = state_14657;(statearr_14676[17] = inst_14636__$1);
return statearr_14676;
})();if(cljs.core.truth_(inst_14636__$1))
{var statearr_14677_14713 = state_14657__$1;(statearr_14677_14713[1] = 17);
} else
{var statearr_14678_14714 = state_14657__$1;(statearr_14678_14714[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 13))
{var inst_14653 = (state_14657[2]);var state_14657__$1 = state_14657;var statearr_14679_14715 = state_14657__$1;(statearr_14679_14715[2] = inst_14653);
(statearr_14679_14715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 14))
{var inst_14622 = (state_14657[15]);var inst_14629 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14622);var state_14657__$1 = state_14657;var statearr_14680_14716 = state_14657__$1;(statearr_14680_14716[2] = inst_14629);
(statearr_14680_14716[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 15))
{var state_14657__$1 = state_14657;var statearr_14681_14717 = state_14657__$1;(statearr_14681_14717[2] = null);
(statearr_14681_14717[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 16))
{var inst_14632 = (state_14657[2]);var inst_14633 = calc_state.call(null);var inst_14606 = inst_14633;var state_14657__$1 = (function (){var statearr_14682 = state_14657;(statearr_14682[18] = inst_14632);
(statearr_14682[11] = inst_14606);
return statearr_14682;
})();var statearr_14683_14718 = state_14657__$1;(statearr_14683_14718[2] = null);
(statearr_14683_14718[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 17))
{var inst_14636 = (state_14657[17]);var state_14657__$1 = state_14657;var statearr_14684_14719 = state_14657__$1;(statearr_14684_14719[2] = inst_14636);
(statearr_14684_14719[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 18))
{var inst_14617 = (state_14657[13]);var inst_14622 = (state_14657[15]);var inst_14616 = (state_14657[14]);var inst_14639 = cljs.core.empty_QMARK_.call(null,inst_14617);var inst_14640 = inst_14616.call(null,inst_14622);var inst_14641 = cljs.core.not.call(null,inst_14640);var inst_14642 = (inst_14639) && (inst_14641);var state_14657__$1 = state_14657;var statearr_14685_14720 = state_14657__$1;(statearr_14685_14720[2] = inst_14642);
(statearr_14685_14720[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 19))
{var inst_14644 = (state_14657[2]);var state_14657__$1 = state_14657;if(cljs.core.truth_(inst_14644))
{var statearr_14686_14721 = state_14657__$1;(statearr_14686_14721[1] = 20);
} else
{var statearr_14687_14722 = state_14657__$1;(statearr_14687_14722[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 20))
{var inst_14621 = (state_14657[16]);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,23,out,inst_14621);
} else
{if((state_val_14658 === 21))
{var state_14657__$1 = state_14657;var statearr_14688_14723 = state_14657__$1;(statearr_14688_14723[2] = null);
(statearr_14688_14723[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 22))
{var inst_14614 = (state_14657[12]);var inst_14650 = (state_14657[2]);var inst_14606 = inst_14614;var state_14657__$1 = (function (){var statearr_14689 = state_14657;(statearr_14689[19] = inst_14650);
(statearr_14689[11] = inst_14606);
return statearr_14689;
})();var statearr_14690_14724 = state_14657__$1;(statearr_14690_14724[2] = null);
(statearr_14690_14724[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 23))
{var inst_14647 = (state_14657[2]);var state_14657__$1 = state_14657;var statearr_14691_14725 = state_14657__$1;(statearr_14691_14725[2] = inst_14647);
(statearr_14691_14725[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14695[0] = state_machine__5507__auto__);
(statearr_14695[1] = 1);
return statearr_14695;
});
var state_machine__5507__auto____1 = (function (state_14657){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14696){if((e14696 instanceof Object))
{var ex__5510__auto__ = e14696;var statearr_14697_14726 = state_14657;(statearr_14697_14726[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14727 = state_14657;
state_14657 = G__14727;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14657){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14698 = f__5522__auto__.call(null);(statearr_14698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14699);
return statearr_14698;
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
cljs.core.async.Pub = (function (){var obj14729 = {};return obj14729;
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
return (function (p1__14730_SHARP_){if(cljs.core.truth_(p1__14730_SHARP_.call(null,topic)))
{return p1__14730_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14730_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14855 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14856){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14856 = meta14856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14855.cljs$lang$type = true;
cljs.core.async.t14855.cljs$lang$ctorStr = "cljs.core.async/t14855";
cljs.core.async.t14855.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14855");
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14855.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14857){var self__ = this;
var _14857__$1 = this;return self__.meta14856;
});})(mults,ensure_mult))
;
cljs.core.async.t14855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14857,meta14856__$1){var self__ = this;
var _14857__$1 = this;return (new cljs.core.async.t14855(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14856__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14855 = ((function (mults,ensure_mult){
return (function __GT_t14855(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14856){return (new cljs.core.async.t14855(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14856));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14855(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14979 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14931){var state_val_14932 = (state_14931[1]);if((state_val_14932 === 1))
{var state_14931__$1 = state_14931;var statearr_14933_14980 = state_14931__$1;(statearr_14933_14980[2] = null);
(statearr_14933_14980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 2))
{var state_14931__$1 = state_14931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14931__$1,4,ch);
} else
{if((state_val_14932 === 3))
{var inst_14929 = (state_14931[2]);var state_14931__$1 = state_14931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14931__$1,inst_14929);
} else
{if((state_val_14932 === 4))
{var inst_14860 = (state_14931[7]);var inst_14860__$1 = (state_14931[2]);var inst_14861 = (inst_14860__$1 == null);var state_14931__$1 = (function (){var statearr_14934 = state_14931;(statearr_14934[7] = inst_14860__$1);
return statearr_14934;
})();if(cljs.core.truth_(inst_14861))
{var statearr_14935_14981 = state_14931__$1;(statearr_14935_14981[1] = 5);
} else
{var statearr_14936_14982 = state_14931__$1;(statearr_14936_14982[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 5))
{var inst_14867 = cljs.core.deref.call(null,mults);var inst_14868 = cljs.core.vals.call(null,inst_14867);var inst_14869 = cljs.core.seq.call(null,inst_14868);var inst_14870 = inst_14869;var inst_14871 = null;var inst_14872 = 0;var inst_14873 = 0;var state_14931__$1 = (function (){var statearr_14937 = state_14931;(statearr_14937[8] = inst_14873);
(statearr_14937[9] = inst_14871);
(statearr_14937[10] = inst_14872);
(statearr_14937[11] = inst_14870);
return statearr_14937;
})();var statearr_14938_14983 = state_14931__$1;(statearr_14938_14983[2] = null);
(statearr_14938_14983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 6))
{var inst_14910 = (state_14931[12]);var inst_14908 = (state_14931[13]);var inst_14860 = (state_14931[7]);var inst_14908__$1 = topic_fn.call(null,inst_14860);var inst_14909 = cljs.core.deref.call(null,mults);var inst_14910__$1 = cljs.core.get.call(null,inst_14909,inst_14908__$1);var state_14931__$1 = (function (){var statearr_14939 = state_14931;(statearr_14939[12] = inst_14910__$1);
(statearr_14939[13] = inst_14908__$1);
return statearr_14939;
})();if(cljs.core.truth_(inst_14910__$1))
{var statearr_14940_14984 = state_14931__$1;(statearr_14940_14984[1] = 19);
} else
{var statearr_14941_14985 = state_14931__$1;(statearr_14941_14985[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 7))
{var inst_14927 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14942_14986 = state_14931__$1;(statearr_14942_14986[2] = inst_14927);
(statearr_14942_14986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 8))
{var inst_14873 = (state_14931[8]);var inst_14872 = (state_14931[10]);var inst_14875 = (inst_14873 < inst_14872);var inst_14876 = inst_14875;var state_14931__$1 = state_14931;if(cljs.core.truth_(inst_14876))
{var statearr_14946_14987 = state_14931__$1;(statearr_14946_14987[1] = 10);
} else
{var statearr_14947_14988 = state_14931__$1;(statearr_14947_14988[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 9))
{var inst_14906 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14948_14989 = state_14931__$1;(statearr_14948_14989[2] = inst_14906);
(statearr_14948_14989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 10))
{var inst_14873 = (state_14931[8]);var inst_14871 = (state_14931[9]);var inst_14872 = (state_14931[10]);var inst_14870 = (state_14931[11]);var inst_14878 = cljs.core._nth.call(null,inst_14871,inst_14873);var inst_14879 = cljs.core.async.muxch_STAR_.call(null,inst_14878);var inst_14880 = cljs.core.async.close_BANG_.call(null,inst_14879);var inst_14881 = (inst_14873 + 1);var tmp14943 = inst_14871;var tmp14944 = inst_14872;var tmp14945 = inst_14870;var inst_14870__$1 = tmp14945;var inst_14871__$1 = tmp14943;var inst_14872__$1 = tmp14944;var inst_14873__$1 = inst_14881;var state_14931__$1 = (function (){var statearr_14949 = state_14931;(statearr_14949[14] = inst_14880);
(statearr_14949[8] = inst_14873__$1);
(statearr_14949[9] = inst_14871__$1);
(statearr_14949[10] = inst_14872__$1);
(statearr_14949[11] = inst_14870__$1);
return statearr_14949;
})();var statearr_14950_14990 = state_14931__$1;(statearr_14950_14990[2] = null);
(statearr_14950_14990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 11))
{var inst_14884 = (state_14931[15]);var inst_14870 = (state_14931[11]);var inst_14884__$1 = cljs.core.seq.call(null,inst_14870);var state_14931__$1 = (function (){var statearr_14951 = state_14931;(statearr_14951[15] = inst_14884__$1);
return statearr_14951;
})();if(inst_14884__$1)
{var statearr_14952_14991 = state_14931__$1;(statearr_14952_14991[1] = 13);
} else
{var statearr_14953_14992 = state_14931__$1;(statearr_14953_14992[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 12))
{var inst_14904 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14954_14993 = state_14931__$1;(statearr_14954_14993[2] = inst_14904);
(statearr_14954_14993[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 13))
{var inst_14884 = (state_14931[15]);var inst_14886 = cljs.core.chunked_seq_QMARK_.call(null,inst_14884);var state_14931__$1 = state_14931;if(inst_14886)
{var statearr_14955_14994 = state_14931__$1;(statearr_14955_14994[1] = 16);
} else
{var statearr_14956_14995 = state_14931__$1;(statearr_14956_14995[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 14))
{var state_14931__$1 = state_14931;var statearr_14957_14996 = state_14931__$1;(statearr_14957_14996[2] = null);
(statearr_14957_14996[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 15))
{var inst_14902 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14958_14997 = state_14931__$1;(statearr_14958_14997[2] = inst_14902);
(statearr_14958_14997[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 16))
{var inst_14884 = (state_14931[15]);var inst_14888 = cljs.core.chunk_first.call(null,inst_14884);var inst_14889 = cljs.core.chunk_rest.call(null,inst_14884);var inst_14890 = cljs.core.count.call(null,inst_14888);var inst_14870 = inst_14889;var inst_14871 = inst_14888;var inst_14872 = inst_14890;var inst_14873 = 0;var state_14931__$1 = (function (){var statearr_14959 = state_14931;(statearr_14959[8] = inst_14873);
(statearr_14959[9] = inst_14871);
(statearr_14959[10] = inst_14872);
(statearr_14959[11] = inst_14870);
return statearr_14959;
})();var statearr_14960_14998 = state_14931__$1;(statearr_14960_14998[2] = null);
(statearr_14960_14998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 17))
{var inst_14884 = (state_14931[15]);var inst_14893 = cljs.core.first.call(null,inst_14884);var inst_14894 = cljs.core.async.muxch_STAR_.call(null,inst_14893);var inst_14895 = cljs.core.async.close_BANG_.call(null,inst_14894);var inst_14896 = cljs.core.next.call(null,inst_14884);var inst_14870 = inst_14896;var inst_14871 = null;var inst_14872 = 0;var inst_14873 = 0;var state_14931__$1 = (function (){var statearr_14961 = state_14931;(statearr_14961[16] = inst_14895);
(statearr_14961[8] = inst_14873);
(statearr_14961[9] = inst_14871);
(statearr_14961[10] = inst_14872);
(statearr_14961[11] = inst_14870);
return statearr_14961;
})();var statearr_14962_14999 = state_14931__$1;(statearr_14962_14999[2] = null);
(statearr_14962_14999[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 18))
{var inst_14899 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14963_15000 = state_14931__$1;(statearr_14963_15000[2] = inst_14899);
(statearr_14963_15000[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 19))
{var state_14931__$1 = state_14931;var statearr_14964_15001 = state_14931__$1;(statearr_14964_15001[2] = null);
(statearr_14964_15001[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 20))
{var state_14931__$1 = state_14931;var statearr_14965_15002 = state_14931__$1;(statearr_14965_15002[2] = null);
(statearr_14965_15002[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 21))
{var inst_14924 = (state_14931[2]);var state_14931__$1 = (function (){var statearr_14966 = state_14931;(statearr_14966[17] = inst_14924);
return statearr_14966;
})();var statearr_14967_15003 = state_14931__$1;(statearr_14967_15003[2] = null);
(statearr_14967_15003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 22))
{var inst_14921 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14968_15004 = state_14931__$1;(statearr_14968_15004[2] = inst_14921);
(statearr_14968_15004[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 23))
{var inst_14908 = (state_14931[13]);var inst_14912 = (state_14931[2]);var inst_14913 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14908);var state_14931__$1 = (function (){var statearr_14969 = state_14931;(statearr_14969[18] = inst_14912);
return statearr_14969;
})();var statearr_14970_15005 = state_14931__$1;(statearr_14970_15005[2] = inst_14913);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14931__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14932 === 24))
{var inst_14910 = (state_14931[12]);var inst_14860 = (state_14931[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14931,23,Object,null,22);var inst_14917 = cljs.core.async.muxch_STAR_.call(null,inst_14910);var state_14931__$1 = state_14931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14931__$1,25,inst_14917,inst_14860);
} else
{if((state_val_14932 === 25))
{var inst_14919 = (state_14931[2]);var state_14931__$1 = state_14931;var statearr_14971_15006 = state_14931__$1;(statearr_14971_15006[2] = inst_14919);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14931__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14975[0] = state_machine__5507__auto__);
(statearr_14975[1] = 1);
return statearr_14975;
});
var state_machine__5507__auto____1 = (function (state_14931){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14931);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object))
{var ex__5510__auto__ = e14976;var statearr_14977_15007 = state_14931;(statearr_14977_15007[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15008 = state_14931;
state_14931 = G__15008;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14931){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14978 = f__5522__auto__.call(null);(statearr_14978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14979);
return statearr_14978;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15115){var state_val_15116 = (state_15115[1]);if((state_val_15116 === 1))
{var state_15115__$1 = state_15115;var statearr_15117_15146 = state_15115__$1;(statearr_15117_15146[2] = null);
(statearr_15117_15146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 2))
{var inst_15078 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15079 = 0;var state_15115__$1 = (function (){var statearr_15118 = state_15115;(statearr_15118[7] = inst_15078);
(statearr_15118[8] = inst_15079);
return statearr_15118;
})();var statearr_15119_15147 = state_15115__$1;(statearr_15119_15147[2] = null);
(statearr_15119_15147[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 3))
{var inst_15113 = (state_15115[2]);var state_15115__$1 = state_15115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15115__$1,inst_15113);
} else
{if((state_val_15116 === 4))
{var inst_15079 = (state_15115[8]);var inst_15081 = (inst_15079 < cnt);var state_15115__$1 = state_15115;if(cljs.core.truth_(inst_15081))
{var statearr_15120_15148 = state_15115__$1;(statearr_15120_15148[1] = 6);
} else
{var statearr_15121_15149 = state_15115__$1;(statearr_15121_15149[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 5))
{var inst_15099 = (state_15115[2]);var state_15115__$1 = (function (){var statearr_15122 = state_15115;(statearr_15122[9] = inst_15099);
return statearr_15122;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15115__$1,12,dchan);
} else
{if((state_val_15116 === 6))
{var state_15115__$1 = state_15115;var statearr_15123_15150 = state_15115__$1;(statearr_15123_15150[2] = null);
(statearr_15123_15150[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 7))
{var state_15115__$1 = state_15115;var statearr_15124_15151 = state_15115__$1;(statearr_15124_15151[2] = null);
(statearr_15124_15151[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 8))
{var inst_15097 = (state_15115[2]);var state_15115__$1 = state_15115;var statearr_15125_15152 = state_15115__$1;(statearr_15125_15152[2] = inst_15097);
(statearr_15125_15152[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 9))
{var inst_15079 = (state_15115[8]);var inst_15092 = (state_15115[2]);var inst_15093 = (inst_15079 + 1);var inst_15079__$1 = inst_15093;var state_15115__$1 = (function (){var statearr_15126 = state_15115;(statearr_15126[8] = inst_15079__$1);
(statearr_15126[10] = inst_15092);
return statearr_15126;
})();var statearr_15127_15153 = state_15115__$1;(statearr_15127_15153[2] = null);
(statearr_15127_15153[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 10))
{var inst_15083 = (state_15115[2]);var inst_15084 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15115__$1 = (function (){var statearr_15128 = state_15115;(statearr_15128[11] = inst_15083);
return statearr_15128;
})();var statearr_15129_15154 = state_15115__$1;(statearr_15129_15154[2] = inst_15084);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15115__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 11))
{var inst_15079 = (state_15115[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15115,10,Object,null,9);var inst_15088 = chs__$1.call(null,inst_15079);var inst_15089 = done.call(null,inst_15079);var inst_15090 = cljs.core.async.take_BANG_.call(null,inst_15088,inst_15089);var state_15115__$1 = state_15115;var statearr_15130_15155 = state_15115__$1;(statearr_15130_15155[2] = inst_15090);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15115__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 12))
{var inst_15101 = (state_15115[12]);var inst_15101__$1 = (state_15115[2]);var inst_15102 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15101__$1);var state_15115__$1 = (function (){var statearr_15131 = state_15115;(statearr_15131[12] = inst_15101__$1);
return statearr_15131;
})();if(cljs.core.truth_(inst_15102))
{var statearr_15132_15156 = state_15115__$1;(statearr_15132_15156[1] = 13);
} else
{var statearr_15133_15157 = state_15115__$1;(statearr_15133_15157[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 13))
{var inst_15104 = cljs.core.async.close_BANG_.call(null,out);var state_15115__$1 = state_15115;var statearr_15134_15158 = state_15115__$1;(statearr_15134_15158[2] = inst_15104);
(statearr_15134_15158[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 14))
{var inst_15101 = (state_15115[12]);var inst_15106 = cljs.core.apply.call(null,f,inst_15101);var state_15115__$1 = state_15115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15115__$1,16,out,inst_15106);
} else
{if((state_val_15116 === 15))
{var inst_15111 = (state_15115[2]);var state_15115__$1 = state_15115;var statearr_15135_15159 = state_15115__$1;(statearr_15135_15159[2] = inst_15111);
(statearr_15135_15159[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15116 === 16))
{var inst_15108 = (state_15115[2]);var state_15115__$1 = (function (){var statearr_15136 = state_15115;(statearr_15136[13] = inst_15108);
return statearr_15136;
})();var statearr_15137_15160 = state_15115__$1;(statearr_15137_15160[2] = null);
(statearr_15137_15160[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15141[0] = state_machine__5507__auto__);
(statearr_15141[1] = 1);
return statearr_15141;
});
var state_machine__5507__auto____1 = (function (state_15115){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15115);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15142){if((e15142 instanceof Object))
{var ex__5510__auto__ = e15142;var statearr_15143_15161 = state_15115;(statearr_15143_15161[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15162 = state_15115;
state_15115 = G__15162;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15115){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15144 = f__5522__auto__.call(null);(statearr_15144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15145);
return statearr_15144;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15246){var state_val_15247 = (state_15246[1]);if((state_val_15247 === 1))
{var inst_15217 = cljs.core.vec.call(null,chs);var inst_15218 = inst_15217;var state_15246__$1 = (function (){var statearr_15248 = state_15246;(statearr_15248[7] = inst_15218);
return statearr_15248;
})();var statearr_15249_15271 = state_15246__$1;(statearr_15249_15271[2] = null);
(statearr_15249_15271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 2))
{var inst_15218 = (state_15246[7]);var inst_15220 = cljs.core.count.call(null,inst_15218);var inst_15221 = (inst_15220 > 0);var state_15246__$1 = state_15246;if(cljs.core.truth_(inst_15221))
{var statearr_15250_15272 = state_15246__$1;(statearr_15250_15272[1] = 4);
} else
{var statearr_15251_15273 = state_15246__$1;(statearr_15251_15273[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 3))
{var inst_15244 = (state_15246[2]);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15246__$1,inst_15244);
} else
{if((state_val_15247 === 4))
{var inst_15218 = (state_15246[7]);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15246__$1,7,inst_15218);
} else
{if((state_val_15247 === 5))
{var inst_15240 = cljs.core.async.close_BANG_.call(null,out);var state_15246__$1 = state_15246;var statearr_15252_15274 = state_15246__$1;(statearr_15252_15274[2] = inst_15240);
(statearr_15252_15274[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 6))
{var inst_15242 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15253_15275 = state_15246__$1;(statearr_15253_15275[2] = inst_15242);
(statearr_15253_15275[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 7))
{var inst_15226 = (state_15246[8]);var inst_15225 = (state_15246[9]);var inst_15225__$1 = (state_15246[2]);var inst_15226__$1 = cljs.core.nth.call(null,inst_15225__$1,0,null);var inst_15227 = cljs.core.nth.call(null,inst_15225__$1,1,null);var inst_15228 = (inst_15226__$1 == null);var state_15246__$1 = (function (){var statearr_15254 = state_15246;(statearr_15254[10] = inst_15227);
(statearr_15254[8] = inst_15226__$1);
(statearr_15254[9] = inst_15225__$1);
return statearr_15254;
})();if(cljs.core.truth_(inst_15228))
{var statearr_15255_15276 = state_15246__$1;(statearr_15255_15276[1] = 8);
} else
{var statearr_15256_15277 = state_15246__$1;(statearr_15256_15277[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 8))
{var inst_15218 = (state_15246[7]);var inst_15227 = (state_15246[10]);var inst_15226 = (state_15246[8]);var inst_15225 = (state_15246[9]);var inst_15230 = (function (){var c = inst_15227;var v = inst_15226;var vec__15223 = inst_15225;var cs = inst_15218;return ((function (c,v,vec__15223,cs,inst_15218,inst_15227,inst_15226,inst_15225,state_val_15247){
return (function (p1__15163_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15163_SHARP_);
});
;})(c,v,vec__15223,cs,inst_15218,inst_15227,inst_15226,inst_15225,state_val_15247))
})();var inst_15231 = cljs.core.filterv.call(null,inst_15230,inst_15218);var inst_15218__$1 = inst_15231;var state_15246__$1 = (function (){var statearr_15257 = state_15246;(statearr_15257[7] = inst_15218__$1);
return statearr_15257;
})();var statearr_15258_15278 = state_15246__$1;(statearr_15258_15278[2] = null);
(statearr_15258_15278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 9))
{var inst_15226 = (state_15246[8]);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15246__$1,11,out,inst_15226);
} else
{if((state_val_15247 === 10))
{var inst_15238 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15260_15279 = state_15246__$1;(statearr_15260_15279[2] = inst_15238);
(statearr_15260_15279[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 11))
{var inst_15218 = (state_15246[7]);var inst_15235 = (state_15246[2]);var tmp15259 = inst_15218;var inst_15218__$1 = tmp15259;var state_15246__$1 = (function (){var statearr_15261 = state_15246;(statearr_15261[7] = inst_15218__$1);
(statearr_15261[11] = inst_15235);
return statearr_15261;
})();var statearr_15262_15280 = state_15246__$1;(statearr_15262_15280[2] = null);
(statearr_15262_15280[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15266 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15266[0] = state_machine__5507__auto__);
(statearr_15266[1] = 1);
return statearr_15266;
});
var state_machine__5507__auto____1 = (function (state_15246){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object))
{var ex__5510__auto__ = e15267;var statearr_15268_15281 = state_15246;(statearr_15268_15281[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15282 = state_15246;
state_15246 = G__15282;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15246){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15269 = f__5522__auto__.call(null);(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15270);
return statearr_15269;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15375 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15352){var state_val_15353 = (state_15352[1]);if((state_val_15353 === 1))
{var inst_15329 = 0;var state_15352__$1 = (function (){var statearr_15354 = state_15352;(statearr_15354[7] = inst_15329);
return statearr_15354;
})();var statearr_15355_15376 = state_15352__$1;(statearr_15355_15376[2] = null);
(statearr_15355_15376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 2))
{var inst_15329 = (state_15352[7]);var inst_15331 = (inst_15329 < n);var state_15352__$1 = state_15352;if(cljs.core.truth_(inst_15331))
{var statearr_15356_15377 = state_15352__$1;(statearr_15356_15377[1] = 4);
} else
{var statearr_15357_15378 = state_15352__$1;(statearr_15357_15378[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 3))
{var inst_15349 = (state_15352[2]);var inst_15350 = cljs.core.async.close_BANG_.call(null,out);var state_15352__$1 = (function (){var statearr_15358 = state_15352;(statearr_15358[8] = inst_15349);
return statearr_15358;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15352__$1,inst_15350);
} else
{if((state_val_15353 === 4))
{var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15352__$1,7,ch);
} else
{if((state_val_15353 === 5))
{var state_15352__$1 = state_15352;var statearr_15359_15379 = state_15352__$1;(statearr_15359_15379[2] = null);
(statearr_15359_15379[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 6))
{var inst_15347 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15360_15380 = state_15352__$1;(statearr_15360_15380[2] = inst_15347);
(statearr_15360_15380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 7))
{var inst_15334 = (state_15352[9]);var inst_15334__$1 = (state_15352[2]);var inst_15335 = (inst_15334__$1 == null);var inst_15336 = cljs.core.not.call(null,inst_15335);var state_15352__$1 = (function (){var statearr_15361 = state_15352;(statearr_15361[9] = inst_15334__$1);
return statearr_15361;
})();if(inst_15336)
{var statearr_15362_15381 = state_15352__$1;(statearr_15362_15381[1] = 8);
} else
{var statearr_15363_15382 = state_15352__$1;(statearr_15363_15382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 8))
{var inst_15334 = (state_15352[9]);var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15352__$1,11,out,inst_15334);
} else
{if((state_val_15353 === 9))
{var state_15352__$1 = state_15352;var statearr_15364_15383 = state_15352__$1;(statearr_15364_15383[2] = null);
(statearr_15364_15383[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 10))
{var inst_15344 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15365_15384 = state_15352__$1;(statearr_15365_15384[2] = inst_15344);
(statearr_15365_15384[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 11))
{var inst_15329 = (state_15352[7]);var inst_15339 = (state_15352[2]);var inst_15340 = (inst_15329 + 1);var inst_15329__$1 = inst_15340;var state_15352__$1 = (function (){var statearr_15366 = state_15352;(statearr_15366[10] = inst_15339);
(statearr_15366[7] = inst_15329__$1);
return statearr_15366;
})();var statearr_15367_15385 = state_15352__$1;(statearr_15367_15385[2] = null);
(statearr_15367_15385[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15371 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15371[0] = state_machine__5507__auto__);
(statearr_15371[1] = 1);
return statearr_15371;
});
var state_machine__5507__auto____1 = (function (state_15352){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15372){if((e15372 instanceof Object))
{var ex__5510__auto__ = e15372;var statearr_15373_15386 = state_15352;(statearr_15373_15386[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15387 = state_15352;
state_15352 = G__15387;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15374 = f__5522__auto__.call(null);(statearr_15374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15375);
return statearr_15374;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15484 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15459){var state_val_15460 = (state_15459[1]);if((state_val_15460 === 1))
{var inst_15436 = null;var state_15459__$1 = (function (){var statearr_15461 = state_15459;(statearr_15461[7] = inst_15436);
return statearr_15461;
})();var statearr_15462_15485 = state_15459__$1;(statearr_15462_15485[2] = null);
(statearr_15462_15485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 2))
{var state_15459__$1 = state_15459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15459__$1,4,ch);
} else
{if((state_val_15460 === 3))
{var inst_15456 = (state_15459[2]);var inst_15457 = cljs.core.async.close_BANG_.call(null,out);var state_15459__$1 = (function (){var statearr_15463 = state_15459;(statearr_15463[8] = inst_15456);
return statearr_15463;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15459__$1,inst_15457);
} else
{if((state_val_15460 === 4))
{var inst_15439 = (state_15459[9]);var inst_15439__$1 = (state_15459[2]);var inst_15440 = (inst_15439__$1 == null);var inst_15441 = cljs.core.not.call(null,inst_15440);var state_15459__$1 = (function (){var statearr_15464 = state_15459;(statearr_15464[9] = inst_15439__$1);
return statearr_15464;
})();if(inst_15441)
{var statearr_15465_15486 = state_15459__$1;(statearr_15465_15486[1] = 5);
} else
{var statearr_15466_15487 = state_15459__$1;(statearr_15466_15487[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 5))
{var inst_15439 = (state_15459[9]);var inst_15436 = (state_15459[7]);var inst_15443 = cljs.core._EQ_.call(null,inst_15439,inst_15436);var state_15459__$1 = state_15459;if(inst_15443)
{var statearr_15467_15488 = state_15459__$1;(statearr_15467_15488[1] = 8);
} else
{var statearr_15468_15489 = state_15459__$1;(statearr_15468_15489[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 6))
{var state_15459__$1 = state_15459;var statearr_15470_15490 = state_15459__$1;(statearr_15470_15490[2] = null);
(statearr_15470_15490[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 7))
{var inst_15454 = (state_15459[2]);var state_15459__$1 = state_15459;var statearr_15471_15491 = state_15459__$1;(statearr_15471_15491[2] = inst_15454);
(statearr_15471_15491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 8))
{var inst_15436 = (state_15459[7]);var tmp15469 = inst_15436;var inst_15436__$1 = tmp15469;var state_15459__$1 = (function (){var statearr_15472 = state_15459;(statearr_15472[7] = inst_15436__$1);
return statearr_15472;
})();var statearr_15473_15492 = state_15459__$1;(statearr_15473_15492[2] = null);
(statearr_15473_15492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 9))
{var inst_15439 = (state_15459[9]);var state_15459__$1 = state_15459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15459__$1,11,out,inst_15439);
} else
{if((state_val_15460 === 10))
{var inst_15451 = (state_15459[2]);var state_15459__$1 = state_15459;var statearr_15474_15493 = state_15459__$1;(statearr_15474_15493[2] = inst_15451);
(statearr_15474_15493[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15460 === 11))
{var inst_15439 = (state_15459[9]);var inst_15448 = (state_15459[2]);var inst_15436 = inst_15439;var state_15459__$1 = (function (){var statearr_15475 = state_15459;(statearr_15475[10] = inst_15448);
(statearr_15475[7] = inst_15436);
return statearr_15475;
})();var statearr_15476_15494 = state_15459__$1;(statearr_15476_15494[2] = null);
(statearr_15476_15494[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15480 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15480[0] = state_machine__5507__auto__);
(statearr_15480[1] = 1);
return statearr_15480;
});
var state_machine__5507__auto____1 = (function (state_15459){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15459);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15481){if((e15481 instanceof Object))
{var ex__5510__auto__ = e15481;var statearr_15482_15495 = state_15459;(statearr_15482_15495[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15496 = state_15459;
state_15459 = G__15496;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15459){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15483 = f__5522__auto__.call(null);(statearr_15483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15484);
return statearr_15483;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15631 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15601){var state_val_15602 = (state_15601[1]);if((state_val_15602 === 1))
{var inst_15564 = (new Array(n));var inst_15565 = inst_15564;var inst_15566 = 0;var state_15601__$1 = (function (){var statearr_15603 = state_15601;(statearr_15603[7] = inst_15566);
(statearr_15603[8] = inst_15565);
return statearr_15603;
})();var statearr_15604_15632 = state_15601__$1;(statearr_15604_15632[2] = null);
(statearr_15604_15632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 2))
{var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15601__$1,4,ch);
} else
{if((state_val_15602 === 3))
{var inst_15599 = (state_15601[2]);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15601__$1,inst_15599);
} else
{if((state_val_15602 === 4))
{var inst_15569 = (state_15601[9]);var inst_15569__$1 = (state_15601[2]);var inst_15570 = (inst_15569__$1 == null);var inst_15571 = cljs.core.not.call(null,inst_15570);var state_15601__$1 = (function (){var statearr_15605 = state_15601;(statearr_15605[9] = inst_15569__$1);
return statearr_15605;
})();if(inst_15571)
{var statearr_15606_15633 = state_15601__$1;(statearr_15606_15633[1] = 5);
} else
{var statearr_15607_15634 = state_15601__$1;(statearr_15607_15634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 5))
{var inst_15574 = (state_15601[10]);var inst_15569 = (state_15601[9]);var inst_15566 = (state_15601[7]);var inst_15565 = (state_15601[8]);var inst_15573 = (inst_15565[inst_15566] = inst_15569);var inst_15574__$1 = (inst_15566 + 1);var inst_15575 = (inst_15574__$1 < n);var state_15601__$1 = (function (){var statearr_15608 = state_15601;(statearr_15608[11] = inst_15573);
(statearr_15608[10] = inst_15574__$1);
return statearr_15608;
})();if(cljs.core.truth_(inst_15575))
{var statearr_15609_15635 = state_15601__$1;(statearr_15609_15635[1] = 8);
} else
{var statearr_15610_15636 = state_15601__$1;(statearr_15610_15636[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 6))
{var inst_15566 = (state_15601[7]);var inst_15587 = (inst_15566 > 0);var state_15601__$1 = state_15601;if(cljs.core.truth_(inst_15587))
{var statearr_15612_15637 = state_15601__$1;(statearr_15612_15637[1] = 12);
} else
{var statearr_15613_15638 = state_15601__$1;(statearr_15613_15638[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 7))
{var inst_15597 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15614_15639 = state_15601__$1;(statearr_15614_15639[2] = inst_15597);
(statearr_15614_15639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 8))
{var inst_15574 = (state_15601[10]);var inst_15565 = (state_15601[8]);var tmp15611 = inst_15565;var inst_15565__$1 = tmp15611;var inst_15566 = inst_15574;var state_15601__$1 = (function (){var statearr_15615 = state_15601;(statearr_15615[7] = inst_15566);
(statearr_15615[8] = inst_15565__$1);
return statearr_15615;
})();var statearr_15616_15640 = state_15601__$1;(statearr_15616_15640[2] = null);
(statearr_15616_15640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 9))
{var inst_15565 = (state_15601[8]);var inst_15579 = cljs.core.vec.call(null,inst_15565);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15601__$1,11,out,inst_15579);
} else
{if((state_val_15602 === 10))
{var inst_15585 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15617_15641 = state_15601__$1;(statearr_15617_15641[2] = inst_15585);
(statearr_15617_15641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 11))
{var inst_15581 = (state_15601[2]);var inst_15582 = (new Array(n));var inst_15565 = inst_15582;var inst_15566 = 0;var state_15601__$1 = (function (){var statearr_15618 = state_15601;(statearr_15618[12] = inst_15581);
(statearr_15618[7] = inst_15566);
(statearr_15618[8] = inst_15565);
return statearr_15618;
})();var statearr_15619_15642 = state_15601__$1;(statearr_15619_15642[2] = null);
(statearr_15619_15642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 12))
{var inst_15565 = (state_15601[8]);var inst_15589 = cljs.core.vec.call(null,inst_15565);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15601__$1,15,out,inst_15589);
} else
{if((state_val_15602 === 13))
{var state_15601__$1 = state_15601;var statearr_15620_15643 = state_15601__$1;(statearr_15620_15643[2] = null);
(statearr_15620_15643[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 14))
{var inst_15594 = (state_15601[2]);var inst_15595 = cljs.core.async.close_BANG_.call(null,out);var state_15601__$1 = (function (){var statearr_15621 = state_15601;(statearr_15621[13] = inst_15594);
return statearr_15621;
})();var statearr_15622_15644 = state_15601__$1;(statearr_15622_15644[2] = inst_15595);
(statearr_15622_15644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 15))
{var inst_15591 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15623_15645 = state_15601__$1;(statearr_15623_15645[2] = inst_15591);
(statearr_15623_15645[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15627[0] = state_machine__5507__auto__);
(statearr_15627[1] = 1);
return statearr_15627;
});
var state_machine__5507__auto____1 = (function (state_15601){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15628){if((e15628 instanceof Object))
{var ex__5510__auto__ = e15628;var statearr_15629_15646 = state_15601;(statearr_15629_15646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15647 = state_15601;
state_15601 = G__15647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15601){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15630 = f__5522__auto__.call(null);(statearr_15630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15631);
return statearr_15630;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15760){var state_val_15761 = (state_15760[1]);if((state_val_15761 === 1))
{var inst_15719 = [];var inst_15720 = inst_15719;var inst_15721 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15760__$1 = (function (){var statearr_15762 = state_15760;(statearr_15762[7] = inst_15721);
(statearr_15762[8] = inst_15720);
return statearr_15762;
})();var statearr_15763_15791 = state_15760__$1;(statearr_15763_15791[2] = null);
(statearr_15763_15791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 2))
{var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15760__$1,4,ch);
} else
{if((state_val_15761 === 3))
{var inst_15758 = (state_15760[2]);var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15760__$1,inst_15758);
} else
{if((state_val_15761 === 4))
{var inst_15724 = (state_15760[9]);var inst_15724__$1 = (state_15760[2]);var inst_15725 = (inst_15724__$1 == null);var inst_15726 = cljs.core.not.call(null,inst_15725);var state_15760__$1 = (function (){var statearr_15764 = state_15760;(statearr_15764[9] = inst_15724__$1);
return statearr_15764;
})();if(inst_15726)
{var statearr_15765_15792 = state_15760__$1;(statearr_15765_15792[1] = 5);
} else
{var statearr_15766_15793 = state_15760__$1;(statearr_15766_15793[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 5))
{var inst_15724 = (state_15760[9]);var inst_15728 = (state_15760[10]);var inst_15721 = (state_15760[7]);var inst_15728__$1 = f.call(null,inst_15724);var inst_15729 = cljs.core._EQ_.call(null,inst_15728__$1,inst_15721);var inst_15730 = cljs.core.keyword_identical_QMARK_.call(null,inst_15721,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15731 = (inst_15729) || (inst_15730);var state_15760__$1 = (function (){var statearr_15767 = state_15760;(statearr_15767[10] = inst_15728__$1);
return statearr_15767;
})();if(cljs.core.truth_(inst_15731))
{var statearr_15768_15794 = state_15760__$1;(statearr_15768_15794[1] = 8);
} else
{var statearr_15769_15795 = state_15760__$1;(statearr_15769_15795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 6))
{var inst_15720 = (state_15760[8]);var inst_15745 = inst_15720.length;var inst_15746 = (inst_15745 > 0);var state_15760__$1 = state_15760;if(cljs.core.truth_(inst_15746))
{var statearr_15771_15796 = state_15760__$1;(statearr_15771_15796[1] = 12);
} else
{var statearr_15772_15797 = state_15760__$1;(statearr_15772_15797[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 7))
{var inst_15756 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15773_15798 = state_15760__$1;(statearr_15773_15798[2] = inst_15756);
(statearr_15773_15798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 8))
{var inst_15724 = (state_15760[9]);var inst_15728 = (state_15760[10]);var inst_15720 = (state_15760[8]);var inst_15733 = inst_15720.push(inst_15724);var tmp15770 = inst_15720;var inst_15720__$1 = tmp15770;var inst_15721 = inst_15728;var state_15760__$1 = (function (){var statearr_15774 = state_15760;(statearr_15774[11] = inst_15733);
(statearr_15774[7] = inst_15721);
(statearr_15774[8] = inst_15720__$1);
return statearr_15774;
})();var statearr_15775_15799 = state_15760__$1;(statearr_15775_15799[2] = null);
(statearr_15775_15799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 9))
{var inst_15720 = (state_15760[8]);var inst_15736 = cljs.core.vec.call(null,inst_15720);var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15760__$1,11,out,inst_15736);
} else
{if((state_val_15761 === 10))
{var inst_15743 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15776_15800 = state_15760__$1;(statearr_15776_15800[2] = inst_15743);
(statearr_15776_15800[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 11))
{var inst_15724 = (state_15760[9]);var inst_15728 = (state_15760[10]);var inst_15738 = (state_15760[2]);var inst_15739 = [];var inst_15740 = inst_15739.push(inst_15724);var inst_15720 = inst_15739;var inst_15721 = inst_15728;var state_15760__$1 = (function (){var statearr_15777 = state_15760;(statearr_15777[12] = inst_15738);
(statearr_15777[13] = inst_15740);
(statearr_15777[7] = inst_15721);
(statearr_15777[8] = inst_15720);
return statearr_15777;
})();var statearr_15778_15801 = state_15760__$1;(statearr_15778_15801[2] = null);
(statearr_15778_15801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 12))
{var inst_15720 = (state_15760[8]);var inst_15748 = cljs.core.vec.call(null,inst_15720);var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15760__$1,15,out,inst_15748);
} else
{if((state_val_15761 === 13))
{var state_15760__$1 = state_15760;var statearr_15779_15802 = state_15760__$1;(statearr_15779_15802[2] = null);
(statearr_15779_15802[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 14))
{var inst_15753 = (state_15760[2]);var inst_15754 = cljs.core.async.close_BANG_.call(null,out);var state_15760__$1 = (function (){var statearr_15780 = state_15760;(statearr_15780[14] = inst_15753);
return statearr_15780;
})();var statearr_15781_15803 = state_15760__$1;(statearr_15781_15803[2] = inst_15754);
(statearr_15781_15803[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 15))
{var inst_15750 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15782_15804 = state_15760__$1;(statearr_15782_15804[2] = inst_15750);
(statearr_15782_15804[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15786[0] = state_machine__5507__auto__);
(statearr_15786[1] = 1);
return statearr_15786;
});
var state_machine__5507__auto____1 = (function (state_15760){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15787){if((e15787 instanceof Object))
{var ex__5510__auto__ = e15787;var statearr_15788_15805 = state_15760;(statearr_15788_15805[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15806 = state_15760;
state_15760 = G__15806;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15760){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15789 = f__5522__auto__.call(null);(statearr_15789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15790);
return statearr_15789;
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