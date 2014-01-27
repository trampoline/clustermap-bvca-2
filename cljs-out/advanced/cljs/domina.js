// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_26073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26074 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26075 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$160,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26074,table_section_wrapper_26074,opt_wrapper_26073,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26075,table_section_wrapper_26074,cell_wrapper_26075,opt_wrapper_26073,table_section_wrapper_26074,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26074]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26080 = cljs.core.seq(tbody);var chunk__26081 = null;var count__26082 = 0;var i__26083 = 0;while(true){
if((i__26083 < count__26082))
{var child = chunk__26081.cljs$core$IIndexed$_nth$arity$2(null,i__26083);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26084 = seq__26080;
var G__26085 = chunk__26081;
var G__26086 = count__26082;
var G__26087 = (i__26083 + 1);
seq__26080 = G__26084;
chunk__26081 = G__26085;
count__26082 = G__26086;
i__26083 = G__26087;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26080);if(temp__4092__auto__)
{var seq__26080__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26080__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26080__$1);{
var G__26088 = cljs.core.chunk_rest(seq__26080__$1);
var G__26089 = c__4148__auto__;
var G__26090 = cljs.core.count(c__4148__auto__);
var G__26091 = 0;
seq__26080 = G__26088;
chunk__26081 = G__26089;
count__26082 = G__26090;
i__26083 = G__26091;
continue;
}
} else
{var child = cljs.core.first(seq__26080__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26092 = cljs.core.next(seq__26080__$1);
var G__26093 = null;
var G__26094 = 0;
var G__26095 = 0;
seq__26080 = G__26092;
chunk__26081 = G__26093;
count__26082 = G__26094;
i__26083 = G__26095;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26097 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26098 = wrapper.lastChild;
var G__26099 = (level - 1);
wrapper = G__26098;
level = G__26099;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj26101 = {};return obj26101;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__26102){
var mesg = cljs.core.seq(arglist__26102);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__26103){
var mesg = cljs.core.seq(arglist__26103);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__26104){
var contents = cljs.core.seq(arglist__26104);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26105_SHARP_){return p1__26105_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26106_SHARP_,p2__26107_SHARP_){return goog.dom.insertChildAt(p1__26106_SHARP_,p2__26107_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26106_SHARP_,p2__26107_SHARP_){return goog.dom.insertChildAt(p1__26106_SHARP_,p2__26107_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26109_SHARP_,p2__26108_SHARP_){return goog.dom.insertSiblingBefore(p2__26108_SHARP_,p1__26109_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26109_SHARP_,p2__26108_SHARP_){return goog.dom.insertSiblingBefore(p2__26108_SHARP_,p1__26109_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26111_SHARP_,p2__26110_SHARP_){return goog.dom.insertSiblingAfter(p2__26110_SHARP_,p1__26111_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26111_SHARP_,p2__26110_SHARP_){return goog.dom.insertSiblingAfter(p2__26110_SHARP_,p1__26111_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26113_SHARP_,p2__26112_SHARP_){return goog.dom.replaceNode(p2__26112_SHARP_,p1__26113_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26113_SHARP_,p2__26112_SHARP_){return goog.dom.replaceNode(p2__26112_SHARP_,p1__26113_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__26118_26122 = cljs.core.seq(domina.nodes(content));var chunk__26119_26123 = null;var count__26120_26124 = 0;var i__26121_26125 = 0;while(true){
if((i__26121_26125 < count__26120_26124))
{var n_26126 = chunk__26119_26123.cljs$core$IIndexed$_nth$arity$2(null,i__26121_26125);goog.style.setStyle(n_26126,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26127 = seq__26118_26122;
var G__26128 = chunk__26119_26123;
var G__26129 = count__26120_26124;
var G__26130 = (i__26121_26125 + 1);
seq__26118_26122 = G__26127;
chunk__26119_26123 = G__26128;
count__26120_26124 = G__26129;
i__26121_26125 = G__26130;
continue;
}
} else
{var temp__4092__auto___26131 = cljs.core.seq(seq__26118_26122);if(temp__4092__auto___26131)
{var seq__26118_26132__$1 = temp__4092__auto___26131;if(cljs.core.chunked_seq_QMARK_(seq__26118_26132__$1))
{var c__4148__auto___26133 = cljs.core.chunk_first(seq__26118_26132__$1);{
var G__26134 = cljs.core.chunk_rest(seq__26118_26132__$1);
var G__26135 = c__4148__auto___26133;
var G__26136 = cljs.core.count(c__4148__auto___26133);
var G__26137 = 0;
seq__26118_26122 = G__26134;
chunk__26119_26123 = G__26135;
count__26120_26124 = G__26136;
i__26121_26125 = G__26137;
continue;
}
} else
{var n_26138 = cljs.core.first(seq__26118_26132__$1);goog.style.setStyle(n_26138,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26139 = cljs.core.next(seq__26118_26132__$1);
var G__26140 = null;
var G__26141 = 0;
var G__26142 = 0;
seq__26118_26122 = G__26139;
chunk__26119_26123 = G__26140;
count__26120_26124 = G__26141;
i__26121_26125 = G__26142;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26143){
var content = cljs.core.first(arglist__26143);
arglist__26143 = cljs.core.next(arglist__26143);
var name = cljs.core.first(arglist__26143);
var value = cljs.core.rest(arglist__26143);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26148_26152 = cljs.core.seq(domina.nodes(content));var chunk__26149_26153 = null;var count__26150_26154 = 0;var i__26151_26155 = 0;while(true){
if((i__26151_26155 < count__26150_26154))
{var n_26156 = chunk__26149_26153.cljs$core$IIndexed$_nth$arity$2(null,i__26151_26155);n_26156.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26157 = seq__26148_26152;
var G__26158 = chunk__26149_26153;
var G__26159 = count__26150_26154;
var G__26160 = (i__26151_26155 + 1);
seq__26148_26152 = G__26157;
chunk__26149_26153 = G__26158;
count__26150_26154 = G__26159;
i__26151_26155 = G__26160;
continue;
}
} else
{var temp__4092__auto___26161 = cljs.core.seq(seq__26148_26152);if(temp__4092__auto___26161)
{var seq__26148_26162__$1 = temp__4092__auto___26161;if(cljs.core.chunked_seq_QMARK_(seq__26148_26162__$1))
{var c__4148__auto___26163 = cljs.core.chunk_first(seq__26148_26162__$1);{
var G__26164 = cljs.core.chunk_rest(seq__26148_26162__$1);
var G__26165 = c__4148__auto___26163;
var G__26166 = cljs.core.count(c__4148__auto___26163);
var G__26167 = 0;
seq__26148_26152 = G__26164;
chunk__26149_26153 = G__26165;
count__26150_26154 = G__26166;
i__26151_26155 = G__26167;
continue;
}
} else
{var n_26168 = cljs.core.first(seq__26148_26162__$1);n_26168.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26169 = cljs.core.next(seq__26148_26162__$1);
var G__26170 = null;
var G__26171 = 0;
var G__26172 = 0;
seq__26148_26152 = G__26169;
chunk__26149_26153 = G__26170;
count__26150_26154 = G__26171;
i__26151_26155 = G__26172;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26173){
var content = cljs.core.first(arglist__26173);
arglist__26173 = cljs.core.next(arglist__26173);
var name = cljs.core.first(arglist__26173);
var value = cljs.core.rest(arglist__26173);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26178_26182 = cljs.core.seq(domina.nodes(content));var chunk__26179_26183 = null;var count__26180_26184 = 0;var i__26181_26185 = 0;while(true){
if((i__26181_26185 < count__26180_26184))
{var n_26186 = chunk__26179_26183.cljs$core$IIndexed$_nth$arity$2(null,i__26181_26185);n_26186.removeAttribute(cljs.core.name(name));
{
var G__26187 = seq__26178_26182;
var G__26188 = chunk__26179_26183;
var G__26189 = count__26180_26184;
var G__26190 = (i__26181_26185 + 1);
seq__26178_26182 = G__26187;
chunk__26179_26183 = G__26188;
count__26180_26184 = G__26189;
i__26181_26185 = G__26190;
continue;
}
} else
{var temp__4092__auto___26191 = cljs.core.seq(seq__26178_26182);if(temp__4092__auto___26191)
{var seq__26178_26192__$1 = temp__4092__auto___26191;if(cljs.core.chunked_seq_QMARK_(seq__26178_26192__$1))
{var c__4148__auto___26193 = cljs.core.chunk_first(seq__26178_26192__$1);{
var G__26194 = cljs.core.chunk_rest(seq__26178_26192__$1);
var G__26195 = c__4148__auto___26193;
var G__26196 = cljs.core.count(c__4148__auto___26193);
var G__26197 = 0;
seq__26178_26182 = G__26194;
chunk__26179_26183 = G__26195;
count__26180_26184 = G__26196;
i__26181_26185 = G__26197;
continue;
}
} else
{var n_26198 = cljs.core.first(seq__26178_26192__$1);n_26198.removeAttribute(cljs.core.name(name));
{
var G__26199 = cljs.core.next(seq__26178_26192__$1);
var G__26200 = null;
var G__26201 = 0;
var G__26202 = 0;
seq__26178_26182 = G__26199;
chunk__26179_26183 = G__26200;
count__26180_26184 = G__26201;
i__26181_26185 = G__26202;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26204 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$159)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26205_SHARP_){var attr = attrs__$1.item(p1__26205_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26212_26218 = cljs.core.seq(styles);var chunk__26213_26219 = null;var count__26214_26220 = 0;var i__26215_26221 = 0;while(true){
if((i__26215_26221 < count__26214_26220))
{var vec__26216_26222 = chunk__26213_26219.cljs$core$IIndexed$_nth$arity$2(null,i__26215_26221);var name_26223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216_26222,0,null);var value_26224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216_26222,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26223,cljs.core.array_seq([value_26224], 0));
{
var G__26225 = seq__26212_26218;
var G__26226 = chunk__26213_26219;
var G__26227 = count__26214_26220;
var G__26228 = (i__26215_26221 + 1);
seq__26212_26218 = G__26225;
chunk__26213_26219 = G__26226;
count__26214_26220 = G__26227;
i__26215_26221 = G__26228;
continue;
}
} else
{var temp__4092__auto___26229 = cljs.core.seq(seq__26212_26218);if(temp__4092__auto___26229)
{var seq__26212_26230__$1 = temp__4092__auto___26229;if(cljs.core.chunked_seq_QMARK_(seq__26212_26230__$1))
{var c__4148__auto___26231 = cljs.core.chunk_first(seq__26212_26230__$1);{
var G__26232 = cljs.core.chunk_rest(seq__26212_26230__$1);
var G__26233 = c__4148__auto___26231;
var G__26234 = cljs.core.count(c__4148__auto___26231);
var G__26235 = 0;
seq__26212_26218 = G__26232;
chunk__26213_26219 = G__26233;
count__26214_26220 = G__26234;
i__26215_26221 = G__26235;
continue;
}
} else
{var vec__26217_26236 = cljs.core.first(seq__26212_26230__$1);var name_26237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217_26236,0,null);var value_26238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217_26236,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26237,cljs.core.array_seq([value_26238], 0));
{
var G__26239 = cljs.core.next(seq__26212_26230__$1);
var G__26240 = null;
var G__26241 = 0;
var G__26242 = 0;
seq__26212_26218 = G__26239;
chunk__26213_26219 = G__26240;
count__26214_26220 = G__26241;
i__26215_26221 = G__26242;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26249_26255 = cljs.core.seq(attrs);var chunk__26250_26256 = null;var count__26251_26257 = 0;var i__26252_26258 = 0;while(true){
if((i__26252_26258 < count__26251_26257))
{var vec__26253_26259 = chunk__26250_26256.cljs$core$IIndexed$_nth$arity$2(null,i__26252_26258);var name_26260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26253_26259,0,null);var value_26261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26253_26259,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26260,cljs.core.array_seq([value_26261], 0));
{
var G__26262 = seq__26249_26255;
var G__26263 = chunk__26250_26256;
var G__26264 = count__26251_26257;
var G__26265 = (i__26252_26258 + 1);
seq__26249_26255 = G__26262;
chunk__26250_26256 = G__26263;
count__26251_26257 = G__26264;
i__26252_26258 = G__26265;
continue;
}
} else
{var temp__4092__auto___26266 = cljs.core.seq(seq__26249_26255);if(temp__4092__auto___26266)
{var seq__26249_26267__$1 = temp__4092__auto___26266;if(cljs.core.chunked_seq_QMARK_(seq__26249_26267__$1))
{var c__4148__auto___26268 = cljs.core.chunk_first(seq__26249_26267__$1);{
var G__26269 = cljs.core.chunk_rest(seq__26249_26267__$1);
var G__26270 = c__4148__auto___26268;
var G__26271 = cljs.core.count(c__4148__auto___26268);
var G__26272 = 0;
seq__26249_26255 = G__26269;
chunk__26250_26256 = G__26270;
count__26251_26257 = G__26271;
i__26252_26258 = G__26272;
continue;
}
} else
{var vec__26254_26273 = cljs.core.first(seq__26249_26267__$1);var name_26274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254_26273,0,null);var value_26275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254_26273,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26274,cljs.core.array_seq([value_26275], 0));
{
var G__26276 = cljs.core.next(seq__26249_26267__$1);
var G__26277 = null;
var G__26278 = 0;
var G__26279 = 0;
seq__26249_26255 = G__26276;
chunk__26250_26256 = G__26277;
count__26251_26257 = G__26278;
i__26252_26258 = G__26279;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26284_26288 = cljs.core.seq(domina.nodes(content));var chunk__26285_26289 = null;var count__26286_26290 = 0;var i__26287_26291 = 0;while(true){
if((i__26287_26291 < count__26286_26290))
{var node_26292 = chunk__26285_26289.cljs$core$IIndexed$_nth$arity$2(null,i__26287_26291);goog.dom.classes.add(node_26292,class$);
{
var G__26293 = seq__26284_26288;
var G__26294 = chunk__26285_26289;
var G__26295 = count__26286_26290;
var G__26296 = (i__26287_26291 + 1);
seq__26284_26288 = G__26293;
chunk__26285_26289 = G__26294;
count__26286_26290 = G__26295;
i__26287_26291 = G__26296;
continue;
}
} else
{var temp__4092__auto___26297 = cljs.core.seq(seq__26284_26288);if(temp__4092__auto___26297)
{var seq__26284_26298__$1 = temp__4092__auto___26297;if(cljs.core.chunked_seq_QMARK_(seq__26284_26298__$1))
{var c__4148__auto___26299 = cljs.core.chunk_first(seq__26284_26298__$1);{
var G__26300 = cljs.core.chunk_rest(seq__26284_26298__$1);
var G__26301 = c__4148__auto___26299;
var G__26302 = cljs.core.count(c__4148__auto___26299);
var G__26303 = 0;
seq__26284_26288 = G__26300;
chunk__26285_26289 = G__26301;
count__26286_26290 = G__26302;
i__26287_26291 = G__26303;
continue;
}
} else
{var node_26304 = cljs.core.first(seq__26284_26298__$1);goog.dom.classes.add(node_26304,class$);
{
var G__26305 = cljs.core.next(seq__26284_26298__$1);
var G__26306 = null;
var G__26307 = 0;
var G__26308 = 0;
seq__26284_26288 = G__26305;
chunk__26285_26289 = G__26306;
count__26286_26290 = G__26307;
i__26287_26291 = G__26308;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26313_26317 = cljs.core.seq(domina.nodes(content));var chunk__26314_26318 = null;var count__26315_26319 = 0;var i__26316_26320 = 0;while(true){
if((i__26316_26320 < count__26315_26319))
{var node_26321 = chunk__26314_26318.cljs$core$IIndexed$_nth$arity$2(null,i__26316_26320);goog.dom.classes.remove(node_26321,class$);
{
var G__26322 = seq__26313_26317;
var G__26323 = chunk__26314_26318;
var G__26324 = count__26315_26319;
var G__26325 = (i__26316_26320 + 1);
seq__26313_26317 = G__26322;
chunk__26314_26318 = G__26323;
count__26315_26319 = G__26324;
i__26316_26320 = G__26325;
continue;
}
} else
{var temp__4092__auto___26326 = cljs.core.seq(seq__26313_26317);if(temp__4092__auto___26326)
{var seq__26313_26327__$1 = temp__4092__auto___26326;if(cljs.core.chunked_seq_QMARK_(seq__26313_26327__$1))
{var c__4148__auto___26328 = cljs.core.chunk_first(seq__26313_26327__$1);{
var G__26329 = cljs.core.chunk_rest(seq__26313_26327__$1);
var G__26330 = c__4148__auto___26328;
var G__26331 = cljs.core.count(c__4148__auto___26328);
var G__26332 = 0;
seq__26313_26317 = G__26329;
chunk__26314_26318 = G__26330;
count__26315_26319 = G__26331;
i__26316_26320 = G__26332;
continue;
}
} else
{var node_26333 = cljs.core.first(seq__26313_26327__$1);goog.dom.classes.remove(node_26333,class$);
{
var G__26334 = cljs.core.next(seq__26313_26327__$1);
var G__26335 = null;
var G__26336 = 0;
var G__26337 = 0;
seq__26313_26317 = G__26334;
chunk__26314_26318 = G__26335;
count__26315_26319 = G__26336;
i__26316_26320 = G__26337;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26342_26346 = cljs.core.seq(domina.nodes(content));var chunk__26343_26347 = null;var count__26344_26348 = 0;var i__26345_26349 = 0;while(true){
if((i__26345_26349 < count__26344_26348))
{var node_26350 = chunk__26343_26347.cljs$core$IIndexed$_nth$arity$2(null,i__26345_26349);goog.dom.classes.toggle(node_26350,class$);
{
var G__26351 = seq__26342_26346;
var G__26352 = chunk__26343_26347;
var G__26353 = count__26344_26348;
var G__26354 = (i__26345_26349 + 1);
seq__26342_26346 = G__26351;
chunk__26343_26347 = G__26352;
count__26344_26348 = G__26353;
i__26345_26349 = G__26354;
continue;
}
} else
{var temp__4092__auto___26355 = cljs.core.seq(seq__26342_26346);if(temp__4092__auto___26355)
{var seq__26342_26356__$1 = temp__4092__auto___26355;if(cljs.core.chunked_seq_QMARK_(seq__26342_26356__$1))
{var c__4148__auto___26357 = cljs.core.chunk_first(seq__26342_26356__$1);{
var G__26358 = cljs.core.chunk_rest(seq__26342_26356__$1);
var G__26359 = c__4148__auto___26357;
var G__26360 = cljs.core.count(c__4148__auto___26357);
var G__26361 = 0;
seq__26342_26346 = G__26358;
chunk__26343_26347 = G__26359;
count__26344_26348 = G__26360;
i__26345_26349 = G__26361;
continue;
}
} else
{var node_26362 = cljs.core.first(seq__26342_26356__$1);goog.dom.classes.toggle(node_26362,class$);
{
var G__26363 = cljs.core.next(seq__26342_26356__$1);
var G__26364 = null;
var G__26365 = 0;
var G__26366 = 0;
seq__26342_26346 = G__26363;
chunk__26343_26347 = G__26364;
count__26344_26348 = G__26365;
i__26345_26349 = G__26366;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26375__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26371_26376 = cljs.core.seq(domina.nodes(content));var chunk__26372_26377 = null;var count__26373_26378 = 0;var i__26374_26379 = 0;while(true){
if((i__26374_26379 < count__26373_26378))
{var node_26380 = chunk__26372_26377.cljs$core$IIndexed$_nth$arity$2(null,i__26374_26379);goog.dom.classes.set(node_26380,classes_26375__$1);
{
var G__26381 = seq__26371_26376;
var G__26382 = chunk__26372_26377;
var G__26383 = count__26373_26378;
var G__26384 = (i__26374_26379 + 1);
seq__26371_26376 = G__26381;
chunk__26372_26377 = G__26382;
count__26373_26378 = G__26383;
i__26374_26379 = G__26384;
continue;
}
} else
{var temp__4092__auto___26385 = cljs.core.seq(seq__26371_26376);if(temp__4092__auto___26385)
{var seq__26371_26386__$1 = temp__4092__auto___26385;if(cljs.core.chunked_seq_QMARK_(seq__26371_26386__$1))
{var c__4148__auto___26387 = cljs.core.chunk_first(seq__26371_26386__$1);{
var G__26388 = cljs.core.chunk_rest(seq__26371_26386__$1);
var G__26389 = c__4148__auto___26387;
var G__26390 = cljs.core.count(c__4148__auto___26387);
var G__26391 = 0;
seq__26371_26376 = G__26388;
chunk__26372_26377 = G__26389;
count__26373_26378 = G__26390;
i__26374_26379 = G__26391;
continue;
}
} else
{var node_26392 = cljs.core.first(seq__26371_26386__$1);goog.dom.classes.set(node_26392,classes_26375__$1);
{
var G__26393 = cljs.core.next(seq__26371_26386__$1);
var G__26394 = null;
var G__26395 = 0;
var G__26396 = 0;
seq__26371_26376 = G__26393;
chunk__26372_26377 = G__26394;
count__26373_26378 = G__26395;
i__26374_26379 = G__26396;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26401_26405 = cljs.core.seq(domina.nodes(content));var chunk__26402_26406 = null;var count__26403_26407 = 0;var i__26404_26408 = 0;while(true){
if((i__26404_26408 < count__26403_26407))
{var node_26409 = chunk__26402_26406.cljs$core$IIndexed$_nth$arity$2(null,i__26404_26408);goog.dom.setTextContent(node_26409,value);
{
var G__26410 = seq__26401_26405;
var G__26411 = chunk__26402_26406;
var G__26412 = count__26403_26407;
var G__26413 = (i__26404_26408 + 1);
seq__26401_26405 = G__26410;
chunk__26402_26406 = G__26411;
count__26403_26407 = G__26412;
i__26404_26408 = G__26413;
continue;
}
} else
{var temp__4092__auto___26414 = cljs.core.seq(seq__26401_26405);if(temp__4092__auto___26414)
{var seq__26401_26415__$1 = temp__4092__auto___26414;if(cljs.core.chunked_seq_QMARK_(seq__26401_26415__$1))
{var c__4148__auto___26416 = cljs.core.chunk_first(seq__26401_26415__$1);{
var G__26417 = cljs.core.chunk_rest(seq__26401_26415__$1);
var G__26418 = c__4148__auto___26416;
var G__26419 = cljs.core.count(c__4148__auto___26416);
var G__26420 = 0;
seq__26401_26405 = G__26417;
chunk__26402_26406 = G__26418;
count__26403_26407 = G__26419;
i__26404_26408 = G__26420;
continue;
}
} else
{var node_26421 = cljs.core.first(seq__26401_26415__$1);goog.dom.setTextContent(node_26421,value);
{
var G__26422 = cljs.core.next(seq__26401_26415__$1);
var G__26423 = null;
var G__26424 = 0;
var G__26425 = 0;
seq__26401_26405 = G__26422;
chunk__26402_26406 = G__26423;
count__26403_26407 = G__26424;
i__26404_26408 = G__26425;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26430_26434 = cljs.core.seq(domina.nodes(content));var chunk__26431_26435 = null;var count__26432_26436 = 0;var i__26433_26437 = 0;while(true){
if((i__26433_26437 < count__26432_26436))
{var node_26438 = chunk__26431_26435.cljs$core$IIndexed$_nth$arity$2(null,i__26433_26437);goog.dom.forms.setValue(node_26438,value);
{
var G__26439 = seq__26430_26434;
var G__26440 = chunk__26431_26435;
var G__26441 = count__26432_26436;
var G__26442 = (i__26433_26437 + 1);
seq__26430_26434 = G__26439;
chunk__26431_26435 = G__26440;
count__26432_26436 = G__26441;
i__26433_26437 = G__26442;
continue;
}
} else
{var temp__4092__auto___26443 = cljs.core.seq(seq__26430_26434);if(temp__4092__auto___26443)
{var seq__26430_26444__$1 = temp__4092__auto___26443;if(cljs.core.chunked_seq_QMARK_(seq__26430_26444__$1))
{var c__4148__auto___26445 = cljs.core.chunk_first(seq__26430_26444__$1);{
var G__26446 = cljs.core.chunk_rest(seq__26430_26444__$1);
var G__26447 = c__4148__auto___26445;
var G__26448 = cljs.core.count(c__4148__auto___26445);
var G__26449 = 0;
seq__26430_26434 = G__26446;
chunk__26431_26435 = G__26447;
count__26432_26436 = G__26448;
i__26433_26437 = G__26449;
continue;
}
} else
{var node_26450 = cljs.core.first(seq__26430_26444__$1);goog.dom.forms.setValue(node_26450,value);
{
var G__26451 = cljs.core.next(seq__26430_26444__$1);
var G__26452 = null;
var G__26453 = 0;
var G__26454 = 0;
seq__26430_26434 = G__26451;
chunk__26431_26435 = G__26452;
count__26432_26436 = G__26453;
i__26433_26437 = G__26454;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_26465 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26461_26466 = cljs.core.seq(domina.nodes(content));var chunk__26462_26467 = null;var count__26463_26468 = 0;var i__26464_26469 = 0;while(true){
if((i__26464_26469 < count__26463_26468))
{var node_26470 = chunk__26462_26467.cljs$core$IIndexed$_nth$arity$2(null,i__26464_26469);node_26470.innerHTML = value_26465;
{
var G__26471 = seq__26461_26466;
var G__26472 = chunk__26462_26467;
var G__26473 = count__26463_26468;
var G__26474 = (i__26464_26469 + 1);
seq__26461_26466 = G__26471;
chunk__26462_26467 = G__26472;
count__26463_26468 = G__26473;
i__26464_26469 = G__26474;
continue;
}
} else
{var temp__4092__auto___26475 = cljs.core.seq(seq__26461_26466);if(temp__4092__auto___26475)
{var seq__26461_26476__$1 = temp__4092__auto___26475;if(cljs.core.chunked_seq_QMARK_(seq__26461_26476__$1))
{var c__4148__auto___26477 = cljs.core.chunk_first(seq__26461_26476__$1);{
var G__26478 = cljs.core.chunk_rest(seq__26461_26476__$1);
var G__26479 = c__4148__auto___26477;
var G__26480 = cljs.core.count(c__4148__auto___26477);
var G__26481 = 0;
seq__26461_26466 = G__26478;
chunk__26462_26467 = G__26479;
count__26463_26468 = G__26480;
i__26464_26469 = G__26481;
continue;
}
} else
{var node_26482 = cljs.core.first(seq__26461_26476__$1);node_26482.innerHTML = value_26465;
{
var G__26483 = cljs.core.next(seq__26461_26476__$1);
var G__26484 = null;
var G__26485 = 0;
var G__26486 = 0;
seq__26461_26466 = G__26483;
chunk__26462_26467 = G__26484;
count__26463_26468 = G__26485;
i__26464_26469 = G__26486;
continue;
}
}
} else
{}
}
break;
}
}catch (e26460){if((e26460 instanceof Error))
{var e_26487 = e26460;domina.replace_children_BANG_(content,value_26465);
} else
{if(cljs.core.constant$keyword$159)
{throw e26460;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26494_26498 = cljs.core.seq(children);var chunk__26495_26499 = null;var count__26496_26500 = 0;var i__26497_26501 = 0;while(true){
if((i__26497_26501 < count__26496_26500))
{var child_26502 = chunk__26495_26499.cljs$core$IIndexed$_nth$arity$2(null,i__26497_26501);frag.appendChild(child_26502);
{
var G__26503 = seq__26494_26498;
var G__26504 = chunk__26495_26499;
var G__26505 = count__26496_26500;
var G__26506 = (i__26497_26501 + 1);
seq__26494_26498 = G__26503;
chunk__26495_26499 = G__26504;
count__26496_26500 = G__26505;
i__26497_26501 = G__26506;
continue;
}
} else
{var temp__4092__auto___26507 = cljs.core.seq(seq__26494_26498);if(temp__4092__auto___26507)
{var seq__26494_26508__$1 = temp__4092__auto___26507;if(cljs.core.chunked_seq_QMARK_(seq__26494_26508__$1))
{var c__4148__auto___26509 = cljs.core.chunk_first(seq__26494_26508__$1);{
var G__26510 = cljs.core.chunk_rest(seq__26494_26508__$1);
var G__26511 = c__4148__auto___26509;
var G__26512 = cljs.core.count(c__4148__auto___26509);
var G__26513 = 0;
seq__26494_26498 = G__26510;
chunk__26495_26499 = G__26511;
count__26496_26500 = G__26512;
i__26497_26501 = G__26513;
continue;
}
} else
{var child_26514 = cljs.core.first(seq__26494_26508__$1);frag.appendChild(child_26514);
{
var G__26515 = cljs.core.next(seq__26494_26508__$1);
var G__26516 = null;
var G__26517 = 0;
var G__26518 = 0;
seq__26494_26498 = G__26515;
chunk__26495_26499 = G__26516;
count__26496_26500 = G__26517;
i__26497_26501 = G__26518;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26488_SHARP_,p2__26489_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26488_SHARP_,p2__26489_SHARP_) : f.call(null,p1__26488_SHARP_,p2__26489_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__26520 = list_thing;if(G__26520)
{var bit__4050__auto__ = (G__26520.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26520.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26520.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26520);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26520);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$160)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__26521 = content;if(G__26521)
{var bit__4050__auto__ = (G__26521.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26521.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26521.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26521);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$160)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__26522 = content;if(G__26522)
{var bit__4050__auto__ = (G__26522.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26522.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26522.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26522);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26522);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$160)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
