// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_19090 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19091,table_section_wrapper_19091,opt_wrapper_19090,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19092,table_section_wrapper_19091,cell_wrapper_19092,opt_wrapper_19090,table_section_wrapper_19091,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19091]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19097 = cljs.core.seq(tbody);var chunk__19098 = null;var count__19099 = 0;var i__19100 = 0;while(true){
if((i__19100 < count__19099))
{var child = chunk__19098.cljs$core$IIndexed$_nth$arity$2(null,i__19100);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19101 = seq__19097;
var G__19102 = chunk__19098;
var G__19103 = count__19099;
var G__19104 = (i__19100 + 1);
seq__19097 = G__19101;
chunk__19098 = G__19102;
count__19099 = G__19103;
i__19100 = G__19104;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19097);if(temp__4092__auto__)
{var seq__19097__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19097__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__19097__$1);{
var G__19105 = cljs.core.chunk_rest(seq__19097__$1);
var G__19106 = c__4015__auto__;
var G__19107 = cljs.core.count(c__4015__auto__);
var G__19108 = 0;
seq__19097 = G__19105;
chunk__19098 = G__19106;
count__19099 = G__19107;
i__19100 = G__19108;
continue;
}
} else
{var child = cljs.core.first(seq__19097__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19109 = cljs.core.next(seq__19097__$1);
var G__19110 = null;
var G__19111 = 0;
var G__19112 = 0;
seq__19097 = G__19109;
chunk__19098 = G__19110;
count__19099 = G__19111;
i__19100 = G__19112;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19114 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19114,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19114,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19114,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19115 = wrapper.lastChild;
var G__19116 = (level - 1);
wrapper = G__19115;
level = G__19116;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj19118 = {};return obj19118;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19119){
var mesg = cljs.core.seq(arglist__19119);
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
log.cljs$lang$applyTo = (function (arglist__19120){
var mesg = cljs.core.seq(arglist__19120);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19121){
var contents = cljs.core.seq(arglist__19121);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19122_SHARP_){return p1__19122_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19123_SHARP_,p2__19124_SHARP_){return goog.dom.insertChildAt(p1__19123_SHARP_,p2__19124_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__19123_SHARP_,p2__19124_SHARP_){return goog.dom.insertChildAt(p1__19123_SHARP_,p2__19124_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19126_SHARP_,p2__19125_SHARP_){return goog.dom.insertSiblingBefore(p2__19125_SHARP_,p1__19126_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19126_SHARP_,p2__19125_SHARP_){return goog.dom.insertSiblingBefore(p2__19125_SHARP_,p1__19126_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19128_SHARP_,p2__19127_SHARP_){return goog.dom.insertSiblingAfter(p2__19127_SHARP_,p1__19128_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19128_SHARP_,p2__19127_SHARP_){return goog.dom.insertSiblingAfter(p2__19127_SHARP_,p1__19128_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19130_SHARP_,p2__19129_SHARP_){return goog.dom.replaceNode(p2__19129_SHARP_,p1__19130_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19130_SHARP_,p2__19129_SHARP_){return goog.dom.replaceNode(p2__19129_SHARP_,p1__19130_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19135_19139 = cljs.core.seq(domina.nodes(content));var chunk__19136_19140 = null;var count__19137_19141 = 0;var i__19138_19142 = 0;while(true){
if((i__19138_19142 < count__19137_19141))
{var n_19143 = chunk__19136_19140.cljs$core$IIndexed$_nth$arity$2(null,i__19138_19142);goog.style.setStyle(n_19143,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19144 = seq__19135_19139;
var G__19145 = chunk__19136_19140;
var G__19146 = count__19137_19141;
var G__19147 = (i__19138_19142 + 1);
seq__19135_19139 = G__19144;
chunk__19136_19140 = G__19145;
count__19137_19141 = G__19146;
i__19138_19142 = G__19147;
continue;
}
} else
{var temp__4092__auto___19148 = cljs.core.seq(seq__19135_19139);if(temp__4092__auto___19148)
{var seq__19135_19149__$1 = temp__4092__auto___19148;if(cljs.core.chunked_seq_QMARK_(seq__19135_19149__$1))
{var c__4015__auto___19150 = cljs.core.chunk_first(seq__19135_19149__$1);{
var G__19151 = cljs.core.chunk_rest(seq__19135_19149__$1);
var G__19152 = c__4015__auto___19150;
var G__19153 = cljs.core.count(c__4015__auto___19150);
var G__19154 = 0;
seq__19135_19139 = G__19151;
chunk__19136_19140 = G__19152;
count__19137_19141 = G__19153;
i__19138_19142 = G__19154;
continue;
}
} else
{var n_19155 = cljs.core.first(seq__19135_19149__$1);goog.style.setStyle(n_19155,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19156 = cljs.core.next(seq__19135_19149__$1);
var G__19157 = null;
var G__19158 = 0;
var G__19159 = 0;
seq__19135_19139 = G__19156;
chunk__19136_19140 = G__19157;
count__19137_19141 = G__19158;
i__19138_19142 = G__19159;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19160){
var content = cljs.core.first(arglist__19160);
arglist__19160 = cljs.core.next(arglist__19160);
var name = cljs.core.first(arglist__19160);
var value = cljs.core.rest(arglist__19160);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19165_19169 = cljs.core.seq(domina.nodes(content));var chunk__19166_19170 = null;var count__19167_19171 = 0;var i__19168_19172 = 0;while(true){
if((i__19168_19172 < count__19167_19171))
{var n_19173 = chunk__19166_19170.cljs$core$IIndexed$_nth$arity$2(null,i__19168_19172);n_19173.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19174 = seq__19165_19169;
var G__19175 = chunk__19166_19170;
var G__19176 = count__19167_19171;
var G__19177 = (i__19168_19172 + 1);
seq__19165_19169 = G__19174;
chunk__19166_19170 = G__19175;
count__19167_19171 = G__19176;
i__19168_19172 = G__19177;
continue;
}
} else
{var temp__4092__auto___19178 = cljs.core.seq(seq__19165_19169);if(temp__4092__auto___19178)
{var seq__19165_19179__$1 = temp__4092__auto___19178;if(cljs.core.chunked_seq_QMARK_(seq__19165_19179__$1))
{var c__4015__auto___19180 = cljs.core.chunk_first(seq__19165_19179__$1);{
var G__19181 = cljs.core.chunk_rest(seq__19165_19179__$1);
var G__19182 = c__4015__auto___19180;
var G__19183 = cljs.core.count(c__4015__auto___19180);
var G__19184 = 0;
seq__19165_19169 = G__19181;
chunk__19166_19170 = G__19182;
count__19167_19171 = G__19183;
i__19168_19172 = G__19184;
continue;
}
} else
{var n_19185 = cljs.core.first(seq__19165_19179__$1);n_19185.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19186 = cljs.core.next(seq__19165_19179__$1);
var G__19187 = null;
var G__19188 = 0;
var G__19189 = 0;
seq__19165_19169 = G__19186;
chunk__19166_19170 = G__19187;
count__19167_19171 = G__19188;
i__19168_19172 = G__19189;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19190){
var content = cljs.core.first(arglist__19190);
arglist__19190 = cljs.core.next(arglist__19190);
var name = cljs.core.first(arglist__19190);
var value = cljs.core.rest(arglist__19190);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19195_19199 = cljs.core.seq(domina.nodes(content));var chunk__19196_19200 = null;var count__19197_19201 = 0;var i__19198_19202 = 0;while(true){
if((i__19198_19202 < count__19197_19201))
{var n_19203 = chunk__19196_19200.cljs$core$IIndexed$_nth$arity$2(null,i__19198_19202);n_19203.removeAttribute(cljs.core.name(name));
{
var G__19204 = seq__19195_19199;
var G__19205 = chunk__19196_19200;
var G__19206 = count__19197_19201;
var G__19207 = (i__19198_19202 + 1);
seq__19195_19199 = G__19204;
chunk__19196_19200 = G__19205;
count__19197_19201 = G__19206;
i__19198_19202 = G__19207;
continue;
}
} else
{var temp__4092__auto___19208 = cljs.core.seq(seq__19195_19199);if(temp__4092__auto___19208)
{var seq__19195_19209__$1 = temp__4092__auto___19208;if(cljs.core.chunked_seq_QMARK_(seq__19195_19209__$1))
{var c__4015__auto___19210 = cljs.core.chunk_first(seq__19195_19209__$1);{
var G__19211 = cljs.core.chunk_rest(seq__19195_19209__$1);
var G__19212 = c__4015__auto___19210;
var G__19213 = cljs.core.count(c__4015__auto___19210);
var G__19214 = 0;
seq__19195_19199 = G__19211;
chunk__19196_19200 = G__19212;
count__19197_19201 = G__19213;
i__19198_19202 = G__19214;
continue;
}
} else
{var n_19215 = cljs.core.first(seq__19195_19209__$1);n_19215.removeAttribute(cljs.core.name(name));
{
var G__19216 = cljs.core.next(seq__19195_19209__$1);
var G__19217 = null;
var G__19218 = 0;
var G__19219 = 0;
seq__19195_19199 = G__19216;
chunk__19196_19200 = G__19217;
count__19197_19201 = G__19218;
i__19198_19202 = G__19219;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__19221 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
{if(cljs.core.constant$keyword$6)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19222_SHARP_){var attr = attrs__$1.item(p1__19222_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19229_19235 = cljs.core.seq(styles);var chunk__19230_19236 = null;var count__19231_19237 = 0;var i__19232_19238 = 0;while(true){
if((i__19232_19238 < count__19231_19237))
{var vec__19233_19239 = chunk__19230_19236.cljs$core$IIndexed$_nth$arity$2(null,i__19232_19238);var name_19240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19233_19239,0,null);var value_19241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19233_19239,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19240,cljs.core.array_seq([value_19241], 0));
{
var G__19242 = seq__19229_19235;
var G__19243 = chunk__19230_19236;
var G__19244 = count__19231_19237;
var G__19245 = (i__19232_19238 + 1);
seq__19229_19235 = G__19242;
chunk__19230_19236 = G__19243;
count__19231_19237 = G__19244;
i__19232_19238 = G__19245;
continue;
}
} else
{var temp__4092__auto___19246 = cljs.core.seq(seq__19229_19235);if(temp__4092__auto___19246)
{var seq__19229_19247__$1 = temp__4092__auto___19246;if(cljs.core.chunked_seq_QMARK_(seq__19229_19247__$1))
{var c__4015__auto___19248 = cljs.core.chunk_first(seq__19229_19247__$1);{
var G__19249 = cljs.core.chunk_rest(seq__19229_19247__$1);
var G__19250 = c__4015__auto___19248;
var G__19251 = cljs.core.count(c__4015__auto___19248);
var G__19252 = 0;
seq__19229_19235 = G__19249;
chunk__19230_19236 = G__19250;
count__19231_19237 = G__19251;
i__19232_19238 = G__19252;
continue;
}
} else
{var vec__19234_19253 = cljs.core.first(seq__19229_19247__$1);var name_19254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234_19253,0,null);var value_19255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234_19253,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19254,cljs.core.array_seq([value_19255], 0));
{
var G__19256 = cljs.core.next(seq__19229_19247__$1);
var G__19257 = null;
var G__19258 = 0;
var G__19259 = 0;
seq__19229_19235 = G__19256;
chunk__19230_19236 = G__19257;
count__19231_19237 = G__19258;
i__19232_19238 = G__19259;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19266_19272 = cljs.core.seq(attrs);var chunk__19267_19273 = null;var count__19268_19274 = 0;var i__19269_19275 = 0;while(true){
if((i__19269_19275 < count__19268_19274))
{var vec__19270_19276 = chunk__19267_19273.cljs$core$IIndexed$_nth$arity$2(null,i__19269_19275);var name_19277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270_19276,0,null);var value_19278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270_19276,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19277,cljs.core.array_seq([value_19278], 0));
{
var G__19279 = seq__19266_19272;
var G__19280 = chunk__19267_19273;
var G__19281 = count__19268_19274;
var G__19282 = (i__19269_19275 + 1);
seq__19266_19272 = G__19279;
chunk__19267_19273 = G__19280;
count__19268_19274 = G__19281;
i__19269_19275 = G__19282;
continue;
}
} else
{var temp__4092__auto___19283 = cljs.core.seq(seq__19266_19272);if(temp__4092__auto___19283)
{var seq__19266_19284__$1 = temp__4092__auto___19283;if(cljs.core.chunked_seq_QMARK_(seq__19266_19284__$1))
{var c__4015__auto___19285 = cljs.core.chunk_first(seq__19266_19284__$1);{
var G__19286 = cljs.core.chunk_rest(seq__19266_19284__$1);
var G__19287 = c__4015__auto___19285;
var G__19288 = cljs.core.count(c__4015__auto___19285);
var G__19289 = 0;
seq__19266_19272 = G__19286;
chunk__19267_19273 = G__19287;
count__19268_19274 = G__19288;
i__19269_19275 = G__19289;
continue;
}
} else
{var vec__19271_19290 = cljs.core.first(seq__19266_19284__$1);var name_19291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271_19290,0,null);var value_19292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271_19290,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19291,cljs.core.array_seq([value_19292], 0));
{
var G__19293 = cljs.core.next(seq__19266_19284__$1);
var G__19294 = null;
var G__19295 = 0;
var G__19296 = 0;
seq__19266_19272 = G__19293;
chunk__19267_19273 = G__19294;
count__19268_19274 = G__19295;
i__19269_19275 = G__19296;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19301_19305 = cljs.core.seq(domina.nodes(content));var chunk__19302_19306 = null;var count__19303_19307 = 0;var i__19304_19308 = 0;while(true){
if((i__19304_19308 < count__19303_19307))
{var node_19309 = chunk__19302_19306.cljs$core$IIndexed$_nth$arity$2(null,i__19304_19308);goog.dom.classes.add(node_19309,class$);
{
var G__19310 = seq__19301_19305;
var G__19311 = chunk__19302_19306;
var G__19312 = count__19303_19307;
var G__19313 = (i__19304_19308 + 1);
seq__19301_19305 = G__19310;
chunk__19302_19306 = G__19311;
count__19303_19307 = G__19312;
i__19304_19308 = G__19313;
continue;
}
} else
{var temp__4092__auto___19314 = cljs.core.seq(seq__19301_19305);if(temp__4092__auto___19314)
{var seq__19301_19315__$1 = temp__4092__auto___19314;if(cljs.core.chunked_seq_QMARK_(seq__19301_19315__$1))
{var c__4015__auto___19316 = cljs.core.chunk_first(seq__19301_19315__$1);{
var G__19317 = cljs.core.chunk_rest(seq__19301_19315__$1);
var G__19318 = c__4015__auto___19316;
var G__19319 = cljs.core.count(c__4015__auto___19316);
var G__19320 = 0;
seq__19301_19305 = G__19317;
chunk__19302_19306 = G__19318;
count__19303_19307 = G__19319;
i__19304_19308 = G__19320;
continue;
}
} else
{var node_19321 = cljs.core.first(seq__19301_19315__$1);goog.dom.classes.add(node_19321,class$);
{
var G__19322 = cljs.core.next(seq__19301_19315__$1);
var G__19323 = null;
var G__19324 = 0;
var G__19325 = 0;
seq__19301_19305 = G__19322;
chunk__19302_19306 = G__19323;
count__19303_19307 = G__19324;
i__19304_19308 = G__19325;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19330_19334 = cljs.core.seq(domina.nodes(content));var chunk__19331_19335 = null;var count__19332_19336 = 0;var i__19333_19337 = 0;while(true){
if((i__19333_19337 < count__19332_19336))
{var node_19338 = chunk__19331_19335.cljs$core$IIndexed$_nth$arity$2(null,i__19333_19337);goog.dom.classes.remove(node_19338,class$);
{
var G__19339 = seq__19330_19334;
var G__19340 = chunk__19331_19335;
var G__19341 = count__19332_19336;
var G__19342 = (i__19333_19337 + 1);
seq__19330_19334 = G__19339;
chunk__19331_19335 = G__19340;
count__19332_19336 = G__19341;
i__19333_19337 = G__19342;
continue;
}
} else
{var temp__4092__auto___19343 = cljs.core.seq(seq__19330_19334);if(temp__4092__auto___19343)
{var seq__19330_19344__$1 = temp__4092__auto___19343;if(cljs.core.chunked_seq_QMARK_(seq__19330_19344__$1))
{var c__4015__auto___19345 = cljs.core.chunk_first(seq__19330_19344__$1);{
var G__19346 = cljs.core.chunk_rest(seq__19330_19344__$1);
var G__19347 = c__4015__auto___19345;
var G__19348 = cljs.core.count(c__4015__auto___19345);
var G__19349 = 0;
seq__19330_19334 = G__19346;
chunk__19331_19335 = G__19347;
count__19332_19336 = G__19348;
i__19333_19337 = G__19349;
continue;
}
} else
{var node_19350 = cljs.core.first(seq__19330_19344__$1);goog.dom.classes.remove(node_19350,class$);
{
var G__19351 = cljs.core.next(seq__19330_19344__$1);
var G__19352 = null;
var G__19353 = 0;
var G__19354 = 0;
seq__19330_19334 = G__19351;
chunk__19331_19335 = G__19352;
count__19332_19336 = G__19353;
i__19333_19337 = G__19354;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19359_19363 = cljs.core.seq(domina.nodes(content));var chunk__19360_19364 = null;var count__19361_19365 = 0;var i__19362_19366 = 0;while(true){
if((i__19362_19366 < count__19361_19365))
{var node_19367 = chunk__19360_19364.cljs$core$IIndexed$_nth$arity$2(null,i__19362_19366);goog.dom.classes.toggle(node_19367,class$);
{
var G__19368 = seq__19359_19363;
var G__19369 = chunk__19360_19364;
var G__19370 = count__19361_19365;
var G__19371 = (i__19362_19366 + 1);
seq__19359_19363 = G__19368;
chunk__19360_19364 = G__19369;
count__19361_19365 = G__19370;
i__19362_19366 = G__19371;
continue;
}
} else
{var temp__4092__auto___19372 = cljs.core.seq(seq__19359_19363);if(temp__4092__auto___19372)
{var seq__19359_19373__$1 = temp__4092__auto___19372;if(cljs.core.chunked_seq_QMARK_(seq__19359_19373__$1))
{var c__4015__auto___19374 = cljs.core.chunk_first(seq__19359_19373__$1);{
var G__19375 = cljs.core.chunk_rest(seq__19359_19373__$1);
var G__19376 = c__4015__auto___19374;
var G__19377 = cljs.core.count(c__4015__auto___19374);
var G__19378 = 0;
seq__19359_19363 = G__19375;
chunk__19360_19364 = G__19376;
count__19361_19365 = G__19377;
i__19362_19366 = G__19378;
continue;
}
} else
{var node_19379 = cljs.core.first(seq__19359_19373__$1);goog.dom.classes.toggle(node_19379,class$);
{
var G__19380 = cljs.core.next(seq__19359_19373__$1);
var G__19381 = null;
var G__19382 = 0;
var G__19383 = 0;
seq__19359_19363 = G__19380;
chunk__19360_19364 = G__19381;
count__19361_19365 = G__19382;
i__19362_19366 = G__19383;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19392__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__19388_19393 = cljs.core.seq(domina.nodes(content));var chunk__19389_19394 = null;var count__19390_19395 = 0;var i__19391_19396 = 0;while(true){
if((i__19391_19396 < count__19390_19395))
{var node_19397 = chunk__19389_19394.cljs$core$IIndexed$_nth$arity$2(null,i__19391_19396);goog.dom.classes.set(node_19397,classes_19392__$1);
{
var G__19398 = seq__19388_19393;
var G__19399 = chunk__19389_19394;
var G__19400 = count__19390_19395;
var G__19401 = (i__19391_19396 + 1);
seq__19388_19393 = G__19398;
chunk__19389_19394 = G__19399;
count__19390_19395 = G__19400;
i__19391_19396 = G__19401;
continue;
}
} else
{var temp__4092__auto___19402 = cljs.core.seq(seq__19388_19393);if(temp__4092__auto___19402)
{var seq__19388_19403__$1 = temp__4092__auto___19402;if(cljs.core.chunked_seq_QMARK_(seq__19388_19403__$1))
{var c__4015__auto___19404 = cljs.core.chunk_first(seq__19388_19403__$1);{
var G__19405 = cljs.core.chunk_rest(seq__19388_19403__$1);
var G__19406 = c__4015__auto___19404;
var G__19407 = cljs.core.count(c__4015__auto___19404);
var G__19408 = 0;
seq__19388_19393 = G__19405;
chunk__19389_19394 = G__19406;
count__19390_19395 = G__19407;
i__19391_19396 = G__19408;
continue;
}
} else
{var node_19409 = cljs.core.first(seq__19388_19403__$1);goog.dom.classes.set(node_19409,classes_19392__$1);
{
var G__19410 = cljs.core.next(seq__19388_19403__$1);
var G__19411 = null;
var G__19412 = 0;
var G__19413 = 0;
seq__19388_19393 = G__19410;
chunk__19389_19394 = G__19411;
count__19390_19395 = G__19412;
i__19391_19396 = G__19413;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19418_19422 = cljs.core.seq(domina.nodes(content));var chunk__19419_19423 = null;var count__19420_19424 = 0;var i__19421_19425 = 0;while(true){
if((i__19421_19425 < count__19420_19424))
{var node_19426 = chunk__19419_19423.cljs$core$IIndexed$_nth$arity$2(null,i__19421_19425);goog.dom.setTextContent(node_19426,value);
{
var G__19427 = seq__19418_19422;
var G__19428 = chunk__19419_19423;
var G__19429 = count__19420_19424;
var G__19430 = (i__19421_19425 + 1);
seq__19418_19422 = G__19427;
chunk__19419_19423 = G__19428;
count__19420_19424 = G__19429;
i__19421_19425 = G__19430;
continue;
}
} else
{var temp__4092__auto___19431 = cljs.core.seq(seq__19418_19422);if(temp__4092__auto___19431)
{var seq__19418_19432__$1 = temp__4092__auto___19431;if(cljs.core.chunked_seq_QMARK_(seq__19418_19432__$1))
{var c__4015__auto___19433 = cljs.core.chunk_first(seq__19418_19432__$1);{
var G__19434 = cljs.core.chunk_rest(seq__19418_19432__$1);
var G__19435 = c__4015__auto___19433;
var G__19436 = cljs.core.count(c__4015__auto___19433);
var G__19437 = 0;
seq__19418_19422 = G__19434;
chunk__19419_19423 = G__19435;
count__19420_19424 = G__19436;
i__19421_19425 = G__19437;
continue;
}
} else
{var node_19438 = cljs.core.first(seq__19418_19432__$1);goog.dom.setTextContent(node_19438,value);
{
var G__19439 = cljs.core.next(seq__19418_19432__$1);
var G__19440 = null;
var G__19441 = 0;
var G__19442 = 0;
seq__19418_19422 = G__19439;
chunk__19419_19423 = G__19440;
count__19420_19424 = G__19441;
i__19421_19425 = G__19442;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19447_19451 = cljs.core.seq(domina.nodes(content));var chunk__19448_19452 = null;var count__19449_19453 = 0;var i__19450_19454 = 0;while(true){
if((i__19450_19454 < count__19449_19453))
{var node_19455 = chunk__19448_19452.cljs$core$IIndexed$_nth$arity$2(null,i__19450_19454);goog.dom.forms.setValue(node_19455,value);
{
var G__19456 = seq__19447_19451;
var G__19457 = chunk__19448_19452;
var G__19458 = count__19449_19453;
var G__19459 = (i__19450_19454 + 1);
seq__19447_19451 = G__19456;
chunk__19448_19452 = G__19457;
count__19449_19453 = G__19458;
i__19450_19454 = G__19459;
continue;
}
} else
{var temp__4092__auto___19460 = cljs.core.seq(seq__19447_19451);if(temp__4092__auto___19460)
{var seq__19447_19461__$1 = temp__4092__auto___19460;if(cljs.core.chunked_seq_QMARK_(seq__19447_19461__$1))
{var c__4015__auto___19462 = cljs.core.chunk_first(seq__19447_19461__$1);{
var G__19463 = cljs.core.chunk_rest(seq__19447_19461__$1);
var G__19464 = c__4015__auto___19462;
var G__19465 = cljs.core.count(c__4015__auto___19462);
var G__19466 = 0;
seq__19447_19451 = G__19463;
chunk__19448_19452 = G__19464;
count__19449_19453 = G__19465;
i__19450_19454 = G__19466;
continue;
}
} else
{var node_19467 = cljs.core.first(seq__19447_19461__$1);goog.dom.forms.setValue(node_19467,value);
{
var G__19468 = cljs.core.next(seq__19447_19461__$1);
var G__19469 = null;
var G__19470 = 0;
var G__19471 = 0;
seq__19447_19451 = G__19468;
chunk__19448_19452 = G__19469;
count__19449_19453 = G__19470;
i__19450_19454 = G__19471;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_19482 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19478_19483 = cljs.core.seq(domina.nodes(content));var chunk__19479_19484 = null;var count__19480_19485 = 0;var i__19481_19486 = 0;while(true){
if((i__19481_19486 < count__19480_19485))
{var node_19487 = chunk__19479_19484.cljs$core$IIndexed$_nth$arity$2(null,i__19481_19486);node_19487.innerHTML = value_19482;
{
var G__19488 = seq__19478_19483;
var G__19489 = chunk__19479_19484;
var G__19490 = count__19480_19485;
var G__19491 = (i__19481_19486 + 1);
seq__19478_19483 = G__19488;
chunk__19479_19484 = G__19489;
count__19480_19485 = G__19490;
i__19481_19486 = G__19491;
continue;
}
} else
{var temp__4092__auto___19492 = cljs.core.seq(seq__19478_19483);if(temp__4092__auto___19492)
{var seq__19478_19493__$1 = temp__4092__auto___19492;if(cljs.core.chunked_seq_QMARK_(seq__19478_19493__$1))
{var c__4015__auto___19494 = cljs.core.chunk_first(seq__19478_19493__$1);{
var G__19495 = cljs.core.chunk_rest(seq__19478_19493__$1);
var G__19496 = c__4015__auto___19494;
var G__19497 = cljs.core.count(c__4015__auto___19494);
var G__19498 = 0;
seq__19478_19483 = G__19495;
chunk__19479_19484 = G__19496;
count__19480_19485 = G__19497;
i__19481_19486 = G__19498;
continue;
}
} else
{var node_19499 = cljs.core.first(seq__19478_19493__$1);node_19499.innerHTML = value_19482;
{
var G__19500 = cljs.core.next(seq__19478_19493__$1);
var G__19501 = null;
var G__19502 = 0;
var G__19503 = 0;
seq__19478_19483 = G__19500;
chunk__19479_19484 = G__19501;
count__19480_19485 = G__19502;
i__19481_19486 = G__19503;
continue;
}
}
} else
{}
}
break;
}
}catch (e19477){if((e19477 instanceof Error))
{var e_19504 = e19477;domina.replace_children_BANG_(content,value_19482);
} else
{if(cljs.core.constant$keyword$6)
{throw e19477;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19511_19515 = cljs.core.seq(children);var chunk__19512_19516 = null;var count__19513_19517 = 0;var i__19514_19518 = 0;while(true){
if((i__19514_19518 < count__19513_19517))
{var child_19519 = chunk__19512_19516.cljs$core$IIndexed$_nth$arity$2(null,i__19514_19518);frag.appendChild(child_19519);
{
var G__19520 = seq__19511_19515;
var G__19521 = chunk__19512_19516;
var G__19522 = count__19513_19517;
var G__19523 = (i__19514_19518 + 1);
seq__19511_19515 = G__19520;
chunk__19512_19516 = G__19521;
count__19513_19517 = G__19522;
i__19514_19518 = G__19523;
continue;
}
} else
{var temp__4092__auto___19524 = cljs.core.seq(seq__19511_19515);if(temp__4092__auto___19524)
{var seq__19511_19525__$1 = temp__4092__auto___19524;if(cljs.core.chunked_seq_QMARK_(seq__19511_19525__$1))
{var c__4015__auto___19526 = cljs.core.chunk_first(seq__19511_19525__$1);{
var G__19527 = cljs.core.chunk_rest(seq__19511_19525__$1);
var G__19528 = c__4015__auto___19526;
var G__19529 = cljs.core.count(c__4015__auto___19526);
var G__19530 = 0;
seq__19511_19515 = G__19527;
chunk__19512_19516 = G__19528;
count__19513_19517 = G__19529;
i__19514_19518 = G__19530;
continue;
}
} else
{var child_19531 = cljs.core.first(seq__19511_19525__$1);frag.appendChild(child_19531);
{
var G__19532 = cljs.core.next(seq__19511_19525__$1);
var G__19533 = null;
var G__19534 = 0;
var G__19535 = 0;
seq__19511_19515 = G__19532;
chunk__19512_19516 = G__19533;
count__19513_19517 = G__19534;
i__19514_19518 = G__19535;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__19505_SHARP_,p2__19506_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__19505_SHARP_,p2__19506_SHARP_) : f.call(null,p1__19505_SHARP_,p2__19506_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not(obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__19537 = list_thing;if(G__19537)
{var bit__3917__auto__ = (G__19537.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19537.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19537.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19537);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19537);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__19538 = content;if(G__19538)
{var bit__3917__auto__ = (G__19538.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19538.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19538.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19538);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__19539 = content;if(G__19539)
{var bit__3917__auto__ = (G__19539.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19539.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19539);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$7)
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
