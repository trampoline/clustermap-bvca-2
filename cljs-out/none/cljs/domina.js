// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_57059 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_57060 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_57061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_57061,opt_wrapper_57059,table_section_wrapper_57060,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_57059,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_57060,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_57060,cell_wrapper_57061,table_section_wrapper_57060,table_section_wrapper_57060]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__57066 = cljs.core.seq.call(null,tbody);var chunk__57067 = null;var count__57068 = (0);var i__57069 = (0);while(true){
if((i__57069 < count__57068))
{var child = cljs.core._nth.call(null,chunk__57067,i__57069);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57070 = seq__57066;
var G__57071 = chunk__57067;
var G__57072 = count__57068;
var G__57073 = (i__57069 + (1));
seq__57066 = G__57070;
chunk__57067 = G__57071;
count__57068 = G__57072;
i__57069 = G__57073;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57066);if(temp__4126__auto__)
{var seq__57066__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57066__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__57066__$1);{
var G__57074 = cljs.core.chunk_rest.call(null,seq__57066__$1);
var G__57075 = c__4314__auto__;
var G__57076 = cljs.core.count.call(null,c__4314__auto__);
var G__57077 = (0);
seq__57066 = G__57074;
chunk__57067 = G__57075;
count__57068 = G__57076;
i__57069 = G__57077;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__57066__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57078 = cljs.core.next.call(null,seq__57066__$1);
var G__57079 = null;
var G__57080 = (0);
var G__57081 = (0);
seq__57066 = G__57078;
chunk__57067 = G__57079;
count__57068 = G__57080;
i__57069 = G__57081;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__57083 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__57083,(0),null);var start_wrap = cljs.core.nth.call(null,vec__57083,(1),null);var end_wrap = cljs.core.nth.call(null,vec__57083,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__57084 = wrapper.lastChild;
var G__57085 = (level - (1));
wrapper = G__57084;
level = G__57085;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj57087 = {};return obj57087;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__57088){
var mesg = cljs.core.seq(arglist__57088);
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
log.cljs$lang$applyTo = (function (arglist__57089){
var mesg = cljs.core.seq(arglist__57089);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__57090){
var contents = cljs.core.seq(arglist__57090);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__57091_SHARP_){return p1__57091_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__57092_SHARP_,p2__57093_SHARP_){return goog.dom.insertChildAt(p1__57092_SHARP_,p2__57093_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57095_SHARP_,p2__57094_SHARP_){return goog.dom.insertSiblingBefore(p2__57094_SHARP_,p1__57095_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57097_SHARP_,p2__57096_SHARP_){return goog.dom.insertSiblingAfter(p2__57096_SHARP_,p1__57097_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__57099_SHARP_,p2__57098_SHARP_){return goog.dom.replaceNode(p2__57098_SHARP_,p1__57099_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__57104_57108 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57105_57109 = null;var count__57106_57110 = (0);var i__57107_57111 = (0);while(true){
if((i__57107_57111 < count__57106_57110))
{var n_57112 = cljs.core._nth.call(null,chunk__57105_57109,i__57107_57111);goog.style.setStyle(n_57112,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57113 = seq__57104_57108;
var G__57114 = chunk__57105_57109;
var G__57115 = count__57106_57110;
var G__57116 = (i__57107_57111 + (1));
seq__57104_57108 = G__57113;
chunk__57105_57109 = G__57114;
count__57106_57110 = G__57115;
i__57107_57111 = G__57116;
continue;
}
} else
{var temp__4126__auto___57117 = cljs.core.seq.call(null,seq__57104_57108);if(temp__4126__auto___57117)
{var seq__57104_57118__$1 = temp__4126__auto___57117;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57104_57118__$1))
{var c__4314__auto___57119 = cljs.core.chunk_first.call(null,seq__57104_57118__$1);{
var G__57120 = cljs.core.chunk_rest.call(null,seq__57104_57118__$1);
var G__57121 = c__4314__auto___57119;
var G__57122 = cljs.core.count.call(null,c__4314__auto___57119);
var G__57123 = (0);
seq__57104_57108 = G__57120;
chunk__57105_57109 = G__57121;
count__57106_57110 = G__57122;
i__57107_57111 = G__57123;
continue;
}
} else
{var n_57124 = cljs.core.first.call(null,seq__57104_57118__$1);goog.style.setStyle(n_57124,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57125 = cljs.core.next.call(null,seq__57104_57118__$1);
var G__57126 = null;
var G__57127 = (0);
var G__57128 = (0);
seq__57104_57108 = G__57125;
chunk__57105_57109 = G__57126;
count__57106_57110 = G__57127;
i__57107_57111 = G__57128;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__57129){
var content = cljs.core.first(arglist__57129);
arglist__57129 = cljs.core.next(arglist__57129);
var name = cljs.core.first(arglist__57129);
var value = cljs.core.rest(arglist__57129);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__57134_57138 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57135_57139 = null;var count__57136_57140 = (0);var i__57137_57141 = (0);while(true){
if((i__57137_57141 < count__57136_57140))
{var n_57142 = cljs.core._nth.call(null,chunk__57135_57139,i__57137_57141);n_57142.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57143 = seq__57134_57138;
var G__57144 = chunk__57135_57139;
var G__57145 = count__57136_57140;
var G__57146 = (i__57137_57141 + (1));
seq__57134_57138 = G__57143;
chunk__57135_57139 = G__57144;
count__57136_57140 = G__57145;
i__57137_57141 = G__57146;
continue;
}
} else
{var temp__4126__auto___57147 = cljs.core.seq.call(null,seq__57134_57138);if(temp__4126__auto___57147)
{var seq__57134_57148__$1 = temp__4126__auto___57147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57134_57148__$1))
{var c__4314__auto___57149 = cljs.core.chunk_first.call(null,seq__57134_57148__$1);{
var G__57150 = cljs.core.chunk_rest.call(null,seq__57134_57148__$1);
var G__57151 = c__4314__auto___57149;
var G__57152 = cljs.core.count.call(null,c__4314__auto___57149);
var G__57153 = (0);
seq__57134_57138 = G__57150;
chunk__57135_57139 = G__57151;
count__57136_57140 = G__57152;
i__57137_57141 = G__57153;
continue;
}
} else
{var n_57154 = cljs.core.first.call(null,seq__57134_57148__$1);n_57154.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57155 = cljs.core.next.call(null,seq__57134_57148__$1);
var G__57156 = null;
var G__57157 = (0);
var G__57158 = (0);
seq__57134_57138 = G__57155;
chunk__57135_57139 = G__57156;
count__57136_57140 = G__57157;
i__57137_57141 = G__57158;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__57159){
var content = cljs.core.first(arglist__57159);
arglist__57159 = cljs.core.next(arglist__57159);
var name = cljs.core.first(arglist__57159);
var value = cljs.core.rest(arglist__57159);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__57164_57168 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57165_57169 = null;var count__57166_57170 = (0);var i__57167_57171 = (0);while(true){
if((i__57167_57171 < count__57166_57170))
{var n_57172 = cljs.core._nth.call(null,chunk__57165_57169,i__57167_57171);n_57172.removeAttribute(cljs.core.name.call(null,name));
{
var G__57173 = seq__57164_57168;
var G__57174 = chunk__57165_57169;
var G__57175 = count__57166_57170;
var G__57176 = (i__57167_57171 + (1));
seq__57164_57168 = G__57173;
chunk__57165_57169 = G__57174;
count__57166_57170 = G__57175;
i__57167_57171 = G__57176;
continue;
}
} else
{var temp__4126__auto___57177 = cljs.core.seq.call(null,seq__57164_57168);if(temp__4126__auto___57177)
{var seq__57164_57178__$1 = temp__4126__auto___57177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57164_57178__$1))
{var c__4314__auto___57179 = cljs.core.chunk_first.call(null,seq__57164_57178__$1);{
var G__57180 = cljs.core.chunk_rest.call(null,seq__57164_57178__$1);
var G__57181 = c__4314__auto___57179;
var G__57182 = cljs.core.count.call(null,c__4314__auto___57179);
var G__57183 = (0);
seq__57164_57168 = G__57180;
chunk__57165_57169 = G__57181;
count__57166_57170 = G__57182;
i__57167_57171 = G__57183;
continue;
}
} else
{var n_57184 = cljs.core.first.call(null,seq__57164_57178__$1);n_57184.removeAttribute(cljs.core.name.call(null,name));
{
var G__57185 = cljs.core.next.call(null,seq__57164_57178__$1);
var G__57186 = null;
var G__57187 = (0);
var G__57188 = (0);
seq__57164_57168 = G__57185;
chunk__57165_57169 = G__57186;
count__57166_57170 = G__57187;
i__57167_57171 = G__57188;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__57190 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__57190,(0),null);var v = cljs.core.nth.call(null,vec__57190,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__57191_SHARP_){var attr = attrs__$1.item(p1__57191_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__57198_57204 = cljs.core.seq.call(null,styles);var chunk__57199_57205 = null;var count__57200_57206 = (0);var i__57201_57207 = (0);while(true){
if((i__57201_57207 < count__57200_57206))
{var vec__57202_57208 = cljs.core._nth.call(null,chunk__57199_57205,i__57201_57207);var name_57209 = cljs.core.nth.call(null,vec__57202_57208,(0),null);var value_57210 = cljs.core.nth.call(null,vec__57202_57208,(1),null);domina.set_style_BANG_.call(null,content,name_57209,value_57210);
{
var G__57211 = seq__57198_57204;
var G__57212 = chunk__57199_57205;
var G__57213 = count__57200_57206;
var G__57214 = (i__57201_57207 + (1));
seq__57198_57204 = G__57211;
chunk__57199_57205 = G__57212;
count__57200_57206 = G__57213;
i__57201_57207 = G__57214;
continue;
}
} else
{var temp__4126__auto___57215 = cljs.core.seq.call(null,seq__57198_57204);if(temp__4126__auto___57215)
{var seq__57198_57216__$1 = temp__4126__auto___57215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57198_57216__$1))
{var c__4314__auto___57217 = cljs.core.chunk_first.call(null,seq__57198_57216__$1);{
var G__57218 = cljs.core.chunk_rest.call(null,seq__57198_57216__$1);
var G__57219 = c__4314__auto___57217;
var G__57220 = cljs.core.count.call(null,c__4314__auto___57217);
var G__57221 = (0);
seq__57198_57204 = G__57218;
chunk__57199_57205 = G__57219;
count__57200_57206 = G__57220;
i__57201_57207 = G__57221;
continue;
}
} else
{var vec__57203_57222 = cljs.core.first.call(null,seq__57198_57216__$1);var name_57223 = cljs.core.nth.call(null,vec__57203_57222,(0),null);var value_57224 = cljs.core.nth.call(null,vec__57203_57222,(1),null);domina.set_style_BANG_.call(null,content,name_57223,value_57224);
{
var G__57225 = cljs.core.next.call(null,seq__57198_57216__$1);
var G__57226 = null;
var G__57227 = (0);
var G__57228 = (0);
seq__57198_57204 = G__57225;
chunk__57199_57205 = G__57226;
count__57200_57206 = G__57227;
i__57201_57207 = G__57228;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__57235_57241 = cljs.core.seq.call(null,attrs);var chunk__57236_57242 = null;var count__57237_57243 = (0);var i__57238_57244 = (0);while(true){
if((i__57238_57244 < count__57237_57243))
{var vec__57239_57245 = cljs.core._nth.call(null,chunk__57236_57242,i__57238_57244);var name_57246 = cljs.core.nth.call(null,vec__57239_57245,(0),null);var value_57247 = cljs.core.nth.call(null,vec__57239_57245,(1),null);domina.set_attr_BANG_.call(null,content,name_57246,value_57247);
{
var G__57248 = seq__57235_57241;
var G__57249 = chunk__57236_57242;
var G__57250 = count__57237_57243;
var G__57251 = (i__57238_57244 + (1));
seq__57235_57241 = G__57248;
chunk__57236_57242 = G__57249;
count__57237_57243 = G__57250;
i__57238_57244 = G__57251;
continue;
}
} else
{var temp__4126__auto___57252 = cljs.core.seq.call(null,seq__57235_57241);if(temp__4126__auto___57252)
{var seq__57235_57253__$1 = temp__4126__auto___57252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57235_57253__$1))
{var c__4314__auto___57254 = cljs.core.chunk_first.call(null,seq__57235_57253__$1);{
var G__57255 = cljs.core.chunk_rest.call(null,seq__57235_57253__$1);
var G__57256 = c__4314__auto___57254;
var G__57257 = cljs.core.count.call(null,c__4314__auto___57254);
var G__57258 = (0);
seq__57235_57241 = G__57255;
chunk__57236_57242 = G__57256;
count__57237_57243 = G__57257;
i__57238_57244 = G__57258;
continue;
}
} else
{var vec__57240_57259 = cljs.core.first.call(null,seq__57235_57253__$1);var name_57260 = cljs.core.nth.call(null,vec__57240_57259,(0),null);var value_57261 = cljs.core.nth.call(null,vec__57240_57259,(1),null);domina.set_attr_BANG_.call(null,content,name_57260,value_57261);
{
var G__57262 = cljs.core.next.call(null,seq__57235_57253__$1);
var G__57263 = null;
var G__57264 = (0);
var G__57265 = (0);
seq__57235_57241 = G__57262;
chunk__57236_57242 = G__57263;
count__57237_57243 = G__57264;
i__57238_57244 = G__57265;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__57270_57274 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57271_57275 = null;var count__57272_57276 = (0);var i__57273_57277 = (0);while(true){
if((i__57273_57277 < count__57272_57276))
{var node_57278 = cljs.core._nth.call(null,chunk__57271_57275,i__57273_57277);goog.dom.classes.add(node_57278,class$);
{
var G__57279 = seq__57270_57274;
var G__57280 = chunk__57271_57275;
var G__57281 = count__57272_57276;
var G__57282 = (i__57273_57277 + (1));
seq__57270_57274 = G__57279;
chunk__57271_57275 = G__57280;
count__57272_57276 = G__57281;
i__57273_57277 = G__57282;
continue;
}
} else
{var temp__4126__auto___57283 = cljs.core.seq.call(null,seq__57270_57274);if(temp__4126__auto___57283)
{var seq__57270_57284__$1 = temp__4126__auto___57283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57270_57284__$1))
{var c__4314__auto___57285 = cljs.core.chunk_first.call(null,seq__57270_57284__$1);{
var G__57286 = cljs.core.chunk_rest.call(null,seq__57270_57284__$1);
var G__57287 = c__4314__auto___57285;
var G__57288 = cljs.core.count.call(null,c__4314__auto___57285);
var G__57289 = (0);
seq__57270_57274 = G__57286;
chunk__57271_57275 = G__57287;
count__57272_57276 = G__57288;
i__57273_57277 = G__57289;
continue;
}
} else
{var node_57290 = cljs.core.first.call(null,seq__57270_57284__$1);goog.dom.classes.add(node_57290,class$);
{
var G__57291 = cljs.core.next.call(null,seq__57270_57284__$1);
var G__57292 = null;
var G__57293 = (0);
var G__57294 = (0);
seq__57270_57274 = G__57291;
chunk__57271_57275 = G__57292;
count__57272_57276 = G__57293;
i__57273_57277 = G__57294;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__57299_57303 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57300_57304 = null;var count__57301_57305 = (0);var i__57302_57306 = (0);while(true){
if((i__57302_57306 < count__57301_57305))
{var node_57307 = cljs.core._nth.call(null,chunk__57300_57304,i__57302_57306);goog.dom.classes.remove(node_57307,class$);
{
var G__57308 = seq__57299_57303;
var G__57309 = chunk__57300_57304;
var G__57310 = count__57301_57305;
var G__57311 = (i__57302_57306 + (1));
seq__57299_57303 = G__57308;
chunk__57300_57304 = G__57309;
count__57301_57305 = G__57310;
i__57302_57306 = G__57311;
continue;
}
} else
{var temp__4126__auto___57312 = cljs.core.seq.call(null,seq__57299_57303);if(temp__4126__auto___57312)
{var seq__57299_57313__$1 = temp__4126__auto___57312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57299_57313__$1))
{var c__4314__auto___57314 = cljs.core.chunk_first.call(null,seq__57299_57313__$1);{
var G__57315 = cljs.core.chunk_rest.call(null,seq__57299_57313__$1);
var G__57316 = c__4314__auto___57314;
var G__57317 = cljs.core.count.call(null,c__4314__auto___57314);
var G__57318 = (0);
seq__57299_57303 = G__57315;
chunk__57300_57304 = G__57316;
count__57301_57305 = G__57317;
i__57302_57306 = G__57318;
continue;
}
} else
{var node_57319 = cljs.core.first.call(null,seq__57299_57313__$1);goog.dom.classes.remove(node_57319,class$);
{
var G__57320 = cljs.core.next.call(null,seq__57299_57313__$1);
var G__57321 = null;
var G__57322 = (0);
var G__57323 = (0);
seq__57299_57303 = G__57320;
chunk__57300_57304 = G__57321;
count__57301_57305 = G__57322;
i__57302_57306 = G__57323;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__57328_57332 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57329_57333 = null;var count__57330_57334 = (0);var i__57331_57335 = (0);while(true){
if((i__57331_57335 < count__57330_57334))
{var node_57336 = cljs.core._nth.call(null,chunk__57329_57333,i__57331_57335);goog.dom.classes.toggle(node_57336,class$);
{
var G__57337 = seq__57328_57332;
var G__57338 = chunk__57329_57333;
var G__57339 = count__57330_57334;
var G__57340 = (i__57331_57335 + (1));
seq__57328_57332 = G__57337;
chunk__57329_57333 = G__57338;
count__57330_57334 = G__57339;
i__57331_57335 = G__57340;
continue;
}
} else
{var temp__4126__auto___57341 = cljs.core.seq.call(null,seq__57328_57332);if(temp__4126__auto___57341)
{var seq__57328_57342__$1 = temp__4126__auto___57341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57328_57342__$1))
{var c__4314__auto___57343 = cljs.core.chunk_first.call(null,seq__57328_57342__$1);{
var G__57344 = cljs.core.chunk_rest.call(null,seq__57328_57342__$1);
var G__57345 = c__4314__auto___57343;
var G__57346 = cljs.core.count.call(null,c__4314__auto___57343);
var G__57347 = (0);
seq__57328_57332 = G__57344;
chunk__57329_57333 = G__57345;
count__57330_57334 = G__57346;
i__57331_57335 = G__57347;
continue;
}
} else
{var node_57348 = cljs.core.first.call(null,seq__57328_57342__$1);goog.dom.classes.toggle(node_57348,class$);
{
var G__57349 = cljs.core.next.call(null,seq__57328_57342__$1);
var G__57350 = null;
var G__57351 = (0);
var G__57352 = (0);
seq__57328_57332 = G__57349;
chunk__57329_57333 = G__57350;
count__57330_57334 = G__57351;
i__57331_57335 = G__57352;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_57361__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__57357_57362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57358_57363 = null;var count__57359_57364 = (0);var i__57360_57365 = (0);while(true){
if((i__57360_57365 < count__57359_57364))
{var node_57366 = cljs.core._nth.call(null,chunk__57358_57363,i__57360_57365);goog.dom.classes.set(node_57366,classes_57361__$1);
{
var G__57367 = seq__57357_57362;
var G__57368 = chunk__57358_57363;
var G__57369 = count__57359_57364;
var G__57370 = (i__57360_57365 + (1));
seq__57357_57362 = G__57367;
chunk__57358_57363 = G__57368;
count__57359_57364 = G__57369;
i__57360_57365 = G__57370;
continue;
}
} else
{var temp__4126__auto___57371 = cljs.core.seq.call(null,seq__57357_57362);if(temp__4126__auto___57371)
{var seq__57357_57372__$1 = temp__4126__auto___57371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57357_57372__$1))
{var c__4314__auto___57373 = cljs.core.chunk_first.call(null,seq__57357_57372__$1);{
var G__57374 = cljs.core.chunk_rest.call(null,seq__57357_57372__$1);
var G__57375 = c__4314__auto___57373;
var G__57376 = cljs.core.count.call(null,c__4314__auto___57373);
var G__57377 = (0);
seq__57357_57362 = G__57374;
chunk__57358_57363 = G__57375;
count__57359_57364 = G__57376;
i__57360_57365 = G__57377;
continue;
}
} else
{var node_57378 = cljs.core.first.call(null,seq__57357_57372__$1);goog.dom.classes.set(node_57378,classes_57361__$1);
{
var G__57379 = cljs.core.next.call(null,seq__57357_57372__$1);
var G__57380 = null;
var G__57381 = (0);
var G__57382 = (0);
seq__57357_57362 = G__57379;
chunk__57358_57363 = G__57380;
count__57359_57364 = G__57381;
i__57360_57365 = G__57382;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__57387_57391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57388_57392 = null;var count__57389_57393 = (0);var i__57390_57394 = (0);while(true){
if((i__57390_57394 < count__57389_57393))
{var node_57395 = cljs.core._nth.call(null,chunk__57388_57392,i__57390_57394);goog.dom.setTextContent(node_57395,value);
{
var G__57396 = seq__57387_57391;
var G__57397 = chunk__57388_57392;
var G__57398 = count__57389_57393;
var G__57399 = (i__57390_57394 + (1));
seq__57387_57391 = G__57396;
chunk__57388_57392 = G__57397;
count__57389_57393 = G__57398;
i__57390_57394 = G__57399;
continue;
}
} else
{var temp__4126__auto___57400 = cljs.core.seq.call(null,seq__57387_57391);if(temp__4126__auto___57400)
{var seq__57387_57401__$1 = temp__4126__auto___57400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57387_57401__$1))
{var c__4314__auto___57402 = cljs.core.chunk_first.call(null,seq__57387_57401__$1);{
var G__57403 = cljs.core.chunk_rest.call(null,seq__57387_57401__$1);
var G__57404 = c__4314__auto___57402;
var G__57405 = cljs.core.count.call(null,c__4314__auto___57402);
var G__57406 = (0);
seq__57387_57391 = G__57403;
chunk__57388_57392 = G__57404;
count__57389_57393 = G__57405;
i__57390_57394 = G__57406;
continue;
}
} else
{var node_57407 = cljs.core.first.call(null,seq__57387_57401__$1);goog.dom.setTextContent(node_57407,value);
{
var G__57408 = cljs.core.next.call(null,seq__57387_57401__$1);
var G__57409 = null;
var G__57410 = (0);
var G__57411 = (0);
seq__57387_57391 = G__57408;
chunk__57388_57392 = G__57409;
count__57389_57393 = G__57410;
i__57390_57394 = G__57411;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__57416_57420 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57417_57421 = null;var count__57418_57422 = (0);var i__57419_57423 = (0);while(true){
if((i__57419_57423 < count__57418_57422))
{var node_57424 = cljs.core._nth.call(null,chunk__57417_57421,i__57419_57423);goog.dom.forms.setValue(node_57424,value);
{
var G__57425 = seq__57416_57420;
var G__57426 = chunk__57417_57421;
var G__57427 = count__57418_57422;
var G__57428 = (i__57419_57423 + (1));
seq__57416_57420 = G__57425;
chunk__57417_57421 = G__57426;
count__57418_57422 = G__57427;
i__57419_57423 = G__57428;
continue;
}
} else
{var temp__4126__auto___57429 = cljs.core.seq.call(null,seq__57416_57420);if(temp__4126__auto___57429)
{var seq__57416_57430__$1 = temp__4126__auto___57429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57416_57430__$1))
{var c__4314__auto___57431 = cljs.core.chunk_first.call(null,seq__57416_57430__$1);{
var G__57432 = cljs.core.chunk_rest.call(null,seq__57416_57430__$1);
var G__57433 = c__4314__auto___57431;
var G__57434 = cljs.core.count.call(null,c__4314__auto___57431);
var G__57435 = (0);
seq__57416_57420 = G__57432;
chunk__57417_57421 = G__57433;
count__57418_57422 = G__57434;
i__57419_57423 = G__57435;
continue;
}
} else
{var node_57436 = cljs.core.first.call(null,seq__57416_57430__$1);goog.dom.forms.setValue(node_57436,value);
{
var G__57437 = cljs.core.next.call(null,seq__57416_57430__$1);
var G__57438 = null;
var G__57439 = (0);
var G__57440 = (0);
seq__57416_57420 = G__57437;
chunk__57417_57421 = G__57438;
count__57418_57422 = G__57439;
i__57419_57423 = G__57440;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_57451 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__57447_57452 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57448_57453 = null;var count__57449_57454 = (0);var i__57450_57455 = (0);while(true){
if((i__57450_57455 < count__57449_57454))
{var node_57456 = cljs.core._nth.call(null,chunk__57448_57453,i__57450_57455);node_57456.innerHTML = value_57451;
{
var G__57457 = seq__57447_57452;
var G__57458 = chunk__57448_57453;
var G__57459 = count__57449_57454;
var G__57460 = (i__57450_57455 + (1));
seq__57447_57452 = G__57457;
chunk__57448_57453 = G__57458;
count__57449_57454 = G__57459;
i__57450_57455 = G__57460;
continue;
}
} else
{var temp__4126__auto___57461 = cljs.core.seq.call(null,seq__57447_57452);if(temp__4126__auto___57461)
{var seq__57447_57462__$1 = temp__4126__auto___57461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57447_57462__$1))
{var c__4314__auto___57463 = cljs.core.chunk_first.call(null,seq__57447_57462__$1);{
var G__57464 = cljs.core.chunk_rest.call(null,seq__57447_57462__$1);
var G__57465 = c__4314__auto___57463;
var G__57466 = cljs.core.count.call(null,c__4314__auto___57463);
var G__57467 = (0);
seq__57447_57452 = G__57464;
chunk__57448_57453 = G__57465;
count__57449_57454 = G__57466;
i__57450_57455 = G__57467;
continue;
}
} else
{var node_57468 = cljs.core.first.call(null,seq__57447_57462__$1);node_57468.innerHTML = value_57451;
{
var G__57469 = cljs.core.next.call(null,seq__57447_57462__$1);
var G__57470 = null;
var G__57471 = (0);
var G__57472 = (0);
seq__57447_57452 = G__57469;
chunk__57448_57453 = G__57470;
count__57449_57454 = G__57471;
i__57450_57455 = G__57472;
continue;
}
}
} else
{}
}
break;
}
}catch (e57446){if((e57446 instanceof Error))
{var e_57473 = e57446;domina.replace_children_BANG_.call(null,content,value_57451);
} else
{throw e57446;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__57480_57484 = cljs.core.seq.call(null,children);var chunk__57481_57485 = null;var count__57482_57486 = (0);var i__57483_57487 = (0);while(true){
if((i__57483_57487 < count__57482_57486))
{var child_57488 = cljs.core._nth.call(null,chunk__57481_57485,i__57483_57487);frag.appendChild(child_57488);
{
var G__57489 = seq__57480_57484;
var G__57490 = chunk__57481_57485;
var G__57491 = count__57482_57486;
var G__57492 = (i__57483_57487 + (1));
seq__57480_57484 = G__57489;
chunk__57481_57485 = G__57490;
count__57482_57486 = G__57491;
i__57483_57487 = G__57492;
continue;
}
} else
{var temp__4126__auto___57493 = cljs.core.seq.call(null,seq__57480_57484);if(temp__4126__auto___57493)
{var seq__57480_57494__$1 = temp__4126__auto___57493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57480_57494__$1))
{var c__4314__auto___57495 = cljs.core.chunk_first.call(null,seq__57480_57494__$1);{
var G__57496 = cljs.core.chunk_rest.call(null,seq__57480_57494__$1);
var G__57497 = c__4314__auto___57495;
var G__57498 = cljs.core.count.call(null,c__4314__auto___57495);
var G__57499 = (0);
seq__57480_57484 = G__57496;
chunk__57481_57485 = G__57497;
count__57482_57486 = G__57498;
i__57483_57487 = G__57499;
continue;
}
} else
{var child_57500 = cljs.core.first.call(null,seq__57480_57494__$1);frag.appendChild(child_57500);
{
var G__57501 = cljs.core.next.call(null,seq__57480_57494__$1);
var G__57502 = null;
var G__57503 = (0);
var G__57504 = (0);
seq__57480_57484 = G__57501;
chunk__57481_57485 = G__57502;
count__57482_57486 = G__57503;
i__57483_57487 = G__57504;
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
return (function (p1__57474_SHARP_,p2__57475_SHARP_){return f.call(null,p1__57474_SHARP_,p2__57475_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__57506 = list_thing;if(G__57506)
{var bit__4208__auto__ = (G__57506.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57506.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57506);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__57507 = content;if(G__57507)
{var bit__4208__auto__ = (G__57507.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57507.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57507);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__57508 = content;if(G__57508)
{var bit__4208__auto__ = (G__57508.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57508.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57508);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57508);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

//# sourceMappingURL=domina.js.map