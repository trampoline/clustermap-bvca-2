// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_31202 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31204 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31204,opt_wrapper_31202,table_section_wrapper_31203,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31202,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31203,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31203,cell_wrapper_31204,table_section_wrapper_31203,table_section_wrapper_31203]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__31209 = cljs.core.seq.call(null,tbody);var chunk__31210 = null;var count__31211 = (0);var i__31212 = (0);while(true){
if((i__31212 < count__31211))
{var child = cljs.core._nth.call(null,chunk__31210,i__31212);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31213 = seq__31209;
var G__31214 = chunk__31210;
var G__31215 = count__31211;
var G__31216 = (i__31212 + (1));
seq__31209 = G__31213;
chunk__31210 = G__31214;
count__31211 = G__31215;
i__31212 = G__31216;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31209);if(temp__4126__auto__)
{var seq__31209__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31209__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31209__$1);{
var G__31217 = cljs.core.chunk_rest.call(null,seq__31209__$1);
var G__31218 = c__4299__auto__;
var G__31219 = cljs.core.count.call(null,c__4299__auto__);
var G__31220 = (0);
seq__31209 = G__31217;
chunk__31210 = G__31218;
count__31211 = G__31219;
i__31212 = G__31220;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31209__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31221 = cljs.core.next.call(null,seq__31209__$1);
var G__31222 = null;
var G__31223 = (0);
var G__31224 = (0);
seq__31209 = G__31221;
chunk__31210 = G__31222;
count__31211 = G__31223;
i__31212 = G__31224;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31226 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31226,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31226,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31226,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31227 = wrapper.lastChild;
var G__31228 = (level - (1));
wrapper = G__31227;
level = G__31228;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj31230 = {};return obj31230;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__31231){
var mesg = cljs.core.seq(arglist__31231);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__31232){
var mesg = cljs.core.seq(arglist__31232);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__31233){
var contents = cljs.core.seq(arglist__31233);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31234_SHARP_){return p1__31234_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31235_SHARP_,p2__31236_SHARP_){return goog.dom.insertChildAt(p1__31235_SHARP_,p2__31236_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31238_SHARP_,p2__31237_SHARP_){return goog.dom.insertSiblingBefore(p2__31237_SHARP_,p1__31238_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31240_SHARP_,p2__31239_SHARP_){return goog.dom.insertSiblingAfter(p2__31239_SHARP_,p1__31240_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31242_SHARP_,p2__31241_SHARP_){return goog.dom.replaceNode(p2__31241_SHARP_,p1__31242_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__31247_31251 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31248_31252 = null;var count__31249_31253 = (0);var i__31250_31254 = (0);while(true){
if((i__31250_31254 < count__31249_31253))
{var n_31255 = cljs.core._nth.call(null,chunk__31248_31252,i__31250_31254);goog.style.setStyle(n_31255,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31256 = seq__31247_31251;
var G__31257 = chunk__31248_31252;
var G__31258 = count__31249_31253;
var G__31259 = (i__31250_31254 + (1));
seq__31247_31251 = G__31256;
chunk__31248_31252 = G__31257;
count__31249_31253 = G__31258;
i__31250_31254 = G__31259;
continue;
}
} else
{var temp__4126__auto___31260 = cljs.core.seq.call(null,seq__31247_31251);if(temp__4126__auto___31260)
{var seq__31247_31261__$1 = temp__4126__auto___31260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31247_31261__$1))
{var c__4299__auto___31262 = cljs.core.chunk_first.call(null,seq__31247_31261__$1);{
var G__31263 = cljs.core.chunk_rest.call(null,seq__31247_31261__$1);
var G__31264 = c__4299__auto___31262;
var G__31265 = cljs.core.count.call(null,c__4299__auto___31262);
var G__31266 = (0);
seq__31247_31251 = G__31263;
chunk__31248_31252 = G__31264;
count__31249_31253 = G__31265;
i__31250_31254 = G__31266;
continue;
}
} else
{var n_31267 = cljs.core.first.call(null,seq__31247_31261__$1);goog.style.setStyle(n_31267,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31268 = cljs.core.next.call(null,seq__31247_31261__$1);
var G__31269 = null;
var G__31270 = (0);
var G__31271 = (0);
seq__31247_31251 = G__31268;
chunk__31248_31252 = G__31269;
count__31249_31253 = G__31270;
i__31250_31254 = G__31271;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31272){
var content = cljs.core.first(arglist__31272);
arglist__31272 = cljs.core.next(arglist__31272);
var name = cljs.core.first(arglist__31272);
var value = cljs.core.rest(arglist__31272);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__31277_31281 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31278_31282 = null;var count__31279_31283 = (0);var i__31280_31284 = (0);while(true){
if((i__31280_31284 < count__31279_31283))
{var n_31285 = cljs.core._nth.call(null,chunk__31278_31282,i__31280_31284);n_31285.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31286 = seq__31277_31281;
var G__31287 = chunk__31278_31282;
var G__31288 = count__31279_31283;
var G__31289 = (i__31280_31284 + (1));
seq__31277_31281 = G__31286;
chunk__31278_31282 = G__31287;
count__31279_31283 = G__31288;
i__31280_31284 = G__31289;
continue;
}
} else
{var temp__4126__auto___31290 = cljs.core.seq.call(null,seq__31277_31281);if(temp__4126__auto___31290)
{var seq__31277_31291__$1 = temp__4126__auto___31290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31277_31291__$1))
{var c__4299__auto___31292 = cljs.core.chunk_first.call(null,seq__31277_31291__$1);{
var G__31293 = cljs.core.chunk_rest.call(null,seq__31277_31291__$1);
var G__31294 = c__4299__auto___31292;
var G__31295 = cljs.core.count.call(null,c__4299__auto___31292);
var G__31296 = (0);
seq__31277_31281 = G__31293;
chunk__31278_31282 = G__31294;
count__31279_31283 = G__31295;
i__31280_31284 = G__31296;
continue;
}
} else
{var n_31297 = cljs.core.first.call(null,seq__31277_31291__$1);n_31297.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31298 = cljs.core.next.call(null,seq__31277_31291__$1);
var G__31299 = null;
var G__31300 = (0);
var G__31301 = (0);
seq__31277_31281 = G__31298;
chunk__31278_31282 = G__31299;
count__31279_31283 = G__31300;
i__31280_31284 = G__31301;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__31302){
var content = cljs.core.first(arglist__31302);
arglist__31302 = cljs.core.next(arglist__31302);
var name = cljs.core.first(arglist__31302);
var value = cljs.core.rest(arglist__31302);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__31307_31311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31308_31312 = null;var count__31309_31313 = (0);var i__31310_31314 = (0);while(true){
if((i__31310_31314 < count__31309_31313))
{var n_31315 = cljs.core._nth.call(null,chunk__31308_31312,i__31310_31314);n_31315.removeAttribute(cljs.core.name.call(null,name));
{
var G__31316 = seq__31307_31311;
var G__31317 = chunk__31308_31312;
var G__31318 = count__31309_31313;
var G__31319 = (i__31310_31314 + (1));
seq__31307_31311 = G__31316;
chunk__31308_31312 = G__31317;
count__31309_31313 = G__31318;
i__31310_31314 = G__31319;
continue;
}
} else
{var temp__4126__auto___31320 = cljs.core.seq.call(null,seq__31307_31311);if(temp__4126__auto___31320)
{var seq__31307_31321__$1 = temp__4126__auto___31320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31307_31321__$1))
{var c__4299__auto___31322 = cljs.core.chunk_first.call(null,seq__31307_31321__$1);{
var G__31323 = cljs.core.chunk_rest.call(null,seq__31307_31321__$1);
var G__31324 = c__4299__auto___31322;
var G__31325 = cljs.core.count.call(null,c__4299__auto___31322);
var G__31326 = (0);
seq__31307_31311 = G__31323;
chunk__31308_31312 = G__31324;
count__31309_31313 = G__31325;
i__31310_31314 = G__31326;
continue;
}
} else
{var n_31327 = cljs.core.first.call(null,seq__31307_31321__$1);n_31327.removeAttribute(cljs.core.name.call(null,name));
{
var G__31328 = cljs.core.next.call(null,seq__31307_31321__$1);
var G__31329 = null;
var G__31330 = (0);
var G__31331 = (0);
seq__31307_31311 = G__31328;
chunk__31308_31312 = G__31329;
count__31309_31313 = G__31330;
i__31310_31314 = G__31331;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__31333 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__31333,(0),null);var v = cljs.core.nth.call(null,vec__31333,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__31334_SHARP_){var attr = attrs__$1.item(p1__31334_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__31341_31347 = cljs.core.seq.call(null,styles);var chunk__31342_31348 = null;var count__31343_31349 = (0);var i__31344_31350 = (0);while(true){
if((i__31344_31350 < count__31343_31349))
{var vec__31345_31351 = cljs.core._nth.call(null,chunk__31342_31348,i__31344_31350);var name_31352 = cljs.core.nth.call(null,vec__31345_31351,(0),null);var value_31353 = cljs.core.nth.call(null,vec__31345_31351,(1),null);domina.set_style_BANG_.call(null,content,name_31352,value_31353);
{
var G__31354 = seq__31341_31347;
var G__31355 = chunk__31342_31348;
var G__31356 = count__31343_31349;
var G__31357 = (i__31344_31350 + (1));
seq__31341_31347 = G__31354;
chunk__31342_31348 = G__31355;
count__31343_31349 = G__31356;
i__31344_31350 = G__31357;
continue;
}
} else
{var temp__4126__auto___31358 = cljs.core.seq.call(null,seq__31341_31347);if(temp__4126__auto___31358)
{var seq__31341_31359__$1 = temp__4126__auto___31358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31341_31359__$1))
{var c__4299__auto___31360 = cljs.core.chunk_first.call(null,seq__31341_31359__$1);{
var G__31361 = cljs.core.chunk_rest.call(null,seq__31341_31359__$1);
var G__31362 = c__4299__auto___31360;
var G__31363 = cljs.core.count.call(null,c__4299__auto___31360);
var G__31364 = (0);
seq__31341_31347 = G__31361;
chunk__31342_31348 = G__31362;
count__31343_31349 = G__31363;
i__31344_31350 = G__31364;
continue;
}
} else
{var vec__31346_31365 = cljs.core.first.call(null,seq__31341_31359__$1);var name_31366 = cljs.core.nth.call(null,vec__31346_31365,(0),null);var value_31367 = cljs.core.nth.call(null,vec__31346_31365,(1),null);domina.set_style_BANG_.call(null,content,name_31366,value_31367);
{
var G__31368 = cljs.core.next.call(null,seq__31341_31359__$1);
var G__31369 = null;
var G__31370 = (0);
var G__31371 = (0);
seq__31341_31347 = G__31368;
chunk__31342_31348 = G__31369;
count__31343_31349 = G__31370;
i__31344_31350 = G__31371;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__31378_31384 = cljs.core.seq.call(null,attrs);var chunk__31379_31385 = null;var count__31380_31386 = (0);var i__31381_31387 = (0);while(true){
if((i__31381_31387 < count__31380_31386))
{var vec__31382_31388 = cljs.core._nth.call(null,chunk__31379_31385,i__31381_31387);var name_31389 = cljs.core.nth.call(null,vec__31382_31388,(0),null);var value_31390 = cljs.core.nth.call(null,vec__31382_31388,(1),null);domina.set_attr_BANG_.call(null,content,name_31389,value_31390);
{
var G__31391 = seq__31378_31384;
var G__31392 = chunk__31379_31385;
var G__31393 = count__31380_31386;
var G__31394 = (i__31381_31387 + (1));
seq__31378_31384 = G__31391;
chunk__31379_31385 = G__31392;
count__31380_31386 = G__31393;
i__31381_31387 = G__31394;
continue;
}
} else
{var temp__4126__auto___31395 = cljs.core.seq.call(null,seq__31378_31384);if(temp__4126__auto___31395)
{var seq__31378_31396__$1 = temp__4126__auto___31395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31378_31396__$1))
{var c__4299__auto___31397 = cljs.core.chunk_first.call(null,seq__31378_31396__$1);{
var G__31398 = cljs.core.chunk_rest.call(null,seq__31378_31396__$1);
var G__31399 = c__4299__auto___31397;
var G__31400 = cljs.core.count.call(null,c__4299__auto___31397);
var G__31401 = (0);
seq__31378_31384 = G__31398;
chunk__31379_31385 = G__31399;
count__31380_31386 = G__31400;
i__31381_31387 = G__31401;
continue;
}
} else
{var vec__31383_31402 = cljs.core.first.call(null,seq__31378_31396__$1);var name_31403 = cljs.core.nth.call(null,vec__31383_31402,(0),null);var value_31404 = cljs.core.nth.call(null,vec__31383_31402,(1),null);domina.set_attr_BANG_.call(null,content,name_31403,value_31404);
{
var G__31405 = cljs.core.next.call(null,seq__31378_31396__$1);
var G__31406 = null;
var G__31407 = (0);
var G__31408 = (0);
seq__31378_31384 = G__31405;
chunk__31379_31385 = G__31406;
count__31380_31386 = G__31407;
i__31381_31387 = G__31408;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__31413_31417 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31414_31418 = null;var count__31415_31419 = (0);var i__31416_31420 = (0);while(true){
if((i__31416_31420 < count__31415_31419))
{var node_31421 = cljs.core._nth.call(null,chunk__31414_31418,i__31416_31420);goog.dom.classes.add(node_31421,class$);
{
var G__31422 = seq__31413_31417;
var G__31423 = chunk__31414_31418;
var G__31424 = count__31415_31419;
var G__31425 = (i__31416_31420 + (1));
seq__31413_31417 = G__31422;
chunk__31414_31418 = G__31423;
count__31415_31419 = G__31424;
i__31416_31420 = G__31425;
continue;
}
} else
{var temp__4126__auto___31426 = cljs.core.seq.call(null,seq__31413_31417);if(temp__4126__auto___31426)
{var seq__31413_31427__$1 = temp__4126__auto___31426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31413_31427__$1))
{var c__4299__auto___31428 = cljs.core.chunk_first.call(null,seq__31413_31427__$1);{
var G__31429 = cljs.core.chunk_rest.call(null,seq__31413_31427__$1);
var G__31430 = c__4299__auto___31428;
var G__31431 = cljs.core.count.call(null,c__4299__auto___31428);
var G__31432 = (0);
seq__31413_31417 = G__31429;
chunk__31414_31418 = G__31430;
count__31415_31419 = G__31431;
i__31416_31420 = G__31432;
continue;
}
} else
{var node_31433 = cljs.core.first.call(null,seq__31413_31427__$1);goog.dom.classes.add(node_31433,class$);
{
var G__31434 = cljs.core.next.call(null,seq__31413_31427__$1);
var G__31435 = null;
var G__31436 = (0);
var G__31437 = (0);
seq__31413_31417 = G__31434;
chunk__31414_31418 = G__31435;
count__31415_31419 = G__31436;
i__31416_31420 = G__31437;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__31442_31446 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31443_31447 = null;var count__31444_31448 = (0);var i__31445_31449 = (0);while(true){
if((i__31445_31449 < count__31444_31448))
{var node_31450 = cljs.core._nth.call(null,chunk__31443_31447,i__31445_31449);goog.dom.classes.remove(node_31450,class$);
{
var G__31451 = seq__31442_31446;
var G__31452 = chunk__31443_31447;
var G__31453 = count__31444_31448;
var G__31454 = (i__31445_31449 + (1));
seq__31442_31446 = G__31451;
chunk__31443_31447 = G__31452;
count__31444_31448 = G__31453;
i__31445_31449 = G__31454;
continue;
}
} else
{var temp__4126__auto___31455 = cljs.core.seq.call(null,seq__31442_31446);if(temp__4126__auto___31455)
{var seq__31442_31456__$1 = temp__4126__auto___31455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31442_31456__$1))
{var c__4299__auto___31457 = cljs.core.chunk_first.call(null,seq__31442_31456__$1);{
var G__31458 = cljs.core.chunk_rest.call(null,seq__31442_31456__$1);
var G__31459 = c__4299__auto___31457;
var G__31460 = cljs.core.count.call(null,c__4299__auto___31457);
var G__31461 = (0);
seq__31442_31446 = G__31458;
chunk__31443_31447 = G__31459;
count__31444_31448 = G__31460;
i__31445_31449 = G__31461;
continue;
}
} else
{var node_31462 = cljs.core.first.call(null,seq__31442_31456__$1);goog.dom.classes.remove(node_31462,class$);
{
var G__31463 = cljs.core.next.call(null,seq__31442_31456__$1);
var G__31464 = null;
var G__31465 = (0);
var G__31466 = (0);
seq__31442_31446 = G__31463;
chunk__31443_31447 = G__31464;
count__31444_31448 = G__31465;
i__31445_31449 = G__31466;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__31471_31475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31472_31476 = null;var count__31473_31477 = (0);var i__31474_31478 = (0);while(true){
if((i__31474_31478 < count__31473_31477))
{var node_31479 = cljs.core._nth.call(null,chunk__31472_31476,i__31474_31478);goog.dom.classes.toggle(node_31479,class$);
{
var G__31480 = seq__31471_31475;
var G__31481 = chunk__31472_31476;
var G__31482 = count__31473_31477;
var G__31483 = (i__31474_31478 + (1));
seq__31471_31475 = G__31480;
chunk__31472_31476 = G__31481;
count__31473_31477 = G__31482;
i__31474_31478 = G__31483;
continue;
}
} else
{var temp__4126__auto___31484 = cljs.core.seq.call(null,seq__31471_31475);if(temp__4126__auto___31484)
{var seq__31471_31485__$1 = temp__4126__auto___31484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31471_31485__$1))
{var c__4299__auto___31486 = cljs.core.chunk_first.call(null,seq__31471_31485__$1);{
var G__31487 = cljs.core.chunk_rest.call(null,seq__31471_31485__$1);
var G__31488 = c__4299__auto___31486;
var G__31489 = cljs.core.count.call(null,c__4299__auto___31486);
var G__31490 = (0);
seq__31471_31475 = G__31487;
chunk__31472_31476 = G__31488;
count__31473_31477 = G__31489;
i__31474_31478 = G__31490;
continue;
}
} else
{var node_31491 = cljs.core.first.call(null,seq__31471_31485__$1);goog.dom.classes.toggle(node_31491,class$);
{
var G__31492 = cljs.core.next.call(null,seq__31471_31485__$1);
var G__31493 = null;
var G__31494 = (0);
var G__31495 = (0);
seq__31471_31475 = G__31492;
chunk__31472_31476 = G__31493;
count__31473_31477 = G__31494;
i__31474_31478 = G__31495;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_31504__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__31500_31505 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31501_31506 = null;var count__31502_31507 = (0);var i__31503_31508 = (0);while(true){
if((i__31503_31508 < count__31502_31507))
{var node_31509 = cljs.core._nth.call(null,chunk__31501_31506,i__31503_31508);goog.dom.classes.set(node_31509,classes_31504__$1);
{
var G__31510 = seq__31500_31505;
var G__31511 = chunk__31501_31506;
var G__31512 = count__31502_31507;
var G__31513 = (i__31503_31508 + (1));
seq__31500_31505 = G__31510;
chunk__31501_31506 = G__31511;
count__31502_31507 = G__31512;
i__31503_31508 = G__31513;
continue;
}
} else
{var temp__4126__auto___31514 = cljs.core.seq.call(null,seq__31500_31505);if(temp__4126__auto___31514)
{var seq__31500_31515__$1 = temp__4126__auto___31514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31500_31515__$1))
{var c__4299__auto___31516 = cljs.core.chunk_first.call(null,seq__31500_31515__$1);{
var G__31517 = cljs.core.chunk_rest.call(null,seq__31500_31515__$1);
var G__31518 = c__4299__auto___31516;
var G__31519 = cljs.core.count.call(null,c__4299__auto___31516);
var G__31520 = (0);
seq__31500_31505 = G__31517;
chunk__31501_31506 = G__31518;
count__31502_31507 = G__31519;
i__31503_31508 = G__31520;
continue;
}
} else
{var node_31521 = cljs.core.first.call(null,seq__31500_31515__$1);goog.dom.classes.set(node_31521,classes_31504__$1);
{
var G__31522 = cljs.core.next.call(null,seq__31500_31515__$1);
var G__31523 = null;
var G__31524 = (0);
var G__31525 = (0);
seq__31500_31505 = G__31522;
chunk__31501_31506 = G__31523;
count__31502_31507 = G__31524;
i__31503_31508 = G__31525;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__31530_31534 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31531_31535 = null;var count__31532_31536 = (0);var i__31533_31537 = (0);while(true){
if((i__31533_31537 < count__31532_31536))
{var node_31538 = cljs.core._nth.call(null,chunk__31531_31535,i__31533_31537);goog.dom.setTextContent(node_31538,value);
{
var G__31539 = seq__31530_31534;
var G__31540 = chunk__31531_31535;
var G__31541 = count__31532_31536;
var G__31542 = (i__31533_31537 + (1));
seq__31530_31534 = G__31539;
chunk__31531_31535 = G__31540;
count__31532_31536 = G__31541;
i__31533_31537 = G__31542;
continue;
}
} else
{var temp__4126__auto___31543 = cljs.core.seq.call(null,seq__31530_31534);if(temp__4126__auto___31543)
{var seq__31530_31544__$1 = temp__4126__auto___31543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31530_31544__$1))
{var c__4299__auto___31545 = cljs.core.chunk_first.call(null,seq__31530_31544__$1);{
var G__31546 = cljs.core.chunk_rest.call(null,seq__31530_31544__$1);
var G__31547 = c__4299__auto___31545;
var G__31548 = cljs.core.count.call(null,c__4299__auto___31545);
var G__31549 = (0);
seq__31530_31534 = G__31546;
chunk__31531_31535 = G__31547;
count__31532_31536 = G__31548;
i__31533_31537 = G__31549;
continue;
}
} else
{var node_31550 = cljs.core.first.call(null,seq__31530_31544__$1);goog.dom.setTextContent(node_31550,value);
{
var G__31551 = cljs.core.next.call(null,seq__31530_31544__$1);
var G__31552 = null;
var G__31553 = (0);
var G__31554 = (0);
seq__31530_31534 = G__31551;
chunk__31531_31535 = G__31552;
count__31532_31536 = G__31553;
i__31533_31537 = G__31554;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__31559_31563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31560_31564 = null;var count__31561_31565 = (0);var i__31562_31566 = (0);while(true){
if((i__31562_31566 < count__31561_31565))
{var node_31567 = cljs.core._nth.call(null,chunk__31560_31564,i__31562_31566);goog.dom.forms.setValue(node_31567,value);
{
var G__31568 = seq__31559_31563;
var G__31569 = chunk__31560_31564;
var G__31570 = count__31561_31565;
var G__31571 = (i__31562_31566 + (1));
seq__31559_31563 = G__31568;
chunk__31560_31564 = G__31569;
count__31561_31565 = G__31570;
i__31562_31566 = G__31571;
continue;
}
} else
{var temp__4126__auto___31572 = cljs.core.seq.call(null,seq__31559_31563);if(temp__4126__auto___31572)
{var seq__31559_31573__$1 = temp__4126__auto___31572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31559_31573__$1))
{var c__4299__auto___31574 = cljs.core.chunk_first.call(null,seq__31559_31573__$1);{
var G__31575 = cljs.core.chunk_rest.call(null,seq__31559_31573__$1);
var G__31576 = c__4299__auto___31574;
var G__31577 = cljs.core.count.call(null,c__4299__auto___31574);
var G__31578 = (0);
seq__31559_31563 = G__31575;
chunk__31560_31564 = G__31576;
count__31561_31565 = G__31577;
i__31562_31566 = G__31578;
continue;
}
} else
{var node_31579 = cljs.core.first.call(null,seq__31559_31573__$1);goog.dom.forms.setValue(node_31579,value);
{
var G__31580 = cljs.core.next.call(null,seq__31559_31573__$1);
var G__31581 = null;
var G__31582 = (0);
var G__31583 = (0);
seq__31559_31563 = G__31580;
chunk__31560_31564 = G__31581;
count__31561_31565 = G__31582;
i__31562_31566 = G__31583;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_31594 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31590_31595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31591_31596 = null;var count__31592_31597 = (0);var i__31593_31598 = (0);while(true){
if((i__31593_31598 < count__31592_31597))
{var node_31599 = cljs.core._nth.call(null,chunk__31591_31596,i__31593_31598);node_31599.innerHTML = value_31594;
{
var G__31600 = seq__31590_31595;
var G__31601 = chunk__31591_31596;
var G__31602 = count__31592_31597;
var G__31603 = (i__31593_31598 + (1));
seq__31590_31595 = G__31600;
chunk__31591_31596 = G__31601;
count__31592_31597 = G__31602;
i__31593_31598 = G__31603;
continue;
}
} else
{var temp__4126__auto___31604 = cljs.core.seq.call(null,seq__31590_31595);if(temp__4126__auto___31604)
{var seq__31590_31605__$1 = temp__4126__auto___31604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31590_31605__$1))
{var c__4299__auto___31606 = cljs.core.chunk_first.call(null,seq__31590_31605__$1);{
var G__31607 = cljs.core.chunk_rest.call(null,seq__31590_31605__$1);
var G__31608 = c__4299__auto___31606;
var G__31609 = cljs.core.count.call(null,c__4299__auto___31606);
var G__31610 = (0);
seq__31590_31595 = G__31607;
chunk__31591_31596 = G__31608;
count__31592_31597 = G__31609;
i__31593_31598 = G__31610;
continue;
}
} else
{var node_31611 = cljs.core.first.call(null,seq__31590_31605__$1);node_31611.innerHTML = value_31594;
{
var G__31612 = cljs.core.next.call(null,seq__31590_31605__$1);
var G__31613 = null;
var G__31614 = (0);
var G__31615 = (0);
seq__31590_31595 = G__31612;
chunk__31591_31596 = G__31613;
count__31592_31597 = G__31614;
i__31593_31598 = G__31615;
continue;
}
}
} else
{}
}
break;
}
}catch (e31589){if((e31589 instanceof Error))
{var e_31616 = e31589;domina.replace_children_BANG_.call(null,content,value_31594);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31589;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31623_31627 = cljs.core.seq.call(null,children);var chunk__31624_31628 = null;var count__31625_31629 = (0);var i__31626_31630 = (0);while(true){
if((i__31626_31630 < count__31625_31629))
{var child_31631 = cljs.core._nth.call(null,chunk__31624_31628,i__31626_31630);frag.appendChild(child_31631);
{
var G__31632 = seq__31623_31627;
var G__31633 = chunk__31624_31628;
var G__31634 = count__31625_31629;
var G__31635 = (i__31626_31630 + (1));
seq__31623_31627 = G__31632;
chunk__31624_31628 = G__31633;
count__31625_31629 = G__31634;
i__31626_31630 = G__31635;
continue;
}
} else
{var temp__4126__auto___31636 = cljs.core.seq.call(null,seq__31623_31627);if(temp__4126__auto___31636)
{var seq__31623_31637__$1 = temp__4126__auto___31636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31623_31637__$1))
{var c__4299__auto___31638 = cljs.core.chunk_first.call(null,seq__31623_31637__$1);{
var G__31639 = cljs.core.chunk_rest.call(null,seq__31623_31637__$1);
var G__31640 = c__4299__auto___31638;
var G__31641 = cljs.core.count.call(null,c__4299__auto___31638);
var G__31642 = (0);
seq__31623_31627 = G__31639;
chunk__31624_31628 = G__31640;
count__31625_31629 = G__31641;
i__31626_31630 = G__31642;
continue;
}
} else
{var child_31643 = cljs.core.first.call(null,seq__31623_31637__$1);frag.appendChild(child_31643);
{
var G__31644 = cljs.core.next.call(null,seq__31623_31637__$1);
var G__31645 = null;
var G__31646 = (0);
var G__31647 = (0);
seq__31623_31627 = G__31644;
chunk__31624_31628 = G__31645;
count__31625_31629 = G__31646;
i__31626_31630 = G__31647;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__31617_SHARP_,p2__31618_SHARP_){return f.call(null,p1__31617_SHARP_,p2__31618_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__31649 = list_thing;if(G__31649)
{var bit__4193__auto__ = (G__31649.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31649.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31649);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__31650 = content;if(G__31650)
{var bit__4193__auto__ = (G__31650.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31650.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31650.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31650);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31650);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__31651 = content;if(G__31651)
{var bit__4193__auto__ = (G__31651.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31651.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31651.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31651);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31651);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
