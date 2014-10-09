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
var opt_wrapper_69116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_69117 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_69118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_69118,opt_wrapper_69116,table_section_wrapper_69117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_69116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_69117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_69117,cell_wrapper_69118,table_section_wrapper_69117,table_section_wrapper_69117]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__69123 = cljs.core.seq.call(null,tbody);var chunk__69124 = null;var count__69125 = (0);var i__69126 = (0);while(true){
if((i__69126 < count__69125))
{var child = cljs.core._nth.call(null,chunk__69124,i__69126);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__69127 = seq__69123;
var G__69128 = chunk__69124;
var G__69129 = count__69125;
var G__69130 = (i__69126 + (1));
seq__69123 = G__69127;
chunk__69124 = G__69128;
count__69125 = G__69129;
i__69126 = G__69130;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__69123);if(temp__4126__auto__)
{var seq__69123__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69123__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__69123__$1);{
var G__69131 = cljs.core.chunk_rest.call(null,seq__69123__$1);
var G__69132 = c__4314__auto__;
var G__69133 = cljs.core.count.call(null,c__4314__auto__);
var G__69134 = (0);
seq__69123 = G__69131;
chunk__69124 = G__69132;
count__69125 = G__69133;
i__69126 = G__69134;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__69123__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__69135 = cljs.core.next.call(null,seq__69123__$1);
var G__69136 = null;
var G__69137 = (0);
var G__69138 = (0);
seq__69123 = G__69135;
chunk__69124 = G__69136;
count__69125 = G__69137;
i__69126 = G__69138;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__69140 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__69140,(0),null);var start_wrap = cljs.core.nth.call(null,vec__69140,(1),null);var end_wrap = cljs.core.nth.call(null,vec__69140,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__69141 = wrapper.lastChild;
var G__69142 = (level - (1));
wrapper = G__69141;
level = G__69142;
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
domina.DomContent = (function (){var obj69144 = {};return obj69144;
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
log_debug.cljs$lang$applyTo = (function (arglist__69145){
var mesg = cljs.core.seq(arglist__69145);
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
log.cljs$lang$applyTo = (function (arglist__69146){
var mesg = cljs.core.seq(arglist__69146);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__69147){
var contents = cljs.core.seq(arglist__69147);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__69148_SHARP_){return p1__69148_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__69149_SHARP_,p2__69150_SHARP_){return goog.dom.insertChildAt(p1__69149_SHARP_,p2__69150_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__69152_SHARP_,p2__69151_SHARP_){return goog.dom.insertSiblingBefore(p2__69151_SHARP_,p1__69152_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__69154_SHARP_,p2__69153_SHARP_){return goog.dom.insertSiblingAfter(p2__69153_SHARP_,p1__69154_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__69156_SHARP_,p2__69155_SHARP_){return goog.dom.replaceNode(p2__69155_SHARP_,p1__69156_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__69161_69165 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69162_69166 = null;var count__69163_69167 = (0);var i__69164_69168 = (0);while(true){
if((i__69164_69168 < count__69163_69167))
{var n_69169 = cljs.core._nth.call(null,chunk__69162_69166,i__69164_69168);goog.style.setStyle(n_69169,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__69170 = seq__69161_69165;
var G__69171 = chunk__69162_69166;
var G__69172 = count__69163_69167;
var G__69173 = (i__69164_69168 + (1));
seq__69161_69165 = G__69170;
chunk__69162_69166 = G__69171;
count__69163_69167 = G__69172;
i__69164_69168 = G__69173;
continue;
}
} else
{var temp__4126__auto___69174 = cljs.core.seq.call(null,seq__69161_69165);if(temp__4126__auto___69174)
{var seq__69161_69175__$1 = temp__4126__auto___69174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69161_69175__$1))
{var c__4314__auto___69176 = cljs.core.chunk_first.call(null,seq__69161_69175__$1);{
var G__69177 = cljs.core.chunk_rest.call(null,seq__69161_69175__$1);
var G__69178 = c__4314__auto___69176;
var G__69179 = cljs.core.count.call(null,c__4314__auto___69176);
var G__69180 = (0);
seq__69161_69165 = G__69177;
chunk__69162_69166 = G__69178;
count__69163_69167 = G__69179;
i__69164_69168 = G__69180;
continue;
}
} else
{var n_69181 = cljs.core.first.call(null,seq__69161_69175__$1);goog.style.setStyle(n_69181,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__69182 = cljs.core.next.call(null,seq__69161_69175__$1);
var G__69183 = null;
var G__69184 = (0);
var G__69185 = (0);
seq__69161_69165 = G__69182;
chunk__69162_69166 = G__69183;
count__69163_69167 = G__69184;
i__69164_69168 = G__69185;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__69186){
var content = cljs.core.first(arglist__69186);
arglist__69186 = cljs.core.next(arglist__69186);
var name = cljs.core.first(arglist__69186);
var value = cljs.core.rest(arglist__69186);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__69191_69195 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69192_69196 = null;var count__69193_69197 = (0);var i__69194_69198 = (0);while(true){
if((i__69194_69198 < count__69193_69197))
{var n_69199 = cljs.core._nth.call(null,chunk__69192_69196,i__69194_69198);n_69199.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__69200 = seq__69191_69195;
var G__69201 = chunk__69192_69196;
var G__69202 = count__69193_69197;
var G__69203 = (i__69194_69198 + (1));
seq__69191_69195 = G__69200;
chunk__69192_69196 = G__69201;
count__69193_69197 = G__69202;
i__69194_69198 = G__69203;
continue;
}
} else
{var temp__4126__auto___69204 = cljs.core.seq.call(null,seq__69191_69195);if(temp__4126__auto___69204)
{var seq__69191_69205__$1 = temp__4126__auto___69204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69191_69205__$1))
{var c__4314__auto___69206 = cljs.core.chunk_first.call(null,seq__69191_69205__$1);{
var G__69207 = cljs.core.chunk_rest.call(null,seq__69191_69205__$1);
var G__69208 = c__4314__auto___69206;
var G__69209 = cljs.core.count.call(null,c__4314__auto___69206);
var G__69210 = (0);
seq__69191_69195 = G__69207;
chunk__69192_69196 = G__69208;
count__69193_69197 = G__69209;
i__69194_69198 = G__69210;
continue;
}
} else
{var n_69211 = cljs.core.first.call(null,seq__69191_69205__$1);n_69211.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__69212 = cljs.core.next.call(null,seq__69191_69205__$1);
var G__69213 = null;
var G__69214 = (0);
var G__69215 = (0);
seq__69191_69195 = G__69212;
chunk__69192_69196 = G__69213;
count__69193_69197 = G__69214;
i__69194_69198 = G__69215;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__69216){
var content = cljs.core.first(arglist__69216);
arglist__69216 = cljs.core.next(arglist__69216);
var name = cljs.core.first(arglist__69216);
var value = cljs.core.rest(arglist__69216);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__69221_69225 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69222_69226 = null;var count__69223_69227 = (0);var i__69224_69228 = (0);while(true){
if((i__69224_69228 < count__69223_69227))
{var n_69229 = cljs.core._nth.call(null,chunk__69222_69226,i__69224_69228);n_69229.removeAttribute(cljs.core.name.call(null,name));
{
var G__69230 = seq__69221_69225;
var G__69231 = chunk__69222_69226;
var G__69232 = count__69223_69227;
var G__69233 = (i__69224_69228 + (1));
seq__69221_69225 = G__69230;
chunk__69222_69226 = G__69231;
count__69223_69227 = G__69232;
i__69224_69228 = G__69233;
continue;
}
} else
{var temp__4126__auto___69234 = cljs.core.seq.call(null,seq__69221_69225);if(temp__4126__auto___69234)
{var seq__69221_69235__$1 = temp__4126__auto___69234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69221_69235__$1))
{var c__4314__auto___69236 = cljs.core.chunk_first.call(null,seq__69221_69235__$1);{
var G__69237 = cljs.core.chunk_rest.call(null,seq__69221_69235__$1);
var G__69238 = c__4314__auto___69236;
var G__69239 = cljs.core.count.call(null,c__4314__auto___69236);
var G__69240 = (0);
seq__69221_69225 = G__69237;
chunk__69222_69226 = G__69238;
count__69223_69227 = G__69239;
i__69224_69228 = G__69240;
continue;
}
} else
{var n_69241 = cljs.core.first.call(null,seq__69221_69235__$1);n_69241.removeAttribute(cljs.core.name.call(null,name));
{
var G__69242 = cljs.core.next.call(null,seq__69221_69235__$1);
var G__69243 = null;
var G__69244 = (0);
var G__69245 = (0);
seq__69221_69225 = G__69242;
chunk__69222_69226 = G__69243;
count__69223_69227 = G__69244;
i__69224_69228 = G__69245;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__69247 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__69247,(0),null);var v = cljs.core.nth.call(null,vec__69247,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__69248_SHARP_){var attr = attrs__$1.item(p1__69248_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__69255_69261 = cljs.core.seq.call(null,styles);var chunk__69256_69262 = null;var count__69257_69263 = (0);var i__69258_69264 = (0);while(true){
if((i__69258_69264 < count__69257_69263))
{var vec__69259_69265 = cljs.core._nth.call(null,chunk__69256_69262,i__69258_69264);var name_69266 = cljs.core.nth.call(null,vec__69259_69265,(0),null);var value_69267 = cljs.core.nth.call(null,vec__69259_69265,(1),null);domina.set_style_BANG_.call(null,content,name_69266,value_69267);
{
var G__69268 = seq__69255_69261;
var G__69269 = chunk__69256_69262;
var G__69270 = count__69257_69263;
var G__69271 = (i__69258_69264 + (1));
seq__69255_69261 = G__69268;
chunk__69256_69262 = G__69269;
count__69257_69263 = G__69270;
i__69258_69264 = G__69271;
continue;
}
} else
{var temp__4126__auto___69272 = cljs.core.seq.call(null,seq__69255_69261);if(temp__4126__auto___69272)
{var seq__69255_69273__$1 = temp__4126__auto___69272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69255_69273__$1))
{var c__4314__auto___69274 = cljs.core.chunk_first.call(null,seq__69255_69273__$1);{
var G__69275 = cljs.core.chunk_rest.call(null,seq__69255_69273__$1);
var G__69276 = c__4314__auto___69274;
var G__69277 = cljs.core.count.call(null,c__4314__auto___69274);
var G__69278 = (0);
seq__69255_69261 = G__69275;
chunk__69256_69262 = G__69276;
count__69257_69263 = G__69277;
i__69258_69264 = G__69278;
continue;
}
} else
{var vec__69260_69279 = cljs.core.first.call(null,seq__69255_69273__$1);var name_69280 = cljs.core.nth.call(null,vec__69260_69279,(0),null);var value_69281 = cljs.core.nth.call(null,vec__69260_69279,(1),null);domina.set_style_BANG_.call(null,content,name_69280,value_69281);
{
var G__69282 = cljs.core.next.call(null,seq__69255_69273__$1);
var G__69283 = null;
var G__69284 = (0);
var G__69285 = (0);
seq__69255_69261 = G__69282;
chunk__69256_69262 = G__69283;
count__69257_69263 = G__69284;
i__69258_69264 = G__69285;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__69292_69298 = cljs.core.seq.call(null,attrs);var chunk__69293_69299 = null;var count__69294_69300 = (0);var i__69295_69301 = (0);while(true){
if((i__69295_69301 < count__69294_69300))
{var vec__69296_69302 = cljs.core._nth.call(null,chunk__69293_69299,i__69295_69301);var name_69303 = cljs.core.nth.call(null,vec__69296_69302,(0),null);var value_69304 = cljs.core.nth.call(null,vec__69296_69302,(1),null);domina.set_attr_BANG_.call(null,content,name_69303,value_69304);
{
var G__69305 = seq__69292_69298;
var G__69306 = chunk__69293_69299;
var G__69307 = count__69294_69300;
var G__69308 = (i__69295_69301 + (1));
seq__69292_69298 = G__69305;
chunk__69293_69299 = G__69306;
count__69294_69300 = G__69307;
i__69295_69301 = G__69308;
continue;
}
} else
{var temp__4126__auto___69309 = cljs.core.seq.call(null,seq__69292_69298);if(temp__4126__auto___69309)
{var seq__69292_69310__$1 = temp__4126__auto___69309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69292_69310__$1))
{var c__4314__auto___69311 = cljs.core.chunk_first.call(null,seq__69292_69310__$1);{
var G__69312 = cljs.core.chunk_rest.call(null,seq__69292_69310__$1);
var G__69313 = c__4314__auto___69311;
var G__69314 = cljs.core.count.call(null,c__4314__auto___69311);
var G__69315 = (0);
seq__69292_69298 = G__69312;
chunk__69293_69299 = G__69313;
count__69294_69300 = G__69314;
i__69295_69301 = G__69315;
continue;
}
} else
{var vec__69297_69316 = cljs.core.first.call(null,seq__69292_69310__$1);var name_69317 = cljs.core.nth.call(null,vec__69297_69316,(0),null);var value_69318 = cljs.core.nth.call(null,vec__69297_69316,(1),null);domina.set_attr_BANG_.call(null,content,name_69317,value_69318);
{
var G__69319 = cljs.core.next.call(null,seq__69292_69310__$1);
var G__69320 = null;
var G__69321 = (0);
var G__69322 = (0);
seq__69292_69298 = G__69319;
chunk__69293_69299 = G__69320;
count__69294_69300 = G__69321;
i__69295_69301 = G__69322;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__69327_69331 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69328_69332 = null;var count__69329_69333 = (0);var i__69330_69334 = (0);while(true){
if((i__69330_69334 < count__69329_69333))
{var node_69335 = cljs.core._nth.call(null,chunk__69328_69332,i__69330_69334);goog.dom.classes.add(node_69335,class$);
{
var G__69336 = seq__69327_69331;
var G__69337 = chunk__69328_69332;
var G__69338 = count__69329_69333;
var G__69339 = (i__69330_69334 + (1));
seq__69327_69331 = G__69336;
chunk__69328_69332 = G__69337;
count__69329_69333 = G__69338;
i__69330_69334 = G__69339;
continue;
}
} else
{var temp__4126__auto___69340 = cljs.core.seq.call(null,seq__69327_69331);if(temp__4126__auto___69340)
{var seq__69327_69341__$1 = temp__4126__auto___69340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69327_69341__$1))
{var c__4314__auto___69342 = cljs.core.chunk_first.call(null,seq__69327_69341__$1);{
var G__69343 = cljs.core.chunk_rest.call(null,seq__69327_69341__$1);
var G__69344 = c__4314__auto___69342;
var G__69345 = cljs.core.count.call(null,c__4314__auto___69342);
var G__69346 = (0);
seq__69327_69331 = G__69343;
chunk__69328_69332 = G__69344;
count__69329_69333 = G__69345;
i__69330_69334 = G__69346;
continue;
}
} else
{var node_69347 = cljs.core.first.call(null,seq__69327_69341__$1);goog.dom.classes.add(node_69347,class$);
{
var G__69348 = cljs.core.next.call(null,seq__69327_69341__$1);
var G__69349 = null;
var G__69350 = (0);
var G__69351 = (0);
seq__69327_69331 = G__69348;
chunk__69328_69332 = G__69349;
count__69329_69333 = G__69350;
i__69330_69334 = G__69351;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__69356_69360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69357_69361 = null;var count__69358_69362 = (0);var i__69359_69363 = (0);while(true){
if((i__69359_69363 < count__69358_69362))
{var node_69364 = cljs.core._nth.call(null,chunk__69357_69361,i__69359_69363);goog.dom.classes.remove(node_69364,class$);
{
var G__69365 = seq__69356_69360;
var G__69366 = chunk__69357_69361;
var G__69367 = count__69358_69362;
var G__69368 = (i__69359_69363 + (1));
seq__69356_69360 = G__69365;
chunk__69357_69361 = G__69366;
count__69358_69362 = G__69367;
i__69359_69363 = G__69368;
continue;
}
} else
{var temp__4126__auto___69369 = cljs.core.seq.call(null,seq__69356_69360);if(temp__4126__auto___69369)
{var seq__69356_69370__$1 = temp__4126__auto___69369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69356_69370__$1))
{var c__4314__auto___69371 = cljs.core.chunk_first.call(null,seq__69356_69370__$1);{
var G__69372 = cljs.core.chunk_rest.call(null,seq__69356_69370__$1);
var G__69373 = c__4314__auto___69371;
var G__69374 = cljs.core.count.call(null,c__4314__auto___69371);
var G__69375 = (0);
seq__69356_69360 = G__69372;
chunk__69357_69361 = G__69373;
count__69358_69362 = G__69374;
i__69359_69363 = G__69375;
continue;
}
} else
{var node_69376 = cljs.core.first.call(null,seq__69356_69370__$1);goog.dom.classes.remove(node_69376,class$);
{
var G__69377 = cljs.core.next.call(null,seq__69356_69370__$1);
var G__69378 = null;
var G__69379 = (0);
var G__69380 = (0);
seq__69356_69360 = G__69377;
chunk__69357_69361 = G__69378;
count__69358_69362 = G__69379;
i__69359_69363 = G__69380;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__69385_69389 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69386_69390 = null;var count__69387_69391 = (0);var i__69388_69392 = (0);while(true){
if((i__69388_69392 < count__69387_69391))
{var node_69393 = cljs.core._nth.call(null,chunk__69386_69390,i__69388_69392);goog.dom.classes.toggle(node_69393,class$);
{
var G__69394 = seq__69385_69389;
var G__69395 = chunk__69386_69390;
var G__69396 = count__69387_69391;
var G__69397 = (i__69388_69392 + (1));
seq__69385_69389 = G__69394;
chunk__69386_69390 = G__69395;
count__69387_69391 = G__69396;
i__69388_69392 = G__69397;
continue;
}
} else
{var temp__4126__auto___69398 = cljs.core.seq.call(null,seq__69385_69389);if(temp__4126__auto___69398)
{var seq__69385_69399__$1 = temp__4126__auto___69398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69385_69399__$1))
{var c__4314__auto___69400 = cljs.core.chunk_first.call(null,seq__69385_69399__$1);{
var G__69401 = cljs.core.chunk_rest.call(null,seq__69385_69399__$1);
var G__69402 = c__4314__auto___69400;
var G__69403 = cljs.core.count.call(null,c__4314__auto___69400);
var G__69404 = (0);
seq__69385_69389 = G__69401;
chunk__69386_69390 = G__69402;
count__69387_69391 = G__69403;
i__69388_69392 = G__69404;
continue;
}
} else
{var node_69405 = cljs.core.first.call(null,seq__69385_69399__$1);goog.dom.classes.toggle(node_69405,class$);
{
var G__69406 = cljs.core.next.call(null,seq__69385_69399__$1);
var G__69407 = null;
var G__69408 = (0);
var G__69409 = (0);
seq__69385_69389 = G__69406;
chunk__69386_69390 = G__69407;
count__69387_69391 = G__69408;
i__69388_69392 = G__69409;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_69418__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__69414_69419 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69415_69420 = null;var count__69416_69421 = (0);var i__69417_69422 = (0);while(true){
if((i__69417_69422 < count__69416_69421))
{var node_69423 = cljs.core._nth.call(null,chunk__69415_69420,i__69417_69422);goog.dom.classes.set(node_69423,classes_69418__$1);
{
var G__69424 = seq__69414_69419;
var G__69425 = chunk__69415_69420;
var G__69426 = count__69416_69421;
var G__69427 = (i__69417_69422 + (1));
seq__69414_69419 = G__69424;
chunk__69415_69420 = G__69425;
count__69416_69421 = G__69426;
i__69417_69422 = G__69427;
continue;
}
} else
{var temp__4126__auto___69428 = cljs.core.seq.call(null,seq__69414_69419);if(temp__4126__auto___69428)
{var seq__69414_69429__$1 = temp__4126__auto___69428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69414_69429__$1))
{var c__4314__auto___69430 = cljs.core.chunk_first.call(null,seq__69414_69429__$1);{
var G__69431 = cljs.core.chunk_rest.call(null,seq__69414_69429__$1);
var G__69432 = c__4314__auto___69430;
var G__69433 = cljs.core.count.call(null,c__4314__auto___69430);
var G__69434 = (0);
seq__69414_69419 = G__69431;
chunk__69415_69420 = G__69432;
count__69416_69421 = G__69433;
i__69417_69422 = G__69434;
continue;
}
} else
{var node_69435 = cljs.core.first.call(null,seq__69414_69429__$1);goog.dom.classes.set(node_69435,classes_69418__$1);
{
var G__69436 = cljs.core.next.call(null,seq__69414_69429__$1);
var G__69437 = null;
var G__69438 = (0);
var G__69439 = (0);
seq__69414_69419 = G__69436;
chunk__69415_69420 = G__69437;
count__69416_69421 = G__69438;
i__69417_69422 = G__69439;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__69444_69448 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69445_69449 = null;var count__69446_69450 = (0);var i__69447_69451 = (0);while(true){
if((i__69447_69451 < count__69446_69450))
{var node_69452 = cljs.core._nth.call(null,chunk__69445_69449,i__69447_69451);goog.dom.setTextContent(node_69452,value);
{
var G__69453 = seq__69444_69448;
var G__69454 = chunk__69445_69449;
var G__69455 = count__69446_69450;
var G__69456 = (i__69447_69451 + (1));
seq__69444_69448 = G__69453;
chunk__69445_69449 = G__69454;
count__69446_69450 = G__69455;
i__69447_69451 = G__69456;
continue;
}
} else
{var temp__4126__auto___69457 = cljs.core.seq.call(null,seq__69444_69448);if(temp__4126__auto___69457)
{var seq__69444_69458__$1 = temp__4126__auto___69457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69444_69458__$1))
{var c__4314__auto___69459 = cljs.core.chunk_first.call(null,seq__69444_69458__$1);{
var G__69460 = cljs.core.chunk_rest.call(null,seq__69444_69458__$1);
var G__69461 = c__4314__auto___69459;
var G__69462 = cljs.core.count.call(null,c__4314__auto___69459);
var G__69463 = (0);
seq__69444_69448 = G__69460;
chunk__69445_69449 = G__69461;
count__69446_69450 = G__69462;
i__69447_69451 = G__69463;
continue;
}
} else
{var node_69464 = cljs.core.first.call(null,seq__69444_69458__$1);goog.dom.setTextContent(node_69464,value);
{
var G__69465 = cljs.core.next.call(null,seq__69444_69458__$1);
var G__69466 = null;
var G__69467 = (0);
var G__69468 = (0);
seq__69444_69448 = G__69465;
chunk__69445_69449 = G__69466;
count__69446_69450 = G__69467;
i__69447_69451 = G__69468;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__69473_69477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69474_69478 = null;var count__69475_69479 = (0);var i__69476_69480 = (0);while(true){
if((i__69476_69480 < count__69475_69479))
{var node_69481 = cljs.core._nth.call(null,chunk__69474_69478,i__69476_69480);goog.dom.forms.setValue(node_69481,value);
{
var G__69482 = seq__69473_69477;
var G__69483 = chunk__69474_69478;
var G__69484 = count__69475_69479;
var G__69485 = (i__69476_69480 + (1));
seq__69473_69477 = G__69482;
chunk__69474_69478 = G__69483;
count__69475_69479 = G__69484;
i__69476_69480 = G__69485;
continue;
}
} else
{var temp__4126__auto___69486 = cljs.core.seq.call(null,seq__69473_69477);if(temp__4126__auto___69486)
{var seq__69473_69487__$1 = temp__4126__auto___69486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69473_69487__$1))
{var c__4314__auto___69488 = cljs.core.chunk_first.call(null,seq__69473_69487__$1);{
var G__69489 = cljs.core.chunk_rest.call(null,seq__69473_69487__$1);
var G__69490 = c__4314__auto___69488;
var G__69491 = cljs.core.count.call(null,c__4314__auto___69488);
var G__69492 = (0);
seq__69473_69477 = G__69489;
chunk__69474_69478 = G__69490;
count__69475_69479 = G__69491;
i__69476_69480 = G__69492;
continue;
}
} else
{var node_69493 = cljs.core.first.call(null,seq__69473_69487__$1);goog.dom.forms.setValue(node_69493,value);
{
var G__69494 = cljs.core.next.call(null,seq__69473_69487__$1);
var G__69495 = null;
var G__69496 = (0);
var G__69497 = (0);
seq__69473_69477 = G__69494;
chunk__69474_69478 = G__69495;
count__69475_69479 = G__69496;
i__69476_69480 = G__69497;
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
{var value_69508 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__69504_69509 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__69505_69510 = null;var count__69506_69511 = (0);var i__69507_69512 = (0);while(true){
if((i__69507_69512 < count__69506_69511))
{var node_69513 = cljs.core._nth.call(null,chunk__69505_69510,i__69507_69512);node_69513.innerHTML = value_69508;
{
var G__69514 = seq__69504_69509;
var G__69515 = chunk__69505_69510;
var G__69516 = count__69506_69511;
var G__69517 = (i__69507_69512 + (1));
seq__69504_69509 = G__69514;
chunk__69505_69510 = G__69515;
count__69506_69511 = G__69516;
i__69507_69512 = G__69517;
continue;
}
} else
{var temp__4126__auto___69518 = cljs.core.seq.call(null,seq__69504_69509);if(temp__4126__auto___69518)
{var seq__69504_69519__$1 = temp__4126__auto___69518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69504_69519__$1))
{var c__4314__auto___69520 = cljs.core.chunk_first.call(null,seq__69504_69519__$1);{
var G__69521 = cljs.core.chunk_rest.call(null,seq__69504_69519__$1);
var G__69522 = c__4314__auto___69520;
var G__69523 = cljs.core.count.call(null,c__4314__auto___69520);
var G__69524 = (0);
seq__69504_69509 = G__69521;
chunk__69505_69510 = G__69522;
count__69506_69511 = G__69523;
i__69507_69512 = G__69524;
continue;
}
} else
{var node_69525 = cljs.core.first.call(null,seq__69504_69519__$1);node_69525.innerHTML = value_69508;
{
var G__69526 = cljs.core.next.call(null,seq__69504_69519__$1);
var G__69527 = null;
var G__69528 = (0);
var G__69529 = (0);
seq__69504_69509 = G__69526;
chunk__69505_69510 = G__69527;
count__69506_69511 = G__69528;
i__69507_69512 = G__69529;
continue;
}
}
} else
{}
}
break;
}
}catch (e69503){if((e69503 instanceof Error))
{var e_69530 = e69503;domina.replace_children_BANG_.call(null,content,value_69508);
} else
{throw e69503;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__69537_69541 = cljs.core.seq.call(null,children);var chunk__69538_69542 = null;var count__69539_69543 = (0);var i__69540_69544 = (0);while(true){
if((i__69540_69544 < count__69539_69543))
{var child_69545 = cljs.core._nth.call(null,chunk__69538_69542,i__69540_69544);frag.appendChild(child_69545);
{
var G__69546 = seq__69537_69541;
var G__69547 = chunk__69538_69542;
var G__69548 = count__69539_69543;
var G__69549 = (i__69540_69544 + (1));
seq__69537_69541 = G__69546;
chunk__69538_69542 = G__69547;
count__69539_69543 = G__69548;
i__69540_69544 = G__69549;
continue;
}
} else
{var temp__4126__auto___69550 = cljs.core.seq.call(null,seq__69537_69541);if(temp__4126__auto___69550)
{var seq__69537_69551__$1 = temp__4126__auto___69550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69537_69551__$1))
{var c__4314__auto___69552 = cljs.core.chunk_first.call(null,seq__69537_69551__$1);{
var G__69553 = cljs.core.chunk_rest.call(null,seq__69537_69551__$1);
var G__69554 = c__4314__auto___69552;
var G__69555 = cljs.core.count.call(null,c__4314__auto___69552);
var G__69556 = (0);
seq__69537_69541 = G__69553;
chunk__69538_69542 = G__69554;
count__69539_69543 = G__69555;
i__69540_69544 = G__69556;
continue;
}
} else
{var child_69557 = cljs.core.first.call(null,seq__69537_69551__$1);frag.appendChild(child_69557);
{
var G__69558 = cljs.core.next.call(null,seq__69537_69551__$1);
var G__69559 = null;
var G__69560 = (0);
var G__69561 = (0);
seq__69537_69541 = G__69558;
chunk__69538_69542 = G__69559;
count__69539_69543 = G__69560;
i__69540_69544 = G__69561;
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
return (function (p1__69531_SHARP_,p2__69532_SHARP_){return f.call(null,p1__69531_SHARP_,p2__69532_SHARP_);
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
{if((function (){var G__69563 = list_thing;if(G__69563)
{var bit__4208__auto__ = (G__69563.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__69563.cljs$core$ISeqable$))
{return true;
} else
{if((!G__69563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69563);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69563);
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
{if((function (){var G__69564 = content;if(G__69564)
{var bit__4208__auto__ = (G__69564.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__69564.cljs$core$ISeqable$))
{return true;
} else
{if((!G__69564.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69564);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69564);
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
{if((function (){var G__69565 = content;if(G__69565)
{var bit__4208__auto__ = (G__69565.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__69565.cljs$core$ISeqable$))
{return true;
} else
{if((!G__69565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69565);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__69565);
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