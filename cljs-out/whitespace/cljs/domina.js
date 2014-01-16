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
var opt_wrapper_34174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_34175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_34176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_34175,table_section_wrapper_34175,opt_wrapper_34174,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_34176,table_section_wrapper_34175,cell_wrapper_34176,opt_wrapper_34174,table_section_wrapper_34175,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_34175]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__34181 = cljs.core.seq.call(null,tbody);var chunk__34182 = null;var count__34183 = 0;var i__34184 = 0;while(true){
if((i__34184 < count__34183))
{var child = cljs.core._nth.call(null,chunk__34182,i__34184);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34185 = seq__34181;
var G__34186 = chunk__34182;
var G__34187 = count__34183;
var G__34188 = (i__34184 + 1);
seq__34181 = G__34185;
chunk__34182 = G__34186;
count__34183 = G__34187;
i__34184 = G__34188;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34181);if(temp__4092__auto__)
{var seq__34181__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34181__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34181__$1);{
var G__34189 = cljs.core.chunk_rest.call(null,seq__34181__$1);
var G__34190 = c__4148__auto__;
var G__34191 = cljs.core.count.call(null,c__4148__auto__);
var G__34192 = 0;
seq__34181 = G__34189;
chunk__34182 = G__34190;
count__34183 = G__34191;
i__34184 = G__34192;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__34181__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34193 = cljs.core.next.call(null,seq__34181__$1);
var G__34194 = null;
var G__34195 = 0;
var G__34196 = 0;
seq__34181 = G__34193;
chunk__34182 = G__34194;
count__34183 = G__34195;
i__34184 = G__34196;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__34198 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__34198,0,null);var start_wrap = cljs.core.nth.call(null,vec__34198,1,null);var end_wrap = cljs.core.nth.call(null,vec__34198,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__34199 = wrapper.lastChild;
var G__34200 = (level - 1);
wrapper = G__34199;
level = G__34200;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj34202 = {};return obj34202;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__34203){
var mesg = cljs.core.seq(arglist__34203);
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
log.cljs$lang$applyTo = (function (arglist__34204){
var mesg = cljs.core.seq(arglist__34204);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__34205){
var contents = cljs.core.seq(arglist__34205);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__34206_SHARP_){return p1__34206_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__34207_SHARP_,p2__34208_SHARP_){return goog.dom.insertChildAt(p1__34207_SHARP_,p2__34208_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34210_SHARP_,p2__34209_SHARP_){return goog.dom.insertSiblingBefore(p2__34209_SHARP_,p1__34210_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34212_SHARP_,p2__34211_SHARP_){return goog.dom.insertSiblingAfter(p2__34211_SHARP_,p1__34212_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__34214_SHARP_,p2__34213_SHARP_){return goog.dom.replaceNode(p2__34213_SHARP_,p1__34214_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__34219_34223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34220_34224 = null;var count__34221_34225 = 0;var i__34222_34226 = 0;while(true){
if((i__34222_34226 < count__34221_34225))
{var n_34227 = cljs.core._nth.call(null,chunk__34220_34224,i__34222_34226);goog.style.setStyle(n_34227,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34228 = seq__34219_34223;
var G__34229 = chunk__34220_34224;
var G__34230 = count__34221_34225;
var G__34231 = (i__34222_34226 + 1);
seq__34219_34223 = G__34228;
chunk__34220_34224 = G__34229;
count__34221_34225 = G__34230;
i__34222_34226 = G__34231;
continue;
}
} else
{var temp__4092__auto___34232 = cljs.core.seq.call(null,seq__34219_34223);if(temp__4092__auto___34232)
{var seq__34219_34233__$1 = temp__4092__auto___34232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34219_34233__$1))
{var c__4148__auto___34234 = cljs.core.chunk_first.call(null,seq__34219_34233__$1);{
var G__34235 = cljs.core.chunk_rest.call(null,seq__34219_34233__$1);
var G__34236 = c__4148__auto___34234;
var G__34237 = cljs.core.count.call(null,c__4148__auto___34234);
var G__34238 = 0;
seq__34219_34223 = G__34235;
chunk__34220_34224 = G__34236;
count__34221_34225 = G__34237;
i__34222_34226 = G__34238;
continue;
}
} else
{var n_34239 = cljs.core.first.call(null,seq__34219_34233__$1);goog.style.setStyle(n_34239,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34240 = cljs.core.next.call(null,seq__34219_34233__$1);
var G__34241 = null;
var G__34242 = 0;
var G__34243 = 0;
seq__34219_34223 = G__34240;
chunk__34220_34224 = G__34241;
count__34221_34225 = G__34242;
i__34222_34226 = G__34243;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__34244){
var content = cljs.core.first(arglist__34244);
arglist__34244 = cljs.core.next(arglist__34244);
var name = cljs.core.first(arglist__34244);
var value = cljs.core.rest(arglist__34244);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__34249_34253 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34250_34254 = null;var count__34251_34255 = 0;var i__34252_34256 = 0;while(true){
if((i__34252_34256 < count__34251_34255))
{var n_34257 = cljs.core._nth.call(null,chunk__34250_34254,i__34252_34256);n_34257.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34258 = seq__34249_34253;
var G__34259 = chunk__34250_34254;
var G__34260 = count__34251_34255;
var G__34261 = (i__34252_34256 + 1);
seq__34249_34253 = G__34258;
chunk__34250_34254 = G__34259;
count__34251_34255 = G__34260;
i__34252_34256 = G__34261;
continue;
}
} else
{var temp__4092__auto___34262 = cljs.core.seq.call(null,seq__34249_34253);if(temp__4092__auto___34262)
{var seq__34249_34263__$1 = temp__4092__auto___34262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34249_34263__$1))
{var c__4148__auto___34264 = cljs.core.chunk_first.call(null,seq__34249_34263__$1);{
var G__34265 = cljs.core.chunk_rest.call(null,seq__34249_34263__$1);
var G__34266 = c__4148__auto___34264;
var G__34267 = cljs.core.count.call(null,c__4148__auto___34264);
var G__34268 = 0;
seq__34249_34253 = G__34265;
chunk__34250_34254 = G__34266;
count__34251_34255 = G__34267;
i__34252_34256 = G__34268;
continue;
}
} else
{var n_34269 = cljs.core.first.call(null,seq__34249_34263__$1);n_34269.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34270 = cljs.core.next.call(null,seq__34249_34263__$1);
var G__34271 = null;
var G__34272 = 0;
var G__34273 = 0;
seq__34249_34253 = G__34270;
chunk__34250_34254 = G__34271;
count__34251_34255 = G__34272;
i__34252_34256 = G__34273;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__34274){
var content = cljs.core.first(arglist__34274);
arglist__34274 = cljs.core.next(arglist__34274);
var name = cljs.core.first(arglist__34274);
var value = cljs.core.rest(arglist__34274);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__34279_34283 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34280_34284 = null;var count__34281_34285 = 0;var i__34282_34286 = 0;while(true){
if((i__34282_34286 < count__34281_34285))
{var n_34287 = cljs.core._nth.call(null,chunk__34280_34284,i__34282_34286);n_34287.removeAttribute(cljs.core.name.call(null,name));
{
var G__34288 = seq__34279_34283;
var G__34289 = chunk__34280_34284;
var G__34290 = count__34281_34285;
var G__34291 = (i__34282_34286 + 1);
seq__34279_34283 = G__34288;
chunk__34280_34284 = G__34289;
count__34281_34285 = G__34290;
i__34282_34286 = G__34291;
continue;
}
} else
{var temp__4092__auto___34292 = cljs.core.seq.call(null,seq__34279_34283);if(temp__4092__auto___34292)
{var seq__34279_34293__$1 = temp__4092__auto___34292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34279_34293__$1))
{var c__4148__auto___34294 = cljs.core.chunk_first.call(null,seq__34279_34293__$1);{
var G__34295 = cljs.core.chunk_rest.call(null,seq__34279_34293__$1);
var G__34296 = c__4148__auto___34294;
var G__34297 = cljs.core.count.call(null,c__4148__auto___34294);
var G__34298 = 0;
seq__34279_34283 = G__34295;
chunk__34280_34284 = G__34296;
count__34281_34285 = G__34297;
i__34282_34286 = G__34298;
continue;
}
} else
{var n_34299 = cljs.core.first.call(null,seq__34279_34293__$1);n_34299.removeAttribute(cljs.core.name.call(null,name));
{
var G__34300 = cljs.core.next.call(null,seq__34279_34293__$1);
var G__34301 = null;
var G__34302 = 0;
var G__34303 = 0;
seq__34279_34283 = G__34300;
chunk__34280_34284 = G__34301;
count__34281_34285 = G__34302;
i__34282_34286 = G__34303;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__34305 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__34305,0,null);var v = cljs.core.nth.call(null,vec__34305,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__34306_SHARP_){var attr = attrs__$1.item(p1__34306_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__34313_34319 = cljs.core.seq.call(null,styles);var chunk__34314_34320 = null;var count__34315_34321 = 0;var i__34316_34322 = 0;while(true){
if((i__34316_34322 < count__34315_34321))
{var vec__34317_34323 = cljs.core._nth.call(null,chunk__34314_34320,i__34316_34322);var name_34324 = cljs.core.nth.call(null,vec__34317_34323,0,null);var value_34325 = cljs.core.nth.call(null,vec__34317_34323,1,null);domina.set_style_BANG_.call(null,content,name_34324,value_34325);
{
var G__34326 = seq__34313_34319;
var G__34327 = chunk__34314_34320;
var G__34328 = count__34315_34321;
var G__34329 = (i__34316_34322 + 1);
seq__34313_34319 = G__34326;
chunk__34314_34320 = G__34327;
count__34315_34321 = G__34328;
i__34316_34322 = G__34329;
continue;
}
} else
{var temp__4092__auto___34330 = cljs.core.seq.call(null,seq__34313_34319);if(temp__4092__auto___34330)
{var seq__34313_34331__$1 = temp__4092__auto___34330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34313_34331__$1))
{var c__4148__auto___34332 = cljs.core.chunk_first.call(null,seq__34313_34331__$1);{
var G__34333 = cljs.core.chunk_rest.call(null,seq__34313_34331__$1);
var G__34334 = c__4148__auto___34332;
var G__34335 = cljs.core.count.call(null,c__4148__auto___34332);
var G__34336 = 0;
seq__34313_34319 = G__34333;
chunk__34314_34320 = G__34334;
count__34315_34321 = G__34335;
i__34316_34322 = G__34336;
continue;
}
} else
{var vec__34318_34337 = cljs.core.first.call(null,seq__34313_34331__$1);var name_34338 = cljs.core.nth.call(null,vec__34318_34337,0,null);var value_34339 = cljs.core.nth.call(null,vec__34318_34337,1,null);domina.set_style_BANG_.call(null,content,name_34338,value_34339);
{
var G__34340 = cljs.core.next.call(null,seq__34313_34331__$1);
var G__34341 = null;
var G__34342 = 0;
var G__34343 = 0;
seq__34313_34319 = G__34340;
chunk__34314_34320 = G__34341;
count__34315_34321 = G__34342;
i__34316_34322 = G__34343;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__34350_34356 = cljs.core.seq.call(null,attrs);var chunk__34351_34357 = null;var count__34352_34358 = 0;var i__34353_34359 = 0;while(true){
if((i__34353_34359 < count__34352_34358))
{var vec__34354_34360 = cljs.core._nth.call(null,chunk__34351_34357,i__34353_34359);var name_34361 = cljs.core.nth.call(null,vec__34354_34360,0,null);var value_34362 = cljs.core.nth.call(null,vec__34354_34360,1,null);domina.set_attr_BANG_.call(null,content,name_34361,value_34362);
{
var G__34363 = seq__34350_34356;
var G__34364 = chunk__34351_34357;
var G__34365 = count__34352_34358;
var G__34366 = (i__34353_34359 + 1);
seq__34350_34356 = G__34363;
chunk__34351_34357 = G__34364;
count__34352_34358 = G__34365;
i__34353_34359 = G__34366;
continue;
}
} else
{var temp__4092__auto___34367 = cljs.core.seq.call(null,seq__34350_34356);if(temp__4092__auto___34367)
{var seq__34350_34368__$1 = temp__4092__auto___34367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34350_34368__$1))
{var c__4148__auto___34369 = cljs.core.chunk_first.call(null,seq__34350_34368__$1);{
var G__34370 = cljs.core.chunk_rest.call(null,seq__34350_34368__$1);
var G__34371 = c__4148__auto___34369;
var G__34372 = cljs.core.count.call(null,c__4148__auto___34369);
var G__34373 = 0;
seq__34350_34356 = G__34370;
chunk__34351_34357 = G__34371;
count__34352_34358 = G__34372;
i__34353_34359 = G__34373;
continue;
}
} else
{var vec__34355_34374 = cljs.core.first.call(null,seq__34350_34368__$1);var name_34375 = cljs.core.nth.call(null,vec__34355_34374,0,null);var value_34376 = cljs.core.nth.call(null,vec__34355_34374,1,null);domina.set_attr_BANG_.call(null,content,name_34375,value_34376);
{
var G__34377 = cljs.core.next.call(null,seq__34350_34368__$1);
var G__34378 = null;
var G__34379 = 0;
var G__34380 = 0;
seq__34350_34356 = G__34377;
chunk__34351_34357 = G__34378;
count__34352_34358 = G__34379;
i__34353_34359 = G__34380;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__34385_34389 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34386_34390 = null;var count__34387_34391 = 0;var i__34388_34392 = 0;while(true){
if((i__34388_34392 < count__34387_34391))
{var node_34393 = cljs.core._nth.call(null,chunk__34386_34390,i__34388_34392);goog.dom.classes.add(node_34393,class$);
{
var G__34394 = seq__34385_34389;
var G__34395 = chunk__34386_34390;
var G__34396 = count__34387_34391;
var G__34397 = (i__34388_34392 + 1);
seq__34385_34389 = G__34394;
chunk__34386_34390 = G__34395;
count__34387_34391 = G__34396;
i__34388_34392 = G__34397;
continue;
}
} else
{var temp__4092__auto___34398 = cljs.core.seq.call(null,seq__34385_34389);if(temp__4092__auto___34398)
{var seq__34385_34399__$1 = temp__4092__auto___34398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34385_34399__$1))
{var c__4148__auto___34400 = cljs.core.chunk_first.call(null,seq__34385_34399__$1);{
var G__34401 = cljs.core.chunk_rest.call(null,seq__34385_34399__$1);
var G__34402 = c__4148__auto___34400;
var G__34403 = cljs.core.count.call(null,c__4148__auto___34400);
var G__34404 = 0;
seq__34385_34389 = G__34401;
chunk__34386_34390 = G__34402;
count__34387_34391 = G__34403;
i__34388_34392 = G__34404;
continue;
}
} else
{var node_34405 = cljs.core.first.call(null,seq__34385_34399__$1);goog.dom.classes.add(node_34405,class$);
{
var G__34406 = cljs.core.next.call(null,seq__34385_34399__$1);
var G__34407 = null;
var G__34408 = 0;
var G__34409 = 0;
seq__34385_34389 = G__34406;
chunk__34386_34390 = G__34407;
count__34387_34391 = G__34408;
i__34388_34392 = G__34409;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__34414_34418 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34415_34419 = null;var count__34416_34420 = 0;var i__34417_34421 = 0;while(true){
if((i__34417_34421 < count__34416_34420))
{var node_34422 = cljs.core._nth.call(null,chunk__34415_34419,i__34417_34421);goog.dom.classes.remove(node_34422,class$);
{
var G__34423 = seq__34414_34418;
var G__34424 = chunk__34415_34419;
var G__34425 = count__34416_34420;
var G__34426 = (i__34417_34421 + 1);
seq__34414_34418 = G__34423;
chunk__34415_34419 = G__34424;
count__34416_34420 = G__34425;
i__34417_34421 = G__34426;
continue;
}
} else
{var temp__4092__auto___34427 = cljs.core.seq.call(null,seq__34414_34418);if(temp__4092__auto___34427)
{var seq__34414_34428__$1 = temp__4092__auto___34427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34414_34428__$1))
{var c__4148__auto___34429 = cljs.core.chunk_first.call(null,seq__34414_34428__$1);{
var G__34430 = cljs.core.chunk_rest.call(null,seq__34414_34428__$1);
var G__34431 = c__4148__auto___34429;
var G__34432 = cljs.core.count.call(null,c__4148__auto___34429);
var G__34433 = 0;
seq__34414_34418 = G__34430;
chunk__34415_34419 = G__34431;
count__34416_34420 = G__34432;
i__34417_34421 = G__34433;
continue;
}
} else
{var node_34434 = cljs.core.first.call(null,seq__34414_34428__$1);goog.dom.classes.remove(node_34434,class$);
{
var G__34435 = cljs.core.next.call(null,seq__34414_34428__$1);
var G__34436 = null;
var G__34437 = 0;
var G__34438 = 0;
seq__34414_34418 = G__34435;
chunk__34415_34419 = G__34436;
count__34416_34420 = G__34437;
i__34417_34421 = G__34438;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__34443_34447 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34444_34448 = null;var count__34445_34449 = 0;var i__34446_34450 = 0;while(true){
if((i__34446_34450 < count__34445_34449))
{var node_34451 = cljs.core._nth.call(null,chunk__34444_34448,i__34446_34450);goog.dom.classes.toggle(node_34451,class$);
{
var G__34452 = seq__34443_34447;
var G__34453 = chunk__34444_34448;
var G__34454 = count__34445_34449;
var G__34455 = (i__34446_34450 + 1);
seq__34443_34447 = G__34452;
chunk__34444_34448 = G__34453;
count__34445_34449 = G__34454;
i__34446_34450 = G__34455;
continue;
}
} else
{var temp__4092__auto___34456 = cljs.core.seq.call(null,seq__34443_34447);if(temp__4092__auto___34456)
{var seq__34443_34457__$1 = temp__4092__auto___34456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34443_34457__$1))
{var c__4148__auto___34458 = cljs.core.chunk_first.call(null,seq__34443_34457__$1);{
var G__34459 = cljs.core.chunk_rest.call(null,seq__34443_34457__$1);
var G__34460 = c__4148__auto___34458;
var G__34461 = cljs.core.count.call(null,c__4148__auto___34458);
var G__34462 = 0;
seq__34443_34447 = G__34459;
chunk__34444_34448 = G__34460;
count__34445_34449 = G__34461;
i__34446_34450 = G__34462;
continue;
}
} else
{var node_34463 = cljs.core.first.call(null,seq__34443_34457__$1);goog.dom.classes.toggle(node_34463,class$);
{
var G__34464 = cljs.core.next.call(null,seq__34443_34457__$1);
var G__34465 = null;
var G__34466 = 0;
var G__34467 = 0;
seq__34443_34447 = G__34464;
chunk__34444_34448 = G__34465;
count__34445_34449 = G__34466;
i__34446_34450 = G__34467;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_34476__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__34472_34477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34473_34478 = null;var count__34474_34479 = 0;var i__34475_34480 = 0;while(true){
if((i__34475_34480 < count__34474_34479))
{var node_34481 = cljs.core._nth.call(null,chunk__34473_34478,i__34475_34480);goog.dom.classes.set(node_34481,classes_34476__$1);
{
var G__34482 = seq__34472_34477;
var G__34483 = chunk__34473_34478;
var G__34484 = count__34474_34479;
var G__34485 = (i__34475_34480 + 1);
seq__34472_34477 = G__34482;
chunk__34473_34478 = G__34483;
count__34474_34479 = G__34484;
i__34475_34480 = G__34485;
continue;
}
} else
{var temp__4092__auto___34486 = cljs.core.seq.call(null,seq__34472_34477);if(temp__4092__auto___34486)
{var seq__34472_34487__$1 = temp__4092__auto___34486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34472_34487__$1))
{var c__4148__auto___34488 = cljs.core.chunk_first.call(null,seq__34472_34487__$1);{
var G__34489 = cljs.core.chunk_rest.call(null,seq__34472_34487__$1);
var G__34490 = c__4148__auto___34488;
var G__34491 = cljs.core.count.call(null,c__4148__auto___34488);
var G__34492 = 0;
seq__34472_34477 = G__34489;
chunk__34473_34478 = G__34490;
count__34474_34479 = G__34491;
i__34475_34480 = G__34492;
continue;
}
} else
{var node_34493 = cljs.core.first.call(null,seq__34472_34487__$1);goog.dom.classes.set(node_34493,classes_34476__$1);
{
var G__34494 = cljs.core.next.call(null,seq__34472_34487__$1);
var G__34495 = null;
var G__34496 = 0;
var G__34497 = 0;
seq__34472_34477 = G__34494;
chunk__34473_34478 = G__34495;
count__34474_34479 = G__34496;
i__34475_34480 = G__34497;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__34502_34506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34503_34507 = null;var count__34504_34508 = 0;var i__34505_34509 = 0;while(true){
if((i__34505_34509 < count__34504_34508))
{var node_34510 = cljs.core._nth.call(null,chunk__34503_34507,i__34505_34509);goog.dom.setTextContent(node_34510,value);
{
var G__34511 = seq__34502_34506;
var G__34512 = chunk__34503_34507;
var G__34513 = count__34504_34508;
var G__34514 = (i__34505_34509 + 1);
seq__34502_34506 = G__34511;
chunk__34503_34507 = G__34512;
count__34504_34508 = G__34513;
i__34505_34509 = G__34514;
continue;
}
} else
{var temp__4092__auto___34515 = cljs.core.seq.call(null,seq__34502_34506);if(temp__4092__auto___34515)
{var seq__34502_34516__$1 = temp__4092__auto___34515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34502_34516__$1))
{var c__4148__auto___34517 = cljs.core.chunk_first.call(null,seq__34502_34516__$1);{
var G__34518 = cljs.core.chunk_rest.call(null,seq__34502_34516__$1);
var G__34519 = c__4148__auto___34517;
var G__34520 = cljs.core.count.call(null,c__4148__auto___34517);
var G__34521 = 0;
seq__34502_34506 = G__34518;
chunk__34503_34507 = G__34519;
count__34504_34508 = G__34520;
i__34505_34509 = G__34521;
continue;
}
} else
{var node_34522 = cljs.core.first.call(null,seq__34502_34516__$1);goog.dom.setTextContent(node_34522,value);
{
var G__34523 = cljs.core.next.call(null,seq__34502_34516__$1);
var G__34524 = null;
var G__34525 = 0;
var G__34526 = 0;
seq__34502_34506 = G__34523;
chunk__34503_34507 = G__34524;
count__34504_34508 = G__34525;
i__34505_34509 = G__34526;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__34531_34535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34532_34536 = null;var count__34533_34537 = 0;var i__34534_34538 = 0;while(true){
if((i__34534_34538 < count__34533_34537))
{var node_34539 = cljs.core._nth.call(null,chunk__34532_34536,i__34534_34538);goog.dom.forms.setValue(node_34539,value);
{
var G__34540 = seq__34531_34535;
var G__34541 = chunk__34532_34536;
var G__34542 = count__34533_34537;
var G__34543 = (i__34534_34538 + 1);
seq__34531_34535 = G__34540;
chunk__34532_34536 = G__34541;
count__34533_34537 = G__34542;
i__34534_34538 = G__34543;
continue;
}
} else
{var temp__4092__auto___34544 = cljs.core.seq.call(null,seq__34531_34535);if(temp__4092__auto___34544)
{var seq__34531_34545__$1 = temp__4092__auto___34544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34531_34545__$1))
{var c__4148__auto___34546 = cljs.core.chunk_first.call(null,seq__34531_34545__$1);{
var G__34547 = cljs.core.chunk_rest.call(null,seq__34531_34545__$1);
var G__34548 = c__4148__auto___34546;
var G__34549 = cljs.core.count.call(null,c__4148__auto___34546);
var G__34550 = 0;
seq__34531_34535 = G__34547;
chunk__34532_34536 = G__34548;
count__34533_34537 = G__34549;
i__34534_34538 = G__34550;
continue;
}
} else
{var node_34551 = cljs.core.first.call(null,seq__34531_34545__$1);goog.dom.forms.setValue(node_34551,value);
{
var G__34552 = cljs.core.next.call(null,seq__34531_34545__$1);
var G__34553 = null;
var G__34554 = 0;
var G__34555 = 0;
seq__34531_34535 = G__34552;
chunk__34532_34536 = G__34553;
count__34533_34537 = G__34554;
i__34534_34538 = G__34555;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_34566 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__34562_34567 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34563_34568 = null;var count__34564_34569 = 0;var i__34565_34570 = 0;while(true){
if((i__34565_34570 < count__34564_34569))
{var node_34571 = cljs.core._nth.call(null,chunk__34563_34568,i__34565_34570);node_34571.innerHTML = value_34566;
{
var G__34572 = seq__34562_34567;
var G__34573 = chunk__34563_34568;
var G__34574 = count__34564_34569;
var G__34575 = (i__34565_34570 + 1);
seq__34562_34567 = G__34572;
chunk__34563_34568 = G__34573;
count__34564_34569 = G__34574;
i__34565_34570 = G__34575;
continue;
}
} else
{var temp__4092__auto___34576 = cljs.core.seq.call(null,seq__34562_34567);if(temp__4092__auto___34576)
{var seq__34562_34577__$1 = temp__4092__auto___34576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34562_34577__$1))
{var c__4148__auto___34578 = cljs.core.chunk_first.call(null,seq__34562_34577__$1);{
var G__34579 = cljs.core.chunk_rest.call(null,seq__34562_34577__$1);
var G__34580 = c__4148__auto___34578;
var G__34581 = cljs.core.count.call(null,c__4148__auto___34578);
var G__34582 = 0;
seq__34562_34567 = G__34579;
chunk__34563_34568 = G__34580;
count__34564_34569 = G__34581;
i__34565_34570 = G__34582;
continue;
}
} else
{var node_34583 = cljs.core.first.call(null,seq__34562_34577__$1);node_34583.innerHTML = value_34566;
{
var G__34584 = cljs.core.next.call(null,seq__34562_34577__$1);
var G__34585 = null;
var G__34586 = 0;
var G__34587 = 0;
seq__34562_34567 = G__34584;
chunk__34563_34568 = G__34585;
count__34564_34569 = G__34586;
i__34565_34570 = G__34587;
continue;
}
}
} else
{}
}
break;
}
}catch (e34561){if((e34561 instanceof Error))
{var e_34588 = e34561;domina.replace_children_BANG_.call(null,content,value_34566);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34561;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__34595_34599 = cljs.core.seq.call(null,children);var chunk__34596_34600 = null;var count__34597_34601 = 0;var i__34598_34602 = 0;while(true){
if((i__34598_34602 < count__34597_34601))
{var child_34603 = cljs.core._nth.call(null,chunk__34596_34600,i__34598_34602);frag.appendChild(child_34603);
{
var G__34604 = seq__34595_34599;
var G__34605 = chunk__34596_34600;
var G__34606 = count__34597_34601;
var G__34607 = (i__34598_34602 + 1);
seq__34595_34599 = G__34604;
chunk__34596_34600 = G__34605;
count__34597_34601 = G__34606;
i__34598_34602 = G__34607;
continue;
}
} else
{var temp__4092__auto___34608 = cljs.core.seq.call(null,seq__34595_34599);if(temp__4092__auto___34608)
{var seq__34595_34609__$1 = temp__4092__auto___34608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34595_34609__$1))
{var c__4148__auto___34610 = cljs.core.chunk_first.call(null,seq__34595_34609__$1);{
var G__34611 = cljs.core.chunk_rest.call(null,seq__34595_34609__$1);
var G__34612 = c__4148__auto___34610;
var G__34613 = cljs.core.count.call(null,c__4148__auto___34610);
var G__34614 = 0;
seq__34595_34599 = G__34611;
chunk__34596_34600 = G__34612;
count__34597_34601 = G__34613;
i__34598_34602 = G__34614;
continue;
}
} else
{var child_34615 = cljs.core.first.call(null,seq__34595_34609__$1);frag.appendChild(child_34615);
{
var G__34616 = cljs.core.next.call(null,seq__34595_34609__$1);
var G__34617 = null;
var G__34618 = 0;
var G__34619 = 0;
seq__34595_34599 = G__34616;
chunk__34596_34600 = G__34617;
count__34597_34601 = G__34618;
i__34598_34602 = G__34619;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34589_SHARP_,p2__34590_SHARP_){return f.call(null,p1__34589_SHARP_,p2__34590_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__34621 = list_thing;if(G__34621)
{var bit__4050__auto__ = (G__34621.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__34621.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34621);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34621);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__34622 = content;if(G__34622)
{var bit__4050__auto__ = (G__34622.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__34622.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34622);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__34623 = content;if(G__34623)
{var bit__4050__auto__ = (G__34623.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__34623.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34623);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
